/**
 * How the authorization code is delivered to the client, and therefore how it is bound to it.
 *
 * `redirect` clients register a `redirect_uri` and echo it on the authorization and token
 * requests. `embedded` clients have none: the code is delivered out-of-band over the signed
 * webhook, and the token request carries the client secret and the PKCE verifier.
 *
 * @public
 */
export type FlowAuthCodeDeliveryBinding =
  { readonly kind: 'redirect'; readonly redirectUri: string } | { readonly kind: 'embedded' };
