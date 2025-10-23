<template>
  <div class="container">
    <h1>Disclosure Examples</h1>
    <p class="description">
      This page demonstrates how to use the @ver-id/browser-client SDK for OpenID Connect
      disclosure.
    </p>

    <div class="section">
      <h2>1. Initialize Client</h2>

      <div v-if="clientInitialized" class="completed">
        <p>✓ Client has been initialized</p>
      </div>

      <!-- Configuration Form -->
      <div v-if="showConfigForm" class="config-form">
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
            placeholder="http://localhost:3000/disclosure/callback"
          >
        </div>
      </div>

      <p v-if="!clientInitialized && !showConfigForm">
        First, initialize the disclosure client with your configuration.
      </p>

      <div class="code-block-wrapper">
        <CopyButton :content="getInitCode" />
        <pre><code>{{ getInitCode }}</code></pre>
      </div>

      <button v-if="!clientInitialized" @click="initializeClient">
        Initialize Client
      </button>
    </div>

    <div v-if="clientInitialized" class="section">
      <h2>2. Generate Disclosure URL</h2>

      <div v-if="authUrl" class="completed">
        <p>✓ Disclosure URL has been generated successfully</p>
      </div>
      <p v-else>
        Generate the disclosure URL with PKCE challenge.
      </p>

      <div class="code-block-wrapper">
        <CopyButton :content="getGenerateAuthUrlCode()" />
        <pre><code>{{ getGenerateAuthUrlCode() }}</code></pre>
      </div>

      <button v-if="!authUrl" :disabled="loading" @click="generateAuthUrl">
        Generate Auth URL
      </button>

      <div v-if="authUrl" class="info">
        <h3>Generated Auth URL:</h3>
        <div class="code-block-wrapper">
          <CopyButton :content="authUrl" />
          <pre>{{ authUrl }}</pre>
        </div>
        <p class="note">
          This URL contains the PKCE code challenge and state parameter. Click below to redirect to
          the authorization server.
        </p>
        <button @click="redirectToAuthServer">
          Redirect to Authorization Server →
        </button>
      </div>
    </div>

    <div v-if="error" class="section error-section">
      <h2>❌ Disclosure Error</h2>
      <div class="error">
        <pre>{{ error }}</pre>
      </div>
      <button class="start-over-btn" @click="startOver">
        Try Again
      </button>
    </div>

    <div class="section">
      <h2>How it Works</h2>
      <ol>
        <li><strong>Initialize:</strong> Create a VeridDisclosureClient with your configuration</li>
        <li>
          <strong>Authenticate:</strong> Generate an disclosure URL with PKCE and redirect the user
        </li>
        <li><strong>Callback:</strong> Handle the redirect back from the authorization server</li>
        <li><strong>Finalize:</strong> Exchange the authorization code for tokens</li>
        <li><strong>Decode:</strong> Decode and verify the ID token to get user claims</li>
      </ol>
    </div>

    <!-- Always visible Start Over button -->
    <div v-if="clientInitialized || authUrl" class="section" style="text-align: center">
      <button class="start-over-btn" @click="startOver">
        🔄 Start Over
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useDisclosure } from '../../composables/useDisclosure.js';
import CopyButton from '../../components/CopyButton.vue';
import '../../assets/styles.css';

// Use the disclosure composable
const {
  showConfigForm,
  clientInitialized,
  loading,
  error,
  disclosureUrl,
  clientConfig,
  initializeClient,
  generateDisclosureUrl,
  redirectToDisclosureServer,
  startOver,
} = useDisclosure();

// Alias for template compatibility
const authUrl = disclosureUrl;
const generateAuthUrl = generateDisclosureUrl;
const redirectToAuthServer = redirectToDisclosureServer;

// Generate code examples dynamically - reactively reflects clientConfig changes
const getInitCode = computed(() => {
  const configEntries = Object.entries(clientConfig)
    .map(([key, value]) => `  ${key}: '${value}'`)
    .join(',\n');

  return `import { VeridDisclosureClient } from '@ver-id/browser-client';

const disclosureClient = new VeridDisclosureClient({
${configEntries}
});`;
});

const getGenerateAuthUrlCode = () => {
  return `// Generate disclosure URL with PKCE
const { disclosureUrl } = 
  await disclosureClient.generateDisclosureUrl();

// Redirect to disclosure server
window.location.href = disclosureUrl;`;
};
</script>
