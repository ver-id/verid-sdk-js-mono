import { ICacheManager } from '@verid-sdk-js-mono/core';

/**
 * Cache manager implementation using browser localStorage.
 * Data persists even after the browser is closed and reopened.
 * Shared across all tabs and windows of the same origin.
 *
 * @public
 */
export class LocalStorageCacheManager implements ICacheManager {
  /**
   * Saves a key-value pair to localStorage.
   *
   * @param key - The cache key identifier
   * @param value - The value to store
   */
  save(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  /**
   * Retrieves a value from localStorage by key.
   *
   * @param key - The cache key identifier
   * @returns The cached value if found, null otherwise
   */
  get(key: string): string | null {
    return localStorage.getItem(key);
  }

  /**
   * Removes a value from localStorage by key.
   *
   * @param key - The cache key identifier
   */
  remove(key: string): void {
    localStorage.removeItem(key);
  }
}
