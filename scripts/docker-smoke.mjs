import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StreamableHTTPClientTransport } from '@modelcontextprotocol/sdk/client/streamableHttp.js';
const keys=JSON.parse(readFileSync('.secrets/production.json','utf8'));
const origin='http://127.0.0.1:18787';
async function ready(){for(let i=0;i<30;i++){try{if((await fetch(origin+'/health')).ok)return;}catch{}await new Promise(r=>setTimeout(r,1000));}throw new Error('Container did not become healthy');}
await ready();
assert.equal((await fetch(origin+'/v1/capabilities')).status,401);
const state=await fetch(origin+'/api/1/vehicles',{headers:{Authorization:'Bearer '+keys.READONLY_API_KEY}});
assert.equal(state.status,428); // No OAuth state in CI; therefore no Tesla API request is sent.
const start=await fetch(origin+'/v1/auth/start',{method:'POST',headers:{Authorization:'Bearer '+keys.ADMIN_KEY}});
assert.equal(start.status,200);
execFileSync('docker',['restart','tesla-bridge-smoke'],{stdio:'pipe'});
await ready();
const inspect="const {DatabaseSync}=require('node:sqlite');const d=new DatabaseSync('/data/owner.sqlite',{readOnly:true});const r=d.prepare(\"SELECT v FROM records WHERE k='oauth_state'\").get();const v=JSON.parse(r.v);if(!v.iv||!v.data)process.exit(1);d.close()";
execFileSync('docker',['exec','tesla-bridge-smoke','node','-e',inspect],{stdio:'pipe'});
const client=new Client({name:'docker-smoke',version:'1.0'});
try{
  await client.connect(new StreamableHTTPClientTransport(new URL(origin+'/mcp'),{requestInit:{headers:{Authorization:'Bearer '+keys.READONLY_API_KEY}}}));
  const tools=await client.listTools();assert.ok(tools.tools.length>0 && tools.tools.every(t=>t.annotations.readOnlyHint));
  const result=await client.callTool({name:'tesla_health',arguments:{}});assert.equal(result.structuredContent.status,'ok');
}finally{await client.close();}
console.log('Docker health, API authentication, encrypted-state persistence and MCP connection passed; no vehicle commands were sent.');
