import test from 'node:test';
import assert from 'node:assert/strict';
import { build } from 'esbuild';
import { Miniflare, convertV4MiniflareOptions } from 'miniflare';
import { createPrivateKey, generateKeyPairSync, randomBytes, createHmac } from 'node:crypto';
import { CarServer, Signatures, UniversalMessage } from '../src/tesla-proto.js';
import { b64, concat, hmac, metadata, sharedKey, unb64, utf8 } from '../src/protocol';

test('Worker OAuth, refresh serialization, encrypted state, command idempotency and error paths', async () => {
  const bundle = await build({ entryPoints: ['src/worker.ts'], bundle: true, format: 'esm', platform: 'browser', external: ['cloudflare:workers'], write: false });
  const pair = generateKeyPairSync('ec', { namedCurve: 'prime256v1' });
  const privateKey = pair.privateKey.export({ format: 'der', type: 'pkcs8' }).toString('base64');
  const jwk = pair.publicKey.export({ format: 'jwk' });
  const publicKey = Buffer.concat([Buffer.from([4]), Buffer.from(jwk.x!, 'base64url'), Buffer.from(jwk.y!, 'base64url')]);
  const peerKey = createPrivateKey(`-----BEGIN EC PRIVATE KEY-----
MHcCAQEEIDRO5bRmp88e6xK29QMx2y5exYNO9fS+/P2MvlXCUo1woAoGCCqGSM49
AwEHoUQDQgAEx6H0cThIaqRymXFJSHjTOxok45Vx90im4WxZVbPYd9OmqqDpVRZk
dK9dMsQQ9DmiI0E3rRuwhf1OiBPJWPEdlw==
-----END EC PRIVATE KEY-----`).export({ format: 'der', type: 'pkcs8' }).toString('base64');
  const peerPublic = Buffer.from('04c7a1f47138486aa4729971494878d33b1a24e39571f748a6e16c5955b3d877d3a6aaa0e955166474af5d32c410f439a2234137ad1bb085fd4e8813c958f11d97', 'hex');
  const sessionKey = await sharedKey(peerKey, publicKey);
  const vin = '5YJ30123456789ABC';
  let refreshes = 0, commands = 0, upstreamFailure = false;
  let navigationRequests = 0, navigationStatus = 200, gpsCommands = 0;
  let navigationResponse = JSON.stringify({ response: { result: true } });
  const testScript = bundle.outputFiles[0].text.replace('function errorResponse(error) {', 'function errorResponse(error) { if (!(error instanceof ApiError) && !(error instanceof VehicleError)) console.error("Test diagnostic", error);');
  const mf = new Miniflare(convertV4MiniflareOptions({ modules: true, script: testScript, compatibilityDate: '2026-10-30',
    durableObjects: { OWNER: { className: 'OwnerAccount', useSQLite: true } },
    bindings: { APP_ORIGIN: 'https://bridge.test', TESLA_CLIENT_ID: 'test-client', TESLA_CLIENT_SECRET: 'test-secret', TESLA_SCOPES: 'openid offline_access vehicle_cmds vehicle_device_data', API_KEY: 'caller-test-key', ADMIN_KEY: 'admin-test-key', TOKEN_ENCRYPTION_KEY: randomBytes(32).toString('base64'), TESLA_PRIVATE_KEY_PKCS8: privateKey, PUBLIC_KEY_RAW: publicKey.toString('base64'), PUBLIC_KEY_PEM: pair.publicKey.export({ type: 'spki', format: 'pem' }) },
    outboundService: async (request: Request) => {
      const url = new URL(request.url);
      if (url.hostname === 'auth.tesla.cn' && url.pathname.endsWith('/token')) {
        const params = new URLSearchParams(await request.text());
        if (params.get('grant_type') === 'refresh_token') { refreshes++; return Response.json({ access_token: 'renewed-access', refresh_token: 'rotated-refresh', expires_in: 3600 }); }
        return Response.json({ access_token: 'initial-access', refresh_token: 'initial-refresh', expires_in: 0 });
      }
      if (url.hostname !== 'fleet-api.prd.cn.vn.cloud.tesla.cn') throw new Error('Unexpected network request');
      if (url.pathname === '/api/1/vehicles') return Response.json({ response: [{ vin, state: 'online' }] });
      if (url.pathname.endsWith('/command/navigation_request')) {
        navigationRequests++;
        const body: any = await request.json();
        assert.equal(body.type, 'share_ext_content_raw'); assert.equal(body.value, 'test destination');
        assert.equal(body.locale, 'zh-CN'); assert.match(body.timestamp_ms, /^\d{13}$/);
        return new Response(navigationResponse, { status: navigationStatus });
      }
      if (url.pathname.endsWith('/signed_command')) {
        const body: any = await request.json();
        const message = UniversalMessage.RoutableMessage.decode(unb64(body.routable_message));
        const base = { to_destination: { routing_address: message.from_destination!.routing_address }, from_destination: { domain: message.to_destination!.domain }, request_uuid: message.uuid };
        if (message.session_info_request) {
          const info = Signatures.SessionInfo.encode({ counter: 1, publicKey: peerPublic, epoch: new Uint8Array(16), clock_time: 100 }).finish();
          const tag = await hmac(await hmac(sessionKey, utf8('session info')), concat(metadata([[0, Uint8Array.of(6)], [2, utf8(vin)], [6, message.uuid!]]), info));
          return Response.json({ response: b64(UniversalMessage.RoutableMessage.encode({ ...base, session_info: info, signature_data: { session_info_tag: { tag } } }).finish()) });
        }
        commands++;
        if (Buffer.from(message.protobuf_message_as_bytes!).toString('hex') === '1215aa0312090000000000c04240110000000000905ec0') gpsCommands++;
        if (upstreamFailure) return Response.json({ error: 'gateway timeout' }, { status: 504 });
        const auth = message.signature_data?.HMAC_Personalized_data;
        assert.ok(auth && auth.counter! > 1 && auth.tag?.length === 32);
        const payload = CarServer.Response.encode({ actionStatus: { result: 0 } }).finish();
        return Response.json({ response: b64(UniversalMessage.RoutableMessage.encode({ ...base, protobuf_message_as_bytes: payload }).finish()) });
      }
      throw new Error('Unexpected Tesla endpoint: ' + url.pathname);
    }
  } as any));
  const call = (path: string, method = 'GET', key = 'caller-test-key', body?: unknown, extras = {}) => mf.dispatchFetch('https://bridge.test' + path, { method, headers: { Authorization: 'Bearer ' + key, ...extras }, ...(body === undefined ? {} : { body: JSON.stringify(body) }) });
  try {
    const healthHead = await call('/health', 'HEAD', '');
    assert.equal(healthHead.status, 200);
    assert.equal(await healthHead.text(), '');
    assert.equal((await call('/api/1/vehicles', 'HEAD', '')).status, 401);
    assert.equal((await call('/api/1/vehicles', 'GET', 'wrong')).status, 401);
    assert.equal((await call('/v1/auth/status')).status, 403);
    const start = await call('/v1/auth/start', 'POST', 'admin-test-key');
    const cookie = start.headers.get('Set-Cookie')!.split(';')[0];
    const authorize = new URL((await start.json() as any).authorize_url);
    const callback = '/callback?state=' + authorize.searchParams.get('state') + '&code=test-code';
    assert.equal((await call(callback)).status, 400); // Missing browser binding cannot exchange code.
    const completed = await call(callback, 'GET', '', undefined, { Cookie: cookie });
    assert.equal(completed.status, 200, await completed.clone().text());
    assert.equal((await call(callback, 'GET', '', undefined, { Cookie: cookie })).status, 400); // State is one-use.
    const reads = await Promise.all([call('/api/1/vehicles'), call('/api/1/vehicles'), call('/api/1/vehicles')]);
    assert.ok(reads.every(r => r.status === 200)); assert.equal(refreshes, 1);
    const keyStatus = await call('/api/1/vehicles/' + vin + '/key_status');
    assert.equal(keyStatus.status, 200, await keyStatus.clone().text());
    assert.equal((await keyStatus.json() as any).response.physical_command_sent, false);
    assert.equal(commands, 0);
    const endpoint = '/api/1/vehicles/' + vin + '/command/set_temps';
    const body = { driver_temp: 22, passenger_temp: 22 };
    assert.equal((await call(endpoint, 'POST', 'caller-test-key', body)).status, 400);
    const first = await call(endpoint, 'POST', 'caller-test-key', body, { 'Idempotency-Key': 'test-action-000001' });
    assert.equal(first.status, 200, await first.clone().text());
    assert.equal((await first.json() as any).response.result, true);
    const duplicate = await call(endpoint, 'POST', 'caller-test-key', body, { 'Idempotency-Key': 'test-action-000001' });
    assert.equal(duplicate.status, 200); assert.equal(duplicate.headers.get('Idempotency-Replayed'), 'true'); assert.equal(commands, 1);
    assert.equal((await call(endpoint, 'POST', 'caller-test-key', { driver_temp: 23, passenger_temp: 23 }, { 'Idempotency-Key': 'test-action-000001' })).status, 409);
    const denied = await call('/api/1/vehicles/5YJ30123456789ABD/command/door_unlock', 'POST', 'caller-test-key', {}, { 'Idempotency-Key': 'test-action-000002' });
    assert.equal(denied.status, 403); assert.equal(commands, 1);
    upstreamFailure = true;
    const failed = await call(endpoint, 'POST', 'caller-test-key', body, { 'Idempotency-Key': 'test-action-000003' });
    assert.equal(failed.status, 502); assert.equal((await failed.json() as any).execution_unknown, true);
    await call(endpoint, 'POST', 'caller-test-key', body, { 'Idempotency-Key': 'test-action-000003' });
    assert.equal(commands, 2); // Ambiguous result is replayed locally, never sent again.

    const navEndpoint = '/api/1/vehicles/' + vin + '/command/navigation_request';
    const navBody = { type: 'share_ext_content_raw', value: 'test destination' };
    assert.equal((await call(navEndpoint, 'POST', 'caller-test-key', { ...navBody, value: '' }, { 'Idempotency-Key': 'test-navigation-invalid' })).status, 400);
    assert.equal(navigationRequests, 0);
    const navSuccess = await call(navEndpoint, 'POST', 'caller-test-key', navBody, { 'Idempotency-Key': 'test-navigation-success' });
    assert.equal(navSuccess.status, 200); assert.equal((await navSuccess.json() as any).response.result, true);
    assert.equal(navigationRequests, 1); assert.equal(commands, 2); // REST navigation does not enter signed_command.
    for (const [status, responseBody, bridgeStatus, errorCode] of [
      [400, '<html>private-upstream-body</html>', 400, 'tesla_api_error'],
      [401, '<html>private-upstream-body</html>', 401, 'tesla_api_error'],
      [502, '<html>private-upstream-body</html>', 502, 'tesla_upstream_error'],
      [200, 'private-upstream-body', 502, 'invalid_tesla_response'],
    ] as const) {
      navigationStatus = status; navigationResponse = responseBody;
      const key = 'test-navigation-failure-' + navigationRequests;
      const before = navigationRequests;
      const failedNav = await call(navEndpoint, 'POST', 'caller-test-key', navBody, { 'Idempotency-Key': key });
      assert.equal(failedNav.status, bridgeStatus);
      const error: any = await failedNav.json();
      assert.equal(error.error, errorCode); assert.equal(error.details.upstream_status, status);
      assert.ok(!JSON.stringify(error).includes('private-upstream-body'));
      if (bridgeStatus === 502) assert.equal(error.execution_unknown, true);
      const replay = await call(navEndpoint, 'POST', 'caller-test-key', navBody, { 'Idempotency-Key': key });
      assert.equal(replay.headers.get('Idempotency-Replayed'), 'true');
      assert.deepEqual(await replay.json(), error); assert.equal(navigationRequests, before + 1);
    }
    assert.equal(commands, 2);
    upstreamFailure = false;
    const gpsEndpoint = '/api/1/vehicles/' + vin + '/command/navigation_gps_request';
    const gpsBody = { lat:37.5, lon:-122.25, coordinate_system:'wgs84' };
    const restBeforeGps = navigationRequests;
    assert.equal((await call(gpsEndpoint,'POST','caller-test-key',{lat:37.5,lon:-122.25},{'Idempotency-Key':'test-gps-missing-crs'})).status,400);
    assert.equal(gpsCommands,0);
    const gps = await call(gpsEndpoint,'POST','caller-test-key',gpsBody,{'Idempotency-Key':'test-navigation-gps-once'});
    assert.equal(gps.status,200,await gps.clone().text()); assert.equal((await gps.json() as any).response.result,true);
    const gpsReplay = await call(gpsEndpoint,'POST','caller-test-key',gpsBody,{'Idempotency-Key':'test-navigation-gps-once'});
    assert.equal(gpsReplay.headers.get('Idempotency-Replayed'),'true');
    assert.equal((await call(gpsEndpoint,'POST','caller-test-key',{...gpsBody,lat:38},{'Idempotency-Key':'test-navigation-gps-once'})).status,409);
    assert.equal(gpsCommands,1); assert.equal(commands,3); assert.equal(navigationRequests,restBeforeGps);
  } finally { await mf.dispose(); }
});
