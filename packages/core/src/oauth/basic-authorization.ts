/** The `Authorization` header value for HTTP Basic client authentication. */
export function basicAuthorization(clientId: string, clientSecret: string): string {
  return `Basic ${btoa(`${clientId}:${clientSecret}`)}`;
}
