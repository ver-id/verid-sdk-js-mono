import { BaseCacheManager } from '@verid-sdk-js-mono/core/cache';
import type { CacheEntry, CacheManagerOptions } from '@verid-sdk-js-mono/core/cache';
import { assertString } from '@verid-sdk-js-mono/core/utils';
import { InvalidArgumentError } from '@verid-sdk-js-mono/core/error';
import { existsSync, mkdirSync, readFileSync, renameSync, unlinkSync, writeFileSync } from 'fs';
import { mkdir, readdir, rename, stat, unlink, writeFile } from 'fs/promises';
import { createHash, randomUUID } from 'crypto';
import { join } from 'path';
import { homedir, tmpdir } from 'os';

/**
 * Files written by this cache: `<sha256>.json` entries plus the temp files of in-flight writes.
 * Foreign files in the directory are left alone.
 */
const CACHE_FILE_PATTERN = /^[0-9a-f]{64}\.json(\..+\.tmp)?$/;

/** Single-file layout used before per-key entries. Imported once, then removed. */
const LEGACY_CACHE_FILE = 'cache.json';

/** How often a process sweeps expired entries from a cache directory. */
const PRUNE_INTERVAL_MS = 5 * 60 * 1000;

/** Last sweep per cache directory, so many instances in one process do not each sweep. */
const lastPrunedAt = new Map<string, number>();

function hasErrnoCode(err: unknown, code: string): boolean {
  return (err as NodeJS.ErrnoException | null)?.code === code;
}

/**
 * Tiny file cache for SDKs (small, short-lived data).
 * - one JSON file per key, so writers never overwrite each other's entries
 * - atomic writes (temp -> rename)
 * - restrictive perms
 * - entries expire after the configured `ttlSeconds`
 *
 * Perfect for PKCE verifier/state across sessions. Every read goes to disk, so all
 * processes on the same host share the cache: a flow started by one worker can be
 * finalized by another. Deployments spanning multiple hosts or containers do not
 * share a filesystem and need `RedisCacheManager` or `DynamoDBCacheManager`.
 *
 * Save and remove operations are async to avoid blocking the event loop; `get` is
 * synchronous and reads a single small file.
 *
 * @public
 */
export class FileStorageCacheManager extends BaseCacheManager {
  private cacheDir: string;

  /**
   * @param cacheDir Optional directory. Defaults to a user-scoped path so it survives reboots.
   * @param options Cache behaviour, see {@link CacheManagerOptions}.
   * @throws {InvalidArgumentError} If cacheDir or options contain invalid values
   */
  constructor(cacheDir?: string, options?: CacheManagerOptions) {
    super(options);

    assertString(cacheDir, 'cacheDir', InvalidArgumentError, { allowUndefined: true });

    // choose a stable default over os.tmpdir() (which may be cleaned)
    this.cacheDir = cacheDir || join(homedir() || tmpdir(), '.verid-cache');
    this.ensureDirSync();
    this.migrateLegacyFileSync();
  }

  private ensureDirSync() {
    if (!existsSync(this.cacheDir)) {
      mkdirSync(this.cacheDir, { recursive: true, mode: 0o700 });
    }
  }

  private entryPath(prefixedKey: string): string {
    return join(this.cacheDir, `${createHash('sha256').update(prefixedKey).digest('hex')}.json`);
  }

  /** Unique per write, so concurrent writes to the same entry never share a temp file. */
  private tempPath(target: string): string {
    return `${target}.${process.pid}.${randomUUID()}.tmp`;
  }

  private readRawSync(path: string): string | null {
    try {
      return readFileSync(path, 'utf-8').trim();
    } catch (err) {
      if (hasErrnoCode(err, 'ENOENT')) {
        return null;
      }
      throw err;
    }
  }

  private async unlinkQuietly(path: string): Promise<void> {
    try {
      await unlink(path);
    } catch {
      // intentionally ignore errors during cache file cleanup
    }
  }

  private async listCacheFiles(): Promise<string[]> {
    try {
      const names = await readdir(this.cacheDir);
      return names.filter((name) => CACHE_FILE_PATTERN.test(name));
    } catch (err) {
      if (hasErrnoCode(err, 'ENOENT')) {
        return [];
      }
      throw err;
    }
  }

