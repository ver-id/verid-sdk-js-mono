<template>
  <div class="auth-container">
    <h1>Browser Disclosure</h1>
    <p class="description">
      This page demonstrates how to use the @ver-id/browser-client SDK for OpenID Connect disclosure.
    </p>

    <div class="section">
      <h2>1. Configure & Initialize Client</h2>

      <div v-if="clientInitialized" class="completed">
        <p>✓ Client has been initialized</p>
      </div>
      
      <!-- Configuration Form -->
      <div v-if="showConfigForm" class="config-form">
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

      <div v-if="disclosureUrl" class="completed">
        <p>✓ Disclosure URL has been generated successfully</p>
      </div>

      <!-- Code example - always visible to show configuration -->
      <div class="code-block-wrapper">
        <CopyButton :content="getGenerateDisclosureUrlCode" />
        <pre><code>{{ getGenerateDisclosureUrlCode }}</code></pre>
      </div>

      <button v-if="!disclosureUrl" type="button" :disabled="loading" @click="generateDisclosureUrl">
        {{ loading ? 'Generating...' : 'Generate Auth URL' }}
      </button>

      <div v-if="disclosureUrl"
class="info">
        <h3>Generated Auth URL:</h3>
        <div class="code-block-wrapper">
          <CopyButton :content="disclosureUrl" />
          <pre>{{ disclosureUrl }}</pre>
        </div>
        <p class="note">
          This URL contains the PKCE code challenge and state parameter. Click below to redirect to
          the authorization server.
        </p>
        <button @click="redirectToDisclosureServer">Redirect to Authorization Server →</button>
      </div>
    </div>

    <div v-if="error"
class="section error-section">
      <h2>❌ Disclosure Error</h2>
      <div class="error">
        <pre>{{ error }}</pre>
      </div>
      <button
class="start-over-btn" @click="startOver">Try Again</button>
    </div>

    <div class="section">
      <h2>How it Works</h2>
      <ol>
        <li>
          <strong>Initialize:</strong> Create a VeridDisclosureClient with your configuration
        </li>
        <li>
          <strong>Authenticate:</strong> Generate an disclosure URL with PKCE and redirect the
          user
        </li>
        <li><strong>Callback:</strong> Handle the redirect back from the authorization server</li>
        <li><strong>Finalize:</strong> Exchange the authorization code for tokens</li>
        <li><strong>Decode:</strong> Decode and verify the ID token to get user claims</li>
      </ol>
    </div>

    <!-- Always visible Start Over button -->
    <div v-if="clientInitialized || disclosureUrl"
class="section" style="text-align: center">
      <button
class="start-over-btn" @click="startOver">🔄 Start Over</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import CopyButton from '../../../components/CopyButton.vue';
import { useDisclosure } from '../../../composables/useDisclosure';
import '../../../assets/init-styles.css';

// Use the disclosure composable - all business logic is in a separate file
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

// Code generation functions for UI display only - computed for reactive updates
const getInitCode = computed(() => {
  const configEntries = Object.entries(clientConfig)
    .map(([key, value]) => `  ${key}: '${value}'`)
    .join(',\n');

  return `import { VeridDisclosureClient } from '@ver-id/browser-client';

const disclosureClient = new VeridDisclosureClient({
${configEntries}
});`;
});

const getGenerateDisclosureUrlCode = computed(() => {
  return `// Generate disclosure URL with PKCE
const { disclosureUrl, state } = 
  await disclosureClient.generateDisclosureUrl();`;
});
</script>
