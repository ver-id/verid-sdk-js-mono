<template>
  <div class="auth-container">
    <h1>Browser Authentication</h1>
    <p class="description">
      This page demonstrates how to use the @ver-id/browser-client SDK for OpenID Connect authentication.
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
          <label for="clientId">Authentication Flow ID:</label>
          <input
            id="clientId"
            v-model="clientConfig.clientId"
            type="text"
            placeholder="authentication_flow_123"
          >
        </div>
        <div class="form-group">
          <label for="redirectUri">Redirect URI:</label>
          <input
            id="redirectUri"
            v-model="clientConfig.redirectUri"
            type="text"
            placeholder="http://localhost:3000/authentication/callback"
          >
        </div>
      </div>

      <p v-if="!clientInitialized && !showConfigForm">
        First, initialize the authentication client with your configuration.
      </p>

      <div class="code-block-wrapper">
        <CopyButton :content="getInitCode" />
        <pre><code>{{ getInitCode }}</code></pre>
      </div>

      <button v-if="!clientInitialized" @click="initializeClient">
        Initialize Client
      </button>
    </div>

    <!-- Optional Intent Section (shown after client initialization) -->
    <div v-if="clientInitialized && !useIntent && !authUrl" class="section">
      <h3>Optional: Use Intent-based Flow</h3>
      <p style="color: #666; margin-bottom: 15px;">
        You can optionally create an authentication intent first for advanced customization (custom challenge, brandUuid).
        Otherwise, continue below to generate the authentication URL directly.
      </p>
      <button type="button" @click="enableIntentFlow" class="secondary-btn">
        Create Intent (Optional)
      </button>
    </div>

    <!-- Step 2a: Generate Code Challenge -->
    <div v-if="useIntent && !codeChallenge" class="section">
      <h2>2. Generate Code Challenge</h2>

      <p>
        First, generate a PKCE code challenge and state. This will be used for the intent creation:
      </p>

      <div class="code-block-wrapper">
        <CopyButton :content="getGenerateCodeChallengeCode" />
        <pre><code>{{ getGenerateCodeChallengeCode }}</code></pre>
      </div>

      <button type="button" :disabled="loading" @click="generateCodeChallenge">
        {{ loading ? 'Generating...' : 'Generate Code Challenge' }}
      </button>
    </div>

    <!-- Step 2b: Show Generated Code Challenge -->
    <div v-if="codeChallenge && !intentCreated" class="section">
      <h2>2. Code Challenge Generated ✓</h2>

      <div class="completed">
        <p><strong>Code Challenge:</strong></p>
        <pre style="background: #f5f5f5; padding: 10px; border-radius: 4px; overflow-x: auto;">{{ codeChallenge }}</pre>
        <p style="margin-top: 10px;"><strong>State:</strong></p>
        <pre style="background: #f5f5f5; padding: 10px; border-radius: 4px; overflow-x: auto;">{{ state }}</pre>
      </div>
    </div>

    <!-- Step 3: Create Intent -->
    <div v-if="codeChallenge && !intentCreated" class="section">
      <h2>3. Create Authentication Intent</h2>

      <p>
        Now create an authentication intent using the code challenge. You can optionally provide a custom challenge and brandUuid:
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
      </div>

      <div class="code-block-wrapper">
        <CopyButton :content="getCreateIntentCode" />
        <pre><code>{{ getCreateIntentCode }}</code></pre>
      </div>

      <button type="button" :disabled="loading" @click="createIntent">
        {{ loading ? 'Creating Intent...' : 'Create Intent' }}
      </button>
    </div>

    <!-- Step 4: Intent Created -->
    <div v-if="intentCreated" class="section">
      <h2>{{ useIntent ? '4' : '2' }}. Intent Created Successfully ✓</h2>

      <div class="completed">
        <p><strong>Intent ID:</strong></p>
        <pre style="background: #f5f5f5; padding: 10px; border-radius: 4px; overflow-x: auto;">{{ intentId }}</pre>
      </div>
    </div>

    <!-- Step: Generate Authentication URL -->
    <div v-if="(clientInitialized && !useIntent) || intentCreated" class="section">
      <h2>{{ useIntent ? '3' : '2' }}. Configure Scope & Generate Authentication URL</h2>

      <div v-if="authUrl" class="completed">
        <p>✓ Authentication URL has been generated successfully</p>
      </div>

      <p v-if="!authUrl">
        Configure the scope and generate the authentication URL with PKCE challenge:
      </p>

      <!-- Scope Configuration -->
      <div v-if="!authUrl" class="config-form">
        <div class="form-group">
          <label for="scope">Scope:</label>
          <input
            id="scope"
            v-model="authOptions.scope"
            type="text"
            placeholder="profile"
          >
          <small style="color: #666;">Space-separated list of scopes (e.g., "profile email etc.")</small>
        </div>
      </div>

      <!-- Code example - always visible to show configuration -->
      <div class="code-block-wrapper">
        <CopyButton :content="getGenerateAuthUrlCode" />
        <pre><code>{{ getGenerateAuthUrlCode }}</code></pre>
      </div>

      <button v-if="!authUrl" type="button" :disabled="loading" @click="generateAuthUrl">
        {{ loading ? 'Generating...' : 'Generate Auth URL' }}
      </button>

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
          <strong>Intent (Optional):</strong> Generate code challenge and create an authentication intent with custom challenge/brandUuid for advanced flows
        </li>
        <li>
          <strong>Authenticate:</strong> Generate an authentication URL with PKCE (with or without intent) and redirect the user
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
import CopyButton from '../../../components/CopyButton.vue';
import { useAuthentication } from '../../../composables/useAuthentication';
import '../../../assets/init-styles.css';

