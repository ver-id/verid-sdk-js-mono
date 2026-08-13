import { BaseCacheManager } from '@ver-id/core/cache';

/**
 * Shared implementation for the browser `Storage` backed caches.
 * The storage object is resolved per call, so constructing a manager never touches
 * `localStorage` or `sessionStorage` (which are absent while server-side rendering).
 *
 * @public
 */
export abstract class WebStorageCacheManager extends BaseCacheManager {
  /**
   * The browser storage this manager reads and writes.
   * @protected
   */
  protected abstract get storage(): Storage;

  // ICacheManager methods

  save(key: string, value: string): void {
    const prefixedKey = this.prefixedKey(key);
    this.assertValue(value);

    this.storage.setItem(prefixedKey, this.encodeEntry(prefixedKey, value));
  }

  get(key: string): string | null {
    const prefixedKey = this.prefixedKey(key);

    const entry = this.decodeEntry(this.storage.getItem(prefixedKey), prefixedKey);
    if (!entry) {
      return null;
    }

    if (this.isExpired(entry)) {
      this.storage.removeItem(prefixedKey);
      return null;
    }

    return entry.value;
  }

  remove(key: string): void {
    this.storage.removeItem(this.prefixedKey(key));
  }

  /**
   * Removes every entry that carries the configured prefix.
   * Keys written by the rest of the application are left alone.
   */
  clear(): void {
    const storage = this.storage;
    const prefixedKeys: string[] = [];

    for (let index = 0; index < storage.length; index += 1) {
      const key = storage.key(index);
      if (key !== null && key.startsWith(this.prefix)) {
        prefixedKeys.push(key);
      }
    }

    prefixedKeys.forEach((key) => storage.removeItem(key));
  }
}
