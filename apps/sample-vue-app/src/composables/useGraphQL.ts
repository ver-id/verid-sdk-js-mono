import { ref, reactive } from 'vue';
import {
  createVeridGraphQLClient,
  getTrust,
  getTrusts,
  getIssuer,
  getIssuers,
  getCredential,
  getCredentials,
  getAttribute,
  getAttributes,
  getAttributesWithHierarchy,
  getTrustAppsByTrust,
  getTrustAppsByApp,
  getTrustIssuersByTrust,
  getTrustIssuersByIssuer,
  getCredentialTrustIssuersByCredential,
  getCredentialTrustIssuersByTrustIssuer,
} from '@ver-id/graphql-client';
import { gql } from '@apollo/client/core';
import { formatError } from '../utils/errorHandler.js';

type VeridGraphQLClient = ReturnType<typeof createVeridGraphQLClient>;

/**
 * Composable for handling Ver.iD GraphQL operations
 * Encapsulates all GraphQL client logic and helper functions
 */
export function useGraphQL() {
  // Configuration - reactive so it can be updated from form
  const clientConfig = reactive({
    endpoint: import.meta.env.VITE_VERID_GRAPHQL_ENDPOINT || '',
    authorizationServer: import.meta.env.VITE_VERID_GRAPHQL_AUTHORIZATION_SERVER || '',
    clientId: import.meta.env.VITE_VERID_GRAPHQL_CLIENT_ID || '',
    clientSecret: import.meta.env.VITE_VERID_GRAPHQL_CLIENT_SECRET || '',
  });

  // Expandable sections state
  const expandedSections = reactive({
    config: true, // Show config section by default
    helperFunctions: true,
    customQuery: true,
  });

  const expandedCategories = reactive({
    trust: false,
    issuer: false,
    credential: false,
    attribute: false,
    joinTables: false,
  });

  // Main state
  const clientInitialized = ref(false);
  const loading = ref(false);
  const error = ref<string | null>(null);
  const errorSource = ref<string | null>(null); // Track which operation caused the error
  const showConfigForm = ref(!clientConfig.endpoint || !clientConfig.clientId); // Show form if env vars missing
  const queryResult = ref<any>(null);
  const customQuery = ref('');
  const customQueryResult = ref<any>(null);

  // Helper function states - Single
  const trustUuid = ref('');
  const trustResult = ref<any>(null);
  const issuerUuid = ref('');
  const issuerResult = ref<any>(null);
  const credentialUuid = ref('');
  const credentialResult = ref<any>(null);
  const attributeUuid = ref('');
  const attributeResult = ref<any>(null);

  // Helper function states - Multiple
  const trustUuids = ref('');
  const trustsResult = ref<any>(null);
  const issuerUuids = ref('');
  const issuersResult = ref<any>(null);
  const credentialUuids = ref('');
  const credentialsResult = ref<any>(null);
  const attributeUuids = ref('');
  const attributesResult = ref<any>(null);
  const attributeDeepUuids = ref('');
  const attributesDeepResult = ref<any>(null);

  // Join table states
  const trustAppTrustUuid = ref('');
  const trustAppsByTrustResult = ref<any>(null);
  const trustAppAppUuid = ref('');
  const trustAppsByAppResult = ref<any>(null);
  const trustIssuerTrustUuid = ref('');
  const trustIssuersByTrustResult = ref<any>(null);
  const trustIssuerIssuerUuid = ref('');
  const trustIssuersByIssuerResult = ref<any>(null);
  const ctiCredentialUuid = ref('');
  const ctiByCredentialResult = ref<any>(null);
  const ctiTrustIssuerUuid = ref('');
  const ctiByTrustIssuerResult = ref<any>(null);

  // The GraphQL client instance
  let graphqlClient: VeridGraphQLClient | null = null;

  // Example query (uses catalog, works with client credentials)
  const EXAMPLE_QUERY = gql`
    query FindManyTrusts {
      findManyTrusts {
        edges {
          node {
            uuid
            name
            createdAt
          }
        }
      }
    }
  `;

  /**
   * Initialize the GraphQL client with current config
   */
  const initializeClient = () => {
    try {
      graphqlClient = createVeridGraphQLClient(clientConfig);
      clientInitialized.value = true;
      showConfigForm.value = false; // Hide form after successful init
      error.value = null;
    } catch (err) {
      handleError(err);
    }
  };

  /**
   * Execute example query
   */
  const executeExampleQuery = async () => {
    if (!graphqlClient) return;

    loading.value = true;
    error.value = null;
    errorSource.value = null;

    try {
      const { data } = await graphqlClient.query({ query: EXAMPLE_QUERY });

      queryResult.value = data;
    } catch (err) {
      handleError(err);
      errorSource.value = 'exampleQuery';
    } finally {
      loading.value = false;
    }
  };

  /**
   * Execute custom query
   */
  const executeCustomQuery = async () => {
    if (!graphqlClient || !customQuery.value.trim()) return;

    loading.value = true;
    error.value = null;
    errorSource.value = null;

    try {
      const query = gql(customQuery.value);

      const { data } = await graphqlClient.query({ query });

      customQueryResult.value = data;
    } catch (err) {
      handleError(err);
      errorSource.value = 'customQuery';
    } finally {
      loading.value = false;
    }
  };

  // Helper function execution handlers - Single
  const executeGetTrust = async () => {
    if (!graphqlClient || !trustUuid.value.trim()) return;

    loading.value = true;
    error.value = null;
    errorSource.value = null;
    trustResult.value = null;

    try {
      const result = await getTrust(graphqlClient, trustUuid.value);
      trustResult.value = result;
    } catch (err) {
      handleError(err);
      errorSource.value = 'getTrust';
    } finally {
      loading.value = false;
    }
  };

  const executeGetIssuer = async () => {
    if (!graphqlClient || !issuerUuid.value.trim()) return;

    loading.value = true;
    error.value = null;
    errorSource.value = null;
    issuerResult.value = null;

    try {
      const result = await getIssuer(graphqlClient, issuerUuid.value);
      issuerResult.value = result;
    } catch (err) {
      handleError(err);
      errorSource.value = 'getIssuer';
    } finally {
      loading.value = false;
    }
  };

  const executeGetCredential = async () => {
    if (!graphqlClient || !credentialUuid.value.trim()) return;

    loading.value = true;
    error.value = null;
    errorSource.value = null;
    credentialResult.value = null;

    try {
      const result = await getCredential(graphqlClient, credentialUuid.value);
      credentialResult.value = result;
    } catch (err) {
      handleError(err);
      errorSource.value = 'getCredential';
    } finally {
      loading.value = false;
    }
  };

  const executeGetAttribute = async () => {
    if (!graphqlClient || !attributeUuid.value.trim()) return;

    loading.value = true;
    error.value = null;
    errorSource.value = null;
    attributeResult.value = null;

    try {
      const result = await getAttribute(graphqlClient, attributeUuid.value);
      attributeResult.value = result;
    } catch (err) {
      handleError(err);
      errorSource.value = 'getAttribute';
    } finally {
      loading.value = false;
    }
  };

  // Helper function execution handlers - Multiple
  const executeGetTrusts = async () => {
    if (!graphqlClient || !trustUuids.value.trim()) return;

    loading.value = true;
    error.value = null;
    errorSource.value = null;
    trustsResult.value = null;

    try {
      const uuids = trustUuids.value
        .split(',')
        .map((id) => id.trim())
        .filter(Boolean);
      const result = await getTrusts(graphqlClient, uuids);
      trustsResult.value = result;
    } catch (err) {
      handleError(err);
      errorSource.value = 'getTrusts';
    } finally {
      loading.value = false;
    }
  };

  const executeGetIssuers = async () => {
    if (!graphqlClient || !issuerUuids.value.trim()) return;

    loading.value = true;
    error.value = null;
    errorSource.value = null;
    issuersResult.value = null;

    try {
      const uuids = issuerUuids.value
        .split(',')
        .map((id) => id.trim())
        .filter(Boolean);
      const result = await getIssuers(graphqlClient, uuids);
      issuersResult.value = result;
    } catch (err) {
      handleError(err);
      errorSource.value = 'getIssuers';
    } finally {
      loading.value = false;
    }
  };

  const executeGetCredentials = async () => {
    if (!graphqlClient || !credentialUuids.value.trim()) return;

    loading.value = true;
    error.value = null;
    errorSource.value = null;
    credentialsResult.value = null;

    try {
      const uuids = credentialUuids.value
        .split(',')
        .map((id) => id.trim())
        .filter(Boolean);
      const result = await getCredentials(graphqlClient, uuids);
      credentialsResult.value = result;
    } catch (err) {
      handleError(err);
      errorSource.value = 'getCredentials';
    } finally {
      loading.value = false;
    }
  };

  const executeGetAttributes = async () => {
    if (!graphqlClient || !attributeUuids.value.trim()) return;

    loading.value = true;
    error.value = null;
    errorSource.value = null;
    attributesResult.value = null;

    try {
      const uuids = attributeUuids.value
        .split(',')
        .map((id) => id.trim())
        .filter(Boolean);
      const result = await getAttributes(graphqlClient, uuids);
      attributesResult.value = result;
    } catch (err) {
      handleError(err);
      errorSource.value = 'getAttributes';
    } finally {
      loading.value = false;
    }
  };

  const executeGetAttributesWithHierarchy = async () => {
    if (!graphqlClient || !attributeDeepUuids.value.trim()) return;

    loading.value = true;
    error.value = null;
    errorSource.value = null;
    attributesDeepResult.value = null;

    try {
      const uuids = attributeDeepUuids.value
        .split(',')
        .map((id) => id.trim())
        .filter(Boolean);
      const result = await getAttributesWithHierarchy(graphqlClient, uuids);
      attributesDeepResult.value = result;
    } catch (err) {
      handleError(err);
      errorSource.value = 'getAttributesWithHierarchy';
    } finally {
      loading.value = false;
    }
  };

  // Join table execution handlers
  const executeGetTrustAppsByTrust = async () => {
    if (!graphqlClient || !trustAppTrustUuid.value.trim()) return;
    loading.value = true;
    error.value = null;
    errorSource.value = null;
    trustAppsByTrustResult.value = null;
    try {
      trustAppsByTrustResult.value = await getTrustAppsByTrust(graphqlClient, trustAppTrustUuid.value);
    } catch (err) {
      handleError(err);
      errorSource.value = 'getTrustAppsByTrust';
    } finally {
      loading.value = false;
    }
  };

  const executeGetTrustAppsByApp = async () => {
    if (!graphqlClient || !trustAppAppUuid.value.trim()) return;
    loading.value = true;
    error.value = null;
    errorSource.value = null;
    trustAppsByAppResult.value = null;
    try {
      trustAppsByAppResult.value = await getTrustAppsByApp(graphqlClient, trustAppAppUuid.value);
    } catch (err) {
      handleError(err);
      errorSource.value = 'getTrustAppsByApp';
    } finally {
      loading.value = false;
    }
  };

  const executeGetTrustIssuersByTrust = async () => {
    if (!graphqlClient || !trustIssuerTrustUuid.value.trim()) return;
    loading.value = true;
    error.value = null;
    errorSource.value = null;
    trustIssuersByTrustResult.value = null;
    try {
      trustIssuersByTrustResult.value = await getTrustIssuersByTrust(graphqlClient, trustIssuerTrustUuid.value);
    } catch (err) {
      handleError(err);
      errorSource.value = 'getTrustIssuersByTrust';
    } finally {
      loading.value = false;
    }
  };

  const executeGetTrustIssuersByIssuer = async () => {
    if (!graphqlClient || !trustIssuerIssuerUuid.value.trim()) return;
    loading.value = true;
    error.value = null;
    errorSource.value = null;
    trustIssuersByIssuerResult.value = null;
    try {
      trustIssuersByIssuerResult.value = await getTrustIssuersByIssuer(graphqlClient, trustIssuerIssuerUuid.value);
    } catch (err) {
      handleError(err);
      errorSource.value = 'getTrustIssuersByIssuer';
    } finally {
      loading.value = false;
    }
  };

  const executeGetCtiByCredential = async () => {
    if (!graphqlClient || !ctiCredentialUuid.value.trim()) return;
    loading.value = true;
    error.value = null;
    errorSource.value = null;
    ctiByCredentialResult.value = null;
    try {
      ctiByCredentialResult.value = await getCredentialTrustIssuersByCredential(graphqlClient, ctiCredentialUuid.value);
    } catch (err) {
      handleError(err);
      errorSource.value = 'getCredentialTrustIssuersByCredential';
    } finally {
      loading.value = false;
    }
  };

  const executeGetCtiByTrustIssuer = async () => {
    if (!graphqlClient || !ctiTrustIssuerUuid.value.trim()) return;
    loading.value = true;
    error.value = null;
    errorSource.value = null;
    ctiByTrustIssuerResult.value = null;
    try {
      ctiByTrustIssuerResult.value = await getCredentialTrustIssuersByTrustIssuer(graphqlClient, ctiTrustIssuerUuid.value);
    } catch (err) {
      handleError(err);
      errorSource.value = 'getCredentialTrustIssuersByTrustIssuer';
    } finally {
      loading.value = false;
    }
  };

  /**
   * Set default custom query
   */
  customQuery.value = `query ExampleQuery {
  # Replace this with your own GraphQL query
  # For example:
  findManyTrusts {
    edges {
      node {
        uuid
        name
        createdAt
      }
    }
  }
}`;

  /**
   * Handle errors
   */
  const handleError = (err: unknown) => {
    error.value = formatError(err);
  };

  /**
   * Reset all state to initial values
   */
  const startOver = () => {
    clientInitialized.value = false;
    queryResult.value = null;
    customQueryResult.value = null;

    // Clear single results
    trustResult.value = null;
    issuerResult.value = null;
    credentialResult.value = null;
    attributeResult.value = null;

    // Clear multiple results
    trustsResult.value = null;
    issuersResult.value = null;
    credentialsResult.value = null;
    attributesResult.value = null;
    attributesDeepResult.value = null;

    // Clear join table results
    trustAppsByTrustResult.value = null;
    trustAppsByAppResult.value = null;
    trustIssuersByTrustResult.value = null;
    trustIssuersByIssuerResult.value = null;
    ctiByCredentialResult.value = null;
    ctiByTrustIssuerResult.value = null;

    // Clear inputs - single
    trustUuid.value = '';
    issuerUuid.value = '';
    credentialUuid.value = '';
    attributeUuid.value = '';

    // Clear inputs - multiple
    trustUuids.value = '';
    issuerUuids.value = '';
    credentialUuids.value = '';
    attributeUuids.value = '';
    attributeDeepUuids.value = '';

    // Clear join table inputs
    trustAppTrustUuid.value = '';
    trustAppAppUuid.value = '';
    trustIssuerTrustUuid.value = '';
    trustIssuerIssuerUuid.value = '';
    ctiCredentialUuid.value = '';
    ctiTrustIssuerUuid.value = '';

    graphqlClient = null;
    error.value = null;
    showConfigForm.value = true; // Show config form again
    customQuery.value = `query ExampleQuery {
  # Replace this with your own GraphQL query
  # For example:
  findManyTrusts {
    edges {
      node {
        uuid
        name
        createdAt
      }
    }
  }
}`;
  };

  return {
    // State
    expandedSections,
    expandedCategories,
    clientInitialized,
    loading,
    error,
    errorSource,
    queryResult,
    customQuery,
    customQueryResult,
    showConfigForm,

    // Helper states - Single
    trustUuid,
    trustResult,
    issuerUuid,
    issuerResult,
    credentialUuid,
    credentialResult,
    attributeUuid,
    attributeResult,

    // Helper states - Multiple
    trustUuids,
    trustsResult,
    issuerUuids,
    issuersResult,
    credentialUuids,
    credentialsResult,
    attributeUuids,
    attributesResult,
    attributeDeepUuids,
    attributesDeepResult,

    // Join table states
    trustAppTrustUuid,
    trustAppsByTrustResult,
    trustAppAppUuid,
    trustAppsByAppResult,
    trustIssuerTrustUuid,
    trustIssuersByTrustResult,
    trustIssuerIssuerUuid,
    trustIssuersByIssuerResult,
    ctiCredentialUuid,
    ctiByCredentialResult,
    ctiTrustIssuerUuid,
    ctiByTrustIssuerResult,

    // Configuration (reactive, can be modified)
    clientConfig,

    // Actions
    initializeClient,
    executeExampleQuery,
    executeCustomQuery,
    executeGetTrust,
    executeGetIssuer,
    executeGetCredential,
    executeGetAttribute,
    executeGetTrusts,
    executeGetIssuers,
    executeGetCredentials,
    executeGetAttributes,
    executeGetAttributesWithHierarchy,
    executeGetTrustAppsByTrust,
    executeGetTrustAppsByApp,
    executeGetTrustIssuersByTrust,
    executeGetTrustIssuersByIssuer,
    executeGetCtiByCredential,
    executeGetCtiByTrustIssuer,
    startOver,
  };
}
