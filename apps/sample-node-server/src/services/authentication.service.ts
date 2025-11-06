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

export function generateFinalizeCodeSnippet(callbackParams: string): string {
  return `// Exchange authorization code for tokens
const authResponse = await authClient.finalize({
  clientAuth: { client_secret: '*****' },
  callbackParams: ${callbackParams},
});`
}
