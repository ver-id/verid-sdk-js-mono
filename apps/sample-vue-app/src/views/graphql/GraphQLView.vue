<template>
  <div class="container">
    <h1>GraphQL Examples</h1>
    <p class="description">
      This page demonstrates how to use the @ver-id/graphql-client SDK for GraphQL queries. Note:
      This SDK is designed for server-side Node.js applications using client credentials flow.
    </p>

    <div class="section">
      <h2>1. Configure & Initialize GraphQL Client</h2>

      <div v-if="clientInitialized" class="completed">
        <p>✓ Client has been initialized</p>
      </div>

      <p v-if="!clientInitialized">
        Configure your GraphQL client settings and initialize:
      </p>
      
      <!-- Configuration -->
      <div v-if="!clientInitialized" class="config-form">
        <div class="form-group">
          <label for="endpoint">GraphQL Endpoint:</label>
          <input
            id="endpoint"
            v-model="clientConfig.endpoint"
            type="text"
            placeholder="https://api.ver.id/graphql"
          >
        </div>

        <div class="form-group">
          <label for="authorizationServer">Authorization Server:</label>
          <input
            id="authorizationServer"
            v-model="clientConfig.authorizationServer"
            type="text"
            placeholder="https://authentication.ver.id"
          >
        </div>

        <div class="form-group">
          <label for="clientId">Client ID:</label>
          <input
            id="clientId"
            v-model="clientConfig.clientId"
            type="text"
            placeholder="your-client-id"
          >
        </div>

        <div class="form-group">
          <label for="clientSecret">Client Secret:</label>
          <input
            id="clientSecret"
            v-model="clientConfig.clientSecret"
            type="password"
            placeholder="your-client-secret"
          >
        </div>
      </div>

      <!-- Code example - always visible to show configuration -->
      <div class="code-block-wrapper">
        <CopyButton :content="getInitCode" />
        <pre><code>{{ getInitCode }}</code></pre>
      </div>

      <button v-if="!clientInitialized" @click="initializeClient">
        Initialize Client
      </button>
    </div>

    <div v-if="clientInitialized"
class="section">
      <h2>2. Example Query: Get Current User</h2>

      <div v-if="queryResult"
class="completed">
        <p>✓ Query executed successfully</p>
      </div>
      <p v-else>Fetch current user information using GraphQL.</p>

      <div class="code-block-wrapper">
        <CopyButton :content="queryCode" />
        <pre><code>{{ queryCode }}</code></pre>
      </div>

      <button v-if="!queryResult && !error"
:disabled="loading" @click="executeExampleQuery">
        {{ loading ? 'Executing...' : 'Execute Query' }}
      </button>

      <!-- Result or Error Display -->
      <div v-if="queryResult"
class="info">
        <h3>✓ Query Result:</h3>
        <div class="code-block-wrapper">
          <CopyButton :content="JSON.stringify(queryResult, null, 2)" />
          <pre>{{ JSON.stringify(queryResult, null, 2) }}</pre>
        </div>
      </div>

      <div v-else-if="error && errorSource === 'exampleQuery'"
class="error">
        <h3>❌ Error:</h3>
        <pre>{{ error }}</pre>
        <button
class="start-over-btn" @click="startOver">Try Again</button>
      </div>
    </div>

    <div v-if="clientInitialized" class="section collapsible-section">
      <div class="section-header" @click="toggleSection('helperFunctions')">
        <h2>
          <span class="toggle-icon">{{ expandedSections.helperFunctions ? '▼' : '▶' }}</span>
          3. Helper Functions
        </h2>
      </div>

      <div v-show="expandedSections.helperFunctions" class="section-content">
        <p>The SDK provides helper functions for common queries:</p>

        <div class="helper-functions">
          <!-- Handler Functions -->
          <div class="helper-category">
            <div class="category-header" @click="toggleCategory('handler')">
              <h3>
                <span class="toggle-icon">{{ expandedCategories.handler ? '▼' : '▶' }}</span>
                Handler Functions
              </h3>
            </div>
            <div v-show="expandedCategories.handler" class="category-content">
              <!-- Get Handler -->
              <div class="helper-function">
                <h4>Get Handler (Single)</h4>
                <div class="code-block-wrapper">
                  <CopyButton :content="getHandlerCode" />
                  <pre><code>{{ getHandlerCode }}</code></pre>
                </div>
                <div class="input-group">
                  <input
