<template>
  <div class="auth-container">
    <h1>Node.js Issuance</h1>
    <p class="description">
      This page demonstrates how to use the @ver-id/node-client SDK for OpenID Connect issuance.
      <strong>Note: Intent creation is MANDATORY for issuance flow.</strong>
    </p>

    <div>
      <div class="section">
        <h2>1. Configure & Initialize Client</h2>

        <div
          v-if="clientInitialized"
          class="completed"
        >
          <p>✓ Client has been initialized on the server</p>
        </div>
      
        <!-- Configuration Form -->
        <div
          v-if="showConfigForm"
          class="config-form"
        >
          <h3>Client Configuration</h3>
          <div class="form-group">
            <label for="issuerUri">API URL:</label>
            <input
              id="issuerUri"
              v-model="clientConfig.issuerUri"
              type="text"
              placeholder="https://api.ver.id"
            >
          </div>
          <div class="form-group">
            <label for="client_id">Issuance Flow ID:</label>
            <input
              id="client_id"
              v-model="clientConfig.client_id"
              type="text"
              placeholder="issuance_flow_123"
            >
          </div>
          <div class="form-group">
            <label for="redirectUri">Redirect URI:</label>
            <input
              id="redirectUri"
              v-model="clientConfig.redirectUri"
              type="text"
              placeholder="http://localhost:3000/api/issuance/callback"
            >
            <small>This is where the OAuth provider will redirect back after issuance</small>
          </div>
        </div>

        <p v-if="!clientInitialized && !showConfigForm">
          First, initialize the issuance client with your configuration on the Node.js server.
          Configuration can be set using environment variables in the node server or passed through this form.
        </p>

        <button
          v-if="!clientInitialized"
          class="btn-secondary"
          @click="toggleConfigForm"
        >
          {{ showConfigForm ? 'Hide' : 'Show' }} Configuration
        </button>
        <button
          v-if="!clientInitialized"
          class="btn-primary"
          @click="initializeClient"
        >
          Initialize Client on Server
        </button>

        <!-- Code Example -->
        <div
          v-if="initCodeSnippet"
          class="code-example"
        >
          <h3>Server-Side Code Executed:</h3>
          <pre><code>{{ initCodeSnippet }}</code></pre>
        </div>
      </div>

      <!-- Step 2: Generate Code Challenge (MANDATORY) -->
      <div
        v-if="clientInitialized && !codeChallenge"
        class="section"
      >
        <h2>2. Generate Code Challenge (Required)</h2>

        <p>
          Generate a PKCE code challenge and state on the server. This is required for the issuance intent:
        </p>

        <button
          type="button"
          :disabled="loading"
          @click="generateCodeChallenge"
        >
          {{ loading ? 'Generating...' : 'Generate Code Challenge' }}
        </button>

        <!-- Code Example -->
        <div
          v-if="codeChallengeCodeSnippet"
          class="code-example"
        >
          <h3>Server-Side Code Executed:</h3>
          <pre><code>{{ codeChallengeCodeSnippet }}</code></pre>
        </div>
      </div>

      <!-- Step 2b: Show Generated Code Challenge -->
      <div
        v-if="codeChallenge && !intentCreated"
        class="section"
      >
        <h2>2. Code Challenge Generated ✓</h2>

        <div class="completed">
          <p><strong>Code Challenge:</strong></p>
          <pre style="background: #f5f5f5; padding: 10px; border-radius: 4px; overflow-x: auto;">{{ codeChallenge }}</pre>
          <p style="margin-top: 10px;">
            <strong>State:</strong>
          </p>
          <pre style="background: #f5f5f5; padding: 10px; border-radius: 4px; overflow-x: auto;">{{ state }}</pre>
        </div>
      </div>

      <!-- Step 3: Create Intent (MANDATORY) -->
      <div
        v-if="codeChallenge && !intentCreated"
        class="section"
      >
        <h2>3. Create Issuance Intent (Required)</h2>

        <p>
          Create an issuance intent on the server. This is MANDATORY for the issuance flow. You can optionally provide a custom challenge and brandUuid:
        </p>

        <div class="config-form">
          <h3>Intent Configuration</h3>
          
          <div class="form-group">
            <label>Payload Type:</label>
            <div class="radio-group">
              <label class="radio-label">
                <input
                  v-model="payloadType"
                  type="radio"
                  value="mapping"
                  name="payloadType"
                >
                <span>Mapping (Object)</span>
              </label>
              <label class="radio-label">
                <input
                  v-model="payloadType"
                  type="radio"
                  value="data"
                  name="payloadType"
                >
                <span>Data (Array)</span>
              </label>
            </div>
          </div>

          <div
            v-if="payloadType === 'mapping'"
            class="form-group"
          >
            <label for="payloadMapping">Payload Mapping (JSON Object):</label>
            <JsonEditor
              v-model="payloadMappingJson"
              height="150px"
              placeholder="{}"
            />
            <small style="color: #666;">Key-value pairs for payload mapping</small>
          </div>

          <div
            v-if="payloadType === 'data'"
            class="form-group"
          >
            <label for="payloadData">Payload Data (JSON Array):</label>
            <JsonEditor
              v-model="payloadDataJson"
              height="200px"
              placeholder="[]"
            />
            <small style="color: #666;">Array of data items with attributeUuid and value</small>
          </div>

          <h4 style="margin-top: 1.5rem; margin-bottom: 1rem;">
            Optional Parameters
          </h4>
          
          <div class="form-group">
            <label>Require Explicit Consent (Optional):</label>
            <div>
              <label style="margin-right: 15px; font-weight: normal;">
                <input
                  v-model="intentOptions.requireExplicitConsent"
                  type="radio"
                  :value="true"
                >
                True
              </label>
              <label style="font-weight: normal;">
                <input
                  v-model="intentOptions.requireExplicitConsent"
                  type="radio"
                  :value="false"
                >
                False
              </label>
            </div>
            <small style="color: #666;">Force user to explicitly consent during issuance</small>
          </div>
          
          <div class="form-group">
            <label for="challenge">Challenge (Optional):</label>
            <input
              id="challenge"
              v-model="intentOptions.challenge"
              type="text"
              placeholder="custom-challenge-string"
            >
            <small style="color: #666;">Custom challenge for additional security</small>
          </div>
          <div class="form-group">
            <label for="brandUuid">Brand UUID (Optional):</label>
            <input
              id="brandUuid"
              v-model="intentOptions.brandUuid"
              type="text"
              placeholder="brand-uuid-123"
            >
            <small style="color: #666;">Brand-specific customization</small>
          </div>
        </div>

        <button
          type="button"
          :disabled="loading"
          @click="createIntent"
        >
          {{ loading ? 'Creating Intent...' : 'Create Intent' }}
        </button>

        <!-- Code Example -->
        <div
          v-if="createIntentCodeSnippet"
          class="code-example"
        >
          <h3>Server-Side Code Executed:</h3>
          <pre><code>{{ createIntentCodeSnippet }}</code></pre>
        </div>
      </div>

      <!-- Step 4: Intent Created -->
      <div
        v-if="intentCreated"
        class="section"
      >
        <h2>4. Intent Created Successfully ✓</h2>

        <div class="completed">
          <p><strong>Intent ID:</strong></p>
          <pre style="background: #f5f5f5; padding: 10px; border-radius: 4px; overflow-x: auto;">{{ intentId }}</pre>
        </div>
      </div>

      <!-- Step 5: Generate Issuance URL -->
      <div
        v-if="intentCreated"
        class="section"
      >
        <h2>5. Generate Issuance URL</h2>
      
        <div
          v-if="issuanceUrl"
          class="completed"
        >
          <p>✓ Issuance URL has been generated successfully</p>
        </div>

        <p v-if="!issuanceUrl">
          Generate the issuance URL with the intent ID and PKCE parameters.
        </p>

        <button
          v-if="!issuanceUrl"
          class="btn-primary"
          :disabled="loading"
          @click="generateUrl"
        >
          {{ loading ? 'Generating...' : 'Generate Issuance URL' }}
        </button>

        <div
          v-if="issuanceUrl"
          class="info"
        >
          <h3>Generated Issuance URL:</h3>
          <pre>{{ issuanceUrl }}</pre>
          <p class="note">
            This URL contains the PKCE code challenge and state parameter. Click below to redirect to the authorization server.
            <br>
            <strong>Note:</strong> Generated URL does not contain any sensitive information. Hence, the redirection can be performed in the browser or server depending on your application architecture.
          </p>
          <button @click="redirectToAuth">
            Redirect to Authorization Server →
          </button>
        </div>

        <!-- Code Example -->
        <div
          v-if="generateUrlCodeSnippet"
          class="code-example"
        >
          <h3>Server-Side Code Executed:</h3>
          <pre><code>{{ generateUrlCodeSnippet }}</code></pre>
        </div>
      </div>
    </div>

    <div
      v-if="error"
      class="section error-section"
    >
      <h2>❌ Error</h2>
      <div class="error">
        <pre>{{ error }}</pre>
      </div>
      <button
        class="start-over-btn"
        @click="resetClient"
      >
        Try Again
      </button>
    </div>

    <div class="section">
      <h2>How it Works</h2>
      <ol>
        <li>
          <strong>Initialize:</strong> Create a VeridIssuanceClient on the Node.js server with your configuration
        </li>
        <li>
          <strong>Code Challenge:</strong> Generate PKCE code challenge and state (required)
        </li>
        <li>
          <strong>Create Intent:</strong> Create an issuance intent (MANDATORY for issuance)
        </li>
        <li>
          <strong>Generate URL:</strong> Server generates an issuance URL with intent and PKCE parameters
        </li>
        <li>
          <strong>Redirect:</strong> User is redirected to the authorization server via browser
        </li>
        <li>
          <strong>Callback:</strong> Authorization server redirects back to your Node.js server
        </li>
        <li>
          <strong>Finalize:</strong> Server exchanges the authorization code for access token
        </li>
      </ol>
    </div>

    <!-- Always visible Start Over button -->
    <div
      v-if="clientInitialized"
      class="section"
      style="text-align: center"
    >
      <button
        class="start-over-btn"
        @click="resetClient"
      >
        🔄 Start Over
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import JsonEditor from '../../../components/JsonEditor.vue';
import '../../../assets/init-styles.css';
import '../../../assets/issuance-styles.css';

