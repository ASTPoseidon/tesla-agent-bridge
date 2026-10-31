import test from 'node:test';
import assert from 'node:assert/strict';
import { createPrivateKey, createHmac } from 'node:crypto';
import { acceptHandshake, b64, commandResponse, concat, encodeCommand, hex, hmac, metadata, sharedKey, signCommand, u32, utf8 } from '../src/protocol';
import { UniversalMessage, CarServer, VCSEC } from '../src/tesla-proto.js';
// Published test keys from Tesla protocol.md. Never deployed or paired to a vehicle.
const privateKey = createPrivateKey(`-----BEGIN EC PRIVATE KEY-----
MHcCAQEEICU4zcKal8GcHpmmN9bPT4yXDBGLVu3h5jI+bRYsSzDboAoGCCqGSM49
AwEHoUQDQgAEsra8aMLaBmXOZWgVWUmWxiOU7di+qQX+eBp1T+aoRacUMwkC8iXp
Jp1GbgWzSZgf2p2FzCPG+0RKpztikQXcbg==
-----END EC PRIVATE KEY-----`).export({ type: 'pkcs8', format: 'der' }).toString('base64');
const fromHex = (s: string) => Uint8Array.from(Buffer.from(s, 'hex'));
const peer = fromHex('04c7a1f47138486aa4729971494878d33b1a24e39571f748a6e16c5955b3d877d3a6aaa0e955166474af5d32c410f439a2234137ad1bb085fd4e8813c958f11d97');
const shared = fromHex('1b2fce19967b79db696f909cff89ea9a');
const vin = '5YJ30123456789ABC';
const epoch = fromHex('4c463f9cc0d3d26906e982ed224adde6');
const uuid = fromHex('1588d5a30eabc6f8fc9a951b11f6fd11');
const route = fromHex('2c907bd76c640d360b3027dc7404efde');
const sessionInfo = fromHex('0806124104c7a1f47138486aa4729971494878d33b1a24e39571f748a6e16c5955b3d877d3a6aaa0e955166474af5d32c410f439a2234137ad1bb085fd4e8813c958f11d971a104c463f9cc0d3d26906e982ed224adde6255a0a0000');
function handshake(tag = '996c1fe38331be138f8039c194b14db2198846ed7d8251e6749284d7b32ea002') {
  return UniversalMessage.RoutableMessage.encode({ to_destination: { routing_address: route }, from_destination: { domain: 3 }, signature_data: { session_info_tag: { tag: fromHex(tag) } }, session_info: sessionInfo, request_uuid: uuid }).finish();
}
test('matches Tesla ECDH and session authentication vectors', async () => {
  assert.equal(hex(await sharedKey(privateKey, peer)), hex(shared));
  assert.equal(hex(await hmac(shared, utf8('session info'))), 'fceb679ee7bca756fcd441bf238bf2f338629b41d9eb9c67be1b32c9672ce300');
  const result = await acceptHandshake(vin, 3, privateKey, handshake(), uuid, route);
  assert.equal(result.counter, 6); assert.equal(result.epoch, b64(epoch)); assert.equal(result.key, b64(shared));
});
test('rejects forged handshake and mismatched routing', async () => {
  await assert.rejects(acceptHandshake(vin, 3, privateKey, handshake('006c1fe38331be138f8039c194b14db2198846ed7d8251e6749284d7b32ea002'), uuid, route), /校验失败/);
  await assert.rejects(acceptHandshake(vin, 2, privateKey, handshake(), uuid, route), /路由不匹配/);
});
test('matches Tesla metadata and climate payload vectors', () => {
  assert.equal(hex(metadata([[0, Uint8Array.of(5)], [1, Uint8Array.of(3)], [2, utf8(vin)], [3, epoch], [4, u32(2655)], [5, u32(7)], [7, u32(2)]])), '000105010103021135594a333031323334353637383941424303104c463f9cc0d3d26906e982ed224adde6040400000a5f050400000007070400000002ff');
  assert.equal(hex(encodeCommand('auto_conditioning_start', {}).payload), '120452020801');
  assert.equal(hex(encodeCommand('door_unlock', {}).payload), '1000');
  assert.equal(VCSEC.UnsignedMessage.decode(encodeCommand('close_trunk', {}).payload).closureMoveRequest?.rearTrunk, 4);
});
test('HMAC command uses incremented counter, flags and personalized metadata', async () => {
  const session = { key: b64(shared), epoch: b64(epoch), counter: 6, clockZero: Date.now() - 2640000, authenticatedClock: 2640 };
  const payload = encodeCommand('auto_conditioning_start', {}).payload;
  const signed = await signCommand(vin, 3, peer, session, payload);
  const message = UniversalMessage.RoutableMessage.decode(signed.message);
  const auth = message.signature_data!.HMAC_Personalized_data!;
  assert.equal(auth.counter, 7); assert.equal(message.flags, 2); assert.equal(session.counter, 7);
  const meta = metadata([[0, Uint8Array.of(8)], [1, Uint8Array.of(3)], [2, utf8(vin)], [3, epoch], [4, u32(auth.expires_at!)], [5, u32(7)], [7, u32(2)]]);
  const derived = createHmac('sha256', shared).update('authenticated command').digest();
  assert.equal(hex(auth.tag!), createHmac('sha256', derived).update(meta).update(payload).digest('hex'));
});
test('validates parameters before encoding actuator commands', () => {
  assert.throws(() => encodeCommand('set_temps', { driver_temp: 100, passenger_temp: 22 }), /参数/);
  assert.throws(() => encodeCommand('window_control', { command: 'open' }), /vent/);
  assert.throws(() => encodeCommand('remote_start_drive', {}), /不支持/);
  const c = CarServer.Action.decode(encodeCommand('remote_seat_cooler_request', { seat_position: 1, seat_cooler_level: 0 }).payload);
  assert.equal(c.vehicleAction?.hvacSeatCoolerActions?.hvacSeatCoolerAction?.[0].seat_cooler_level, 1);
});
test('authenticated encrypted response succeeds; tampering and nominal rejection fail', async () => {
  const session = { key: b64(shared), epoch: b64(epoch), counter: 6, clockZero: Date.now(), authenticatedClock: 0 };
  const request = await signCommand(vin, 3, peer, session, encodeCommand('auto_conditioning_start', {}).payload);
  const nonce = new Uint8Array(12), counter = 1;
  const meta = metadata([[0, Uint8Array.of(9)], [1, Uint8Array.of(3)], [2, utf8(vin)], [5, u32(counter)], [7, u32(0)], [8, concat(Uint8Array.of(8), request.tag)], [9, u32(0)]]);
  const key = await crypto.subtle.importKey('raw', shared, 'AES-GCM', false, ['encrypt']);
  const payload = CarServer.Response.encode({ actionStatus: { result: 0 } }).finish();
  const ciphertext = new Uint8Array(await crypto.subtle.encrypt({ name: 'AES-GCM', iv: nonce, additionalData: await crypto.subtle.digest('SHA-256', meta) }, key, payload));
  const reply = { to_destination: { routing_address: request.route }, from_destination: { domain: 3 }, request_uuid: request.uuid, signature_data: { AES_GCM_Response_data: { nonce, counter, tag: ciphertext.slice(-16) } }, protobuf_message_as_bytes: ciphertext.slice(0, -16) };
  assert.equal((await commandResponse(vin, 3, session, UniversalMessage.RoutableMessage.encode(reply).finish(), request)).response.result, true);
  await assert.rejects(commandResponse(vin, 3, session, UniversalMessage.RoutableMessage.encode(reply).finish(), request), /重复响应/);
  request.responseCounters.clear();
  reply.signature_data.AES_GCM_Response_data.tag[0] ^= 1;
  await assert.rejects(commandResponse(vin, 3, session, UniversalMessage.RoutableMessage.encode(reply).finish(), request), /解密校验失败/);
  const denied = UniversalMessage.RoutableMessage.encode({ to_destination: reply.to_destination, from_destination: reply.from_destination, request_uuid: request.uuid, protobuf_message_as_bytes: CarServer.Response.encode({ actionStatus: { result: 1, result_reason: { plain_text: 'not in park' } } }).finish() }).finish();
  await assert.rejects(commandResponse(vin, 3, session, denied, request), /not in park/);
});
