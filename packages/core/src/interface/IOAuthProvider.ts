import { AuthorizationServer, ClientConfig, GrantResponse, ClientAuth } from '../types/index.js';
import { FlowAuthCodeDeliveryBinding } from '../oauth/auth-code-delivery-binding.js';

/**
 * Interface for OAuth provider implementations.
 *
 * @public
 */
export interface IOAuthProvider {
  /**
   * Discovers the authorization server metadata for the given issuer.
   *
   * @param issuer - The OAuth 2.1 issuer URL
   * @returns Promise resolving to the authorization server metadata
   */
  discover(issuer: URL): Promise<AuthorizationServer>;

  /**
   * Generates a cryptographically secure random OAuth state string.
   *
   * @returns A random state string
   */
  generateRandomState(): string;

  /**
   * Generates a cryptographically secure random PKCE code verifier.
   *
   * @returns A random code verifier string
   */
  generateRandomCodeVerifier(): string;

  /**
   * Calculates the S256 PKCE code challenge from a verifier.
   *
   * @param codeVerifier - The code verifier string
   * @returns Promise resolving to the code challenge string
   */
  calculateCodeChallenge(codeVerifier: string): Promise<string>;

  /**
   * Validates the OAuth authorization response and checks the state parameter.
   *
   * @param authorizationServer - The authorization server metadata
   * @param clientConfig - The client configuration
   * @param url - The redirect URL, or its query parameters, containing the authorization response
   * @param state - The expected OAuth state parameter, if one was sent
   * @returns The validated callback parameters
   */
  validateAuthResponse(
    authorizationServer: AuthorizationServer,
    clientConfig: ClientConfig,
    url: URL | URLSearchParams,
    state?: string,
  ): any;

  /**
   * Sends an authorization code grant request to the token endpoint.
   *
   * @param authorizationServer - The authorization server metadata
   * @param clientConfig - The client configuration
   * @param clientAuth - The client authentication credentials, if applicable
   * @param params - The callback parameters including the authorization code
   * @param binding - How the authorization code is bound (redirect carries a `redirect_uri`;
   * embedded omits it)
   * @param codeVerifier - The PKCE code verifier matching the code challenge sent on the
   * authorization request
   * @returns Promise resolving to the token endpoint response
   */
  authorizationCodeGrantRequest(
    authorizationServer: AuthorizationServer,
    clientConfig: ClientConfig,
    clientAuth: ClientAuth | null,
    params: URLSearchParams,
    binding: FlowAuthCodeDeliveryBinding,
    codeVerifier: string,
  ): Promise<Response>;

  /**
   * Sends a client credentials grant request to the token endpoint.
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
