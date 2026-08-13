/**
 * OAuth 2.1 grant response returned from token endpoint.
 * Contains access tokens and metadata from successful authorization or token requests.
 *
 * @public
 */
export interface GrantResponse {
  /** Access token used to authenticate API requests */
  readonly access_token: string;
  /** Token lifetime in seconds from issuance */
  readonly expires_in?: number;
  /** OpenID Connect ID token containing user identity claims (only in authentication flow) */
  readonly id_token?: string;
  /** Refresh token for obtaining new access tokens without re-authentication */
  readonly refresh_token?: string;
  /** Space-separated list of granted scopes */
  readonly scope?: string;
  /** Type of token issued (typically 'bearer' or a custom JWT type) */
  readonly token_type: 'bearer' | RecognizedTokenTypes | Lowercase<string>;

  /** Additional parameters from the token response */
  readonly [parameter: string]: any;
}

/**
 * Enumeration of recognized custom token types used in Ver.iD system.
 * These specialized token types are used for specific API access patterns.
 *
 * @public
 */
export enum RecognizedTokenTypes {
  /** Ver.iD GraphQL API access token in JWT format */
  VeridGraphQLToken = 'ver-id/graphql/at+JWT',
}
