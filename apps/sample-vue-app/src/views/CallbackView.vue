<template>
  <div class="container">
    <h1>OAuth Callback Handler</h1>
    <p class="description">
      This page handles the OAuth callback and completes the authentication flow.
    </p>

    <!-- Step 1: Callback Received -->
    <div class="section">
      <h2>1. OAuth Callback Received</h2>

      <div v-if="authResponse"
class="completed">
        <p>✓ Callback URL was received and processed</p>
      </div>

      <div v-else>
        <p>You've been redirected back from the OAuth provider with an authorization code.</p>

        <h3>Callback URL:</h3>
        <div class="code-block-wrapper">
          <CopyButton :content="currentUrl" />
          <pre>{{ currentUrl }}</pre>
        </div>

        <h3>URL Parameters:</h3>
        <div class="code-block-wrapper">
          <CopyButton :content="urlParams" />
          <pre>{{ urlParams }}</pre>
        </div>
      </div>
    </div>

    <!-- Step 2: Finalize (Exchange Code for Tokens) -->
    <div class="section">
      <h2>2. Exchange Code for Tokens (Finalize)</h2>

      <div v-if="decodedJwt"
class="completed">
        <p>✓ Authorization code was exchanged for tokens</p>
        <div class="code-block-wrapper">
          <CopyButton :content="getFinalizeCode()" />
          <pre><code>{{ getFinalizeCode() }}</code></pre>
        </div>
      </div>

      <div v-else-if="authResponse">
        <p>The authorization code has been successfully exchanged for tokens.</p>

        <h3>Code Used:</h3>
        <div class="code-block-wrapper">
          <CopyButton :content="getFinalizeCode()" />
          <pre><code>{{ getFinalizeCode() }}</code></pre>
        </div>

        <h3>Token Response:</h3>
        <div class="code-block-wrapper">
          <CopyButton :content="tokenResponse" />
          <pre>{{ tokenResponse }}</pre>
        </div>
      </div>

      <div v-else>
        <p>Exchange the authorization code for tokens by calling the finalize method.</p>

        <h3>Code Example:</h3>
        <div class="code-block-wrapper">
          <CopyButton :content="getFinalizeCode()" />
          <pre><code>{{ getFinalizeCode() }}</code></pre>
        </div>

        <button :disabled="finalizing"
@click="finalize">
          <span v-if="finalizing"
class="spinner-small" />
          <span v-else>Exchange Code for Tokens</span>
        </button>
      </div>
    </div>

    <!-- Step 3: Decode Token -->
    <div v-if="authResponse"
class="section">
      <h2>3. Decode ID Token</h2>

      <div v-if="decodedJwt">
        <div class="completed">
          <p>✓ ID token was decoded and verified</p>
          <div class="code-block-wrapper">
            <CopyButton :content="getDecodeCode()" />
            <pre><code>{{ getDecodeCode() }}</code></pre>
          </div>
        </div>

        <div class="token-section">
          <h4>JWT Header:</h4>
          <div class="code-block-wrapper">
            <CopyButton :content="jwtHeader" />
            <pre>{{ jwtHeader }}</pre>
          </div>
        </div>

        <div class="token-section">
          <h4>JWT Payload (Claims):</h4>
          <div class="code-block-wrapper">
            <CopyButton :content="jwtPayload" />
            <pre>{{ jwtPayload }}</pre>
          </div>
        </div>

        <button
class="start-over-btn" @click="goBack">← Back to Authentication Page</button>
      </div>

      <div v-else>
        <p>Decode and verify the ID token to extract user claims.</p>

        <h3>Code Example:</h3>
        <div class="code-block-wrapper">
          <CopyButton :content="getDecodeCode()" />
          <pre><code>{{ getDecodeCode() }}</code></pre>
        </div>

        <button :disabled="decoding"
@click="decode">
          <span v-if="decoding"
class="spinner-small" />
          <span v-else>Decode ID Token</span>
        </button>
      </div>
    </div>

    <!-- Error Display -->
    <div v-if="error"
