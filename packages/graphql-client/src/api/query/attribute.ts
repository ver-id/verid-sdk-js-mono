import { ApolloClient } from '@apollo/client';
import {
  assert,
  assertArray,
  assertUUID,
  AttributeEntity,
  AttributeEntityDeep,
  InvalidArgumentError,
  LocaleEntity,
  OperationFailedError,
  UUID,
} from '@verid-sdk-js-mono/core';
import {
  FindAttributeDocument,
  FindManyAttributesDeepDocument,
  FindManyAttributesDocument,
} from '../../operations/query/index.js';
import {
  convertConnectionToArray,
  convertConnectionToAttributeArray,
  convertConnectionToAttributeDeepArray,
} from '../../helpers/converter.js';
import {
  AttributeFilteringField,
  FilteringType,
  FindManyAttributesInput,
} from '../../contrib/graphql/schema-types.js';

/**
 * Get Attribute by its UUID.
 * @param client Apollo client
 * @param uuid Attribute UUID.
 * @returns Attribute object.
 * @throws {InvalidArgumentError} When uuid is not a valid UUID.
 * @throws {OperationFailedError} When the GraphQL operation fails or provider is not found.
 */
export const getAttribute = async (client: ApolloClient, uuid: UUID): Promise<AttributeEntity> => {
  assertUUID(uuid, 'uuid', InvalidArgumentError);

  const response = await client.query({
    query: FindAttributeDocument,
    variables: { uuid },
  });

  assert(
    response.data,
    `GraphQL Operation failed with error: ${response.error}`,
    OperationFailedError,
  );

  return {
    uuid: response.data.findAttribute.uuid,
    name: response.data.findAttribute.name,
    locales: convertConnectionToArray<LocaleEntity>(response.data.findAttribute.locale),
    credentialUuid: response.data.findAttribute.credential.uuid,
  };
};

/**
 * Get many attributes by their UUIDs.
 * @param client Apollo client
 * @param attributeUuids Array of attribute UUIDs.
 * @returns Array of attribute objects.
 * @throws {InvalidArgumentError} When attributeUuids is not an array or contains invalid UUIDs.
 * @throws {OperationFailedError} When the GraphQL operation fails.
 */
export const getAttributes = async (
  client: ApolloClient,
  attributeUuids: UUID[],
): Promise<AttributeEntity[]> => {
  assertArray(attributeUuids, 'attributeUuids', InvalidArgumentError);
  attributeUuids.forEach((uuid, index) => {
    assertUUID(uuid, `attributeUuids[${index}]`, InvalidArgumentError);
  });

  const input: FindManyAttributesInput = {
    filtering: [
      {
        field: AttributeFilteringField.Uuid,
        type: FilteringType.In,
        value: attributeUuids,
      },
    ],
  };

  const response = await client.query({
    query: FindManyAttributesDocument,
    variables: { input },
  });

  assert(
    response.data,
    `GraphQL Operation failed with error: ${response.error}`,
    OperationFailedError,
  );

  return convertConnectionToAttributeArray(response.data);
};

/**
 * Get multiple attributes by their UUIDs with all parent entities (deep fetch).
 * This method retrieves attributes along with their complete parent hierarchy including
 * credentials, issuers, schemes, and providers.
 * @param client Apollo client
 * @param attributeUuids Array of attribute UUIDs to retrieve with deep data.
 * @returns Promise that resolves to an array of AttributeDeep objects containing full entity hierarchy.
 * @throws {InvalidArgumentError} When attributeUuids is not an array or contains invalid UUIDs.
 * @throws {OperationFailedError} When the GraphQL operation fails.
 */
export const getAttributesWithHierarchy = async (
  client: ApolloClient,
  attributeUuids: UUID[],
): Promise<AttributeEntityDeep[]> => {
  assertArray(attributeUuids, 'attributeUuids', InvalidArgumentError);
  attributeUuids.forEach((uuid, index) => {
    assertUUID(uuid, `attributeUuids[${index}]`, InvalidArgumentError);
  });

  const input: FindManyAttributesInput = {
    filtering: [
      {
        field: AttributeFilteringField.Uuid,
        type: FilteringType.In,
        value: attributeUuids,
      },
    ],
  };

  const response = await client.query({
    query: FindManyAttributesDeepDocument,
    variables: { input },
  });

  assert(
    response.data,
    `GraphQL Operation failed with error: ${response.error}`,
    OperationFailedError,
  );

  return convertConnectionToAttributeDeepArray(response.data);
};
