<template>
  <div class="container">
    <h1>OAuth Callback Handler</h1>
    <p class="description">
      This page handles the OAuth callback and completes the issuance flow.
    </p>

    <!-- Callback Received -->
    <div class="section">
      <h2>3. OAuth Callback Received</h2>

      <div
        v-if="issuanceResponse"
        class="completed"
      >
        <p>✓ Callback URL was received and processed</p>
      </div>
      <p v-else>
        You've been redirected back from the OAuth provider with an authorization code.
      </p>

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

    <!-- Finalize (Exchange Code for Tokens) -->
    <div class="section">
      <h2>4. Exchange Code for Token (Finalize)</h2>

      <div v-if="issuanceResponse">
        <div class="completed">
          <p>✓ Authorization code was exchanged for access token</p>
        </div>

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

        <button
          class="start-over-btn"
          @click="goBack"
        >
          ← Back to Issuance Page
        </button>
      </div>

      <div v-else>
        <p>Exchange the authorization code for access token by calling the finalize method.</p>

        <h3>Code Example:</h3>
        <div class="code-block-wrapper">
          <CopyButton :content="getFinalizeCode()" />
          <pre><code>{{ getFinalizeCode() }}</code></pre>
        </div>

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

    <!-- Error Display -->
    <div
      v-if="error"
      class="section error-section"
    >
      <h2>❌ Error Occurred</h2>
      <div class="error">
        <div class="code-block-wrapper">
          <CopyButton :content="error" />
          <pre>{{ error }}</pre>
        </div>
      </div>
      <button
        class="start-over-btn"
        @click="goBack"
      >
        ← Back to Issuance
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
import { useRouter } from 'vue-router';
import CopyButton from '../../../components/CopyButton.vue';
import { useIssuanceCallback } from '../../../composables/useIssuanceCallback';
import '../../../assets/styles.css';

const router = useRouter();

const {
  finalizing,
  error,
  currentUrl,
  urlParams,
  issuanceResponse,
  tokenResponse,
  CLIENT_CONFIG,
  finalize,
} = useIssuanceCallback();

const getFinalizeCode = () => {
  return `const issuanceClient = new VeridIssuanceClient({
  issuerUri: '${CLIENT_CONFIG.issuerUri}',
  client_id: '${CLIENT_CONFIG.client_id}',
  redirectUri: '${CLIENT_CONFIG.redirectUri}',
});

const issuanceResponse = await issuanceClient.finalize();

// Response contains:
// - access_token: The access token with credentials
// - token_type: "Bearer"
// - expires_in: Token expiration time in seconds
`;
};

const goBack = () => {
  router.push('/issuance');
};
</script>
