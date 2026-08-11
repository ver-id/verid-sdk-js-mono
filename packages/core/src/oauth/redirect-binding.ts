/**
 * Describes how the authorization code is bound to the client: via redirect_uri or purely by PKCE.
 *
 * @public
 */
export type FlowRedirectBinding =
  | { readonly kind: 'redirect'; readonly redirectUri: string }
  | { readonly kind: 'embedded' };
