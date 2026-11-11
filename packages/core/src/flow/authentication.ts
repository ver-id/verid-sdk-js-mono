import { assertAuthenticationResponse, assertOpenIdJwtPayload } from '../utils/assert.js';
import { JwtType, OpenIdJwtPayload } from '../types/jwt/index.js';
import { AuthenticationResponse } from '../types/response/index.js';
import {
  VeridFlowDefinition,
  VeridSessionInput,
  VeridTokenResult,
  VeridUnknownTokenResult,
} from '../client/base.js';

/**
 * Input for an authentication session.
 *
 * @public
 */
export interface AuthenticationSessionInput extends VeridSessionInput {
  /** The scopes to request. `openid` is added when missing. */
  scope: string;
}

/**
 * The verified result of an authentication session.
 *
 * @public
 */
export type AuthenticationResult =
  VeridTokenResult<'openid', OpenIdJwtPayload> | VeridUnknownTokenResult;

/** Authentication: requests `openid` and returns the ID token. */
export const authenticationFlow: VeridFlowDefinition<AuthenticationSessionInput> = {
  scope({ scope }) {
    const scopes = scope.split(' ').filter(Boolean);
    return (scopes.includes('openid') ? scopes : [...scopes, 'openid']).join(' ');
  },
  intent: ({ challenge, brandUuid }) => ({ scope: 'openid', challenge, brandUuid }),
  sessionExtra: () => ({}),
  assertResponse: assertAuthenticationResponse,
  token: (response) => (response as AuthenticationResponse).id_token,
  formats: new Map([
    [JwtType.jwt_ssi_output_openid_v1, { format: 'openid', assert: assertOpenIdJwtPayload }],
  ]),
};
