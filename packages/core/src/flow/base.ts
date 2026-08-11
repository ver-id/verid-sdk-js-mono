import { ICacheManager } from '../interface/ICacheManager.js';
import { FlowAuthCodeDeliveryBinding } from '../oauth/auth-code-delivery-binding.js';
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
   * Additional options for the flow client.
   */
  options: {
    /**
     * Custom cache manager for storing flow state and code verifiers.
     */
    cacheManager: ICacheManager;
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
  codeChallenge?: string;
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
 *
 * @public
 */
export abstract class VeridFlowBaseClient {
  protected oauthClient: VeridOAuthClient;

  protected cacheManager: ICacheManager;

  constructor(config: FlowBaseClientConfig) {
    assertUrlString(config.issuerUri, 'issuerUri');
    assertString(config.client_id, 'flowId', InvalidArgumentError);

    this.oauthClient = new VeridOAuthClient({
      client_id: config.client_id,
      issuer: config.issuerUri,
    });

    assertCacheManager(config.options.cacheManager, 'cacheManager', InvalidArgumentError);
    this.cacheManager = config.options.cacheManager;
  }

  /** Returns how the authorization code is delivered to this client (redirect or embedded). */
  protected abstract authCodeDeliveryBinding(): FlowAuthCodeDeliveryBinding;

  /** Generates a PKCE code challenge and stores the verifier in the cache. */
  async generateCodeChallenge(state?: string): Promise<FlowBasePkceResult> {
    assertString(state, 'state', InvalidArgumentError, { allowUndefined: true });
    
    const { codeChallenge, codeVerifier } = await this.oauthClient.generateCodeChallenge();
    const randomState = state || this.oauthClient.generateRandomState();
    await this.cacheManager.save(randomState, codeVerifier);

    return { codeChallenge, state: randomState };
  }

  /** Validates PKCE/intent parameter consistency. */
  protected validateAuthorizationRequestParams(params?: FlowBaseAuthorizationRequestParams): void {
    if (!params) return;

    if (params.intent_id && !params.codeChallenge) {
      throw new InvalidArgumentError('Code challenge must be provided when using intentId.');
    }

    if (params.codeChallenge && !params.state) {
      throw new InvalidArgumentError('State must be provided when using external code challenge.');
    }
  }

  /** Returns existing PKCE params or generates and caches new ones. */
  protected async getPkceParams(params?: FlowBasePkceParams): Promise<FlowBasePkceResult> {
    if (params?.codeChallenge && params?.state) {
      return {
        codeChallenge: params.codeChallenge,
        state: params.state,
      };
    }

    const { codeChallenge, codeVerifier } = await this.oauthClient.generateCodeChallenge();
    const state = this.oauthClient.generateRandomState();
    await this.cacheManager.save(state, codeVerifier);

    return { codeChallenge, state };
  }

  /** Normalizes callback params from a URL string, URL, or URLSearchParams. */
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

  /** Exchanges the authorization code for tokens using cached PKCE state. */
  protected async finalizeFlow(
    params: FlowBaseFinalizeParams,
    assertResponseFunc: (response: unknown, name: string, errorType: typeof Error) => void,
  ): Promise<GrantResponse> {
    const callbackParams = this.parseCallbackParams(params.callbackParams);

    const state = callbackParams.get('state');
    assertString(state, 'state', InvalidAssertionError);

    const codeVerifier = await this.cacheManager.get(state);
    if (!codeVerifier) {
      const store = this.cacheManager?.constructor?.name ?? 'the configured cache manager';
      throw new OperationFailedError(
        `Invalid code verifier: no code verifier found for state ${state} in ${store}. ` +
          'The flow was either started against a different cache store, or the entry expired. ' +
          'Deployments that span multiple hosts need a shared store such as RedisCacheManager or DynamoDBCacheManager.',
      );
    }

    await this.cacheManager.remove(state);

    const response = await this.oauthClient.authorizationCodeGrant({
      binding: this.authCodeDeliveryBinding(),
      parameters: callbackParams,
      state,
      code_verifier: codeVerifier,
      client_auth: params.clientAuth,
    });

    assertResponseFunc(response, 'OAuth response', Error);

    return response;
  }
}
