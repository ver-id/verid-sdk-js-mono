<template>
  <div class="auth-container">
    <h1>Node.js OAuth Callback Handler</h1>
    <p class="description">
      This page handles the OAuth callback through the Node.js backend and completes the authentication flow.
    </p>

    <!-- Callback Received -->
    <div class="section">
      <h2>3. OAuth Callback Received</h2>

      <div
        v-if="callbackProcessed"
        class="completed"
      >
        <p>✓ Callback was received by the Node.js server</p>
      </div>
      <p v-else>
        The OAuth provider redirected back to the Node.js server with an authorization code.
      </p>

      <h3>Callback URL:</h3>
      <div class="code-block-wrapper">
        <pre>{{ currentUrl }}</pre>
      </div>

      <h3>URL Parameters:</h3>
      <div class="code-block-wrapper">
        <pre>{{ urlParams }}</pre>
      </div>
    </div>

    <!-- Finalize (Exchange Code for Tokens) -->
    <div class="section">
      <h2>4. Exchange Code for Token (Finalize)</h2>

      <div v-if="authResponse">
        <div
          v-if="decodedToken"
          class="completed"
        >
          <p>✓ Authorization code was exchanged for tokens on the server</p>
        </div>
        <p v-else>
          The authorization code has been successfully exchanged for tokens by the Node.js backend.
        </p>

        <h3>Server-Side Code Executed:</h3>
        <div class="code-block-wrapper">
          <pre><code>{{ finalizeCodeSnippet }}</code></pre>
        </div>

        <h3>Token Response:</h3>
        <div class="code-block-wrapper">
          <pre>{{ tokenResponse }}</pre>
        </div>
      </div>

      <div v-else>
        <p>Click the button below to exchange the authorization code for tokens on the Node.js server.</p>
        <p>
          <strong>Note:</strong> The server uses callback uri and client secret to perform this exchange. 
          This step should always be done on the server to keep client secret secure.
        </p>

        <button
          :disabled="finalizing"
          @click="finalize"
        >
          <span
            v-if="finalizing"
            class="spinner-small"
          />
          <span v-else>Exchange Code for Tokens</span>
        </button>
      </div>
    </div>

    <!-- Decode Token -->
    <div
      v-if="authResponse"
      class="section"
    >
      <h2>5. Decode ID Token</h2>

      <div v-if="decodedToken">
        <div class="completed">
          <p>✓ ID token was decoded and verified on the server</p>
          <div class="code-block-wrapper">
            <pre><code>{{ decodeCodeSnippet }}</code></pre>
          </div>
        </div>

        <div class="token-section">
          <h4>Decoded Token (Claims):</h4>
          <div class="code-block-wrapper">
            <pre>{{ JSON.stringify(decodedToken, null, 2) }}</pre>
          </div>
        </div>

        <button
          class="start-over-btn"
          @click="goBack"
        >
          ← Back to Authentication Page
        </button>
      </div>

      <div v-else>
        <p>Decode and verify the ID token on the Node.js server to extract user claims.</p>

        <button
          :disabled="decoding"
          @click="decode"
        >
          <span
            v-if="decoding"
            class="spinner-small"
          />
          <span v-else>Decode ID Token on Server</span>
        </button>
      </div>
    </div>

    <!-- Error Display -->
    <div
      v-if="error"
      class="section error-section"
    >
      <h2>❌ Error Occurred</h2>
      <div class="error">
        <div class="code-block-wrapper">
          <pre>{{ error }}</pre>
        </div>
      </div>
      <button
        class="start-over-btn"
        @click="goBack"
      >
        ← Back to Authentication
      </button>
    </div>

    <!-- Always visible Start Over button -->
    <div
      class="section"
      style="text-align: center"
    >
      <button
        class="start-over-btn"
        @click="goBack"
      >
        🔄 Start Over
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import '../../../assets/init-styles.css';

const router = useRouter();
const finalizing = ref(false);
const decoding = ref(false);
const error = ref('');
const callbackProcessed = ref(true); // Backend already processed the callback
const currentUrl = ref('');
const urlParams = ref('');
const authResponse = ref<any>(null);
const finalizeCodeSnippet = ref('');
const tokenResponse = ref('');
const decodedToken = ref<any>(null);
const decodeCodeSnippet = ref('');

const API_URL = `${import.meta.env.VITE_NODE_SERVER_URL}/api`;

onMounted(async () => {
  try {
    // Check URL for errors from backend redirect
    const params = new URLSearchParams(window.location.search);
    const errorParam = params.get('error');
    const messageParam = params.get('message');
    
    if (errorParam) {
      error.value = decodeURIComponent(messageParam || errorParam || 'Authentication failed');
      callbackProcessed.value = false;
      return;
    }

    // Fetch callback info from backend
    await fetchCallbackInfo();
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'An unknown error occurred';
  }
});

const fetchCallbackInfo = async () => {
  try {
    const response = await fetch(`${API_URL}/auth/callback-info`);
    const data = await response.json();

    if (!data.success) {
      throw new Error(data.error || 'Failed to get callback info');
    }

    // Set the backend callback URL and params
    currentUrl.value = data.callbackUrl;
    urlParams.value = JSON.stringify(data.params, null, 2);
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to fetch callback info';
  }
};

const finalize = async () => {
  finalizing.value = true;
  error.value = '';
  
  try {
    const response = await fetch(`${API_URL}/auth/finalize`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (!data.success) {
      throw new Error(data.error || 'Failed to finalize');
    }

    // Set auth response info
    authResponse.value = data.authResponse;
    tokenResponse.value = JSON.stringify(data.authResponse, null, 2);
    finalizeCodeSnippet.value = data.code;
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to finalize authentication';
  } finally {
    finalizing.value = false;
  }
};

const decode = async () => {
  decoding.value = true;
  error.value = '';
  
  try {
    const response = await fetch(`${API_URL}/auth/decode`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (!data.success) {
      throw new Error(data.error || 'Failed to decode token');
    }

    decodedToken.value = data.decoded;
    decodeCodeSnippet.value = data.code;
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to decode token';
  } finally {
    decoding.value = false;
  }
};

const goBack = () => {
  router.push('/authentication/node');
};
</script>
