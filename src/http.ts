import { ApiError } from './fleet';
import { VehicleError } from './protocol';
export const json = (data: unknown, status = 200) => Response.json(data, {
  status, headers: { 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' },
});
export function errorResponse(error: unknown) {
  if (error instanceof ApiError) return json({ error: error.code, message: error.message, ...(error.details ? { details: error.details } : {}) }, error.status);
  if (error instanceof VehicleError) return json({ error: error.code, message: error.message, execution_unknown: error.uncertain, ...(error.fault ? { fault: error.fault } : {}), ...(error.details ? { details: error.details } : {}) }, error.uncertain ? 502 : 409);
  return json({ error: 'internal_error', message: '服务异常，请检查服务端配置' }, 500);
}
export async function readLimitedJson(request: Request) {
  const reader = request.body?.getReader();
  if (!reader) throw new ApiError(400, 'invalid_json', '需要 JSON 正文');
  let size = 0;
  const chunks: Uint8Array[] = [];
  while (true) {
    const item = await reader.read(); if (item.done) break;
    size += item.value.length;
    if (size > 16384) { await reader.cancel(); throw new ApiError(413, 'body_too_large', '正文不能超过 16KB'); }
    chunks.push(item.value);
  }
  const bytes = new Uint8Array(size); let offset = 0;
  for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.length; }
  try { return JSON.parse(new TextDecoder().decode(bytes)); }
  catch { throw new ApiError(400, 'invalid_json', '需要有效 JSON'); }
}
