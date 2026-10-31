import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, readFile, writeFile, mkdir, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, resolve, dirname, basename } from 'node:path';
import { configure } from '../scripts/configure.mjs';
import { encryptBundle, decryptBundle } from '../scripts/backup.mjs';
import { createBridge, createHttpServer } from '../src/node/server';
import { SqliteStore } from '../src/node/sqlite-store';
import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StreamableHTTPClientTransport } from '@modelcontextprotocol/sdk/client/streamableHttp.js';
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js';
import { execFileSync } from 'node:child_process';

async function fixture() {
  const root=await mkdtemp(join(tmpdir(),'tesla-test-'));
  await writeFile(join(root,'.env'),'APP_ORIGIN=https://bridge.test\nTESLA_REGION=cn\nTESLA_CLIENT_ID=11111111-1111-4111-8111-111111111111\nTESLA_CLIENT_SECRET=test-secret-only\nMCP_ALLOW_CONTROL=true\n');
  const configured=await configure(root);
  return {root,...configured,env:{...configured.runtime,...configured.secrets}};
}
async function cleanup(root:string) {
  const target=resolve(root);
  if(dirname(target)!==resolve(tmpdir()) || !basename(target).startsWith('tesla-test-')) throw new Error('Refusing cleanup outside the test directory');
  await rm(target,{recursive:true,force:true});
}
test('configuration is repeatable and encrypted backups preserve keys and reject tampering',async()=>{
  const f=await fixture();
  try{
    const second=await configure(f.root); assert.deepEqual(second.secrets,f.secrets);
    const passphrase='a test-only long backup passphrase';
    const encrypted=encryptBundle({secrets:f.secrets,runtime:f.runtime},passphrase);
    assert.ok(!JSON.stringify(encrypted).includes(f.secrets.TESLA_PRIVATE_KEY_PKCS8));
    assert.deepEqual(decryptBundle(encrypted,passphrase).secrets,f.secrets);
    assert.throws(()=>decryptBundle(encrypted,'wrong password, still long enough'));
    assert.throws(()=>decryptBundle({...encrypted,tag:Buffer.alloc(16).toString('base64')},passphrase));
  }finally{await cleanup(f.root);}
});
test('SQLite persists encrypted owner records and read-only keys cannot authorize or control',async()=>{
  const f=await fixture(); const path=join(f.root,'owner.sqlite');
  let app=createBridge(f.env,path);
  const call=(url:string,method='GET',key=f.secrets.ADMIN_KEY)=>app.fetch(new Request('https://bridge.test'+url,{method,headers:{Authorization:'Bearer '+key}}));
  try{
    assert.equal((await call('/v1/capabilities','GET',f.secrets.READONLY_API_KEY)).status,200);
    assert.equal((await call('/v1/auth/status','GET',f.secrets.READONLY_API_KEY)).status,403);
    assert.equal((await call('/api/1/vehicles/5YJ30123456789ABC/wake_up','POST',f.secrets.READONLY_API_KEY)).status,403);
    assert.equal((await app.fetch(new Request('https://bridge.test/health',{headers:{Origin:'https://untrusted.test'}}))).status,403);
    const start=await call('/v1/auth/start','POST'); assert.equal(start.status,200);
    const state=new URL((await start.json() as any).authorize_url).searchParams.get('state');
    app.close();
    const bytes=await readFile(path); assert.ok(!bytes.includes(Buffer.from(state!)));
    app=createBridge(f.env,path);
    const status=await call('/v1/auth/status'); assert.equal(status.status,200); assert.equal((await status.json() as any).authorized,false);
    const store=new SqliteStore(path);
    const record:any=await store.get('oauth_state'); assert.ok(record.iv && record.data); store.close();
  }finally{app.close();await cleanup(f.root);}
});
test('official MCP client connects over HTTP, scopes tools, and cannot control without confirmation',async()=>{
  const f=await fixture(); const app=createHttpServer(f.env,join(f.root,'owner.sqlite'));
  await new Promise<void>(resolve=>app.server.listen(0,'127.0.0.1',resolve));
  const address=app.server.address() as any;
  const endpoint=new URL(`http://127.0.0.1:${address.port}/mcp`);
  const readonly=new Client({name:'integration-test',version:'1.0'});
  const control=new Client({name:'integration-test-control',version:'1.0'});
  const headers=(key:string)=>({requestInit:{headers:{Authorization:'Bearer '+key}}});
  try{
    await readonly.connect(new StreamableHTTPClientTransport(endpoint,headers(f.secrets.READONLY_API_KEY)));
    const readTools=await readonly.listTools(); assert.ok(readTools.tools.length>0); assert.ok(readTools.tools.every(t=>t.annotations?.readOnlyHint));
    const health:any=await readonly.callTool({name:'tesla_health',arguments:{}}); assert.equal(health.structuredContent.status,'ok');
    await assert.rejects(readonly.callTool({name:'tesla_door_unlock',arguments:{vin:'5YJ30123456789ABC',confirmed:true,idempotency_key:'test-no-physical-action'}}));
    await control.connect(new StreamableHTTPClientTransport(endpoint,headers(f.secrets.API_KEY)));
    const all=await control.listTools(); assert.ok(all.tools.some(t=>t.name==='tesla_door_unlock'));
    await assert.rejects(control.callTool({name:'tesla_door_unlock',arguments:{vin:'5YJ30123456789ABC',idempotency_key:'test-no-confirmation'}}));
    await assert.rejects(control.callTool({name:'tesla_door_unlock',arguments:{vin:'5YJ30123456789ABC',confirmed:false,idempotency_key:'test-false-confirmation'}}));
    const spec=await fetch(`http://127.0.0.1:${address.port}/openapi.json`); assert.equal((await spec.json() as any).servers[0].url,'https://bridge.test');
    const agentSpec:any=await (await fetch(`http://127.0.0.1:${address.port}/openapi.agent.json`)).json();
    assert.ok(agentSpec.paths['/api/1/vehicles']);assert.ok(!Object.keys(agentSpec.paths).some(path=>path.startsWith('/v1/auth')||path.startsWith('/v1/setup')));
  }finally{await readonly.close();await control.close();await app.close();await cleanup(f.root);}
});

