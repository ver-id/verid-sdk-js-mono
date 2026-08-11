import type { ICacheManager } from '@ver-id/core';
import { existsSync, mkdirSync, readFileSync } from 'fs';
import { mkdir, writeFile, rename, unlink } from 'fs/promises';
import { join } from 'path';
import { homedir, tmpdir } from 'os';

type KV = Record<string, string>;

/**
 * File-backed cache manager using atomic writes.
 *
 * @public
 */
export class FileStorageCacheManager implements ICacheManager {
  private cacheDir: string;
  private cacheFile: string;
  private kv: KV = {};

  /** @param cacheDir Optional directory; defaults to `~/.verid-cache`. */
  constructor(cacheDir?: string) {
    const base = cacheDir || join(homedir() || tmpdir(), '.verid-cache');
    this.cacheDir = base;
    this.cacheFile = join(this.cacheDir, 'cache.json');
    this.ensureDirSync();
    this.loadSync();
  }

  private ensureDirSync() {
    if (!existsSync(this.cacheDir)) {
      mkdirSync(this.cacheDir, { recursive: true, mode: 0o700 });
    }
  }

  private loadSync() {
    try {
      if (!existsSync(this.cacheFile)) {
        this.kv = {};
        return;
      }
      const raw = readFileSync(this.cacheFile, 'utf-8').trim();
      this.kv = raw ? (JSON.parse(raw) as KV) : {};
    } catch {
      // if corrupted, start clean (next write will repair)
      this.kv = {};
    }
  }

  private async persist(): Promise<void> {
    const json = JSON.stringify(this.kv, null, 2);
    const temp = `${this.cacheFile}.${process.pid}.${Date.now()}.tmp`;

    await mkdir(this.cacheDir, { recursive: true, mode: 0o700 });

    try {
      await writeFile(temp, json, { encoding: 'utf-8', mode: 0o600 });
    } catch (err) {
      try { await unlink(temp); } catch {
        // intentionally ignore errors during temp file cleanup
      }
      throw new Error(`Failed to write cache temp file: ${err instanceof Error ? err.message : String(err)}`);
    }

    try {
      await rename(temp, this.cacheFile);
    } catch {
      try { await unlink(temp); } catch {
        // intentionally ignore errors during temp file cleanup
      }
      throw new Error('Failed to persist cache');
    }
  }

  async save(key: string, value: string): Promise<void> {
    this.kv[key] = value;
    await this.persist();
  }

  get(key: string): string | null {
    return this.kv[key] ?? null;
  }

  async remove(key: string): Promise<void> {
    if (key in this.kv) {
      delete this.kv[key];
      await this.persist();
    }
  }

  async clear(): Promise<void> {
    this.kv = {};
    try { await unlink(this.cacheFile); } catch {
      // intentionally ignore errors during cache file removal
    }
  }
}