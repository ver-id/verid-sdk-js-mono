import type * as Types from '../../contrib/graphql/schema-types.js';

import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type FindIssuerQueryVariables = Types.Exact<{
  uuid: Types.Scalars['UUID']['input'];
}>;


export type FindIssuerQuery = { __typename?: 'Query', findIssuer: { __typename?: 'Issuer', uuid: string, name: string, locales: { __typename?: 'IssuerLocaleConnection', edges: Array<{ __typename?: 'IssuerLocaleEdge', node: { __typename?: 'IssuerLocale', locale: string, name: string, description?: string | null } } | null> } } };


export const FindIssuerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindIssuer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uuid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findIssuer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"uuid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uuid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uuid"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"locales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<FindIssuerQuery, FindIssuerQueryVariables>;