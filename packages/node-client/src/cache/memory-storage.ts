import { BaseCacheManager } from '@verid-sdk-js-mono/core/cache';
import type { CacheManagerOptions } from '@verid-sdk-js-mono/core/cache';

/**
 * Simple in-memory cache manager using Map.
 *
 * Features:
 * - Zero dependencies, works everywhere (Lambda, Node, etc.)
 * - Fastest possible reads/writes
 * - No I/O overhead
 *
 * Limitations:
 * - Data is lost when the process restarts
 * - Not shared across instances/processes: a server running multiple workers will
 *   fail to finalize flows, because the callback rarely lands on the worker that
 *   started the flow. Use FileStorageCacheManager, RedisCacheManager or
 *   DynamoDBCacheManager there.
 *
 * Perfect for short-lived data like PKCE verifiers and OAuth state
 * within a single request lifecycle or Lambda invocation.
 *
 * @public
 */
export class MemoryStorageCacheManager extends BaseCacheManager {
  private cache: Map<string, string> = new Map();

  /**
   * @param options - Cache behaviour, see {@link CacheManagerOptions}
   * @throws {InvalidArgumentError} If options contain invalid values
   */
  constructor(options?: CacheManagerOptions) {
    super(options);
  }

  // ICacheManager methods

  save(key: string, value: string): void {
    const prefixedKey = this.prefixedKey(key);
    this.assertValue(value);

    this.cache.set(prefixedKey, this.encodeEntry(prefixedKey, value));
  }

  get(key: string): string | null {
    const prefixedKey = this.prefixedKey(key);

    const entry = this.decodeEntry(this.cache.get(prefixedKey), prefixedKey);
    if (!entry) {
      return null;
    }

    if (this.isExpired(entry)) {
      this.cache.delete(prefixedKey);
      return null;
    }

    return entry.value;
  }

  remove(key: string): void {
    this.cache.delete(this.prefixedKey(key));
  }

  clear(): void {
    for (const key of this.cache.keys()) {
      if (key.startsWith(this.prefix)) {
        this.cache.delete(key);
      }
    }
  }
}
