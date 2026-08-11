export const SERVER_CONFIG = {
  host: process.env.HOST ?? 'localhost',
  port: process.env.PORT ? Number(process.env.PORT) : 3000,
};

/** The three Ver.iD flow scopes that support embedded mode (GraphQL has no embedded variant). */
export const EMBEDDED_SCOPES = ['authentication', 'disclosure', 'issuance'] as const;

export type EmbeddedScope = (typeof EMBEDDED_SCOPES)[number];

/**
 * Paths that must receive the raw, unparsed request body.
 *
 * The embedded webhook is HMAC-signed over the exact request bytes, so these
 * paths must bypass `express.json()` — see `../middleware/raw-body.ts`.
 */
export const EMBEDDED_WEBHOOK_PATHS: string[] = EMBEDDED_SCOPES.map(
  (scope) => `/api/${scope}/embedded/webhook`,
);

export const EMBEDDED_CONFIG = {
  /**
   * Public base URL that the Ver.iD platform can reach this server on.
   *
   * The webhook is a server-to-server POST from Ver.iD, so `localhost` never
   * works — use a Garden profile host or a tunnel (e.g. `ngrok http 3000`).
   */
  webhookPublicUrl: process.env.VERID_WEBHOOK_PUBLIC_URL ?? '',

  /**
   * Optional override for the Ver.iD gateway URL handed to the browser.
   *
   * Defaults to the `issuerUri` origin; override when the Ver.iD flow UI is
   * hosted separately from the OAuth issuer, as in a Garden profile.
   */
  gatewayUri: process.env.VERID_GATEWAY_URI ?? '',

  /** How long a finalized embedded result stays available for polling. */
  resultTtlMs: process.env.VERID_EMBEDDED_RESULT_TTL_MS
    ? Number(process.env.VERID_EMBEDDED_RESULT_TTL_MS)
    : 10 * 60 * 1000,

  /**
   * OAuth scope string sent with each embedded flow.
   *
   * Unlike redirect mode, `createEmbeddedSession()` takes the scope verbatim,
   * so it must be correct here. Note `authentication` needs a second scope
   * alongside `openid` — the OAuth server rejects `openid` alone.
   */
  scopes: {
    authentication: process.env.VERID_EMBEDDED_AUTHENTICATION_SCOPES ?? 'openid profile',
    disclosure: process.env.VERID_EMBEDDED_DISCLOSURE_SCOPES ?? 'disclosure',
    issuance: process.env.VERID_EMBEDDED_ISSUANCE_SCOPES ?? 'issuance',
  } satisfies Record<EmbeddedScope, string>,
};

/** The configured scope string for an embedded flow. */
export function embeddedScopeFor(scope: EmbeddedScope): string {
  return EMBEDDED_CONFIG.scopes[scope];
}

/** Hosts that the Ver.iD platform can never reach over the network. */
const UNREACHABLE_HOSTNAMES = new Set(['localhost', '127.0.0.1', '0.0.0.0', '::1']);

/** Whether {@link EMBEDDED_CONFIG.webhookPublicUrl} looks reachable from outside this machine. */
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
