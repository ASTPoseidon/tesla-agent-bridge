import { build } from 'esbuild';
import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
await mkdir('dist', { recursive: true });
const result = await build({ entryPoints: ['src/node/server.ts', 'src/node/mcp-stdio.ts'], outdir: 'dist', outExtension: { '.js': '.mjs' }, bundle: true, format: 'esm', platform: 'node', target: 'node22', metafile: true, legalComments: 'linked',
  banner: { js: "import { createRequire as __createRequire } from 'node:module'; const require = __createRequire(import.meta.url);" } });
const packages = new Set(Object.keys(result.metafile.inputs).filter(p => p.startsWith('node_modules/')).map(p => p.split('/').slice(0,p.split('/')[1].startsWith('@')?3:2).join('/')));
const notices = [await readFile('LICENSE','utf8'), await readFile('NOTICE','utf8'), await readFile('vendor/tesla/LICENSE','utf8')];
for (const folder of packages) {
  for (const file of await readdir(folder)) if (/^(licen[cs]e|copying|notice)(\.|$)/i.test(file)) {
    try { notices.push(`\n--- ${folder}/${file} ---\n`+await readFile(folder+'/'+file,'utf8')); } catch { /* License directory is not a text file. */ }
  }
}
await writeFile('dist/THIRD_PARTY_LICENSES.txt',notices.join('\n\n'));
console.log('Built Node/VPS server and stdio MCP adapter');
