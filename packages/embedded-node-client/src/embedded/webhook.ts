import { createHmac, timingSafeEqual } from 'node:crypto';
import {
  parseEmbeddedWebhookPayload,
  InvalidAssertionError,
  AuthorizationResponseError,
  type EmbeddedWebhookPayload,
} from '@ver-id/core';

/** Why a webhook verification failed. */
export type EmbeddedWebhookRejectionReason =
  | 'invalid_payload'
  | 'invalid_signature'
  | 'missing_signature';

/** Typed result of {@link verifyEmbeddedWebhook}. */
export type EmbeddedWebhookVerification =
  | { ok: true; payload: EmbeddedWebhookPayload }
  | { ok: false; reason: EmbeddedWebhookRejectionReason };

/** Parameters for {@link verifyEmbeddedWebhook}. */
export interface VerifyEmbeddedWebhookParams {
  /** The raw, unparsed request body (HMAC is over the exact bytes). */
  rawBody: string;
  /** The x-signature-256 header value, e.g. "sha256=<hex>". */
  signature: string | undefined;
  /** The flow's webhook secret (from Ver.iD Studio). */
  secret: string;
}

function parseJson(raw: string): unknown {
  try {
    const value: unknown = JSON.parse(raw);
    return value;
  } catch {
    return undefined;
  }
}

function timingSafeEqualStrings(a: string, b: string): boolean {
  const aBuffer = Buffer.from(a);
  const bBuffer = Buffer.from(b);
  if (aBuffer.length !== bBuffer.length) {
    return false;
  }
  return timingSafeEqual(aBuffer, bBuffer);
}

/** Verifies the HMAC-SHA256 signature and parses the webhook payload. */
export function verifyEmbeddedWebhook(
  params: VerifyEmbeddedWebhookParams,
): EmbeddedWebhookVerification {
  if (params.signature === undefined) {
    return { ok: false, reason: 'missing_signature' };
  }

  const payloadResult = parseEmbeddedWebhookPayload(parseJson(params.rawBody));
  if (!payloadResult.ok) {
    return { ok: false, reason: 'invalid_payload' };
  }

  const expected = `sha256=${createHmac('sha256', params.secret).update(params.rawBody).digest('hex')}`;
  if (!timingSafeEqualStrings(params.signature, expected)) {
    return { ok: false, reason: 'invalid_signature' };
  }

  return { ok: true, payload: payloadResult.payload };
}

/** Maps a rejection reason to the typed error `finalizeEmbedded` throws. */
export function embeddedWebhookRejectionError(
  reason: EmbeddedWebhookRejectionReason,
): Error {
  switch (reason) {
    case 'missing_signature':
      return new InvalidAssertionError(
        'Embedded webhook is missing the x-signature-256 header',
      );
    case 'invalid_payload':
      return new InvalidAssertionError('Embedded webhook payload is malformed');
    case 'invalid_signature':
      return new AuthorizationResponseError(
        'Embedded webhook signature verification failed',
      );
  }
}
