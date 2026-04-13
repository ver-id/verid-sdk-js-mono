import { ApolloClient } from '@apollo/client';
import {
  assert,
  assertUUID,
  CredentialTrustIssuerEntity,
  InvalidArgumentError,
  OperationFailedError,
  UUID,
} from '@verid-sdk-js-mono/core';
import {
  CredentialTrustIssuerFilteringField,
  FilteringType,
  FindManyCredentialTrustIssuersInput,
} from '../../contrib/graphql/schema-types.js';
import { FindManyCredentialTrustIssuersDocument } from '../../operations/query/index.js';
import { convertConnectionToCredentialTrustIssuerArray } from '../../helpers/converter.js';

/**
 * Get credential-trust-issuer links by credential UUID.
 * @param client Apollo client
 * @param credentialUuid Credential UUID to find trust-issuers for.
 * @returns Array of credential-trust-issuer link objects.
 * @throws {InvalidArgumentError} When credentialUuid is not a valid UUID.
 * @throws {OperationFailedError} When the GraphQL operation fails.
 * @category CredentialTrustIssuer Queries
 */
export const getCredentialTrustIssuersByCredential = async (
  client: ApolloClient,
  credentialUuid: UUID,
): Promise<CredentialTrustIssuerEntity[]> => {
  assertUUID(credentialUuid, 'credentialUuid', InvalidArgumentError);

  const input: FindManyCredentialTrustIssuersInput = {
    filtering: [
      {
        field: CredentialTrustIssuerFilteringField.CredentialUuid,
        type: FilteringType.Exact,
        value: credentialUuid,
      },
    ],
  };

  const response = await client.query({
    query: FindManyCredentialTrustIssuersDocument,
    variables: { input },
  });

  assert(
    response.data,
    `GraphQL Operation failed with error: ${response.error}`,
    OperationFailedError,
  );

  return convertConnectionToCredentialTrustIssuerArray(response.data);
};

/**
 * Get credential-trust-issuer links by trust-issuer UUID.
 * @param client Apollo client
 * @param trustIssuerUuid TrustIssuer UUID to find credentials for.
 * @returns Array of credential-trust-issuer link objects.
 * @throws {InvalidArgumentError} When trustIssuerUuid is not a valid UUID.
 * @throws {OperationFailedError} When the GraphQL operation fails.
 * @category CredentialTrustIssuer Queries
 */
export const getCredentialTrustIssuersByTrustIssuer = async (
  client: ApolloClient,
  trustIssuerUuid: UUID,
): Promise<CredentialTrustIssuerEntity[]> => {
  assertUUID(trustIssuerUuid, 'trustIssuerUuid', InvalidArgumentError);

  const input: FindManyCredentialTrustIssuersInput = {
    filtering: [
      {
        field: CredentialTrustIssuerFilteringField.TrustIssuerUuid,
        type: FilteringType.Exact,
        value: trustIssuerUuid,
      },
    ],
  };

  const response = await client.query({
    query: FindManyCredentialTrustIssuersDocument,
    variables: { input },
  });

  assert(
    response.data,
    `GraphQL Operation failed with error: ${response.error}`,
    OperationFailedError,
  );

  return convertConnectionToCredentialTrustIssuerArray(response.data);
};
