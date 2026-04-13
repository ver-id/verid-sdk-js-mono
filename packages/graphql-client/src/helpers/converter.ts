import {
  AttributeEntity,
  AttributeEntityDeep,
  LocaleEntity,
  CredentialEntity,
  HandlerEntity,
  TrustEntity,
  IssuerEntity,
} from '@verid-sdk-js-mono/core';
import {
  FindManyAttributesDeepQuery,
  FindManyAttributesQuery,
  FindManyCredentialsQuery,
  FindManyIssuersQuery,
  FindManyHandlersQuery,
  FindManyTrustsQuery,
} from '../operations/query/index.js';

/**
 * Converts a GraphQL connection object to an array of nodes.
 */
export function convertConnectionToArray<T>(data: { edges: Array<{ node: T } | null> }): T[] {
  return data.edges
    .filter((edge): edge is { node: T } => edge !== null)
    .map((edge) => edge.node as T);
}

/**
 * Converts AttributeLocale nodes (which use `label` instead of `name`) to LocaleEntity[].
 */
function convertAttributeLocales(
  data: { edges: Array<{ node: { locale: string; label: string; description?: string | null } } | null> },
): LocaleEntity[] {
  return data.edges
    .filter((edge): edge is { node: { locale: string; label: string; description?: string | null } } => edge !== null)
    .map((edge) => ({ locale: edge.node.locale, name: edge.node.label, description: edge.node.description }));
}

/**
 * Converts a GraphQL connection object to an array of deep attributes.
 * Includes parent credential.
 */
export function convertConnectionToAttributeDeepArray(
  data: FindManyAttributesDeepQuery,
): AttributeEntityDeep[] {
  const attributes = convertConnectionToArray(data.findManyAttributes);

  return attributes.map((attribute) => {
    return {
      uuid: attribute.uuid,
      name: attribute.name,
      locales: convertAttributeLocales(attribute.locales),
      credentialUuid: attribute.credential.uuid,
      credential: {
        uuid: attribute.credential.uuid,
        name: attribute.credential.name,
        locales: convertConnectionToArray<LocaleEntity>(attribute.credential.locales),
      },
    };
  });
}

/**
 * Converts a GraphQL connection object to an array of attributes.
 */
export function convertConnectionToAttributeArray(
  data: FindManyAttributesQuery,
): AttributeEntity[] {
  const attributes = convertConnectionToArray(data.findManyAttributes);

  return attributes.map((attribute) => {
    return {
      uuid: attribute.uuid,
      name: attribute.name,
      locales: convertAttributeLocales(attribute.locales),
      credentialUuid: attribute.credential.uuid,
    };
  });
}

/**
 * Converts a GraphQL connection object to an array of credentials.
 */
export function convertConnectionToCredentialArray(
  data: FindManyCredentialsQuery,
): CredentialEntity[] {
  const credentials = convertConnectionToArray(data.findManyCredentials);

  return credentials.map((credential) => {
    return {
      uuid: credential.uuid,
      name: credential.name,
      locales: convertConnectionToArray<LocaleEntity>(credential.locales),
    };
  });
}

/**
 * Converts a GraphQL connection object to an array of issuers.
 */
export function convertConnectionToIssuerArray(data: FindManyIssuersQuery): IssuerEntity[] {
  const issuers = convertConnectionToArray(data.findManyIssuers);

  return issuers.map((issuer) => {
    return {
      uuid: issuer.uuid,
      name: issuer.name,
      locales: convertConnectionToArray<LocaleEntity>(issuer.locales),
    };
  });
}

/**
 * Converts a GraphQL connection object to an array of trusts.
 */
export function convertConnectionToTrustArray(data: FindManyTrustsQuery): TrustEntity[] {
  const trusts = convertConnectionToArray(data.findManyTrusts);

  return trusts.map((trust) => {
    return {
      uuid: trust.uuid,
      name: trust.name,
      locales: convertConnectionToArray<LocaleEntity>(trust.locales),
    };
  });
}

/**
 * Converts a GraphQL connection object to an array of handlers.
 */
export function convertConnectionToHandlerArray(data: FindManyHandlersQuery): HandlerEntity[] {
  const handlers = convertConnectionToArray(data.findManyHandlers);

  return handlers.map((handler) => {
    return {
      uuid: handler.uuid,
      name: handler.name,
      locales: convertConnectionToArray<LocaleEntity>(handler.locales),
    };
  });
}
