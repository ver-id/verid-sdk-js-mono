<template>
  <div class="container">
    <h1>Authentication Examples</h1>
    <p class="description">
      This page demonstrates how to use the @ver-id/browser-client SDK for OpenID Connect
      authentication.
    </p>

    <div class="section">
      <h2>1. Configure & Initialize Client</h2>

      <div v-if="clientInitialized" class="completed">
        <p>✓ Client has been initialized</p>
      </div>

      <p v-if="!clientInitialized">
        Configure your authentication client settings and initialize:
      </p>
      
      <!-- Configuration Form -->
      <form v-if="!clientInitialized" @submit.prevent="initializeClient" class="config-form">
        <div class="form-group">
          <label for="apiUrl">API URL:</label>
          <input
            id="apiUrl"
            v-model="clientConfig.apiUrl"
            type="text"
            placeholder="https://api.ver.id"
            required
          >
        </div>

        <div class="form-group">
          <label for="authenticationFlowId">Authentication Flow ID:</label>
          <input
            id="authenticationFlowId"
            v-model="clientConfig.authenticationFlowId"
            type="text"
            placeholder="your-flow-id"
            required
          >
        </div>

        <div class="form-group">
          <label for="redirectUri">Redirect URI:</label>
          <input
            id="redirectUri"
            v-model="clientConfig.redirectUri"
            type="text"
            placeholder="http://localhost:4200/callback"
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
      <h2>2. Configure Scope & Generate Authentication URL</h2>

      <div v-if="authUrl"
class="completed">
        <p>✓ Authentication URL has been generated successfully</p>
      </div>

      <p v-if="!authUrl">
        Configure the scope and generate the authentication URL with PKCE challenge:
      </p>

      <!-- Scope Configuration Form -->
      <form v-if="!authUrl" @submit.prevent="generateAuthUrl" class="config-form">
        <div class="form-group">
          <label for="scope">Scope:</label>
          <input
            id="scope"
            v-model="authOptions.scope"
            type="text"
            placeholder="openid profile email"
          >
          <small style="color: #666;">Space-separated list of scopes (e.g., "openid profile email")</small>
        </div>

        <button type="submit" :disabled="loading">
          {{ loading ? 'Generating...' : 'Generate Auth URL' }}
        </button>
      </form>

      <!-- Code example - always visible to show configuration -->
      <div class="code-block-wrapper">
        <CopyButton :content="getGenerateAuthUrlCode" />
        <pre><code>{{ getGenerateAuthUrlCode }}</code></pre>
      </div>

      <div v-if="authUrl"
class="info">
        <h3>Generated Auth URL:</h3>
        <div class="code-block-wrapper">
          <CopyButton :content="authUrl" />
          <pre>{{ authUrl }}</pre>
        </div>
        <p class="note">
          This URL contains the PKCE code challenge and state parameter. Click below to redirect to
          the authorization server.
        </p>
        <button @click="redirectToAuthServer">Redirect to Authorization Server →</button>
      </div>
    </div>

    <div v-if="error"
class="section error-section">
      <h2>❌ Authentication Error</h2>
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
          <strong>Initialize:</strong> Create a VeridAuthenticationClient with your configuration
        </li>
        <li>
          <strong>Authenticate:</strong> Generate an authentication URL with PKCE and redirect the
          user
        </li>
        <li><strong>Callback:</strong> Handle the redirect back from the authorization server</li>
        <li><strong>Finalize:</strong> Exchange the authorization code for tokens</li>
        <li><strong>Decode:</strong> Decode and verify the ID token to get user claims</li>
      </ol>
    </div>

    <!-- Always visible Start Over button -->
    <div v-if="clientInitialized || authUrl"
class="section" style="text-align: center">
      <button
class="start-over-btn" @click="startOver">🔄 Start Over</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import CopyButton from '../../components/CopyButton.vue';
import { useAuthentication } from '../../composables/useAuthentication';
import '../../assets/styles.css';

// Use the authentication composable - all business logic is in a separate file
const {
  clientInitialized,
  loading,
  error,
  authUrl,
  clientConfig,
  authOptions,
  initializeClient,
  generateAuthUrl,
  redirectToAuthServer,
  startOver,
} = useAuthentication();

// Code generation functions for UI display only - computed for reactive updates
const getInitCode = computed(() => {
  const configEntries = Object.entries(clientConfig)
    .map(([key, value]) => `  ${key}: '${value}'`)
    .join(',\n');

  return `import { VeridAuthenticationClient } from '@ver-id/browser-client';

const authenticationClient = new VeridAuthenticationClient({
${configEntries}
});`;
});

const getGenerateAuthUrlCode = computed(() => {
  const optionsEntries = Object.entries(authOptions)
    .map(([key, value]) => `    ${key}: '${value}'`)
    .join(',\n');

  return `// Generate authentication URL with PKCE
const { authenticationUrl, state } = 
  await authenticationClient.generateAuthenticationUrl({
${optionsEntries}
  });`;
});
</script>
