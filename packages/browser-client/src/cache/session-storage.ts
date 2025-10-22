import { ICacheManager } from '@verid-sdk-js-mono/core';

/**
 * Cache manager implementation using browser sessionStorage.
 * Data persists only for the duration of the page session.
 * Cleared when the browser tab is closed.
 *
 * @public
 */
export class SessionStorageCacheManager implements ICacheManager {
  /**
   * Saves a key-value pair to sessionStorage.
   *
   * @param key - The cache key identifier
   * @param value - The value to store
   */
  save(key: string, value: string): void {
    sessionStorage.setItem(key, value);
  }

  /**
   * Retrieves a value from sessionStorage by key.
   *
   * @param key - The cache key identifier
   * @returns The cached value if found, null otherwise
   */
  get(key: string): string | null {
    return sessionStorage.getItem(key);
  }

  /**
   * Removes a value from sessionStorage by key.
   *
   * @param key - The cache key identifier
   */
  remove(key: string): void {
    sessionStorage.removeItem(key);
  }
}
