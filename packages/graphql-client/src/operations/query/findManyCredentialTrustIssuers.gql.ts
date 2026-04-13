import type * as Types from '../../contrib/graphql/schema-types.js';

import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type FindManyCredentialTrustIssuersQueryVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.FindManyCredentialTrustIssuersInput>;
}>;


export type FindManyCredentialTrustIssuersQuery = { __typename?: 'Query', findManyCredentialTrustIssuers: { __typename?: 'CredentialTrustIssuerConnection', edges: Array<{ __typename?: 'CredentialTrustIssuerEdge', node: { __typename?: 'CredentialTrustIssuer', uuid: string, credential: { __typename?: 'Credential', uuid: string }, trustIssuer: { __typename?: 'TrustIssuer', uuid: string } } } | null> } };


export const FindManyCredentialTrustIssuersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindManyCredentialTrustIssuers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"FindManyCredentialTrustIssuersInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findManyCredentialTrustIssuers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uuid"}},{"kind":"Field","name":{"kind":"Name","value":"credential"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uuid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"trustIssuer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uuid"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<FindManyCredentialTrustIssuersQuery, FindManyCredentialTrustIssuersQueryVariables>;