test('official MCP stdio client can use the generic remote bridge adapter',async()=>{
  const f=await fixture(); const app=createHttpServer(f.env,join(f.root,'owner.sqlite'));
  await new Promise<void>(r=>app.server.listen(0,'127.0.0.1',r));
  const address=app.server.address() as any;
  const client=new Client({name:'stdio-integration',version:'1.0'});
  try{
    const transport=new StdioClientTransport({command:process.execPath,args:['--import','tsx','src/node/mcp-stdio.ts'],
      env:{...process.env,BRIDGE_URL:`http://127.0.0.1:${address.port}`,BRIDGE_API_KEY:f.secrets.READONLY_API_KEY} as Record<string,string>,stderr:'pipe'});
    await client.connect(transport);
    const tools=await client.listTools();assert.ok(tools.tools.every(t=>t.annotations?.readOnlyHint));
    const result:any=await client.callTool({name:'tesla_health',arguments:{}});assert.equal(result.structuredContent.status,'ok');
  }finally{await client.close();await app.close();await cleanup(f.root);}
});

test('backup CLI restores credentials and a consistent SQLite snapshot into an empty installation',async()=>{
  const f=await fixture(); const restoreRoot=await mkdtemp(join(tmpdir(),'tesla-test-'));
  const passwordFile=join(f.root,'password.txt'); const app=createBridge(f.env,join(f.root,'.data/owner.sqlite'));
  try{
    await app.fetch(new Request('https://bridge.test/v1/auth/start',{method:'POST',headers:{Authorization:'Bearer '+f.secrets.ADMIN_KEY}}));
    await writeFile(passwordFile,'long test-only backup password');
    const script=resolve('scripts/backup.mjs'); const options={env:{...process.env,BACKUP_PASSPHRASE_FILE:passwordFile},stdio:'pipe' as const};
    execFileSync(process.execPath,[script],{...options,cwd:f.root});
    const {readdir}=await import('node:fs/promises');
    const files=await readdir(join(f.root,'.backups'));assert.equal(files.length,1);
    execFileSync(process.execPath,[script,'--restore',join(f.root,'.backups',files[0])],{...options,cwd:restoreRoot});
    const keys=JSON.parse(await readFile(join(restoreRoot,'.secrets/production.json'),'utf8'));assert.equal(keys.TESLA_PRIVATE_KEY_PKCS8,f.secrets.TESLA_PRIVATE_KEY_PKCS8);
    const restored=new SqliteStore(join(restoreRoot,'.data/owner.sqlite'));assert.ok(await restored.get('oauth_state'));restored.close();
    assert.throws(()=>execFileSync(process.execPath,[script,'--restore',join(f.root,'.backups',files[0])],{...options,cwd:restoreRoot}));
  }finally{app.close();await cleanup(f.root);await cleanup(restoreRoot);}
});
