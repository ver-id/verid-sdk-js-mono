import { ref, reactive } from 'vue';
import { VeridAuthenticationClient } from '@ver-id/browser-client';
import { formatError } from '../utils/errorHandler.js';

/**
 * Composable for handling Ver.iD Authentication flow
 * Encapsulates all authentication logic separate from the view
 */
export function useAuthentication() {
  // Configuration - reactive so it can be updated from form
  const clientConfig = reactive({
    issuerUri: import.meta.env.VITE_VERID_AUTHENTICATION_API_URL || '',
    clientId: import.meta.env.VITE_VERID_AUTHENTICATION_FLOW_ID || '',
    redirectUri: import.meta.env.VITE_VERID_AUTHENTICATION_REDIRECT_URI || 
      `${window.location.origin}/authentication/browser/callback`,
  });

  const authOptions = reactive({
    scope: import.meta.env.VITE_VERID_AUTHENTICATION_SCOPES || '',
  });

  // Optional intent configuration
  const useIntent = ref(false);
  const intentOptions = reactive({
    challenge: '',
    brandUuid: '',
  });

  // State
  const showConfigForm = ref(true);
  const clientInitialized = ref(false);
  const showIntentForm = ref(false);
  const intentCreated = ref(false);
  const loading = ref(false);
  const error = ref<string | null>(null);
  const authUrl = ref<string | null>(null);
  const intentId = ref<string | null>(null);
  const codeChallenge = ref<string | null>(null);
  const state = ref<string | null>(null);

  // The authentication client instance
  let authenticationClient: VeridAuthenticationClient | null = null;

  /**
   * Initialize the authentication client with current config
   */
  const initializeClient = () => {
    try {
      authenticationClient = new VeridAuthenticationClient(clientConfig);
      clientInitialized.value = true;
      showConfigForm.value = false;
      error.value = null;
    } catch (err) {
      handleError(err);
    }
  };

  /**
   * Enable intent-based flow
   */
  const enableIntentFlow = () => {
    useIntent.value = true;
  };

  /**
   * Skip to URL generation (direct flow)
   */
  const skipToUrlGeneration = () => {
    useIntent.value = false;
  };

  /**
   * Generate code challenge (for intent-based flow)
   */
  const generateCodeChallenge = async () => {
    if (!authenticationClient) return;

    loading.value = true;
    error.value = null;

    try {
      const result = await authenticationClient.generateCodeChallenge();
      codeChallenge.value = result.codeChallenge;
      state.value = result.state;
    } catch (err) {
      handleError(err);
    } finally {
      loading.value = false;
    }
  };

  /**
   * Create authentication intent (optional)
   */
  const createIntent = async () => {
    if (!authenticationClient || !codeChallenge.value) {
      error.value = 'Code challenge must be generated first';
      return;
    }

    loading.value = true;
    error.value = null;

    try {
      const payload: { challenge?: string; brandUuid?: string } = {};
      
      // Add optional parameters if provided
      if (intentOptions.challenge) payload.challenge = intentOptions.challenge;
      if (intentOptions.brandUuid) payload.brandUuid = intentOptions.brandUuid;

      const id = await authenticationClient.createAuthenticationIntent(payload, codeChallenge.value);
      
      intentId.value = id;
      intentCreated.value = true;
      showIntentForm.value = false;
    } catch (err) {
      handleError(err);
    } finally {
      loading.value = false;
    }
  };

  /**
   * Generate authentication URL with PKCE
   * If intent was created, uses intentId and PKCE params
   */
  const generateAuthUrl = async () => {
    if (!authenticationClient) return;

    loading.value = true;
    error.value = null;

    try {
      let authenticationUrl: string;

      if (useIntent.value && intentId.value && codeChallenge.value && state.value) {
        // Intent-based flow: use intentId and existing PKCE params
        const result = await authenticationClient.generateAuthenticationUrl({
          scope: authOptions.scope,
          intentId: intentId.value,
          state: state.value,
          codeChallenge: codeChallenge.value,
        });
        authenticationUrl = result.authenticationUrl;
      } else {
        // Direct flow: generate URL without intent
        const result = await authenticationClient.generateAuthenticationUrl(authOptions);
        authenticationUrl = result.authenticationUrl;
      }

      authUrl.value = authenticationUrl;
    } catch (err) {
      handleError(err);
    } finally {
      loading.value = false;
    }
  };

  /**
   * Redirect to the authorization server
   */
  const redirectToAuthServer = () => {
    if (!authUrl.value) return;
    window.location.href = authUrl.value;
  };

  /**
   * Handle errors
   */
  const handleError = (err: unknown) => {
    error.value = formatError(err);
  };

  /**
   * Reset all state to initial values
   */
  const startOver = () => {
    authUrl.value = null;
    intentId.value = null;
    codeChallenge.value = null;
    state.value = null;
    intentCreated.value = false;
    showConfigForm.value = true;
    showIntentForm.value = false;
    clientInitialized.value = false;
    useIntent.value = false;
    authenticationClient = null;
    error.value = null;
  };

  return {
    // State
    showConfigForm,
    showIntentForm,
    clientInitialized,
    intentCreated,
    loading,
    error,
    authUrl,
    intentId,
    codeChallenge,
    state,

    // Configuration (reactive, can be modified)
    clientConfig,
    authOptions,
    useIntent,
    intentOptions,

    // Actions
    initializeClient,
    enableIntentFlow,
    skipToUrlGeneration,
    generateCodeChallenge,
    createIntent,
    generateAuthUrl,
    redirectToAuthServer,
    startOver,
  };
}