class="section error-section">
      <h2>❌ Error Occurred</h2>
      <div class="error">
        <div class="code-block-wrapper">
          <CopyButton :content="error" />
          <pre>{{ error }}</pre>
        </div>
      </div>
      <button
class="start-over-btn" @click="goBack">← Back to Authentication</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { VeridAuthenticationClient } from '@ver-id/browser-client';
import CopyButton from '../components/CopyButton.vue';
import '../assets/styles.css';

const router = useRouter();
const route = useRoute();

const error = ref<string | null>(null);
const finalizing = ref(false);
const decoding = ref(false);

// Data to display
const currentUrl = ref('');
const urlParams = ref('');
const authResponse = ref<any>(null);
const tokenResponse = ref('');
const decodedJwt = ref<any>(null);
const jwtHeader = ref('');
const jwtPayload = ref('');

// Store the auth client and response
let authClient: VeridAuthenticationClient;
let rawAuthResponse: any;

// Shared configuration - single source of truth
const CLIENT_CONFIG = {
  issuerUri: import.meta.env.VITE_VERID_AUTHENTICATION_API_URL,
  clientId: import.meta.env.VITE_VERID_AUTHENTICATION_FLOW_ID,
  redirectUri: import.meta.env.VITE_VERID_AUTHENTICATION_REDIRECT_URI,
};

// Generate code examples dynamically
const getFinalizeCode = () => {
  const configEntries = Object.entries(CLIENT_CONFIG)
    .map(([key, value]) => `  ${key}: '${value}'`)
    .join(',\n');

  return `// Initialize the auth client
const authClient = new VeridAuthenticationClient({
${configEntries}
});

// Exchange authorization code for tokens
const response = await authClient.finalize();`;
};

const getDecodeCode = () => {
  return `// Decode and verify the ID token
const jwt = await authClient.decode(response);

// JWT contains:
// - header: Algorithm, token type
// - payload: User claims (sub, iss, exp, etc.)`;
};

onMounted(() => {
  try {
    // Display the callback URL and parameters
    currentUrl.value = window.location.href;

    const params: Record<string, string> = {};
    if (route.query) {
      Object.entries(route.query).forEach(([key, value]) => {
        params[key] = String(value);
      });
    }
    urlParams.value = JSON.stringify(params, null, 2);

    // Initialize the auth client
    authClient = new VeridAuthenticationClient(CLIENT_CONFIG);
  } catch (err) {
    handleError(err);
  }
});

// Step 2: Finalize - Exchange authorization code for tokens
async function finalize() {
  finalizing.value = true;
  try {
    rawAuthResponse = await authClient.finalize();

    // Store for later use in decode
    authResponse.value = rawAuthResponse;
    tokenResponse.value = JSON.stringify(rawAuthResponse, null, 2);
  } catch (err) {
    handleError(err);
  } finally {
    finalizing.value = false;
  }
}

// Step 3: Decode - Decode and verify the ID token
async function decode() {
  decoding.value = true;
  try {
    const jwt = await authClient.decode(rawAuthResponse);

    decodedJwt.value = jwt;
    // Note: jwt object from Ver.iD SDK may not have header exposed
    // If header is available, display it, otherwise show a note
    jwtHeader.value = (jwt as any).header
      ? JSON.stringify((jwt as any).header, null, 2)
      : '// Header not exposed by SDK';
    jwtPayload.value = JSON.stringify(jwt.payload, null, 2);
  } catch (err) {
    handleError(err);
  } finally {
    decoding.value = false;
  }
}

function handleError(err: unknown) {
  // Serialize the full error object with all details
  const errorDetails = {
    message: err instanceof Error ? err.message : String(err),
    stack: err instanceof Error ? err.stack : undefined,
    ...(err && typeof err === 'object' ? err : {}),
  };

  error.value = JSON.stringify(errorDetails, null, 2);
}

function goBack() {
  // Simply navigate back to authentication page
  router.push('/authentication');
}
</script>
