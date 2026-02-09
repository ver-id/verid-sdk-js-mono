import { NodeDisclosureClientConfig } from '@ver-id/node-client';

/**
 * Generate a code snippet showing the client initialization
 */
export function generateInitCodeSnippet(config: NodeDisclosureClientConfig): string {
  return `import { VeridDisclosureClient } from '@ver-id/node-client';

const authClient = new VeridDisclosureClient({
  issuerUri: '${config.issuerUri}',
  client_id: '${config.client_id}',
  redirectUri: '${config.redirectUri}',
});`;
}

/**
 * Generate code snippet for generating code challenge
 */
export function generateCodeChallengeSnippet(): string {
  return `// Generate PKCE code challenge and state
const { codeChallenge, state } = await disclosureClient.generateCodeChallenge();`;
}

/**
 * Generate code snippet for creating disclosure intent
 */
export function generateCreateIntentSnippet(
  payload: { challenge?: string; brandUuid?: string; requireExplicitConsent?: boolean },
  codeChallenge: string
): string {
  const params: string[] = [];
  
  if (payload.challenge) {
    params.push(`  challenge: '${payload.challenge}'`);
  }
  if (payload.brandUuid) {
    params.push(`  brandUuid: '${payload.brandUuid}'`);
  }
  if (payload.requireExplicitConsent !== undefined) {
    params.push(`  requireExplicitConsent: ${payload.requireExplicitConsent}`);
  }

  const payloadStr = params.length > 0 ? `{\n${params.join(',\n')}\n}` : '{}';

  return `// Create disclosure intent
const intentId = await disclosureClient.createDisclosureIntent(
  ${payloadStr},
  '${codeChallenge}',
  { client_secret: '*****' }
);`;
}

/**
 * Generate code snippet for generating disclosure URL with intent
 */
export function generateDisclosureUrlWithIntentSnippet(
  intentId: string,
  state: string,
  codeChallenge: string
): string {
  return `// Generate disclosure URL with intent
const { disclosureUrl } = await disclosureClient.generateDisclosureUrl({
  intent_id: '${intentId}',
  state: '${state}',
  code_challenge: '${codeChallenge}',
});`;
}

/**
 * Generate code snippet for generating disclosure URL without intent
 */
export function generateDisclosureUrlSnippet(): string {
  return `// Generate disclosure URL with PKCE
const { disclosureUrl, state } = await disclosureClient.generateDisclosureUrl();`;
}

export function generateFinalizeCodeSnippet(callbackParams: string): string {
  return `// Exchange authorization code for tokens
const authResponse = await authClient.finalize({
  clientAuth: { client_secret: '*****' },
  callbackParams: ${callbackParams},
});`
}
