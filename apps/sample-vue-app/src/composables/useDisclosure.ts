import { ref, reactive } from 'vue';
import { VeridDisclosureClient } from '@ver-id/browser-client';
import { formatError } from '../utils/errorHandler.js';

/**
 * Composable for handling Ver.iD Disclosure flow
 * Encapsulates all disclosure logic separate from the view
 */
export function useDisclosure() {
  // Reactive configuration that can be edited by the user
  const clientConfig = reactive({
    issuerUri: import.meta.env.VITE_VERID_DISCLOSURE_API_URL || '',
    client_id: import.meta.env.VITE_VERID_DISCLOSURE_FLOW_ID || '',
    redirectUri: import.meta.env.VITE_VERID_DISCLOSURE_REDIRECT_URI || '',
  });

  // Optional intent configuration
  const useIntent = ref(false);
  const intentOptions = reactive({
    challenge: '',
    brandUuid: '',
    useRequireExplicitConsent: false,
    requireExplicitConsent: false,
  });

  // State
  const showConfigForm = ref(true);
  const clientInitialized = ref(false);
  const intentCreated = ref(false);
  const loading = ref(false);
  const error = ref<string | null>(null);
  const disclosureUrl = ref<string | null>(null);
  const intentId = ref<string | null>(null);
  const codeChallenge = ref<string | null>(null);
  const state = ref<string | null>(null);

  // The disclosure client instance
  let disclosureClient: VeridDisclosureClient | null = null;

  /**
   * Initialize the disclosure client
   */
  const initializeClient = () => {
    try {
      disclosureClient = new VeridDisclosureClient(clientConfig);
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
   * Generate code challenge (for intent-based flow)
   */
  const generateCodeChallenge = async () => {
    if (!disclosureClient) return;

    loading.value = true;
    error.value = null;

    try {
      const result = await disclosureClient.generateCodeChallenge();
      codeChallenge.value = result.codeChallenge;
      state.value = result.state;
    } catch (err) {
      handleError(err);
    } finally {
      loading.value = false;
    }
  };

  /**
   * Create disclosure intent (optional)
   */
  const createIntent = async () => {
    if (!disclosureClient || !codeChallenge.value) {
      error.value = 'Code challenge must be generated first';
      return;
    }

    loading.value = true;
    error.value = null;

    try {
      const payload: { challenge?: string; brandUuid?: string; requireExplicitConsent?: boolean } = {};
      
      // Add optional parameters if provided
      if (intentOptions.challenge) payload.challenge = intentOptions.challenge;
      if (intentOptions.brandUuid) payload.brandUuid = intentOptions.brandUuid;
      if (intentOptions.useRequireExplicitConsent) payload.requireExplicitConsent = intentOptions.requireExplicitConsent;

      const id = await disclosureClient.createDisclosureIntent(payload, codeChallenge.value);
      
      intentId.value = id;
      intentCreated.value = true;
    } catch (err) {
      handleError(err);
    } finally {
      loading.value = false;
    }
  };

  /**
   * Generate disclosure URL with PKCE
   * If intent was created, uses intent_id and PKCE params
   */
  const generateDisclosureUrl = async () => {
    if (!disclosureClient) return;

    loading.value = true;
    error.value = null;

    try {
      let url: string;

      if (useIntent.value && intentId.value && codeChallenge.value && state.value) {
        // Intent-based flow: use intent_id and existing PKCE params
        const result = await disclosureClient.generateDisclosureUrl({
          intent_id: intentId.value,
          state: state.value,
          codeChallenge: codeChallenge.value,
        });
        url = result.disclosureUrl;
      } else {
        // Direct flow: generate URL without intent
        const result = await disclosureClient.generateDisclosureUrl();
        url = result.disclosureUrl;
      }

      disclosureUrl.value = url;
    } catch (err) {
      handleError(err);
    } finally {
      loading.value = false;
    }
  };

  /**
   * Redirect to the disclosure server
   */
  const redirectToDisclosureServer = () => {
    if (!disclosureUrl.value) return;
    window.location.href = disclosureUrl.value;
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
    disclosureUrl.value = null;
    intentId.value = null;
    codeChallenge.value = null;
    state.value = null;
    intentCreated.value = false;
    clientInitialized.value = false;
    showConfigForm.value = true;
    useIntent.value = false;
    disclosureClient = null;
    error.value = null;
  };

  return {
    // State
    showConfigForm,
    clientInitialized,
    intentCreated,
    loading,
    error,
    disclosureUrl,
    intentId,
    codeChallenge,
    state,

    // Reactive configuration (for forms and code generation)
    clientConfig,
    useIntent,
    intentOptions,

    // Actions
    initializeClient,
    enableIntentFlow,
    generateCodeChallenge,
    createIntent,
    generateDisclosureUrl,
    redirectToDisclosureServer,
    startOver,
  };
}
