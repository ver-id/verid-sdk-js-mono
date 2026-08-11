/**
 * OpenID Connect authentication response from the token endpoint.
 * Contains both access token and ID token for authenticated user sessions.
 *
 * @public
 */
export interface AuthenticationResponse {
  /** Access token for API authentication */
  readonly access_token: string;
  /** OpenID Connect ID token containing user identity claims */
  readonly id_token: string;
  /** Token lifetime in seconds from issuance */
  readonly expires_in: number;
  /** Space-separated list of granted scopes (must include 'openid') */
  readonly scope: string;
  /** Type of token issued (typically 'bearer') */
  readonly token_type: 'bearer' | Lowercase<string>;

  /** Additional parameters from the authentication response */
  readonly [parameter: string]: any;
}
