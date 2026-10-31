import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import type { BridgeEnv } from '../types';
export function loadConfig(root = process.cwd()): Omit<BridgeEnv, 'OWNER'> {
  if (existsSync(resolve(root, '.env'))) process.loadEnvFile(resolve(root, '.env'));
  const read = (name: string) => existsSync(resolve(root, name)) ? JSON.parse(readFileSync(resolve(root, name), 'utf8')) : {};
  const env = { ...read('.config/runtime.json'), ...read('.secrets/production.json'), ...process.env };
  if (!env.PUBLIC_KEY_PEM && env.PUBLIC_KEY_PEM_B64) env.PUBLIC_KEY_PEM = Buffer.from(env.PUBLIC_KEY_PEM_B64, 'base64').toString('utf8');
  for (const name of ['APP_ORIGIN', 'TESLA_CLIENT_ID', 'TESLA_CLIENT_SECRET', 'API_KEY', 'ADMIN_KEY', 'TOKEN_ENCRYPTION_KEY', 'TESLA_PRIVATE_KEY_PKCS8', 'PUBLIC_KEY_RAW', 'PUBLIC_KEY_PEM']) {
    if (!env[name] || String(env[name]).startsWith('replace-')) throw new Error(`Missing configuration: ${name}; run npm run configure`);
  }
  const origin = new URL(env.APP_ORIGIN);
  if (origin.pathname !== '/' || origin.search || origin.hash || origin.username || origin.password) throw new Error('APP_ORIGIN must contain only scheme, host and optional port');
  return env;
}
