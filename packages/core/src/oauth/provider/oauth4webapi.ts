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
import { assertString, assertUrlString } from '../../utils/assert.js';
import {
  InvalidArgumentError,
  InvalidAssertionError,
  OperationFailedError,
  AuthorizationResponseError as AuthResponseError,
  TokenGrantError,
} from '../../error/index.js';
import { FlowAuthCodeDeliveryBinding } from '../auth-code-delivery-binding.js';
import { basicAuthorization } from '../basic-authorization.js';

/**
 * The `IOAuthProvider` on oauth4webapi. `VeridOAuthClient` validates every argument before calling
 * it, so it does not check them again.
 */
export class OAuth4WebApiProvider implements IOAuthProvider {
  /**
   * HTTP Basic client authentication in oauth4webapi's form, sending `id:secret` as the SDK
   * always has, rather than through oauth4webapi's form-encoding `ClientSecretBasic`.
   */
  private clientSecretBasic(clientSecret: string) {
    return (
      _as: AuthorizationServer,
      client: ClientConfig,
      _parameters: URLSearchParams,
      headers: Headers,
    ): void => {
      headers.set('Authorization', basicAuthorization(client.client_id, clientSecret));
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
    parameters: URL | URLSearchParams,
    state?: string,
  ): URLSearchParams {
    try {
      return validateAuthResponse(authorizationServer, clientConfig, parameters, state);
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
    binding: FlowAuthCodeDeliveryBinding,
    codeVerifier: string,
  ): Promise<Response> {
    try {
      if (binding.kind === 'embedded') {
        return await this.embeddedAuthorizationCodeGrantRequest(
          authorizationServer,
          clientConfig,
          clientAuth,
          params,
          codeVerifier,
        );
      }

      const clientAuthentication = clientAuth
        ? this.clientSecretBasic(clientAuth.client_secret)
        : None();

      return await authorizationCodeGrantRequest(
        authorizationServer,
        clientConfig,
        clientAuthentication,
        params,
        binding.redirectUri,
        codeVerifier,
      );
    } catch (error) {
      throw new TokenGrantError('Authorization code grant request failed', error);
    }
  }

  /**
   * Hand-builds the `authorization_code` token request because embedded flows have no
   * `redirect_uri`, which oauth4webapi's helper can't omit.
   */
  private async embeddedAuthorizationCodeGrantRequest(
    authorizationServer: AuthorizationServer,
    clientConfig: ClientConfig,
    clientAuth: ClientAuth | null,
    params: URLSearchParams,
    codeVerifier: string,
  ): Promise<Response> {
    assertUrlString(
      authorizationServer.token_endpoint,
      'token_endpoint in authorization server metadata',
      InvalidAssertionError,
    );

    const code = params.get('code');
    assertString(code, 'code in authorization response', InvalidArgumentError);

    const body = new URLSearchParams({
      grant_type: 'authorization_code',
      code,
      client_id: clientConfig.client_id,
      code_verifier: codeVerifier,
    });

    const headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json',
    });

    if (clientAuth) {
      headers.set(
        'Authorization',
        basicAuthorization(clientConfig.client_id, clientAuth.client_secret),
      );
    }

    return fetch(authorizationServer.token_endpoint, {
      method: 'POST',
      headers,
      body,
    });
  }
  async clientCredentialsGrantRequest(
    authorizationServer: AuthorizationServer,
    clientConfig: ClientConfig,
    clientAuth: ClientAuth,
    params: URLSearchParams,
  ): Promise<Response> {
    const clientAuthentication = this.clientSecretBasic(clientAuth.client_secret);
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
        recognizedTokenTypes: {
          [RecognizedTokenTypes.VeridGraphQLToken.toLowerCase()]: () => {
            return;
          },
        },
      });
    } catch (error) {
      throw new TokenGrantError('Failed to process client credentials response', error);
    }
  }
}
