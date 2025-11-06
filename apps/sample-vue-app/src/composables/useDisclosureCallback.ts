import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { assertAttestedJwtPayload, VeridDisclosureClient } from '@ver-id/browser-client';
import { formatError } from '../utils/errorHandler.js';

/**
 * Composable for handling Ver.iD Disclosure callback
 * Manages the disclosure callback flow: finalize and decode
 */
export function useDisclosureCallback() {
  const route = useRoute();

  // Configuration from environment variables
  const CLIENT_CONFIG = {
    issuerUri: import.meta.env.VITE_VERID_DISCLOSURE_API_URL,
    client_id: import.meta.env.VITE_VERID_DISCLOSURE_FLOW_ID,
    redirectUri: import.meta.env.VITE_VERID_DISCLOSURE_REDIRECT_URI,
  };

  // State
  const finalizing = ref(false);
  const decoding = ref(false);
  const error = ref('');

  // Data to display
  const currentUrl = ref('');
  const urlParams = ref('');
  const disclosureResponse = ref<any>(null);
  const tokenResponse = ref('');
  const decodedJwt = ref<any>(null);
  const jwtHeader = ref('');
  const jwtPayload = ref('');

  // Store the disclosure client and response
  let disclosureClient: VeridDisclosureClient;
  let rawDisclosureResponse: any;

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

      // Initialize the disclosure client
      disclosureClient = new VeridDisclosureClient(CLIENT_CONFIG);
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
      rawDisclosureResponse = await disclosureClient.finalize();

      // Store for later use in decode
      disclosureResponse.value = rawDisclosureResponse;
      tokenResponse.value = JSON.stringify(rawDisclosureResponse, null, 2);
    } catch (err) {
      handleError(err);
    } finally {
      finalizing.value = false;
    }
  };

  /**
   * Step 3: Decode - Decode and verify the disclosure token
   */
  const decode = async () => {
    decoding.value = true;
    try {
      const jwt = await disclosureClient.decode(rawDisclosureResponse, assertAttestedJwtPayload);

      decodedJwt.value = jwt;
      jwtHeader.value = JSON.stringify(jwt.protectedHeader, null, 2) || 'Header not available';
      jwtPayload.value = JSON.stringify(jwt.payload, null, 2);
    } catch (err) {
      handleError(err);
    } finally {
      decoding.value = false;
    }
  };

  /**
   * Handle errors
   */
  const handleError = (err: unknown) => {
    error.value = formatError(err);
  };

  /**
   * Start over - redirect back to disclosure page
   */
  const startOver = () => {
    window.location.href = '/disclosure';
  };

  // Auto-initialize on mount
  onMounted(() => {
    initialize();
  });

  return {
    // State
    finalizing,
    decoding,
    error,
    currentUrl,
    urlParams,
    disclosureResponse,
    tokenResponse,
    decodedJwt,
    jwtHeader,
    jwtPayload,

    // Configuration (for code generation in views)
    CLIENT_CONFIG,

    // Actions
    finalize,
    decode,
    startOver,
  };
}
