import { ref, reactive } from 'vue';
import { VeridIssuanceClient } from '@ver-id/browser-client';
import { formatError } from '../utils/errorHandler.js';

/**
 * Composable for handling Ver.iD Issuance flow
 * Encapsulates all issuance logic separate from the view
 * NOTE: Intent creation is MANDATORY for issuance flow
 */
export function useIssuance() {
  // Reactive configuration that can be edited by the user
  const clientConfig = reactive({
    issuerUri: import.meta.env.VITE_VERID_ISSUANCE_API_URL || '',
    client_id: import.meta.env.VITE_VERID_ISSUANCE_FLOW_ID || '',
    redirectUri: import.meta.env.VITE_VERID_ISSUANCE_REDIRECT_URI || '',
  });

  // Intent configuration (mandatory for issuance)
  const intentOptions = reactive({
    challenge: '',
    brandUuid: '',
    requireExplicitConsent: undefined,
    payload: {
      mapping: {} as Record<string, unknown>,
      data: [] as Array<{
        attributeUuid: string;
        credentialUuid: string;
        issuerUuid: string;
        schemeUuid: string;
        providerUuid: string;
        value: unknown;
      }>,
    },
  });

  // State
  const showConfigForm = ref(true);
  const clientInitialized = ref(false);
  const intentCreated = ref(false);
  const loading = ref(false);
  const error = ref<string | null>(null);
  const issuanceUrl = ref<string | null>(null);
  const intentId = ref<string | null>(null);
  const codeChallenge = ref<string | null>(null);
  const state = ref<string | null>(null);

  // The issuance client instance
  let issuanceClient: VeridIssuanceClient | null = null;

  /**
   * Initialize the issuance client
   */
  const initializeClient = () => {
    try {
      issuanceClient = new VeridIssuanceClient(clientConfig);
      clientInitialized.value = true;
      showConfigForm.value = false;
      error.value = null;
    } catch (err) {
      handleError(err);
    }
  };

  /**
   * Generate code challenge (mandatory for issuance)
   */
  const generateCodeChallenge = async () => {
    if (!issuanceClient) return;

    loading.value = true;
    error.value = null;

    try {
      const result = await issuanceClient.generateCodeChallenge();
      codeChallenge.value = result.codeChallenge;
      state.value = result.state;
    } catch (err) {
      handleError(err);
    } finally {
      loading.value = false;
    }
  };

  /**
   * Create issuance intent (MANDATORY for issuance flow)
   */
  const createIntent = async () => {
    if (!issuanceClient || !codeChallenge.value) {
      error.value = 'Code challenge must be generated first';
      return;
    }

    loading.value = true;
    error.value = null;

    try {
      // Build payload object - include only mapping or data, not both
      const payloadObj: {
        mapping?: Record<string, unknown>;
        data?: Array<{
          attributeUuid: string;
          credentialUuid: string;
          issuerUuid: string;
          schemeUuid: string;
          providerUuid: string;
          value: unknown;
        }>;
      } = {};
      
      // Include mapping if it's defined and has keys
      if (intentOptions.payload.mapping && Object.keys(intentOptions.payload.mapping).length > 0) {
        payloadObj.mapping = intentOptions.payload.mapping;
      }
      // Include data if it's defined and has items
      else if (intentOptions.payload.data && intentOptions.payload.data.length > 0) {
        payloadObj.data = intentOptions.payload.data;
      }
      
      const payload: { 
        payload: typeof payloadObj;
        challenge?: string; 
        brandUuid?: string;
        requireExplicitConsent?: boolean;
      } = {
        payload: payloadObj,
      };
      
      // Add optional parameters if provided
      if (intentOptions.challenge) payload.challenge = intentOptions.challenge;
      if (intentOptions.brandUuid) payload.brandUuid = intentOptions.brandUuid;
      if (intentOptions.requireExplicitConsent !== undefined) payload.requireExplicitConsent = intentOptions.requireExplicitConsent;

      const id = await issuanceClient.createIssuanceIntent(payload, codeChallenge.value);
      
      intentId.value = id;
      intentCreated.value = true;
    } catch (err) {
      handleError(err);
    } finally {
      loading.value = false;
    }
  };

  /**
   * Generate issuance URL with intent
   * Intent is MANDATORY for issuance, so always uses intent_id and PKCE params
   */
  const generateIssuanceUrl = async () => {
    if (!issuanceClient) return;

    if (!intentId.value || !codeChallenge.value || !state.value) {
      error.value = 'Intent must be created before generating URL';
      return;
    }

    loading.value = true;
    error.value = null;

    try {
      // Issuance always requires intent
      const result = await issuanceClient.generateIssuanceUrl({
        intent_id: intentId.value,
        state: state.value,
        codeChallenge: codeChallenge.value,
      });
      
      issuanceUrl.value = result.issuanceUrl;
    } catch (err) {
      handleError(err);
    } finally {
      loading.value = false;
    }
  };

  /**
   * Redirect to the issuance server
   */
  const redirectToIssuanceServer = () => {
    if (!issuanceUrl.value) return;
    window.location.href = issuanceUrl.value;
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
    issuanceUrl.value = null;
    intentId.value = null;
    codeChallenge.value = null;
    state.value = null;
    intentCreated.value = false;
    clientInitialized.value = false;
    showConfigForm.value = true;
    issuanceClient = null;
    error.value = null;
  };

  return {
    // State
    showConfigForm,
    clientInitialized,
    intentCreated,
    loading,
    error,
    issuanceUrl,
    intentId,
    codeChallenge,
    state,

    // Reactive configuration (for forms and code generation)
    clientConfig,
    intentOptions,

    // Actions
    initializeClient,
    generateCodeChallenge,
    createIntent,
    generateIssuanceUrl,
    redirectToIssuanceServer,
    startOver,
  };
}
