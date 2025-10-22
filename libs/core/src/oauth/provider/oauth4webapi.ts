import {
  None,
  authorizationCodeGrantRequest,
  calculatePKCECodeChallenge,
  discoveryRequest,
  generateRandomCodeVerifier,
  generateRandomState,
  processAuthorizationCodeResponse,
  processDiscoveryResponse,
  validateAuthResponse,
  clientCredentialsGrantRequest,
  processClientCredentialsResponse,
  AuthorizationResponseError,
} from 'oauth4webapi';
import { IOAuthProvider } from '../../interface/IOAuthProvider.js';
import { AuthorizationServer, ClientAuth, ClientConfig } from '../../types/oauth/index.js';
import { GrantResponse, RecognizedTokenTypes } from '../../types/response/index.js';
import { assertObject, assertString } from '../../utils/assert.js';
import { InvalidArgumentError } from '../../error/invalid-argument.js';
import {
  OperationFailedError,
  AuthorizationResponseError as AuthResponseError,
  TokenGrantError,
} from '../../error/index.js';

export class OAuth4WebApiProvider implements IOAuthProvider {
  /**
   * Custom implementation of Client Secret Basic authentication.
   * Creates a client authentication method that uses HTTP Basic authentication
   * with the client ID and secret encoded in base64.
   * @param clientSecret The client secret for authentication
   * @returns A client authentication method compatible with oauth4webapi
   */
  private ClientSecretBasic(clientSecret: string) {
    return (
      as: AuthorizationServer,
      client: ClientConfig,
      parameters: URLSearchParams,
      headers: Headers,
    ): void => {
      const clientId = client.client_id;
      const credentials = btoa(`${clientId}:${clientSecret}`);

      // Set the Authorization header with Basic authentication
      headers.set('Authorization', `Basic ${credentials}`);
    };
  }

  async discover(issuer: URL): Promise<AuthorizationServer> {
    try {
      const response = await discoveryRequest(issuer);
      return await processDiscoveryResponse(issuer, response);
    } catch (error) {
      throw new OperationFailedError('Authorization server discovery failed', error);
    }
  }
  generateRandomState(): string {
    return generateRandomState();
  }
  generateRandomCodeVerifier(): string {
    return generateRandomCodeVerifier();
  }
  async calculateCodeChallenge(codeVerifier: string): Promise<string> {
    try {
      return await calculatePKCECodeChallenge(codeVerifier);
    } catch (error) {
      throw new OperationFailedError('Failed to calculate code challenge', error);
    }
  }
  validateAuthResponse(
    authorizationServer: AuthorizationServer,
    clientConfig: ClientConfig,
    url: URL,
    state?: string,
  ): any {
    try {
      return validateAuthResponse(authorizationServer, clientConfig, url, state);
    } catch (error) {
      if (error instanceof AuthorizationResponseError) {
        throw new AuthResponseError(error.error_description || error.message);
      }
      throw new OperationFailedError('Failed to validate authorization response', error);
    }
  }
  async authorizationCodeGrantRequest(
    authorizationServer: AuthorizationServer,
    clientConfig: ClientConfig,
    clientAuth: ClientAuth | null,
    params: URLSearchParams,
    redirectUri: string,
    codeVerifier: string,
  ): Promise<Response> {
    let clientAuthentication;
    if (clientAuth) {
      assertObject(clientAuth, 'clientAuth', InvalidArgumentError);
      assertString(clientAuth.client_secret, 'clientAuth.client_secret', InvalidArgumentError);
      clientAuthentication = this.ClientSecretBasic(clientAuth.client_secret);
    } else {
      clientAuthentication = None();
    }
    try {
      return await authorizationCodeGrantRequest(
        authorizationServer,
        clientConfig,
        clientAuthentication,
        params,
        redirectUri,
        codeVerifier,
      );
    } catch (error) {
      throw new TokenGrantError('Authorization code grant request failed', error);
    }
  }
  async clientCredentialsGrantRequest(
    authorizationServer: AuthorizationServer,
    clientConfig: ClientConfig,
    clientAuth: ClientAuth,
    params: URLSearchParams,
  ): Promise<Response> {
    assertObject(clientAuth, 'clientAuth', InvalidArgumentError);
    assertString(clientAuth.client_secret, 'clientAuth.client_secret', InvalidArgumentError);
    const clientAuthentication = this.ClientSecretBasic(clientAuth.client_secret);
    try {
      return await clientCredentialsGrantRequest(
        authorizationServer,
        clientConfig,
        clientAuthentication,
        params,
      );
    } catch (error) {
      throw new TokenGrantError('Client credentials grant request failed', error);
    }
  }
  async processAuthorizationCodeResponse(
    authorizationServer: AuthorizationServer,
    clientConfig: ClientConfig,
    response: Response,
  ): Promise<GrantResponse> {
    try {
      return await processAuthorizationCodeResponse(authorizationServer, clientConfig, response);
    } catch (error) {
      throw new TokenGrantError('Failed to process authorization code response', error);
    }
  }
  async processClientCredentialsResponse(
    authorizationServer: AuthorizationServer,
    clientConfig: ClientConfig,
    response: Response,
  ): Promise<GrantResponse> {
    try {
      return await processClientCredentialsResponse(authorizationServer, clientConfig, response, {
        recognizedTokenTypes: { [RecognizedTokenTypes.VeridGraphQLToken.toLowerCase()]: () => { return } },
      });
    } catch (error) {
      throw new TokenGrantError('Failed to process client credentials response', error);
    }
  }
}
