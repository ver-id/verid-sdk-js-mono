import { SessionStorageCacheManager } from '../src/cache/session-storage';

// Mock sessionStorage for tests since we're in node environment
const mockStore = new Map<string, string>();

const mockSessionStorage = {
  getItem: (key: string) => mockStore.get(key) ?? null,
  setItem: (key: string, value: string) => {
    mockStore.set(key, value);
  },
  removeItem: (key: string) => {
    mockStore.delete(key);
  },
  clear: () => {
    mockStore.clear();
  },
  get length() {
    return mockStore.size;
  },
  key: (index: number) => {
    const keys = Array.from(mockStore.keys());
    return keys[index] || null;
  },
};

// Mock the global sessionStorage
(global as any).sessionStorage = mockSessionStorage;

describe('SessionStorageCacheManager', () => {
  let cacheManager: SessionStorageCacheManager;

  beforeEach(() => {
    mockStore.clear();
    cacheManager = new SessionStorageCacheManager();
  });

  describe('save', () => {
    it('should save a value to storage', () => {
      cacheManager.save('test-key', 'test-value');
      expect(mockStore.get('test-key')).toBe('test-value');
    });

    it('should overwrite existing values', () => {
      cacheManager.save('test-key', 'first-value');
      cacheManager.save('test-key', 'second-value');
      expect(mockStore.get('test-key')).toBe('second-value');
    });

    it('should handle empty string values', () => {
      cacheManager.save('empty-key', '');
      expect(mockStore.get('empty-key')).toBe('');
    });
  });

  describe('get', () => {
    it('should retrieve a saved value', () => {
      mockStore.set('test-key', 'test-value');
      const result = cacheManager.get('test-key');
      expect(result).toBe('test-value');
    });

    it('should return null for non-existent key', () => {
      const result = cacheManager.get('non-existent');
      expect(result).toBeNull();
    });

    it('should return empty string if that was saved', () => {
      mockStore.set('empty-key', '');
      const result = cacheManager.get('empty-key');
      expect(result).toBe('');
    });
  });

  describe('remove', () => {
    it('should remove a value from storage', () => {
      mockStore.set('test-key', 'test-value');
      cacheManager.remove('test-key');
      expect(mockStore.get('test-key')).toBeUndefined();
    });

    it('should handle removing non-existent keys gracefully', () => {
      expect(() => cacheManager.remove('non-existent')).not.toThrow();
    });

    it('should only remove the specified key', () => {
      mockStore.set('key1', 'value1');
      mockStore.set('key2', 'value2');
      cacheManager.remove('key1');
      expect(mockStore.get('key1')).toBeUndefined();
      expect(mockStore.get('key2')).toBe('value2');
    });
  });

  describe('integration tests', () => {
    it('should support full save-get-remove cycle', () => {
      const key = 'cycle-test';
      const value = 'cycle-value';

      // Save
      cacheManager.save(key, value);
      expect(cacheManager.get(key)).toBe(value);

      // Remove
      cacheManager.remove(key);
      expect(cacheManager.get(key)).toBeNull();
    });

    it('should handle multiple keys independently', () => {
      cacheManager.save('key1', 'value1');
      cacheManager.save('key2', 'value2');
      cacheManager.save('key3', 'value3');

      expect(cacheManager.get('key1')).toBe('value1');
      expect(cacheManager.get('key2')).toBe('value2');
      expect(cacheManager.get('key3')).toBe('value3');

      cacheManager.remove('key2');
      expect(cacheManager.get('key1')).toBe('value1');
      expect(cacheManager.get('key2')).toBeNull();
      expect(cacheManager.get('key3')).toBe('value3');
    });
  });
});
