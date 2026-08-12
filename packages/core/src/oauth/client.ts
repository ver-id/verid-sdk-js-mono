import { createRemoteJWKSet, JWTPayload, jwtVerify } from 'jose';
import { ClientAuth, ClientConfig } from '../types/oauth/index.js';
import { IOAuthProvider } from '../interface/IOAuthProvider.js';
import {
  assert,
  assertObject,
  assertString,
  assertUrlString,
  assertUUID,
} from '../utils/assert.js';
import { InvalidArgumentError, InvalidAssertionError, OperationFailedError } from '../error/index.js';
import { OAuth4WebApiProvider } from './provider/index.js';
import { GrantResponse } from '../types/response/index.js';
import { Jwt, JwtVerificationOptions } from '../types/jwt/index.js';
import { BaseIntent, IntentResponse } from '../types/intent/base.js';
import { UUID } from '../types/generic.js';
import { FlowAuthCodeDeliveryBinding } from './auth-code-delivery-binding.js';

/**
 * Configuration options for the OAuth client.
 */
export interface OAuthClientConfig {
  /**
   * The OAuth 2.1 issuer URL.
   */
  issuer: string;
  /**
   * The OAuth 2.1 client identifier.
   */
  client_id: string;
}

/**
 * Parameters for initiating an OAuth authorization request.
 */
export interface OAuthRequestParams {
  /** How the authorization code is bound to the client (redirect vs embedded). */
  binding: FlowAuthCodeDeliveryBinding;
  /**
   * The scope of the authorization request.
   */
  scope?: string;

  /**
   * The state for the oauth flow
   */
  state?: string;
  /**
   * The Code challenge for the PKCE
   */
  code_challenge: string;

  /**
   * The Code challenge method for the PKCE
   */
  code_challenge_method?: 'S256' | 'plain';

  /**
   * Intent Id to associate with the request
   */
  intent_id?: UUID;
}

/**
 * Parameters for an OAuth Authorization code grant request.
 */
export interface OAuthAuthorizationCodeGrantParams {
  /**
   * How the authorization code is bound to the client (redirect vs embedded).
   */
  binding: FlowAuthCodeDeliveryBinding;
  /**
   * The authorization response.
   */
  parameters: URLSearchParams | URL;
  /**
   * state for the oauth flow
   */
  state?: string;
  /**
   * The code verifier for the PKCE flow.
   */
  code_verifier: string;
  /**
   * The client authentication details.
   */
  client_auth?: ClientAuth;
}

/**
 * Parameters for an OAuth Client credentials grant request.
 */
export interface OAuthClientCredentialsGrantParams {
  /**
   * The client authentication details.
   */
  clientAuth: ClientAuth;
  /**
   * The additional parameters for the token request.
   */
  parameters: URLSearchParams | Record<string, string> | string[][];
}

/**
 * OAuth 2.1 client for handling authorization and token flows.
 *
 * @public
 */
export class VeridOAuthClient {
  private client_id: string;

  private issuer: URL;

  private provider: IOAuthProvider;

  constructor(config: OAuthClientConfig) {
    assertUUID(config.client_id, 'client_id', InvalidArgumentError);
    assertUrlString(config.issuer, 'issuer', InvalidArgumentError);
    this.client_id = config.client_id;
    this.issuer = new URL(config.issuer);

    this.provider = new OAuth4WebApiProvider();
  }

  /**
   * Getter for the client ID.
   */
  clientId() {
    return this.client_id;
  }

  /**
   * Generates a PKCE code verifier and corresponding code challenge.
   *
   * @returns Object containing the code verifier and code challenge
   * @example
   * ```typescript
   * const { codeVerifier, codeChallenge } = await client.generateCodeChallenge();
   * ```
   */
  async generateCodeChallenge() {
    const codeVerifier = this.provider.generateRandomCodeVerifier();
    const codeChallenge = await this.provider.calculateCodeChallenge(codeVerifier);

    return {
      codeVerifier,
      codeChallenge,
    };
  }

