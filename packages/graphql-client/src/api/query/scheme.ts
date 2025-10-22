import { ApolloClient } from '@apollo/client';
import {
  assert,
  assertArray,
  assertUUID,
  SchemeEntity,
  InvalidArgumentError,
  LocaleEntity,
  OperationFailedError,
  UUID,
} from '@verid-sdk-js-mono/core';
import {
  SchemeFilteringField,
  FilteringType,
  FindManySchemesInput,
} from '../../contrib/graphql/schema-types.js';
import { FindSchemeDocument, FindManySchemesDocument } from '../../operations/query/index.js';
import {
  convertConnectionToArray,
  convertConnectionToSchemeArray,
} from '../../helpers/converter.js';

/**
 * Get Scheme by its UUID.
 * @param client Apollo client
 * @param uuid Scheme UUID.
 * @returns Scheme object.
 * @throws {InvalidArgumentError} When uuid is not a valid UUID.
 * @throws {OperationFailedError} When the GraphQL operation fails or provider is not found.
 */
export const getScheme = async (client: ApolloClient, uuid: UUID): Promise<SchemeEntity> => {
  assertUUID(uuid, 'uuid', InvalidArgumentError);

  const response = await client.query({
    query: FindSchemeDocument,
    variables: { uuid },
  });

  assert(
    response.data,
    `GraphQL Operation failed with error: ${response.error}`,
    OperationFailedError,
  );

  return {
    uuid: response.data.findScheme.uuid,
    name: response.data.findScheme.name,
    locales: convertConnectionToArray<LocaleEntity>(response.data.findScheme.locale),
    providerUuid: response.data.findScheme.provider.uuid,
  };
};

/**
 * Get many schemes by their UUIDs.
 * @param client Apollo client
 * @param schemeUuids Array of scheme UUIDs.
 * @returns Array of scheme objects.
 * @throws {InvalidArgumentError} When schemeUuids is not an array or contains invalid UUIDs.
 * @throws {OperationFailedError} When the GraphQL operation fails.
 */
export const getSchemes = async (
  client: ApolloClient,
  schemeUuids: UUID[],
): Promise<SchemeEntity[]> => {
  assertArray(schemeUuids, 'schemeUuids', InvalidArgumentError);
  schemeUuids.forEach((uuid, index) => {
    assertUUID(uuid, `schemeUuids[${index}]`, InvalidArgumentError);
  });

  const input: FindManySchemesInput = {
    filtering: [
      {
        field: SchemeFilteringField.Uuid,
        type: FilteringType.In,
        value: schemeUuids,
      },
    ],
  };

  const response = await client.query({
    query: FindManySchemesDocument,
    variables: { input },
  });

  assert(
    response.data,
    `GraphQL Operation failed with error: ${response.error}`,
    OperationFailedError,
  );

  return convertConnectionToSchemeArray(response.data);
};
