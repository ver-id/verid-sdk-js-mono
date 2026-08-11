import { existsSync, mkdtempSync, readdirSync, rmSync, statSync, writeFileSync } from 'fs';
import { tmpdir } from 'os';
import { join } from 'path';
import { InvalidArgumentError } from '../src/error/index';
import { FileStorageCacheManager } from '../src/cache/node/file-storage';
import { describeCacheManagerContract } from './cache-contract';

describe('FileStorageCacheManager', () => {
  let cacheDir: string;

  beforeEach(() => {
    cacheDir = mkdtempSync(join(tmpdir(), 'verid-cache-'));
  });

  afterEach(() => {
    jest.restoreAllMocks();
    rmSync(cacheDir, { recursive: true, force: true });
  });

  describeCacheManagerContract(
    'FileStorageCacheManager',
    (options) => new FileStorageCacheManager(cacheDir, options),
  );

  describe('constructor', () => {
    it('should reject a non-string cache directory', () => {
      expect(() => new FileStorageCacheManager(42 as unknown as string)).toThrow(InvalidArgumentError);
    });
  });

  describe('cross-instance visibility', () => {
    it('should read a value written by another instance after construction', async () => {
      const finalizer = new FileStorageCacheManager(cacheDir);
      const starter = new FileStorageCacheManager(cacheDir);

      await starter.save('state-a', 'verifier-a');

      expect(finalizer.get('state-a')).toBe('verifier-a');
    });

    it('should not overwrite entries written by another instance', async () => {
      const first = new FileStorageCacheManager(cacheDir);
      const second = new FileStorageCacheManager(cacheDir);

      await first.save('state-a', 'verifier-a');
      await second.save('state-b', 'verifier-b');

      expect(first.get('state-b')).toBe('verifier-b');
      expect(second.get('state-a')).toBe('verifier-a');
    });

    it('should remove an entry this instance never saw', async () => {
      const starter = new FileStorageCacheManager(cacheDir);
      const remover = new FileStorageCacheManager(cacheDir);

      await starter.save('state-a', 'verifier-a');
      await remover.remove('state-a');

      expect(starter.get('state-a')).toBeNull();
      expect(readdirSync(cacheDir)).toHaveLength(0);
    });
  });

  describe('concurrency', () => {
    it('should resolve every save issued in the same tick', async () => {
      const cacheManager = new FileStorageCacheManager(cacheDir);

      await expect(
        Promise.all([
          cacheManager.save('state-1', 'verifier-1'),
          cacheManager.save('state-2', 'verifier-2'),
          cacheManager.save('state-3', 'verifier-3'),
          cacheManager.save('state-4', 'verifier-4'),
        ]),
      ).resolves.toBeDefined();

      expect(cacheManager.get('state-1')).toBe('verifier-1');
      expect(cacheManager.get('state-4')).toBe('verifier-4');
    });

    it('should resolve concurrent saves from separate instances', async () => {
      const first = new FileStorageCacheManager(cacheDir);
      const second = new FileStorageCacheManager(cacheDir);

      await Promise.all([first.save('state-a', 'verifier-a'), second.save('state-b', 'verifier-b')]);

      expect(first.get('state-a')).toBe('verifier-a');
      expect(first.get('state-b')).toBe('verifier-b');
    });
  });

  describe('expiry', () => {
    it('should drop an expired entry from disk', async () => {
      const cacheManager = new FileStorageCacheManager(cacheDir, { ttlSeconds: 60 });
      await cacheManager.save('state-a', 'verifier-a');

      jest.spyOn(Date, 'now').mockReturnValue(Date.now() + 61_000);

      expect(cacheManager.get('state-a')).toBeNull();
      expect(readdirSync(cacheDir)).toHaveLength(0);
    });
  });

  describe('legacy cache file', () => {
    it('should migrate a cache.json written by an earlier version and remove it', () => {
      writeFileSync(join(cacheDir, 'cache.json'), JSON.stringify({ 'state-a': 'verifier-a' }));

      const cacheManager = new FileStorageCacheManager(cacheDir);

      expect(cacheManager.get('state-a')).toBe('verifier-a');
      expect(existsSync(join(cacheDir, 'cache.json'))).toBe(false);
    });

    it('should not break construction on a corrupted cache.json', () => {
      writeFileSync(join(cacheDir, 'cache.json'), 'not json');

      expect(() => new FileStorageCacheManager(cacheDir)).not.toThrow();
    });
  });

  describe('storage', () => {
    it('should treat a corrupted entry as a cache miss', async () => {
      const cacheManager = new FileStorageCacheManager(cacheDir);
      await cacheManager.save('state-a', 'verifier-a');

      const [entryFile] = readdirSync(cacheDir);
      writeFileSync(join(cacheDir, entryFile), 'not json');

      expect(cacheManager.get('state-a')).toBeNull();
    });

    it('should write entries with owner-only permissions', async () => {
      const cacheManager = new FileStorageCacheManager(cacheDir);
      await cacheManager.save('state-a', 'verifier-a');

      const [entryFile] = readdirSync(cacheDir);
      expect(statSync(join(cacheDir, entryFile)).mode & 0o777).toBe(0o600);
    });

    it('should not leak the key into the file name', async () => {
      const cacheManager = new FileStorageCacheManager(cacheDir);
      await cacheManager.save('state-a', 'verifier-a');

      expect(readdirSync(cacheDir)[0]).toMatch(/^[0-9a-f]{64}\.json$/);
    });
  });
});
