import { createCipheriv, createDecipheriv, randomBytes, scryptSync } from 'node:crypto';
import { existsSync, readFileSync } from 'node:fs';
import { mkdir, writeFile, mkdtemp, readFile, unlink, rmdir } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { resolve, join } from 'node:path';
import { DatabaseSync, backup as backupSqlite } from 'node:sqlite';
import { pathToFileURL } from 'node:url';
const aad = Buffer.from('tesla-agent-bridge-backup-v1');
export function encryptBundle(bundle, passphrase) {
  if (passphrase.length < 16) throw new Error('Backup passphrase must have at least 16 characters');
  const salt = randomBytes(16), iv = randomBytes(12);
  const key = scryptSync(passphrase, salt, 32, { N: 32768, maxmem: 64*1024*1024 });
  const cipher = createCipheriv('aes-256-gcm', key, iv); cipher.setAAD(aad);
  const data = Buffer.concat([cipher.update(JSON.stringify(bundle), 'utf8'), cipher.final()]);
  return { format: 'tesla-agent-bridge-backup-v1', kdf: 'scrypt-N32768', salt: salt.toString('base64'), iv: iv.toString('base64'), tag: cipher.getAuthTag().toString('base64'), data: data.toString('base64') };
}
export function decryptBundle(envelope, passphrase) {
  if (envelope.format !== 'tesla-agent-bridge-backup-v1' || envelope.kdf !== 'scrypt-N32768') throw new Error('Unsupported backup format');
  const key = scryptSync(passphrase, Buffer.from(envelope.salt,'base64'), 32, { N:32768, maxmem:64*1024*1024 });
  const decipher = createDecipheriv('aes-256-gcm', key, Buffer.from(envelope.iv,'base64')); decipher.setAAD(aad); decipher.setAuthTag(Buffer.from(envelope.tag,'base64'));
  return JSON.parse(Buffer.concat([decipher.update(Buffer.from(envelope.data,'base64')),decipher.final()]).toString('utf8'));
}
async function main() {
  const passphraseFile = process.env.BACKUP_PASSPHRASE_FILE;
  if (!passphraseFile) throw new Error('Set BACKUP_PASSPHRASE_FILE to a private file; do not put a passphrase in command arguments');
  const passphrase = readFileSync(passphraseFile,'utf8').trimEnd();
  const restoreIndex = process.argv.indexOf('--restore');
  if (restoreIndex !== -1) {
    if (existsSync('.secrets/production.json') || existsSync('.data/owner.sqlite')) throw new Error('Restore into an empty installation; keep the current data and keys intact');
    const file = process.argv[restoreIndex+1]; if (!file) throw new Error('Supply a backup filename');
    const bundle = decryptBundle(JSON.parse(readFileSync(file,'utf8')),passphrase);
    if (bundle.version !== 1 || !bundle.secrets || !bundle.runtime) throw new Error('Invalid backup content');
    for (const folder of ['.config','.secrets','.data']) await mkdir(folder,{recursive:true,mode:0o700});
    await writeFile('.secrets/production.json',JSON.stringify(bundle.secrets,null,2)+'\n',{mode:0o600});
    await writeFile('.config/runtime.json',JSON.stringify(bundle.runtime,null,2)+'\n',{mode:0o600});
    await writeFile('.env',bundle.env || '',{mode:0o600});
    if (bundle.state) await writeFile('.data/owner.sqlite',Buffer.from(bundle.state,'base64'),{mode:0o600});
    console.log('Backup restored. Run npm run configure to recreate Docker/CF configuration with the same keys.'); return;
  }
  const secrets = JSON.parse(readFileSync('.secrets/production.json','utf8'));
  const runtime = JSON.parse(readFileSync('.config/runtime.json','utf8'));
  let state;
  if (existsSync('.data/owner.sqlite')) {
    const folder = await mkdtemp(join(tmpdir(),'tesla-backup-'));
    const target = join(folder,'snapshot.sqlite');
    const db = new DatabaseSync(resolve('.data/owner.sqlite'),{readOnly:true});
    try { await backupSqlite(db,target); state=(await readFile(target)).toString('base64'); }
    finally { db.close(); if (existsSync(target)) await unlink(target); await rmdir(folder); }
  }
  const bundle = { version:1, created_at:new Date().toISOString(), secrets, runtime, env:readFileSync('.env','utf8'), ...(state ? {state} : {}) };
  const envelope = encryptBundle(bundle,passphrase);
  await mkdir('.backups',{recursive:true,mode:0o700});
  const file = '.backups/tesla-'+new Date().toISOString().replace(/[:.]/g,'-')+'.enc';
  await writeFile(file,JSON.stringify(envelope)+'\n',{mode:0o600});
  console.log(`Encrypted backup saved: ${file}; SQLite state included: ${Boolean(state)}`);
  if (!state) console.log('CF owner tokens and sessions remain in Durable Objects; this backup includes local keys/configuration only.');
}
if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  try { await main(); } catch (error) { console.error('Backup operation failed: '+error.message); process.exitCode=1; }
}
