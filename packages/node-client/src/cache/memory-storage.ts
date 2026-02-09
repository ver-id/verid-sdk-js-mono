import type { ICacheManager } from '@verid-sdk-js-mono/core';

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
 * - Not shared across instances/processes
 *
 * Perfect for short-lived data like PKCE verifiers and OAuth state
 * within a single request lifecycle or Lambda invocation.
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
