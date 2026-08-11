import { MemoryStorageCacheManager } from '../src/cache/memory-storage';
import { describeCacheManagerContract } from './cache-contract';

describe('MemoryStorageCacheManager', () => {
  // every manager owns its Map, so the contract's shared-store cases are satisfied per instance
  describeCacheManagerContract('MemoryStorageCacheManager', (options) => new MemoryStorageCacheManager(options));

  it('should not share entries between instances', () => {
    const first = new MemoryStorageCacheManager();
    const second = new MemoryStorageCacheManager();

    first.save('state-a', 'verifier-a');

    expect(second.get('state-a')).toBeNull();
  });

  it('should drop an expired entry from the map', () => {
    const cacheManager = new MemoryStorageCacheManager({ ttlSeconds: 60 });
    cacheManager.save('state-a', 'verifier-a');

    jest.spyOn(Date, 'now').mockReturnValue(Date.now() + 61_000);
    cacheManager.get('state-a');
    jest.restoreAllMocks();

    // the entry is gone rather than merely hidden, so the map cannot grow unbounded
    expect(cacheManager.get('state-a')).toBeNull();
  });
});
