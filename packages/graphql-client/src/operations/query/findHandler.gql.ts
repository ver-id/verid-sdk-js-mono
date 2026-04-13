import type * as Types from '../../contrib/graphql/schema-types.js';

import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type FindHandlerQueryVariables = Types.Exact<{
  uuid: Types.Scalars['UUID']['input'];
}>;


export type FindHandlerQuery = { __typename?: 'Query', findHandler: { __typename?: 'Handler', uuid: string, name: string, locales: { __typename?: 'HandlerLocaleConnection', edges: Array<{ __typename?: 'HandlerLocaleEdge', node: { __typename?: 'HandlerLocale', locale: string, name: string, description?: string | null } } | null> } } };


export const FindHandlerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindHandler"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uuid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findHandler"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"uuid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uuid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uuid"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"locales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<FindHandlerQuery, FindHandlerQueryVariables>;