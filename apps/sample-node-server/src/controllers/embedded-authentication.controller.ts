import type { Request, Response } from 'express';
import {
  EmbeddedAuthenticationClient,
  verifyEmbeddedWebhook,
  type EmbeddedClientConfig,
} from '@ver-id/embedded-node-client';
import { assert, InvalidArgumentError } from '@ver-id/node-client';
import {
  clientService,
  embeddedResultStore,
  generateEmbeddedAuthInitSnippet,
  generateEmbeddedAuthStartSnippet,
  generateEmbeddedAuthStartWithIntentSnippet,
  generateEmbeddedAuthWebhookSnippet,
  generateEmbeddedAuthResultSnippet,
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
 * POST /api/authentication/embedded/initialize
 * Initialize an embedded authentication client (no redirect URI)
 */
export async function initializeEmbeddedAuthClient(
  req: Request<object, object, EmbeddedInitializeRequest>,
  res: Response
): Promise<Response> {
  try {
    const issuerUri = req.body.issuerUri || process.env.VERID_AUTHENTICATION_API_URL;
    const client_id = req.body.client_id || process.env.VERID_EMBEDDED_AUTHENTICATION_FLOW_ID;

    assert(issuerUri, 'API URL is required', InvalidArgumentError);
    assert(client_id, 'Embedded Authentication Flow ID is required', InvalidArgumentError);

    const config: EmbeddedClientConfig = { issuerUri, client_id };

    const authClient = new EmbeddedAuthenticationClient(config);
    clientService.setEmbeddedAuthClient(authClient);

    const codeSnippet = generateEmbeddedAuthInitSnippet(config);

    // Report reachability instead of failing here, so the demo page can still
    // render step 1 and warn the user before step 2.
    const webhookReachable = isWebhookPubliclyReachable();

    return res.json({
      success: true,
      code: codeSnippet,
      webhookReachable,
      webhookUri: webhookReachable ? embeddedWebhookUri('authentication') : null,
      scope: embeddedScopeFor('authentication'),
      message: 'Embedded authentication client initialized successfully',
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}

/**
 * POST /api/authentication/embedded/start
 * Create an embedded session and return the public bootstrap for the browser
 */
export async function startEmbeddedAuthSession(
  req: Request<object, object, EmbeddedStartRequest>,
  res: Response
): Promise<Response> {
  try {
    const authClient = clientService.getEmbeddedAuthClient();

    if (!authClient) {
      return res.status(400).json({
        success: false,
        error: 'No embedded authentication client initialized. Please initialize first.',
      });
    }

    const scope = embeddedScopeFor('authentication');
    const webhookUri = embeddedWebhookUri('authentication');

    const bootstrap = await authClient.createEmbeddedSession({
      scope,
      webhookUri,
      ...(EMBEDDED_CONFIG.embedUri ? { embedUri: EMBEDDED_CONFIG.embedUri } : {}),
    });

    let codeSnippet: string;
    let intentId: string | undefined;

    if (req.body.useIntent) {
      const { challenge, brandUuid } = req.body;
      const payload: { challenge?: string; brandUuid?: string } = {};

      if (challenge) payload.challenge = challenge;
      if (brandUuid) payload.brandUuid = brandUuid;

      const clientSecret = process.env.VERID_CLIENT_SECRET;
      assert(
        clientSecret,
        'Client secret is required in env variables (VERID_CLIENT_SECRET)',
        InvalidArgumentError
      );

      // Create the session first — the intent must bind to the challenge it just produced.
      intentId = await authClient.createAuthenticationIntent(
        payload,
        bootstrap.codeChallenge,
        { client_secret: clientSecret }
      );

      codeSnippet = generateEmbeddedAuthStartWithIntentSnippet(scope, webhookUri, payload);
    } else {
      codeSnippet = generateEmbeddedAuthStartSnippet(scope, webhookUri);
    }

    // Register the session so an early poll reports "pending" instead of "unknown".
    embeddedResultStore.createPending(bootstrap.state);

    return res.json({
      success: true,
      bootstrap: intentId ? { ...bootstrap, intentId } : bootstrap,
      code: codeSnippet,
      message: 'Embedded authentication session created successfully',
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}

/**
 * POST /api/authentication/embedded/webhook
 * Receive the signed webhook, exchange the code for tokens, and park the result
 *
 * Mounted with a raw body parser — see `EMBEDDED_WEBHOOK_PATHS` in config.
 */
export async function handleEmbeddedAuthWebhook(
  req: Request,
  res: Response
): Promise<Response> {
  const rawBody = typeof req.body === 'string' ? req.body : '';
  const signature = req.header('x-signature-256');
  const secret = process.env.VERID_EMBEDDED_AUTHENTICATION_WEBHOOK_SECRET;

  if (!secret) {
    console.error(
      '[embedded/authentication] VERID_EMBEDDED_AUTHENTICATION_WEBHOOK_SECRET is not set'
    );
    return res.status(500).json({ error: 'Webhook secret is not configured' });
  }

  // Verify before touching the store, so an unverified webhook can never be
  // attributed to a browser session.
  const verification = verifyEmbeddedWebhook({ rawBody, signature, secret });

  if (!verification.ok) {
    console.error(`[embedded/authentication] webhook rejected: ${verification.reason}`);
    return res.status(400).json({ error: verification.reason });
  }

  const { state } = verification.payload;
  const authClient = clientService.getEmbeddedAuthClient();

  if (!authClient) {
    embeddedResultStore.reject(
      state,
      'The server has no embedded authentication client (it may have restarted mid-flow).'
    );
    return res.status(503).json({ error: 'No embedded authentication client initialized' });
  }

  try {
    assert(
      process.env.VERID_CLIENT_SECRET,
      'Client secret is required in env variables (VERID_CLIENT_SECRET)',
      InvalidArgumentError
    );

    // finalizeEmbedded() re-verifies the signature, then exchanges the code
    // using the verifier cached under `state`. No redirect_uri is sent.
    const result = await authClient.finalizeEmbedded({
      rawBody,
      signature,
      secret,
      clientAuth: { client_secret: process.env.VERID_CLIENT_SECRET },
    });

    const token = await authClient.decode(result);

    embeddedResultStore.resolve(state, token, verification.payload.intent_id || null);

    return res.json({ received: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error(`[embedded/authentication] finalize failed for state ${state}: ${message}`);

    // Park the failure so the polling browser stops waiting and shows a reason.
    embeddedResultStore.reject(state, message);

    return res.status(500).json({ error: message });
  }
}

/**
 * GET /api/authentication/embedded/result?state=...
 * Poll for the result of an embedded flow
 */
export async function getEmbeddedAuthResult(
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

    const codeSnippet = generateEmbeddedAuthResultSnippet();

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
      webhookCode: generateEmbeddedAuthWebhookSnippet(),
      message: 'Embedded authentication flow completed successfully',
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}
