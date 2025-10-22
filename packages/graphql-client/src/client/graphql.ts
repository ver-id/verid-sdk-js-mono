import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client';
import {
  assert,
  assertString,
  assertUrlString,
  assertUUID,
  InvalidArgumentError,
  UUID,
} from '@verid-sdk-js-mono/core';
import { createAuthLink, createHttpLink, errorLink } from '../plugins/index.js';

/**
 * GraphQL client options
 */
export interface GraphQLClientOptions {
  /**
   * GraphQL endpoint
   */
  endpoint: string;
  /**
   * Authorization server URL
   */
  authorizationServer: string;
  /**
   * Client ID for authentication
   */
  clientId: UUID;
  /**
   * Client secret for authentication
   */
  clientSecret: string;
  /**
   * Optional cache implementation
   */
  cache?: InMemoryCache;
}

/**
 * Initializes and returns a Verid GraphQL client, which wraps Apollo Client with
 * authentication and error handling links.
 *
 * @param options - Configuration options for the GraphQL client
 * @returns An instance of ApolloClient configured for Verid services.
 */
export function createVeridGraphQLClient(options: GraphQLClientOptions) {
  assertUrlString(options.endpoint, 'endpoint', InvalidArgumentError);
  assertUrlString(options.authorizationServer, 'authorizationServer', InvalidArgumentError);
  assertUUID(options.clientId, 'clientId', InvalidArgumentError);
  assertString(options.clientSecret, 'clientSecret', InvalidArgumentError);
  if (options.cache) {
    assert(
      options.cache instanceof InMemoryCache,
      'Invalid cache: must be an instance of InMemoryCache.',
    );
  }
  const authLink = createAuthLink(
    options.authorizationServer,
    options.clientId,
    options.clientSecret,
  );

  const httpLink = createHttpLink(options.endpoint);

  return new ApolloClient({
    link: ApolloLink.from([errorLink, authLink, httpLink]),
    cache: options.cache ?? new InMemoryCache(),
    defaultOptions: { watchQuery: { fetchPolicy: 'cache-and-network' } },
  });
}
