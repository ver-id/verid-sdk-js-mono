/**
 * Interface for cache management operations.
 * Used to store and retrieve temporary data like OAuth state and code verifiers.
 *
 * Methods may return values synchronously or as Promises, allowing both
 * in-memory and async implementations (e.g., Redis, DynamoDB).
 *
 * @public
 */
export interface ICacheManager {
  /**
   * Saves a key-value pair to the cache.
   *
   * @param key - The cache key identifier
   * @param value - The value to store
   */
  save(key: string, value: string): void | Promise<void>;

  /**
   * Retrieves a value from the cache by key.
   *
   * @param key - The cache key identifier
   * @returns The cached value if found, null otherwise
   */
  get(key: string): string | null | Promise<string | null>;

  /**
   * Removes a value from the cache by key.
   *
   * @param key - The cache key identifier
   */
  remove(key: string): void | Promise<void>;
}