const API_URL = `${import.meta.env.VITE_NODE_SERVER_URL}/api`;

const clientInitialized = ref(false);
const showConfigForm = ref(false);
const issuanceUrl = ref('');
const error = ref('');

const clientConfig = ref({
  issuerUri: '',
  client_id: '',
  redirectUri: '',
});

// Intent-related state (mandatory for issuance)
const codeChallenge = ref('');
const state = ref('');
const intentId = ref('');
const intentCreated = ref(false);
const loading = ref(false);
const intentOptions = ref({
  challenge: '',
  brandUuid: '',
  requireExplicitConsent: undefined,
  payload: {
    mapping: {} as Record<string, unknown>,
    data: [] as Array<{
      attributeUuid: string;
      value: unknown;
    }>,
  },
});

// JSON string representations for textarea fields
const payloadMappingJson = ref('{}');
const payloadDataJson = ref('[]');
const payloadType = ref<'mapping' | 'data'>('mapping');

// Watch and parse JSON inputs, but only update the selected type
watch(payloadMappingJson, (newVal) => {
  if (payloadType.value !== 'mapping') return;
  try {
    intentOptions.value.payload.mapping = JSON.parse(newVal);
    intentOptions.value.payload.data = undefined as any;
  } catch (e) {
    // Invalid JSON, keep previous value
  }
});

