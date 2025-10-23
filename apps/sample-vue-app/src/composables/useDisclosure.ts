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
    apiUrl: import.meta.env.VITE_VERID_DISCLOSURE_API_URL || '',
    disclosureFlowId: import.meta.env.VITE_VERID_DISCLOSURE_FLOW_ID || '',
    redirectUri: import.meta.env.VITE_VERID_DISCLOSURE_REDIRECT_URI || '',
  });

  // State
  const showConfigForm = ref(true);
  const clientInitialized = ref(false);
  const loading = ref(false);
  const error = ref<string | null>(null);
  const disclosureUrl = ref<string | null>(null);

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
   * Generate disclosure URL with PKCE
   */
  const generateDisclosureUrl = async () => {
    if (!disclosureClient) return;

    loading.value = true;
    error.value = null;

    try {
      const { disclosureUrl: url } = await disclosureClient.generateDisclosureUrl();

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
    clientInitialized.value = false;
    showConfigForm.value = true;
    disclosureClient = null;
    error.value = null;
  };

  return {
    // State
    showConfigForm,
    clientInitialized,
    loading,
    error,
    disclosureUrl,

    // Reactive configuration (for forms and code generation)
    clientConfig,

    // Actions
    initializeClient,
    generateDisclosureUrl,
    redirectToDisclosureServer,
    startOver,
  };
}
