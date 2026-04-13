import { ApolloClient } from '@apollo/client';
import {
  assert,
  assertArray,
  assertUUID,
  HandlerEntity,
  InvalidArgumentError,
  LocaleEntity,
  OperationFailedError,
  UUID,
} from '@verid-sdk-js-mono/core';
import {
  HandlerFilteringField,
  FilteringType,
  FindManyHandlersInput,
} from '../../contrib/graphql/schema-types.js';
import { FindHandlerDocument, FindManyHandlersDocument } from '../../operations/query/index.js';
import {
  convertConnectionToArray,
  convertConnectionToHandlerArray,
} from '../../helpers/converter.js';

/**
 * Get Handler by its UUID.
 * @param client Apollo client
 * @param uuid Handler UUID.
 * @returns Handler object.
 * @throws {InvalidArgumentError} When uuid is not a valid UUID.
 * @throws {OperationFailedError} When the GraphQL operation fails or handler is not found.
 */
export const getHandler = async (client: ApolloClient, uuid: UUID): Promise<HandlerEntity> => {
  assertUUID(uuid, 'uuid', InvalidArgumentError);

  const response = await client.query({
    query: FindHandlerDocument,
    variables: { uuid },
  });

  assert(
    response.data,
    `GraphQL Operation failed with error: ${response.error}`,
    OperationFailedError,
  );

  return {
    uuid: response.data.findHandler.uuid,
    name: response.data.findHandler.name,
    locales: convertConnectionToArray<LocaleEntity>(response.data.findHandler.locales),
  };
};

/**
 * Get many handlers by their UUIDs.
 * @param client Apollo client
 * @param handlerUuids Array of handler UUIDs.
 * @returns Array of handler objects.
 * @throws {InvalidArgumentError} When handlerUuids is not an array or contains invalid UUIDs.
 * @throws {OperationFailedError} When the GraphQL operation fails.
 */
export const getHandlers = async (
  client: ApolloClient,
  handlerUuids: UUID[],
): Promise<HandlerEntity[]> => {
  assertArray(handlerUuids, 'handlerUuids', InvalidArgumentError);
  handlerUuids.forEach((uuid, index) => {
    assertUUID(uuid, `handlerUuids[${index}]`, InvalidArgumentError);
  });

  const input: FindManyHandlersInput = {
    filtering: [
      {
        field: HandlerFilteringField.Uuid,
        type: FilteringType.In,
        value: handlerUuids,
      },
    ],
  };

  const response = await client.query({
    query: FindManyHandlersDocument,
    variables: { input },
  });

  assert(
    response.data,
    `GraphQL Operation failed with error: ${response.error}`,
    OperationFailedError,
  );

  return convertConnectionToHandlerArray(response.data);
};
