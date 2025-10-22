/**
 * OAuth client authentication credentials.
 * Used to authenticate the client application when making requests to the token endpoint.
 *
 * @public
 */
export interface ClientAuth {
  /**
   * Client secret credential used for authentication.
   * This confidential string should be securely stored and never exposed in client-side code.
   */
  readonly client_secret: string;
}
