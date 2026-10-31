import test from 'node:test';
import assert from 'node:assert/strict';
import { OwnerAccountCore } from '../src/core';
import { bridgeFetch } from '../src/bridge';
import { regionConfig } from '../src/regions';
import type { BridgeEnv, Storage } from '../src/types';

for (const region of ['cn','na','eu']) test(`OAuth uses the documented ${region} authorization, token and Fleet audience endpoints`,async()=>{
  const records=new Map<string,unknown>();
  const storage:Storage={get:async<T>(key:string)=>records.get(key) as T|undefined,put:async(k,v)=>{records.set(k,v);},delete:async k=>records.delete(k),list:async({prefix})=>new Map([...records].filter(([key])=>key.startsWith(prefix))),getAlarm:async()=>null,setAlarm:async()=>{}};
  let owner:OwnerAccountCore;
  const env:BridgeEnv={OWNER:{idFromName:n=>n,get:()=>owner},APP_ORIGIN:'https://bridge.test',TESLA_REGION:region,TESLA_CLIENT_ID:'11111111-1111-4111-8111-111111111111',TESLA_CLIENT_SECRET:'test-secret',API_KEY:'test-caller',ADMIN_KEY:'test-admin',READONLY_API_KEY:'test-read',TOKEN_ENCRYPTION_KEY:Buffer.alloc(32,7).toString('base64'),TESLA_PRIVATE_KEY_PKCS8:'unused',PUBLIC_KEY_RAW:'unused',PUBLIC_KEY_PEM:'unused'};
  owner=new OwnerAccountCore({storage},env);
  const call=(path:string,method='GET',extra:Record<string,string>={})=>bridgeFetch(new Request('https://bridge.test'+path,{method,headers:{Authorization:'Bearer test-admin',...extra}}),env);
  const start=await call('/v1/auth/start','POST');
  const url=new URL((await start.json() as any).authorize_url);
  assert.equal(url.origin,region==='cn'?'https://auth.tesla.cn':'https://auth.tesla.com');
  const cookie=start.headers.get('Set-Cookie')!.split(';')[0];
  const original=globalThis.fetch; let calls=0;
  globalThis.fetch=async(input,init)=>{
    calls++; assert.equal(String(input),regionConfig(region).token);
    const body=new URLSearchParams(init!.body as string); assert.equal(body.get('audience'),regionConfig(region).fleet);
    return Response.json({access_token:'test-access',refresh_token:'test-refresh',expires_in:3600});
  };
  try{
    const callback='/callback?state='+url.searchParams.get('state')+'&code=test';
    assert.equal((await call(callback,'GET',{Cookie:cookie})).status,200);
    assert.equal((await call(callback,'GET',{Cookie:cookie})).status,400); assert.equal(calls,1);
  }finally{globalThis.fetch=original;}
});
