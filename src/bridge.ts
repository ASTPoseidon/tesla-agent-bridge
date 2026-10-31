import type { BridgeEnv } from './types';
import { ApiError } from './fleet';
import { utf8 } from './protocol';
import { regionConfig } from './regions';
import { json, errorResponse } from './http';
import { serveMcp } from './mcp';
import { setupPage } from './setup-page';
import openapi from '../openapi.json';

async function equalSecret(candidate: string, secret = '') {
  if (!candidate || !secret) return false;
  const key = await crypto.subtle.importKey('raw', utf8(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const verifier = await crypto.subtle.importKey('raw', utf8(candidate), { name: 'HMAC', hash: 'SHA-256' }, false, ['verify']);
  return crypto.subtle.verify('HMAC', verifier, await crypto.subtle.sign('HMAC', key, utf8('bridge authentication')), utf8('bridge authentication'));
}
function allowedOrigins(env: BridgeEnv) {
  return new Set([new URL(env.APP_ORIGIN).origin, ...(env.CORS_ORIGINS || '').split(',').map(value => value.trim()).filter(Boolean)]);
}
async function dispatch(request: Request, env: BridgeEnv): Promise<Response> {
  const origin = request.headers.get('Origin');
  if (origin && !allowedOrigins(env).has(origin)) throw new ApiError(403, 'origin_not_allowed', '此网页来源未获允许');
  const url = new URL(request.url);
  if (request.method === 'OPTIONS') return new Response(null, { status: 204 });
  if (['GET', 'HEAD'].includes(request.method) && url.pathname === '/health') {
    const response = json({ status: 'ok', region: regionConfig(env.TESLA_REGION).region, service: 'tesla-agent-bridge' });
    return request.method === 'HEAD' ? new Response(null, response) : response;
  }
  if (request.method === 'GET' && url.pathname === '/.well-known/appspecific/com.tesla.3p.public-key.pem') {
    if (!env.PUBLIC_KEY_PEM) throw new ApiError(503, 'not_configured', '尚未配置公钥');
    return new Response(env.PUBLIC_KEY_PEM, { headers: { 'Content-Type': 'application/x-pem-file', 'Cache-Control': 'public, max-age=300' } });
  }
  if (request.method === 'GET' && ['/openapi.json','/openapi.agent.json'].includes(url.pathname)) {
    const paths = url.pathname === '/openapi.agent.json'
      ? Object.fromEntries(Object.entries(openapi.paths).filter(([path]) => !path.startsWith('/v1/auth') && !path.startsWith('/v1/setup')))
      : openapi.paths;
    return json({ ...openapi, paths, servers: [{ url: env.APP_ORIGIN }] });
  }
  if (request.method === 'GET' && ['/', '/setup'].includes(url.pathname)) return setupPage(env);
  const callback = request.method === 'GET' && url.pathname === '/callback';
  const headers = new Headers(request.headers);
  headers.delete('X-Bridge-Admin'); headers.delete('Authorization');
  if (!callback) {
    const bearer = request.headers.get('Authorization')?.replace(/^Bearer /, '') || '';
    const admin = await equalSecret(bearer, env.ADMIN_KEY);
    const control = await equalSecret(bearer, env.API_KEY);
    const readonly = await equalSecret(bearer, env.READONLY_API_KEY);
    if (!admin && !control && !readonly) return new Response(JSON.stringify({ error: 'unauthorized', message: '需要有效 Bearer API 密钥' }), {
      status: 401, headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store', 'WWW-Authenticate': 'Bearer realm="tesla-agent-bridge"' },
    });
    if (url.pathname === '/mcp') {
      if (admin) throw new ApiError(403, 'agent_key_required', 'MCP 请使用调用方或只读密钥，不要使用管理密钥');
      return serveMcp(request, control && env.MCP_ALLOW_CONTROL === 'true', inner => bridgeFetch(inner, env));
    }
    if (url.pathname.startsWith('/v1/auth') || url.pathname.startsWith('/v1/setup')) {
      if (!admin) throw new ApiError(403, 'admin_required', '需要管理密钥');
    }
    if (readonly && !admin && !control && request.method !== 'GET') throw new ApiError(403, 'readonly_key', '此密钥仅允许查询');
    headers.set('X-Bridge-Admin', admin ? 'yes' : 'no');
  }
  return env.OWNER.get(env.OWNER.idFromName('personal-owner')).fetch(new Request(request, { headers }));
}
export async function bridgeFetch(request: Request, env: BridgeEnv): Promise<Response> {
  let response: Response;
  try { response = await dispatch(request, env); } catch (error) { response = errorResponse(error); }
  const origin = request.headers.get('Origin');
  if (origin && allowedOrigins(env).has(origin)) {
    const headers = new Headers(response.headers);
    headers.set('Access-Control-Allow-Origin', origin); headers.set('Vary', 'Origin');
    headers.set('Access-Control-Allow-Methods', 'GET,HEAD,POST,OPTIONS');
    headers.set('Access-Control-Allow-Headers', 'Authorization,Content-Type,Idempotency-Key,MCP-Protocol-Version');
    headers.set('Access-Control-Expose-Headers', 'Idempotency-Replayed');
    return new Response(response.body, { status: response.status, headers });
  }
  return response;
}
