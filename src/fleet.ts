import { VehicleError } from './protocol';

export class ApiError extends Error {
  constructor(public status: number, public code: string, message: string, public details?: unknown) { super(message); }
}

// Classify HTTP status before parsing a body. Error pages are not necessarily JSON.
// Diagnostics contain only status/phase/timing, never an upstream body, URL or token.
export async function fleetRequest(url: string, token: string, method = 'GET', body?: unknown, fetcher: typeof fetch = fetch): Promise<any> {
  const started = Date.now();
  const signal = AbortSignal.timeout(20000);
  const elapsed = () => Math.max(0, Date.now() - started);
  let response: Response;
  try {
    response = await fetcher(url, {
      method, headers: { Authorization: 'Bearer ' + token, 'Content-Type': 'application/json' },
      ...(body === undefined ? {} : { body: JSON.stringify(body) }), redirect: 'manual', signal,
    });
  } catch (error) {
    const timeout = signal.aborted || (error instanceof Error && ['TimeoutError', 'AbortError'].includes(error.name));
    throw new VehicleError('tesla_connection_failed', method === 'POST'
      ? '连接 Tesla 失败，执行结果未知；请先查询车况' : '连接 Tesla 失败，请稍后查询', method === 'POST', undefined,
    { phase: 'fetch', failure: timeout ? 'timeout' : 'network', elapsed_ms: elapsed() });
  }
  if (!response.ok) {
    void response.body?.cancel().catch(() => {});
    const details: Record<string, string | number> = {
      phase: 'http_status', failure: 'http_error', upstream_status: response.status, elapsed_ms: elapsed(),
    };
    if (response.status >= 300 && response.status < 400) {
      if (method === 'POST') throw new VehicleError('unexpected_tesla_redirect', 'Tesla 返回了未跟随的重定向，执行结果未知', true, undefined, details);
      throw new ApiError(502, 'unexpected_tesla_redirect', 'Tesla 返回了未跟随的重定向', details);
    }
    if (method === 'POST' && response.status >= 500 && response.status !== 503) {
      throw new VehicleError('tesla_upstream_error', 'Tesla 返回上游错误，执行结果未知；请先查询车况', true, undefined, details);
    }
    // Preserve explicit HTTP rejections (including non-JSON 400/401/403) and existing 503 behavior.
    details.status = response.status;
    const retryAfter = response.headers.get('Retry-After');
    if (retryAfter && /^\d{1,6}$/.test(retryAfter)) details.retry_after = retryAfter;
    throw new ApiError(response.status, 'tesla_api_error', `Tesla API 请求失败（HTTP ${response.status}）`, details);
  }
  let data: unknown;
  try { data = await response.json(); }
  catch (error) {
    const timeout = signal.aborted || (error instanceof Error && ['TimeoutError', 'AbortError'].includes(error.name));
    throw new VehicleError('invalid_tesla_response', 'Tesla 响应读取或解析失败', method === 'POST', undefined, {
      phase: 'response_body', failure: timeout ? 'timeout' : error instanceof SyntaxError ? 'invalid_json' : 'body_read_failed',
      upstream_status: response.status, elapsed_ms: elapsed(),
    });
  }
  if (!data || typeof data !== 'object' || Array.isArray(data)) {
    throw new VehicleError('invalid_tesla_response', 'Tesla 响应格式不正确', method === 'POST', undefined, {
      phase: 'response_body', failure: 'invalid_json_shape', upstream_status: response.status, elapsed_ms: elapsed(),
    });
  }
  return data;
}
