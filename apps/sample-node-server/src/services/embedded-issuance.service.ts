import type { EmbeddedClientConfig } from '@ver-id/embedded-node-client';

/**
 * Generate a code snippet showing the embedded client initialization
 */
export function generateInitCodeSnippet(config: EmbeddedClientConfig): string {
  return `import { EmbeddedIssuanceClient } from '@ver-id/embedded-node-client';

const issuanceClient = new EmbeddedIssuanceClient({
  issuerUri: '${config.issuerUri}',
  client_id: '${config.client_id}',
  // NOTE: no redirectUri. Embedded flows are registered without one — the
  // authorization code is bound to the client purely through PKCE.
});`;
}

/**
 * Generate code snippet for starting an embedded session.
 *
 * Issuance always has an intent — it carries the attribute values to issue —
 * so there is no intent-less variant of this snippet.
 */
export function generateStartSnippet(
  scope: string,
  webhookUri: string,
  intent: {
    challenge?: string;
    brandUuid?: string;
    requireExplicitConsent?: boolean;
    payload: unknown;
  }
): string {
  const params: string[] = [
    `    payload: ${JSON.stringify(intent.payload, null, 2)
      .split('\n')
      .join('\n    ')}`,
  ];

  if (intent.challenge) {
    params.push(`    challenge: '${intent.challenge}'`);
  }
  if (intent.brandUuid) {
    params.push(`    brandUuid: '${intent.brandUuid}'`);
  }
  if (intent.requireExplicitConsent !== undefined) {
    params.push(`    requireExplicitConsent: ${intent.requireExplicitConsent}`);
  }

  return `// SERVER — POST /api/issuance/embedded/start
//
// IMPORTANT: create the session FIRST, then bind the intent to the challenge it
// produced. An intent is registered against a specific code_challenge, and
// createEmbeddedSession() always mints a fresh one — so creating the intent
// first would bind it to a challenge the browser never presents.
const bootstrap = await issuanceClient.createEmbeddedSession({
  scope: '${scope}',
  webhookUri: '${webhookUri}',
});

// Issuance REQUIRES an intent: it carries what is being issued. Provide exactly
// one of payload.mapping or payload.data — never both.
const intent = await issuanceClient.createIssuanceIntent(
  {
${params.join(',\n')}
  },
  bootstrap.codeChallenge, // bind the intent to THIS session's challenge
  { client_secret: '*****' }
);

// NOTE: createIssuanceIntent() returns an IntentResponse object, whereas
// createDisclosureIntent() returns a bare id string.
res.json({ ...bootstrap, intentId: intent.intent_id });`;
}

/**
 * Generate code snippet for the signed webhook handler
 */
export function generateWebhookSnippet(): string {
  return `// SERVER — POST /api/issuance/embedded/webhook
//
// Mounted with a RAW body parser. The HMAC is computed over the exact bytes,
// so express.json() must not touch this route:
//   app.use('/api/issuance/embedded/webhook', express.text({ type: '*/*' }));
//   app.use(express.json());
app.post('/api/issuance/embedded/webhook', async (req, res) => {
  const result = await issuanceClient.finalizeEmbedded({
    rawBody: req.body,                          // the raw string, not an object
    signature: req.header('x-signature-256'),
    secret: process.env.VERID_EMBEDDED_ISSUANCE_WEBHOOK_SECRET,
    clientAuth: { client_secret: '*****' },
  });

  // finalizeEmbedded() verifies the HMAC, then exchanges the code for tokens
  // using the verifier cached under result.state. No redirect_uri is sent.
  const token = await issuanceClient.decode(result, assertIssuanceV1JwtPayload);

  // Park the result so the browser can pick it up when it polls.
  embeddedResultStore.resolve(result.state, token);

  res.json({ received: true });
});`;
}

/**
 * Generate code snippet for the result polling endpoint
 */
export function generateResultSnippet(): string {
  return `// SERVER — GET /api/issuance/embedded/result?state=...
//
// Embedded mode has no redirect, so the browser cannot read the result from a
// URL. It learns the flow finished via the 'complete' event, then asks here.
app.get('/api/issuance/embedded/result', (req, res) => {
  const entry = embeddedResultStore.consume(String(req.query.state));

  if (!entry) return res.status(404).json({ error: 'Unknown or expired state' });
  if (entry.status === 'pending') return res.json({ ready: false });
  if (entry.status === 'error') return res.json({ ready: true, error: entry.error });

  return res.json({ ready: true, token: entry.token });
});`;
}
