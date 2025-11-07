import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { VeridIssuanceClient } from '@ver-id/browser-client';
import { formatError } from '../utils/errorHandler.js';

/**
 * Composable for handling Ver.iD Issuance callback
 * Manages the issuance callback flow: finalize
 */
export function useIssuanceCallback() {
  const route = useRoute();

  // Configuration from environment variables
  const CLIENT_CONFIG = {
    issuerUri: import.meta.env.VITE_VERID_ISSUANCE_API_URL,
    client_id: import.meta.env.VITE_VERID_ISSUANCE_FLOW_ID,
    redirectUri: import.meta.env.VITE_VERID_ISSUANCE_REDIRECT_URI,
  };

  // State
  const finalizing = ref(false);
  const error = ref('');

  // Data to display
  const currentUrl = ref('');
  const urlParams = ref('');
  const issuanceResponse = ref<any>(null);
  const tokenResponse = ref('');

  // Store the issuance client and response
  let issuanceClient: VeridIssuanceClient;

  /**
   * Initialize on mount - capture callback URL and params
   */
  const initialize = () => {
    try {
      // Display the callback URL and parameters
      currentUrl.value = window.location.href;

      const params: Record<string, string> = {};
      if (route.query) {
        Object.entries(route.query).forEach(([key, value]) => {
          params[key] = String(value);
        });
      }
      urlParams.value = JSON.stringify(params, null, 2);

      // Initialize the issuance client
      issuanceClient = new VeridIssuanceClient(CLIENT_CONFIG);
    } catch (err) {
      handleError(err);
    }
  };

  /**
   * Step 2: Finalize - Exchange authorization code for tokens
   */
  const finalize = async () => {
    finalizing.value = true;
    try {
      const rawIssuanceResponse = await issuanceClient.finalize();

      // Store for display
      issuanceResponse.value = rawIssuanceResponse;
      tokenResponse.value = JSON.stringify(rawIssuanceResponse, null, 2);
    } catch (err) {
      handleError(err);
    } finally {
      finalizing.value = false;
    }
  };

  /**
   * Handle errors
   */
  const handleError = (err: unknown) => {
    error.value = formatError(err);
  };

  /**
   * Start over - redirect back to issuance page
   */
  const startOver = () => {
    window.location.href = '/issuance';
  };

  // Auto-initialize on mount
  onMounted(() => {
    initialize();
  });

  return {
    // State
    finalizing,
    error,
    currentUrl,
    urlParams,
    issuanceResponse,
    tokenResponse,

    // Configuration (for code generation in views)
    CLIENT_CONFIG,

    // Actions
    finalize,
    startOver,
  };
}
