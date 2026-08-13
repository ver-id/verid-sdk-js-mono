/**
 * How the authorization code is delivered to the client, and therefore how it is bound to it.
 *
 * `redirect` clients register a `redirect_uri` and echo it on the authorization and token
 * requests. `embedded` clients have none: the code is delivered out-of-band over the signed
 * webhook and bound purely by PKCE.
 *
 * @public
 */
export type FlowAuthCodeDeliveryBinding =
  | { readonly kind: 'redirect'; readonly redirectUri: string }
  | { readonly kind: 'embedded' };
