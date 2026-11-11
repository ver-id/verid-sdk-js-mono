import { VeridHostedFlowClient, type ICacheManager, type VeridFlowDefinition } from '@ver-id/core';
import { SessionStorageCacheManager } from '../cache/session-storage.js';

/**
 * Configuration for a browser flow client.
 *
 * @public
 */
export interface BrowserClientConfig {
  /** Ver.iD OAuth Issuer URI. */
  issuerUri: string;
  /** The flow identifier (sent to the authorization server as `client_id`). */
  clientId: string;
  /** The registered redirect URI for the flow. */
  redirectUri: string;
  /** Stores code verifiers between sessions. Defaults to `SessionStorageCacheManager`. */
  cacheManager?: ICacheManager;
}

/**
 * Parameters for `finishSession`.
 *
 * @public
 */
export interface BrowserFinishSessionParams {
  /** The callback URL. Defaults to `window.location.href`. */
  callbackUrl?: URL | URLSearchParams | string;
}

/**
 * A flow client whose session is created and finished in the browser.
 *
 * Only flows without a client secret can complete a session here, and of issuance flows only demo
 * ones: any other flow needs client credentials, so it needs a backend and `@ver-id/node-client`.
 */
export abstract class BrowserFlowClient<
  TInput,
  TResult,
  TSessionExtra extends object = object,
> extends VeridHostedFlowClient<TInput, TResult, TSessionExtra> {
  constructor(config: BrowserClientConfig, flow: VeridFlowDefinition<TInput, TSessionExtra>) {
    super(
      { ...config, cacheManager: config.cacheManager ?? new SessionStorageCacheManager() },
      flow,
    );
  }

  /**
   * Exchanges the code on the callback, verifies the result token and returns it.
   *
   * @param params - Optionally the callback URL; defaults to `window.location.href`
   * @returns The token's format, its verified payload and the original token
   * @throws {AuthorizationResponseError} When the callback carries an error
   * @throws {OperationFailedError} When no verifier is cached for the state, or token verification
   *   fails
   */
  async finishSession(params?: BrowserFinishSessionParams): Promise<TResult> {
    return this.finishWithCode(params?.callbackUrl ?? window.location.href);
  }
}
