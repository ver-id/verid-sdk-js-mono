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

              <!-- Get Trusts -->
              <div class="helper-function">
                <h4>Get Trusts (Multiple)</h4>
                <div class="code-block-wrapper">
                  <CopyButton :content="getTrustsCode" />
                  <pre><code>{{ getTrustsCode }}</code></pre>
                </div>
                <div class="input-group">
                  <input
                    v-model="trustUuids"
                    type="text"
                    placeholder="Enter Trust UUIDs (comma-separated)"
                  />
                  <button :disabled="loading || !trustUuids.trim()" @click="executeGetTrusts">
                    {{ loading ? 'Executing...' : 'Get Trusts' }}
                  </button>
                </div>
                <div v-if="trustsResult"
class="info">
                  <h5>✓ Result:</h5>
                  <div class="code-block-wrapper">
                    <CopyButton :content="JSON.stringify(trustsResult, null, 2)" />
                    <pre>{{ JSON.stringify(trustsResult, null, 2) }}</pre>
                  </div>
                </div>
                <div v-else-if="error && !loading && errorSource === 'getTrusts'"
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

          <!-- Join Table Functions -->
          <div class="helper-category">
            <div class="category-header" @click="toggleCategory('joinTables')">
              <h3>
                <span class="toggle-icon">{{ expandedCategories.joinTables ? '▼' : '▶' }}</span>
                Relationship Functions (Join Tables)
              </h3>
            </div>
            <div v-show="expandedCategories.joinTables" class="category-content">
              <!-- TrustApps by Trust -->
              <div class="helper-function">
                <h4>Get Trust-Apps by Trust UUID</h4>
                <div class="code-block-wrapper">
                  <CopyButton :content="getTrustAppsByTrustCode" />
                  <pre><code>{{ getTrustAppsByTrustCode }}</code></pre>
                </div>
                <div class="input-group">
                  <input v-model="trustAppTrustUuid" type="text" placeholder="Enter Trust UUID" />
                  <button :disabled="loading || !trustAppTrustUuid.trim()" @click="executeGetTrustAppsByTrust">
                    {{ loading ? 'Executing...' : 'Get Trust-Apps' }}
                  </button>
                </div>
                <div v-if="trustAppsByTrustResult" class="info">
                  <h5>✓ Result:</h5>
                  <div class="code-block-wrapper">
                    <CopyButton :content="JSON.stringify(trustAppsByTrustResult, null, 2)" />
                    <pre>{{ JSON.stringify(trustAppsByTrustResult, null, 2) }}</pre>
                  </div>
                </div>
                <div v-else-if="error && !loading && errorSource === 'getTrustAppsByTrust'" class="error">
                  <h5>❌ Error:</h5>
                  <pre>{{ error }}</pre>
                </div>
              </div>

              <!-- TrustApps by App -->
              <div class="helper-function">
                <h4>Get Trust-Apps by App UUID</h4>
                <div class="code-block-wrapper">
                  <CopyButton :content="getTrustAppsByAppCode" />
                  <pre><code>{{ getTrustAppsByAppCode }}</code></pre>
                </div>
                <div class="input-group">
                  <input v-model="trustAppAppUuid" type="text" placeholder="Enter App UUID" />
                  <button :disabled="loading || !trustAppAppUuid.trim()" @click="executeGetTrustAppsByApp">
                    {{ loading ? 'Executing...' : 'Get Trust-Apps' }}
                  </button>
                </div>
                <div v-if="trustAppsByAppResult" class="info">
                  <h5>✓ Result:</h5>
                  <div class="code-block-wrapper">
                    <CopyButton :content="JSON.stringify(trustAppsByAppResult, null, 2)" />
                    <pre>{{ JSON.stringify(trustAppsByAppResult, null, 2) }}</pre>
                  </div>
                </div>
                <div v-else-if="error && !loading && errorSource === 'getTrustAppsByApp'" class="error">
                  <h5>❌ Error:</h5>
                  <pre>{{ error }}</pre>
                </div>
              </div>

              <!-- TrustIssuers by Trust -->
              <div class="helper-function">
                <h4>Get Trust-Issuers by Trust UUID</h4>
                <div class="code-block-wrapper">
                  <CopyButton :content="getTrustIssuersByTrustCode" />
                  <pre><code>{{ getTrustIssuersByTrustCode }}</code></pre>
                </div>
                <div class="input-group">
                  <input v-model="trustIssuerTrustUuid" type="text" placeholder="Enter Trust UUID" />
                  <button :disabled="loading || !trustIssuerTrustUuid.trim()" @click="executeGetTrustIssuersByTrust">
                    {{ loading ? 'Executing...' : 'Get Trust-Issuers' }}
                  </button>
                </div>
                <div v-if="trustIssuersByTrustResult" class="info">
                  <h5>✓ Result:</h5>
                  <div class="code-block-wrapper">
                    <CopyButton :content="JSON.stringify(trustIssuersByTrustResult, null, 2)" />
                    <pre>{{ JSON.stringify(trustIssuersByTrustResult, null, 2) }}</pre>
                  </div>
                </div>
                <div v-else-if="error && !loading && errorSource === 'getTrustIssuersByTrust'" class="error">
                  <h5>❌ Error:</h5>
                  <pre>{{ error }}</pre>
                </div>
              </div>

              <!-- TrustIssuers by Issuer -->
              <div class="helper-function">
                <h4>Get Trust-Issuers by Issuer UUID</h4>
                <div class="code-block-wrapper">
                  <CopyButton :content="getTrustIssuersByIssuerCode" />
                  <pre><code>{{ getTrustIssuersByIssuerCode }}</code></pre>
                </div>
                <div class="input-group">
                  <input v-model="trustIssuerIssuerUuid" type="text" placeholder="Enter Issuer UUID" />
                  <button :disabled="loading || !trustIssuerIssuerUuid.trim()" @click="executeGetTrustIssuersByIssuer">
                    {{ loading ? 'Executing...' : 'Get Trust-Issuers' }}
                  </button>
                </div>
                <div v-if="trustIssuersByIssuerResult" class="info">
                  <h5>✓ Result:</h5>
                  <div class="code-block-wrapper">
                    <CopyButton :content="JSON.stringify(trustIssuersByIssuerResult, null, 2)" />
                    <pre>{{ JSON.stringify(trustIssuersByIssuerResult, null, 2) }}</pre>
                  </div>
                </div>
                <div v-else-if="error && !loading && errorSource === 'getTrustIssuersByIssuer'" class="error">
                  <h5>❌ Error:</h5>
                  <pre>{{ error }}</pre>
                </div>
              </div>

              <!-- CredentialTrustIssuers by Credential -->
              <div class="helper-function">
                <h4>Get Credential-Trust-Issuers by Credential UUID</h4>
                <div class="code-block-wrapper">
                  <CopyButton :content="getCtiByCredentialCode" />
                  <pre><code>{{ getCtiByCredentialCode }}</code></pre>
                </div>
                <div class="input-group">
                  <input v-model="ctiCredentialUuid" type="text" placeholder="Enter Credential UUID" />
                  <button :disabled="loading || !ctiCredentialUuid.trim()" @click="executeGetCtiByCredential">
                    {{ loading ? 'Executing...' : 'Get CTIs' }}
                  </button>
                </div>
                <div v-if="ctiByCredentialResult" class="info">
                  <h5>✓ Result:</h5>
                  <div class="code-block-wrapper">
                    <CopyButton :content="JSON.stringify(ctiByCredentialResult, null, 2)" />
                    <pre>{{ JSON.stringify(ctiByCredentialResult, null, 2) }}</pre>
                  </div>
                </div>
                <div v-else-if="error && !loading && errorSource === 'getCredentialTrustIssuersByCredential'" class="error">
                  <h5>❌ Error:</h5>
                  <pre>{{ error }}</pre>
                </div>
              </div>

              <!-- CredentialTrustIssuers by TrustIssuer -->
              <div class="helper-function">
                <h4>Get Credential-Trust-Issuers by Trust-Issuer UUID</h4>
                <div class="code-block-wrapper">
                  <CopyButton :content="getCtiByTrustIssuerCode" />
                  <pre><code>{{ getCtiByTrustIssuerCode }}</code></pre>
                </div>
                <div class="input-group">
                  <input v-model="ctiTrustIssuerUuid" type="text" placeholder="Enter Trust-Issuer UUID" />
                  <button :disabled="loading || !ctiTrustIssuerUuid.trim()" @click="executeGetCtiByTrustIssuer">
                    {{ loading ? 'Executing...' : 'Get CTIs' }}
                  </button>
                </div>
                <div v-if="ctiByTrustIssuerResult" class="info">
                  <h5>✓ Result:</h5>
                  <div class="code-block-wrapper">
                    <CopyButton :content="JSON.stringify(ctiByTrustIssuerResult, null, 2)" />
                    <pre>{{ JSON.stringify(ctiByTrustIssuerResult, null, 2) }}</pre>
                  </div>
                </div>
                <div v-else-if="error && !loading && errorSource === 'getCredentialTrustIssuersByTrustIssuer'" class="error">
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

  // Configuration (for code generation)
  clientConfig,

  // Actions from composable
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
} = useGraphQL();

