import { createHmac, timingSafeEqual } from 'node:crypto';
import { InvalidAssertionError, AuthorizationResponseError } from '@ver-id/core';
import type {
  EmbeddedFinishSessionParams,
  EmbeddedWebhookHeaders,
  VeridEmbeddedUnknownEvent,
} from './types.js';

const SIGNATURE_HEADER = 'x-signature-256';

const COMPLETED_TYPE = 'v1.flow.completed';

/** A webhook whose signature matched, by event type. */
export type EmbeddedWebhookEvent =
  | { readonly kind: 'completed'; readonly code: string; readonly state: string }
  | VeridEmbeddedUnknownEvent;

/** Parameters for {@link readEmbeddedWebhook}. */
export interface ReadEmbeddedWebhookParams extends EmbeddedFinishSessionParams {
  /** The flow's webhook secret (from Ver.iD Studio). */
  secret: string;
}

// Duck-typed rather than `instanceof`, so polyfilled and cross-realm `Headers` pass too.
function isFetchHeaders(headers: EmbeddedWebhookHeaders): headers is Headers {
  return typeof headers.get === 'function';
}

function headerValue(headers: EmbeddedWebhookHeaders, name: string): string | undefined {
  if (isFetchHeaders(headers)) {
    return headers.get(name) ?? undefined;
  }
  const key = Object.keys(headers).find((candidate) => candidate.toLowerCase() === name);
  const value = key === undefined ? undefined : headers[key];
  // A repeated header, joined as `Headers.get` would.
  return typeof value === 'string' || value === undefined ? value : value.join(', ');
}

function timingSafeEqualStrings(a: string, b: string): boolean {
  const aBuffer = Buffer.from(a);
  const bBuffer = Buffer.from(b);
  if (aBuffer.length !== bBuffer.length) {
    return false;
  }
  return timingSafeEqual(aBuffer, bBuffer);
}

function parseJson(raw: string): unknown {
  try {
    return JSON.parse(raw) as unknown;
  } catch {
    return undefined;
  }
}

function malformed(): InvalidAssertionError {
  return new InvalidAssertionError('Embedded webhook payload is malformed');
}

/** Reads the event from a body whose signature already matched. */
function parseEvent(data: unknown): EmbeddedWebhookEvent {
  if (typeof data !== 'object' || data === null || !('type' in data)) {
    throw malformed();
  }
  if (typeof data.type !== 'string') {
    throw malformed();
  }
  if (data.type !== COMPLETED_TYPE) {
    return { kind: 'unknown', type: data.type, raw: data };
  }
  if (!('code' in data) || typeof data.code !== 'string') {
    throw malformed();
  }
  if (!('state' in data) || typeof data.state !== 'string') {
    throw malformed();
  }
  return { kind: 'completed', code: data.code, state: data.state };
}

/**
 * Verifies the HMAC-SHA256 signature over the raw body, then reads the event. Nothing in the body
 * is read before the signature matches.
 *
 * @param params - The raw request body, its headers, and the flow's webhook secret.
 * @returns The event; types this SDK version does not know are returned as `unknown`.
 * @throws {InvalidAssertionError} When the signature header is missing, or a signed body is
 *   malformed
 * @throws {AuthorizationResponseError} When the signature does not match the raw body
 */
export function readEmbeddedWebhook(params: ReadEmbeddedWebhookParams): EmbeddedWebhookEvent {
  const signature = headerValue(params.headers, SIGNATURE_HEADER);
  if (signature === undefined) {
    throw new InvalidAssertionError(`Embedded webhook is missing the ${SIGNATURE_HEADER} header`);
  }

  const expected = `sha256=${createHmac('sha256', params.secret).update(params.rawBody).digest('hex')}`;
  if (!timingSafeEqualStrings(signature, expected)) {
    throw new AuthorizationResponseError('Embedded webhook signature verification failed');
  }

  return parseEvent(parseJson(params.rawBody));
}
