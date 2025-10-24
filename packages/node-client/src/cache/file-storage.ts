import type { ICacheManager } from '@verid-sdk-js-mono/core';
import {
  existsSync,
  mkdirSync,
  readFileSync,
  openSync,
  writeSync,
  fsyncSync,
  closeSync,
  renameSync,
  unlinkSync,
} from 'fs';
import { join } from 'path';
import { homedir, tmpdir } from 'os';

type KV = Record<string, string>;

/**
 * Tiny file cache for SDKs (single-process, tiny data).
 * - JSON file on disk
 * - Atomic writes (temp -> rename)
 * - Restrictive perms
 * Perfect for PKCE verifier/state across sessions.
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
    this.ensureDir();
    this.load();
  }

  private ensureDir() {
    if (!existsSync(this.cacheDir)) {
      mkdirSync(this.cacheDir, { recursive: true, mode: 0o700 });
    }
  }

  private load() {
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

  private persist() {
    const json = JSON.stringify(this.kv, null, 2);
    const temp = `${this.cacheFile}.${process.pid}.${Date.now()}.tmp`;

    // write + fsync temp
    let fd: number | null = null;
    try {
      fd = openSync(temp, 'w', 0o600);
      const buf = Buffer.from(json, 'utf-8');
      writeSync(fd, buf, 0, buf.length, 0);
      fsyncSync(fd);
    } finally {
      if (fd !== null) closeSync(fd);
    }

    // atomic replace
    try {
      renameSync(temp, this.cacheFile);
    } catch {
      try { unlinkSync(temp); } catch {
        // intentionally ignore errors during temp file cleanup
      }
      throw new Error('Failed to persist cache');
    }
  }

  // ICacheManager methods

  save(key: string, value: string): void {
    this.kv[key] = value;
    this.persist();
  }

  get(key: string): string | null {
    return this.kv[key] ?? null;
  }

  remove(key: string): void {
    if (key in this.kv) {
      delete this.kv[key];
      this.persist();
    }
  }

  clear(): void {
    this.kv = {};
    try { unlinkSync(this.cacheFile); } catch {
      // intentionally ignore errors during cache file removal
    }
  }
}