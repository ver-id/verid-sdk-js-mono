import { ICacheManager } from '../interface/ICacheManager.js';
import {
  VeridOAuthClient,
  InvalidArgumentError,
  assertUrlString,
  assertCacheManager,
  assertString,
  InvalidAssertionError,
  OperationFailedError,
  GrantResponse,
  ClientAuth,
} from '../index.js';

/**
 * Configuration for flow base client.
 */
export interface FlowBaseClientConfig {
  /**
   * Ver.iD OAuth Issuer URI
   */
  issuerUri: string;
  /**
   * The client_id (flow identifier)
   */
  client_id: string;
  /**
   * The registered redirect URI for the flow.
   */
  redirectUri: string;
  /**
   * Optional configuration settings
   */
  options?: {
    /**
     * Custom cache manager for storing flow state and code verifiers.
     */
    cacheManager?: ICacheManager;
  };
}

/**
 * Flow base parameters for authorization requests.
 */
export interface FlowBaseAuthorizationRequestParams {
  /**
   * The state for the oauth flow, if external state must be used
   */
  state?: string;
  /**
   * The code challenge for PKCE flow, if external code challenge must be used
   */
  code_challenge?: string;
  /**
   * Intent Id to associate with the request
   */
  intent_id?: string;
}

/**
 * Base parameters for PKCE.
 */
export interface FlowBasePkceParams {
  /**
   * The state for the oauth flow, if external state must be used
   */
  state?: string;
  /**
   * The code challenge for PKCE flow, if external code challenge must be used
   */
  codeChallenge?: string;
}

/**
 * Base parameters for finalization.
 */
export interface FlowBaseFinalizeParams {
  /**
   * The callback params to use for the authorization response validation.
   * Can be a string, URL, or URLSearchParams.
   */
  callbackParams: URL | URLSearchParams | string;
  /**
   * The client authentication details.
   * Optional in browser environments, required in server environments.
   */
  clientAuth?: ClientAuth;
}

/**
 * Result from PKCE parameter generation.
 */
export interface FlowBasePkceResult {
  codeChallenge: string;
  state: string;
}

/**
 * Base class for all Ver.iD OAuth flow clients.
 * Provides common functionality for authentication, disclosure, and issuance flows.
 * 
 * @public
 */
export class VeridFlowBaseClient {
  /**
   * Underlying OAuth client for handling authorization flows.
   * @protected
   */
  protected oauthClient: VeridOAuthClient;

  /**
   * The OAuth 2.1 redirect URI for authorization code flow.
   * @protected
   */
  protected redirectUri: string;

  /**
   * Cache manager for storing code verifiers and state values.
   * @protected
   */
  protected cacheManager: ICacheManager;

  /**
   * Creates a new flow client.
   * 
   * @param config - The flow client configuration
   * @param defaultCacheManager - The default cache manager to use if none is provided in config
   */
  constructor(config: FlowBaseClientConfig, defaultCacheManager: ICacheManager) {
    assertUrlString(config.issuerUri, 'issuerUri');
    assertUrlString(config.redirectUri, 'redirectUri');
    assertString(config.client_id, 'flowId', InvalidArgumentError);

    this.oauthClient = new VeridOAuthClient({
      client_id: config.client_id,
      issuer: config.issuerUri,
    });

    this.redirectUri = config.redirectUri;

    if (config.options?.cacheManager) {
      assertCacheManager(config.options.cacheManager, 'cacheManager', InvalidArgumentError);
      this.cacheManager = config.options.cacheManager;
    } else {
      this.cacheManager = defaultCacheManager;
    }
  }

  /**
   * Generates a PKCE code challenge and state for secure OAuth flows.
   *
   * @param state - Optional state parameter. If not provided, a random state will be generated
   * @returns Object containing the code challenge and state
   * @example
   * ```typescript
   * const { codeChallenge, state } = await client.generateCodeChallenge();
   * ```
   */
  async generateCodeChallenge(state?: string): Promise<FlowBasePkceResult> {
    assertString(state, 'state', InvalidArgumentError, { allowUndefined: true });
    
    const { codeChallenge, codeVerifier } = await this.oauthClient.generateCodeChallenge();
    const randomState = state || this.oauthClient.generateRandomState();
    this.cacheManager.save(randomState, codeVerifier);

    return { codeChallenge, state: randomState };
  }

