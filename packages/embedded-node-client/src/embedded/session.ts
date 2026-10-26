import { assertObject, assertString, assertUrlString, type FlowBasePkceResult } from '@ver-id/core';
import { InvalidArgumentError } from '@ver-id/core/error';

/** Parameters to start an embedded session (bootstrap for the browser). */
export interface EmbeddedSessionParams {
  /** Scopes to request. */
  scope: string;
  /** The backend's own webhook endpoint Ver.iD will call. */
  webhookUri: string;
  /** An intent created via `createDisclosureIntent()` / `createAuthenticationIntent()`. */
  intentId?: string;
  /** Optional caller-supplied state; otherwise generated. */
  state?: string;
  /**
   * An existing PKCE challenge to run the session against, instead of generating a new one.
   *
   * Pass it together with the `state` it was cached under — i.e. the pair returned by
   * `generateCodeChallenge()`. This is what binds a session to an intent: the intent is created
   * against a challenge, and the session has to use that same challenge.
   */
  codeChallenge?: string;
}

/** Public bootstrap handed to the browser — never contains the code_verifier. */
export interface EmbeddedSessionBootstrap {
  clientId: string;
  scope: string;
  state: string;
  codeChallenge: string;
  webhookUri: string;
  /** Ver.iD's loader script, as the issuer advertises it; the browser adds it to the page. */
  loaderUri: string;
  intentId?: string;
}

/** The per-client dependencies the bootstrap builder needs. */
export interface EmbeddedBootstrapContext {
  clientId: string;
  /** Reads the loader script's URL from the issuer's metadata (`embedded_loader_uri`). */
  embeddedLoaderUri(): Promise<string>;
  generateCodeChallenge(state?: string): Promise<FlowBasePkceResult>;
}

/**
 * Generates PKCE credentials and returns the public bootstrap values for the browser.
 *
 * When `params.codeChallenge` and `params.state` are both supplied, that pair is reused as-is (the
 * verifier is already cached under that state); otherwise a fresh challenge is generated and
 * cached. Reuse is what keeps a session bound to an intent created against the same challenge.
 *
 * @param context - The calling client's flow id, the issuer's loader URI, and PKCE challenge
 *   generator.
 * @param params - The scopes to request, the backend's own webhook endpoint, and optionally an
 *   intent id and a caller-supplied state/challenge.
 * @returns The bootstrap the browser needs to mount the embedded component; the `code_verifier`
 *   stays server-side and is never part of it.
 * @throws {InvalidArgumentError} When any input is invalid — a malformed `webhookUri`, a missing
 *   `scope`, or a `codeChallenge` supplied without the `state` it was cached under.
 * @throws {InvalidAssertionError} When the issuer's metadata has no `embedded_loader_uri`.
 */
export async function buildEmbeddedSessionBootstrap(
  context: EmbeddedBootstrapContext,
  params: EmbeddedSessionParams,
): Promise<EmbeddedSessionBootstrap> {
  assertObject(params, 'params', InvalidArgumentError);
  assertString(params.scope, 'scope', InvalidArgumentError);
  assertUrlString(params.webhookUri, 'webhookUri', InvalidArgumentError);
  assertString(params.state, 'state', InvalidArgumentError, { allowUndefined: true });
  assertString(params.codeChallenge, 'codeChallenge', InvalidArgumentError, {
    allowUndefined: true,
  });
  assertString(params.intentId, 'intentId', InvalidArgumentError, { allowUndefined: true });

  if (params.codeChallenge && !params.state) {
    throw new InvalidArgumentError('State must be provided when using an external code challenge.');
  }

  // Before the challenge is generated, so a failed lookup caches no verifier.
  const loaderUri = await context.embeddedLoaderUri();

  const { codeChallenge, state } =
    params.codeChallenge && params.state
      ? { codeChallenge: params.codeChallenge, state: params.state }
      : await context.generateCodeChallenge(params.state);

  const bootstrap: EmbeddedSessionBootstrap = {
    clientId: context.clientId,
    scope: params.scope,
    state,
    codeChallenge,
    webhookUri: params.webhookUri,
    loaderUri,
  };

  if (params.intentId !== undefined) {
    return { ...bootstrap, intentId: params.intentId };
  }
  return bootstrap;
}
