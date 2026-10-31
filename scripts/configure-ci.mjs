import { mkdir, writeFile } from 'node:fs/promises';
const required=['APP_ORIGIN','TESLA_CLIENT_ID','CLOUDFLARE_ACCOUNT_ID'];
for(const name of required) if(!process.env[name]) throw new Error('Missing deployment configuration: '+name);
const origin=new URL(process.env.APP_ORIGIN);
if(origin.protocol!=='https:' || origin.origin!==process.env.APP_ORIGIN || origin.username || origin.password) throw new Error('APP_ORIGIN must be an HTTPS origin');
const region=process.env.TESLA_REGION || 'cn'; if(!['cn','na','eu'].includes(region)) throw new Error('Invalid TESLA_REGION');
const config={ $schema:'../node_modules/wrangler/config-schema.json',name:process.env.WORKER_NAME || 'tesla-agent-bridge', account_id:process.env.CLOUDFLARE_ACCOUNT_ID,
  main:'../src/worker.ts',compatibility_date:'2026-10-30',workers_dev:true,routes:[{pattern:origin.hostname,custom_domain:true}],
  vars:{APP_ORIGIN:origin.origin,TESLA_REGION:region,TESLA_CLIENT_ID:process.env.TESLA_CLIENT_ID,TESLA_SCOPES:'openid offline_access vehicle_device_data vehicle_cmds vehicle_charging_cmds vehicle_location',MCP_ALLOW_CONTROL:process.env.MCP_ALLOW_CONTROL==='true'?'true':'false',CORS_ORIGINS:process.env.CORS_ORIGINS || ''},
  durable_objects:{bindings:[{name:'OWNER',class_name:'OwnerAccount'}]},migrations:[{tag:'v1',new_sqlite_classes:['OwnerAccount']}],observability:{enabled:false}};
await mkdir('.config',{recursive:true});
await writeFile('.config/runtime.json',JSON.stringify(config.vars,null,2)+'\n');
await writeFile('.config/wrangler.jsonc',JSON.stringify(config,null,2)+'\n');
console.log('Prepared CF configuration; existing Cloudflare Secrets will be preserved.');
