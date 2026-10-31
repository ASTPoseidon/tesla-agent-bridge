import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { CallToolRequestSchema, ListToolsRequestSchema } from '@modelcontextprotocol/sdk/types.js';

const origin = new URL(process.env.BRIDGE_URL || '');
if (origin.protocol !== 'https:' && !(origin.protocol === 'http:' && ['localhost', '127.0.0.1', '[::1]'].includes(origin.hostname))) throw new Error('Use HTTPS or a loopback development address');
if (origin.username || origin.password || origin.pathname !== '/' || origin.search || origin.hash) throw new Error('BRIDGE_URL must be an origin');
const key = process.env.BRIDGE_API_KEY;
if (!key) throw new Error('Set BRIDGE_API_KEY in the MCP client environment');
let nextId = 0;
async function rpc(method: string, params?: unknown) {
  // One POST only; never automatically retry tools/call or switch origins.
  const response = await fetch(new URL('/mcp', origin), { method: 'POST', redirect: 'error', signal: AbortSignal.timeout(65000),
    headers: { Authorization: 'Bearer ' + key, 'Content-Type': 'application/json', Accept: 'application/json, text/event-stream', 'MCP-Protocol-Version': '2025-11-25', 'User-Agent': 'TeslaAgentBridge-MCP/0.1' },
    body: JSON.stringify({ jsonrpc: '2.0', id: ++nextId, method, params }) });
  if (!response.ok) throw new Error(`Bridge HTTP ${response.status}; no automatic retry`);
  const data: any = await response.json();
  if (data.error) throw new Error(data.error.message || 'MCP request rejected');
  return data.result;
}
await rpc('initialize', { protocolVersion: '2025-11-25', capabilities: {}, clientInfo: { name: 'tesla-agent-stdio', version: '0.1.0' } });
const initialized = await fetch(new URL('/mcp', origin), { method: 'POST', redirect: 'error', signal: AbortSignal.timeout(15000),
  headers: { Authorization:'Bearer '+key,'Content-Type':'application/json',Accept:'application/json, text/event-stream','MCP-Protocol-Version':'2025-11-25' },
  body:JSON.stringify({jsonrpc:'2.0',method:'notifications/initialized'}) });
if (initialized.status !== 202) throw new Error('Remote MCP initialization notification was rejected');
const server = new Server({ name: 'tesla-agent-bridge', version: '0.1.0' }, { capabilities: { tools: {} } });
server.setRequestHandler(ListToolsRequestSchema, () => rpc('tools/list'));
server.setRequestHandler(CallToolRequestSchema, request => rpc('tools/call', request.params));
await server.connect(new StdioServerTransport());
