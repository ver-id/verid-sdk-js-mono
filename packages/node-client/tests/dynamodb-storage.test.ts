import { InvalidArgumentError } from '@ver-id/core/error';
import { DynamoDBCacheManager, type DynamoDBCompatibleClient } from '../src/cache/dynamodb-storage';
import { describeCacheManagerContract } from '../../core/tests/cache-contract';

jest.mock(
  '@aws-sdk/lib-dynamodb',
  () => {
    class Command {
      constructor(public input: Record<string, never>) {}
    }
    return {
      PutCommand: class extends Command {},
      GetCommand: class extends Command {},
      DeleteCommand: class extends Command {},
      ScanCommand: class extends Command {},
    };
  },
  { virtual: true },
);

interface StoredItem {
  pk: string;
  value: string;
  ttl?: number;
}

/**
 * Minimal DynamoDB Document Client stand-in. It deliberately keeps items past their
 * `ttl`, the way DynamoDB does until its sweeper catches up.
 */
function createFakeDynamo(tableName = 'verid-cache') {
  const table = new Map<string, StoredItem>();

  const client: DynamoDBCompatibleClient = {
    send: (command) => {
      const { input } = command as { input: Record<string, never> };
      const name = (command as object).constructor.name;
      const key = (input['Key'] as { pk: string } | undefined)?.pk;

      switch (name) {
        case 'PutCommand':
          table.set((input['Item'] as unknown as StoredItem).pk, input['Item'] as unknown as StoredItem);
          return Promise.resolve({});
        case 'GetCommand':
          return Promise.resolve({ Item: key !== undefined ? table.get(key) : undefined });
        case 'DeleteCommand':
          if (key !== undefined) {
            table.delete(key);
          }
          return Promise.resolve({});
        case 'ScanCommand': {
          const prefix = (input['ExpressionAttributeValues'] as unknown as Record<string, string>)[':prefix'];
          return Promise.resolve({
            Items: [...table.values()].filter((item) => item.pk.startsWith(prefix)).map(({ pk }) => ({ pk })),
          });
        }
        default:
          throw new Error(`unexpected command ${name}`);
      }
    },
  };

  return { client, table, tableName };
}

describe('DynamoDBCacheManager', () => {
  describeCacheManagerContract('DynamoDBCacheManager', (() => {
    const { client, tableName } = createFakeDynamo();
    return (options) => new DynamoDBCacheManager({ client, tableName, options });
  })());

  describe('constructor', () => {
    it('should reject a missing client', () => {
      expect(() => new DynamoDBCacheManager({ tableName: 'verid-cache' } as never)).toThrow(InvalidArgumentError);
    });

    it('should reject a missing table name', () => {
      const { client } = createFakeDynamo();
      expect(() => new DynamoDBCacheManager({ client } as never)).toThrow(InvalidArgumentError);
    });
  });

  describe('storage', () => {
    it('should write the prefixed key and a ttl attribute', async () => {
      const { client, table, tableName } = createFakeDynamo();

      await new DynamoDBCacheManager({ client, tableName, options: { ttlSeconds: 600 } }).save(
        'state-a',
        'verifier-a',
      );

      const item = table.get('verid:state-a');
      expect(item?.value).toBe('verifier-a');
      expect(item?.ttl).toBeCloseTo(Math.floor((Date.now() + 600_000) / 1000), -1);
    });

    it('should omit the ttl attribute when expiry is disabled', async () => {
      const { client, table, tableName } = createFakeDynamo();

      await new DynamoDBCacheManager({ client, tableName, options: { ttlSeconds: 0 } }).save('state-a', 'verifier-a');

      expect(table.get('verid:state-a')).not.toHaveProperty('ttl');
    });

    it('should hide items DynamoDB has not swept yet', async () => {
      const { client, table, tableName } = createFakeDynamo();
      const cacheManager = new DynamoDBCacheManager({ client, tableName, options: { ttlSeconds: 600 } });
      await cacheManager.save('state-a', 'verifier-a');

      jest.spyOn(Date, 'now').mockReturnValue(Date.now() + 601_000);

      expect(await cacheManager.get('state-a')).toBeNull();
      // the item is still in the table, only the read hides it
      expect(table.has('verid:state-a')).toBe(true);
      jest.restoreAllMocks();
    });
  });
});