watch(payloadDataJson, (newVal) => {
  if (payloadType.value !== 'data') return;
  try {
    intentOptions.value.payload.data = JSON.parse(newVal);
    intentOptions.value.payload.mapping = undefined as any;
  } catch (e) {
    // Invalid JSON, keep previous value
  }
});

// Watch payload type changes to clear the other option
watch(payloadType, (newType) => {
  if (newType === 'mapping') {
    intentOptions.value.payload.data = undefined as any;
    payloadDataJson.value = '[]';
  } else {
    intentOptions.value.payload.mapping = undefined as any;
    payloadMappingJson.value = '{}';
  }
});

const initCodeSnippet = ref('');
const generateUrlCodeSnippet = ref('');
const codeChallengeCodeSnippet = ref('');
const createIntentCodeSnippet = ref('');

const toggleConfigForm = () => {
  showConfigForm.value = !showConfigForm.value;
};

const initializeClient = async () => {
  error.value = '';
  try {
    const response = await fetch(`${API_URL}/issuance/initialize`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(clientConfig.value),
    });

    const data = await response.json();

    if (!data.success) {
      error.value = data.error || 'Failed to initialize client';
      return;
    }

    clientInitialized.value = true;
    initCodeSnippet.value = data.code;
    showConfigForm.value = false;
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Unknown error occurred';
  }
};

