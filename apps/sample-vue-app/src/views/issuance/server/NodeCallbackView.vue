<template>
  <div class="container">
    <h1>Issuance Callback - Node.js</h1>
    <p class="description">
      This page handles the issuance callback on the Node.js server and displays the results.
    </p>

    <div class="section">
      <h2>6. Finalize Issuance</h2>

      <div
        v-if="issuanceResponse"
        class="completed"
      >
        <p>✓ Authorization code was exchanged for access token</p>

        <h3>Server Code Used:</h3>
        <div class="code-block-wrapper">
          <CopyButton :content="finalizeCodeSnippet" />
          <pre><code>{{ finalizeCodeSnippet }}</code></pre>
        </div>

        <h3>Issuance Response:</h3>
        <div class="code-block-wrapper">
          <CopyButton :content="responseJson" />
          <pre>{{ responseJson }}</pre>
        </div>

        <button
          class="start-over-btn"
          @click="startOver"
        >
          ← Back to Issuance
        </button>
      </div>

      <div v-else>
        <p>
          The OAuth server has redirected back to the Node.js server.
          Click below to finalize the issuance by exchanging the authorization code for an access token.
        </p>

        <h3>Code Example:</h3>
        <div class="code-block-wrapper">
          <CopyButton :content="finalizeCodeSnippet" />
          <pre><code>{{ finalizeCodeSnippet }}</code></pre>
        </div>

        <button
          :disabled="finalizing"
          @click="finalize"
        >
          <span
            v-if="finalizing"
            class="spinner-small"
          />
          <span v-else>Finalize Issuance</span>
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
      <button
        class="start-over-btn"
        @click="startOver"
      >
        Try Again
      </button>
    </div>

    <div
      class="section"
      style="text-align: center"
    >
      <button
        class="start-over-btn"
        @click="startOver"
      >
        🔄 Start Over
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import CopyButton from '../../../components/CopyButton.vue';
import '../../../assets/styles.css';

const router = useRouter();
const API_URL = `${import.meta.env.VITE_NODE_SERVER_URL}/api`;

const finalizing = ref(false);
const error = ref('');
const issuanceResponse = ref<any>(null);
const responseJson = ref('');
const finalizeCodeSnippet = ref(`// Exchange authorization code for access token
const issuanceResponse = await issuanceClient.finalize({
  clientAuth: { client_secret: process.env.VERID_ISSUANCE_CLIENT_SECRET },
  callbackParams: callbackUrl,
});

// Response contains:
// - access_token: The access token with credentials
// - token_type: "Bearer"
// - expires_in: Token expiration time in seconds
`);

const finalize = async () => {
  finalizing.value = true;
  error.value = '';

  try {
    const response = await fetch(`${API_URL}/issuance/finalize`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (!data.success) {
      error.value = data.error || 'Failed to finalize issuance';
      return;
    }

    issuanceResponse.value = data.issuanceResponse;
    responseJson.value = JSON.stringify(data.issuanceResponse, null, 2);
    
    if (data.code) {
      finalizeCodeSnippet.value = data.code;
    }
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Unknown error occurred';
  } finally {
    finalizing.value = false;
  }
};

const startOver = () => {
  router.push('/issuance/server');
};
</script>