// UI toggle functions (view-specific)
const toggleSection = (section: 'helperFunctions' | 'customQuery') => {
  expandedSections[section] = !expandedSections[section];
};

const toggleCategory = (
  category: 'trust' | 'issuer' | 'credential' | 'attribute' | 'joinTables',
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
const getTrustCode = `import { getTrust } from '@ver-id/graphql-client';

const trust = await getTrust(
  graphqlClient,
  'trust-uuid-here'
);`;

const getTrustsCode = `import { getTrusts } from '@ver-id/graphql-client';

const trusts = await getTrusts(
  graphqlClient,
  ['uuid-1', 'uuid-2', 'uuid-3']
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

// Gets attributes with parent credential
const attributesDeep = await getAttributesWithHierarchy(
  graphqlClient,
  ['uuid-1', 'uuid-2', 'uuid-3']
);`;

// Join table code examples
const getTrustAppsByTrustCode = `import { getTrustAppsByTrust } from '@ver-id/graphql-client';

const trustApps = await getTrustAppsByTrust(
  graphqlClient,
  'trust-uuid-here'
);`;

const getTrustAppsByAppCode = `import { getTrustAppsByApp } from '@ver-id/graphql-client';

const trustApps = await getTrustAppsByApp(
  graphqlClient,
  'app-uuid-here'
);`;

const getTrustIssuersByTrustCode = `import { getTrustIssuersByTrust } from '@ver-id/graphql-client';

const trustIssuers = await getTrustIssuersByTrust(
  graphqlClient,
  'trust-uuid-here'
);`;

const getTrustIssuersByIssuerCode = `import { getTrustIssuersByIssuer } from '@ver-id/graphql-client';

const trustIssuers = await getTrustIssuersByIssuer(
  graphqlClient,
  'issuer-uuid-here'
);`;

const getCtiByCredentialCode = `import { getCredentialTrustIssuersByCredential } from '@ver-id/graphql-client';

const cti = await getCredentialTrustIssuersByCredential(
  graphqlClient,
  'credential-uuid-here'
);`;

const getCtiByTrustIssuerCode = `import { getCredentialTrustIssuersByTrustIssuer } from '@ver-id/graphql-client';

const cti = await getCredentialTrustIssuersByTrustIssuer(
  graphqlClient,
  'trust-issuer-uuid-here'
);`;
</script>
