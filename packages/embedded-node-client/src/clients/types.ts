import type { ClientAuth, ICacheManager } from '@verid-sdk-js-mono/core';

/** Configuration shared by all embedded clients. No redirectUri — embedded flows are registered without one. */
export interface EmbeddedClientConfig {
  /** Ver.iD OAuth Issuer URI. */
  issuerUri: string;
  /** The client_id (flow identifier). */
  client_id: string;
  options?: {
    /** Defaults to FileStorageCacheManager. */
    cacheManager?: ICacheManager;
  };
}

/** Parameters for the verify+finalize convenience method. */
export interface FinalizeEmbeddedParams {
  /** The raw, unparsed webhook request body. */
  rawBody: string;
  /** The x-signature-256 header value. */
  signature: string | undefined;
  /** The flow's webhook secret. */
  secret: string;
  /** Client authentication for the token exchange. */
  clientAuth: ClientAuth;
}