v-model="handlerUuid" type="text" placeholder="Enter Handler UUID" />
                  <button :disabled="loading || !handlerUuid.trim()" @click="executeGetHandler">
                    {{ loading ? 'Executing...' : 'Get Handler' }}
                  </button>
                </div>
                <!-- Result or Error -->
                <div v-if="handlerResult"
class="info">
                  <h5>✓ Result:</h5>
                  <div class="code-block-wrapper">
                    <CopyButton :content="JSON.stringify(handlerResult, null, 2)" />
                    <pre>{{ JSON.stringify(handlerResult, null, 2) }}</pre>
                  </div>
                </div>
                <div v-else-if="error && !loading && errorSource === 'getHandler'"
class="error">
                  <h5>❌ Error:</h5>
                  <pre>{{ error }}</pre>
                </div>
              </div>

              <!-- Get Handlers -->
              <div class="helper-function">
                <h4>Get Handlers (Multiple)</h4>
                <div class="code-block-wrapper">
                  <CopyButton :content="getHandlersCode" />
                  <pre><code>{{ getHandlersCode }}</code></pre>
                </div>
                <div class="input-group">
                  <input
                    v-model="handlerUuids"
                    type="text"
                    placeholder="Enter Handler UUIDs (comma-separated)"
                  />
                  <button :disabled="loading || !handlerUuids.trim()" @click="executeGetHandlers">
                    {{ loading ? 'Executing...' : 'Get Handlers' }}
                  </button>
                </div>
                <!-- Result or Error -->
                <div v-if="handlersResult"
class="info">
                  <h5>✓ Result:</h5>
                  <div class="code-block-wrapper">
                    <CopyButton :content="JSON.stringify(handlersResult, null, 2)" />
                    <pre>{{ JSON.stringify(handlersResult, null, 2) }}</pre>
                  </div>
                </div>
                <div v-else-if="error && !loading && errorSource === 'getHandlers'"
class="error">
                  <h5>❌ Error:</h5>
                  <pre>{{ error }}</pre>
                </div>
              </div>
            </div>
          </div>

          <!-- Trust Functions -->
          <div class="helper-category">
            <div class="category-header" @click="toggleCategory('trust')">
              <h3>
                <span class="toggle-icon">{{ expandedCategories.trust ? '▼' : '▶' }}</span>
                Trust Functions
              </h3>
            </div>
            <div v-show="expandedCategories.trust" class="category-content">
              <!-- Get Trust -->
              <div class="helper-function">
                <h4>Get Trust (Single)</h4>
                <div class="code-block-wrapper">
                  <CopyButton :content="getTrustCode" />
                  <pre><code>{{ getTrustCode }}</code></pre>
                </div>
                <div class="input-group">
                  <input
v-model="trustUuid" type="text" placeholder="Enter Trust UUID" />
                  <button :disabled="loading || !trustUuid.trim()" @click="executeGetTrust">
                    {{ loading ? 'Executing...' : 'Get Trust' }}
                  </button>
                </div>
                <!-- Result or Error -->
                <div v-if="trustResult"
class="info">
                  <h5>✓ Result:</h5>
                  <div class="code-block-wrapper">
                    <CopyButton :content="JSON.stringify(trustResult, null, 2)" />
                    <pre>{{ JSON.stringify(trustResult, null, 2) }}</pre>
                  </div>
                </div>
                <div v-else-if="error && !loading && errorSource === 'getTrust'"
