import { createServer, type Server } from 'node:http';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { bridgeFetch } from '../bridge';
import { OwnerAccountCore } from '../core';
import type { BridgeEnv } from '../types';
import { SqliteStore } from './sqlite-store';
import { loadConfig } from './config';

export function createBridge(env: Omit<BridgeEnv, 'OWNER'>, databasePath: string) {
  const store = new SqliteStore(databasePath);
  let owner: OwnerAccountCore;
  const fullEnv: BridgeEnv = { ...env, OWNER: { idFromName: name => name, get: () => owner } };
  owner = new OwnerAccountCore({ storage: store }, fullEnv);
  void store.onAlarm(() => owner.alarm());
  return { fetch: (request: Request) => bridgeFetch(request, fullEnv), close: () => store.close() };
}
export function createHttpServer(env: Omit<BridgeEnv, 'OWNER'>, databasePath: string): { server: Server; close: () => Promise<void> } {
  const bridge = createBridge(env, databasePath);
  const server = createServer(async (incoming, outgoing) => {
    try {
      const chunks: Buffer[] = []; let size = 0;
      for await (const chunk of incoming) {
        size += chunk.length;
        if (size > 16384) { outgoing.writeHead(413).end(); return; }
        chunks.push(chunk);
      }
      const method = incoming.method || 'GET';
      const headers = new Headers();
      for (const [name, value] of Object.entries(incoming.headers)) if (value !== undefined) headers.set(name, Array.isArray(value) ? value.join(',') : value);
      const path = incoming.url || '/';
      if (!path.startsWith('/') || path.startsWith('//')) { outgoing.writeHead(400).end(); return; }
      const request = new Request(new URL(path, 'http://bridge.internal'), { method, headers,
        ...(['GET', 'HEAD'].includes(method) ? {} : { body: Buffer.concat(chunks).toString('utf8') }) });
      const response = await bridge.fetch(request);
      const outgoingHeaders: Record<string, string> = {};
      response.headers.forEach((value, name) => { outgoingHeaders[name] = value; });
      outgoing.writeHead(response.status, outgoingHeaders);
      if (response.body && method !== 'HEAD') {
        const reader = response.body.getReader();
        while (true) { const chunk = await reader.read(); if (chunk.done) break; outgoing.write(Buffer.from(chunk.value)); }
      }
      outgoing.end();
    } catch { if (!outgoing.headersSent) outgoing.writeHead(500); outgoing.end(); }
  });
  server.requestTimeout = 90000;
  return { server, close: () => new Promise((resolveClose, reject) => server.close(error => { bridge.close(); error ? reject(error) : resolveClose(); })) };
}
async function main() {
  const env = loadConfig();
  const app = createHttpServer(env, resolve(process.env.DATA_DIR || '.data', 'owner.sqlite'));
  const port = Number(process.env.PORT || 8787);
  app.server.listen(port, process.env.HOST || '127.0.0.1', () => console.log(`Tesla Agent Bridge listening on port ${port}`));
  const stop = async () => { await app.close(); process.exit(0); };
  process.once('SIGTERM', stop); process.once('SIGINT', stop);
}
if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) await main();
