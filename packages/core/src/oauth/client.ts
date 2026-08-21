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
   * The OAuth 2.1 client identifier (sent on the wire as `client_id`).
   */
  clientId: string;
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
  codeChallenge: string;

  /**
   * The Code challenge method for the PKCE
   */
  codeChallengeMethod?: 'S256' | 'plain';

  /**
   * Intent Id to associate with the request
   */
  intentId?: UUID;
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
  codeVerifier: string;
  /**
   * The client authentication details.
   */
  clientAuth?: ClientAuth;
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
  private readonly _clientId: string;

  private issuer: URL;

  private provider: IOAuthProvider;

  constructor(config: OAuthClientConfig) {
    assertUUID(config.clientId, 'clientId', InvalidArgumentError);
    assertUrlString(config.issuer, 'issuer', InvalidArgumentError);
    this._clientId = config.clientId;
    this.issuer = new URL(config.issuer);

    this.provider = new OAuth4WebApiProvider();
  }

  /**
   * Getter for the client ID.
   */
  clientId() {
    return this._clientId;
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
      const credentials = btoa(`${this._clientId}:${clientAuth.client_secret}`);
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
   *   codeChallenge: '<code_challenge>',
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

    url.searchParams.set('client_id', this._clientId);
    url.searchParams.set('response_type', 'code');

    assertString(params.codeChallenge, 'codeChallenge', InvalidArgumentError);
    url.searchParams.set('code_challenge', params.codeChallenge);
    if (params.codeChallengeMethod) {
      assert(
        ['S256', 'plain'].includes(params.codeChallengeMethod),
        `Invalid codeChallengeMethod: ${params.codeChallengeMethod} is not a supported method`,
        InvalidArgumentError,
      );
    }
    url.searchParams.set('code_challenge_method', params.codeChallengeMethod ?? 'S256');

    if (params.intentId) {
      assertUUID(params.intentId, 'intentId', InvalidArgumentError);
      url.searchParams.set('intent_id', params.intentId);
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
    assertString(params.codeVerifier, 'codeVerifier', InvalidArgumentError);
    assert(
      params.parameters instanceof URL || params.parameters instanceof URLSearchParams,
      'parameters',
      InvalidArgumentError,
    );
    if (params.state) {
      assertString(params.state, 'state', InvalidArgumentError);
    }
    if (params.clientAuth) {
      assertObject(params.clientAuth, 'clientAuth', InvalidArgumentError);
      assertString(
        params.clientAuth.client_secret,
        'clientAuth.client_secret',
        InvalidArgumentError,
      );
    }

    const authorizationServer = await this.provider.discover(this.issuer);
    const clientConfig: ClientConfig = {
      client_id: this._clientId,
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
      params.clientAuth ?? null,
      callbackParams,
      params.binding,
      params.codeVerifier,
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
      client_id: this._clientId,
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

  /**
   * Issues an HTTP Basic-authenticated JSON request as a confidential client and maps the OAuth
   * `{ error, error_description }` error envelope to an {@link OperationFailedError} on failure.
   *
   * This is the shared transport primitive for headless, machine-to-machine flows: the caller
   * builds the target URL, and this method attaches `clientId:client_secret` Basic credentials,
   * performs the request, and normalises errors. It does not discover endpoints — pass a full URL.
   *
   * @param method - The HTTP method.
   * @param url - The fully-resolved endpoint URL.
   * @param clientAuth - The confidential client credentials (`client_secret` required).
   * @param body - An optional JSON request body.
   * @returns The parsed JSON response body.
   * @throws {OperationFailedError} When the request fails to send or the response is not `ok`.
   */
  async authenticatedRequest<T>(
    method: 'GET' | 'POST',
    url: URL,
    clientAuth: ClientAuth,
    body?: Record<string, unknown>,
  ): Promise<T> {
    assertObject(clientAuth, 'clientAuth', InvalidArgumentError);
    assertString(clientAuth.client_secret, 'clientAuth.client_secret', InvalidArgumentError);

    const credentials = btoa(`${this._clientId}:${clientAuth.client_secret}`);
    const headers: Record<string, string> = { Authorization: `Basic ${credentials}` };
    if (body) {
      headers['Content-Type'] = 'application/json';
    }

    let response: Response;
    try {
      response = await fetch(url.toString(), {
        method,
        headers,
        body: body ? JSON.stringify(body) : undefined,
      });
    } catch (error) {
      throw new OperationFailedError(`Request to ${url.pathname} failed`, error);
    }

    const text = await response.text();
    const parsed = text ? this._parseJson(text) : undefined;

    if (!response.ok) {
      throw this._toError(response.status, parsed);
    }

    assertObject(parsed, 'response body', OperationFailedError);
    return parsed as T;
  }

  /** Parses a JSON body, returning `undefined` rather than throwing on malformed JSON. */
  private _parseJson(text: string): Record<string, unknown> | undefined {
    try {
      return JSON.parse(text) as Record<string, unknown>;
    } catch {
      return undefined;
    }
  }

  /** Builds an {@link OperationFailedError} from the OAuth error envelope, when present. */
  private _toError(status: number, body: Record<string, unknown> | undefined): OperationFailedError {
    const code = typeof body?.error === 'string' ? body.error : undefined;
    const description =
      typeof body?.error_description === 'string'
        ? body.error_description
        : `Request failed with status ${status}`;
    return new OperationFailedError(description, undefined, code);
  }
}
