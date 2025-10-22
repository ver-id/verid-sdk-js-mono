import { AuthorizationServer, ClientConfig, GrantResponse, ClientAuth } from '../types/index.js';

/**
 * Interface for OAuth provider implementations.
 * Defines the contract for OAuth 2.1 operations including authorization flows,
 * PKCE support, and token management.
 *
 * @public
 */
export interface IOAuthProvider {
  /**
   * Discovers the OAuth 2.1 authorization server metadata using the issuer URL.
   * Typically fetches the .well-known/oauth-authorization-server endpoint.
   *
   * @param issuer - The OAuth 2.1 issuer URL
   * @returns Promise resolving to the authorization server metadata
   */
  discover(issuer: URL): Promise<AuthorizationServer>;

  /**
   * Generates a cryptographically secure random state string for OAuth requests.
   * Used to prevent CSRF attacks.
   *
   * @returns A random state string
   */
  generateRandomState(): string;

  /**
   * Generates a cryptographically secure random code verifier for PKCE.
   * The code verifier is used in the authorization code flow with PKCE.
   *
   * @returns A random code verifier string
   */
  generateRandomCodeVerifier(): string;

  /**
   * Calculates the PKCE code challenge from a code verifier.
   * Uses SHA-256 hashing and Base64URL encoding as per RFC 7636.
   *
   * @param codeVerifier - The code verifier string
   * @returns Promise resolving to the code challenge string
   */
  calculateCodeChallenge(codeVerifier: string): Promise<string>;

  /**
   * Validates the OAuth authorization response from the authorization server.
   * Checks for errors and validates the state parameter to prevent CSRF attacks.
   *
   * @param authorizationServer - The authorization server metadata
   * @param clientConfig - The client configuration
   * @param url - The redirect URL containing the authorization response
   * @param state - The expected OAuth state parameter
   * @returns The validated callback parameters
   */
  validateAuthResponse(
    authorizationServer: AuthorizationServer,
    clientConfig: ClientConfig,
    url: URL | URLSearchParams,
    state?: string,
  ): any;

  /**
   * Initiates an OAuth authorization code grant request with PKCE.
   * Exchanges the authorization code for tokens.
   *
   * @param authorizationServer - The authorization server metadata
   * @param clientConfig - The client configuration
   * @param clientAuth - The client authentication credentials, if applicable
   * @param params - The callback parameters including the authorization code
   * @param redirectUri - The redirect URI used in the authorization request
   * @param codeVerifier - Optional PKCE code verifier
   * @returns Promise resolving to the token endpoint response
   */
  authorizationCodeGrantRequest(
    authorizationServer: AuthorizationServer,
    clientConfig: ClientConfig,
    clientAuth: ClientAuth | null,
    params: URLSearchParams,
    redirectUri: string,
    codeVerifier?: string,
  ): Promise<Response>;

  /**
   * Initiates an OAuth client credentials grant request.
   * Used for machine-to-machine authentication without user interaction.
   *
   * @param authorizationServer - The authorization server metadata
   * @param clientConfig - The client configuration
   * @param clientAuth - The client authentication credentials
   * @param params - Additional request parameters
   * @returns Promise resolving to the token endpoint response
   */
  clientCredentialsGrantRequest(
    authorizationServer: AuthorizationServer,
    clientConfig: ClientConfig,
    clientAuth: ClientAuth,
    params: URLSearchParams | Record<string, string> | string[][],
  ): Promise<Response>;

  /**
   * Processes and validates the authorization code grant response.
   * Extracts and validates tokens from the token endpoint response.
   *
   * @param authorizationServer - The authorization server metadata
   * @param clientConfig - The client configuration
   * @param response - The HTTP response from the token endpoint
   * @returns Promise resolving to the validated grant response with tokens
   */
  processAuthorizationCodeResponse(
    authorizationServer: AuthorizationServer,
    clientConfig: ClientConfig,
    response: Response,
  ): Promise<GrantResponse>;

  /**
   * Processes and validates the client credentials grant response.
   * Extracts and validates tokens from the token endpoint response.
   *
   * @param authorizationServer - The authorization server metadata
   * @param clientConfig - The client configuration
   * @param response - The HTTP response from the token endpoint
   * @returns Promise resolving to the validated grant response with tokens
   */
  processClientCredentialsResponse(
    authorizationServer: AuthorizationServer,
    clientConfig: ClientConfig,
    response: Response,
  ): Promise<GrantResponse>;
}
