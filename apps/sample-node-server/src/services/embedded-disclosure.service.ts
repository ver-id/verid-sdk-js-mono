import type { EmbeddedClientConfig } from '@ver-id/embedded-node-client';

export function generateInitCodeSnippet(config: EmbeddedClientConfig): string {
  return `import { EmbeddedDisclosureClient } from '@ver-id/embedded-node-client';

const disclosureClient = new EmbeddedDisclosureClient({
  issuerUri: '${config.issuerUri}',
  client_id: '${config.client_id}',
  // No redirectUri in embedded mode — the code is bound to the client via PKCE alone.
});`;
}

export function generateStartSnippet(scope: string, webhookUri: string): string {
  return `// SERVER — POST /api/disclosure/embedded/start
// Generates PKCE and returns only the public half to the browser.
const bootstrap = await disclosureClient.createEmbeddedSession({
  scope: '${scope}',
  webhookUri: '${webhookUri}',
});

// bootstrap = { clientId, scope, state, codeChallenge, webhookUri, gatewayUri }
// The code_verifier is NOT in here — it stays cached server-side, keyed by state.
res.json(bootstrap);`;
}

/**
 * Generate code snippet for starting an embedded session with a disclosure intent
 */
export function generateStartWithIntentSnippet(
  scope: string,
  webhookUri: string,
  payload: { challenge?: string; brandUuid?: string; requireExplicitConsent?: boolean }
): string {
  const params: string[] = [];

  if (payload.challenge) {
    params.push(`    challenge: '${payload.challenge}'`);
  }
  if (payload.brandUuid) {
    params.push(`    brandUuid: '${payload.brandUuid}'`);
  }
  if (payload.requireExplicitConsent !== undefined) {
    params.push(`    requireExplicitConsent: ${payload.requireExplicitConsent}`);
  }

  const payloadStr = params.length > 0 ? `{\n${params.join(',\n')}\n  }` : '{}';

  return `// SERVER — POST /api/disclosure/embedded/start (with an intent)
//
// Create the session first — the intent must bind to the challenge it just produced.
const bootstrap = await disclosureClient.createEmbeddedSession({
  scope: '${scope}',
  webhookUri: '${webhookUri}',
});

const intentId = await disclosureClient.createDisclosureIntent(
  ${payloadStr},
  bootstrap.codeChallenge, // bind the intent to THIS session's challenge
  { client_secret: '*****' }
);

res.json({ ...bootstrap, intentId });`;
}

export function generateWebhookSnippet(): string {
  return `// SERVER — POST /api/disclosure/embedded/webhook
//
// Mounted with a RAW body parser — the HMAC covers exact bytes, so
// express.json() must not touch this route:
//   app.use('/api/disclosure/embedded/webhook', express.text({ type: '*/*' }));
//   app.use(express.json());
app.post('/api/disclosure/embedded/webhook', async (req, res) => {
  const result = await disclosureClient.finalizeEmbedded({
    rawBody: req.body,                          // the raw string, not an object
    signature: req.header('x-signature-256'),
    secret: process.env.VERID_EMBEDDED_DISCLOSURE_WEBHOOK_SECRET,
    clientAuth: { client_secret: '*****' },
  });

  // finalizeEmbedded() verifies the HMAC, then exchanges the code for tokens
  // using the verifier cached under result.state. No redirect_uri is sent.
  const token = await disclosureClient.decode(result, assertDisclosureV1JwtPayload);

  // Park the result so the browser can pick it up when it polls.
  embeddedResultStore.resolve(result.state, token);

  res.json({ received: true });
});`;
}

export function generateResultSnippet(): string {
  return `// SERVER — GET /api/disclosure/embedded/result?state=...
//
// No redirect in embedded mode — the browser learns via the 'complete' event,
// then polls here.
app.get('/api/disclosure/embedded/result', (req, res) => {
  const entry = embeddedResultStore.consume(String(req.query.state));

  if (!entry) return res.status(404).json({ error: 'Unknown or expired state' });
  if (entry.status === 'pending') return res.json({ ready: false });
  if (entry.status === 'error') return res.json({ ready: true, error: entry.error });

  return res.json({ ready: true, token: entry.token });
});`;
}
