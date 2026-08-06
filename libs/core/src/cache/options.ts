/**
 * Options accepted by every Ver.iD cache manager.
 * Each implementation takes these under an `options` property, so behaviour is
 * identical no matter which store backs the cache.
 *
 * @public
 */
export interface CacheManagerOptions {
  /**
   * Key prefix used to namespace cache entries.
   * Useful when a store is shared with other applications.
   * Pass an empty string to store keys unprefixed.
   * @default 'verid:'
   */
  prefix?: string;

  /**
   * Time-to-live in seconds for cache entries. Expired entries read as a cache miss
   * and are dropped from the store, which keeps abandoned flows from accumulating.
   * Pass `0` to disable expiry entirely.
   * @default 3600
   */
  ttlSeconds?: number;
}

/**
 * Envelope written by stores without native expiry (memory, file, web storage).
 * The key travels with the value so an entry can be verified after lookup.
 *
 * @public
 */
export interface CacheEntry {
  key: string;
  value: string;
  expiresAt?: number;
}

/**
 * Prefix applied to cache keys when no prefix is configured.
 * @public
 */
export const DEFAULT_CACHE_PREFIX = 'verid:';

/**
 * Lifetime of a cache entry when no TTL is configured. Comfortably longer than a
 * wallet interaction, short enough that abandoned flows do not pile up.
 * @public
 */
export const DEFAULT_CACHE_TTL_SECONDS = 3600;
