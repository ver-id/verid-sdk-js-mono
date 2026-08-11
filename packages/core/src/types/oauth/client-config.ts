import { JSONValue } from '../generic.js';

/**
 * OAuth client configuration metadata.
 * Contains the basic identification information for an OAuth client.
 *
 * @public
 */
export interface ClientConfig {
  /**
   * Unique client identifier assigned during registration.
   * Public identifier for the OAuth client application.
   */
  readonly client_id: string;

  /**
   * JWS `alg` algorithm required for signing the ID Token issued to this Client. When not
   * configured the default is to allow only algorithms listed in
   * {@link AuthorizationServer.id_token_signing_alg_values_supported `as.id_token_signing_alg_values_supported`}
   * and fall back to `RS256` when the authorization server metadata is not set.
   */
  readonly id_token_signed_response_alg?: string

  /**
   * Additional metadata about the OAuth client.
   */
  readonly [metadata: string]: JSONValue | undefined;
}
