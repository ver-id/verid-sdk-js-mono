import type { ICacheManager } from '@verid-sdk-js-mono/core';
import { assertObject, assertString, assertFunction, assertNumber, InvalidArgumentError } from '@verid-sdk-js-mono/core';

/**
 * Lazily loaded DynamoDB command classes from `@aws-sdk/lib-dynamodb`.
 * Cached after first import to avoid repeated dynamic imports.
 */
let commandsCache: {
  PutCommand: new (input: unknown) => unknown;
  GetCommand: new (input: unknown) => unknown;
  DeleteCommand: new (input: unknown) => unknown;
  ScanCommand: new (input: unknown) => unknown;
} | null = null;

async function loadCommands() {
  if (!commandsCache) {
    try {
      // @ts-expect-error — @aws-sdk/lib-dynamodb is an optional peer dependency resolved at runtime
      const { PutCommand, GetCommand, DeleteCommand, ScanCommand } = await import('@aws-sdk/lib-dynamodb');
      commandsCache = { PutCommand, GetCommand, DeleteCommand, ScanCommand };
    } catch {
      throw new InvalidArgumentError(
        '@aws-sdk/lib-dynamodb is required to use DynamoDBCacheManager. ' +
          'Install it with: npm install @aws-sdk/lib-dynamodb @aws-sdk/client-dynamodb',
      );
    }
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
   * Optional settings for cache behavior.
   */
  options?: {
    /**
     * Optional key prefix to namespace cache entries.
     * Useful when sharing a DynamoDB table across multiple applications.
     * @default 'verid:'
     */
    prefix?: string;

    /**
     * Optional TTL (time-to-live) in seconds for cache entries.
     * Entries will be automatically removed after this duration.
     * If not set, entries persist until explicitly removed.
     * Note: DynamoDB TTL must be enabled on the `ttl` attribute of the table for this to work.
     * @default undefined (no expiry)
     */
    ttlSeconds?: number;
  };
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
 *   client_id: '<VERID_AUTHENTICATION_FLOW_ID>',
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
export class DynamoDBCacheManager implements ICacheManager {
  private client: DynamoDBCompatibleClient;
  private tableName: string;
  private prefix: string;
  private ttlSeconds?: number;

  /**
   * @param config - DynamoDB cache manager configuration
   * @throws {InvalidArgumentError} If client, tableName are missing/invalid, or if options contain invalid values
   */
  constructor(config: DynamoDBCacheManagerConfig) {
    assertObject(config?.client, 'config.client', InvalidArgumentError);
    assertFunction(config.client.send, 'config.client.send', InvalidArgumentError);
    assertString(config?.tableName, 'config.tableName', InvalidArgumentError);

    if (config.options?.prefix !== undefined) {
      assertString(config.options.prefix, 'config.options.prefix', InvalidArgumentError);
    }

    if (config.options?.ttlSeconds !== undefined) {
      assertNumber(config.options.ttlSeconds, 'config.options.ttlSeconds', InvalidArgumentError);
      if (!Number.isInteger(config.options.ttlSeconds)) {
        throw new InvalidArgumentError('Invalid config.options.ttlSeconds: must be a whole number of seconds');
      }
    }

    this.client = config.client;
    this.tableName = config.tableName;
    this.ttlSeconds = config.options?.ttlSeconds;
    this.prefix = config.options?.prefix ?? 'verid:';
  }

  private prefixedKey(key: string): string {
    return `${this.prefix}${key}`;
  }

  // ICacheManager methods

  async save(key: string, value: string): Promise<void> {
    const commands = await loadCommands();
    const item: Record<string, unknown> = {
      pk: this.prefixedKey(key),
      value,
    };

    if (this.ttlSeconds) {
      item['ttl'] = Math.floor(Date.now() / 1000) + this.ttlSeconds;
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
    )) as { Item?: { value?: string } };

    return result.Item?.value ?? null;
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
