import { BaseCacheManager } from '@ver-id/core/cache';
import type { CacheManagerOptions } from '@ver-id/core/cache';
import { assertObject, assertString, assertFunction } from '@ver-id/core/utils';
import { InvalidArgumentError } from '@ver-id/core/error';

type Commands = {
  PutCommand: new (input: unknown) => unknown;
  GetCommand: new (input: unknown) => unknown;
  DeleteCommand: new (input: unknown) => unknown;
  ScanCommand: new (input: unknown) => unknown;
};
/**
 * Lazily loaded DynamoDB command classes from `@aws-sdk/lib-dynamodb`.
 * Cached after first import to avoid repeated dynamic imports.
 */
let commandsCache: Commands | 'Dynamo DB Not Availible' | null = null;

async function loadCommands(): Promise<Commands> {
  if (!commandsCache) {
    try {
      // @ts-expect-error — @aws-sdk/lib-dynamodb is an optional peer dependency resolved at runtime
      const { PutCommand, GetCommand, DeleteCommand, ScanCommand } = await import('@aws-sdk/lib-dynamodb');
      commandsCache = { PutCommand, GetCommand, DeleteCommand, ScanCommand };
      return commandsCache
    } catch {
      commandsCache = 'Dynamo DB Not Availible';
    }
  }

  if (commandsCache === 'Dynamo DB Not Availible') {
    throw new InvalidArgumentError(
      '@aws-sdk/lib-dynamodb is required to use DynamoDBCacheManager. ' +
        'Install it with: npm install @aws-sdk/lib-dynamodb @aws-sdk/client-dynamodb',
    );
  }
  return commandsCache;
}

/**
 * Configuration options for the AWS DynamoDB cache manager.
 */
export interface DynamoDBCacheManagerConfig {
  /**
   * A DynamoDB Document Client instance (`DynamoDBDocumentClient` from `@aws-sdk/lib-dynamodb`).
   * The client must implement a `send(command)` method.
   *
   * @example
   * ```ts
   * import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
   * import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';
   *
   * const dynamoClient = DynamoDBDocumentClient.from(new DynamoDBClient({ region: 'us-east-1' }));
   * ```
   */
  client: DynamoDBCompatibleClient;

  /**
   * The name of the DynamoDB table to use for caching.
   * The table must have a partition key named `pk` of type String.
   */
  tableName: string;

  /**
   * Optional settings for cache behavior, see {@link CacheManagerOptions}.
   * DynamoDB TTL must be enabled on the `ttl` attribute of the table for expired
   * items to be reclaimed; expired items never read back regardless.
   */
  options?: CacheManagerOptions;
}

/**
 * Minimal DynamoDB Document Client interface.
 * Compatible with `@aws-sdk/lib-dynamodb` `DynamoDBDocumentClient`.
 */
export interface DynamoDBCompatibleClient {
  send(command: unknown): Promise<unknown>;
}

/**
 * DynamoDB-backed cache manager for AWS-native server environments.
 *
 * Table setup:
 * - Partition key: `pk` (String)
 * - Optional TTL attribute: `ttl` (Number) — enable DynamoDB TTL on this attribute
 *
 * DynamoDB reclaims expired items lazily (up to 48 hours late), so expiry is also
 * enforced on read and an expired item never reaches the caller.
 *
 * @example
 * ```ts
 * import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
 * import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';
 * import { DynamoDBCacheManager } from '@ver-id/node-client';
 *
 * const dynamoClient = DynamoDBDocumentClient.from(
 *   new DynamoDBClient({ region: 'us-east-1' })
 * );
 *
 * const authClient = new VeridAuthenticationClient({
 *   issuerUri: '<VERID_OAUTH_ISSUER_URI>',
 *   clientId: '<VERID_AUTHENTICATION_FLOW_ID>',
 *   redirectUri: 'REGISTERED_REDIRECT_URI',
 *   options: {
 *     cacheManager: new DynamoDBCacheManager({
 *       client: dynamoClient,
 *       tableName: 'verid-cache',
 *       options: {
 *         ttlSeconds: 600,
 *       },
 *     }),
 *   },
 * });
 * ```
 */
export class DynamoDBCacheManager extends BaseCacheManager {
  private client: DynamoDBCompatibleClient;
  private tableName: string;

  /**
   * @param config - DynamoDB cache manager configuration
   * @throws {InvalidArgumentError} If client, tableName are missing/invalid, or if options contain invalid values
   */
  constructor(config: DynamoDBCacheManagerConfig) {
    super(config?.options);

    assertObject(config?.client, 'config.client', InvalidArgumentError);
    assertFunction(config.client.send, 'config.client.send', InvalidArgumentError);
    assertString(config?.tableName, 'config.tableName', InvalidArgumentError);

    this.client = config.client;
    this.tableName = config.tableName;
  }

  // ICacheManager methods

  async save(key: string, value: string): Promise<void> {
    const prefixedKey = this.prefixedKey(key);
    this.assertValue(value);

    const commands = await loadCommands();
    const item: Record<string, unknown> = {
      pk: prefixedKey,
      value,
    };

    const expiresAt = this.expiresAt();
    if (expiresAt !== undefined) {
      item['ttl'] = Math.floor(expiresAt / 1000);
    }

    await this.client.send(
      new commands.PutCommand({
        TableName: this.tableName,
        Item: item,
      }),
    );
  }

  async get(key: string): Promise<string | null> {
    const commands = await loadCommands();
    const result = (await this.client.send(
      new commands.GetCommand({
        TableName: this.tableName,
        Key: { pk: this.prefixedKey(key) },
      }),
    )) as { Item?: { value?: string; ttl?: number } };

    const item = result.Item;
    if (!item || typeof item.value !== 'string') {
      return null;
    }

    // DynamoDB deletes expired items lazily, so an item may outlive its ttl by hours
    if (typeof item.ttl === 'number' && item.ttl * 1000 <= Date.now()) {
      return null;
    }

    return item.value;
  }

  async remove(key: string): Promise<void> {
    const commands = await loadCommands();
    await this.client.send(
      new commands.DeleteCommand({
        TableName: this.tableName,
        Key: { pk: this.prefixedKey(key) },
      }),
    );
  }

  /**
   * Removes all cache entries that match the configured prefix.
   * Performs a table scan filtered by prefix, then deletes each matching item.
   *
   * @remarks Use sparingly — scans read the entire table and may incur cost at scale.
   */
  async clear(): Promise<void> {
    const commands = await loadCommands();
    let lastKey: Record<string, unknown> | undefined;

    do {
      const scanResult = (await this.client.send(
        new commands.ScanCommand({
          TableName: this.tableName,
          FilterExpression: 'begins_with(pk, :prefix)',
          ExpressionAttributeValues: { ':prefix': this.prefix },
          ProjectionExpression: 'pk',
          ...(lastKey ? { ExclusiveStartKey: lastKey } : {}),
        }),
      )) as { Items?: { pk: string }[]; LastEvaluatedKey?: Record<string, unknown> };

      if (scanResult.Items) {
        await Promise.all(
          scanResult.Items.map((item) =>
            this.client.send(
              new commands.DeleteCommand({
                TableName: this.tableName,
                Key: { pk: item.pk },
              }),
            ),
          ),
        );
      }

      lastKey = scanResult.LastEvaluatedKey;
    } while (lastKey);
  }
}