class="error">
                  <h5>❌ Error:</h5>
                  <pre>{{ error }}</pre>
                </div>
              </div>

            </div>
          </div>

          <!-- Issuer Functions -->
          <div class="helper-category">
            <div class="category-header" @click="toggleCategory('issuer')">
              <h3>
                <span class="toggle-icon">{{ expandedCategories.issuer ? '▼' : '▶' }}</span>
                Issuer Functions
              </h3>
            </div>
            <div v-show="expandedCategories.issuer" class="category-content">
              <!-- Get Issuer -->
              <div class="helper-function">
                <h4>Get Issuer (Single)</h4>
                <div class="code-block-wrapper">
                  <CopyButton :content="getIssuerCode" />
                  <pre><code>{{ getIssuerCode }}</code></pre>
                </div>
                <div class="input-group">
                  <input
v-model="issuerUuid" type="text" placeholder="Enter Issuer UUID" />
                  <button :disabled="loading || !issuerUuid.trim()" @click="executeGetIssuer">
                    {{ loading ? 'Executing...' : 'Get Issuer' }}
                  </button>
                </div>
                <!-- Result or Error -->
                <div v-if="issuerResult"
class="info">
                  <h5>✓ Result:</h5>
                  <div class="code-block-wrapper">
                    <CopyButton :content="JSON.stringify(issuerResult, null, 2)" />
                    <pre>{{ JSON.stringify(issuerResult, null, 2) }}</pre>
                  </div>
                </div>
                <div v-else-if="error && !loading && errorSource === 'getIssuer'"
class="error">
                  <h5>❌ Error:</h5>
                  <pre>{{ error }}</pre>
                </div>
              </div>

              <!-- Get Issuers -->
              <div class="helper-function">
                <h4>Get Issuers (Multiple)</h4>
                <div class="code-block-wrapper">
                  <CopyButton :content="getIssuersCode" />
                  <pre><code>{{ getIssuersCode }}</code></pre>
                </div>
                <div class="input-group">
                  <input
                    v-model="issuerUuids"
                    type="text"
                    placeholder="Enter Issuer UUIDs (comma-separated)"
                  />
                  <button :disabled="loading || !issuerUuids.trim()" @click="executeGetIssuers">
                    {{ loading ? 'Executing...' : 'Get Issuers' }}
                  </button>
                </div>
                <!-- Result or Error -->
                <div v-if="issuersResult"
class="info">
                  <h5>✓ Result:</h5>
                  <div class="code-block-wrapper">
                    <CopyButton :content="JSON.stringify(issuersResult, null, 2)" />
                    <pre>{{ JSON.stringify(issuersResult, null, 2) }}</pre>
                  </div>
                </div>
                <div v-else-if="error && !loading && errorSource === 'getIssuers'"
class="error">
                  <h5>❌ Error:</h5>
                  <pre>{{ error }}</pre>
                </div>
              </div>
            </div>
          </div>

          <!-- Credential Functions -->
          <div class="helper-category">
            <div class="category-header" @click="toggleCategory('credential')">
              <h3>
                <span class="toggle-icon">{{ expandedCategories.credential ? '▼' : '▶' }}</span>
                Credential Functions
              </h3>
            </div>
            <div v-show="expandedCategories.credential" class="category-content">
              <!-- Get Credential -->
              <div class="helper-function">
                <h4>Get Credential (Single)</h4>
                <div class="code-block-wrapper">
                  <CopyButton :content="getCredentialCode" />
                  <pre><code>{{ getCredentialCode }}</code></pre>
                </div>
                <div class="input-group">
                  <input
v-model="credentialUuid" type="text" placeholder="Enter Credential UUID" />
                  <button
                    :disabled="loading || !credentialUuid.trim()"
                    @click="executeGetCredential"
                  >
                    {{ loading ? 'Executing...' : 'Get Credential' }}
                  </button>
                </div>
                <!-- Result or Error -->
                <div v-if="credentialResult"
