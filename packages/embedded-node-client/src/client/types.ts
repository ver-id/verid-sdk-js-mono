import type { ICacheManager } from '@ver-id/core';

/**
 * Configuration shared by all embedded clients. No redirectUri: embedded flows are registered
 * without one.
 *
 * @public
 */
export interface EmbeddedClientConfig {
  /** Ver.iD OAuth Issuer URI. */
  issuerUri: string;
  /** The flow identifier (sent to the authorization server as `client_id`). */
  clientId: string;
  /** The flow's client secret. */
  clientSecret: string;
  /** The backend's own webhook endpoint Ver.iD will call. */
  webhookUri: string;
  /** The flow's webhook secret, from Ver.iD Studio. */
  webhookSecret: string;
  /**
   * Stores code verifiers between `createSession` and `finishSession`. Deployments that span
   * multiple hosts need a shared store.
   */
  cacheManager: ICacheManager;
}

/**
 * A session the browser starts by mounting `sessionContext`.
 *
 * @public
 */
export interface VeridEmbeddedSession {
  /**
   * Pass this to `mountVeridEmbeddedComponent` unchanged. Opaque: its contents can change in any
   * release. Safe to send to the browser.
   */
  sessionContext: string;
  /** Identifies this session; store it with the user's record to match the webhook to them. */
  state: string;
}

/**
 * Request headers as frameworks hand them over: a Fetch `Headers` (Next.js, Hono, Workers) or
 * Node's header object (`req.headers` in Express, Fastify, `node:http`).
 *
 * @public
 */
export type EmbeddedWebhookHeaders =
  Headers | Readonly<Record<string, string | readonly string[] | undefined>>;

/**
 * Parameters for `finishSession`.
 *
 * @public
 */
export interface EmbeddedFinishSessionParams {
  /** The webhook request body, exactly as received: the signature covers these bytes. */
  rawBody: string;
  /** The webhook request's headers, as received. The SDK finds the signature headers itself. */
  headers: EmbeddedWebhookHeaders;
}

/**
 * An event this SDK version does not know. Answer it with a 2xx: Ver.iD retries any other
 * response, and an older SDK can never handle it.
 *
 * @public
 */
export interface VeridEmbeddedUnknownEvent {
  kind: 'unknown';
  /** The event's `type`, for logging. */
  type: string;
  /** The signed body, parsed. */
  raw: unknown;
}

/**
 * What a webhook delivered.
 *
 * @public
 */
export type VeridEmbeddedOutcome<TResult> =
  | {
      kind: 'completed';
      /** The state of the session this webhook belongs to. */
      state: string;
      result: TResult;
    }
  | VeridEmbeddedUnknownEvent;
