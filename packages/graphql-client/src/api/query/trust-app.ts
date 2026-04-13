import { ApolloClient } from '@apollo/client';
import {
  assert,
  assertUUID,
  TrustAppEntity,
  InvalidArgumentError,
  OperationFailedError,
  UUID,
} from '@verid-sdk-js-mono/core';
import {
  TrustAppFilteringField,
  FilteringType,
  FindManyTrustAppsInput,
} from '../../contrib/graphql/schema-types.js';
import { FindManyTrustAppsDocument } from '../../operations/query/index.js';
import { convertConnectionToTrustAppArray } from '../../helpers/converter.js';

/**
 * Get trust-app links by trust UUID.
 * @param client Apollo client
 * @param trustUuid Trust UUID to find apps for.
 * @returns Array of trust-app link objects.
 * @throws {InvalidArgumentError} When trustUuid is not a valid UUID.
 * @throws {OperationFailedError} When the GraphQL operation fails.
 * @category TrustApp Queries
 */
export const getTrustAppsByTrust = async (
  client: ApolloClient,
  trustUuid: UUID,
): Promise<TrustAppEntity[]> => {
  assertUUID(trustUuid, 'trustUuid', InvalidArgumentError);

  const input: FindManyTrustAppsInput = {
    filtering: [
      {
        field: TrustAppFilteringField.TrustUuid,
        type: FilteringType.Exact,
        value: trustUuid,
      },
    ],
  };

  const response = await client.query({
    query: FindManyTrustAppsDocument,
    variables: { input },
  });

  assert(
    response.data,
    `GraphQL Operation failed with error: ${response.error}`,
    OperationFailedError,
  );

  return convertConnectionToTrustAppArray(response.data);
};

/**
 * Get trust-app links by app UUID.
 * @param client Apollo client
 * @param appUuid App UUID to find trusts for.
 * @returns Array of trust-app link objects.
 * @throws {InvalidArgumentError} When appUuid is not a valid UUID.
 * @throws {OperationFailedError} When the GraphQL operation fails.
 * @category TrustApp Queries
 */
export const getTrustAppsByApp = async (
  client: ApolloClient,
  appUuid: UUID,
): Promise<TrustAppEntity[]> => {
  assertUUID(appUuid, 'appUuid', InvalidArgumentError);

  const input: FindManyTrustAppsInput = {
    filtering: [
      {
        field: TrustAppFilteringField.AppUuid,
        type: FilteringType.Exact,
        value: appUuid,
      },
    ],
  };

  const response = await client.query({
    query: FindManyTrustAppsDocument,
    variables: { input },
  });

  assert(
    response.data,
    `GraphQL Operation failed with error: ${response.error}`,
    OperationFailedError,
  );

  return convertConnectionToTrustAppArray(response.data);
};