// Use the authentication composable - all business logic is in a separate file
const {
  showConfigForm,
  clientInitialized,
  intentCreated,
  loading,
  error,
  authUrl,
  intentId,
  codeChallenge,
  state,
  clientConfig,
  authOptions,
  useIntent,
  intentOptions,
  initializeClient,
  enableIntentFlow,
  generateCodeChallenge,
  createIntent,
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

const getGenerateCodeChallengeCode = computed(() => {
  return `// Step 1: Generate code challenge
const { codeChallenge, state } = 
  await authenticationClient.generateCodeChallenge();`;
});

const getCreateIntentCode = computed(() => {
  const intentParams: string[] = [];
  if (intentOptions.challenge) {
    intentParams.push(`  challenge: '${intentOptions.challenge}'`);
  }
  if (intentOptions.brandUuid) {
    intentParams.push(`  brandUuid: '${intentOptions.brandUuid}'`);
  }

  const payloadStr = intentParams.length > 0 
    ? `{\n${intentParams.join(',\n')}\n}` 
    : '{}';

  // Show the actual codeChallenge value if available
  const codeChallengeStr = codeChallenge.value 
    ? `'${codeChallenge.value}'` 
    : 'codeChallenge';

  return `// Step 2: Create authentication intent
const intentId = await authenticationClient.createAuthenticationIntent(
  ${payloadStr},
  ${codeChallengeStr}
);`;
});

const getGenerateAuthUrlCode = computed(() => {
  if (useIntent.value && intentId.value) {
    return `// Step 3: Generate authentication URL with intent
const { authenticationUrl } = 
  await authenticationClient.generateAuthenticationUrl({
    scope: '${authOptions.scope}',
    intentId: '${intentId.value}',
    state: '${state.value}',
    codeChallenge: '${codeChallenge.value}',
  });`;
  } else {
    const optionsEntries = Object.entries(authOptions)
      .map(([key, value]) => `    ${key}: '${value}'`)
      .join(',\n');

    return `// Generate authentication URL with PKCE
const { authenticationUrl, state } = 
  await authenticationClient.generateAuthenticationUrl({
${optionsEntries}
  });`;
  }
});
</script>
