import type { Request, Response } from 'express';
import {
  EmbeddedDisclosureClient,
  verifyEmbeddedWebhook,
  assertDisclosureV1JwtPayload,
  type EmbeddedClientConfig,
} from '@ver-id/embedded-node-client';
import { assert, InvalidArgumentError } from '@ver-id/node-client';
import {
  clientService,
  embeddedResultStore,
  generateEmbeddedDisclosureInitSnippet,
  generateEmbeddedDisclosureStartSnippet,
  generateEmbeddedDisclosureStartWithIntentSnippet,
  generateEmbeddedDisclosureWebhookSnippet,
  generateEmbeddedDisclosureResultSnippet,
} from '../services/index.js';
import {
  EMBEDDED_CONFIG,
  embeddedScopeFor,
  embeddedWebhookUri,
  isWebhookPubliclyReachable,
} from '../config/index.js';
import type {
  EmbeddedInitializeRequest,
  EmbeddedStartRequest,
} from '../types/index.js';

/**
 * POST /api/disclosure/embedded/initialize
 * Initialize an embedded disclosure client (no redirect URI)
 */
export async function initializeEmbeddedDisclosureClient(
  req: Request<object, object, EmbeddedInitializeRequest>,
  res: Response
): Promise<Response> {
  try {
    const issuerUri = req.body.issuerUri || process.env.VERID_DISCLOSURE_API_URL;
    const clientId = req.body.clientId || process.env.VERID_EMBEDDED_DISCLOSURE_FLOW_ID;

    assert(issuerUri, 'API URL is required', InvalidArgumentError);
    assert(clientId, 'Embedded Disclosure Flow ID is required', InvalidArgumentError);

    const config: EmbeddedClientConfig = { issuerUri, clientId };

    const disclosureClient = new EmbeddedDisclosureClient(config);
    clientService.setEmbeddedDisclosureClient(disclosureClient);

    const codeSnippet = generateEmbeddedDisclosureInitSnippet(config);

    // Report reachability instead of failing here, so the demo page can still
    // render step 1 and warn the user before step 2.
    const webhookReachable = isWebhookPubliclyReachable();

    return res.json({
      success: true,
      code: codeSnippet,
      webhookReachable,
      webhookUri: webhookReachable ? embeddedWebhookUri('disclosure') : null,
      scope: embeddedScopeFor('disclosure'),
      message: 'Embedded disclosure client initialized successfully',
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}

/**
 * POST /api/disclosure/embedded/start
 * Create an embedded session and return the public bootstrap for the browser
 */
export async function startEmbeddedDisclosureSession(
  req: Request<object, object, EmbeddedStartRequest>,
  res: Response
): Promise<Response> {
  try {
    const disclosureClient = clientService.getEmbeddedDisclosureClient();

    if (!disclosureClient) {
      return res.status(400).json({
        success: false,
        error: 'No embedded disclosure client initialized. Please initialize first.',
      });
    }

    const scope = embeddedScopeFor('disclosure');
    const webhookUri = embeddedWebhookUri('disclosure');

    const bootstrap = await disclosureClient.createEmbeddedSession({
      scope,
      webhookUri,
      ...(EMBEDDED_CONFIG.gatewayUri ? { gatewayUri: EMBEDDED_CONFIG.gatewayUri } : {}),
    });

    let codeSnippet: string;
    let intentId: string | undefined;

    if (req.body.useIntent) {
      const { challenge, brandUuid, requireExplicitConsent } = req.body;
      const payload: {
        challenge?: string;
        brandUuid?: string;
        requireExplicitConsent?: boolean;
      } = {};

      if (challenge) payload.challenge = challenge;
      if (brandUuid) payload.brandUuid = brandUuid;
      if (requireExplicitConsent !== undefined) {
        payload.requireExplicitConsent = requireExplicitConsent;
      }

      const clientSecret = process.env.VERID_CLIENT_SECRET;
      assert(
        clientSecret,
        'Client secret is required in env variables (VERID_CLIENT_SECRET)',
        InvalidArgumentError
      );

      // Create the session first — the intent must bind to the challenge it just produced.
      intentId = await disclosureClient.createDisclosureIntent(
        payload,
        bootstrap.codeChallenge,
        { client_secret: clientSecret }
      );

      codeSnippet = generateEmbeddedDisclosureStartWithIntentSnippet(
        scope,
        webhookUri,
        payload
      );
    } else {
      codeSnippet = generateEmbeddedDisclosureStartSnippet(scope, webhookUri);
    }

    // Register the session so an early poll reports "pending" instead of "unknown".
    embeddedResultStore.createPending(bootstrap.state);

    return res.json({
      success: true,
      bootstrap: intentId ? { ...bootstrap, intentId } : bootstrap,
      code: codeSnippet,
      message: 'Embedded disclosure session created successfully',
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}

/**
 * POST /api/disclosure/embedded/webhook
 * Receive the signed webhook, exchange the code for tokens, and park the result
 *
 * Mounted with a raw body parser — see `EMBEDDED_WEBHOOK_PATHS` in config.
 */
export async function handleEmbeddedDisclosureWebhook(
  req: Request,
  res: Response
): Promise<Response> {
  const rawBody = typeof req.body === 'string' ? req.body : '';
  const signature = req.header('x-signature-256');
  const secret = process.env.VERID_EMBEDDED_DISCLOSURE_WEBHOOK_SECRET;

  if (!secret) {
    console.error('[embedded/disclosure] VERID_EMBEDDED_DISCLOSURE_WEBHOOK_SECRET is not set');
    return res.status(500).json({ error: 'Webhook secret is not configured' });
  }

  // Verify before touching the store, so an unverified webhook can never be
  // attributed to a browser session.
  const verification = verifyEmbeddedWebhook({ rawBody, signature, secret });

  if (!verification.ok) {
    console.error(`[embedded/disclosure] webhook rejected: ${verification.reason}`);
    return res.status(400).json({ error: verification.reason });
  }

  const { state } = verification.payload;
  const disclosureClient = clientService.getEmbeddedDisclosureClient();

  if (!disclosureClient) {
    embeddedResultStore.reject(
      state,
      'The server has no embedded disclosure client (it may have restarted mid-flow).'
    );
    return res.status(503).json({ error: 'No embedded disclosure client initialized' });
  }

  try {
    assert(
      process.env.VERID_CLIENT_SECRET,
      'Client secret is required in env variables (VERID_CLIENT_SECRET)',
      InvalidArgumentError
    );

    // finalizeEmbedded() re-verifies the signature, then exchanges the code
    // using the verifier cached under `state`. No redirect_uri is sent.
    const result = await disclosureClient.finalizeEmbedded({
      rawBody,
      signature,
      secret,
      clientAuth: { client_secret: process.env.VERID_CLIENT_SECRET },
    });

    const token = await disclosureClient.decode(result, assertDisclosureV1JwtPayload);

    embeddedResultStore.resolve(state, token, verification.payload.intent_id || null);

    return res.json({ received: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error(`[embedded/disclosure] finalize failed for state ${state}: ${message}`);

    // Park the failure so the polling browser stops waiting and shows a reason.
    embeddedResultStore.reject(state, message);

    return res.status(500).json({ error: message });
  }
}

/**
 * GET /api/disclosure/embedded/result?state=...
 * Poll for the result of an embedded flow
 */
export async function getEmbeddedDisclosureResult(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const state = typeof req.query.state === 'string' ? req.query.state : '';

    if (!state) {
      return res.status(400).json({
        success: false,
        error: 'A state query parameter is required.',
      });
    }

    const entry = embeddedResultStore.consume(state);

    if (!entry) {
      return res.status(404).json({
        success: false,
        error: 'Unknown or expired state.',
      });
    }

    const codeSnippet = generateEmbeddedDisclosureResultSnippet();

    if (entry.status === 'pending') {
      return res.json({ success: true, ready: false, status: 'pending' });
    }

    if (entry.status === 'error') {
      return res.json({
        success: true,
        ready: true,
        status: 'error',
        error: entry.error,
        code: codeSnippet,
      });
    }

    return res.json({
      success: true,
      ready: true,
      status: 'ready',
      token: entry.token,
      intentId: entry.intentId,
      code: codeSnippet,
      webhookCode: generateEmbeddedDisclosureWebhookSnippet(),
      message: 'Embedded disclosure flow completed successfully',
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}