  /**
   * Validates authorization request parameters for consistency.
   * Ensures that if intentId is provided, codeChallenge is also provided.
   * Ensures that if codeChallenge is provided, state is also provided.
   *
   * @param params - The authorization request parameters to validate
   * @throws {InvalidArgumentError} When validation fails
   * @protected
   */
  protected validateAuthorizationRequestParams(params?: FlowBaseAuthorizationRequestParams): void {
    if (!params) return;

    if (params.intent_id && !params.code_challenge) {
      throw new InvalidArgumentError('Code challenge must be provided when using intentId.');
    }

    if (params.code_challenge && !params.state) {
      throw new InvalidArgumentError('State must be provided when using external code challenge.');
    }
  }

  /**
   * Generate or uses provided PKCE parameters.
   * If codeChallenge and state are provided, uses them.
   * Otherwise, generates new ones and stores the code verifier in cache.
   * 
   * @param params - Optional PKCE parameters
   * @returns Object containing code challenge and state
   * @protected
   */
  protected async getPkceParams(params?: FlowBasePkceParams): Promise<FlowBasePkceResult> {
    if (params?.codeChallenge && params?.state) {
      return {
        codeChallenge: params.codeChallenge,
        state: params.state,
      };
    }

    const { codeChallenge, codeVerifier } = await this.oauthClient.generateCodeChallenge();
    const state = this.oauthClient.generateRandomState();
    this.cacheManager.save(state, codeVerifier);

    return { codeChallenge, state };
  }

  /**
   * Parses callback parameters from various input formats.
   * Accepts string (URL), URL object, or URLSearchParams.
   * If no params are provided and window is available (browser), uses window.location.search.
   * 
   * @param params - The callback parameters or undefined to use window.location
   * @returns Parsed URLSearchParams
   * @throws {InvalidArgumentError} When params format is invalid
   * @protected
   */
  protected parseCallbackParams(params: URL | URLSearchParams | string): URLSearchParams {
    switch (typeof params) {
      case 'string':
        assertUrlString(params, 'callbackParams', InvalidArgumentError);
        return new URLSearchParams(new URL(params).search);

      case 'object':
        if (params instanceof URL) {
          return new URLSearchParams(params.search);
        } else if (params instanceof URLSearchParams) {
          return params;
        }
        throw new InvalidArgumentError(
          'Invalid callbackParams: must be a string, URL, or URLSearchParams.',
        );

      default:
        throw new InvalidArgumentError(
          'Invalid callbackParams: must be a string, URL, or URLSearchParams.',
        );
    }
  }

  /**
   * Finalizes the OAuth flow by exchanging the authorization code for tokens.
   * Handles callback parameter parsing, state validation, code verifier retrieval,
   * and token exchange via the OAuth client.
   * 
   * @param params - Parameters for finalization including callback params and optional clientAuth
   * @param assertResponseFunc - Function to assert the response type
   * @returns The grant response with tokens
   * @throws {InvalidAssertionError} When state is missing from callback params
   * @throws {OperationFailedError} When code verifier is missing or expired
   * @protected
   */
  protected async finalizeFlow(
    params: FlowBaseFinalizeParams,
    assertResponseFunc: (response: unknown, name: string, errorType: typeof Error) => void,
  ): Promise<GrantResponse> {
    const callbackParams = this.parseCallbackParams(params.callbackParams);

    const state = callbackParams.get('state');
    assertString(state, 'state', InvalidAssertionError);

    const codeVerifier = this.cacheManager.get(state);
    if (!codeVerifier) {
      throw new OperationFailedError(
        `Invalid code verifier: missing or expired code verifier for state ${state}`,
      );
    }

    this.cacheManager.remove(state);

    const response = await this.oauthClient.authorizationCodeGrant({
      redirect_uri: this.redirectUri,
      parameters: callbackParams,
      state,
      code_verifier: codeVerifier,
      client_auth: params.clientAuth,
    });

    assertResponseFunc(response, 'OAuth response', Error);

    return response;
  }
}
