export const SERVER_CONFIG = {
  host: process.env.HOST ?? 'localhost',
  port: process.env.PORT ? Number(process.env.PORT) : 3000,
};

/**
 * The three Ver.iD flow scopes that support embedded mode.
 *
 * GraphQL is not a flow scope and has no embedded variant.
 */
export const EMBEDDED_SCOPES = ['authentication', 'disclosure', 'issuance'] as const;

export type EmbeddedScope = (typeof EMBEDDED_SCOPES)[number];

/**
 * Paths that must receive the raw, unparsed request body.
 *
 * The embedded webhook is authenticated with an HMAC computed over the exact
 * bytes of the request, so these paths must bypass `express.json()`.
 *
 * @see {@link file://../middleware/raw-body.ts}
 */
export const EMBEDDED_WEBHOOK_PATHS: string[] = EMBEDDED_SCOPES.map(
  (scope) => `/api/${scope}/embedded/webhook`,
);

export const EMBEDDED_CONFIG = {
  /**
   * Public base URL that the Ver.iD platform can reach this server on.
   *
   * The embedded webhook is a *server-to-server* POST from Ver.iD to this
   * server, so `http://localhost:3000` is never reachable. Two ways to get a
   * usable URL:
   *
   * - **Garden (local cluster):** wildcard DNS such as `<profile>.ver.garden`
   *   already resolves to your dev machine from inside the cluster, so you can
   *   point this straight at your own host — no tunnel needed.
   * - **Everyone else:** run a tunnel and paste its public URL here, e.g.
   *   `cloudflared tunnel --url http://localhost:3000` or `ngrok http 3000`.
   */
  webhookPublicUrl: process.env.VERID_WEBHOOK_PUBLIC_URL ?? '',

  /**
   * Optional override for the Ronan embed URL handed to the browser.
   *
   * When empty, `createEmbeddedSession()` defaults it to the `issuerUri` origin.
   * Override it when Ronan is hosted separately from the OAuth issuer, which is
   * the case in a Garden profile.
   */
  ronanUri: process.env.VERID_RONAN_URI ?? '',

  /** How long a finalized embedded result stays available for polling. */
  resultTtlMs: process.env.VERID_EMBEDDED_RESULT_TTL_MS
    ? Number(process.env.VERID_EMBEDDED_RESULT_TTL_MS)
    : 10 * 60 * 1000,
};

/**
 * Hosts that the Ver.iD platform can never reach over the network.
 */
const UNREACHABLE_HOSTNAMES = new Set(['localhost', '127.0.0.1', '0.0.0.0', '::1']);

/**
 * Whether {@link EMBEDDED_CONFIG.webhookPublicUrl} looks reachable from outside
 * this machine.
 */
export function isWebhookPubliclyReachable(): boolean {
  if (!EMBEDDED_CONFIG.webhookPublicUrl) {
    return false;
  }
  try {
    return !UNREACHABLE_HOSTNAMES.has(new URL(EMBEDDED_CONFIG.webhookPublicUrl).hostname);
  } catch {
    return false;
  }
}

/**
 * Builds the absolute webhook URI to hand to `createEmbeddedSession()` for a
 * given scope.
 *
 * @throws When `VERID_WEBHOOK_PUBLIC_URL` is unset or points at localhost —
 * failing here produces a far clearer error than a webhook that silently never
 * arrives.
 */
export function embeddedWebhookUri(scope: EmbeddedScope): string {
  if (!isWebhookPubliclyReachable()) {
    throw new Error(
      'VERID_WEBHOOK_PUBLIC_URL must be set to a publicly reachable base URL. ' +
        'The embedded webhook is a server-to-server call, so localhost will not work. ' +
        'In Garden, use your profile host (e.g. https://<profile>.ver.garden); ' +
        'otherwise run a tunnel such as `cloudflared tunnel --url http://localhost:3000`.',
    );
  }
  const base = EMBEDDED_CONFIG.webhookPublicUrl.replace(/\/+$/, '');
  return `${base}/api/${scope}/embedded/webhook`;
}
