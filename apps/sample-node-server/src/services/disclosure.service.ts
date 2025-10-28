import { DisclosureClientConfig } from '@ver-id/node-client';

/**
 * Generate a code snippet showing the client initialization
 */
export function generateInitCodeSnippet(config: DisclosureClientConfig): string {
  return `import { VeridDisclosureClient } from '@ver-id/node-client';

const authClient = new VeridDisclosureClient({
  apiUrl: '${config.apiUrl}',
  disclosureFlowId: '${config.disclosureFlowId}',
  redirectUri: '${config.redirectUri}',
});`;
}

export function generateFinalizeCodeSnippet(callbackParams: string): string {
  return `// Exchange authorization code for tokens
const authResponse = await authClient.finalize({
  clientAuth: { client_secret: '*****' },
  callbackParams: ${callbackParams},
});`
}
