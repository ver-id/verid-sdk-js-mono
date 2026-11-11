/** Fields the browser package and the loader need. Never contains the code verifier. */
interface SessionContextFields {
  loaderUri: string;
  clientId: string;
  scope: string;
  state: string;
  codeChallenge: string;
  webhookUri: string;
  intentId: string;
}

/** Version of the encoded format, so a newer reader can still read an older context. */
const SESSION_CONTEXT_VERSION = 1;

/** Packs the session's public fields into the opaque string the browser mounts. */
export function encodeSessionContext(fields: SessionContextFields): string {
  return Buffer.from(JSON.stringify({ v: SESSION_CONTEXT_VERSION, ...fields })).toString(
    'base64url',
  );
}
