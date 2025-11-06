import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { VeridAuthenticationClient } from '@ver-id/browser-client';
import { formatError } from '../utils/errorHandler.js';

/**
 * Composable for handling Ver.iD Authentication callback
 * Manages the OAuth callback flow: finalize and decode
 */
export function useAuthenticationCallback() {
  const route = useRoute();

  // Configuration from environment variables
  const CLIENT_CONFIG = {
    issuerUri: import.meta.env.VITE_VERID_AUTHENTICATION_API_URL,
    client_id: import.meta.env.VITE_VERID_AUTHENTICATION_FLOW_ID,
    redirectUri: import.meta.env.VITE_VERID_AUTHENTICATION_REDIRECT_URI,
  };

  // State
  const finalizing = ref(false);
  const decoding = ref(false);
  const error = ref('');

  // Data to display
  const currentUrl = ref('');
  const urlParams = ref('');
  const authenticationResponse = ref<any>(null);
  const tokenResponse = ref('');
  const decodedJwt = ref<any>(null);
  const jwtHeader = ref('');
  const jwtPayload = ref('');

  // Store the auth client and response
  let authenticationClient: VeridAuthenticationClient;
  let rawAuthResponse: any;

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

      // Initialize the auth client
      authenticationClient = new VeridAuthenticationClient(CLIENT_CONFIG);
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
      rawAuthResponse = await authenticationClient.finalize();

      // Store for later use in decode
      authenticationResponse.value = rawAuthResponse;
      tokenResponse.value = JSON.stringify(rawAuthResponse, null, 2);
    } catch (err) {
      handleError(err);
    } finally {
      finalizing.value = false;
    }
  };

  /**
   * Step 3: Decode - Decode and verify the ID token
   */
  const decode = async () => {
    decoding.value = true;
    try {
      const jwt = await authenticationClient.decode(rawAuthResponse);

      decodedJwt.value = jwt;
      // Note: jwt object from Ver.iD SDK may not have header exposed
      // If header is available, display it, otherwise show a note
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
   * Start over - redirect back to authentication page
   */
  const startOver = () => {
    window.location.href = '/authentication';
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
    authenticationResponse,
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
