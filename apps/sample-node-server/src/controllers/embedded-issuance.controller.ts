import type { Request, Response } from 'express';
import {
  EmbeddedIssuanceClient,
  verifyEmbeddedWebhook,
  assertIssuanceV1JwtPayload,
  type EmbeddedClientConfig,
} from '@ver-id/embedded-node-client';
import { assert, InvalidArgumentError, type IssuanceIntentPayload } from '@ver-id/node-client';
import {
  clientService,
  embeddedResultStore,
  generateEmbeddedIssuanceInitSnippet,
  generateEmbeddedIssuanceStartSnippet,
  generateEmbeddedIssuanceWebhookSnippet,
  generateEmbeddedIssuanceResultSnippet,
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
 * POST /api/issuance/embedded/initialize
 * Initialize an embedded issuance client (no redirect URI)
 */
export async function initializeEmbeddedIssuanceClient(
  req: Request<object, object, EmbeddedInitializeRequest>,
  res: Response
): Promise<Response> {
  try {
    const issuerUri = req.body.issuerUri || process.env.VERID_ISSUANCE_API_URL;
    const client_id = req.body.client_id || process.env.VERID_EMBEDDED_ISSUANCE_FLOW_ID;

    assert(issuerUri, 'API URL is required', InvalidArgumentError);
    assert(client_id, 'Embedded Issuance Flow ID is required', InvalidArgumentError);

    const config: EmbeddedClientConfig = { issuerUri, client_id };

    const issuanceClient = new EmbeddedIssuanceClient(config);
    clientService.setEmbeddedIssuanceClient(issuanceClient);

    const codeSnippet = generateEmbeddedIssuanceInitSnippet(config);

    // Report reachability instead of failing here, so the demo page can still
    // render step 1 and warn the user before step 2.
    const webhookReachable = isWebhookPubliclyReachable();

    return res.json({
      success: true,
      code: codeSnippet,
      webhookReachable,
      webhookUri: webhookReachable ? embeddedWebhookUri('issuance') : null,
      scope: embeddedScopeFor('issuance'),
      message: 'Embedded issuance client initialized successfully',
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}

/**
 * POST /api/issuance/embedded/start
 * Create an embedded session plus its (mandatory) issuance intent
 */
export async function startEmbeddedIssuanceSession(
  req: Request<object, object, EmbeddedStartRequest>,
  res: Response
): Promise<Response> {
  try {
    const issuanceClient = clientService.getEmbeddedIssuanceClient();

    if (!issuanceClient) {
      return res.status(400).json({
        success: false,
        error: 'No embedded issuance client initialized. Please initialize first.',
      });
    }

    const { challenge, brandUuid, requireExplicitConsent } = req.body;
    const intentPayload = (req.body.payload ?? {}) as IssuanceIntentPayload['payload'];

    // Issuance has no intent-less variant — the intent carries what is issued.
    const hasMapping =
      !!intentPayload.mapping && Object.keys(intentPayload.mapping).length > 0;
    const hasData = Array.isArray(intentPayload.data) && intentPayload.data.length > 0;

    if (!hasMapping && !hasData) {
      return res.status(400).json({
        success: false,
        error:
          'An issuance intent payload is required. Provide exactly one of payload.mapping or payload.data.',
      });
    }

    if (hasMapping && hasData) {
      return res.status(400).json({
        success: false,
        error: 'Provide exactly one of payload.mapping or payload.data, not both.',
      });
    }

    const clientSecret = process.env.VERID_CLIENT_SECRET;
    assert(
      clientSecret,
      'Client secret is required in env variables (VERID_CLIENT_SECRET)',
      InvalidArgumentError
    );

    const scope = embeddedScopeFor('issuance');
    const webhookUri = embeddedWebhookUri('issuance');

    const bootstrap = await issuanceClient.createEmbeddedSession({
      scope,
      webhookUri,
      ...(EMBEDDED_CONFIG.ronanUri ? { ronanUri: EMBEDDED_CONFIG.ronanUri } : {}),
    });

    const intent: IssuanceIntentPayload = {
      payload: hasMapping ? { mapping: intentPayload.mapping } : { data: intentPayload.data },
    };

    if (challenge) intent.challenge = challenge;
    if (brandUuid) intent.brandUuid = brandUuid;
    if (requireExplicitConsent !== undefined) {
      intent.requireExplicitConsent = requireExplicitConsent;
    }

    const intentResponse = await issuanceClient.createIssuanceIntent(
      intent,
      bootstrap.codeChallenge,
      { client_secret: clientSecret }
    );

    const codeSnippet = generateEmbeddedIssuanceStartSnippet(scope, webhookUri, {
      ...(challenge ? { challenge } : {}),
      ...(brandUuid ? { brandUuid } : {}),
      ...(requireExplicitConsent !== undefined ? { requireExplicitConsent } : {}),
      payload: intent.payload,
    });

    // Register the session so an early poll reports "pending" instead of "unknown".
    embeddedResultStore.createPending(bootstrap.state);

    return res.json({
      success: true,
      bootstrap: { ...bootstrap, intentId: intentResponse.intent_id },
      code: codeSnippet,
      message: 'Embedded issuance session created successfully',
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}

/**
 * POST /api/issuance/embedded/webhook
 * Receive the signed webhook, exchange the code for tokens, and park the result
 *
 * Mounted with a raw body parser — see `EMBEDDED_WEBHOOK_PATHS` in config.
 */
export async function handleEmbeddedIssuanceWebhook(
  req: Request,
  res: Response
): Promise<Response> {
  const rawBody = typeof req.body === 'string' ? req.body : '';
  const signature = req.header('x-signature-256');
  const secret = process.env.VERID_EMBEDDED_ISSUANCE_WEBHOOK_SECRET;

  if (!secret) {
    console.error('[embedded/issuance] VERID_EMBEDDED_ISSUANCE_WEBHOOK_SECRET is not set');
    return res.status(500).json({ error: 'Webhook secret is not configured' });
  }

  // Verify before touching the store, so an unverified webhook can never be
  // attributed to a browser session.
  const verification = verifyEmbeddedWebhook({ rawBody, signature, secret });

  if (!verification.ok) {
    console.error(`[embedded/issuance] webhook rejected: ${verification.reason}`);
    return res.status(400).json({ error: verification.reason });
  }

  const { state } = verification.payload;
  const issuanceClient = clientService.getEmbeddedIssuanceClient();

  if (!issuanceClient) {
    embeddedResultStore.reject(
      state,
      'The server has no embedded issuance client (it may have restarted mid-flow).'
    );
    return res.status(503).json({ error: 'No embedded issuance client initialized' });
  }

  try {
    assert(
      process.env.VERID_CLIENT_SECRET,
      'Client secret is required in env variables (VERID_CLIENT_SECRET)',
      InvalidArgumentError
    );

    // finalizeEmbedded() re-verifies the signature, then exchanges the code
    // using the verifier cached under `state`. No redirect_uri is sent.
    const result = await issuanceClient.finalizeEmbedded({
      rawBody,
      signature,
      secret,
      clientAuth: { client_secret: process.env.VERID_CLIENT_SECRET },
    });

    const token = await issuanceClient.decode(result, assertIssuanceV1JwtPayload);

    embeddedResultStore.resolve(state, token, verification.payload.intent_id || null);

    return res.json({ received: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error(`[embedded/issuance] finalize failed for state ${state}: ${message}`);

    // Park the failure so the polling browser stops waiting and shows a reason.
    embeddedResultStore.reject(state, message);

    return res.status(500).json({ error: message });
  }
}

/**
 * GET /api/issuance/embedded/result?state=...
 * Poll for the result of an embedded flow
 */
export async function getEmbeddedIssuanceResult(
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

    const codeSnippet = generateEmbeddedIssuanceResultSnippet();

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
      webhookCode: generateEmbeddedIssuanceWebhookSnippet(),
      message: 'Embedded issuance flow completed successfully',
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}
