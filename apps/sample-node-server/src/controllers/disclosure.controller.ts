import type { Request, Response } from 'express';
import { clientService, generateDisclosureInitCodeSnippet, generateDisclosureFinalizeCodeSnippet } from '../services/index.js';
import type { InitializeRequest, GenerateUrlRequest } from '../types/index.js';
import { assert, DisclosureClientConfig, VeridDisclosureClient, InvalidArgumentError, assertAttestedJwtPayload } from '@ver-id/node-client';

/**
 * POST /api/disclosure/initialize
 * Initialize an disclosure client with optional params or env variables
 */
export async function initializeDisclosureClient(
  req: Request<object, object, InitializeRequest>,
  res: Response
): Promise<Response> {
  try {
    const issuerUri = req.body.issuerUri || process.env.VERID_DISCLOSURE_API_URL;
    const disclosureFlowId = req.body.flowId || process.env.VERID_DISCLOSURE_FLOW_ID;
    const redirectUri = req.body.redirectUri || process.env.VERID_DISCLOSURE_REDIRECT_URI;

    assert(issuerUri, 'API URL is required', InvalidArgumentError);
    assert(disclosureFlowId, 'Disclosure Flow ID is required', InvalidArgumentError);
    assert(redirectUri, 'Redirect URI is required', InvalidArgumentError);

    const config: DisclosureClientConfig = {
      issuerUri,
      disclosureFlowId,
      redirectUri,
    };

    // Initialize the disclosure client
    const disclosureClient = new VeridDisclosureClient(config);

    // Store the client globally
    clientService.setDisclosureClient(disclosureClient);

    // Generate code snippet
    const codeSnippet = generateDisclosureInitCodeSnippet(config);

    // Return success with code and config
    return res.json({
      success: true,
      code: codeSnippet,
      message: 'Disclosure client initialized successfully',
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}

/**
 * POST /api/disclosure/generate-url
 * Generate disclosure URL
 */
export async function generateDisclosureUrl(
  req: Request<object, object, GenerateUrlRequest>,
  res: Response
): Promise<Response> {
  try {
    const { scope } = req.body;

    const scopeValue = scope || process.env.VERID_AUTHENTICATION_SCOPES;
    assert(scopeValue, 'Scope is required', InvalidArgumentError);

    // Get the global disclosure client
    const disclosureClient = clientService.getDisclosureClient();
    
    if (!disclosureClient) {
      return res.status(400).json({
        success: false,
        error: 'No disclosure client initialized. Please initialize first.',
      });
    }

    // Generate disclosure URL
    const result = await disclosureClient.generateDisclosureUrl();

    // Generate code snippet
    const codeSnippet = `// Using the initialized client
const { disclosureUrl, state } = await disclosureClient.generateDisclosureUrl();`;

    // Return success with disclosure URL
    return res.json({
      success: true,
      disclosureUrl: result.disclosureUrl,
      state: result.state,
      code: codeSnippet,
      message: 'Disclosure URL generated successfully',
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}

/**
 * GET /api/disclosure/callback
 * Handle OAuth callback from authorization server
 */
export async function handleDisclosureCallback(
  req: Request,
  res: Response
): Promise<void> {
  // Store the callback URL for display in frontend and use in finalize
    const callbackUrl = new URL(req.url, `${req.protocol}://${req.get('host')}`);
    clientService.setCallbackUrl(callbackUrl.toString());

    // Redirect back to the frontend callback page
    res.redirect('http://localhost:4200/disclosure/node/callback');
}

/**
 * POST /api/disclosure/finalize
 * Finalize the OAuth flow (exchange code for tokens)
 */
export async function finalizeDisclosure(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const disclosureClient = clientService.getDisclosureClient();
    const callbackUrl = clientService.getCallbackUrl();
    if (!disclosureClient || !callbackUrl) {
      return res.status(400).json({
        success: false,
        error: 'Missing client or callback URL',
      });
    }
    const url = new URL(callbackUrl);

    assert(process.env.VERID_CLIENT_SECRET, 'Client secret is required in env variables', InvalidArgumentError);
    
    const disclosureResponse = await disclosureClient.finalize({
      clientAuth: { client_secret: process.env.VERID_CLIENT_SECRET},
      callbackParams: url.searchParams,
    });
    clientService.setDisclosureResponse(disclosureResponse);

    const codeSnippet = generateDisclosureFinalizeCodeSnippet(url.toString())

    return res.json({
      success: true,
      disclosureResponse: disclosureResponse,
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
 * GET /api/disclosure/callback-info
 * Get the stored callback URL and params (no disclosureResponse)
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
 * POST /api/disclosure/decode
 * Decode the ID token from the disclosure response
 */
export async function decodeToken(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    // Get the global disclosure client
    const disclosureClient = clientService.getDisclosureClient();

    if (!disclosureClient) {
      return res.status(400).json({
        success: false,
        error: 'No disclosure client initialized.',
      });
    }

    // Get the stored disclosure response
    const disclosureResponse = clientService.getDisclosureResponse();

    if (!disclosureResponse) {
      return res.status(400).json({
        success: false,
        error: 'No disclosure response available. Complete the OAuth flow first.',
      });
    }

    // Decode the ID token
    const decoded = await disclosureClient.decode(disclosureResponse, assertAttestedJwtPayload);

    // Generate code snippet
    const codeSnippet = `// Decode the ID token from the disclosure response
// Change assertFunction based on your flow configuration
const decoded = await disclosureClient.decode(disclosureResponse, assertAttestedJwtPayload);`;

    return res.json({
      success: true,
      decoded,
      disclosureResponse,
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
