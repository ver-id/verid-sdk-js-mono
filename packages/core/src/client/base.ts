import { ICacheManager } from '../interface/ICacheManager.js';
import { FlowAuthCodeDeliveryBinding } from '../oauth/auth-code-delivery-binding.js';
import { VeridOAuthClient } from '../oauth/client.js';
import {
  AuthorizationResponseError,
  InvalidArgumentError,
  InvalidAssertionError,
  InvalidResponseError,
  OperationFailedError,
} from '../error/index.js';
import {
  assertCacheManager,
  assertJwtPayload,
  assertString,
  assertUrlString,
} from '../utils/assert.js';
import { ClientAuth } from '../types/oauth/index.js';
import { JWTPayload } from '../types/jwt/index.js';
import { GrantResponse } from '../types/response/index.js';
import { IntentResponse } from '../types/intent/index.js';

/**
 * Marks a cached token received but not yet verified, cached as `token:<code hash>:<token>`. A
 * PKCE verifier never contains `:`.
 */
const RECEIVED_TOKEN_PREFIX = 'token:';

/** SHA-256 of the authorization code, hex: binds a cached token to the callback that earned it. */
async function codeHash(code: string): Promise<string> {
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(code));
  return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, '0')).join('');
}

/**
 * Input every flow accepts when a session is created.
 *
 * @public
 */
export interface VeridSessionInput {
  /** Echoed back in the result token's `parameter.challenge`; must be a UUID. */
  challenge?: string;
  /** The brand to show during the flow. */
  brandUuid?: string;
}

/**
 * A verified result token.
 *
 * @public
 */
export interface VeridTokenResult<TFormat extends string, TPayload> {
  /** The token format, read from the token's `typ` header. */
  readonly format: TFormat;
  /** The verified payload. */
  readonly payload: TPayload;
  /** The original signed token. */
  readonly rawToken: string;
}

/**
 * A verified token whose `typ` this SDK version does not know.
 *
 * @public
 */
export interface VeridUnknownTokenResult extends VeridTokenResult<'unknown', JWTPayload> {
  /** The token's `typ` header, for logging; absent when the token has none. */
  readonly typ?: string;
}

/** How a client recognises and checks one token format. */
export interface VeridTokenFormat {
  format: string;
  assert: (payload: unknown, name: string) => void;
}

/** What differs between authentication, disclosure and issuance. */
export interface VeridFlowDefinition<TInput, TSessionExtra extends object = object> {
  /** The scope of the authorization request. */
  scope(input: TInput): string;
  /** The intent body without the fields the base client adds. */
  intent(input: TInput): { scope: string } & Record<string, unknown>;
  /** Flow-specific fields returned from `createSession`. */
  sessionExtra(intent: IntentResponse): TSessionExtra;
  /** Checks the token response. */
  assertResponse(response: unknown, name: string, errorType: new (message: string) => Error): void;
  /** The result token within the token response. */
  token(response: GrantResponse): string;
  /** The token formats this flow returns, by `typ`. */
  formats: ReadonlyMap<string, VeridTokenFormat>;
}

/** `createSession` arguments: the input may be left out when all its fields are optional. */
export type VeridSessionArgs<TInput> = object extends TInput ? [input?: TInput] : [input: TInput];

/**
 * Configuration for flow base client.
 */
export interface FlowBaseClientConfig {
  /**
   * Ver.iD OAuth Issuer URI
   */
  issuerUri: string;
  /**
   * The flow identifier (sent to the authorization server as `client_id`)
   */
  clientId: string;
  /**
   * The flow's client secret. Server-side clients only.
   */
  clientSecret?: string;
  /**
   * Stores code verifiers between `createSession` and `finishSession`.
   */
  cacheManager: ICacheManager;
}

/** The intent and PKCE values of a newly created session. */
export interface FlowOpenedSession<TSessionExtra> {
  codeChallenge: string;
  state: string;
  intentId: string;
  extra: TSessionExtra;
}

/** Reads the query of a callback. A path such as `req.originalUrl` is accepted. */
function parseCallbackParams(callback: URL | URLSearchParams | string): URLSearchParams {
  if (callback instanceof URLSearchParams) {
    return callback;
  }
  // Not `instanceof URL`: URL look-alikes such as Next.js's `req.nextUrl` are not subclasses.
  if (typeof callback === 'object' && typeof callback?.search === 'string') {
    return new URLSearchParams(callback.search);
  }
  assertString(callback, 'callbackUrl', InvalidArgumentError);
  try {
    return new URLSearchParams(new URL(callback, 'https://callback.invalid').search);
  } catch {
    throw new InvalidArgumentError('Invalid callbackUrl: must be a URL or a path with a query.');
  }
}

/**
 * Base class for all Ver.iD OAuth flow clients.
 *
 * @public
 */
export abstract class VeridFlowBaseClient<TInput, TResult, TSessionExtra extends object = object> {
  protected readonly oauthClient: VeridOAuthClient;

  protected readonly flow: VeridFlowDefinition<TInput, TSessionExtra>;

  private readonly cacheManager: ICacheManager;

  private readonly clientAuth?: ClientAuth;

