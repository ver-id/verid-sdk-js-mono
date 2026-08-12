export interface InitializeRequest {
  issuerUri?: string;
  clientId?: string;
  redirectUri?: string;
}

export interface GenerateUrlRequest {
  scope?: string;
}

/**
 * Initialize request for an embedded client.
 *
 * Deliberately has no `redirectUri`: embedded mode never sends one, on either
 * the authorize request or the token exchange. The flow itself may still have a
 * redirect URI registered for redirect mode — a flow supports both.
 */
export interface EmbeddedInitializeRequest {
  issuerUri?: string;
  clientId?: string;
}

/**
 * Start request for an embedded session.
 *
 * The optional intent is created as part of the same call so it can be bound to
 * the same code challenge as the session.
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