  /**
   * Creates a new intent at the authorization server's intent endpoint.
   *
   * @param intent - The intent to create
   * @param clientAuth - Optional client authentication for server-side requests
   * @returns The created intent, including its intent identifier
   * @throws {InvalidAssertionError} When the authorization server metadata has no intent endpoint
   * @throws {OperationFailedError} When the intent endpoint returns an error or is unreachable
   * @example
   * ```typescript
   * const intent = await client.createIntent({
   *   scope: 'authentication',
   *   code_challenge: '<code_challenge>',
   *   client_id: '<client_id>',
   * });
   * ```
   */
  async createIntent(intent: BaseIntent, clientAuth?: ClientAuth): Promise<IntentResponse> {
    const authorizationServer = await this.provider.discover(this.issuer);
    assertUrlString(
      authorizationServer.intent_endpoint,
      'intent_endpoint in authorization server metadata',
      InvalidAssertionError
    );
    const url = new URL(authorizationServer.intent_endpoint);

    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };

    if (clientAuth) {
      assertObject(clientAuth, 'clientAuth', InvalidArgumentError);
      assertString(clientAuth.client_secret, 'clientAuth.client_secret', InvalidArgumentError);
      const credentials = btoa(`${this.client_id}:${clientAuth.client_secret}`);
      headers['Authorization'] = `Basic ${credentials}`;
    }