  constructor(config: FlowBaseClientConfig, flow: VeridFlowDefinition<TInput, TSessionExtra>) {
    assertUrlString(config.issuerUri, 'issuerUri', InvalidArgumentError);
    assertString(config.clientId, 'clientId', InvalidArgumentError);
    assertString(config.clientSecret, 'clientSecret', InvalidArgumentError, {
      allowUndefined: true,
    });
    assertCacheManager(config.cacheManager, 'cacheManager', InvalidArgumentError);

    this.oauthClient = new VeridOAuthClient({
      clientId: config.clientId,
      issuer: config.issuerUri,
    });
    this.flow = flow;
    this.cacheManager = config.cacheManager;
    this.clientAuth =
      config.clientSecret === undefined ? undefined : { client_secret: config.clientSecret };
  }

  /** Returns how the authorization code is delivered to this client (redirect or embedded). */
  protected abstract authCodeDeliveryBinding(): FlowAuthCodeDeliveryBinding;

  /** Reads the optional or required `createSession` input. */
  protected sessionInput(args: VeridSessionArgs<TInput>): TInput {
    return ((args as unknown as [TInput?])[0] ?? {}) as TInput;
  }

  /**
   * Creates the session's intent, then caches the verifier, so a rejected intent caches nothing.
   *
   * Every session has an intent, with or without data: the platform checks the client, the
   * scope and the client secret before the user starts, instead of after the flow.
   */
  protected async openSession(input: TInput): Promise<FlowOpenedSession<TSessionExtra>> {
    const { codeChallenge, codeVerifier } = await this.oauthClient.generateCodeChallenge();
    const intent = await this.oauthClient.createIntent(
      {
        ...this.flow.intent(input),
        client_id: this.oauthClient.clientId(),
        code_challenge: codeChallenge,
      },
      this.clientAuth,
    );
    const state = this.oauthClient.generateRandomState();
    await this.cacheManager.save(state, codeVerifier);

    return {
      codeChallenge,
      state,
      intentId: intent.intent_id,
      extra: this.flow.sessionExtra(intent),
    };
  }

  /**
   * Exchanges the authorization code using the cached verifier, then verifies the result token.
   *
   * A code can be exchanged only once, so the received token replaces the verifier in the cache
   * until it is verified: a retry after a failed exchange exchanges again, and a retry after a
   * failed verification (for example, the signing keys could not be fetched) verifies the cached
   * token instead of losing the result. The cached token is returned only to a callback with the
   * same code, so knowing the `state` alone does not get it.
   */
  protected async finishWithCode(callback: URL | URLSearchParams | string): Promise<TResult> {
    const callbackParams = parseCallbackParams(callback);

    // Before the cache, so a cancel is reported as a cancel even when the session has expired.
    const error = callbackParams.get('error');
    if (error !== null) {
      throw new AuthorizationResponseError(callbackParams.get('error_description') || error);
    }

    const state = callbackParams.get('state');
    assertString(state, 'state', InvalidAssertionError);

    const cached = await this.cacheManager.get(state);
    if (!cached) {
      const store = this.cacheManager?.constructor?.name ?? 'the configured cache manager';
      throw new OperationFailedError(
        `Invalid code verifier: no code verifier found for state ${state} in ${store}. ` +
          'The session already finished, the entry expired, or the flow was started against a ' +
          'different cache store. Deployments that span multiple hosts need a shared store.',
      );
    }

    const rawToken = cached.startsWith(RECEIVED_TOKEN_PREFIX)
      ? await this.receivedToken(state, cached, callbackParams)
      : await this.exchangeCode(state, cached, callbackParams);

    const result = await this.verifyToken(rawToken);
    await this.cacheManager.remove(state);
    return result;
  }

  /** Exchanges the code and caches the token with the code's hash until it is verified. */
  private async exchangeCode(
    state: string,
    codeVerifier: string,
    callbackParams: URLSearchParams,
  ): Promise<string> {
    const response = await this.oauthClient.authorizationCodeGrant({
      binding: this.authCodeDeliveryBinding(),
      parameters: callbackParams,
      state,
      codeVerifier,
      clientAuth: this.clientAuth,
    });
    this.flow.assertResponse(response, 'OAuth response', InvalidResponseError);
    const rawToken = this.flow.token(response);
    const hash = await codeHash(callbackParams.get('code') ?? '');
    await this.cacheManager.save(state, `${RECEIVED_TOKEN_PREFIX}${hash}:${rawToken}`);
    return rawToken;
  }

  /** The cached token of an earlier attempt, for a callback with the same code only. */
  private async receivedToken(
    state: string,
    cached: string,
    callbackParams: URLSearchParams,
  ): Promise<string> {
    const received = cached.slice(RECEIVED_TOKEN_PREFIX.length);
    const separator = received.indexOf(':');
    const code = callbackParams.get('code');
    if (code === null || received.slice(0, separator) !== (await codeHash(code))) {
      throw new OperationFailedError(
        `The callback for state ${state} does not carry the code this session was finished with.`,
      );
    }
    return received.slice(separator + 1);
  }

  /** Verifies the token's signature and selects its format from the `typ` header. */
  private async verifyToken(rawToken: string): Promise<TResult> {
    const { payload, protectedHeader } = await this.oauthClient.decode(rawToken, assertJwtPayload);
    const known =
      protectedHeader.typ === undefined ? undefined : this.flow.formats.get(protectedHeader.typ);
    if (!known) {
      return { format: 'unknown', typ: protectedHeader.typ, payload, rawToken } as TResult;
    }
    known.assert(payload, 'Token payload');

    return { format: known.format, payload, rawToken } as TResult;
  }
}
