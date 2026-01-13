<template>
  <div class="auth-container">
    <h1>Browser Issuance</h1>
    <p class="description">
      This page demonstrates how to use the @ver-id/browser-client SDK for OpenID Connect issuance.
      Note: Intent creation is MANDATORY for issuance flow.
    </p>

    <div class="section">
      <h2>1. Configure & Initialize Client</h2>

      <div
        v-if="clientInitialized"
        class="completed"
      >
        <p>✓ Client has been initialized</p>
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
            placeholder="http://localhost:3000/issuance/callback"
          >
        </div>
      </div>

      <p v-if="!clientInitialized && !showConfigForm">
        First, initialize the issuance client with your configuration.
      </p>

      <div class="code-block-wrapper">
        <CopyButton :content="getInitCode" />
        <pre><code>{{ getInitCode }}</code></pre>
      </div>

      <button
        v-if="!clientInitialized"
        @click="initializeClient"
      >
        Initialize Client
      </button>
    </div>

    <!-- Step 2: Generate Code Challenge (MANDATORY) -->
    <div
      v-if="clientInitialized && !codeChallenge"
      class="section"
    >
      <h2>2. Generate Code Challenge (Required)</h2>

      <p>
        Generate a PKCE code challenge and state. This is required for creating the issuance intent:
      </p>

      <div class="code-block-wrapper">
        <CopyButton :content="getGenerateCodeChallengeCode" />
        <pre><code>{{ getGenerateCodeChallengeCode }}</code></pre>
      </div>

      <button
        type="button"
        :disabled="loading"
        @click="generateCodeChallenge"
      >
        {{ loading ? 'Generating...' : 'Generate Code Challenge' }}
      </button>
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
        Create an issuance intent. This is MANDATORY for the issuance flow. You can optionally provide a custom challenge and brandUuid:
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
          <small>Key-value pairs for payload mapping</small>
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
          <small>Array of data items with attributeUuid, credentialUuid, issuerUuid, schemeUuid, providerUuid, and value</small>
        </div>

        <h4 style="margin-top: 1.5rem;">
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
          <small>Force user to explicitly consent during issuance</small>
        </div>
        
        <div class="form-group">
          <label for="challenge">Challenge (Optional):</label>
          <input
            id="challenge"
            v-model="intentOptions.challenge"
            type="text"
            placeholder="custom-challenge-string"
          >
          <small>Custom challenge for additional security</small>
        </div>
        <div class="form-group">
          <label for="brandUuid">Brand UUID (Optional):</label>
          <input
            id="brandUuid"
            v-model="intentOptions.brandUuid"
            type="text"
            placeholder="brand-uuid-123"
          >
          <small>Brand-specific customization</small>
        </div>
      </div>

      <div class="code-block-wrapper">
        <CopyButton :content="getCreateIntentCode" />
        <pre><code>{{ getCreateIntentCode }}</code></pre>
      </div>

      <button
        type="button"
        :disabled="loading"
        @click="createIntent"
      >
        {{ loading ? 'Creating Intent...' : 'Create Intent' }}
      </button>
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
        Generate the issuance URL using the intent ID and PKCE parameters.
      </p>

      <div class="code-block-wrapper">
        <CopyButton :content="getGenerateUrlCode" />
        <pre><code>{{ getGenerateUrlCode }}</code></pre>
      </div>

      <button
        v-if="!issuanceUrl"
        :disabled="loading"
        @click="generateIssuanceUrl"
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
          <strong>Note:</strong> Generated URL does not contain any sensitive information. The redirection happens in the browser.
        </p>
        <button @click="redirectToIssuanceServer">
          Redirect to Authorization Server →
        </button>
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
      <button @click="startOver">
        Try Again
      </button>
    </div>

    <div class="section">
      <h2>How it Works</h2>
      <ol>
        <li>
          <strong>Initialize:</strong> Create a VeridIssuanceClient with your configuration
        </li>
        <li>
          <strong>Code Challenge:</strong> Generate PKCE code challenge and state (required)
        </li>
        <li>
          <strong>Create Intent:</strong> Create an issuance intent (MANDATORY for issuance)
        </li>
        <li>
          <strong>Generate URL:</strong> Generate issuance URL with intent and PKCE parameters
        </li>
        <li>
          <strong>Redirect:</strong> User is redirected to the authorization server
        </li>
        <li>
          <strong>Callback:</strong> Authorization server redirects back with authorization code
        </li>
        <li>
          <strong>Finalize:</strong> Exchange the authorization code for access token
        </li>
      </ol>
    </div>

    <!-- Always visible Start Over button -->
    <div
      v-if="clientInitialized"
      class="section"
      style="text-align: center"
    >
      <button @click="startOver">
        🔄 Start Over
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useIssuance } from '../../../composables/useIssuance.js';
import CopyButton from '../../../components/CopyButton.vue';
import JsonEditor from '../../../components/JsonEditor.vue';
import '../../../assets/init-styles.css';
import '../../../assets/issuance-styles.css';

