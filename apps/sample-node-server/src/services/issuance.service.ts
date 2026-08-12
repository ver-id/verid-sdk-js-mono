import { NodeIssuanceClientConfig } from '@ver-id/node-client';

/**
 * Generate a code snippet showing the client initialization
 */
export function generateInitCodeSnippet(config: NodeIssuanceClientConfig): string {
  return `import { VeridIssuanceClient } from '@ver-id/node-client';

const issuanceClient = new VeridIssuanceClient({
  issuerUri: '${config.issuerUri}',
  clientId: '${config.clientId}',
  redirectUri: '${config.redirectUri}',
});`;
}

/**
 * Generate a code snippet showing code challenge generation (MANDATORY for issuance)
 */
export function generateCodeChallengeSnippet(): string {
  return `// Generate PKCE code challenge and state (required for issuance)
const { codeChallenge, state } = await issuanceClient.generateCodeChallenge();`;
}

/**
 * Generate code snippet for creating issuance intent (MANDATORY for issuance)
 */
export function generateCreateIntentSnippet(
  payload: { 
    challenge?: string; 
    brandUuid?: string;
    requireExplicitConsent?: boolean;
    payload?: {
      mapping?: Record<string, unknown>;
      data?: Array<{
        attributeUuid: string;
        value: unknown;
      }>;
    };
  },
  codeChallenge: string
): string {
  const payloadParts: string[] = [];
  
  // Add mapping if present
  if (payload.payload?.mapping && Object.keys(payload.payload.mapping).length > 0) {
    payloadParts.push(`    mapping: ${JSON.stringify(payload.payload.mapping, null, 2).replace(/\n/g, '\n    ')}`);
  }
  
  // Add data if present
  if (payload.payload?.data && payload.payload.data.length > 0) {
    payloadParts.push(`    data: ${JSON.stringify(payload.payload.data, null, 2).replace(/\n/g, '\n    ')}`);
  }
  
  const payloadContent = payloadParts.length > 0 
    ? `{\n${payloadParts.join(',\n')}\n  }`
    : '{}';

  const optionalParams: string[] = [];
  if (payload.challenge) {
    optionalParams.push(`  challenge: '${payload.challenge}'`);
  }
  if (payload.brandUuid) {
    optionalParams.push(`  brandUuid: '${payload.brandUuid}'`);
  }
  if (payload.requireExplicitConsent) {
    optionalParams.push(`  requireExplicitConsent: ${payload.requireExplicitConsent}`);
  }

  const params = optionalParams.length > 0
    ? `{\n  payload: ${payloadContent},\n${optionalParams.join(',\n')}\n}`
    : `{ payload: ${payloadContent} }`;

  return `// Create issuance intent (MANDATORY for issuance)
const intentId = await issuanceClient.createIssuanceIntent(
  ${params},
  '${codeChallenge}',
  { client_secret: '*****' }
);`;
}

/**
 * Generate code snippet for generating issuance URL with intent
 * Note: Intent is MANDATORY for issuance
 */
export function generateIssuanceUrlWithIntentSnippet(
  intentId: string,
  state: string,
  codeChallenge: string
): string {
  return `// Generate issuance URL with intent (intent is MANDATORY)
const { issuanceUrl } = await issuanceClient.generateIssuanceUrl({
  intentId: '${intentId}',
  state: '${state}',
  codeChallenge: '${codeChallenge}',
});`;
}

/**
 * Generate a code snippet showing finalization
 */
export function generateFinalizeCodeSnippet(callbackParams: string): string {
  return `// Exchange authorization code for tokens
const issuanceResponse = await issuanceClient.finalize({
  clientAuth: { client_secret: '*****' },
  callbackParams: ${callbackParams},
});`;
}
