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

    <!-- Optional Intent Section (shown after client initialization) -->
    <div v-if="clientInitialized && !useIntent && !disclosureUrl" class="section">
      <h3>Optional: Use Intent-based Flow</h3>
      <p style="color: #666; margin-bottom: 15px;">
        You can optionally create a disclosure intent first for advanced customization (custom challenge, brandUuid, requireExplicitConsent).
        Otherwise, continue below to generate the disclosure URL directly.
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
      <h2>3. Create Disclosure Intent</h2>

      <p>
        Now create a disclosure intent using the code challenge. You can optionally provide a custom challenge, brandUuid, and requireExplicitConsent:
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
            <input type="checkbox" v-model="intentOptions.useRequireExplicitConsent">
            Include Require Explicit Consent
          </label>
          <small style="color: #666;">Add requireExplicitConsent parameter to the intent</small>
        </div>
        <div v-if="intentOptions.useRequireExplicitConsent" class="form-group" style="margin-left: 20px;">
          <label>Require Explicit Consent Value:</label>
          <div>
            <label style="margin-right: 15px;">
              <input type="radio" :value="true" v-model="intentOptions.requireExplicitConsent">
              True
            </label>
            <label>
              <input type="radio" :value="false" v-model="intentOptions.requireExplicitConsent">
              False
            </label>
          </div>
          <small style="color: #666;">Force the user to explicitly consent to the disclosure (true) or not (false)</small>
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

    <div v-if="(clientInitialized && !useIntent) || intentCreated" class="section">
      <h2>{{ useIntent ? '5' : '2' }}. Generate Disclosure URL</h2>

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
          <strong>Intent (Optional):</strong> Generate code challenge and create a disclosure intent with custom challenge/brandUuid/requireExplicitConsent for advanced flows
        </li>
        <li>
          <strong>Disclose:</strong> Generate a disclosure URL with PKCE (with or without intent) and redirect the user
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
  intentCreated,
  loading,
  error,
  disclosureUrl,
  intentId,
  codeChallenge,
  state,
  clientConfig,
  useIntent,
  intentOptions,
  initializeClient,
  enableIntentFlow,
  generateCodeChallenge,
  createIntent,
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

const getGenerateCodeChallengeCode = computed(() => {
  return `// Step 1: Generate code challenge
const { codeChallenge, state } = 
  await disclosureClient.generateCodeChallenge();`;
});

const getCreateIntentCode = computed(() => {
  const intentParams: string[] = [];
  if (intentOptions.challenge) {
    intentParams.push(`  challenge: '${intentOptions.challenge}'`);
  }
  if (intentOptions.brandUuid) {
    intentParams.push(`  brandUuid: '${intentOptions.brandUuid}'`);
  }
  if (intentOptions.useRequireExplicitConsent) {
    intentParams.push(`  requireExplicitConsent: ${intentOptions.requireExplicitConsent}`);
  }

  const payloadStr = intentParams.length > 0 
    ? `{\n${intentParams.join(',\n')}\n}` 
    : '{}';

  // Show the actual codeChallenge value if available
  const codeChallengeStr = codeChallenge.value 
    ? `'${codeChallenge.value}'` 
    : 'codeChallenge';

  return `// Step 2: Create disclosure intent
const intentId = await disclosureClient.createDisclosureIntent(
  ${payloadStr},
  ${codeChallengeStr}
);`;
});

const getGenerateDisclosureUrlCode = computed(() => {
  if (useIntent.value && intentId.value) {
    return `// Step 3: Generate disclosure URL with intent
const { disclosureUrl } = 
  await disclosureClient.generateDisclosureUrl({
    intent_id: '${intentId.value}',
    state: '${state.value}',
    code_challenge: '${codeChallenge.value}',
  });`;
  } else {
    return `// Generate disclosure URL with PKCE
const { disclosureUrl, state } = 
  await disclosureClient.generateDisclosureUrl();`;
  }
});
</script>
