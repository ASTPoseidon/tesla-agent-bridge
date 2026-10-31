import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
// Scan only publishable Git files, including untracked non-ignored files before commit.
const files = [...new Set(execFileSync('git',['ls-files','-z','--cached','--others','--exclude-standard'],{encoding:'utf8'}).split('\0').filter(Boolean))];
const problems=[];
for(const file of files){
  if (/(^|\/)(\.secrets|\.data|\.backups|\.config|deployment-reports)(\/|$)|(^|\/)\.env$|\.(dpapi|pem|key|pfx|p12|sqlite|db|zip|enc)$/i.test(file)) problems.push(file+': private/generated file');
  const text=readFileSync(file,'utf8');
  if (/ta-secret\.[A-Za-z0-9+%._!-]{8,}|gh[pousr]_[A-Za-z0-9]{25,}|AKIA[0-9A-Z]{16}|-----BEGIN (?:RSA |ENCRYPTED )?PRIVATE KEY-----/.test(text)) problems.push(file+': credential pattern');
  // Tesla publishes EC vector keys; only the two existing simulation tests may contain them.
  if (/-----BEGIN EC PRIVATE KEY-----[\r\n]+[A-Za-z0-9+/=\r\n]+-----END EC PRIVATE KEY-----/.test(text) && !['tests/protocol.test.ts','tests/worker.test.ts'].includes(file)) problems.push(file+': unexpected EC private key');
}
if(problems.length){console.error(problems.join('\n'));process.exitCode=1;}else console.log(`Public-source scan passed (${files.length} files).`);
