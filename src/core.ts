import { ApiError, fleetRequest } from './fleet';
import { acceptHandshake, b64, commandResponse, commands, encodeCommand, handshakeRequest, hex, random, signCommand, unb64, utf8, VehicleError, type Session } from './protocol';
import { regionConfig, DEFAULT_SCOPES } from './regions';
import type { BridgeEnv, OwnerContext } from './types';
import { json } from './http';
export { errorResponse } from './http';
import { errorResponse } from './http';
function html(body: string, status = 200, headers: HeadersInit = {}) {
  return new Response(body, { status, headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store', 'Referrer-Policy': 'no-referrer', 'X-Content-Type-Options': 'nosniff', 'Content-Security-Policy': "default-src 'none'; script-src 'unsafe-inline'; style-src 'unsafe-inline'; connect-src 'self'; form-action 'self'; frame-ancestors 'none'; base-uri 'none'", ...headers } });
}
async function equalSecret(a: string, b: string) {
  if (!a || !b) return false;
  const key = await crypto.subtle.importKey('raw', utf8(b), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const candidate = await crypto.subtle.importKey('raw', utf8(a), { name: 'HMAC', hash: 'SHA-256' }, false, ['verify']);
  const signature = await crypto.subtle.sign('HMAC', key, utf8('bridge authentication'));
  return crypto.subtle.verify('HMAC', candidate, signature, utf8('bridge authentication'));
}

async function readJson(request: Request): Promise<Record<string, any>> {
  const reader = request.body?.getReader(); if (!reader) return {};
  const chunks: Uint8Array[] = []; let size = 0;
  while (true) { const { done, value } = await reader.read(); if (done) break; size += value.length; if (size > 16384) { await reader.cancel(); throw new ApiError(413, 'body_too_large', '请求正文不能超过 16KB'); } chunks.push(value); }
  const out = new Uint8Array(size); let offset = 0; for (const b of chunks) { out.set(b, offset); offset += b.length; }
  try { const data = JSON.parse(new TextDecoder().decode(out) || '{}'); if (!data || Array.isArray(data) || typeof data !== 'object') throw 0; return data; }
  catch { throw new ApiError(400, 'invalid_json', '正文必须是 JSON 对象'); }
}
interface Tokens { access_token: string; refresh_token: string; expires_at: number; scope?: string; }
interface Idempotency { state: 'pending' | 'complete'; fingerprint: string; expires: number; status?: number; body?: string; }
export class OwnerAccountCore {
  constructor(private ctx: OwnerContext, private env: BridgeEnv) {}
  private get endpoints() { return regionConfig(this.env.TESLA_REGION); }
  private serial: Promise<unknown> = Promise.resolve();
  async fetch(request: Request) {
    // Serialize refresh, counters and commands in this single-owner Durable Object.
    const task = this.serial.then(() => this.handle(request).catch(errorResponse));
    this.serial = task.then(() => undefined, () => undefined);
    return task;
  }
  private async cipherKey() { return crypto.subtle.importKey('raw', unb64(this.env.TOKEN_ENCRYPTION_KEY) as BufferSource, 'AES-GCM', false, ['encrypt', 'decrypt']); }
  private async putSecret(key: string, value: unknown) {
    const iv = random(12);
    const encrypted = await crypto.subtle.encrypt({ name: 'AES-GCM', iv: iv as BufferSource, additionalData: utf8(key) }, await this.cipherKey(), utf8(JSON.stringify(value)));
    await this.ctx.storage.put(key, { iv: b64(iv), data: b64(new Uint8Array(encrypted)) });
  }
  private async getSecret<T>(key: string): Promise<T | undefined> {
    const stored = await this.ctx.storage.get<{ iv: string; data: string }>(key); if (!stored) return;
    const data = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: unb64(stored.iv) as BufferSource, additionalData: utf8(key) }, await this.cipherKey(), unb64(stored.data) as BufferSource);
    return JSON.parse(new TextDecoder().decode(data));
  }
  private async tokenRequest(fields: Record<string, string>): Promise<any> {
    const response = await fetch(this.endpoints.token, { method: 'POST', body: new URLSearchParams(fields), redirect: 'manual', signal: AbortSignal.timeout(20000) });
    const data: any = await response.json();
    if (!response.ok || !data.access_token) throw new ApiError(409, 'tesla_authorization_failed', 'Tesla 令牌交换失败，请重新授权', { status: response.status, error: data.error });
    return data;
  }
  private async accessToken() {
    let tokens = await this.getSecret<Tokens>('tokens');
    if (!tokens) throw new ApiError(428, 'owner_authorization_required', '请先打开 /setup 完成车主授权');
    if (tokens.expires_at < Date.now() + 120000) {
      const data = await this.tokenRequest({ grant_type: 'refresh_token', client_id: this.env.TESLA_CLIENT_ID, refresh_token: tokens.refresh_token });
      if (!data.refresh_token) throw new ApiError(502, 'missing_refresh_token', 'Tesla 未返回新的刷新令牌');
      tokens = { access_token: data.access_token, refresh_token: data.refresh_token, expires_at: Date.now() + data.expires_in * 1000, scope: data.scope || tokens.scope };
      await this.putSecret('tokens', tokens); // Rotating refresh token saved before any further calls.
    }
    return tokens.access_token;
  }
  private async fleet(path: string, method = 'GET', body?: unknown, explicitToken?: string): Promise<any> {
    const token = explicitToken || await this.accessToken();
    return fleetRequest(this.endpoints.fleet + path, token, method, body);
  }
  private async vehicles() {
    const result = await this.fleet('/api/1/vehicles');
    const vins = (result.response || []).map((x: any) => x.vin).filter((vin: any) => typeof vin === 'string');
    await this.putSecret('allowed_vins', vins); return result;
  }
  private async validateVin(vin: string) {
    if (!/^[A-HJ-NPR-Z0-9]{17}$/.test(vin)) throw new ApiError(400, 'invalid_vin', '需要 17 位 VIN，不能使用车辆数字 ID');
    let allowed = await this.getSecret<string[]>('allowed_vins');
    if (!allowed) { await this.vehicles(); allowed = await this.getSecret<string[]>('allowed_vins'); }
    if (!allowed?.includes(vin)) throw new ApiError(403, 'vehicle_not_authorized', '该车辆不在当前授权范围');
  }
  private async establishSession(vin: string, domain: number, force = false) {
    const storageKey = 'session:' + vin + ':' + domain;
    let session = await this.getSecret<Session>(storageKey);
    const pub = unb64(this.env.PUBLIC_KEY_RAW);
    if (force || !session || Date.now() - session.clockZero > 86400000 * 10) {
      const handshake = handshakeRequest(domain, pub);
      const response = await this.fleet('/api/1/vehicles/' + vin + '/signed_command', 'POST', { routable_message: b64(handshake.message) });
      if (typeof response.response !== 'string') throw new ApiError(502, 'invalid_handshake_response', 'Tesla 返回的会话响应格式不正确');
      session = await acceptHandshake(vin, domain, this.env.TESLA_PRIVATE_KEY_PKCS8, unb64(response.response), handshake.uuid, handshake.route, session);
      await this.putSecret(storageKey, session);
    }
    return session;
  }
  private async signed(vin: string, command: string, body: Record<string, any>) {
    const { domain, payload } = encodeCommand(command, body);
    const storageKey = 'session:' + vin + ':' + domain;
    const pub = unb64(this.env.PUBLIC_KEY_RAW);
    const session = await this.establishSession(vin, domain);
    const request = await signCommand(vin, domain, pub, session, payload);
    await this.putSecret(storageKey, session); // Reserve anti-replay counter before transmission.
    const response = await this.fleet('/api/1/vehicles/' + vin + '/signed_command', 'POST', { routable_message: b64(request.message) });
    if (typeof response.response !== 'string') throw new VehicleError('invalid_command_response', 'Tesla 响应格式不正确，执行结果未知', true);
    try { return await commandResponse(vin, domain, session, unb64(response.response), request); }
    catch (error) {
      if (error instanceof VehicleError && error.fault && [3, 4, 5, 6, 15, 17, 27].includes(error.fault)) await this.ctx.storage.delete(storageKey);
      throw error; // Never automatically repeat a physical command.
    }
  }
  private async idempotent(request: Request, body: Record<string, any>, action: () => Promise<any>) {
    const key = request.headers.get('Idempotency-Key') || '';
    if (!/^[A-Za-z0-9._:-]{16,128}$/.test(key)) throw new ApiError(400, 'idempotency_key_required', '控制请求需要 16–128 字符的 Idempotency-Key');
    const fingerprint = hex(new Uint8Array(await crypto.subtle.digest('SHA-256', utf8(new URL(request.url).pathname + '\n' + JSON.stringify(body)))));
    const storageKey = 'idem:' + key;
    const previous = await this.getSecret<Idempotency>(storageKey);
    if (previous && previous.expires > Date.now()) {
      if (previous.fingerprint !== fingerprint) throw new ApiError(409, 'idempotency_conflict', '同一 Idempotency-Key 不能用于不同请求');
      if (previous.state === 'pending') throw new VehicleError('execution_unknown', '此前请求执行结果未知，请查询车况后再决定是否发送新请求', true);
      return new Response(previous.body, { status: previous.status, headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store', 'Idempotency-Replayed': 'true' } });
    }
    const record: Idempotency = { state: 'pending', fingerprint, expires: Date.now() + 86400000 };
    await this.putSecret(storageKey, record);
    const scheduled = await this.ctx.storage.getAlarm();
    if (scheduled === null || scheduled > record.expires) await this.ctx.storage.setAlarm(record.expires);
    let response: Response;
    try { response = json(await action()); } catch (error) { response = errorResponse(error); }
    record.state = 'complete'; record.status = response.status; record.body = await response.clone().text();
    await this.putSecret(storageKey, record);
    return response;
  }
  async alarm() {
    const records = await this.ctx.storage.list({ prefix: 'idem:' });
    for (const key of records.keys()) { const value = await this.getSecret<Idempotency>(key); if (value && value.expires <= Date.now()) await this.ctx.storage.delete(key); }
    if ((await this.ctx.storage.list({ prefix: 'idem:', limit: 1 })).size) await this.ctx.storage.setAlarm(Date.now() + 86400000);
  }
  private async handle(request: Request): Promise<Response> {
    const url = new URL(request.url), path = url.pathname;
    if (path === '/v1/auth/start' && request.method === 'POST') {
      const state = hex(random(32));
      await this.putSecret('oauth_state', { state, expires: Date.now() + 600000 });
      const authorize = new URL(this.endpoints.auth + '/authorize');
      authorize.search = new URLSearchParams({ response_type: 'code', client_id: this.env.TESLA_CLIENT_ID, redirect_uri: this.env.APP_ORIGIN + '/callback', scope: this.env.TESLA_SCOPES || DEFAULT_SCOPES, state, nonce: hex(random(16)), locale: 'zh-CN' }).toString();
      const response = json({ authorize_url: authorize.toString(), expires_in: 600 });
      response.headers.set('Set-Cookie', '__Host-tesla_oauth=' + state + '; Path=/; Secure; HttpOnly; SameSite=Lax; Max-Age=600'); return response;
    }
    if (path === '/callback' && request.method === 'GET') {
      const saved = await this.getSecret<{ state: string; expires: number }>('oauth_state');
      const state = url.searchParams.get('state') || '';
      const cookie = request.headers.get('Cookie')?.split(';').map(x => x.trim()).find(x => x.startsWith('__Host-tesla_oauth='))?.split('=')[1];
      if (!saved || saved.expires < Date.now() || !(await equalSecret(state, saved.state)) || cookie !== state) throw new ApiError(400, 'invalid_oauth_state', '授权会话过期或浏览器不匹配，请从 /setup 重新开始');
      await this.ctx.storage.delete('oauth_state');
      const code = url.searchParams.get('code');
      if (!code || url.searchParams.has('error')) return html('<h1>授权未完成</h1><p>请返回 /setup 重试。</p>', 400);
      const data = await this.tokenRequest({ grant_type: 'authorization_code', client_id: this.env.TESLA_CLIENT_ID, client_secret: this.env.TESLA_CLIENT_SECRET, code, audience: this.endpoints.fleet, redirect_uri: this.env.APP_ORIGIN + '/callback' });
      if (!data.refresh_token) throw new ApiError(409, 'offline_access_required', '授权需要 offline_access 权限');
      await this.putSecret('tokens', { access_token: data.access_token, refresh_token: data.refresh_token, expires_at: Date.now() + data.expires_in * 1000, scope: data.scope });
      await this.ctx.storage.delete('allowed_vins');
      const sessions = await this.ctx.storage.list({ prefix: 'session:' }); for (const key of sessions.keys()) await this.ctx.storage.delete(key);
      return html('<h1>Tesla 账户授权已保存</h1><p>请在手机 Tesla App 中添加车辆虚拟钥匙。</p><a href="' + this.endpoints.pairing + '/_ak/' + new URL(this.env.APP_ORIGIN).hostname + '">在 Tesla App 添加虚拟钥匙</a><p>完成后可由调用方查询车辆列表和配对状态。</p>', 200, { 'Set-Cookie': '__Host-tesla_oauth=; Path=/; Secure; HttpOnly; SameSite=Lax; Max-Age=0' });
    }
    if (path === '/v1/auth/status' && request.method === 'GET') {
      const tokens = await this.getSecret<Tokens>('tokens');
      return json({ authorized: !!tokens, access_token_expires_at: tokens ? new Date(tokens.expires_at).toISOString() : null, pairing_url: this.endpoints.pairing + '/_ak/' + new URL(this.env.APP_ORIGIN).hostname });
    }
    if (path === '/v1/setup/register' && request.method === 'POST') {
      const partner = await this.tokenRequest({ grant_type: 'client_credentials', client_id: this.env.TESLA_CLIENT_ID, client_secret: this.env.TESLA_CLIENT_SECRET, audience: this.endpoints.fleet, scope: 'openid vehicle_device_data vehicle_cmds vehicle_charging_cmds' });
      return json(await this.fleet('/api/1/partner_accounts', 'POST', { domain: new URL(this.env.APP_ORIGIN).hostname }, partner.access_token));
    }
    if (path === '/v1/capabilities' && request.method === 'GET') return json({ region: this.endpoints.region, commands, automatic_wake: false, requires_idempotency_key: true, units: { temperature: 'celsius', volume: '0–10' } });
    if (path === '/api/1/vehicles' && request.method === 'GET') return json(await this.vehicles());
    const route = path.match(/^\/api\/1\/vehicles\/([A-HJ-NPR-Z0-9]{17})(?:\/(vehicle_data|wake_up|fleet_status|key_status|command\/([a-z_]+)))?$/);
    if (!route) throw new ApiError(404, 'not_found', '接口不存在');
    const vin = route[1], endpoint = route[2], command = route[3];
    await this.validateVin(vin);
    if (request.method === 'GET' && !endpoint) return json(await this.fleet('/api/1/vehicles/' + vin));
    if (request.method === 'GET' && endpoint === 'vehicle_data') {
      const valid = ['charge_state', 'climate_state', 'vehicle_state', 'vehicle_config', 'gui_settings', 'closures_state', 'drive_state', 'location_data', 'charge_schedule_data', 'preconditioning_schedule_data'];
      const endpoints = url.searchParams.get('endpoints') || 'charge_state;climate_state;vehicle_state;vehicle_config';
      if (endpoints.split(';').some(x => !valid.includes(x))) throw new ApiError(400, 'invalid_endpoints', '包含不支持的车况端点');
      return json(await this.fleet('/api/1/vehicles/' + vin + '/vehicle_data?endpoints=' + encodeURIComponent(endpoints)));
    }
    if (request.method === 'GET' && endpoint === 'fleet_status') return json(await this.fleet('/api/1/vehicles/fleet_status', 'POST', { vins: [vin] }));
    if (request.method === 'GET' && endpoint === 'key_status') {
      await this.establishSession(vin, 2, true);
      await this.establishSession(vin, 3, true);
      return json({ response: { security_session_authenticated: true, infotainment_session_authenticated: true, physical_command_sent: false } });
    }
    if (request.method === 'POST' && endpoint === 'wake_up') return this.idempotent(request, {}, () => this.fleet('/api/1/vehicles/' + vin + '/wake_up', 'POST', {}));
    if (request.method === 'POST' && command) {
      const body = await readJson(request);
      if (!commands.includes(command)) throw new ApiError(400, 'unsupported_command', '不支持此控制指令');
      if (command === 'navigation_request') {
        if (body.type !== 'share_ext_content_raw' || typeof body.value !== 'string' || !body.value.trim() || body.value.length > 2048) throw new ApiError(400, 'invalid_navigation', '导航需要 type=share_ext_content_raw 和目的地 value');
        return this.idempotent(request, body, () => this.fleet('/api/1/vehicles/' + vin + '/command/navigation_request', 'POST', { type: body.type, value: body.value, locale: 'zh-CN', timestamp_ms: String(Date.now()) }));
      }
      encodeCommand(command, body); // Validate before creating a pending operation.
      return this.idempotent(request, body, () => this.signed(vin, command, body));
    }
    throw new ApiError(405, 'method_not_allowed', '请求方法不支持');
  }
}
