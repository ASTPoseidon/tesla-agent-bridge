// Implements Tesla's published Vehicle Command Protocol using native WebCrypto.
// Protocol and schemas: teslamotors/vehicle-command, commit d6239bf377b8a5859e8f5c9d64409df2a057934a.
import { UniversalMessage, Signatures, CarServer, VCSEC } from './tesla-proto.js';
import { encodeNavigationGps } from './navigation';

export const utf8 = (s: string) => new TextEncoder().encode(s);
export const b64 = (b: Uint8Array) => btoa(String.fromCharCode(...b));
export const unb64 = (s: string) => Uint8Array.from(atob(s), c => c.charCodeAt(0));
export const random = (n: number) => crypto.getRandomValues(new Uint8Array(n));
export const hex = (b: Uint8Array) => [...b].map(x => x.toString(16).padStart(2, '0')).join('');
export const concat = (...parts: Uint8Array[]) => {
  const out = new Uint8Array(parts.reduce((n, b) => n + b.length, 0));
  let offset = 0; for (const b of parts) { out.set(b, offset); offset += b.length; } return out;
};
const buf = (b: Uint8Array) => b as BufferSource;
export const u32 = (v: number) => { const b = new Uint8Array(4); new DataView(b.buffer).setUint32(0, v); return b; };
export function metadata(items: [number, Uint8Array][]) {
  let last = -1;
  return concat(...items.map(([tag, value]) => {
    if (tag <= last || value.length > 255) throw new Error('Invalid metadata');
    last = tag; return concat(Uint8Array.of(tag, value.length), value);
  }), Uint8Array.of(255));
}
export async function hmac(key: Uint8Array, message: Uint8Array) {
  const k = await crypto.subtle.importKey('raw', buf(key), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  return new Uint8Array(await crypto.subtle.sign('HMAC', k, buf(message)));
}
async function verifyHmac(key: Uint8Array, signature: Uint8Array, data: Uint8Array) {
  const k = await crypto.subtle.importKey('raw', buf(key), { name: 'HMAC', hash: 'SHA-256' }, false, ['verify']);
  return crypto.subtle.verify('HMAC', k, buf(signature), buf(data));
}
export async function sharedKey(privatePKCS8: string, peerPublic: Uint8Array) {
  const privateKey = await crypto.subtle.importKey('pkcs8', buf(unb64(privatePKCS8)), { name: 'ECDH', namedCurve: 'P-256' }, false, ['deriveBits']);
  const publicKey = await crypto.subtle.importKey('raw', buf(peerPublic), { name: 'ECDH', namedCurve: 'P-256' }, false, []);
  const shared = await crypto.subtle.deriveBits({ name: 'ECDH', public: publicKey }, privateKey, 256);
  return new Uint8Array(await crypto.subtle.digest('SHA-1', shared)).slice(0, 16);
}
export interface Session { key: string; epoch: string; counter: number; clockZero: number; authenticatedClock: number; }
export class VehicleError extends Error {
  constructor(public code: string, message: string, public uncertain = false, public fault?: number, public details?: Record<string, string | number>) { super(message); }
}
export function handshakeRequest(domain: number, publicKey: Uint8Array) {
  const uuid = random(16), route = random(16);
  const message = { to_destination: { domain }, from_destination: { routing_address: route }, session_info_request: { public_key: publicKey }, uuid };
  return { message: UniversalMessage.RoutableMessage.encode(message).finish(), uuid, route };
}
function checkRoute(reply: any, domain: number, uuid: Uint8Array, route: Uint8Array) {
  if (reply.from_destination?.domain !== domain || hex(reply.to_destination?.routing_address || new Uint8Array()) !== hex(route))
    throw new VehicleError('invalid_response_route', '车辆响应路由不匹配', true);
  if (reply.request_uuid?.length && hex(reply.request_uuid) !== hex(uuid))
    throw new VehicleError('invalid_response_uuid', '车辆响应标识不匹配', true);
}
export async function acceptHandshake(vin: string, domain: number, privateKey: string, raw: Uint8Array, uuid: Uint8Array, route: Uint8Array, previous?: Session) {
  const reply: any = UniversalMessage.RoutableMessage.decode(raw);
  checkRoute(reply, domain, uuid, route);
  const fault = reply.signedMessageStatus?.signed_message_fault || 0;
  if (fault) throw new VehicleError('handshake_rejected', '车辆拒绝会话，请检查虚拟钥匙或车辆在线状态', false, fault);
  if (!reply.session_info?.length) throw new VehicleError('missing_session', '车辆未返回会话信息');
  const info: any = Signatures.SessionInfo.decode(reply.session_info);
  if (info.status === 1) throw new VehicleError('key_not_paired', '请先在 Tesla App 中添加虚拟钥匙');
  if (info.publicKey?.length !== 65 || info.epoch?.length !== 16) throw new VehicleError('invalid_session', '车辆会话格式错误');
  const key = await sharedKey(privateKey, info.publicKey);
  const authKey = await hmac(key, utf8('session info'));
  const data = concat(metadata([[0, Uint8Array.of(6)], [2, utf8(vin)], [6, uuid]]), reply.session_info);
  const tag = reply.signature_data?.session_info_tag?.tag;
  if (!tag || !(await verifyHmac(authKey, tag, data))) throw new VehicleError('invalid_session_tag', '车辆会话校验失败');
  const sameEpoch = previous?.epoch === b64(info.epoch);
  if (sameEpoch && info.clock_time < previous!.authenticatedClock) throw new VehicleError('stale_session', '车辆返回了过期会话');
  return { key: b64(key), epoch: b64(info.epoch), counter: sameEpoch ? Math.max(previous!.counter, info.counter) : info.counter, clockZero: Date.now() - info.clock_time * 1000, authenticatedClock: info.clock_time } as Session;
}
export async function signCommand(vin: string, domain: number, publicKey: Uint8Array, session: Session, payload: Uint8Array) {
  if (session.counter >= 0xfffffffe) throw new VehicleError('session_exhausted', '需要重新握手');
  const counter = ++session.counter;
  const expires = Math.floor((Date.now() - session.clockZero) / 1000) + 15;
  const epoch = unb64(session.epoch), flags = 2, uuid = random(16), route = random(16);
  const meta = metadata([[0, Uint8Array.of(8)], [1, Uint8Array.of(domain)], [2, utf8(vin)], [3, epoch], [4, u32(expires)], [5, u32(counter)], [7, u32(flags)]]);
  const authKey = await hmac(unb64(session.key), utf8('authenticated command'));
  const tag = await hmac(authKey, concat(meta, payload));
  const message = { to_destination: { domain }, from_destination: { routing_address: route }, protobuf_message_as_bytes: payload,
    signature_data: { signer_identity: { public_key: publicKey }, HMAC_Personalized_data: { epoch, counter, expires_at: expires, tag } }, uuid, flags };
  return { message: UniversalMessage.RoutableMessage.encode(message).finish(), tag, uuid, route, responseCounters: new Set<number>() };
}
export async function commandResponse(vin: string, domain: number, session: Session, raw: Uint8Array, request: Awaited<ReturnType<typeof signCommand>>) {
  const reply: any = UniversalMessage.RoutableMessage.decode(raw);
  checkRoute(reply, domain, request.uuid, request.route);
  const fault = reply.signedMessageStatus?.signed_message_fault || 0;
  let payload: Uint8Array = reply.protobuf_message_as_bytes || new Uint8Array();
  const signature = reply.signature_data?.AES_GCM_Response_data;
  if (signature) {
    if (request.responseCounters.has(signature.counter)) throw new VehicleError('response_replayed', '车辆响应计数器已使用，拒绝重复响应', true);
    const requestHash = concat(Uint8Array.of(8), domain === 2 ? request.tag.slice(0, 16) : request.tag);
    const meta = metadata([[0, Uint8Array.of(9)], [1, Uint8Array.of(domain)], [2, utf8(vin)], [5, u32(signature.counter)], [7, u32(reply.flags || 0)], [8, requestHash], [9, u32(fault)]]);
    const aad = await crypto.subtle.digest('SHA-256', buf(meta));
    const aes = await crypto.subtle.importKey('raw', buf(unb64(session.key)), 'AES-GCM', false, ['decrypt']);
    try { payload = new Uint8Array(await crypto.subtle.decrypt({ name: 'AES-GCM', iv: buf(signature.nonce), additionalData: aad, tagLength: 128 }, aes, buf(concat(payload, signature.tag)))); }
    catch { throw new VehicleError('response_auth_failed', '车辆响应解密校验失败，执行结果未知', true); }
    request.responseCounters.add(signature.counter);
  }
  if (fault) throw new VehicleError('vehicle_protocol_rejected', '车辆拒绝指令，fault=' + fault, false, fault);
  if (reply.signedMessageStatus?.operation_status === 1) throw new VehicleError('vehicle_busy', '车辆忙，尚未确认执行', true);
  if (domain === 3) {
    if (!payload.length) throw new VehicleError('empty_response', '车辆响应缺少执行结果', true);
    const result: any = CarServer.Response.decode(payload);
    if (!result.actionStatus) throw new VehicleError('missing_action_status', '车辆响应缺少执行状态', true);
    if (result.actionStatus.result !== 0) throw new VehicleError('vehicle_rejected', result.actionStatus.result_reason?.plain_text || '车辆未执行指令');
  } else {
    const result: any = VCSEC.FromVCSECMessage.decode(payload);
    if (result.nominalError) throw new VehicleError('vehicle_rejected', JSON.stringify(result.nominalError));
    if (result.commandStatus?.operationStatus) throw new VehicleError('vehicle_busy_or_rejected', '车辆未确认执行', result.commandStatus.operationStatus === 1);
  }
  return { response: { result: true, reason: '' } };
}

const emptyCommands: Record<string, string> = {
  honk_horn: 'vehicleControlHonkHornAction', flash_lights: 'vehicleControlFlashLightsAction',
  media_toggle_playback: 'mediaPlayAction', media_next_track: 'mediaNextTrack', media_prev_track: 'mediaPreviousTrack',
  charge_port_door_open: 'chargePortDoorOpen', charge_port_door_close: 'chargePortDoorClose'
};
export const commands = [...Object.keys(emptyCommands), 'door_lock', 'door_unlock', 'actuate_trunk', 'close_trunk', 'auto_conditioning_start', 'auto_conditioning_stop', 'set_temps', 'window_control', 'remote_seat_cooler_request', 'remote_seat_heater_request', 'adjust_volume', 'media_volume_up', 'media_volume_down', 'charge_start', 'charge_stop', 'set_charge_limit', 'set_charging_amps', 'set_sentry_mode', 'navigation_request', 'navigation_gps_request'];
export function encodeCommand(command: string, p: Record<string, any>) {
  const car = (field: string, values: any) => ({ domain: 3, payload: CarServer.Action.encode({ vehicleAction: { [field]: values } }).finish() });
  const vc = (values: any) => ({ domain: 2, payload: VCSEC.UnsignedMessage.encode(values).finish() });
  const number = (key: string, min: number, max: number, integer = false) => {
    const value = p[key]; if (typeof value !== 'number' || !Number.isFinite(value) || value < min || value > max || (integer && !Number.isInteger(value))) throw new VehicleError('invalid_parameter', key + ' 参数超出范围'); return value;
  };
  if (emptyCommands[command]) return car(emptyCommands[command], {});
  switch (command) {
    case 'navigation_gps_request':
      try { return { domain: 3, payload: encodeNavigationGps(p) }; }
      catch (error) { if (error instanceof RangeError) throw new VehicleError('invalid_parameter', error.message); throw error; }
    case 'door_lock': return vc({ RKEAction: 1 });
    case 'door_unlock': return vc({ RKEAction: 0 });
    case 'close_trunk': return vc({ closureMoveRequest: { rearTrunk: 4 } });
    case 'actuate_trunk':
      if (!['front', 'rear'].includes(p.which_trunk)) throw new VehicleError('invalid_parameter', 'which_trunk 必须是 front 或 rear');
      return vc({ closureMoveRequest: { [p.which_trunk === 'front' ? 'frontTrunk' : 'rearTrunk']: 1 } });
    case 'auto_conditioning_start': case 'auto_conditioning_stop': return car('hvacAutoAction', { power_on: command.endsWith('start') });
    case 'set_temps': return car('hvacTemperatureAdjustmentAction', { driver_temp_celsius: number('driver_temp', 15, 28), passenger_temp_celsius: number('passenger_temp', 15, 28), level: { TEMP_MAX: {} } });
    case 'window_control':
      if (!['vent', 'close'].includes(p.command)) throw new VehicleError('invalid_parameter', 'command 必须是 vent 或 close');
      return car('vehicleControlWindowAction', { [p.command]: {} });
    case 'remote_seat_cooler_request': return car('hvacSeatCoolerActions', { hvacSeatCoolerAction: [{ seat_cooler_level: number('seat_cooler_level', 0, 3, true) + 1, seat_position: number('seat_position', 1, 2, true) }] });
    case 'remote_seat_heater_request': {
      const seats = ['CAR_SEAT_FRONT_LEFT', 'CAR_SEAT_FRONT_RIGHT', 'CAR_SEAT_REAR_LEFT', 'CAR_SEAT_REAR_CENTER', 'CAR_SEAT_REAR_RIGHT', 'CAR_SEAT_THIRD_ROW_LEFT', 'CAR_SEAT_THIRD_ROW_RIGHT'];
      const levels = ['SEAT_HEATER_OFF', 'SEAT_HEATER_LOW', 'SEAT_HEATER_MED', 'SEAT_HEATER_HIGH'];
      return car('hvacSeatHeaterActions', { hvacSeatHeaterAction: [{ [seats[number('heater', 0, 6, true)]]: {}, [levels[number('level', 0, 3, true)]]: {} }] });
    }
    case 'adjust_volume': return car('mediaUpdateVolume', { volume_absolute_float: number('volume', 0, 10) });
    case 'media_volume_up': case 'media_volume_down': return car('mediaUpdateVolume', { volume_delta: command.endsWith('up') ? 1 : -1 });
    case 'charge_start': case 'charge_stop': return car('chargingStartStopAction', { [command.endsWith('start') ? 'start' : 'stop']: {} });
    case 'set_charge_limit': return car('chargingSetLimitAction', { percent: number('percent', 50, 100, true) });
    case 'set_charging_amps': return car('setChargingAmpsAction', { charging_amps: number('charging_amps', 0, 48, true) });
    case 'set_sentry_mode':
      if (typeof p.on !== 'boolean') throw new VehicleError('invalid_parameter', 'on 必须为布尔值');
      return car('vehicleControlSetSentryModeAction', { on: p.on });
    default: throw new VehicleError('unsupported_command', '不支持此控制指令');
  }
}
