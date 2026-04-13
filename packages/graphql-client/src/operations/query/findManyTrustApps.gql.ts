import type * as Types from '../../contrib/graphql/schema-types.js';

import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type FindManyTrustAppsQueryVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.FindManyTrustAppsInput>;
}>;


export type FindManyTrustAppsQuery = { __typename?: 'Query', findManyTrustApps: { __typename?: 'TrustAppConnection', edges: Array<{ __typename?: 'TrustAppEdge', node: { __typename?: 'TrustApp', uuid: string, trust: { __typename?: 'Trust', uuid: string }, app: { __typename?: 'App', uuid: string } } } | null> } };


export const FindManyTrustAppsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindManyTrustApps"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"FindManyTrustAppsInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findManyTrustApps"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uuid"}},{"kind":"Field","name":{"kind":"Name","value":"trust"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uuid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"app"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uuid"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<FindManyTrustAppsQuery, FindManyTrustAppsQueryVariables>;