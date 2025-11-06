import { IssuanceClientConfig } from '@ver-id/node-client';

/**
 * Generate a code snippet showing the client initialization
 */
export function generateInitCodeSnippet(config: IssuanceClientConfig): string {
  return `import { VeridIssuanceClient } from '@ver-id/node-client';

const issuanceClient = new VeridIssuanceClient({
  issuerUri: '${config.issuerUri}',
  client_id: '${config.client_id}',
  redirectUri: '${config.redirectUri}',
});`;
}

/**
 * Generate a code snippet showing code challenge generation
 */
export function generateCodeChallengeSnippet(): string {
  return `// Step 1: Generate code challenge
const { codeChallenge, state } = await issuanceClient.generateCodeChallenge();`;
}

/**
 * Generate a code snippet showing intent creation with mapping
 */
export function generateIntentMappingSnippet(mapping: Record<string, unknown>): string {
  const mappingStr = JSON.stringify(mapping, null, 2).split('\n').map((line, i) => i === 0 ? line : `  ${line}`).join('\n');
  
  return `// Step 2: Create issuance intent with mapping
const intentId = await issuanceClient.createIssuanceIntent(
  {
    payload: {
      mapping: ${mappingStr},
    },
  },
  codeChallenge
);`;
}

/**
 * Generate a code snippet showing intent creation with data
 */
export function generateIntentDataSnippet(
  attributeUuid: string,
  credentialUuid: string,
  issuerUuid: string,
  schemeUuid: string,
  providerUuid: string,
  value: unknown
): string {
  const valueStr = JSON.stringify(value, null, 2).split('\n').map((line, i) => i === 0 ? line : `        ${line}`).join('\n');
  
  return `// Step 2: Create issuance intent with data
const intentId = await issuanceClient.createIssuanceIntent(
  {
    payload: {
      data: {
        attributeUuid: '${attributeUuid}',
        credentialUuid: '${credentialUuid}',
        issuerUuid: '${issuerUuid}',
        schemeUuid: '${schemeUuid}',
        providerUuid: '${providerUuid}',
        value: ${valueStr},
      },
    },
  },
  codeChallenge
);`;
}

/**
 * Generate a code snippet showing URL generation
 */
export function generateUrlSnippet(): string {
  return `// Step 3: Generate issuance URL
const { issuanceUrl } = await issuanceClient.generateIssuanceUrl({
  intent_id: intentId,
  state: state,
  code_challenge: codeChallenge,
});

// Send URL to frontend or redirect
res.json({ issuanceUrl, state });`;
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
