/**
 * How the authorization code is bound to the client across the authorization
 * and token requests.
 *
 * Redirect-flow clients register a `redirect_uri` and echo it on both requests.
 * Embedded-flow clients have no registered `redirect_uri`; the authorization
 * code is bound purely by PKCE.
 *
 * @public
 */
export type FlowRedirectBinding =
  | { readonly kind: 'redirect'; readonly redirectUri: string }
  | { readonly kind: 'embedded' };
