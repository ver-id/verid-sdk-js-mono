import { AuthorizationServer, ClientConfig, GrantResponse, ClientAuth } from '../types/index.js';
import { FlowRedirectBinding } from '../oauth/redirect-binding.js';

/**
 * Interface for OAuth provider implementations.
 *
 * @public
 */
export interface IOAuthProvider {
  /** Discovers the authorization server metadata for the given issuer. */
  discover(issuer: URL): Promise<AuthorizationServer>;

  /** Generates a cryptographically secure random OAuth state string. */
  generateRandomState(): string;

  /** Generates a cryptographically secure random PKCE code verifier. */
  generateRandomCodeVerifier(): string;

  /** Calculates the S256 PKCE code challenge from a verifier. */
  calculateCodeChallenge(codeVerifier: string): Promise<string>;

  /** Validates the OAuth authorization response and checks the state parameter. */
  validateAuthResponse(
    authorizationServer: AuthorizationServer,
    clientConfig: ClientConfig,
    url: URL | URLSearchParams,
    state?: string,
  ): any;

  /** Sends an authorization code grant request to the token endpoint. */
  authorizationCodeGrantRequest(
    authorizationServer: AuthorizationServer,
    clientConfig: ClientConfig,
    clientAuth: ClientAuth | null,
    params: URLSearchParams,
    binding: FlowRedirectBinding,
    codeVerifier: string,
  ): Promise<Response>;

  /** Sends a client credentials grant request to the token endpoint. */
  clientCredentialsGrantRequest(
    authorizationServer: AuthorizationServer,
    clientConfig: ClientConfig,
    clientAuth: ClientAuth,
    params: URLSearchParams | Record<string, string> | string[][],
  ): Promise<Response>;

  /** Processes and validates the authorization code grant response. */
  processAuthorizationCodeResponse(
    authorizationServer: AuthorizationServer,
    clientConfig: ClientConfig,
    response: Response,
  ): Promise<GrantResponse>;

  /** Processes and validates the client credentials grant response. */
  processClientCredentialsResponse(
    authorizationServer: AuthorizationServer,
    clientConfig: ClientConfig,
    response: Response,
  ): Promise<GrantResponse>;
}
