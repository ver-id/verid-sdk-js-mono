import type { ICacheManager } from '@verid-sdk-js-mono/core';

/**
 * In-memory cache manager; data is lost on process restart.
 *
 * @public
 */
export class MemoryStorageCacheManager implements ICacheManager {
  private cache: Map<string, string> = new Map();

  save(key: string, value: string): void {
    this.cache.set(key, value);
  }

  get(key: string): string | null {
    return this.cache.get(key) ?? null;
  }

  remove(key: string): void {
    this.cache.delete(key);
  }

  clear(): void {
    this.cache.clear();
  }
}
