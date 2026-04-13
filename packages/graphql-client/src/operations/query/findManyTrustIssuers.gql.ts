import type * as Types from '../../contrib/graphql/schema-types.js';

import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type FindManyTrustIssuersQueryVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.FindManyTrustIssuersInput>;
}>;


export type FindManyTrustIssuersQuery = { __typename?: 'Query', findManyTrustIssuers: { __typename?: 'TrustIssuerConnection', edges: Array<{ __typename?: 'TrustIssuerEdge', node: { __typename?: 'TrustIssuer', uuid: string, trust: { __typename?: 'Trust', uuid: string }, issuer: { __typename?: 'Issuer', uuid: string } } } | null> } };


export const FindManyTrustIssuersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindManyTrustIssuers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"FindManyTrustIssuersInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findManyTrustIssuers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uuid"}},{"kind":"Field","name":{"kind":"Name","value":"trust"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uuid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"issuer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uuid"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<FindManyTrustIssuersQuery, FindManyTrustIssuersQueryVariables>;