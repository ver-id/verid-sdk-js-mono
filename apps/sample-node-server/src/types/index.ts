export interface InitializeRequest {
  issuerUri?: string;
  client_id?: string;
  redirectUri?: string;
}

export interface GenerateUrlRequest {
  scope?: string;
}

/**
 * Initialize request for an embedded client.
 *
 * Deliberately has no `redirectUri`: embedded flows are registered without one.
 */
export interface EmbeddedInitializeRequest {
  issuerUri?: string;
  client_id?: string;
}

/**
 * Start request for an embedded session.
 *
 * The optional intent is created as part of the same call so it can be bound to
 * the code challenge the session just generated.
 */
export interface EmbeddedStartRequest {
  useIntent?: boolean;
  challenge?: string;
  brandUuid?: string;
  requireExplicitConsent?: boolean;
  /**
   * Issuance only, and mandatory there: what is being issued.
   *
   * Exactly one of `mapping` or `data` must be provided.
   */
  payload?: {
    mapping?: Record<string, unknown>;
    data?: { attributeUuid: string; value: unknown }[];
  };
}
