<template>
  <div class="auth-container">
    <h1>Embedded Disclosure</h1>
    <p class="description">
      This page demonstrates how to run a Ver.iD disclosure flow <strong>inside an iframe on your
        own page</strong>, using @ver-id/embedded-browser-client in the browser and
      @ver-id/embedded-node-client on your server.
    </p>

    <div class="lifecycle-note">
      <strong>How embedded mode differs:</strong> there is no redirect and no callback route. Your
      server holds the PKCE verifier, Ver.iD delivers the authorization code to your server on a
      signed webhook, and the browser only learns that the flow <em>finished</em> — never the
      result itself.
    </div>

    <!-- Step 1 (SERVER) -->
    <div class="section step-server">
      <h2><span class="step-badge server">Server</span>1. Initialize the embedded client</h2>

      <div
        v-if="clientInitialized"
        class="completed"
      >
        <p>✓ Embedded disclosure client initialized on the server</p>
      </div>

      <div
        v-if="showConfigForm && !clientInitialized"
        class="config-form"
      >
        <h3>Client Configuration</h3>
        <div class="form-group">
          <label for="issuerUri">API URL:</label>
          <input
            id="issuerUri"
            v-model="clientConfig.issuerUri"
            type="text"
            placeholder="https://ssi.oauth.ver.id"
          >
        </div>
        <div class="form-group">
          <label for="clientId">Embedded Disclosure Flow ID:</label>
          <input
            id="clientId"
            v-model="clientConfig.clientId"
            type="text"
            :placeholder="defaultFlowId || 'flow uuid'"
          >
          <small>
            The same flow can serve <strong>both</strong> redirect and embedded mode — a flow
            carries both delivery configs. For embedded it additionally needs an allowed embed
            origin and a registered webhook URI. Leave blank to use the server's
            VERID_EMBEDDED_DISCLOSURE_FLOW_ID.
          </small>
        </div>
      </div>

      <p v-if="!clientInitialized && !showConfigForm">
        The embedded client sends <strong>no redirect URI</strong> — not on the authorize request
        and not on the token exchange. The authorization code is bound to the client purely
        through PKCE.
      </p>

      <button
        v-if="!clientInitialized"
        class="btn-secondary"
        @click="showConfigForm = !showConfigForm"
      >
        {{ showConfigForm ? 'Hide' : 'Show' }} Configuration
      </button>
      <button
        v-if="!clientInitialized"
        class="btn-primary"
        :disabled="loading"
        @click="initializeClient"
      >
        {{ loading ? 'Initializing...' : 'Initialize Client on Server' }}
      </button>

      <div
        v-if="clientInitialized && !webhookReachable"
        class="warning"
      >
        <h3>⚠️ The webhook is not publicly reachable</h3>
        <p>
          Ver.iD calls your webhook <strong>server-to-server</strong>, so
          <code>localhost</code> will never work and this flow cannot complete.
        </p>
        <p>
          Set <code>VERID_WEBHOOK_PUBLIC_URL</code> on the sample server. In Garden, your profile
          host already resolves to your machine from inside the cluster (e.g.
          <code>https://&lt;profile&gt;.ver.garden:13370</code>). Otherwise run a tunnel:
          <code>cloudflared tunnel --url http://localhost:3000</code>.
        </p>
      </div>

      <div
        v-if="clientInitialized && webhookReachable"
        class="info"
      >
        <h3>Webhook target</h3>
        <pre>{{ webhookUri }}</pre>
        <p class="note">
          Scope requested: <code>{{ flowScope }}</code>
        </p>
      </div>

      <div
        v-if="initCode"
        class="code-example"
      >
        <h3>Server-Side Code Executed:</h3>
        <pre><code>{{ initCode }}</code></pre>
      </div>
    </div>

    <!-- Step 2 (SERVER) -->
    <div
      v-if="clientInitialized"
      class="section step-server"
    >
      <h2><span class="step-badge server">Server</span>2. Create the embedded session</h2>

      <div
        v-if="bootstrap"
        class="completed"
      >
        <p>✓ Session created — the browser received the public bootstrap</p>
      </div>

      <p v-if="!bootstrap">
        The server generates PKCE and returns only the <em>public</em> half. The
        <code>code_verifier</code> stays server-side, cached against the <code>state</code>.
      </p>

      <div
        v-if="!bootstrap"
        class="config-form"
      >
        <h3>Optional: Intent-based flow</h3>
        <div class="form-group">
          <label>
            <input
              v-model="intentOptions.useIntent"
              type="checkbox"
            >
            Create a disclosure intent
          </label>
          <small>
            Intents allow a custom challenge, brand, and explicit consent. The intent is created on
            the server <strong>after</strong> the session, so it can be bound to that session's code
            challenge.
          </small>
        </div>

        <template v-if="intentOptions.useIntent">
          <div class="form-group">
            <label for="challenge">Challenge (optional):</label>
            <input
              id="challenge"
              v-model="intentOptions.challenge"
              type="text"
              placeholder="custom-challenge-string"
            >
          </div>
          <div class="form-group">
            <label for="brandUuid">Brand UUID (optional):</label>
            <input
              id="brandUuid"
              v-model="intentOptions.brandUuid"
              type="text"
              placeholder="brand-uuid-123"
            >
          </div>
          <div class="form-group">
            <label>Require explicit consent (optional):</label>
            <div>
              <label style="margin-right: 15px; font-weight: normal;">
                <input
                  v-model="intentOptions.requireExplicitConsent"
                  type="radio"
                  :value="true"
                > True
              </label>
              <label style="font-weight: normal;">
                <input
                  v-model="intentOptions.requireExplicitConsent"
                  type="radio"
                  :value="false"
                > False
              </label>
            </div>
          </div>
        </template>
      </div>

      <button
        v-if="!bootstrap"
        class="btn-primary"
        :disabled="loading || !webhookReachable"
        @click="startSession(intentOptions)"
      >
        {{ loading ? 'Creating session...' : 'Create Embedded Session' }}
      </button>

      <div
        v-if="bootstrap"
        class="info"
      >
        <h3>Bootstrap handed to the browser:</h3>
        <pre>{{ JSON.stringify(bootstrap, null, 2) }}</pre>
        <p class="note">
          <strong>Note:</strong> no <code>code_verifier</code> and no authorization code. Neither
          ever reaches the browser.
        </p>
      </div>

      <div
        v-if="startCode"
        class="code-example"
      >
        <h3>Server-Side Code Executed:</h3>
        <pre><code>{{ startCode }}</code></pre>
      </div>
    </div>

    <!-- Step 3 (BROWSER) -->
    <div
      v-if="bootstrap"
      class="section step-browser"
    >
      <h2><span class="step-badge browser">Browser</span>3. Fetch the bootstrap</h2>
      <p>The page asks its own backend to start a session. This already happened in step 2.</p>
      <div class="code-example">
        <h3>Browser-Side Code:</h3>
        <pre><code>{{ snippets.fetchBootstrap('disclosure') }}</code></pre>
      </div>
    </div>

    <!-- Step 4 (BROWSER) -->
    <div
      v-if="bootstrap"
      class="section step-browser"
    >
      <h2><span class="step-badge browser">Browser</span>4. Mount the Ver.iD iframe</h2>

      <p v-if="status === 'starting'">
        Mount the session to render the flow inline. The iframe origin is pinned as the trust
        anchor for all postMessage traffic.
      </p>

      <button
        v-if="status === 'starting'"
        class="btn-primary"
        @click="mount"
      >
        Mount Embedded Session
      </button>

      <div class="status-line">
        <span
          class="status-dot"
          :class="statusDotClass"
        />
        <span>{{ statusLabel }}</span>
      </div>

      <div
        ref="embedContainer"
        class="embed-frame"
        :class="{ 'is-empty': status === 'starting' }"
      >
        <template v-if="status === 'starting'">
          The Ver.iD flow will render here.
        </template>
      </div>

      <div class="code-example">
        <h3>Browser-Side Code:</h3>
        <pre><code>{{ snippets.mount }}</code></pre>
      </div>
    </div>

    <!-- Step 5 (BROWSER) -->
    <div
      v-if="bootstrap"
      class="section step-browser"
    >
      <h2><span class="step-badge browser">Browser</span>5. Attach lifecycle listeners</h2>

      <div class="lifecycle-note">
        <strong>The one thing to get right:</strong> <code>complete</code> is a lifecycle signal,
        not a result. It means "the flow finished — go ask your backend", not "here is the token".
        The authorization code is delivered to your server on the webhook and never touches the
        browser.
      </div>

      <div class="code-example">
        <h3>Browser-Side Code:</h3>
        <pre><code>{{ snippets.listeners }}</code></pre>
      </div>
    </div>

    <!-- Step 6 (SERVER) -->
    <div
      v-if="bootstrap"
      class="section step-server"
    >
      <h2><span class="step-badge server">Server</span>6. Verify the webhook and finalize</h2>

      <p>
        Ver.iD POSTs the authorization code to your webhook, signed with
        <code>x-signature-256</code>. Your server verifies the HMAC over the
        <strong>raw bytes</strong>, exchanges the code using the cached verifier, and parks the
        result under the <code>state</code>.
      </p>

      <div class="code-example">
        <h3>Server-Side Code:</h3>
        <pre><code>{{ webhookCode || fallbackWebhookNote }}</code></pre>
      </div>
    </div>

    <!-- Step 7 (BROWSER) -->
    <div
      v-if="bootstrap"
      class="section step-browser"
    >
      <h2><span class="step-badge browser">Browser</span>7. Poll for the result</h2>

      <div
        v-if="status === 'done'"
        class="completed"
      >
        <p>✓ Disclosure completed and the token was decoded on the server</p>
      </div>

      <div
        v-if="status === 'awaitingResult'"
        class="status-line"
      >
        <span class="status-dot active" />
        <span>Waiting for the backend to finalize the flow from the webhook…</span>
      </div>

      <div
        v-if="result"
        class="token-display"
      >
        <h3>Decoded token:</h3>
        <pre>{{ JSON.stringify(result, null, 2) }}</pre>
      </div>

      <div class="code-example">
        <h3>Browser-Side Code:</h3>
        <pre><code>{{ snippets.poll('disclosure') }}</code></pre>
      </div>
    </div>

    <!-- Cancelled / Error -->
    <div
      v-if="cancelled"
      class="section"
    >
      <h2>Flow cancelled</h2>
      <p>The user backed out of the flow. The session was destroyed.</p>
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

    <!-- How it works -->
    <div class="section">
      <h2>How it Works</h2>
      <ol>
        <li>
          <strong>[Server]</strong> Create an <code>VeridEmbeddedDisclosureClient</code> — it sends no
          redirect URI
        </li>
        <li>
          <strong>[Server]</strong> <code>createEmbeddedSession()</code> generates PKCE and returns
          the public bootstrap; the verifier stays cached against the state
        </li>
        <li>
          <strong>[Browser]</strong> Fetch that bootstrap from your own backend
        </li>
        <li>
          <strong>[Browser]</strong> <code>mountVeridEmbeddedComponent()</code> mounts the Ver.iD iframe and
          posts <code>ronan:init</code> to the pinned origin
        </li>
        <li>
          <strong>[Browser]</strong> Lifecycle events arrive as <code>ready</code> /
          <code>complete</code> / <code>error</code> / <code>cancel</code>
        </li>
        <li>
          <strong>[Server]</strong> The signed webhook arrives; verify the HMAC, exchange the code,
          decode the token, store it under the state
        </li>
        <li>
          <strong>[Browser]</strong> On <code>complete</code>, poll your backend for the result
        </li>
      </ol>
    </div>

    <div
      v-if="clientInitialized"
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
import { computed, reactive, ref } from 'vue';
import '../../../assets/init-styles.css';
import '../../../assets/embedded-styles.css';
import {
  useEmbeddedSession,
  EMBEDDED_BROWSER_SNIPPETS as snippets,
} from '../../../composables/useEmbeddedSession.js';

const defaultFlowId = import.meta.env.VITE_VERID_EMBEDDED_DISCLOSURE_FLOW_ID || '';

const {
  clientConfig,
  showConfigForm,
  clientInitialized,
  loading,
  error,
  status,
  webhookReachable,
  webhookUri,
  flowScope,
  bootstrap,
  result,
  cancelled,
  initCode,
  startCode,
  webhookCode,
  initializeClient,
  startSession,
  mountSession,
  startOver,
} = useEmbeddedSession('disclosure');

const embedContainer = ref<HTMLElement | null>(null);

const intentOptions = reactive({
  useIntent: false,
  challenge: '',
  brandUuid: '',
  requireExplicitConsent: undefined as boolean | undefined,
});

const mount = () => {
  if (embedContainer.value) {
    mountSession(embedContainer.value);
  }
};

const statusLabel = computed(() => {
  switch (status.value) {
    case 'starting':
      return 'Session created — not mounted yet';
    case 'mounted':
      return 'Iframe mounted, waiting for the Ver.iD component to become ready…';
    case 'ready':
      return 'Ready — the user is completing the flow';
    case 'awaitingResult':
      return 'Flow finished — awaiting the backend result';
    case 'done':
      return 'Completed';
    case 'cancelled':
      return 'Cancelled by the user';
    case 'failed':
      return 'Failed';
    default:
      return 'Idle';
  }
});

const statusDotClass = computed(() => {
  if (status.value === 'done') return 'done';
  if (status.value === 'failed' || status.value === 'cancelled') return 'failed';
  if (status.value === 'idle' || status.value === 'starting') return '';
  return 'active';
});

// The real webhook snippet is returned by the server alongside the result, so it
// reflects what actually ran. Until then, show the shape it will take.
const fallbackWebhookNote = `// SERVER — POST /api/disclosure/embedded/webhook
//
// The exact snippet that ran is returned alongside the result in step 7.
// Mounted with a RAW body parser, because the HMAC covers the exact bytes:
//   app.use('/api/disclosure/embedded/webhook', express.text({ type: '*/*' }));
//   app.use(express.json());

const result = await disclosureClient.finalizeEmbedded({
  rawBody: req.body,
  signature: req.header('x-signature-256'),
  secret: process.env.VERID_EMBEDDED_DISCLOSURE_WEBHOOK_SECRET,
  clientAuth: { client_secret: '*****' },
});

const token = await disclosureClient.decode(result, assertDisclosureV1JwtPayload);
embeddedResultStore.resolve(result.state, token);`;
</script>
