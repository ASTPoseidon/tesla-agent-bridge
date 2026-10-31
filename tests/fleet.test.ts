import test from 'node:test';
import assert from 'node:assert/strict';
import { ApiError, fleetRequest } from '../src/fleet';
import { VehicleError } from '../src/protocol';

const url = 'https://fleet.test/command/navigation_request';
const sensitive = 'do-not-return-token-or-destination';

test('non-JSON HTTP 4xx rejections retain their status instead of becoming ambiguous 502s', async () => {
  for (const status of [400, 401, 403, 408, 429]) {
    let calls = 0;
    await assert.rejects(fleetRequest(url, sensitive, 'POST', { value: sensitive }, async () => {
      calls++; return new Response(`<html>${sensitive}</html>`, { status });
    }), (error: any) => {
      assert.ok(error instanceof ApiError); assert.equal(error.status, status);
      assert.equal(error.code, 'tesla_api_error'); assert.equal(error.details.upstream_status, status);
      assert.equal(error.details.phase, 'http_status');
      assert.ok(!JSON.stringify(error).includes(sensitive)); return true;
    });
    assert.equal(calls, 1);
  }
});

test('POST 5xx stays uncertain even when the upstream body is HTML, and no request is repeated', async () => {
  for (const status of [500, 502, 504]) {
    let calls = 0;
    await assert.rejects(fleetRequest(url, sensitive, 'POST', {}, async () => {
      calls++; return new Response(sensitive, { status });
    }), (error: any) => {
      assert.ok(error instanceof VehicleError); assert.equal(error.code, 'tesla_upstream_error');
      assert.equal(error.uncertain, true); assert.equal(error.details.upstream_status, status);
      assert.ok(!JSON.stringify(error).includes(sensitive)); return true;
    });
    assert.equal(calls, 1);
  }
});

test('503 and Retry-After retain the existing explicit rejection behavior', async () => {
  await assert.rejects(fleetRequest(url, 'test-token', 'POST', {}, async () => new Response('unavailable', {
    status: 503, headers: { 'Retry-After': '10' },
  })), (error: any) => {
    assert.ok(error instanceof ApiError); assert.equal(error.status, 503);
    assert.equal(error.details.retry_after, '10'); return true;
  });
});

test('bodyless redirects are rejected without following them or emitting a bodyless bridge error', async () => {
  for (const method of ['GET', 'POST']) {
    let calls = 0;
    await assert.rejects(fleetRequest(url, sensitive, method, undefined, async (_url, options) => {
      calls++; assert.equal(options?.redirect, 'manual'); return new Response(null, { status: 304 });
    }), (error: any) => {
      assert.equal(error.code, 'unexpected_tesla_redirect');
      assert.equal(error.details.upstream_status, 304);
      if (method === 'POST') { assert.ok(error instanceof VehicleError); assert.equal(error.uncertain, true); }
      else { assert.ok(error instanceof ApiError); assert.equal(error.status, 502); }
      return true;
    });
    assert.equal(calls, 1);
  }
});

test('HTTP 200 with malformed JSON or a non-object payload remains uncertain and reports the parsing phase', async () => {
  for (const [payload, failure] of [[sensitive, 'invalid_json'], ['null', 'invalid_json_shape']]) {
    await assert.rejects(fleetRequest(url, sensitive, 'POST', {}, async () => new Response(payload)), (error: any) => {
      assert.ok(error instanceof VehicleError); assert.equal(error.code, 'invalid_tesla_response');
      assert.equal(error.uncertain, true); assert.equal(error.details.phase, 'response_body');
      assert.equal(error.details.failure, failure); assert.equal(error.details.upstream_status, 200);
      assert.ok(!JSON.stringify(error).includes(sensitive)); return true;
    });
  }
});

test('network and timeout failures are distinguishable without exposing exception strings', async () => {
  for (const [name, failure] of [['TypeError', 'network'], ['TimeoutError', 'timeout']]) {
    let calls = 0;
    await assert.rejects(fleetRequest(url, sensitive, 'POST', {}, async () => {
      calls++; const error = new Error(sensitive); error.name = name; throw error;
    }), (error: any) => {
      assert.ok(error instanceof VehicleError); assert.equal(error.code, 'tesla_connection_failed');
      assert.equal(error.details.failure, failure); assert.equal(error.details.phase, 'fetch');
      assert.equal(error.uncertain, true); assert.ok(!JSON.stringify(error).includes(sensitive)); return true;
    });
    assert.equal(calls, 1);
  }
});

test('a timeout while reading an HTTP 200 body is identified as a body timeout', async () => {
  const response = new Response('unused');
  response.json = async () => { const error = new Error(sensitive); error.name = 'TimeoutError'; throw error; };
  await assert.rejects(fleetRequest(url, sensitive, 'POST', {}, async () => response), (error: any) => {
    assert.ok(error instanceof VehicleError); assert.equal(error.uncertain, true);
    assert.equal(error.details.phase, 'response_body'); assert.equal(error.details.failure, 'timeout');
    assert.equal(error.details.upstream_status, 200); assert.ok(!JSON.stringify(error).includes(sensitive)); return true;
  });
});

test('valid Tesla responses are returned unchanged and read-only HTTP errors retain their upstream status', async () => {
  const expected = { response: { result: true } };
  assert.deepEqual(await fleetRequest(url, 'test-token', 'POST', {}, async () => Response.json(expected)), expected);
  await assert.rejects(fleetRequest(url, 'test-token', 'GET', undefined, async () => new Response('bad gateway', { status: 502 })),
    (error: any) => error instanceof ApiError && error.status === 502);
});
