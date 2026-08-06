import { LocalStorageCacheManager } from '../src/cache/local-storage';
import { SessionStorageCacheManager } from '../src/cache/session-storage';
import { describeCacheManagerContract } from './cache-contract';

/** Minimal `Storage` stand-in, since neither storage exists in the node test environment. */
function createStorageMock() {
  const store = new Map<string, string>();

  const storage: Storage = {
    getItem: (key: string) => store.get(key) ?? null,
    setItem: (key: string, value: string) => {
      store.set(key, value);
    },
    removeItem: (key: string) => {
      store.delete(key);
    },
    clear: () => {
      store.clear();
    },
    key: (index: number) => [...store.keys()][index] ?? null,
    get length() {
      return store.size;
    },
  };

  return { storage, store };
}

const local = createStorageMock();
const session = createStorageMock();

(global as unknown as { localStorage: Storage }).localStorage = local.storage;
(global as unknown as { sessionStorage: Storage }).sessionStorage = session.storage;

describe('LocalStorageCacheManager', () => {
  beforeEach(() => {
    local.store.clear();
  });

  describeCacheManagerContract('LocalStorageCacheManager', (options) => new LocalStorageCacheManager(options));

  it('should write to localStorage under the prefixed key', () => {
    new LocalStorageCacheManager().save('state-a', 'verifier-a');

    expect(local.store.has('verid:state-a')).toBe(true);
    expect(session.store.has('verid:state-a')).toBe(false);
  });

  it('should leave keys owned by the application alone on clear', () => {
    local.store.set('app-setting', 'keep-me');
    const cacheManager = new LocalStorageCacheManager();
    cacheManager.save('state-a', 'verifier-a');

    cacheManager.clear();

    expect(local.store.get('app-setting')).toBe('keep-me');
    expect(cacheManager.get('state-a')).toBeNull();
  });

  it('should treat a corrupted entry as a cache miss', () => {
    local.store.set('verid:state-a', 'not json');

    expect(new LocalStorageCacheManager().get('state-a')).toBeNull();
  });

  it('should drop an expired entry from storage', () => {
    const cacheManager = new LocalStorageCacheManager({ ttlSeconds: 60 });
    cacheManager.save('state-a', 'verifier-a');

    jest.spyOn(Date, 'now').mockReturnValue(Date.now() + 61_000);
    expect(cacheManager.get('state-a')).toBeNull();
    jest.restoreAllMocks();

    expect(local.store.size).toBe(0);
  });
});

describe('SessionStorageCacheManager', () => {
  beforeEach(() => {
    session.store.clear();
  });

  describeCacheManagerContract('SessionStorageCacheManager', (options) => new SessionStorageCacheManager(options));

  it('should write to sessionStorage under the prefixed key', () => {
    new SessionStorageCacheManager().save('state-a', 'verifier-a');

    expect(session.store.has('verid:state-a')).toBe(true);
    expect(local.store.has('verid:state-a')).toBe(false);
  });

  it('should not read entries written by the localStorage manager', () => {
    new LocalStorageCacheManager().save('state-a', 'verifier-a');

    expect(new SessionStorageCacheManager().get('state-a')).toBeNull();
  });
});
