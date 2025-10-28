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
          <label for="apiUrl">API URL:</label>
          <input
            id="apiUrl"
            v-model="clientConfig.apiUrl"
            type="text"
            placeholder="https://api.ver.id"
          >
        </div>
        <div class="form-group">
          <label for="disclosureFlowId">Disclosure Flow ID:</label>
          <input
            id="disclosureFlowId"
            v-model="clientConfig.disclosureFlowId"
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

    <div
      v-if="clientInitialized"
      class="section"
    >
      <h2>2. Generate Disclosure URL</h2>
      
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
        @click="generateUrl"
      >
        Generate Auth URL
      </button>

      <div
        v-if="disclosureUrl"
        class="info"
      >
        <h3>Generated Auth URL:</h3>
        <pre>{{ disclosureUrl }}</pre>
        <p class="note">
          This URL contains the PKCE code challenge and state parameter. Click below to redirect to the authorization server.
          <br />
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
  apiUrl: '',
  disclosureFlowId: '',
  redirectUri: '',
});

const initCodeSnippet = ref('');
const generateUrlCodeSnippet = ref('');
const decodeCodeSnippet = ref('');
const decodedToken = ref<any>(null);

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

const generateUrl = async () => {
  error.value = '';
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
  
  // Reset config to defaults
  clientConfig.value = {
    apiUrl: '',
    disclosureFlowId: '',
    redirectUri: '',
  };
};
</script>
