import type { ICacheManager } from '@verid-sdk-js-mono/core';
import { assertObject, assertFunction, assertString, assertNumber, InvalidArgumentError } from '@verid-sdk-js-mono/core';

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
   * Optional settings for cache behavior.
   */
  options?: {
    /**
     * Optional key prefix to namespace cache entries.
     * Useful when sharing a Redis instance across multiple applications.
     * @default 'verid:'
     */
    prefix?: string;

    /**
     * Optional TTL (time-to-live) in seconds for cache entries.
     * Entries will be automatically removed after this duration.
     * If not set, entries persist until explicitly removed.
     * @default undefined (no expiry)
     */
    ttlSeconds?: number;
  };
}

/**
 * Minimal Redis client interface.
 * Compatible with both `redis` (node-redis) and `ioredis` libraries.
 */
export interface RedisCompatibleClient {
  get(key: string): Promise<string | null>;
  set(key: string, value: string, ...args: unknown[]): Promise<unknown>;
  del(key: string | string[]): Promise<unknown>;
}

/**
 * Redis-backed cache manager for distributed server environments.
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
export class RedisCacheManager implements ICacheManager {
  private client: RedisCompatibleClient;
  private prefix: string;
  private ttlSeconds?: number;

  /**
   * @param config - Redis cache manager configuration
   * @throws {InvalidArgumentError} If client is missing or invalid, or if options contain invalid values
   */
  constructor(config: RedisCacheManagerConfig) {
    assertObject(config?.client, 'config.client', InvalidArgumentError);
    assertFunction(config.client.get, 'config.client.get', InvalidArgumentError);
    assertFunction(config.client.set, 'config.client.set', InvalidArgumentError);
    assertFunction(config.client.del, 'config.client.del', InvalidArgumentError);

    if (config.options?.prefix !== undefined) {
      assertString(config.options.prefix, 'config.options.prefix', InvalidArgumentError);
    }

    if (config.options?.ttlSeconds !== undefined) {
      assertNumber(config.options.ttlSeconds, 'config.options.ttlSeconds', InvalidArgumentError);
      if (!Number.isInteger(config.options.ttlSeconds)) {
        throw new InvalidArgumentError('Invalid config.options.ttlSeconds: must be a whole number of seconds');
      }
    }

    this.client = config.client;
    this.prefix = config.options?.prefix ?? 'verid:';
    this.ttlSeconds = config.options?.ttlSeconds;
  }

  private prefixedKey(key: string): string {
    return `${this.prefix}${key}`;
  }

  // ICacheManager methods

  async save(key: string, value: string): Promise<void> {
    const prefixed = this.prefixedKey(key);
    if (this.ttlSeconds) {
      await this.client.set(prefixed, value, 'EX', this.ttlSeconds);
    } else {
      await this.client.set(prefixed, value);
    }
  }

  async get(key: string): Promise<string | null> {
    return this.client.get(this.prefixedKey(key));
  }

  async remove(key: string): Promise<void> {
    await this.client.del(this.prefixedKey(key));
  }
}
