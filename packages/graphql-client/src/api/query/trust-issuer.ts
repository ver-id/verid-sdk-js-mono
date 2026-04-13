import { ApolloClient } from '@apollo/client';
import {
  assert,
  assertUUID,
  TrustIssuerEntity,
  InvalidArgumentError,
  OperationFailedError,
  UUID,
} from '@verid-sdk-js-mono/core';
import {
  TrustIssuerFilteringField,
  FilteringType,
  FindManyTrustIssuersInput,
} from '../../contrib/graphql/schema-types.js';
import { FindManyTrustIssuersDocument } from '../../operations/query/index.js';
import { convertConnectionToTrustIssuerArray } from '../../helpers/converter.js';

/**
 * Get trust-issuer links by trust UUID.
 * @param client Apollo client
 * @param trustUuid Trust UUID to find issuers for.
 * @returns Array of trust-issuer link objects.
 * @throws {InvalidArgumentError} When trustUuid is not a valid UUID.
 * @throws {OperationFailedError} When the GraphQL operation fails.
 * @category TrustIssuer Queries
 */
export const getTrustIssuersByTrust = async (
  client: ApolloClient,
  trustUuid: UUID,
): Promise<TrustIssuerEntity[]> => {
  assertUUID(trustUuid, 'trustUuid', InvalidArgumentError);

  const input: FindManyTrustIssuersInput = {
    filtering: [
      {
        field: TrustIssuerFilteringField.TrustUuid,
        type: FilteringType.Exact,
        value: trustUuid,
      },
    ],
  };

  const response = await client.query({
    query: FindManyTrustIssuersDocument,
    variables: { input },
  });

  assert(
    response.data,
    `GraphQL Operation failed with error: ${response.error}`,
    OperationFailedError,
  );

  return convertConnectionToTrustIssuerArray(response.data);
};

/**
 * Get trust-issuer links by issuer UUID.
 * @param client Apollo client
 * @param issuerUuid Issuer UUID to find trusts for.
 * @returns Array of trust-issuer link objects.
 * @throws {InvalidArgumentError} When issuerUuid is not a valid UUID.
 * @throws {OperationFailedError} When the GraphQL operation fails.
 * @category TrustIssuer Queries
 */
export const getTrustIssuersByIssuer = async (
  client: ApolloClient,
  issuerUuid: UUID,
): Promise<TrustIssuerEntity[]> => {
  assertUUID(issuerUuid, 'issuerUuid', InvalidArgumentError);

  const input: FindManyTrustIssuersInput = {
    filtering: [
      {
        field: TrustIssuerFilteringField.IssuerUuid,
        type: FilteringType.Exact,
        value: issuerUuid,
      },
    ],
  };

  const response = await client.query({
    query: FindManyTrustIssuersDocument,
    variables: { input },
  });

  assert(
    response.data,
    `GraphQL Operation failed with error: ${response.error}`,
    OperationFailedError,
  );

  return convertConnectionToTrustIssuerArray(response.data);
};
