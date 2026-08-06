import type { CacheManagerOptions } from '@verid-sdk-js-mono/core/cache';
import { WebStorageCacheManager } from './web-storage.js';

/**
 * Cache manager implementation using browser localStorage.
 * Data persists even after the browser is closed and reopened.
 * Shared across all tabs and windows of the same origin.
 *
 * @public
 */
export class LocalStorageCacheManager extends WebStorageCacheManager {
  /**
   * @param options - Cache behaviour, see {@link CacheManagerOptions}
   * @throws {InvalidArgumentError} If options contain invalid values
   */
  constructor(options?: CacheManagerOptions) {
    super(options);
  }

  protected get storage(): Storage {
    return localStorage;
  }
}