class="info">
                  <h5>✓ Result:</h5>
                  <div class="code-block-wrapper">
                    <CopyButton :content="JSON.stringify(credentialResult, null, 2)" />
                    <pre>{{ JSON.stringify(credentialResult, null, 2) }}</pre>
                  </div>
                </div>
                <div v-else-if="error && !loading && errorSource === 'getCredential'"
class="error">
                  <h5>❌ Error:</h5>
                  <pre>{{ error }}</pre>
                </div>
              </div>

              <!-- Get Credentials -->
              <div class="helper-function">
                <h4>Get Credentials (Multiple)</h4>
                <div class="code-block-wrapper">
                  <CopyButton :content="getCredentialsCode" />
                  <pre><code>{{ getCredentialsCode }}</code></pre>
                </div>
                <div class="input-group">
                  <input
                    v-model="credentialUuids"
                    type="text"
                    placeholder="Enter Credential UUIDs (comma-separated)"
                  />
                  <button
                    :disabled="loading || !credentialUuids.trim()"
                    @click="executeGetCredentials"
                  >
                    {{ loading ? 'Executing...' : 'Get Credentials' }}
                  </button>
                </div>
                <!-- Result or Error -->
                <div v-if="credentialsResult"
class="info">
                  <h5>✓ Result:</h5>
                  <div class="code-block-wrapper">
                    <CopyButton :content="JSON.stringify(credentialsResult, null, 2)" />
                    <pre>{{ JSON.stringify(credentialsResult, null, 2) }}</pre>
                  </div>
                </div>
                <div
                  v-else-if="error && !loading && errorSource === 'getCredentials'"
                  class="error"
                >
                  <h5>❌ Error:</h5>
                  <pre>{{ error }}</pre>
                </div>
              </div>
            </div>
          </div>

          <!-- Attribute Functions -->
          <div class="helper-category">
            <div class="category-header" @click="toggleCategory('attribute')">
              <h3>
                <span class="toggle-icon">{{ expandedCategories.attribute ? '▼' : '▶' }}</span>
                Attribute Functions
              </h3>
            </div>
            <div v-show="expandedCategories.attribute" class="category-content">
              <!-- Get Attribute -->
              <div class="helper-function">
                <h4>Get Attribute (Single)</h4>
                <div class="code-block-wrapper">
                  <CopyButton :content="getAttributeCode" />
                  <pre><code>{{ getAttributeCode }}</code></pre>
                </div>
                <div class="input-group">
                  <input
v-model="attributeUuid" type="text" placeholder="Enter Attribute UUID" />
                  <button :disabled="loading || !attributeUuid.trim()" @click="executeGetAttribute">
                    {{ loading ? 'Executing...' : 'Get Attribute' }}
                  </button>
                </div>
                <!-- Result or Error -->
                <div v-if="attributeResult"
class="info">
                  <h5>✓ Result:</h5>
                  <div class="code-block-wrapper">
                    <CopyButton :content="JSON.stringify(attributeResult, null, 2)" />
                    <pre>{{ JSON.stringify(attributeResult, null, 2) }}</pre>
                  </div>
                </div>
                <div v-else-if="error && !loading && errorSource === 'getAttribute'"
class="error">
                  <h5>❌ Error:</h5>
                  <pre>{{ error }}</pre>
                </div>
              </div>

              <!-- Get Attributes -->
              <div class="helper-function">
                <h4>Get Attributes (Multiple)</h4>
                <div class="code-block-wrapper">
                  <CopyButton :content="getAttributesCode" />
                  <pre><code>{{ getAttributesCode }}</code></pre>
                </div>
                <div class="input-group">
                  <input
                    v-model="attributeUuids"
                    type="text"
                    placeholder="Enter Attribute UUIDs (comma-separated)"
                  />
                  <button
                    :disabled="loading || !attributeUuids.trim()"
                    @click="executeGetAttributes"
                  >
                    {{ loading ? 'Executing...' : 'Get Attributes' }}
                  </button>
                </div>
                <!-- Result or Error -->
                <div v-if="attributesResult"
