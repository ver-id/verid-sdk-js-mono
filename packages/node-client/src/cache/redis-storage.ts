import { BaseCacheManager } from '@ver-id/core/cache';
import type { CacheManagerOptions } from '@ver-id/core/cache';
import { assertObject, assertFunction } from '@ver-id/core/utils';
import { InvalidArgumentError } from '@ver-id/core/error';

/**
 * Configuration options for the Redis cache manager.
 */
export interface RedisCacheManagerConfig {
  /**
   * A Redis client instance (from `redis`, `ioredis`, or any compatible library).
   * Must implement `get`, `set`, and `del` methods.
   *
   * @example
   * ```ts
   * import { createClient } from 'redis';
   * const redisClient = createClient({ url: 'redis://localhost:6379' });
   * await redisClient.connect();
   * ```
   *
   * @example
   * ```ts
   * import Redis from 'ioredis';
   * const redisClient = new Redis();
   * ```
   */
  client: RedisCompatibleClient;

  /**
   * Optional settings for cache behavior, see {@link CacheManagerOptions}.
   */
  options?: CacheManagerOptions;
}

/**
 * Minimal Redis client interface.
 * Compatible with both `redis` (node-redis) and `ioredis` libraries.
 */
export interface RedisCompatibleClient {
  get(key: string): Promise<string | null>;
  set(key: string, value: string, ...args: unknown[]): Promise<unknown>;
  del(key: string | string[]): Promise<unknown>;
  /** Expiring write in node-redis. Preferred when present, since node-redis rejects the variadic `set` form. */
  setEx?(key: string, seconds: number, value: string): Promise<unknown>;
  /** Expiring write in ioredis. */
  setex?(key: string, seconds: number, value: string): Promise<unknown>;
  /** Required for {@link RedisCacheManager.clear}. Both `redis` and `ioredis` support this. */
  keys?(pattern: string): Promise<string[]>;
}

/**
 * Redis-backed cache manager for distributed server environments.
 *
 * Expiry is handled by Redis itself, so entries disappear from the store when their
 * TTL elapses rather than on the next read.
 *
 * @example
 * ```ts
 * import { createClient } from 'redis';
 * import { RedisCacheManager } from '@ver-id/node-client';
 *
 * const redisClient = createClient({ url: 'redis://localhost:6379' });
 * await redisClient.connect();
 *
 * const authClient = new VeridAuthenticationClient({
 *   issuerUri: '<VERID_OAUTH_ISSUER_URI>',
 *   client_id: '<VERID_AUTHENTICATION_FLOW_ID>',
 *   redirectUri: 'REGISTERED_REDIRECT_URI',
 *   options: {
 *     cacheManager: new RedisCacheManager({ client: redisClient }),
 *   },
 * });
 * ```
 */
export class RedisCacheManager extends BaseCacheManager {
  private client: RedisCompatibleClient;

  /**
   * @param config - Redis cache manager configuration
   * @throws {InvalidArgumentError} If client is missing or invalid, or if options contain invalid values
   */
  constructor(config: RedisCacheManagerConfig) {
    super(config?.options);

    assertObject(config?.client, 'config.client', InvalidArgumentError);
    assertFunction(config.client.get, 'config.client.get', InvalidArgumentError);
    assertFunction(config.client.set, 'config.client.set', InvalidArgumentError);
    assertFunction(config.client.del, 'config.client.del', InvalidArgumentError);

    this.client = config.client;
  }

  /**
   * node-redis takes options as an object and ioredis as trailing arguments, so the
   * dedicated expiring-write command is used whenever the client exposes one.
   */
  private async setWithExpiry(prefixedKey: string, value: string): Promise<void> {
    if (typeof this.client.setEx === 'function') {
      await this.client.setEx(prefixedKey, this.ttlSeconds, value);
      return;
    }

    if (typeof this.client.setex === 'function') {
      await this.client.setex(prefixedKey, this.ttlSeconds, value);
      return;
    }

    await this.client.set(prefixedKey, value, 'EX', this.ttlSeconds);
  }

  // ICacheManager methods

  async save(key: string, value: string): Promise<void> {
    const prefixedKey = this.prefixedKey(key);
    this.assertValue(value);

    if (this.ttlSeconds > 0) {
      await this.setWithExpiry(prefixedKey, value);
      return;
    }

    await this.client.set(prefixedKey, value);
  }

  async get(key: string): Promise<string | null> {
    return (await this.client.get(this.prefixedKey(key))) ?? null;
  }

  async remove(key: string): Promise<void> {
    await this.client.del(this.prefixedKey(key));
  }

  /**
   * Removes all cache entries that match the configured prefix.
   * Requires the Redis client to implement the `keys()` method (supported by both `redis` and `ioredis`).
   * No-op if the client does not support `keys()`.
   */
  async clear(): Promise<void> {
    if (typeof this.client.keys !== 'function') {
      return;
    }
    const keys = await this.client.keys(`${this.prefix}*`);
    if (keys.length > 0) {
      await this.client.del(keys);
    }
  }
}
