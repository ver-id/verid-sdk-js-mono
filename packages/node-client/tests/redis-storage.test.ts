import { InvalidArgumentError } from '@ver-id/core/error';
import { RedisCacheManager, type RedisCompatibleClient } from '../src/cache/redis-storage';
import { describeCacheManagerContract } from './cache-contract';

interface StoredValue {
  value: string;
  expiresAt?: number;
}

/**
 * Minimal Redis stand-in with server-side expiry, so the contract's TTL cases
 * exercise the same path a real client would.
 */
function createFakeRedis(flavour: 'node-redis' | 'ioredis' | 'legacy' = 'node-redis') {
  const store = new Map<string, StoredValue>();

  const read = (key: string): StoredValue | undefined => {
    const stored = store.get(key);
    if (stored?.expiresAt !== undefined && stored.expiresAt <= Date.now()) {
      store.delete(key);
      return undefined;
    }
    return stored;
  };

  const expiring = (key: string, seconds: number, value: string) => {
    store.set(key, { value, expiresAt: Date.now() + seconds * 1000 });
    return Promise.resolve('OK');
  };

  const client: RedisCompatibleClient = {
    get: (key) => Promise.resolve(read(key)?.value ?? null),
    set: (key, value, ...args) => {
      const [flag, seconds] = args;
      if (flag === 'EX' && typeof seconds === 'number') {
        return expiring(key, seconds, value);
      }
      store.set(key, { value });
      return Promise.resolve('OK');
    },
    del: (key) => {
      const keys = Array.isArray(key) ? key : [key];
      keys.forEach((entry) => store.delete(entry));
      return Promise.resolve(keys.length);
    },
    keys: (pattern) => {
      const prefix = pattern.replace(/\*$/, '');
      return Promise.resolve([...store.keys()].filter((key) => key.startsWith(prefix)));
    },
  };

  if (flavour === 'node-redis') {
    client.setEx = expiring;
  }
  if (flavour === 'ioredis') {
    client.setex = expiring;
  }

  return { client, store };
}

describe('RedisCacheManager', () => {
  describeCacheManagerContract('RedisCacheManager', (() => {
    const { client } = createFakeRedis();
    return (options) => new RedisCacheManager({ client, options });
  })());

  describe('constructor', () => {
    it('should reject a missing client', () => {
      expect(() => new RedisCacheManager({} as never)).toThrow(InvalidArgumentError);
    });

    it('should reject a client without get', () => {
      const { client } = createFakeRedis();
      expect(() => new RedisCacheManager({ client: { ...client, get: undefined } as never })).toThrow(
        InvalidArgumentError,
      );
    });
  });

  describe('expiring writes', () => {
    it('should use setEx on node-redis clients', async () => {
      const { client } = createFakeRedis('node-redis');
      const setEx = jest.spyOn(client, 'setEx' as never);
      const set = jest.spyOn(client, 'set');

      await new RedisCacheManager({ client, options: { ttlSeconds: 600 } }).save('state-a', 'verifier-a');

      expect(setEx).toHaveBeenCalledWith('verid:state-a', 600, 'verifier-a');
      expect(set).not.toHaveBeenCalled();
    });

    it('should use setex on ioredis clients', async () => {
      const { client } = createFakeRedis('ioredis');
      const setex = jest.spyOn(client, 'setex' as never);

      await new RedisCacheManager({ client, options: { ttlSeconds: 600 } }).save('state-a', 'verifier-a');

      expect(setex).toHaveBeenCalledWith('verid:state-a', 600, 'verifier-a');
    });

    it('should fall back to the variadic set form', async () => {
      const { client } = createFakeRedis('legacy');
      const set = jest.spyOn(client, 'set');

      await new RedisCacheManager({ client, options: { ttlSeconds: 600 } }).save('state-a', 'verifier-a');

      expect(set).toHaveBeenCalledWith('verid:state-a', 'verifier-a', 'EX', 600);
    });

    it('should write without expiry when ttlSeconds is 0', async () => {
      const { client } = createFakeRedis();
      const set = jest.spyOn(client, 'set');

      await new RedisCacheManager({ client, options: { ttlSeconds: 0 } }).save('state-a', 'verifier-a');

      expect(set).toHaveBeenCalledWith('verid:state-a', 'verifier-a');
    });
  });

  describe('storage', () => {
    it('should store values under the prefixed key', async () => {
      const { client, store } = createFakeRedis();

      await new RedisCacheManager({ client }).save('state-a', 'verifier-a');

      expect(store.get('verid:state-a')?.value).toBe('verifier-a');
    });

    it('should no-op on clear when the client cannot list keys', async () => {
      const { client } = createFakeRedis();
      const cacheManager = new RedisCacheManager({ client: { ...client, keys: undefined } });

      await cacheManager.save('state-a', 'verifier-a');

      await expect(cacheManager.clear()).resolves.toBeUndefined();
      expect(await cacheManager.get('state-a')).toBe('verifier-a');
    });
  });
});