const {
  showConfigForm,
  clientInitialized,
  intentCreated,
  loading,
  error,
  issuanceUrl,
  intentId,
  codeChallenge,
  state,
  clientConfig,
  intentOptions,
  initializeClient,
  generateCodeChallenge,
  createIntent,
  generateIssuanceUrl,
  redirectToIssuanceServer,
  startOver,
} = useIssuance();

// JSON string representations for textarea fields
const payloadMappingJson = ref('{}');
const payloadDataJson = ref('[]');
const payloadType = ref<'mapping' | 'data'>('mapping');

// Watch and parse JSON inputs, but only update the selected type
watch(payloadMappingJson, (newVal) => {
  if (payloadType.value !== 'mapping') return;
  try {
    intentOptions.payload.mapping = JSON.parse(newVal);
    intentOptions.payload.data = undefined as any;
  } catch (e) {
    // Invalid JSON, keep previous value
  }
});

watch(payloadDataJson, (newVal) => {
  if (payloadType.value !== 'data') return;
  try {
    intentOptions.payload.data = JSON.parse(newVal);
    intentOptions.payload.mapping = undefined as any;
  } catch (e) {
    // Invalid JSON, keep previous value
  }
});

// Watch payload type changes to clear the other option
watch(payloadType, (newType) => {
  if (newType === 'mapping') {
    intentOptions.payload.data = undefined as any;
    payloadDataJson.value = '[]';
  } else {
    intentOptions.payload.mapping = undefined as any;
    payloadMappingJson.value = '{}';
  }
});

// Code generation for display
const getInitCode = computed(() => {
  return `import { VeridIssuanceClient } from '@ver-id/browser-client';

const issuanceClient = new VeridIssuanceClient({
  issuerUri: '${clientConfig.issuerUri}',
  client_id: '${clientConfig.client_id}',
  redirectUri: '${clientConfig.redirectUri}',
});`;
});

const getGenerateCodeChallengeCode = computed(() => {
  return `const { codeChallenge, state } = await issuanceClient.generateCodeChallenge();

// Result:
// codeChallenge: ${codeChallenge.value ? `"${codeChallenge.value}"` : '(not generated yet)'}
// state: ${state.value ? `"${state.value}"` : '(not generated yet)'}`;
});

const getCreateIntentCode = computed(() => {
  const payloadParts: string[] = [];
  
  // Add mapping if present
  if (intentOptions.payload.mapping && Object.keys(intentOptions.payload.mapping).length > 0) {
    payloadParts.push(`    mapping: ${JSON.stringify(intentOptions.payload.mapping, null, 2).replace(/\n/g, '\n    ')}`);
  }
  
  // Add data if present
  if (intentOptions.payload.data && intentOptions.payload.data.length > 0) {
    payloadParts.push(`    data: ${JSON.stringify(intentOptions.payload.data, null, 2).replace(/\n/g, '\n    ')}`);
  }
  
  const payloadContent = payloadParts.length > 0 
    ? `{\n${payloadParts.join(',\n')}\n  }`
    : '{}';

  const optionalParams: string[] = [];
  if (intentOptions.challenge) optionalParams.push(`  challenge: '${intentOptions.challenge}',`);
  if (intentOptions.brandUuid) optionalParams.push(`  brandUuid: '${intentOptions.brandUuid}',`);
  if (intentOptions.requireExplicitConsent) optionalParams.push(`  requireExplicitConsent: ${intentOptions.requireExplicitConsent},`);
  
  const params = optionalParams.length > 0 
    ? `{\n  payload: ${payloadContent},\n${optionalParams.join('\n')}\n}`
    : `{ payload: ${payloadContent} }`;

  return `const intentId = await issuanceClient.createIssuanceIntent(
  ${params},
  '${codeChallenge.value || 'YOUR_CODE_CHALLENGE'}'
);

// Result: intentId = ${intentId.value ? `"${intentId.value}"` : '(not created yet)'}`;
});

const getGenerateUrlCode = computed(() => {
  return `const { issuanceUrl } = await issuanceClient.generateIssuanceUrl({
  intent_id: '${intentId.value || 'YOUR_INTENT_ID'}',
  state: '${state.value || 'YOUR_STATE'}',
  codeChallenge: '${codeChallenge.value || 'YOUR_CODE_CHALLENGE'}',
});

// Generated URL: ${issuanceUrl.value || '(not generated yet)'}`;
});
</script>
