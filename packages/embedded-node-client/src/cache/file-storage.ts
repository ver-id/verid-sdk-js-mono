import type { ICacheManager } from '@verid-sdk-js-mono/core';
import { existsSync, mkdirSync, readFileSync } from 'fs';
import { mkdir, writeFile, rename, unlink } from 'fs/promises';
import { join } from 'path';
import { homedir, tmpdir } from 'os';

type KV = Record<string, string>;

/**
 * Tiny file cache for SDKs (single-process, tiny data).
 * - JSON file on disk
 * - Atomic writes (temp -> rename)
 * - Restrictive perms
 * Perfect for PKCE verifier/state across sessions.
 *
 * Save and remove operations are async to avoid blocking the event loop.
 * The constructor performs a synchronous initial load so the cache is ready immediately.
 *
 * @public
 */
export class FileStorageCacheManager implements ICacheManager {
  private cacheDir: string;
  private cacheFile: string;
  private kv: KV = {};

  /**
   * @param cacheDir Optional directory. Defaults to a user-scoped path so it survives reboots.
   */
  constructor(cacheDir?: string) {
    // choose a stable default over os.tmpdir() (which may be cleaned)
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

    // atomic replace
    try {
      await rename(temp, this.cacheFile);
    } catch {
      try { await unlink(temp); } catch {
        // intentionally ignore errors during temp file cleanup
      }
      throw new Error('Failed to persist cache');
    }
  }

  // ICacheManager methods

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