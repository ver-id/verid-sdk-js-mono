/**
 * OAuth 2.1 issuance response containing access token and metadata.
 * The access token contains disclosed user data in JWT format.
 *
 * @public
 */
export interface IssuanceResponse {
  /** Access token containing disclosed user data */
  readonly access_token: string;
  /** Token lifetime in seconds */
  readonly expires_in: number;
  /** Space-separated list of granted scopes */
  readonly scope: string;
  /** Token type, typically 'bearer' */
  readonly token_type: 'bearer' | Lowercase<string>;

  /** Additional custom parameters from the authorization server */
  readonly [parameter: string]: any;
}
