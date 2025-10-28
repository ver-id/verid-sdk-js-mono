<template>
  <div class="container">
    <h1>OAuth Callback Handler</h1>
    <p class="description">
      This page handles the OAuth callback and completes the authentication flow.
    </p>

    <!-- Callback Received -->
    <div class="section">
      <h2>3. OAuth Callback Received</h2>

      <div v-if="authenticationResponse"
class="completed">
        <p>✓ Callback URL was received and processed</p>
      </div>
      <p v-else>You've been redirected back from the OAuth provider with an authorization code.</p>

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

      <div v-if="authenticationResponse">
        <div v-if="decodedJwt"
class="completed">
          <p>✓ Authorization code was exchanged for tokens</p>
        </div>
        <p v-else>The authorization code has been successfully exchanged for tokens.</p>

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

    <!-- Decode Token -->
    <div v-if="authenticationResponse"
class="section">
      <h2>5. Decode ID Token</h2>

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

    <!-- Always visible Start Over button -->
    <div class="section"
style="text-align: center">
      <button
class="start-over-btn" @click="goBack">🔄 Start Over</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import CopyButton from '../../../components/CopyButton.vue';
import { useAuthenticationCallback } from '../../../composables/useAuthenticationCallback';
import '../../../assets/styles.css';

// Use the authentication callback composable - all business logic is in a separate file
const {
  finalizing,
  decoding,
  error,
  currentUrl,
  urlParams,
  authenticationResponse,
  tokenResponse,
  decodedJwt,
  jwtHeader,
  jwtPayload,
  CLIENT_CONFIG,
  finalize,
  decode,
  startOver: goBack,
} = useAuthenticationCallback();

// Code generation functions for UI display only
const getFinalizeCode = () => {
  const configEntries = Object.entries(CLIENT_CONFIG)
    .map(([key, value]) => `  ${key}: '${value}'`)
    .join(',\n');

  return `// Initialize the auth client
const authenticationClient = new VeridAuthenticationClient({
${configEntries}
});

// Exchange authorization code for tokens
const response = await authenticationClient.finalize();`;
};

const getDecodeCode = () => {
  return `// Decode and verify the ID token
const jwt = await authenticationClient.decode(response);

// JWT contains:
// - header: Algorithm, token type
// - payload: User claims (sub, iss, exp, etc.)`;
};
</script>
