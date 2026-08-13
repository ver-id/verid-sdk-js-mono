import type { Request, Response } from 'express';
import { 
  clientService, 
  generateIssuanceInitCodeSnippet, 
  generateIssuanceFinalizeCodeSnippet,
  generateIssuanceCodeChallengeSnippet,
  generateIssuanceCreateIntentSnippet,
  generateIssuanceUrlWithIntentSnippet,
} from '../services/index.js';
import type { InitializeRequest, GenerateUrlRequest } from '../types/index.js';
import { assert, NodeIssuanceClientConfig, VeridIssuanceClient, InvalidArgumentError, IssuanceIntentPayload } from '@ver-id/node-client';

/**
 * POST /api/issuance/initialize
 * Initialize an issuance client with optional params or env variables
 */
export async function initializeIssuanceClient(
  req: Request<object, object, InitializeRequest>,
  res: Response
): Promise<Response> {
  try {
    const issuerUri = req.body.issuerUri || process.env.VERID_ISSUANCE_API_URL;
    const clientId = req.body.clientId || process.env.VERID_ISSUANCE_FLOW_ID;
    const redirectUri = req.body.redirectUri || process.env.VERID_ISSUANCE_REDIRECT_URI;

    assert(issuerUri, 'API URL is required', InvalidArgumentError);
    assert(clientId, 'Issuance Flow ID is required', InvalidArgumentError);
    assert(redirectUri, 'Redirect URI is required', InvalidArgumentError);

    const config: NodeIssuanceClientConfig = {
      issuerUri,
      clientId: clientId,
      redirectUri,
    };

    // Initialize the issuance client
    const issuanceClient = new VeridIssuanceClient(config);

    // Store the client globally
    clientService.setIssuanceClient(issuanceClient);

    // Generate code snippet
    const codeSnippet = generateIssuanceInitCodeSnippet(config);

    // Return success with code and config
    return res.json({
      success: true,
      code: codeSnippet,
      message: 'Issuance client initialized successfully',
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}

/**
 * POST /api/issuance/generate-code-challenge
 * Generate PKCE code challenge and state (MANDATORY for issuance)
 */
export async function generateIssuanceCodeChallenge(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const issuanceClient = clientService.getIssuanceClient();
    
    if (!issuanceClient) {
      return res.status(400).json({
        success: false,
        error: 'No issuance client initialized. Please initialize first.',
      });
    }

    // Generate code challenge
    const result = await issuanceClient.generateCodeChallenge();

    // Store for later use
    clientService.setIssuanceCodeChallenge(result.codeChallenge);
    clientService.setIssuanceState(result.state);

    // Generate code snippet
    const codeSnippet = generateIssuanceCodeChallengeSnippet();

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
 * POST /api/issuance/create-intent
 * Create issuance intent (MANDATORY for issuance)
 */
export async function createIssuanceIntent(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const issuanceClient = clientService.getIssuanceClient();
    const codeChallenge = clientService.getIssuanceCodeChallenge();
    
    if (!issuanceClient) {
      return res.status(400).json({
        success: false,
        error: 'No issuance client initialized. Please initialize first.',
      });
    }

    if (!codeChallenge) {
      return res.status(400).json({
        success: false,
        error: 'Code challenge not found. Please generate code challenge first.',
      });
    }

    // Get client secret from environment
    const clientSecret = process.env.VERID_CLIENT_SECRET;
    assert(clientSecret, 'Client secret is required in env variables (VERID_CLIENT_SECRET)', InvalidArgumentError);

    // Build intent payload
    const intentPayload: IssuanceIntentPayload = {
      payload: req.body.payload || {},
    };

    if (req.body.challenge) {
      intentPayload.challenge = req.body.challenge;
    }
    if (req.body.brandUuid) {
      intentPayload.brandUuid = req.body.brandUuid;
    }
    if (req.body.requireExplicitConsent) {
      intentPayload.requireExplicitConsent = req.body.requireExplicitConsent;
    }

    // Create intent with client authentication
    const intentResponse = await issuanceClient.createIssuanceIntent(
      intentPayload,
      codeChallenge,
      { client_secret: clientSecret }
    );

    // Store intent ID
    clientService.setIssuanceIntentId(intentResponse.intent_id);

    // Generate code snippet showing actual parameters used
    const codeSnippet = generateIssuanceCreateIntentSnippet(
      {
        challenge: req.body.challenge,
        brandUuid: req.body.brandUuid,
        requireExplicitConsent: req.body.requireExplicitConsent,
        payload: req.body.payload,
      },
      codeChallenge
    );

    return res.json({
      success: true,
      intentId: intentResponse.intent_id,
      code: codeSnippet,
      message: 'Issuance intent created successfully',
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}

/**
 * POST /api/issuance/generate-url
 * Generate issuance URL (MUST have intent - intent is mandatory for issuance)
 */
export async function generateIssuanceUrl(
  req: Request<object, object, GenerateUrlRequest>,
  res: Response
): Promise<Response> {
  try {
    const issuanceClient = clientService.getIssuanceClient();
    const intentId = clientService.getIssuanceIntentId();
    const codeChallenge = clientService.getIssuanceCodeChallenge();
    const state = clientService.getIssuanceState();

    if (!issuanceClient) {
      return res.status(400).json({
        success: false,
        error: 'No issuance client initialized. Please initialize first.',
      });
    }

    // For issuance, intent is MANDATORY
    if (!intentId || !codeChallenge || !state) {
      return res.status(400).json({
        success: false,
        error: 'Intent must be created before generating URL. Intent is MANDATORY for issuance flow.',
      });
    }

    // Generate URL with intent
    const result = await issuanceClient.generateIssuanceUrl({
      intentId: intentId,
      state: state,
      codeChallenge: codeChallenge,
    });

    // Generate code snippet showing intent-based flow
    const codeSnippet = generateIssuanceUrlWithIntentSnippet(intentId, state, codeChallenge);

    return res.json({
      success: true,
      issuanceUrl: result.issuanceUrl,
      code: codeSnippet,
      message: 'Issuance URL generated successfully',
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}

/**
 * GET /api/issuance/callback
 * Handle the OAuth callback from the issuance server
 */
export async function handleIssuanceCallback(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;

    // Store the callback URL for finalization step
    clientService.setCallbackUrl(fullUrl);

    // Redirect to the frontend callback handler
    // The frontend will then call our finalize endpoint
    const frontendCallbackUrl = `${process.env.FRONTEND_URL || 'http://localhost:3001'}/issuance/server/callback`;
    res.redirect(frontendCallbackUrl);
  } catch (error) {
    res.status(500).send('Error handling callback');
  }
}

/**
 * POST /api/issuance/finalize
 * Exchange the authorization code for tokens
 */
export async function finalizeIssuance(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const issuanceClient = clientService.getIssuanceClient();
    const callbackUrl = clientService.getCallbackUrl();

    if (!issuanceClient) {
      return res.status(400).json({
        success: false,
        error: 'No issuance client initialized',
      });
    }

    if (!callbackUrl) {
      return res.status(400).json({
        success: false,
        error: 'No callback URL found. Please complete the issuance flow first.',
      });
    }

    const clientSecret = process.env.VERID_CLIENT_SECRET;
    if (!clientSecret) {
      return res.status(400).json({
        success: false,
        error: 'Client secret not configured in environment variables',
      });
    }

    // Exchange authorization code for tokens
    const issuanceResponse = await issuanceClient.finalize({
      clientAuth: { client_secret: clientSecret },
      callbackParams: callbackUrl,
    });

    // Store the issuance response
    clientService.setIssuanceResponse(issuanceResponse);

    // Generate code snippet
    const codeSnippet = generateIssuanceFinalizeCodeSnippet(JSON.stringify(callbackUrl));

    return res.json({
      success: true,
      issuanceResponse,
      code: codeSnippet,
      message: 'Issuance finalized successfully',
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}
