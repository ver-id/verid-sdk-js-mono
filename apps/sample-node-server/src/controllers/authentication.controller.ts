import type { Request, Response } from 'express';
import { 
  clientService, 
  generateAuthFinalizeCodeSnippet, 
  generateAuthInitCodeSnippet,
  generateCodeChallengeSnippet,
  generateCreateIntentSnippet,
  generateAuthUrlWithIntentSnippet,
  generateAuthUrlSnippet,
} from '../services/index.js';
import type { InitializeRequest, GenerateUrlRequest } from '../types/index.js';
import { assert, AuthenticationClientConfig, VeridAuthenticationClient, InvalidArgumentError } from '@ver-id/node-client';

/**
 * POST /api/authentication/initialize
 * Initialize an authentication client with optional params or env variables
 */
export async function initializeAuthClient(
  req: Request<object, object, InitializeRequest>,
  res: Response
): Promise<Response> {
  try {
    const issuerUri = req.body.issuerUri || process.env.VERID_AUTHENTICATION_API_URL;
    const client_id = req.body.client_id || process.env.VERID_AUTHENTICATION_FLOW_ID;
    const redirectUri = req.body.redirectUri || process.env.VERID_AUTHENTICATION_REDIRECT_URI;

    assert(issuerUri, 'API URL is required', InvalidArgumentError);
    assert(client_id, 'Authentication Flow ID is required', InvalidArgumentError);
    assert(redirectUri, 'Redirect URI is required', InvalidArgumentError);

    const config: AuthenticationClientConfig = {
      issuerUri,
      client_id: client_id,
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
 * POST /api/authentication/generate-code-challenge
 * Generate PKCE code challenge and state
 */
export async function generateAuthCodeChallenge(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const authClient = clientService.getAuthClient();
    
    if (!authClient) {
      return res.status(400).json({
        success: false,
        error: 'No authentication client initialized. Please initialize first.',
      });
    }

    // Generate code challenge
    const result = await authClient.generateCodeChallenge();

    // Store for later use
    clientService.setAuthCodeChallenge(result.codeChallenge);
    clientService.setAuthState(result.state);

    // Generate code snippet
    const codeSnippet = generateCodeChallengeSnippet();

    return res.json({
      success: true,
      codeChallenge: result.codeChallenge,
      state: result.state,
      code: codeSnippet,
      message: 'Code challenge generated successfully',
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}

/**
 * POST /api/authentication/create-intent
 * Create authentication intent
 */
export async function createAuthIntent(
  req: Request<object, object, { challenge?: string; brandUuid?: string }>,
  res: Response
): Promise<Response> {
  try {
    const authClient = clientService.getAuthClient();
    const codeChallenge = clientService.getAuthCodeChallenge();
    
    if (!authClient) {
      return res.status(400).json({
        success: false,
        error: 'No authentication client initialized. Please initialize first.',
      });
    }

    if (!codeChallenge) {
      return res.status(400).json({
        success: false,
        error: 'No code challenge found. Please generate code challenge first.',
      });
    }

    const { challenge, brandUuid } = req.body;
    const payload: { challenge?: string; brandUuid?: string } = {};
    
    if (challenge) payload.challenge = challenge;
    if (brandUuid) payload.brandUuid = brandUuid;

    // Get client secret from environment
    const clientSecret = process.env.VERID_CLIENT_SECRET;
    assert(clientSecret, 'Client secret is required in env variables (VERID_CLIENT_SECRET)', InvalidArgumentError);

    // Create intent with client authentication
    const intentId = await authClient.createAuthenticationIntent(
      payload, 
      codeChallenge,
      { client_secret: clientSecret }
    );

    // Store for later use
    clientService.setAuthIntentId(intentId);

    // Generate code snippet
    const codeSnippet = generateCreateIntentSnippet(payload, codeChallenge);

    return res.json({
      success: true,
      intentId,
      code: codeSnippet,
      message: 'Authentication intent created successfully',
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}

/**
 * POST /api/authentication/generate-url
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

    // Check if intent-based flow
    const intentId = clientService.getAuthIntentId();
    const codeChallenge = clientService.getAuthCodeChallenge();
    const state = clientService.getAuthState();

    let result: { authenticationUrl: string; state?: string };
    let codeSnippet: string;

    if (intentId && codeChallenge && state) {
      // Intent-based flow
      result = await authClient.generateAuthenticationUrl({
        scope: scopeValue,
        intent_id: intentId,
        state: state,
        codeChallenge: codeChallenge,
      });

      codeSnippet = generateAuthUrlWithIntentSnippet(scopeValue, intentId, state, codeChallenge);
    } else {
      // Direct flow
      result = await authClient.generateAuthenticationUrl({
        scope: scopeValue,
      });

      codeSnippet = generateAuthUrlSnippet(scopeValue);
    }

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
 * GET /api/authentication/callback
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
 * POST /api/authentication/finalize
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
 * GET /api/authentication/callback-info
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
 * POST /api/authentication/decode
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
