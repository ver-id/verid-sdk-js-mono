import { ApolloClient } from '@apollo/client';
import {
  assert,
  assertArray,
  assertUUID,
  IssuerEntity,
  InvalidArgumentError,
  LocaleEntity,
  OperationFailedError,
  UUID,
} from '@verid-sdk-js-mono/core';
import {
  IssuerFilteringField,
  FilteringType,
  FindManyIssuersInput,
} from '../../contrib/graphql/schema-types.js';
import { FindIssuerDocument, FindManyIssuersDocument } from '../../operations/query/index.js';
import {
  convertConnectionToArray,
  convertConnectionToIssuerArray,
} from '../../helpers/converter.js';

/**
 * Get Issuer by its UUID.
 * @param client Apollo client
 * @param uuid Issuer UUID.
 * @returns Issuer object.
 * @throws {InvalidArgumentError} When uuid is not a valid UUID.
 * @throws {OperationFailedError} When the GraphQL operation fails or provider is not found.
 */
export const getIssuer = async (client: ApolloClient, uuid: UUID): Promise<IssuerEntity> => {
  assertUUID(uuid, 'uuid', InvalidArgumentError);

  const response = await client.query({
    query: FindIssuerDocument,
    variables: { uuid },
  });

  assert(
    response.data,
    `GraphQL Operation failed with error: ${response.error}`,
    OperationFailedError,
  );

  return {
    uuid: response.data.findIssuer.uuid,
    name: response.data.findIssuer.name,
    locales: convertConnectionToArray<LocaleEntity>(response.data.findIssuer.locale),
    schemeUuid: response.data.findIssuer.scheme.uuid,
  };
};

/**
 * Get many issuers by their UUIDs.
 * @param client Apollo client
 * @param issuerUuids Array of issuer UUIDs.
 * @returns Array of issuer objects.
 * @throws {InvalidArgumentError} When issuerUuids is not an array or contains invalid UUIDs.
 * @throws {OperationFailedError} When the GraphQL operation fails.
 */
export const getIssuers = async (
  client: ApolloClient,
  issuerUuids: UUID[],
): Promise<IssuerEntity[]> => {
  assertArray(issuerUuids, 'issuerUuids', InvalidArgumentError);
  issuerUuids.forEach((uuid, index) => {
    assertUUID(uuid, `issuerUuids[${index}]`, InvalidArgumentError);
  });

  const input: FindManyIssuersInput = {
    filtering: [
      {
        field: IssuerFilteringField.Uuid,
        type: FilteringType.In,
        value: issuerUuids,
      },
    ],
  };

  const response = await client.query({
    query: FindManyIssuersDocument,
    variables: { input },
  });

  assert(
    response.data,
    `GraphQL Operation failed with error: ${response.error}`,
    OperationFailedError,
  );

  return convertConnectionToIssuerArray(response.data);
};