class="info">
                  <h5>✓ Result:</h5>
                  <div class="code-block-wrapper">
                    <CopyButton :content="JSON.stringify(attributesResult, null, 2)" />
                    <pre>{{ JSON.stringify(attributesResult, null, 2) }}</pre>
                  </div>
                </div>
                <div v-else-if="error && !loading && errorSource === 'getAttributes'"
class="error">
                  <h5>❌ Error:</h5>
                  <pre>{{ error }}</pre>
                </div>
              </div>

              <!-- Get Attributes With Hierarchy -->
              <div class="helper-function">
                <h4>Get Attributes With Hierarchy (Deep)</h4>
                <div class="code-block-wrapper">
                  <CopyButton :content="getAttributesWithHierarchyCode" />
                  <pre><code>{{ getAttributesWithHierarchyCode }}</code></pre>
                </div>
                <div class="input-group">
                  <input
                    v-model="attributeDeepUuids"
                    type="text"
                    placeholder="Enter Attribute UUIDs (comma-separated)"
                  />
                  <button
                    :disabled="loading || !attributeDeepUuids.trim()"
                    @click="executeGetAttributesWithHierarchy"
                  >
                    {{ loading ? 'Executing...' : 'Get Attributes (Deep)' }}
                  </button>
                </div>
                <!-- Result or Error -->
                <div v-if="attributesDeepResult"
class="info">
                  <h5>✓ Result:</h5>
                  <div class="code-block-wrapper">
                    <CopyButton :content="JSON.stringify(attributesDeepResult, null, 2)" />
                    <pre>{{ JSON.stringify(attributesDeepResult, null, 2) }}</pre>
                  </div>
                </div>
                <div
                  v-else-if="error && !loading && errorSource === 'getAttributesWithHierarchy'"
                  class="error"
                >
                  <h5>❌ Error:</h5>
                  <pre>{{ error }}</pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="clientInitialized" class="section collapsible-section">
      <div class="section-header" @click="toggleSection('customQuery')">
        <h2>
          <span class="toggle-icon">{{ expandedSections.customQuery ? '▼' : '▶' }}</span>
          4. Custom Query
        </h2>
      </div>

      <div v-show="expandedSections.customQuery" class="section-content">
        <div v-if="customQueryResult" class="completed">
          <p>✓ Custom query executed successfully</p>
        </div>
        <p v-else>Write and execute your own GraphQL query.</p>

        <textarea v-model="customQuery" rows="10" placeholder="Enter your GraphQL query here..." />
        <button :disabled="loading || !customQuery.trim()" @click="executeCustomQuery">
          {{ loading ? 'Executing...' : 'Execute Custom Query' }}
        </button>

        <!-- Result or Error -->
        <div v-if="customQueryResult"
class="info">
          <h3>✓ Custom Query Result:</h3>
          <div class="code-block-wrapper">
            <CopyButton :content="JSON.stringify(customQueryResult, null, 2)" />
            <pre>{{ JSON.stringify(customQueryResult, null, 2) }}</pre>
          </div>
        </div>
        <div v-else-if="error && !loading && errorSource === 'customQuery'"
class="error">
          <h5>❌ Error:</h5>
          <pre>{{ error }}</pre>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>How it Works</h2>
      <ol>
        <li>
          <strong>Initialize:</strong> Create a GraphQL client with your endpoint and client
          credentials
        </li>
        <li>
          <strong>Authenticate:</strong> The client automatically handles OAuth2 client credentials
          flow
        </li>
        <li><strong>Query:</strong> Execute GraphQL queries with automatic token management</li>
        <li><strong>Process:</strong> Handle the returned data in your application</li>
      </ol>
    </div>

    <!-- Always visible Start Over button -->
    <div v-if="clientInitialized"
