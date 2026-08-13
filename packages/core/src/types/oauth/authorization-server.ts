import { JSONValue } from '../generic.js';

/**
 * OAuth 2.1 Authorization Server Metadata as defined in RFC 8414.
 * Contains discovery information about the authorization server's endpoints and capabilities.
 * Typically retrieved from the .well-known/oauth-authorization-server endpoint.
 *
 * @public
 * @see {@link https://www.rfc-editor.org/rfc/rfc8414.html RFC 8414}
 */
export interface AuthorizationServer {
  /**
   * Authorization server's issuer identifier URL.
   * Must be a URL using the https scheme with no query or fragment components.
   */
  readonly issuer: string;

  /**
   * URL of the authorization server's authorization endpoint.
   * Used to initiate the authorization code flow.
   */
  readonly authorization_endpoint?: string;

  /**
   * URL of the authorization server's token endpoint.
   * Used to exchange authorization codes for tokens and perform token refresh.
   */
  readonly token_endpoint?: string;

  /**
   * URL of the authorization server's JSON Web Key Set document.
   * Contains the public keys used to verify JWT signatures.
   */
  readonly jwks_uri?: string;

  /**
   * URL of the authorization server's Dynamic Client Registration endpoint.
   * Used to register new OAuth clients programmatically.
   */
  readonly registration_endpoint?: string;

  /**
   * Array of OAuth scope values that this authorization server supports.
   * Scopes define the access privileges being requested.
   */
  readonly scopes_supported?: string[];

  /**
   * Array of response_type values that this authorization server supports.
   * Common values include 'code', 'token', 'id_token', and combinations thereof.
   */
  readonly response_types_supported?: string[];

  /**
   * Array of response_mode values that this authorization server supports.
   * Defines how the authorization response is returned (e.g., 'query', 'fragment').
   */
  readonly response_modes_supported?: string[];

  /**
   * Array of grant_type values that this authorization server supports.
   * Common values include 'authorization_code', 'client_credentials', 'refresh_token'.
   */
  readonly grant_types_supported?: string[];

  /**
   * Array of client authentication methods supported by the token endpoint.
   * Common values include 'client_secret_basic', 'client_secret_post', 'none'.
   */
  readonly token_endpoint_auth_methods_supported?: string[];

  /**
   * URL of the authorization server's intent endpoint.
   */
  readonly intent_endpoint?: string;

  /**
   * Additional metadata about the authorization server.
   */
  readonly [metadata: string]: JSONValue | undefined;
}