  /**
   * Removes entries whose TTL has elapsed, using the file mtime as the write time.
   * Throttled per cache directory so a busy process sweeps at most once per
   * prune interval. Expiry itself is enforced on read, this only reclaims disk.
   */
  private async pruneExpired(): Promise<void> {
    if (this.ttlSeconds === 0) {
      return;
    }

    const now = Date.now();
    if (now - (lastPrunedAt.get(this.cacheDir) ?? 0) < PRUNE_INTERVAL_MS) {
      return;
    }
    lastPrunedAt.set(this.cacheDir, now);

    const ttlMs = this.ttlSeconds * 1000;
    for (const name of await this.listCacheFiles()) {
      const path = join(this.cacheDir, name);
      try {
        const { mtimeMs } = await stat(path);
        if (now - mtimeMs > ttlMs) {
          await unlink(path);
        }
      } catch {
        // another writer replaced or removed the entry mid-sweep
      }
    }
  }

  /**
   * Imports a cache.json written by an earlier version into per-key entries and removes it,
   * so flows started before an upgrade can still be finalized.
   */
  private migrateLegacyFileSync(): void {
    const legacyFile = join(this.cacheDir, LEGACY_CACHE_FILE);
    if (!existsSync(legacyFile)) {
      return;
    }

    try {
      const raw = readFileSync(legacyFile, 'utf-8').trim();
      const kv = raw ? (JSON.parse(raw) as Record<string, unknown>) : {};

      for (const [key, value] of Object.entries(kv)) {
        if (typeof value === 'string') {
          this.writeEntrySync(this.prefixedKey(key), value);
        }
      }

      unlinkSync(legacyFile);
    } catch {
      // best effort: an unreadable legacy file must not break construction
    }
  }

  private writeEntrySync(prefixedKey: string, value: string): void {
    const target = this.entryPath(prefixedKey);
    const temp = this.tempPath(target);
    writeFileSync(temp, this.encodeEntry(prefixedKey, value), { encoding: 'utf-8', mode: 0o600 });
    renameSync(temp, target);
  }

  // ICacheManager methods

  async save(key: string, value: string): Promise<void> {
    const prefixedKey = this.prefixedKey(key);
    this.assertValue(value);

    const target = this.entryPath(prefixedKey);
    const temp = this.tempPath(target);

    await mkdir(this.cacheDir, { recursive: true, mode: 0o700 });

    try {
      await writeFile(temp, this.encodeEntry(prefixedKey, value), { encoding: 'utf-8', mode: 0o600 });
      // atomic replace
      await rename(temp, target);
    } catch (err) {
      await this.unlinkQuietly(temp);
      throw new Error(`Failed to persist cache: ${err instanceof Error ? err.message : String(err)}`);
    }

    await this.pruneExpired().catch(() => {
      // best effort: a failed sweep must not fail a completed write
    });
  }

  get(key: string): string | null {
    const prefixedKey = this.prefixedKey(key);
    const path = this.entryPath(prefixedKey);

    const entry = this.decodeEntry(this.readRawSync(path), prefixedKey);
    if (!entry) {
      return null;
    }

    if (this.isExpired(entry)) {
      try {
        unlinkSync(path);
      } catch {
        // intentionally ignore errors while dropping an expired entry
      }
      return null;
    }

    return entry.value;
  }

  async remove(key: string): Promise<void> {
    try {
      await unlink(this.entryPath(this.prefixedKey(key)));
    } catch (err) {
      if (!hasErrnoCode(err, 'ENOENT')) {
        throw err;
      }
    }
  }

  async clear(): Promise<void> {
    for (const name of await this.listCacheFiles()) {
      const path = join(this.cacheDir, name);
      if (this.belongsToPrefix(path)) {
        await this.unlinkQuietly(path);
      }
    }
  }

  /**
   * Entries written under another prefix share the directory but not the namespace,
   * so they survive a clear. Leftovers that no longer parse are treated as garbage.
   */
  private belongsToPrefix(path: string): boolean {
    try {
      const raw = this.readRawSync(path);
      const entry = raw ? (JSON.parse(raw) as CacheEntry) : null;
      return typeof entry?.key === 'string' ? entry.key.startsWith(this.prefix) : true;
    } catch {
      return true;
    }
  }
}
