import type { CacheManagerOptions } from '@verid-sdk-js-mono/core/cache';
import { WebStorageCacheManager } from './web-storage.js';

/**
 * Cache manager implementation using browser sessionStorage.
 * Data persists only for the duration of the page session.
 * Cleared when the browser tab is closed.
 *
 * @public
 */
export class SessionStorageCacheManager extends WebStorageCacheManager {
  /**
   * @param options - Cache behaviour, see {@link CacheManagerOptions}
   * @throws {InvalidArgumentError} If options contain invalid values
   */
  constructor(options?: CacheManagerOptions) {
    super(options);
  }

  protected get storage(): Storage {
    return sessionStorage;
  }
}
