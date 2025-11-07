<template>
  <div class="auth-container">
    <h1>Node.js Disclosure</h1>
    <p class="description">
      This page demonstrates how to use the @ver-id/node-client SDK for OpenID Connect disclosure.
    </p>

    <!-- Show steps 1 and 2 only if token is not decoded yet -->
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
          <label for="client_id">Disclosure Flow ID:</label>
          <input
            id="client_id"
            v-model="clientConfig.client_id"
            type="text"
            placeholder="disclosure_flow_123"
          >
        </div>
        <div class="form-group">
          <label for="redirectUri">Redirect URI:</label>
          <input
            id="redirectUri"
            v-model="clientConfig.redirectUri"
            type="text"
            placeholder="http://localhost:3000/api/disclosure/callback"
          >
          <small>This is where the OAuth provider will redirect back after disclosure</small>
        </div>
      </div>

      <p v-if="!clientInitialized && !showConfigForm">
        First, initialize the disclosure client with your configuration on the Node.js server.
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

    <!-- Optional Intent Section (shown after client initialization) -->
    <div
      v-if="clientInitialized && !useIntent && !disclosureUrl"
      class="section"
    >
      <h3>Optional: Use Intent-based Flow</h3>
      <p style="color: #666; margin-bottom: 15px;">
        You can optionally create a disclosure intent first for advanced customization (custom challenge, brandUuid, requireExplicitConsent).
        Otherwise, continue below to generate the disclosure URL directly.
      </p>
      <button
        type="button"
        class="secondary-btn"
        @click="enableIntentFlow"
      >
        Create Intent (Optional)
      </button>
    </div>

    <!-- Step 2a: Generate Code Challenge -->
    <div
      v-if="useIntent && !codeChallenge"
      class="section"
    >
      <h2>2. Generate Code Challenge</h2>

      <p>
        First, generate a PKCE code challenge and state on the server. This will be used for the intent creation:
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
        <p style="margin-top: 10px;"><strong>State:</strong></p>
        <pre style="background: #f5f5f5; padding: 10px; border-radius: 4px; overflow-x: auto;">{{ state }}</pre>
      </div>
    </div>

    <!-- Step 3: Create Intent -->
    <div
      v-if="codeChallenge && !intentCreated"
      class="section"
    >
      <h2>3. Create Disclosure Intent</h2>

      <p>
        Now create a disclosure intent on the server using the code challenge. You can optionally provide a custom challenge, brandUuid, and requireExplicitConsent:
      </p>

      <div class="config-form">
        <h3>Intent Configuration (Optional Parameters)</h3>
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
        <div class="form-group">
          <label>
            <input
              type="checkbox"
              v-model="intentOptions.useRequireExplicitConsent"
            >
            Include Require Explicit Consent
          </label>
          <small style="color: #666;">Add requireExplicitConsent parameter to the intent</small>
        </div>
        <div
          v-if="intentOptions.useRequireExplicitConsent"
          class="form-group"
          style="margin-left: 20px;"
        >
          <label>Require Explicit Consent Value:</label>
          <div>
            <label style="margin-right: 15px;">
              <input
                type="radio"
                :value="true"
                v-model="intentOptions.requireExplicitConsent"
              >
              True
            </label>
            <label>
              <input
                type="radio"
                :value="false"
                v-model="intentOptions.requireExplicitConsent"
              >
              False
            </label>
          </div>
          <small style="color: #666;">Force the user to explicitly consent to the disclosure (true) or not (false)</small>
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
      <h2>{{ useIntent ? '4' : '2' }}. Intent Created Successfully ✓</h2>

      <div class="completed">
        <p><strong>Intent ID:</strong></p>
        <pre style="background: #f5f5f5; padding: 10px; border-radius: 4px; overflow-x: auto;">{{ intentId }}</pre>
      </div>
    </div>

    <div
      v-if="(clientInitialized && !useIntent) || intentCreated"
      class="section"
    >
      <h2>{{ useIntent ? '5' : '2' }}. Generate Disclosure URL</h2>
      
      <div
        v-if="disclosureUrl"
        class="completed"
      >
        <p>✓ Disclosure URL has been generated successfully</p>
      </div>

      <p v-if="!disclosureUrl">
        Generate the disclosure URL with PKCE challenge.
      </p>

      <button
        v-if="!disclosureUrl"
        class="btn-primary"
        :disabled="loading"
        @click="generateUrl"
      >
        {{ loading ? 'Generating...' : 'Generate Disclosure URL' }}
      </button>

      <div
        v-if="disclosureUrl"
        class="info"
      >
        <h3>Generated Auth URL:</h3>
        <pre>{{ disclosureUrl }}</pre>
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
          <strong>Initialize:</strong> Create a VeridDisclosureClient on the Node.js server with your configuration
        </li>
        <li>
          <strong>Generate URL:</strong> Server generates an disclosure URL with PKCE and state parameter
        </li>
        <li>
          <strong>Redirect:</strong> User is redirected to the authorization server via browser
        </li>
        <li>
          <strong>Callback:</strong> Authorization server redirects back to your Node.js server
        </li>
        <li>
          <strong>Finalize:</strong> Server exchanges the authorization code for tokens
        </li>
        <li>
          <strong>Decode:</strong> Server decodes and verifies the ID token to get user claims
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
import { ref, onMounted } from 'vue';
import '../../../assets/init-styles.css';

