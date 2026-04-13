import { ApolloClient } from '@apollo/client';
import {
  assert,
  assertArray,
  assertUUID,
  TrustEntity,
  InvalidArgumentError,
  LocaleEntity,
  OperationFailedError,
  UUID,
} from '@verid-sdk-js-mono/core';
import {
  TrustFilteringField,
  FilteringType,
  FindManyTrustsInput,
} from '../../contrib/graphql/schema-types.js';
import { FindTrustDocument, FindManyTrustsDocument } from '../../operations/query/index.js';
import {
  convertConnectionToArray,
  convertConnectionToTrustArray,
} from '../../helpers/converter.js';

/**
 * Get Trust by its UUID.
 * @param client Apollo client
 * @param uuid Trust UUID.
 * @returns Trust object.
 * @throws {InvalidArgumentError} When uuid is not a valid UUID.
 * @throws {OperationFailedError} When the GraphQL operation fails or trust is not found.
 */
export const getTrust = async (client: ApolloClient, uuid: UUID): Promise<TrustEntity> => {
  assertUUID(uuid, 'uuid', InvalidArgumentError);

  const response = await client.query({
    query: FindTrustDocument,
    variables: { uuid },
  });

  assert(
    response.data,
    `GraphQL Operation failed with error: ${response.error}`,
    OperationFailedError,
  );

  return {
    uuid: response.data.findTrust.uuid,
    name: response.data.findTrust.name,
    locales: convertConnectionToArray<LocaleEntity>(response.data.findTrust.locales),
  };
};

/**
 * Get many trusts by their UUIDs.
 * @param client Apollo client
 * @param trustUuids Array of trust UUIDs.
 * @returns Array of trust objects.
 * @throws {InvalidArgumentError} When trustUuids is not an array or contains invalid UUIDs.
 * @throws {OperationFailedError} When the GraphQL operation fails.
 */
export const getTrusts = async (
  client: ApolloClient,
  trustUuids: UUID[],
): Promise<TrustEntity[]> => {
  assertArray(trustUuids, 'trustUuids', InvalidArgumentError);
  trustUuids.forEach((uuid, index) => {
    assertUUID(uuid, `trustUuids[${index}]`, InvalidArgumentError);
  });

  const input: FindManyTrustsInput = {
    filtering: [
      {
        field: TrustFilteringField.Uuid,
        type: FilteringType.In,
        value: trustUuids,
      },
    ],
  };

  const response = await client.query({
    query: FindManyTrustsDocument,
    variables: { input },
  });

  assert(
    response.data,
    `GraphQL Operation failed with error: ${response.error}`,
    OperationFailedError,
  );

  return convertConnectionToTrustArray(response.data);
};
