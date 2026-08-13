import { ref, shallowRef, onBeforeUnmount } from 'vue';
import {
  mountVeridEmbeddedComponent,
  type VeridEmbeddedComponent,
} from '@ver-id/embedded-browser-client';
import { formatError } from '../utils/errorHandler.js';

const API_URL = `${import.meta.env.VITE_NODE_SERVER_URL}/api`;

/** The three flow scopes that support embedded mode. */
export type EmbeddedScope = 'authentication' | 'disclosure' | 'issuance';

/**
 * The public bootstrap the backend hands the browser. Notably absent: `code_verifier`
 * and the authorization code — both stay server-side for the whole flow.
 */
export interface EmbeddedBootstrap {
  clientId: string;
  scope: string;
  state: string;
  codeChallenge: string;
  webhookUri: string;
  gatewayUri: string;
  intentId?: string;
}

/**
 * Where the flow currently is. `awaitingResult` is unique to embedded mode: the
 * iframe reported completion, but the result only exists once the backend has
 * processed the webhook.
 */
export type EmbeddedStatus =
  | 'idle'
  | 'starting'
  | 'mounted'
  | 'ready'
  | 'awaitingResult'
  | 'done'
  | 'cancelled'
  | 'failed';

/** Options for the optional (authentication, disclosure) / mandatory (issuance) intent. */
export interface EmbeddedIntentOptions {
  useIntent: boolean;
  challenge: string;
  brandUuid: string;
  requireExplicitConsent: boolean | undefined;
  /**
   * Issuance only: what is being issued. Exactly one of `mapping` or `data`.
   */
  payload: {
    mapping?: Record<string, unknown>;
    data?: { attributeUuid: string; value: unknown }[];
  };
}

/**
 * Composable for the embedded flow, shared by all three scopes. Fetches the
 * bootstrap from your backend, mounts the Ver.iD iframe, and polls for the
 * result once the flow completes.
 */
export function useEmbeddedSession(scope: EmbeddedScope) {
  const base = `${API_URL}/${scope}/embedded`;

  // Embedded clients send no redirectUri, even though the flow may have one
  // registered for redirect mode.
  const clientConfig = ref({
    issuerUri: '',
    clientId: '',
  });

  const showConfigForm = ref(false);
  const clientInitialized = ref(false);
  const loading = ref(false);
  const error = ref<string | null>(null);
  const status = ref<EmbeddedStatus>('idle');

  // Reported by the backend at initialize time so the UI can warn early.
  const webhookReachable = ref(true);
  const webhookUri = ref<string | null>(null);
  const flowScope = ref<string | null>(null);

  const bootstrap = ref<EmbeddedBootstrap | null>(null);
  const result = ref<unknown>(null);
  const cancelled = ref(false);

  // Set once the flow reaches a terminal state, so late iframe messages are
  // ignored while the frame is still on screen.
  let terminated = false;

  // Server-side snippets returned by the backend for each step.
  const initCode = ref('');
  const startCode = ref('');
  const webhookCode = ref('');
  const resultCode = ref('');

  const session = shallowRef<VeridEmbeddedComponent | null>(null);

  const handleError = (err: unknown) => {
    error.value = formatError(err);
    status.value = 'failed';
  };

  /**
   * Step 1 (SERVER) — ask the backend to construct the embedded client.
   */
  const initializeClient = async () => {
    loading.value = true;
    error.value = null;

    try {
      const response = await fetch(`${base}/initialize`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(clientConfig.value),
      });
      const data = await response.json();

      if (!data.success) {
        error.value = data.error || 'Failed to initialize client';
        return;
      }

      clientInitialized.value = true;
      showConfigForm.value = false;
      initCode.value = data.code;
      webhookReachable.value = data.webhookReachable;
      webhookUri.value = data.webhookUri;
      flowScope.value = data.scope;
    } catch (err) {
      handleError(err);
    } finally {
      loading.value = false;
    }
  };

  /**
   * Step 2 (SERVER) — create the embedded session and get the public bootstrap.
   * An optional intent is created in the same call, bound to the session's code
   * challenge; issuance always passes `useIntent: true`.
   */
  const startSession = async (intent?: Partial<EmbeddedIntentOptions>) => {
    loading.value = true;
    error.value = null;
    status.value = 'starting';

    try {
      const body: Record<string, unknown> = {};

      if (intent?.useIntent) {
        body.useIntent = true;
        if (intent.challenge) body.challenge = intent.challenge;
        if (intent.brandUuid) body.brandUuid = intent.brandUuid;
        if (intent.requireExplicitConsent !== undefined) {
          body.requireExplicitConsent = intent.requireExplicitConsent;
        }
        if (intent.payload) body.payload = intent.payload;
      }

      const response = await fetch(`${base}/start`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const data = await response.json();

      if (!data.success) {
        error.value = data.error || 'Failed to start embedded session';
        status.value = 'failed';
        return;
      }

      bootstrap.value = data.bootstrap;
      startCode.value = data.code;
    } catch (err) {
      handleError(err);
    } finally {
      loading.value = false;
    }
  };

  /**
   * Steps 3-5 (BROWSER) — mount the Ver.iD iframe and wire the lifecycle.
   */
  const mountSession = (container: HTMLElement) => {
    if (!bootstrap.value) {
      error.value = 'No bootstrap available. Start the session first.';
      return;
    }

    try {
      terminated = false;

      const embedded = mountVeridEmbeddedComponent({
        container,
        ...bootstrap.value,
        iframe: {
          style: { width: '100%', height: '640px', border: '0' },
        },
      });

      embedded.addEventListener('ready', () => {
        if (terminated) return;
        status.value = 'ready';
      });

      embedded.addEventListener('complete', () => {
        if (terminated) return;
        // Lifecycle signal only, not a result — the backend is finalizing from
        // the webhook, so poll it.
        void awaitResult();
      });

      embedded.addEventListener('error', (event) => {
        if (terminated) return;
        terminated = true;
        error.value = event.detail.error_description ?? event.detail.error;
        status.value = 'failed';
        // The iframe stays mounted so its error screen remains readable; it is
        // torn down on start over or unmount.
      });

      embedded.addEventListener('cancel', () => {
        if (terminated) return;
        terminated = true;
        cancelled.value = true;
        status.value = 'cancelled';
        destroySession();
      });

      session.value = embedded;
      status.value = 'mounted';
    } catch (err) {
      handleError(err);
    }
  };

  /**
   * Step 7 (BROWSER) — poll the backend for the result it finalized.
   */
  const awaitResult = async (timeoutMs = 60_000) => {
    if (!bootstrap.value) return;

    const state = bootstrap.value.state;
    const deadline = Date.now() + timeoutMs;
    status.value = 'awaitingResult';

    try {
      while (Date.now() < deadline) {
        const response = await fetch(`${base}/result?state=${encodeURIComponent(state)}`);

        if (response.status === 404) {
          throw new Error('The session expired, or its result was already consumed.');
        }

        const data = await response.json();

        if (data.ready && data.status === 'error') {
          throw new Error(data.error);
        }

        if (data.ready) {
          result.value = data.token;
          resultCode.value = data.code ?? '';
          webhookCode.value = data.webhookCode ?? '';
          status.value = 'done';
          destroySession();
          return;
        }

        await new Promise((resolve) => setTimeout(resolve, 750));
      }

      throw new Error('Timed out waiting for the backend to finalize the flow.');
    } catch (err) {
      handleError(err);
      destroySession();
    }
  };

  /** Detach the message listener and remove the iframe. */
  const destroySession = () => {
    session.value?.destroy();
    session.value = null;
  };

  const startOver = () => {
    terminated = false;
    destroySession();
    clientInitialized.value = false;
    showConfigForm.value = false;
    loading.value = false;
    error.value = null;
    status.value = 'idle';
    bootstrap.value = null;
    result.value = null;
    cancelled.value = false;
    initCode.value = '';
    startCode.value = '';
    webhookCode.value = '';
    resultCode.value = '';
    clientConfig.value = { issuerUri: '', clientId: '' };
  };

  // Navigating away must not leave a window-level message listener behind.
  onBeforeUnmount(destroySession);

  return {
    // State
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

    // Code examples
    initCode,
    startCode,
    webhookCode,
    resultCode,

    // Actions
    initializeClient,
    startSession,
    mountSession,
    awaitResult,
    destroySession,
    startOver,
  };
}

