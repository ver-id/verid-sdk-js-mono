/**
 * The postMessage protocol shared between the embedded browser client and the Ver.iD iframe.
 *
 * The `ronan:` prefix on the wire is the on-the-wire contract with the Ver.iD flow app and is
 * intentionally left untouched; it can only change in lockstep with a deployed flow app.
 */

/** Outbound handshake message the parent posts to the Ver.iD iframe on load. */
export interface EmbeddedInitMessage {
  readonly type: 'ronan:init';
  readonly clientId: string;
  readonly scope: string;
  readonly state: string;
  readonly intentId: string;
  readonly codeChallenge: string;
  readonly webhookUri: string;
}

/** The embedded flow is ready to display. */
export interface EmbeddedReadyMessage {
  readonly type: 'ronan:ready';
}

/** The embedded flow finished; carries no authorization code. */
export interface EmbeddedCompleteMessage {
  readonly type: 'ronan:complete';
}

/** An error occurred inside the embedded flow. */
export interface EmbeddedErrorMessage {
  readonly type: 'ronan:error';
  readonly error: string;
  readonly error_description?: string;
}

/** The user cancelled the embedded flow. */
export interface EmbeddedCancelMessage {
  readonly type: 'ronan:cancel';
}

/** Any message the Ver.iD iframe sends to the embedding parent. */
export type EmbeddedInboundMessage =
  | EmbeddedReadyMessage
  | EmbeddedCompleteMessage
  | EmbeddedErrorMessage
  | EmbeddedCancelMessage;

/** Every message in the embedded protocol (inbound + the outbound init). */
export type EmbeddedMessage = EmbeddedInitMessage | EmbeddedInboundMessage;

/** Result of validating an inbound embedded message from an untrusted source. */
export type ParseEmbeddedMessageResult =
  | { readonly ok: true; readonly message: EmbeddedInboundMessage }
  | { readonly ok: false; readonly reason: string };

/** Validates an untrusted `postMessage` payload against the inbound embedded protocol. */
export function parseEmbeddedMessage(
  data: unknown,
): ParseEmbeddedMessageResult {
  if (typeof data !== 'object' || data === null) {
    return { ok: false, reason: 'message must be an object' };
  }
  if (!('type' in data) || typeof data.type !== 'string') {
    return { ok: false, reason: 'message.type must be a string' };
  }

  const type = data.type;
  switch (type) {
    case 'ronan:ready':
      return { ok: true, message: { type } };
    case 'ronan:complete':
      return { ok: true, message: { type } };
    case 'ronan:cancel':
      return { ok: true, message: { type } };
    case 'ronan:error': {
      if (!('error' in data) || typeof data.error !== 'string') {
        return { ok: false, reason: 'ronan:error requires a string "error"' };
      }
      if (
        'error_description' in data &&
        typeof data.error_description === 'string'
      ) {
        return {
          ok: true,
          message: {
            type,
            error: data.error,
            error_description: data.error_description,
          },
        };
      }
      return { ok: true, message: { type, error: data.error } };
    }
    default:
      return { ok: false, reason: `unknown message type: ${type}` };
  }
}
