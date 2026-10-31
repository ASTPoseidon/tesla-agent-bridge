import { generateKeyPairSync, createPrivateKey, createPublicKey, randomBytes } from 'node:crypto';
import { existsSync, readFileSync } from 'node:fs';
import { mkdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { parseEnv } from 'node:util';
import { pathToFileURL } from 'node:url';

const scopes = 'openid offline_access vehicle_device_data vehicle_cmds vehicle_charging_cmds vehicle_location';
export async function configure(root = process.cwd(), overrides = {}) {
  const path = name => resolve(root, name);
  if (!existsSync(path('.env'))) throw new Error('Copy .env.example to .env and fill APP_ORIGIN, TESLA_REGION, TESLA_CLIENT_ID and TESLA_CLIENT_SECRET');
  const input = { ...parseEnv(readFileSync(path('.env'), 'utf8')), ...overrides };
  const origin = new URL(input.APP_ORIGIN);
  const loopback = ['localhost', '127.0.0.1', '[::1]'].includes(origin.hostname);
  if (origin.protocol !== 'https:' && !(origin.protocol === 'http:' && loopback)) throw new Error('APP_ORIGIN requires HTTPS; HTTP is allowed only for loopback development');
  if (origin.pathname !== '/' || origin.search || origin.hash || origin.username || origin.password) throw new Error('APP_ORIGIN must contain only scheme, host and optional port');
  if (!['cn', 'na', 'eu'].includes(input.TESLA_REGION || 'cn')) throw new Error('TESLA_REGION must be cn, na or eu');
  if (!input.TESLA_CLIENT_ID || input.TESLA_CLIENT_ID.startsWith('replace-') || /\s/.test(input.TESLA_CLIENT_ID) || input.TESLA_CLIENT_ID.length>256) throw new Error('Fill TESLA_CLIENT_ID with your own developer application ID');
  if (input.CLOUDFLARE_ACCOUNT_ID && !/^[a-f0-9]{32}$/i.test(input.CLOUDFLARE_ACCOUNT_ID)) throw new Error('Invalid CLOUDFLARE_ACCOUNT_ID');
  const workerName = input.WORKER_NAME || 'tesla-agent-bridge';
  if (!/^[a-z0-9-]{1,63}$/.test(workerName)) throw new Error('Invalid WORKER_NAME');
  for (const value of (input.CORS_ORIGINS || '').split(',').filter(Boolean)) {
    const cors = new URL(value.trim()); if (cors.origin !== value.trim() || cors.username || cors.password) throw new Error('CORS_ORIGINS requires exact origins, not wildcards');
  }
  await mkdir(path('.config'), { recursive: true, mode: 0o700 });
  await mkdir(path('.secrets'), { recursive: true, mode: 0o700 });
  await mkdir(path('.data'), { recursive: true, mode: 0o700 });
  let secrets;
  if (existsSync(path('.secrets/production.json'))) {
    secrets = JSON.parse(readFileSync(path('.secrets/production.json'), 'utf8'));
    for (const name of ['TESLA_CLIENT_SECRET','TESLA_PRIVATE_KEY_PKCS8','PUBLIC_KEY_RAW','PUBLIC_KEY_PEM','TOKEN_ENCRYPTION_KEY','API_KEY','ADMIN_KEY']) {
      if (!secrets[name]) throw new Error(`Existing secret bundle is incomplete: ${name}; restore its backup instead of regenerating keys`);
    }
  } else {
    const pair = generateKeyPairSync('ec', { namedCurve: 'prime256v1' });
    const jwk = pair.publicKey.export({ format: 'jwk' });
    secrets = {
      TESLA_CLIENT_SECRET: input.TESLA_CLIENT_SECRET,
      TESLA_PRIVATE_KEY_PKCS8: pair.privateKey.export({ format: 'der', type: 'pkcs8' }).toString('base64'),
      PUBLIC_KEY_RAW: Buffer.concat([Buffer.from([4]), Buffer.from(jwk.x, 'base64url'), Buffer.from(jwk.y, 'base64url')]).toString('base64'),
      PUBLIC_KEY_PEM: pair.publicKey.export({ format: 'pem', type: 'spki' }),
      TOKEN_ENCRYPTION_KEY: randomBytes(32).toString('base64'),
      API_KEY: randomBytes(32).toString('base64url'), ADMIN_KEY: randomBytes(32).toString('base64url'),
    };
  }
  if (input.TESLA_CLIENT_SECRET && !input.TESLA_CLIENT_SECRET.startsWith('replace-')) secrets.TESLA_CLIENT_SECRET = input.TESLA_CLIENT_SECRET;
  if (!secrets.TESLA_CLIENT_SECRET || secrets.TESLA_CLIENT_SECRET.startsWith('replace-')) throw new Error('Fill TESLA_CLIENT_SECRET before the first configure');
  if (!secrets.READONLY_API_KEY) secrets.READONLY_API_KEY = randomBytes(32).toString('base64url');
  const privateKey = createPrivateKey({ key: Buffer.from(secrets.TESLA_PRIVATE_KEY_PKCS8, 'base64'), format: 'der', type: 'pkcs8' });
  const publicKey = createPublicKey(privateKey);
  const sameKey = publicKey.export({ format: 'der', type: 'spki' }).equals(createPublicKey(secrets.PUBLIC_KEY_PEM).export({ format: 'der', type: 'spki' }));
  if (!sameKey || Buffer.from(secrets.TOKEN_ENCRYPTION_KEY, 'base64').length !== 32) throw new Error('Existing signing/encryption keys are inconsistent');
  const jwk = publicKey.export({ format: 'jwk' });
  const raw = Buffer.concat([Buffer.from([4]), Buffer.from(jwk.x, 'base64url'), Buffer.from(jwk.y, 'base64url')]);
  if (!raw.equals(Buffer.from(secrets.PUBLIC_KEY_RAW, 'base64'))) throw new Error('PUBLIC_KEY_RAW does not match the signing key');
  if (new Set([secrets.API_KEY,secrets.ADMIN_KEY,secrets.READONLY_API_KEY]).size !== 3) throw new Error('API/admin/read-only keys must differ');
  const runtime = { APP_ORIGIN: origin.origin, TESLA_REGION: input.TESLA_REGION || 'cn', TESLA_CLIENT_ID: input.TESLA_CLIENT_ID,
    TESLA_SCOPES: input.TESLA_SCOPES || scopes, MCP_ALLOW_CONTROL: input.MCP_ALLOW_CONTROL === 'true' ? 'true' : 'false', CORS_ORIGINS: input.CORS_ORIGINS || '' };
  const config = { $schema: '../node_modules/wrangler/config-schema.json', name: workerName,
    ...(input.CLOUDFLARE_ACCOUNT_ID ? { account_id: input.CLOUDFLARE_ACCOUNT_ID } : {}), main: '../src/worker.ts', compatibility_date: '2026-10-30', workers_dev: true,
    ...(origin.protocol === 'https:' && !loopback ? { routes: [{ pattern: origin.hostname, custom_domain: true }] } : {}),
    vars: runtime, durable_objects: { bindings: [{ name: 'OWNER', class_name: 'OwnerAccount' }] },
    migrations: [{ tag: 'v1', new_sqlite_classes: ['OwnerAccount'] }], observability: { enabled: false } };
  await writeFile(path('.secrets/production.json'), JSON.stringify(secrets, null, 2) + '\n', { mode: 0o600 });
  await writeFile(path('.config/runtime.json'), JSON.stringify(runtime, null, 2) + '\n', { mode: 0o600 });
  await writeFile(path('.config/wrangler.jsonc'), JSON.stringify(config, null, 2) + '\n', { mode: 0o600 });
  const docker = { ...runtime, ...secrets, PUBLIC_KEY_PEM_B64: Buffer.from(secrets.PUBLIC_KEY_PEM).toString('base64'), HOST: '0.0.0.0', PORT: '8787', DATA_DIR: '/data' };
  delete docker.PUBLIC_KEY_PEM;
  if (Object.values(docker).some(value => /[\r\n]/.test(value))) throw new Error('Environment values cannot contain newlines');
  await writeFile(path('.secrets/docker.env'), Object.entries(docker).map(([name,value]) => `${name}=${value}`).join('\n')+'\n', { mode: 0o600 });
  // Keep the Tesla client secret in the ignored secret bundle, not duplicated in .env.
  const lines = readFileSync(path('.env'), 'utf8').split(/\r?\n/).filter(line => !/^\s*(TESLA_CLIENT_SECRET|DOMAIN)\s*=/.test(line));
  await writeFile(path('.env'), lines.join('\n').trimEnd()+`\nDOMAIN=${origin.hostname}\n`, { mode: 0o600 });
  return { runtime, secrets, config };
}
if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  try { await configure(); console.log('Configured .config/ and .secrets/. Existing vehicle keys are preserved. Keep .secrets/ private and back it up.'); }
  catch (error) { console.error(error.message); process.exitCode = 1; }
}
