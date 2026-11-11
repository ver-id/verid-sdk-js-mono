import {
  assertString,
  InvalidArgumentError,
  VeridHostedFlowClient,
  type ICacheManager,
  type VeridFlowDefinition,
} from '@ver-id/core';

/**
 * Configuration for a Node.js flow client.
 *
 * @public
 */
export interface NodeClientConfig {
  /** Ver.iD OAuth Issuer URI. */
  issuerUri: string;
  /** The flow identifier (sent to the authorization server as `client_id`). */
  clientId: string;
  /** The flow's client secret. */
  clientSecret: string;
  /** The registered redirect URI for the flow. */
  redirectUri: string;
  /**
   * Stores code verifiers between `createSession` and `finishSession`. Deployments that span
   * multiple hosts need a shared store such as `RedisCacheManager` or `DynamoDBCacheManager`.
   */
  cacheManager: ICacheManager;
}

/**
 * Parameters for `finishSession`.
 *
 * @public
 */
export interface NodeFinishSessionParams {
  /** The callback URL, or its path and query such as `req.originalUrl`. */
  callbackUrl: URL | URLSearchParams | string;
}

/** A flow client whose session is created and finished on the backend. */
export abstract class NodeFlowClient<
  TInput,
  TResult,
  TSessionExtra extends object = object,
> extends VeridHostedFlowClient<TInput, TResult, TSessionExtra> {
  constructor(config: NodeClientConfig, flow: VeridFlowDefinition<TInput, TSessionExtra>) {
    super(config, flow);
    assertString(config.clientSecret, 'clientSecret', InvalidArgumentError);
  }

  /**
   * Exchanges the code on the callback, verifies the result token and returns it.
   *
   * @param params - The callback URL
   * @returns The token's format, its verified payload and the original token
   * @throws {AuthorizationResponseError} When the callback carries an error
   * @throws {OperationFailedError} When no verifier is cached for the state, or token verification
   *   fails
   */
  async finishSession(params: NodeFinishSessionParams): Promise<TResult> {
    return this.finishWithCode(params.callbackUrl);
  }
}
