import { ref, reactive } from 'vue';
import {
  createVeridGraphQLClient,
  getHandler,
  getHandlers,
  getTrust,
  getIssuer,
  getIssuers,
  getCredential,
  getCredentials,
  getAttribute,
  getAttributes,
  getAttributesWithHierarchy,
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
    handler: false,
    trust: false,
    issuer: false,
    credential: false,
    attribute: false,
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
  const handlerUuid = ref('');
  const handlerResult = ref<any>(null);
  const trustUuid = ref('');
  const trustResult = ref<any>(null);
  const issuerUuid = ref('');
  const issuerResult = ref<any>(null);
  const credentialUuid = ref('');
  const credentialResult = ref<any>(null);
  const attributeUuid = ref('');
  const attributeResult = ref<any>(null);

  // Helper function states - Multiple
  const handlerUuids = ref('');
  const handlersResult = ref<any>(null);
  const issuerUuids = ref('');
  const issuersResult = ref<any>(null);
  const credentialUuids = ref('');
  const credentialsResult = ref<any>(null);
  const attributeUuids = ref('');
  const attributesResult = ref<any>(null);
  const attributeDeepUuids = ref('');
  const attributesDeepResult = ref<any>(null);

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
  const executeGetHandler = async () => {
    if (!graphqlClient || !handlerUuid.value.trim()) return;

    loading.value = true;
    error.value = null;
    errorSource.value = null;
    handlerResult.value = null;
    try {
      const result = await getHandler(graphqlClient, handlerUuid.value);
      handlerResult.value = result;
    } catch (err) {
      handleError(err);
      errorSource.value = 'getHandler';
    } finally {
      loading.value = false;
    }
  };

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
  const executeGetHandlers = async () => {
    if (!graphqlClient || !handlerUuids.value.trim()) return;

    loading.value = true;
    error.value = null;
    errorSource.value = null;
    handlersResult.value = null;

    try {
      const uuids = handlerUuids.value
        .split(',')
        .map((id) => id.trim())
        .filter(Boolean);
      const result = await getHandlers(graphqlClient, uuids);
      handlersResult.value = result;
    } catch (err) {
      handleError(err);
      errorSource.value = 'getHandlers';
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
    handlerResult.value = null;
    trustResult.value = null;
    issuerResult.value = null;
    credentialResult.value = null;
    attributeResult.value = null;

    // Clear multiple results
    handlersResult.value = null;
    issuersResult.value = null;
    credentialsResult.value = null;
    attributesResult.value = null;
    attributesDeepResult.value = null;

    // Clear inputs - single
    handlerUuid.value = '';
    trustUuid.value = '';
    issuerUuid.value = '';
    credentialUuid.value = '';
    attributeUuid.value = '';

    // Clear inputs - multiple
    handlerUuids.value = '';
    issuerUuids.value = '';
    credentialUuids.value = '';
    attributeUuids.value = '';
    attributeDeepUuids.value = '';

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
    handlerUuid,
    handlerResult,
    trustUuid,
    trustResult,
    issuerUuid,
    issuerResult,
    credentialUuid,
    credentialResult,
    attributeUuid,
    attributeResult,

    // Helper states - Multiple
    handlerUuids,
    handlersResult,
    issuerUuids,
    issuersResult,
    credentialUuids,
    credentialsResult,
    attributeUuids,
    attributesResult,
    attributeDeepUuids,
    attributesDeepResult,

    // Configuration (reactive, can be modified)
    clientConfig,

    // Actions
    initializeClient,
    executeExampleQuery,
    executeCustomQuery,
    executeGetHandler,
    executeGetTrust,
    executeGetIssuer,
    executeGetCredential,
    executeGetAttribute,
    executeGetHandlers,
    executeGetIssuers,
    executeGetCredentials,
    executeGetAttributes,
    executeGetAttributesWithHierarchy,
    startOver,
  };
}