class="section" style="text-align: center">
      <button
class="start-over-btn" @click="startOver">🔄 Start Over</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import CopyButton from '../../components/CopyButton.vue';
import { useGraphQL } from '../../composables/useGraphQL';
import '../../assets/styles.css';

// Use the GraphQL composable - all business logic is in a separate file
const {
  // State
  clientInitialized,
  loading,
  error,
  errorSource,
  queryResult,
  customQuery,
  customQueryResult,
  expandedSections,
  expandedCategories,

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

  // Configuration (for code generation)
  clientConfig,

  // Actions from composable
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
} = useGraphQL();

// UI toggle functions (view-specific)
const toggleSection = (section: 'helperFunctions' | 'customQuery') => {
  expandedSections[section] = !expandedSections[section];
};

const toggleCategory = (
  category: 'handler' | 'trust' | 'issuer' | 'credential' | 'attribute',
) => {
  expandedCategories[category] = !expandedCategories[category];
};

// Code generation functions for UI display only - computed for reactive updates
const getInitCode = computed(() => {
  const configEntries = Object.entries(clientConfig)
    .map(([key, value]) => `  ${key}: '${value}'`)
    .join(',\n');

  return `import { createVeridGraphQLClient } from '@ver-id/graphql-client';

const graphqlClient = createVeridGraphQLClient({
${configEntries}
});`;
});

const queryCode = `import { gql } from '@apollo/client/core';

const EXAMPLE_QUERY = gql\`
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
\`;

const { data } = await graphqlClient.query({
  query: EXAMPLE_QUERY
});`;

// Helper function code examples
const getHandlerCode = `import { getHandler } from '@ver-id/graphql-client';

const handler = await getHandler(
  graphqlClient,
  'handler-uuid-here'
);`;

const getHandlersCode = `import { getHandlers } from '@ver-id/graphql-client';

const handlers = await getHandlers(
  graphqlClient,
  ['uuid-1', 'uuid-2', 'uuid-3']
);`;

const getTrustCode = `import { getTrust } from '@ver-id/graphql-client';

const trust = await getTrust(
  graphqlClient,
  'trust-uuid-here'
);`;

const getIssuerCode = `import { getIssuer } from '@ver-id/graphql-client';

const issuer = await getIssuer(
  graphqlClient,
  'issuer-uuid-here'
);`;

const getIssuersCode = `import { getIssuers } from '@ver-id/graphql-client';

const issuers = await getIssuers(
  graphqlClient,
  ['uuid-1', 'uuid-2', 'uuid-3']
);`;

const getCredentialCode = `import { getCredential } from '@ver-id/graphql-client';

const credential = await getCredential(
  graphqlClient,
  'credential-uuid-here'
);`;

const getCredentialsCode = `import { getCredentials } from '@ver-id/graphql-client';

const credentials = await getCredentials(
  graphqlClient,
  ['uuid-1', 'uuid-2', 'uuid-3']
);`;

const getAttributeCode = `import { getAttribute } from '@ver-id/graphql-client';

const attribute = await getAttribute(
  graphqlClient,
  'attribute-uuid-here'
);`;

const getAttributesCode = `import { getAttributes } from '@ver-id/graphql-client';

const attributes = await getAttributes(
  graphqlClient,
  ['uuid-1', 'uuid-2', 'uuid-3']
);`;

const getAttributesWithHierarchyCode = `import { getAttributesWithHierarchy } from '@ver-id/graphql-client';

// Gets attributes with full parent hierarchy
// (credential, issuer, trust, handler)
const attributesDeep = await getAttributesWithHierarchy(
  graphqlClient,
  ['uuid-1', 'uuid-2', 'uuid-3']
);`
</script>
