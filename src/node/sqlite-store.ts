import { DatabaseSync } from 'node:sqlite';
import { mkdirSync, chmodSync } from 'node:fs';
import { dirname } from 'node:path';
import type { Storage } from '../types';
export class SqliteStore implements Storage {
  private db: DatabaseSync;
  private timer?: ReturnType<typeof setTimeout>;
  private callback?: () => Promise<void>;
  constructor(path: string) {
    mkdirSync(dirname(path), { recursive: true, mode: 0o700 });
    this.db = new DatabaseSync(path);
    try { chmodSync(path, 0o600); } catch { /* Windows permission model differs. */ }
    this.db.exec('PRAGMA journal_mode=WAL; PRAGMA busy_timeout=5000; CREATE TABLE IF NOT EXISTS records (k TEXT PRIMARY KEY, v TEXT NOT NULL); CREATE TABLE IF NOT EXISTS metadata (k TEXT PRIMARY KEY, v TEXT NOT NULL)');
  }
  async get<T>(key: string): Promise<T | undefined> {
    const row = this.db.prepare('SELECT v FROM records WHERE k=?').get(key) as { v: string } | undefined;
    return row ? JSON.parse(row.v) : undefined;
  }
  async put(key: string, value: unknown) { this.db.prepare('INSERT OR REPLACE INTO records(k,v) VALUES (?,?)').run(key, JSON.stringify(value)); }
  async delete(key: string) { return this.db.prepare('DELETE FROM records WHERE k=?').run(key).changes; }
  async list({ prefix, limit }: { prefix: string; limit?: number }) {
    const rows = this.db.prepare('SELECT k,v FROM records WHERE substr(k,1,?)=? ORDER BY k LIMIT ?').all(prefix.length, prefix, limit ?? -1) as { k: string; v: string }[];
    return new Map(rows.map(row => [row.k, JSON.parse(row.v)]));
  }
  async getAlarm() { const row = this.db.prepare("SELECT v FROM metadata WHERE k='alarm'").get() as { v: string } | undefined; return row ? Number(row.v) : null; }
  async setAlarm(time: number) {
    this.db.prepare("INSERT OR REPLACE INTO metadata(k,v) VALUES ('alarm',?)").run(String(time));
    this.schedule(time);
  }
  async onAlarm(callback: () => Promise<void>) { this.callback = callback; const time = await this.getAlarm(); if (time !== null) this.schedule(time); }
  private schedule(time: number) {
    clearTimeout(this.timer);
    if (!this.callback) return;
    this.timer = setTimeout(async () => {
      this.db.prepare("DELETE FROM metadata WHERE k='alarm'").run();
      try { await this.callback?.(); } catch { console.error('Storage cleanup failed'); }
    }, Math.max(1, Math.min(time - Date.now(), 2147483647)));
    this.timer.unref();
  }
  close() { clearTimeout(this.timer); this.db.close(); }
}
