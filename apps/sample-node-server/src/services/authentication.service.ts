import { AuthenticationClientConfig } from '@ver-id/node-client';

/**
 * Generate a code snippet showing the client initialization
 */
export function generateInitCodeSnippet(config: AuthenticationClientConfig): string {
  return `import { VeridAuthenticationClient } from '@ver-id/node-client';

const authClient = new VeridAuthenticationClient({
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
const { codeChallenge, state } = await authClient.generateCodeChallenge();`;
}

/**
 * Generate code snippet for creating authentication intent
 */
export function generateCreateIntentSnippet(
  payload: { challenge?: string; brandUuid?: string },
  codeChallenge: string
): string {
  const params: string[] = [];
  
  if (payload.challenge) {
    params.push(`  challenge: '${payload.challenge}'`);
  }
  if (payload.brandUuid) {
    params.push(`  brandUuid: '${payload.brandUuid}'`);
  }

  const payloadStr = params.length > 0 ? `{\n${params.join(',\n')}\n}` : '{}';

  return `// Create authentication intent
const intentId = await authClient.createAuthenticationIntent(
  ${payloadStr},
  '${codeChallenge}'
);`;
}

/**
 * Generate code snippet for generating authentication URL with intent
 */
export function generateAuthUrlWithIntentSnippet(
  scope: string,
  intentId: string,
  state: string,
  codeChallenge: string
): string {
  return `// Generate authentication URL with intent
const { authenticationUrl } = await authClient.generateAuthenticationUrl({
  scope: '${scope}',
  intent_id: '${intentId}',
  state: '${state}',
  code_challenge: '${codeChallenge}',
});`;
}

/**
 * Generate code snippet for generating authentication URL without intent
 */
export function generateAuthUrlSnippet(scope: string): string {
  return `// Generate authentication URL with PKCE
const { authenticationUrl, state } = await authClient.generateAuthenticationUrl({
  scope: '${scope}',
});`;
}

export function generateFinalizeCodeSnippet(callbackParams: string): string {
  return `// Exchange authorization code for tokens
const authResponse = await authClient.finalize({
  clientAuth: { client_secret: '*****' },
  callbackParams: ${callbackParams},
});`
}