const generateCodeChallenge = async () => {
  error.value = '';
  loading.value = true;
  try {
    const response = await fetch(`${API_URL}/issuance/generate-code-challenge`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (!data.success) {
      error.value = data.error || 'Failed to generate code challenge';
      return;
    }

    codeChallenge.value = data.codeChallenge;
    state.value = data.state;
    codeChallengeCodeSnippet.value = data.code;
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Unknown error occurred';
  } finally {
    loading.value = false;
  }
};

const createIntent = async () => {
  error.value = '';
  loading.value = true;
  try {
    const payload: { 
      challenge?: string; 
      brandUuid?: string;
      requireExplicitConsent?: boolean;
      payload: {
        mapping?: Record<string, unknown>;
        data?: Array<{
          attributeUuid: string;
          value: unknown;
        }>;
      };
    } = {
      payload: {
        mapping: intentOptions.value.payload.mapping,
        data: intentOptions.value.payload.data,
      },
    };
    
    if (intentOptions.value.challenge) {
      payload.challenge = intentOptions.value.challenge;
    }
    if (intentOptions.value.brandUuid) {
      payload.brandUuid = intentOptions.value.brandUuid;
    }
    if (intentOptions.value.requireExplicitConsent !== undefined) {
      payload.requireExplicitConsent = intentOptions.value.requireExplicitConsent;
    }

    const response = await fetch(`${API_URL}/issuance/create-intent`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!data.success) {
      error.value = data.error || 'Failed to create intent';
      return;
    }

    intentId.value = data.intentId;
    intentCreated.value = true;
    createIntentCodeSnippet.value = data.code;
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Unknown error occurred';
  } finally {
    loading.value = false;
  }
};

const generateUrl = async () => {
  error.value = '';
  loading.value = true;
  try {
    const response = await fetch(`${API_URL}/issuance/generate-url`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (!data.success) {
      error.value = data.error || 'Failed to generate issuance URL';
      return;
    }

    issuanceUrl.value = data.issuanceUrl;
    generateUrlCodeSnippet.value = data.code;
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Unknown error occurred';
  } finally {
    loading.value = false;
  }
};

const redirectToAuth = () => {
  if (!issuanceUrl.value) return;
  
  // Redirect to the issuance URL in the same window
  window.location.href = issuanceUrl.value;
};

const resetClient = () => {
  // Reset all state to initial values
  clientInitialized.value = false;
  issuanceUrl.value = '';
  initCodeSnippet.value = '';
  generateUrlCodeSnippet.value = '';
  error.value = '';
  showConfigForm.value = false;
  
  // Reset intent-related state
  codeChallenge.value = '';
  state.value = '';
  intentId.value = '';
  intentCreated.value = false;
  loading.value = false;
  codeChallengeCodeSnippet.value = '';
  createIntentCodeSnippet.value = '';
  intentOptions.value = {
    challenge: '',
    brandUuid: '',
    requireExplicitConsent: undefined,
    payload: {
      mapping: {},
      data: [],
    },
  };
  payloadMappingJson.value = '{}';
  payloadDataJson.value = '[]';
  payloadType.value = 'mapping';
  
  // Reset config to defaults
  clientConfig.value = {
    issuerUri: '',
    client_id: '',
    redirectUri: '',
  };
};
</script>
