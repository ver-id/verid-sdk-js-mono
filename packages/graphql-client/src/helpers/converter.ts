import {
  AttributeEntity,
  AttributeEntityDeep,
  LocaleEntity,
  CredentialEntity,
  ProviderEntity,
  SchemeEntity,
  IssuerEntity,
} from '@verid-sdk-js-mono/core';
import {
  FindManyAttributesDeepQuery,
  FindManyAttributesQuery,
  FindManyCredentialsQuery,
  FindManyIssuersQuery,
  FindManyProvidersQuery,
  FindManySchemesQuery,
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
 * Converts a GraphQL connection object to an array of deep attributes.
 */
export function convertConnectionToAttributeDeepArray(
  data: FindManyAttributesDeepQuery,
): AttributeEntityDeep[] {
  const attributes = convertConnectionToArray(data.findManyAttributes);

  return attributes.map((attribute) => {
    return {
      uuid: attribute.uuid,
      name: attribute.name,
      locales: convertConnectionToArray<LocaleEntity>(attribute.locale),
      credentialUuid: attribute.credential.uuid,
      credential: {
        uuid: attribute.credential.uuid,
        name: attribute.credential.name,
        locales: convertConnectionToArray<LocaleEntity>(attribute.credential.locale),
        issuerUuid: attribute.credential.issuer.uuid,
        issuer: {
          uuid: attribute.credential.issuer.uuid,
          name: attribute.credential.issuer.name,
          locales: convertConnectionToArray<LocaleEntity>(attribute.credential.issuer.locale),
          schemeUuid: attribute.credential.issuer.scheme.uuid,
          scheme: {
            uuid: attribute.credential.issuer.scheme.uuid,
            name: attribute.credential.issuer.scheme.name,
            locales: convertConnectionToArray<LocaleEntity>(
              attribute.credential.issuer.scheme.locale,
            ),
            providerUuid: attribute.credential.issuer.scheme.provider.uuid,
            provider: {
              uuid: attribute.credential.issuer.scheme.provider.uuid,
              name: attribute.credential.issuer.scheme.provider.name,
              locales: convertConnectionToArray<LocaleEntity>(
                attribute.credential.issuer.scheme.provider.locale,
              ),
            },
          },
        },
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
      locales: convertConnectionToArray<LocaleEntity>(attribute.locale),
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
      locales: convertConnectionToArray<LocaleEntity>(credential.locale),
      issuerUuid: credential.issuer.uuid,
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
      locales: convertConnectionToArray<LocaleEntity>(issuer.locale),
      schemeUuid: issuer.scheme.uuid,
    };
  });
}

/**
 * Converts a GraphQL connection object to an array of schemes.
 */
export function convertConnectionToSchemeArray(data: FindManySchemesQuery): SchemeEntity[] {
  const schemes = convertConnectionToArray(data.findManySchemes);

  return schemes.map((scheme) => {
    return {
      uuid: scheme.uuid,
      name: scheme.name,
      locales: convertConnectionToArray<LocaleEntity>(scheme.locale),
      providerUuid: scheme.provider.uuid,
    };
  });
}

/**
 * Converts a GraphQL connection object to an array of providers.
 */
export function convertConnectionToProviderArray(data: FindManyProvidersQuery): ProviderEntity[] {
  const providers = convertConnectionToArray(data.findManyProviders);

  return providers.map((provider) => {
    return {
      uuid: provider.uuid,
      name: provider.name,
      locales: convertConnectionToArray<LocaleEntity>(provider.locale),
    };
  });
}
