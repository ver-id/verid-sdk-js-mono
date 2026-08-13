import { ICacheManager } from '../interface/ICacheManager.js';
import { InvalidArgumentError } from '../error/index.js';
import { assertNumber, assertObject, assertString } from '../utils/index.js';
import {
  CacheEntry,
  CacheManagerOptions,
  DEFAULT_CACHE_PREFIX,
  DEFAULT_CACHE_TTL_SECONDS,
} from './options.js';

/**
 * Shared contract for every Ver.iD cache manager.
 *
 * Implementations differ only in where bytes land. Everything a caller can observe
 * is defined here: option validation, key prefixing, argument assertions and expiry.
 * Stores with native expiry (Redis, DynamoDB) hand the TTL to the store; the others
 * write an envelope through {@link BaseCacheManager.encodeEntry} and drop expired
 * entries on read.
 *
 * @public
 */
export abstract class BaseCacheManager implements ICacheManager {
  /**
   * Prefix applied to every key before it reaches the store.
   * @protected
   */
  protected readonly prefix: string;

  /**
   * Entry lifetime in seconds, or `0` when expiry is disabled.
   * @protected
   */
  protected readonly ttlSeconds: number;

  /**
   * @param options - Cache behaviour, see {@link CacheManagerOptions}
   * @throws {InvalidArgumentError} When options contain invalid values
   */
  protected constructor(options?: CacheManagerOptions) {
    if (options !== undefined) {
      assertObject(options, 'options', InvalidArgumentError);
    }

    const prefix = options?.prefix ?? DEFAULT_CACHE_PREFIX;
    assertString(prefix, 'options.prefix', InvalidArgumentError, { allowEmpty: true });

    const ttlSeconds = options?.ttlSeconds ?? DEFAULT_CACHE_TTL_SECONDS;
    assertNumber(ttlSeconds, 'options.ttlSeconds', InvalidArgumentError, { allowZero: true });
    if (!Number.isInteger(ttlSeconds)) {
      throw new InvalidArgumentError('Invalid options.ttlSeconds: must be a whole number of seconds');
    }

    this.prefix = prefix;
    this.ttlSeconds = ttlSeconds;
  }

  /**
   * Validates a caller-supplied key and returns it namespaced for the store.
   *
   * @param key - The cache key identifier
   * @throws {InvalidArgumentError} When the key is not a non-empty string
   * @protected
   */
  protected prefixedKey(key: string): string {
    assertString(key, 'key', InvalidArgumentError);
    return `${this.prefix}${key}`;
  }

  /**
   * Validates a caller-supplied value. Empty values are allowed.
   *
   * @param value - The value to store
   * @throws {InvalidArgumentError} When the value is not a string
   * @protected
   */
  protected assertValue(value: string): void {
    assertString(value, 'value', InvalidArgumentError, { allowEmpty: true });
  }

  /**
   * Unix milliseconds at which an entry written now expires, or undefined when expiry is disabled.
   * @protected
   */
  protected expiresAt(): number | undefined {
    return this.ttlSeconds > 0 ? Date.now() + this.ttlSeconds * 1000 : undefined;
  }

  /**
   * Whether an entry has outlived its TTL.
   * @protected
   */
  protected isExpired(entry: CacheEntry): boolean {
    return entry.expiresAt !== undefined && entry.expiresAt <= Date.now();
  }

  /**
   * Serializes an entry for stores that have no native expiry.
   * @protected
   */
  protected encodeEntry(prefixedKey: string, value: string): string {
    const expiresAt = this.expiresAt();
    const entry: CacheEntry =
      expiresAt === undefined ? { key: prefixedKey, value } : { key: prefixedKey, value, expiresAt };
    return JSON.stringify(entry);
  }

  /**
   * Parses an entry written by {@link BaseCacheManager.encodeEntry}.
   * Returns null when the entry is absent, corrupted or belongs to another key;
   * expiry is left to the caller so it can drop the entry from its store.
   * @protected
   */
  protected decodeEntry(raw: string | null | undefined, prefixedKey: string): CacheEntry | null {
    if (!raw) {
      return null;
    }

    try {
      const entry = JSON.parse(raw) as CacheEntry;
      return entry?.key === prefixedKey && typeof entry.value === 'string' ? entry : null;
    } catch {
      // corrupted entry: treat as a miss, the next write repairs it
      return null;
    }
  }

  /**
   * Saves a key-value pair to the cache.
   *
   * @param key - The cache key identifier
   * @param value - The value to store
   * @throws {InvalidArgumentError} When key or value are invalid
   */
  abstract save(key: string, value: string): void | Promise<void>;

  /**
   * Retrieves a value from the cache by key.
   *
   * @param key - The cache key identifier
   * @returns The cached value, or null when it is absent or expired
   * @throws {InvalidArgumentError} When the key is invalid
   */
  abstract get(key: string): string | null | Promise<string | null>;

  /**
   * Removes a value from the cache by key. Absent keys are a no-op.
   *
   * @param key - The cache key identifier
   * @throws {InvalidArgumentError} When the key is invalid
   */
  abstract remove(key: string): void | Promise<void>;

  /**
   * Removes every entry that carries the configured prefix.
   */
  abstract clear(): void | Promise<void>;
}