const API_URL = `${import.meta.env.VITE_NODE_SERVER_URL}/api`;

const clientInitialized = ref(false);
const showConfigForm = ref(false);
const disclosureUrl = ref('');
const error = ref('');

const clientConfig = ref({
  issuerUri: '',
  client_id: '',
  redirectUri: '',
});

// Intent-related state
const useIntent = ref(false);
const codeChallenge = ref('');
const state = ref('');
const intentId = ref('');
const intentCreated = ref(false);
const loading = ref(false);
const intentOptions = ref({
  challenge: '',
  brandUuid: '',
  useRequireExplicitConsent: false,
  requireExplicitConsent: true,
});

const initCodeSnippet = ref('');
const generateUrlCodeSnippet = ref('');
const decodeCodeSnippet = ref('');
const decodedToken = ref<any>(null);
const codeChallengeCodeSnippet = ref('');
const createIntentCodeSnippet = ref('');

// No state restoration needed - each flow is independent
onMounted(() => {
  // Fresh start each time
});

const toggleConfigForm = () => {
  showConfigForm.value = !showConfigForm.value;
};

const initializeClient = async () => {
  error.value = '';
  try {
    const response = await fetch(`${API_URL}/disclosure/initialize`, {
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

const enableIntentFlow = () => {
  useIntent.value = true;
};

const generateCodeChallenge = async () => {
  error.value = '';
  loading.value = true;
  try {
    const response = await fetch(`${API_URL}/disclosure/generate-code-challenge`, {
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
    const payload: any = {};
    
    if (intentOptions.value.challenge) {
      payload.challenge = intentOptions.value.challenge;
    }
    if (intentOptions.value.brandUuid) {
      payload.brandUuid = intentOptions.value.brandUuid;
    }
    if (intentOptions.value.useRequireExplicitConsent) {
      payload.requireExplicitConsent = intentOptions.value.requireExplicitConsent;
    }

    const response = await fetch(`${API_URL}/disclosure/create-intent`, {
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
    const response = await fetch(`${API_URL}/disclosure/generate-url`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (!data.success) {
      error.value = data.error || 'Failed to generate disclosure URL';
      return;
    }

    disclosureUrl.value = data.disclosureUrl;
    generateUrlCodeSnippet.value = data.code;
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Unknown error occurred';
  } finally {
    loading.value = false;
  }
};

const redirectToAuth = () => {
  if (!disclosureUrl.value) return;
  
  // Redirect to the disclosure URL in the same window
  window.location.href = disclosureUrl.value;
};

const resetClient = () => {
  // Reset all state to initial values
  clientInitialized.value = false;
  disclosureUrl.value = '';
  initCodeSnippet.value = '';
  generateUrlCodeSnippet.value = '';
  decodedToken.value = null;
  decodeCodeSnippet.value = '';
  error.value = '';
  showConfigForm.value = false;
  
  // Reset intent-related state
  useIntent.value = false;
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
    useRequireExplicitConsent: false,
    requireExplicitConsent: true,
  };
  
  // Reset config to defaults
  clientConfig.value = {
    issuerUri: '',
    client_id: '',
    redirectUri: '',
  };
};
</script>
