import type { EmbeddedClientConfig } from '@ver-id/embedded-node-client';

export function generateInitCodeSnippet(config: EmbeddedClientConfig): string {
  return `import { EmbeddedIssuanceClient } from '@ver-id/embedded-node-client';

const issuanceClient = new EmbeddedIssuanceClient({
  issuerUri: '${config.issuerUri}',
  clientId: '${config.clientId}',
  // No redirectUri in embedded mode — the code is bound to the client via PKCE alone.
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
// Generate PKCE first — the intent must bind to the challenge the session will use.
const { codeChallenge, state } = await issuanceClient.generateCodeChallenge();

// Issuance REQUIRES an intent: it carries what is being issued. Provide exactly
// one of payload.mapping or payload.data — never both.
const intent = await issuanceClient.createIssuanceIntent(
  {
${params.join(',\n')}
  },
  codeChallenge, // bind the intent to THIS session's challenge
  { client_secret: '*****' }
);

// NOTE: createIssuanceIntent() returns an IntentResponse object, whereas
// createDisclosureIntent() returns a bare id string.
//
// createEmbeddedSession() REQUIRES intentId for issuance, and echoes it back on
// the bootstrap it returns. Pass the state/codeChallenge pair the intent was
// created against so the session runs against that same challenge instead of
// generating a new one.
const bootstrap = await issuanceClient.createEmbeddedSession({
  scope: '${scope}',
  webhookUri: '${webhookUri}',
  state,         // reuse the state the intent was bound to
  codeChallenge, // ...and the challenge cached under it
  intentId: intent.intent_id,
});

res.json(bootstrap);`;
}

export function generateWebhookSnippet(): string {
  return `// SERVER — POST /api/issuance/embedded/webhook
//
// Mounted with a RAW body parser — the HMAC covers exact bytes, so
// express.json() must not touch this route:
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

export function generateResultSnippet(): string {
  return `// SERVER — GET /api/issuance/embedded/result?state=...
//
// No redirect in embedded mode — the browser learns via the 'complete' event,
// then polls here.
app.get('/api/issuance/embedded/result', (req, res) => {
  const entry = embeddedResultStore.consume(String(req.query.state));

  if (!entry) return res.status(404).json({ error: 'Unknown or expired state' });
  if (entry.status === 'pending') return res.json({ ready: false });
  if (entry.status === 'error') return res.json({ ready: true, error: entry.error });

  return res.json({ ready: true, token: entry.token });
});`;
}
