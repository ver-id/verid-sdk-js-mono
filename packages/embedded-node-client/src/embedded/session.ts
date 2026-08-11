import type { FlowBasePkceResult } from '@ver-id/core';

/** Parameters to start an embedded session (bootstrap for the browser). */
export interface EmbeddedSessionParams {
  /** Scopes to request. */
  scope: string;
  /** The backend's own webhook endpoint Ronan will call. */
  webhookUri: string;
  /** Ronan embed URL to hand the browser. Defaults to the issuerUri origin. */
  ronanUri?: string;
  /** Issuance only: an intent created via createIssuanceIntent(). */
  intentId?: string;
  /** Optional caller-supplied state; otherwise generated. */
  state?: string;
}

/** Public bootstrap handed to the browser — never contains the code_verifier. */
export interface EmbeddedSessionBootstrap {
  clientId: string;
  scope: string;
  state: string;
  codeChallenge: string;
  webhookUri: string;
  ronanUri: string;
  intentId?: string;
}

/** The per-client dependencies the bootstrap builder needs. */
export interface EmbeddedBootstrapContext {
  clientId: string;
  issuerUri: string;
  generateCodeChallenge(state?: string): Promise<FlowBasePkceResult>;
}

/** Generates PKCE credentials and returns the public bootstrap values for the browser. */
export async function buildEmbeddedSessionBootstrap(
  context: EmbeddedBootstrapContext,
  params: EmbeddedSessionParams,
): Promise<EmbeddedSessionBootstrap> {
  const { codeChallenge, state } = await context.generateCodeChallenge(params.state);
  const ronanUri = params.ronanUri ?? new URL(context.issuerUri).origin;

  const bootstrap: EmbeddedSessionBootstrap = {
    clientId: context.clientId,
    scope: params.scope,
    state,
    codeChallenge,
    webhookUri: params.webhookUri,
    ronanUri,
  };

  if (params.intentId !== undefined) {
    return { ...bootstrap, intentId: params.intentId };
  }
  return bootstrap;
}
