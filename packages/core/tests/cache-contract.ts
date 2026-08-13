import type { ICacheManager } from '../src/interface/ICacheManager';
import type { CacheManagerOptions } from '../src/cache/options';
import { InvalidArgumentError } from '../src/error/index';

/**
 * Factory for the cache manager under test. Managers built by the same factory must
 * share a backing store, so the contract can prove that prefixes isolate namespaces.
 */
export type CacheManagerFactory = (options?: CacheManagerOptions) => ICacheManager;

/**
 * Behaviour every Ver.iD cache manager must implement identically, whatever backs it.
 * Store-specific behaviour (atomic writes, native TTL, migrations) is covered by the
 * individual suites.
 */
export function describeCacheManagerContract(name: string, createCacheManager: CacheManagerFactory): void {
  describe(`${name} cache manager contract`, () => {
    afterEach(() => {
      jest.restoreAllMocks();
    });

    describe('options', () => {
      it('should reject a fractional ttlSeconds', () => {
        expect(() => createCacheManager({ ttlSeconds: 1.5 })).toThrow(InvalidArgumentError);
      });

      it('should reject a negative ttlSeconds', () => {
        expect(() => createCacheManager({ ttlSeconds: -1 })).toThrow(InvalidArgumentError);
      });

      it('should reject a non-string prefix', () => {
        expect(() => createCacheManager({ prefix: 1 as unknown as string })).toThrow(InvalidArgumentError);
      });
    });

    describe('save and get', () => {
      it('should read back a saved value', async () => {
        const cacheManager = createCacheManager();

        await cacheManager.save('state-a', 'verifier-a');

        expect(await cacheManager.get('state-a')).toBe('verifier-a');
      });

      it('should return null for an unknown key', async () => {
        const cacheManager = createCacheManager();

        expect(await cacheManager.get('unknown')).toBeNull();
      });

      it('should overwrite an existing value', async () => {
        const cacheManager = createCacheManager();

        await cacheManager.save('state-a', 'first');
        await cacheManager.save('state-a', 'second');

        expect(await cacheManager.get('state-a')).toBe('second');
      });

      it('should keep keys independent', async () => {
        const cacheManager = createCacheManager();

        await cacheManager.save('state-a', 'verifier-a');
        await cacheManager.save('state-b', 'verifier-b');

        expect(await cacheManager.get('state-a')).toBe('verifier-a');
        expect(await cacheManager.get('state-b')).toBe('verifier-b');
      });

      it('should accept an empty value', async () => {
        const cacheManager = createCacheManager();

        await cacheManager.save('state-a', '');

        expect(await cacheManager.get('state-a')).toBe('');
      });

      it('should reject an empty key', async () => {
        const cacheManager = createCacheManager();

        await expect(async () => cacheManager.save('', 'verifier-a')).rejects.toThrow(InvalidArgumentError);
        await expect(async () => cacheManager.get('')).rejects.toThrow(InvalidArgumentError);
        await expect(async () => cacheManager.remove('')).rejects.toThrow(InvalidArgumentError);
      });

      it('should reject a non-string key', async () => {
        const cacheManager = createCacheManager();

        await expect(async () => cacheManager.get(42 as unknown as string)).rejects.toThrow(InvalidArgumentError);
      });

      it('should reject a non-string value', async () => {
        const cacheManager = createCacheManager();

        await expect(async () => cacheManager.save('state-a', 42 as unknown as string)).rejects.toThrow(
          InvalidArgumentError,
        );
      });
    });

    describe('remove', () => {
      it('should remove a value', async () => {
        const cacheManager = createCacheManager();

        await cacheManager.save('state-a', 'verifier-a');
        await cacheManager.remove('state-a');

        expect(await cacheManager.get('state-a')).toBeNull();
      });

      it('should ignore an unknown key', async () => {
        const cacheManager = createCacheManager();

        await expect(Promise.resolve(cacheManager.remove('unknown'))).resolves.toBeUndefined();
      });

      it('should only remove the given key', async () => {
        const cacheManager = createCacheManager();

        await cacheManager.save('state-a', 'verifier-a');
        await cacheManager.save('state-b', 'verifier-b');
        await cacheManager.remove('state-a');

        expect(await cacheManager.get('state-b')).toBe('verifier-b');
      });
    });

    describe('prefix', () => {
      it('should isolate entries of different prefixes', async () => {
        const first = createCacheManager({ prefix: 'first:' });
        const second = createCacheManager({ prefix: 'second:' });

        await first.save('state-a', 'verifier-first');
        await second.save('state-a', 'verifier-second');

        expect(await first.get('state-a')).toBe('verifier-first');
        expect(await second.get('state-a')).toBe('verifier-second');
      });

      it('should accept an empty prefix', async () => {
        const cacheManager = createCacheManager({ prefix: '' });

        await cacheManager.save('state-a', 'verifier-a');

        expect(await cacheManager.get('state-a')).toBe('verifier-a');
      });
    });

    describe('expiry', () => {
      it('should return null once the ttl has elapsed', async () => {
        const cacheManager = createCacheManager({ ttlSeconds: 60 });
        await cacheManager.save('state-a', 'verifier-a');

        jest.spyOn(Date, 'now').mockReturnValue(Date.now() + 61_000);

        expect(await cacheManager.get('state-a')).toBeNull();
      });

      it('should keep the value inside the ttl', async () => {
        const cacheManager = createCacheManager({ ttlSeconds: 60 });
        await cacheManager.save('state-a', 'verifier-a');

        jest.spyOn(Date, 'now').mockReturnValue(Date.now() + 59_000);

        expect(await cacheManager.get('state-a')).toBe('verifier-a');
      });

      it('should never expire when ttlSeconds is 0', async () => {
        const cacheManager = createCacheManager({ ttlSeconds: 0 });
        await cacheManager.save('state-a', 'verifier-a');

        jest.spyOn(Date, 'now').mockReturnValue(Date.now() + 31 * 24 * 60 * 60 * 1000);

        expect(await cacheManager.get('state-a')).toBe('verifier-a');
      });
    });

    describe('clear', () => {
      it('should remove every entry of its own prefix', async () => {
        const cacheManager = createCacheManager();

        await cacheManager.save('state-a', 'verifier-a');
        await cacheManager.save('state-b', 'verifier-b');
        await cacheManager.clear?.();

        expect(await cacheManager.get('state-a')).toBeNull();
        expect(await cacheManager.get('state-b')).toBeNull();
      });

      it('should leave other prefixes alone', async () => {
        const first = createCacheManager({ prefix: 'first:' });
        const second = createCacheManager({ prefix: 'second:' });

        await first.save('state-a', 'verifier-first');
        await second.save('state-a', 'verifier-second');
        await first.clear?.();

        expect(await second.get('state-a')).toBe('verifier-second');
      });
    });
  });
}
