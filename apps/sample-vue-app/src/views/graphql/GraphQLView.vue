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
      
      <!-- Configuration Form -->
      <form v-if="!clientInitialized" @submit.prevent="initializeClient" class="config-form">
        <div class="form-group">
          <label for="endpoint">GraphQL Endpoint:</label>
          <input
            id="endpoint"
            v-model="clientConfig.endpoint"
            type="text"
            placeholder="https://api.ver.id/graphql"
            required
          >
        </div>

        <div class="form-group">
          <label for="authorizationServer">Authorization Server:</label>
          <input
            id="authorizationServer"
            v-model="clientConfig.authorizationServer"
            type="text"
            placeholder="https://auth.ver.id"
            required
          >
        </div>

        <div class="form-group">
          <label for="clientId">Client ID:</label>
          <input
            id="clientId"
            v-model="clientConfig.clientId"
            type="text"
            placeholder="your-client-id"
            required
          >
        </div>

        <div class="form-group">
          <label for="clientSecret">Client Secret:</label>
          <input
            id="clientSecret"
            v-model="clientConfig.clientSecret"
            type="password"
            placeholder="your-client-secret"
            required
          >
        </div>

        <button type="submit">Initialize Client</button>
      </form>

      <!-- Code example - always visible to show configuration -->
      <div class="code-block-wrapper">
        <CopyButton :content="getInitCode" />
        <pre><code>{{ getInitCode }}</code></pre>
      </div>
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
          <!-- Provider Functions -->
          <div class="helper-category">
            <div class="category-header" @click="toggleCategory('provider')">
              <h3>
                <span class="toggle-icon">{{ expandedCategories.provider ? '▼' : '▶' }}</span>
                Provider Functions
              </h3>
            </div>
            <div v-show="expandedCategories.provider" class="category-content">
              <!-- Get Provider -->
              <div class="helper-function">
                <h4>Get Provider (Single)</h4>
                <div class="code-block-wrapper">
                  <CopyButton :content="getProviderCode" />
                  <pre><code>{{ getProviderCode }}</code></pre>
                </div>
                <div class="input-group">
                  <input
v-model="providerUuid" type="text" placeholder="Enter Provider UUID" />
                  <button :disabled="loading || !providerUuid.trim()" @click="executeGetProvider">
                    {{ loading ? 'Executing...' : 'Get Provider' }}
                  </button>
                </div>
                <!-- Result or Error -->
                <div v-if="providerResult"
class="info">
                  <h5>✓ Result:</h5>
                  <div class="code-block-wrapper">
                    <CopyButton :content="JSON.stringify(providerResult, null, 2)" />
                    <pre>{{ JSON.stringify(providerResult, null, 2) }}</pre>
                  </div>
                </div>
                <div v-else-if="error && !loading && errorSource === 'getProvider'"
class="error">
                  <h5>❌ Error:</h5>
                  <pre>{{ error }}</pre>
                </div>
              </div>

              <!-- Get Providers -->
              <div class="helper-function">
                <h4>Get Providers (Multiple)</h4>
                <div class="code-block-wrapper">
                  <CopyButton :content="getProvidersCode" />
                  <pre><code>{{ getProvidersCode }}</code></pre>
                </div>
                <div class="input-group">
                  <input
                    v-model="providerUuids"
                    type="text"
                    placeholder="Enter Provider UUIDs (comma-separated)"
                  />
                  <button :disabled="loading || !providerUuids.trim()" @click="executeGetProviders">
                    {{ loading ? 'Executing...' : 'Get Providers' }}
                  </button>
                </div>
                <!-- Result or Error -->
                <div v-if="providersResult"
class="info">
                  <h5>✓ Result:</h5>
                  <div class="code-block-wrapper">
                    <CopyButton :content="JSON.stringify(providersResult, null, 2)" />
                    <pre>{{ JSON.stringify(providersResult, null, 2) }}</pre>
                  </div>
                </div>
                <div v-else-if="error && !loading && errorSource === 'getProviders'"
class="error">
                  <h5>❌ Error:</h5>
                  <pre>{{ error }}</pre>
                </div>
              </div>
            </div>
          </div>

          <!-- Scheme Functions -->
          <div class="helper-category">
            <div class="category-header" @click="toggleCategory('scheme')">
              <h3>
                <span class="toggle-icon">{{ expandedCategories.scheme ? '▼' : '▶' }}</span>
                Scheme Functions
              </h3>
            </div>
            <div v-show="expandedCategories.scheme" class="category-content">
              <!-- Get Scheme -->
              <div class="helper-function">
                <h4>Get Scheme (Single)</h4>
                <div class="code-block-wrapper">
                  <CopyButton :content="getSchemeCode" />
                  <pre><code>{{ getSchemeCode }}</code></pre>
                </div>
                <div class="input-group">
                  <input
v-model="schemeUuid" type="text" placeholder="Enter Scheme UUID" />
                  <button :disabled="loading || !schemeUuid.trim()" @click="executeGetScheme">
                    {{ loading ? 'Executing...' : 'Get Scheme' }}
                  </button>
                </div>
                <!-- Result or Error -->
                <div v-if="schemeResult"
