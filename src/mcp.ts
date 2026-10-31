import openapi from '../openapi.json';
import { json, readLimitedJson } from './http';

const versions = ['2025-11-25', '2025-06-18', '2025-03-26'];
interface Tool { name: string; description: string; inputSchema: any; annotations: Record<string, boolean>; path: string; method: string }
export function toolsFor(allowControl: boolean): Tool[] {
  const tools: Tool[] = [];
  for (const [path, item] of Object.entries(openapi.paths)) {
    if (!(path === '/health' || path === '/v1/capabilities' || path.startsWith('/api/1/vehicles'))) continue;
    for (const [method, operation] of Object.entries(item) as [string, any][]) {
      if (!['get', 'post'].includes(method) || (method === 'post' && !allowControl)) continue;
      const properties: Record<string, any> = {};
      const required: string[] = [];
      for (const parameter of operation.parameters || []) {
        if (parameter.in === 'header') continue;
        properties[parameter.name] = parameter.schema;
        if (parameter.required) required.push(parameter.name);
      }
      const body = operation.requestBody?.content?.['application/json']?.schema;
      Object.assign(properties, body?.properties || {});
      required.push(...body?.required || []);
      if (method === 'post') {
        properties.confirmed = { type: 'boolean', const: true, description: '仅在用户明确要求这次车辆操作时填 true' };
        properties.idempotency_key = { type: 'string', minLength: 16, maxLength: 128, pattern: '^[A-Za-z0-9._:-]+$', description: '本次操作的唯一标识；重复查询原操作时必须沿用，不能换键自动重发' };
        required.push('confirmed', 'idempotency_key');
      }
      tools.push({ name: 'tesla_' + operation.operationId, description: operation.summary,
        inputSchema: { type: 'object', properties, required: [...new Set(required)], additionalProperties: false },
        annotations: { readOnlyHint: method === 'get', destructiveHint: method === 'post', idempotentHint: method === 'get', openWorldHint: true },
        path, method: method.toUpperCase() });
    }
  }
  return tools;
}
function validArguments(schema: any, args: any) {
  if (!args || typeof args !== 'object' || Array.isArray(args)) return false;
  if (schema.required.some((name: string) => !(name in args))) return false;
  for (const [name, value] of Object.entries(args)) {
    if (!Object.hasOwn(schema.properties, name)) return false;
    const field = schema.properties[name];
    if (field.type === 'integer' ? !Number.isInteger(value) : field.type && typeof value !== field.type) return false;
    if ('const' in field && value !== field.const) return false;
    if (field.enum && !field.enum.includes(value)) return false;
    if (typeof value === 'number' && (!Number.isFinite(value) || value < (field.minimum ?? -Infinity) || value > (field.maximum ?? Infinity))) return false;
    if (typeof value === 'string' && (value.length < (field.minLength ?? 0) || value.length > (field.maxLength ?? Infinity) || (field.pattern && !new RegExp(field.pattern).test(value)))) return false;
  }
  return true;
}
export async function serveMcp(request: Request, allowControl: boolean, invoke: (request: Request) => Promise<Response>) {
  if (request.method !== 'POST') return new Response(null, { status: 405, headers: { Allow: 'POST' } });
  const headerVersion = request.headers.get('MCP-Protocol-Version');
  if (headerVersion && !versions.includes(headerVersion)) return json({ error: 'unsupported_protocol_version' }, 400);
  const rpc = await readLimitedJson(request);
  if (!rpc || rpc.jsonrpc !== '2.0' || typeof rpc.method !== 'string' || Array.isArray(rpc)) return json({ jsonrpc: '2.0', id: null, error: { code: -32600, message: 'Invalid Request' } }, 400);
  if (!('id' in rpc)) return new Response(null, { status: 202 });
  const reply = (result: unknown) => json({ jsonrpc: '2.0', id: rpc.id, result });
  const failure = (code: number, message: string) => json({ jsonrpc: '2.0', id: rpc.id, error: { code, message } });
  if (rpc.method === 'initialize') return reply({ protocolVersion: versions.includes(rpc.params?.protocolVersion) ? rpc.params.protocolVersion : versions[0],
    capabilities: { tools: {} }, serverInfo: { name: 'tesla-agent-bridge', version: '0.1.0' },
    instructions: '只在用户明确要求时控车。普通查询不唤醒。位置仅按明确要求查询。控制需 confirmed=true 和稳定幂等键。执行结果未知时不能自动重发。' });
  if (rpc.method === 'ping') return reply({});
  const tools = toolsFor(allowControl);
  if (rpc.method === 'tools/list') return reply({ tools: tools.map(({ path, method, ...tool }) => tool) });
  if (rpc.method !== 'tools/call') return failure(-32601, 'Method not found');
  const tool = tools.find(item => item.name === rpc.params?.name);
  if (!tool) return failure(-32602, 'Tool not available for this key or server configuration');
  const args = rpc.params.arguments || {};
  if (!validArguments(tool.inputSchema, args)) return failure(-32602, 'Invalid tool arguments; check the tool schema and user confirmation');
  const target = new URL(tool.path.replace('{vin}', args.vin || ''), request.url);
  const headers = new Headers({ Authorization: request.headers.get('Authorization')!, 'Content-Type': 'application/json' });
  let body: string | undefined;
  if (tool.method === 'POST') {
    headers.set('Idempotency-Key', args.idempotency_key);
    const { vin, confirmed, idempotency_key, ...parameters } = args;
    body = JSON.stringify(parameters);
  } else {
    for (const [name, value] of Object.entries(args)) if (name !== 'vin') target.searchParams.set(name, String(value));
  }
  const response = await invoke(new Request(target, { method: tool.method, headers, ...(body ? { body } : {}) }));
  const data: any = await response.json();
  const content = { http_status: response.status, ...data };
  return reply({ content: [{ type: 'text', text: JSON.stringify(content) }], structuredContent: content,
    isError: !response.ok || data.response?.result === false });
}
