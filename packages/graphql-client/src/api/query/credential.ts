import { ApolloClient } from '@apollo/client';
import {
  assert,
  assertArray,
  assertUUID,
  CredentialEntity,
  InvalidArgumentError,
  LocaleEntity,
  OperationFailedError,
  UUID,
} from '@verid-sdk-js-mono/core';
import {
  CredentialFilteringField,
  FilteringType,
  FindManyCredentialsInput,
} from '../../contrib/graphql/schema-types.js';
import {
  FindCredentialDocument,
  FindManyCredentialsDocument,
} from '../..//operations/query/index.js';
import {
  convertConnectionToArray,
  convertConnectionToCredentialArray,
} from '../../helpers/converter.js';

/**
 * Get Credential by its UUID.
 * @param client Apollo client
 * @param uuid Credential UUID.
 * @returns Credential object.
 * @throws {InvalidArgumentError} When uuid is not a valid UUID.
 * @throws {OperationFailedError} When the GraphQL operation fails or provider is not found.
 */
/**
 * @category Credential Queries
 */
export const getCredential = async (
  client: ApolloClient,
  uuid: UUID,
): Promise<CredentialEntity> => {
  assertUUID(uuid, 'uuid', InvalidArgumentError);

  const response = await client.query({
    query: FindCredentialDocument,
    variables: { uuid },
  });

  assert(
    response.data,
    `GraphQL Operation failed with error: ${response.error}`,
    OperationFailedError,
  );

  return {
    uuid: response.data.findCredential.uuid,
    name: response.data.findCredential.name,
    locales: convertConnectionToArray<LocaleEntity>(response.data.findCredential.locale),
    issuerUuid: response.data.findCredential.issuer.uuid,
  };
};

/**
 * Get many credentials by their UUIDs.
 * @param client Apollo client
 * @param credentialUuids Array of credential UUIDs.
 * @returns Array of credential objects.
 * @throws {InvalidArgumentError} When credentialUuids is not an array or contains invalid UUIDs.
 * @throws {OperationFailedError} When the GraphQL operation fails.
 */
/**
 * @category Credential Queries
 */
/**
 * @category Credential Queries
 */
export const getCredentials = async (
  client: ApolloClient,
  credentialUuids: UUID[],
): Promise<CredentialEntity[]> => {
  assertArray(credentialUuids, 'credentialUuids', InvalidArgumentError);
  credentialUuids.forEach((uuid, index) => {
    assertUUID(uuid, `credentialUuids[${index}]`, InvalidArgumentError);
  });

  const input: FindManyCredentialsInput = {
    filtering: [
      {
        field: CredentialFilteringField.Uuid,
        type: FilteringType.In,
        value: credentialUuids,
      },
    ],
  };

  const response = await client.query({
    query: FindManyCredentialsDocument,
    variables: { input },
  });

  assert(
    response.data,
    `GraphQL Operation failed with error: ${response.error}`,
    OperationFailedError,
  );

  return convertConnectionToCredentialArray(response.data);
};
