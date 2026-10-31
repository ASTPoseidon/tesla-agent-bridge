import { existsSync, readFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { resolve } from 'node:path';
if (!existsSync('.config/wrangler.jsonc')) throw new Error('Run npm run configure first');
const bootstrap = process.argv.includes('--bootstrap');
const runtime = JSON.parse(readFileSync('.config/runtime.json', 'utf8'));
if (!runtime.APP_ORIGIN.startsWith('https://')) throw new Error('CF production deployment requires an HTTPS APP_ORIGIN');
const wrangler = resolve('node_modules/wrangler/bin/wrangler.js');
function run(args) {
  const result = spawnSync(process.execPath, [wrangler, ...args, '--config', '.config/wrangler.jsonc'], { stdio: 'inherit', env: { ...process.env, WRANGLER_SEND_METRICS: 'false' } });
  if (result.status !== 0) process.exit(result.status || 1);
}
if (bootstrap) {
  if (!existsSync('.secrets/production.json')) throw new Error('Missing local secret bundle; restore it instead of regenerating paired keys');
  // Abort if this hostname already serves a different paired key.
  const secrets = JSON.parse(readFileSync('.secrets/production.json', 'utf8'));
  try {
    const response = await fetch(runtime.APP_ORIGIN+'/.well-known/appspecific/com.tesla.3p.public-key.pem', { redirect: 'error', signal: AbortSignal.timeout(10000) });
    if (response.ok && (await response.text()).replace(/\s/g,'') !== secrets.PUBLIC_KEY_PEM.replace(/\s/g,'')) throw new Error('Existing public key differs: restore the existing private key backup before bootstrap');
    if (!response.ok && ![404,503].includes(response.status)) throw new Error('Cannot verify the existing deployment key; HTTP '+response.status);
  } catch (error) {
    if (error.cause?.code !== 'ENOTFOUND') throw error;
    // A new hostname may have no DNS record until Custom Domain creation.
  }
}
const sha = spawnSync('git', ['rev-parse', 'HEAD'], { encoding: 'utf8' }).stdout?.trim();
run(['deploy', ...(sha && /^[a-f0-9]{40}$/.test(sha) ? ['--tag', sha.slice(0,12), '--message', 'Git source '+sha] : [])]);
if (bootstrap) run(['secret', 'bulk', '.secrets/production.json']);
console.log(`Ready: ${runtime.APP_ORIGIN}/setup`);
console.log(bootstrap ? 'Finish Tesla partner registration, owner authorization and phone key pairing in /setup.' : 'Existing Cloudflare Secrets were not uploaded or regenerated.');
