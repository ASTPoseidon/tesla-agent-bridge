import { existsSync, readFileSync } from 'node:fs';
const runtime = existsSync('.config/runtime.json') ? JSON.parse(readFileSync('.config/runtime.json','utf8')) : {};
const origin = new URL(process.env.BRIDGE_URL || runtime.APP_ORIGIN || 'http://127.0.0.1:8787');
if (origin.protocol !== 'https:' && !['localhost','127.0.0.1','[::1]'].includes(origin.hostname)) throw new Error('Use HTTPS for remote services');
if (origin.username || origin.password || origin.pathname !== '/' || origin.search || origin.hash) throw new Error('BRIDGE_URL must be an origin');
const headers = { 'User-Agent': 'TeslaAgentBridge-Check/0.1' };
const health = await fetch(new URL('/health', origin), { headers, redirect:'error', signal:AbortSignal.timeout(15000) });
if (!health.ok || (await health.json()).status !== 'ok') throw new Error('Health check failed');
const localKeys = process.argv.includes('--vehicles') && existsSync('.secrets/production.json') ? JSON.parse(readFileSync('.secrets/production.json','utf8')) : {};
const key = process.env.BRIDGE_API_KEY || localKeys.READONLY_API_KEY;
if (key) {
  const response = await fetch(new URL('/api/1/vehicles', origin), { headers:{ ...headers, Authorization:'Bearer '+key }, redirect:'error', signal:AbortSignal.timeout(30000) });
  const result = await response.json();
  if (!response.ok) throw new Error(`Vehicle list HTTP ${response.status}, code=${result.error || 'unknown'}`);
  console.log(JSON.stringify({ health:'ok', vehicle_count:result.response.length, states:result.response.map(car=>car.state), vehicle_commands_sent:0 }));
} else console.log(JSON.stringify({ health:'ok', vehicle_commands_sent:0, note:'Set BRIDGE_API_KEY to include a read-only vehicle listing check.' }));
