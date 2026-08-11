/** Signed server-to-server webhook payload delivered to the relying-party backend. */
export interface EmbeddedWebhookPayload {
  /** Event type, e.g. "verification.completed". */
  readonly type: string;
  /** Payload schema version. */
  readonly version: number;
  /** OAuth authorization code (inert without the PKCE verifier). */
  readonly code: string;
  /** Correlates to the backend's cached code_verifier. */
  readonly state: string;
  /** "" when the flow used no intent. */
  readonly intent_id: string;
}

/** Result of parsing a raw webhook body against {@link EmbeddedWebhookPayload}. */
export type ParseEmbeddedWebhookResult =
  | { readonly ok: true; readonly payload: EmbeddedWebhookPayload }
  | { readonly ok: false; readonly reason: string };

/** Validates untrusted webhook JSON against {@link EmbeddedWebhookPayload}. */
export function parseEmbeddedWebhookPayload(data: unknown): ParseEmbeddedWebhookResult {
  if (typeof data !== 'object' || data === null) {
    return { ok: false, reason: 'payload must be an object' };
  }
  if (!('type' in data) || typeof data.type !== 'string') {
    return { ok: false, reason: 'payload.type must be a string' };
  }
  if (!('version' in data) || typeof data.version !== 'number') {
    return { ok: false, reason: 'payload.version must be a number' };
  }
  if (!('code' in data) || typeof data.code !== 'string') {
    return { ok: false, reason: 'payload.code must be a string' };
  }
  if (!('state' in data) || typeof data.state !== 'string') {
    return { ok: false, reason: 'payload.state must be a string' };
  }
  if (!('intent_id' in data) || typeof data.intent_id !== 'string') {
    return { ok: false, reason: 'payload.intent_id must be a string' };
  }
  return {
    ok: true,
    payload: {
      type: data.type,
      version: data.version,
      code: data.code,
      state: data.state,
      intent_id: data.intent_id,
    },
  };
}
