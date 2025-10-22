import { VeridOAuthClient } from '@verid-sdk-js-mono/core';
import { ApolloLink, Observable } from '@apollo/client/core';

/**
 * Method to get graphql authorization token using client credentials grant.
 */
async function getAuthorizationToken(
  issuer: string,
  clientId: string,
  clientSecret: string,
): Promise<string | undefined> {
  const oauthClient = new VeridOAuthClient({
    issuer,
    client_id: clientId,
  });

  const tokenResponse = await oauthClient.clientCredentialGrant({
    clientAuth: {
      client_secret: clientSecret,
    },
    parameters: {},
  });

  return tokenResponse.access_token;
}

/**
 * Creates an Apollo Link for authentication.
 * @param authorizationServer The URL of the authorization server.
 * @param clientId The client ID for the application.
 * @param clientSecret The client secret for the application.
 * @returns An Apollo Link that adds the authorization token to the request headers.
 */
export const createAuthLink = (
  authorizationServer: string,
  clientId: string,
  clientSecret: string,
) => {
  return new ApolloLink((operation, forward) => {
    return new Observable<ApolloLink.Result>((observer) => {
      (async () => {
        try {
          const token = await getAuthorizationToken(authorizationServer, clientId, clientSecret);
          operation.setContext({
            headers: {
              authorization: token,
            },
          });
          const observable = forward(operation);
          observable.subscribe({
            next: (result) => observer.next(result),
            error: (error) => observer.error(error),
            complete: () => observer.complete(),
          });
        } catch (e) {
          observer.error(e);
        }
      })();
    });
  });
};
