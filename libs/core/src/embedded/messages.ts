/** The `ronan:*` postMessage protocol types shared between the embedded browser client and the iframe. */

/** Outbound handshake message the parent posts to the Ronan iframe on load. */
export interface RonanInitMessage {
  readonly type: 'ronan:init';
  readonly clientId: string;
  readonly scope: string;
  readonly state: string;
  readonly intentId: string;
  readonly codeChallenge: string;
  readonly webhookUri: string;
}

/** Ronan signals the embedded flow is ready to display. */
export interface RonanReadyMessage {
  readonly type: 'ronan:ready';
}

/** Ronan signals the flow finished; carries no authorization code. */
export interface RonanCompleteMessage {
  readonly type: 'ronan:complete';
}

/** Ronan signals an error occurred inside the flow. */
export interface RonanErrorMessage {
  readonly type: 'ronan:error';
  readonly error: string;
  readonly error_description?: string;
}

/** Ronan signals the user cancelled the flow. */
export interface RonanCancelMessage {
  readonly type: 'ronan:cancel';
}

/** Any message Ronan sends to the embedding parent. */
export type RonanInboundMessage =
  | RonanReadyMessage
  | RonanCompleteMessage
  | RonanErrorMessage
  | RonanCancelMessage;

/** Every message in the `ronan:*` protocol (inbound + the outbound init). */
export type RonanMessage = RonanInitMessage | RonanInboundMessage;

/** Result of validating an inbound `ronan:*` message from an untrusted source. */
export type ParseRonanMessageResult =
  | { readonly ok: true; readonly message: RonanInboundMessage }
  | { readonly ok: false; readonly reason: string };

/** Validates an untrusted `postMessage` payload against the inbound `ronan:*` protocol. */
export function parseRonanMessage(data: unknown): ParseRonanMessageResult {
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
      if ('error_description' in data && typeof data.error_description === 'string') {
        return {
          ok: true,
          message: { type, error: data.error, error_description: data.error_description },
        };
      }
      return { ok: true, message: { type, error: data.error } };
    }
    default:
      return { ok: false, reason: `unknown message type: ${type}` };
  }
}
