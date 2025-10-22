import { ApolloClient } from '@apollo/client';
import {
  assert,
  assertArray,
  assertUUID,
  ProviderEntity,
  InvalidArgumentError,
  LocaleEntity,
  OperationFailedError,
  UUID,
} from '@verid-sdk-js-mono/core';
import {
  ProviderFilteringField,
  FilteringType,
  FindManyProvidersInput,
} from '../../contrib/graphql/schema-types.js';
import { FindProviderDocument, FindManyProvidersDocument } from '../../operations/query/index.js';
import {
  convertConnectionToArray,
  convertConnectionToProviderArray,
} from '../../helpers/converter.js';

/**
 * Get Provider by its UUID.
 * @param client Apollo client
 * @param uuid Provider UUID.
 * @returns Provider object.
 * @throws {InvalidArgumentError} When uuid is not a valid UUID.
 * @throws {OperationFailedError} When the GraphQL operation fails or provider is not found.
 */
export const getProvider = async (client: ApolloClient, uuid: UUID): Promise<ProviderEntity> => {
  assertUUID(uuid, 'uuid', InvalidArgumentError);

  const response = await client.query({
    query: FindProviderDocument,
    variables: { uuid },
  });

  assert(
    response.data,
    `GraphQL Operation failed with error: ${response.error}`,
    OperationFailedError,
  );

  return {
    uuid: response.data.findProvider.uuid,
    name: response.data.findProvider.name,
    locales: convertConnectionToArray<LocaleEntity>(response.data.findProvider.locale),
  };
};

/**
 * Get many providers by their UUIDs.
 * @param client Apollo client
 * @param providerUuids Array of provider UUIDs.
 * @returns Array of provider objects.
 * @throws {InvalidArgumentError} When providerUuids is not an array or contains invalid UUIDs.
 * @throws {OperationFailedError} When the GraphQL operation fails.
 */
export const getProviders = async (
  client: ApolloClient,
  providerUuids: UUID[],
): Promise<ProviderEntity[]> => {
  assertArray(providerUuids, 'providerUuids', InvalidArgumentError);
  providerUuids.forEach((uuid, index) => {
    assertUUID(uuid, `providerUuids[${index}]`, InvalidArgumentError);
  });

  const input: FindManyProvidersInput = {
    filtering: [
      {
        field: ProviderFilteringField.Uuid,
        type: FilteringType.In,
        value: providerUuids,
      },
    ],
  };

  const response = await client.query({
    query: FindManyProvidersDocument,
    variables: { input },
  });

  assert(
    response.data,
    `GraphQL Operation failed with error: ${response.error}`,
    OperationFailedError,
  );

  return convertConnectionToProviderArray(response.data);
};
