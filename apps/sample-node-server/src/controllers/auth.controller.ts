import type { Request, Response } from 'express';
import { clientService, generateAuthFinalizeCodeSnippet, generateAuthInitCodeSnippet } from '../services/index.js';
import type { InitializeRequest, GenerateUrlRequest } from '../types/index.js';
import { assert, AuthenticationClientConfig, VeridAuthenticationClient, InvalidArgumentError } from '@ver-id/node-client';

/**
 * POST /api/auth/initialize
 * Initialize an authentication client with optional params or env variables
 */
export async function initializeAuthClient(
  req: Request<object, object, InitializeRequest>,
  res: Response
): Promise<Response> {
  try {
    const issuerUri = req.body.issuerUri || process.env.VERID_AUTHENTICATION_API_URL;
    const authenticationFlowId = req.body.flowId || process.env.VERID_AUTHENTICATION_FLOW_ID;
    const redirectUri = req.body.redirectUri || process.env.VERID_AUTHENTICATION_REDIRECT_URI;

    assert(issuerUri, 'API URL is required', InvalidArgumentError);
    assert(authenticationFlowId, 'Authentication Flow ID is required', InvalidArgumentError);
    assert(redirectUri, 'Redirect URI is required', InvalidArgumentError);

    const config: AuthenticationClientConfig = {
      issuerUri,
      authenticationFlowId,
      redirectUri,
    };

    // Initialize the authentication client
    const authClient = new VeridAuthenticationClient(config);

    // Store the client globally
    clientService.setAuthClient(authClient);

    // Generate code snippet
    const codeSnippet = generateAuthInitCodeSnippet(config);

    // Return success with code and config
    return res.json({
      success: true,
      code: codeSnippet,
      message: 'Authentication client initialized successfully',
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}

/**
 * POST /api/auth/generate-url
 * Generate authentication URL
 */
export async function generateAuthUrl(
  req: Request<object, object, GenerateUrlRequest>,
  res: Response
): Promise<Response> {
  try {
    const { scope } = req.body;

    const scopeValue = scope || process.env.VERID_AUTHENTICATION_SCOPES;
    assert(scopeValue, 'Scope is required', InvalidArgumentError);

    // Get the global auth client
    const authClient = clientService.getAuthClient();
    
    if (!authClient) {
      return res.status(400).json({
        success: false,
        error: 'No authentication client initialized. Please initialize first.',
      });
    }

    // Generate authentication URL
    const result = await authClient.generateAuthenticationUrl({
      scope: scopeValue,
    });

    // Generate code snippet
    const codeSnippet = `// Using the initialized client
const { authenticationUrl, state } = await authClient.generateAuthenticationUrl({
  scope: '${scopeValue}',
});`;

    // Return success with authentication URL
    return res.json({
      success: true,
      authenticationUrl: result.authenticationUrl,
      state: result.state,
      code: codeSnippet,
      message: 'Authentication URL generated successfully',
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}

/**
 * GET /api/auth/callback
 * Handle OAuth callback from authorization server
 */
export async function handleAuthCallback(
  req: Request,
  res: Response
): Promise<void> {
  // Store the callback URL for display in frontend and use in finalize
  const callbackUrl = new URL(req.url, `${req.protocol}://${req.get('host')}`);
  clientService.setCallbackUrl(callbackUrl.toString());

  // Redirect back to the frontend callback page
  res.redirect('http://localhost:4200/authentication/node/callback');
}

/**
 * POST /api/auth/finalize
 * Finalize the OAuth flow (exchange code for tokens)
 */
export async function finalizeAuth(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const authClient = clientService.getAuthClient();
    const callbackUrl = clientService.getCallbackUrl();
    if (!authClient || !callbackUrl) {
      return res.status(400).json({
        success: false,
        error: 'Missing client or callback URL',
      });
    }
    const url = new URL(callbackUrl);

    assert(process.env.VERID_CLIENT_SECRET, 'Client secret is required in env variables', InvalidArgumentError);
    
    const authResponse = await authClient.finalize({
      clientAuth: { client_secret: process.env.VERID_CLIENT_SECRET},
      callbackParams: url.searchParams,
    });
    clientService.setAuthResponse(authResponse);

    const codeSnippet = generateAuthFinalizeCodeSnippet(url.toString())

    return res.json({
      success: true,
      authResponse: authResponse,
      code: codeSnippet,
      message: 'Finalize successful',
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}

/**
 * GET /api/auth/callback-info
 * Get the stored callback URL and params (no authResponse)
 */
export async function getCallbackInfo(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const callbackUrl = clientService.getCallbackUrl();
    if (!callbackUrl) {
      return res.status(404).json({
        success: false,
        error: 'No callback URL found. The OAuth callback has not been processed yet.',
      });
    }
    // Parse the URL to extract parameters
    const url = new URL(callbackUrl);
    const params: Record<string, string> = {};
    url.searchParams.forEach((value, key) => {
      params[key] = value;
    });
    return res.json({
      success: true,
      callbackUrl,
      params,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}

/**
 * POST /api/auth/decode
 * Decode the ID token from the auth response
 */
export async function decodeToken(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    // Get the global auth client
    const authClient = clientService.getAuthClient();

    if (!authClient) {
      return res.status(400).json({
        success: false,
        error: 'No authentication client initialized.',
      });
    }

    // Get the stored auth response
    const authResponse = clientService.getAuthResponse();

    if (!authResponse) {
      return res.status(400).json({
        success: false,
        error: 'No authentication response available. Complete the OAuth flow first.',
      });
    }

    // Decode the ID token
    const decoded = await authClient.decode(authResponse);

    // Generate code snippet
    const codeSnippet = `// Decode the ID token from the auth response
const decoded = await authClient.decode(authResponse);`;

    return res.json({
      success: true,
      decoded,
      authResponse,
      code: codeSnippet,
      message: 'Token decoded successfully',
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}
