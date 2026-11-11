// The stores live in @ver-id/core so this package and @ver-id/embedded-node-client share one
// implementation of each.
export { MemoryStorageCacheManager } from '@ver-id/core/cache';
export {
  FileStorageCacheManager,
  RedisCacheManager,
  DynamoDBCacheManager,
} from '@ver-id/core/cache/node';
export type {
  RedisCacheManagerConfig,
  RedisCompatibleClient,
  DynamoDBCacheManagerConfig,
  DynamoDBCompatibleClient,
} from '@ver-id/core/cache/node';