    try {
    const intentResponse = await fetch(`${url}`, {
      method: 'POST',
      headers,
      body: JSON.stringify(intent),
    });

    if (!intentResponse.ok) {
      throw new OperationFailedError(`Error occurred while calling intent endpoint: ${intentResponse.status}`, await intentResponse.text());
    }

    const intentData = await intentResponse.json() as IntentResponse;
    return intentData;
  } catch (error) {
    throw new OperationFailedError('Unknown error occurred while creating intent', error);
  }
  }

  /**
   * Generates a random state string for OAuth requests.
   *
   * @returns A random state string
   * @example
   * ```typescript
   * const state = client.generateRandomState();
   * ```
   */
  generateRandomState() {
    return this.provider.generateRandomState();
  }

  /**
   * Generates an OAuth 2.1 authorization URL with PKCE parameters.
   *
   * @param params - Parameters for the authorization request
   * @param additionalParams - Additional query parameters to append to the authorization URL
   * @returns The authorization URL
   * @throws {InvalidArgumentError} When required parameters are invalid or missing
   * @throws {InvalidAssertionError} When the authorization server metadata has no authorization
   * endpoint
   * @example
   * ```typescript
   * const authorizationUrl = await client.generateAuthorizationUrl({
   *   binding: { kind: 'redirect', redirectUri: 'https://example.com/callback' },
   *   scope: 'openid profile',
   *   code_challenge: '<code_challenge>',
   * });
   * ```
   */
  async generateAuthorizationUrl(
    params: OAuthRequestParams,
    additionalParams?: Record<string, string>,
  ) {
    const authorizationServer = await this.provider.discover(this.issuer);
    assertUrlString(
      authorizationServer.authorization_endpoint,
      'authorization_endpoint in authorization server metadata',
      InvalidAssertionError
    );

    const url = new URL(authorizationServer.authorization_endpoint);

    if (params.binding.kind === 'redirect') {
      assertUrlString(params.binding.redirectUri, 'redirect_uri', InvalidArgumentError);
      url.searchParams.set('redirect_uri', params.binding.redirectUri);
    }

    if (params.scope) {
      assertString(params.scope, 'scope', InvalidArgumentError);
      url.searchParams.set('scope', params.scope);
    }

    if (params.state) {
      assertString(params.state, 'state', InvalidArgumentError);
      url.searchParams.set('state', params.state);
    }

    url.searchParams.set('client_id', this.client_id);
    url.searchParams.set('response_type', 'code');

    assertString(params.code_challenge, 'code_challenge', InvalidArgumentError);
    url.searchParams.set('code_challenge', params.code_challenge);
    if (params.code_challenge_method) {
      assert(
        ['S256', 'plain'].includes(params.code_challenge_method),
        `Invalid code_challenge_method: ${params.code_challenge_method} is not a supported method`,
        InvalidArgumentError,
      );
    }
    url.searchParams.set('code_challenge_method', params.code_challenge_method ?? 'S256');

    if (params.intent_id) {
      assertUUID(params.intent_id, 'intent_id', InvalidArgumentError);
      url.searchParams.set('intent_id', params.intent_id);
    }

    if (additionalParams) {
      Object.entries(additionalParams).forEach(([k, v]) => {
        url.searchParams.set(k, v);
      });
    }

    return url.toString();
  }

  /**
   * Validates the callback and exchanges the authorization code for tokens.
   *
   * @param params - Authorization code grant parameters
   * @returns The grant response containing the access token and other token information
   * @throws {InvalidArgumentError} When the callback parameters are invalid
   * @throws {OperationFailedError} When the token exchange fails
   */
  async authorizationCodeGrant(params: OAuthAuthorizationCodeGrantParams): Promise<GrantResponse> {
    if (params.binding.kind === 'redirect') {
      assertUrlString(params.binding.redirectUri, 'redirect_uri', InvalidArgumentError);
    }
    assertString(params.code_verifier, 'code_verifier', InvalidArgumentError);
    assert(
      params.parameters instanceof URL || params.parameters instanceof URLSearchParams,
      'parameters',
      InvalidArgumentError,
    );
    if (params.state) {
      assertString(params.state, 'state', InvalidArgumentError);
    }
    if (params.client_auth) {
      assertObject(params.client_auth, 'client_auth', InvalidArgumentError);
      assertString(
        params.client_auth.client_secret,
        'client_auth.client_secret',
        InvalidArgumentError,
      );
    }

    const authorizationServer = await this.provider.discover(this.issuer);
    const clientConfig: ClientConfig = {
      client_id: this.client_id,
      id_token_signed_response_alg: 'ES384',
    };

    const callbackParams = this.provider.validateAuthResponse(
      authorizationServer,
      clientConfig,
      params.parameters,
      params.state,
    );

    const authorizationCodeGrantResponse = await this.provider.authorizationCodeGrantRequest(
      authorizationServer,
      clientConfig,
      params.client_auth ?? null,
      callbackParams,
      params.binding,
      params.code_verifier,
    );

    const result = await this.provider.processAuthorizationCodeResponse(
      authorizationServer,
      {
        ...clientConfig,},
      authorizationCodeGrantResponse,
    );

    return result;

  }

  /**
   * Performs the OAuth client credentials grant flow.
   *
   * @param params - Parameters including client authentication credentials
   * @returns The grant response containing the access token
   * @throws {InvalidArgumentError} When client credentials are invalid or missing
   */
  async clientCredentialGrant(params: OAuthClientCredentialsGrantParams): Promise<GrantResponse> {
    assertObject(params, 'params', InvalidArgumentError);
    assertString(params.clientAuth.client_secret, 'clientAuth.client_secret', InvalidArgumentError);

    const authorizationServer = await this.provider.discover(this.issuer);
    const clientConfig: ClientConfig = {
      client_id: this.client_id,
    };

    const clientCredentialGrantRequest = await this.provider.clientCredentialsGrantRequest(
      authorizationServer,
      clientConfig,
      params.clientAuth,
      params.parameters,
    );

    const result = await this.provider.processClientCredentialsResponse(
      authorizationServer,
      clientConfig,
      clientCredentialGrantRequest,
    );

    return result;
  }

  /**
   * Verifies a JWT token using the issuer's public keys and returns a typed payload.
   *
   * @param token - The JWT token string to verify and decode
   * @param typeAssert - Assertion function that narrows the verified payload to `T`
   * @param options - Optional verification options including issuer and audience
   * @returns Verified decoded JWT containing the typed payload and protected header
   * @throws {InvalidArgumentError} When the token is invalid
   * @throws {OperationFailedError} When JWT verification fails
   * @throws {InvalidAssertionError} When the token payload does not match the expected structure
   */
  async decode<T extends JWTPayload>(
    token: string,
    typeAssert: (payload: unknown, name: string) => asserts payload is T,
    options?: JwtVerificationOptions,
  ): Promise<Jwt<T>> {
    assertString(token, 'token', InvalidArgumentError);
    const authorizationServer = await this.provider.discover(this.issuer);
    const JWKS = createRemoteJWKSet(new URL(authorizationServer.jwks_uri as string));
    let payload, protectedHeader;
    try {
      ({ payload, protectedHeader } = await jwtVerify(
        token,
        JWKS,
        options && {
          issuer: options.issuer,
          audience: options.audience,
        },
      ));
    } catch (err) {
      throw new OperationFailedError('JWT verification failed', err);
    }

    typeAssert(payload, 'Token payload');
    return {
      payload,
      protectedHeader,
    } as Jwt<T>;
  }
}