/**
 * Browser-side code examples.
 *
 * These are static because they document what the *page itself* does — the
 * server-side snippets are generated by the backend and returned per step.
 */
export const EMBEDDED_BROWSER_SNIPPETS = {
  fetchBootstrap: (scope: EmbeddedScope) => `// BROWSER — fetch the bootstrap from YOUR backend
const bootstrap = await fetch('/api/${scope}/embedded/start', {
  method: 'POST',
}).then((r) => r.json());

// bootstrap = { clientId, scope, state, codeChallenge, webhookUri, gatewayUri }
// No code_verifier, no authorization code — those never reach the browser.`,

  mount: `// BROWSER — mount the Ver.iD iframe
import { mountVeridEmbeddedComponent } from '@ver-id/embedded-browser-client';

const veridComponent = mountVeridEmbeddedComponent({
  container: embedContainer.value,   // an HTMLElement, or an existing <iframe>
  ...bootstrap,
  iframe: {
    style: { width: '100%', height: '640px', border: '0' },
    // defaults: allow="camera; microphone"
    //           sandbox="allow-scripts allow-same-origin"
  },
});`,

  listeners: `// BROWSER — attach the lifecycle listeners
veridComponent.addEventListener('ready', () => {
  // The iframe has loaded and is interactive.
  loading.value = false;
});

veridComponent.addEventListener('complete', () => {
  // IMPORTANT: this is a lifecycle signal, NOT a result.
  // There is no token and no authorization code in this event — the backend
  // is finalizing from the webhook. Start awaiting its result.
  awaitResult();
});

veridComponent.addEventListener('error', (event) => {
  error.value = event.detail.error_description ?? event.detail.error;
  // Leave the component mounted: the iframe is showing the Ver.iD error screen.
});

veridComponent.addEventListener('cancel', () => {
  // The user backed out.
  veridComponent.destroy();
});

// Always destroy on unmount so the window message listener is detached and the
// iframe is removed.
onBeforeUnmount(() => veridComponent.destroy());`,

  poll: (scope: EmbeddedScope) => `// BROWSER — poll your backend for the finalized result
async function awaitResult(state, timeoutMs = 60_000) {
  const deadline = Date.now() + timeoutMs;

  while (Date.now() < deadline) {
    const res = await fetch(\`/api/${scope}/embedded/result?state=\${state}\`);
    const data = await res.json();

    if (data.ready && data.status === 'error') throw new Error(data.error);
    if (data.ready) return data.token;

    await new Promise((r) => setTimeout(r, 750));
  }

  throw new Error('Timed out waiting for the backend to finalize the flow.');
}

// In production prefer SSE or a WebSocket over polling, and authorize the
// lookup against the user's own session rather than a bare state value.`,
};
