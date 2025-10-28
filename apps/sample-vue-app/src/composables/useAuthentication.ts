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
    apiUrl: import.meta.env.VITE_VERID_AUTHENTICATION_API_URL || '',
    authenticationFlowId: import.meta.env.VITE_VERID_AUTHENTICATION_FLOW_ID || '',
    redirectUri: import.meta.env.VITE_VERID_AUTHENTICATION_REDIRECT_URI || 
      `${window.location.origin}/authentication/browser/callback`,
  });

  const authOptions = reactive({
    scope: import.meta.env.VITE_VERID_AUTHENTICATION_SCOPES || '',
  });

  // State
  const showConfigForm = ref(true);
  const clientInitialized = ref(false);
  const loading = ref(false);
  const error = ref<string | null>(null);
  const authUrl = ref<string | null>(null);

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
   * Generate authentication URL with PKCE
   */
  const generateAuthUrl = async () => {
    if (!authenticationClient) return;

    loading.value = true;
    error.value = null;

    try {
      const { authenticationUrl } =
        await authenticationClient.generateAuthenticationUrl(authOptions);

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
    showConfigForm.value = true;
    clientInitialized.value = false;
    authenticationClient = null;
    error.value = null;
  };

  return {
    // State
    showConfigForm,
    clientInitialized,
    loading,
    error,
    authUrl,

    // Configuration (reactive, can be modified)
    clientConfig,
    authOptions,

    // Actions
    initializeClient,
    generateAuthUrl,
    redirectToAuthServer,
    startOver,
  };
}