class="info">
                  <h5>✓ Result:</h5>
                  <div class="code-block-wrapper">
                    <CopyButton :content="JSON.stringify(schemeResult, null, 2)" />
                    <pre>{{ JSON.stringify(schemeResult, null, 2) }}</pre>
                  </div>
                </div>
                <div v-else-if="error && !loading && errorSource === 'getScheme'"
class="error">
                  <h5>❌ Error:</h5>
                  <pre>{{ error }}</pre>
                </div>
              </div>

              <!-- Get Schemes -->
              <div class="helper-function">
                <h4>Get Schemes (Multiple)</h4>
                <div class="code-block-wrapper">
                  <CopyButton :content="getSchemesCode" />
                  <pre><code>{{ getSchemesCode }}</code></pre>
                </div>
                <div class="input-group">
                  <input
                    v-model="schemeUuids"
                    type="text"
                    placeholder="Enter Scheme UUIDs (comma-separated)"
                  />
                  <button :disabled="loading || !schemeUuids.trim()" @click="executeGetSchemes">
                    {{ loading ? 'Executing...' : 'Get Schemes' }}
                  </button>
                </div>
                <!-- Result or Error -->
                <div v-if="schemesResult"
class="info">
                  <h5>✓ Result:</h5>
                  <div class="code-block-wrapper">
                    <CopyButton :content="JSON.stringify(schemesResult, null, 2)" />
                    <pre>{{ JSON.stringify(schemesResult, null, 2) }}</pre>
                  </div>
                </div>
                <div v-else-if="error && !loading && errorSource === 'getSchemes'"
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
  showConfigForm,
  expandedSections,
  expandedCategories,

  // Helper states - Single
  providerUuid,
  providerResult,
  schemeUuid,
  schemeResult,
  issuerUuid,
  issuerResult,
  credentialUuid,
  credentialResult,
  attributeUuid,
  attributeResult,

  // Helper states - Multiple
  providerUuids,
  providersResult,
  schemeUuids,
  schemesResult,
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
  executeGetProvider,
  executeGetScheme,
  executeGetIssuer,
  executeGetCredential,
  executeGetAttribute,
  executeGetProviders,
  executeGetSchemes,
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
  category: 'provider' | 'scheme' | 'issuer' | 'credential' | 'attribute',
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
  query FindMe {
    findMe {
      uuid
      user {
        email
      }
      organization {
        name
      }
      createdAt
    }
  }
\`;

const { data } = await graphqlClient.query({ 
  query: EXAMPLE_QUERY 
});`;

// Helper function code examples
const getProviderCode = `import { getProvider } from '@ver-id/graphql-client';

const provider = await getProvider(
  graphqlClient,
  'provider-uuid-here'
);

console.log(provider);`;

const getProvidersCode = `import { getProviders } from '@ver-id/graphql-client';

const providers = await getProviders(
  graphqlClient,
  ['uuid-1', 'uuid-2', 'uuid-3']
);

console.log(providers);`;

const getSchemeCode = `import { getScheme } from '@ver-id/graphql-client';

const scheme = await getScheme(
  graphqlClient,
  'scheme-uuid-here'
);

console.log(scheme);`;

const getSchemesCode = `import { getSchemes } from '@ver-id/graphql-client';

const schemes = await getSchemes(
  graphqlClient,
  ['uuid-1', 'uuid-2', 'uuid-3']
);

console.log(schemes);`;

const getIssuerCode = `import { getIssuer } from '@ver-id/graphql-client';

const issuer = await getIssuer(
  graphqlClient,
  'issuer-uuid-here'
);

console.log(issuer);`;

const getIssuersCode = `import { getIssuers } from '@ver-id/graphql-client';

const issuers = await getIssuers(
  graphqlClient,
  ['uuid-1', 'uuid-2', 'uuid-3']
);

console.log(issuers);`;

const getCredentialCode = `import { getCredential } from '@ver-id/graphql-client';

const credential = await getCredential(
  graphqlClient,
  'credential-uuid-here'
);

console.log(credential);`;

const getCredentialsCode = `import { getCredentials } from '@ver-id/graphql-client';

const credentials = await getCredentials(
  graphqlClient,
  ['uuid-1', 'uuid-2', 'uuid-3']
);

console.log(credentials);`;

const getAttributeCode = `import { getAttribute } from '@ver-id/graphql-client';

const attribute = await getAttribute(
  graphqlClient,
  'attribute-uuid-here'
);

console.log(attribute);`;

const getAttributesCode = `import { getAttributes } from '@ver-id/graphql-client';

const attributes = await getAttributes(
  graphqlClient,
  ['uuid-1', 'uuid-2', 'uuid-3']
);

console.log(attributes);`;

const getAttributesWithHierarchyCode = `import { getAttributesWithHierarchy } from '@ver-id/graphql-client';

// Gets attributes with full parent hierarchy
// (credential, issuer, scheme, provider)
const attributesDeep = await getAttributesWithHierarchy(
  graphqlClient,
  ['uuid-1', 'uuid-2', 'uuid-3']
);

console.log(attributesDeep);`;
</script>
