import {
  assertAttestedFlatV1JwtPayload,
  assertDisclosureResponse,
  assertDisclosureV1JwtPayload,
} from '../utils/assert.js';
import { AttestedFlatV1JwtPayload, DisclosureV1JwtPayload, JwtType } from '../types/jwt/index.js';
import {
  VeridFlowDefinition,
  VeridSessionInput,
  VeridTokenResult,
  VeridUnknownTokenResult,
} from '../client/base.js';

const DISCLOSURE_SCOPE = 'disclosure';

/**
 * Input for a disclosure session.
 *
 * @public
 */
export type DisclosureSessionInput = VeridSessionInput;

/**
 * The verified result of a disclosure session.
 *
 * @public
 */
export type DisclosureResult =
  | VeridTokenResult<'disclosure_v1', DisclosureV1JwtPayload>
  | VeridTokenResult<'disclosure_flat_v1', AttestedFlatV1JwtPayload>
  | VeridUnknownTokenResult;

/** Disclosure: returns the access token in the format configured on the flow. */
export const disclosureFlow: VeridFlowDefinition<DisclosureSessionInput> = {
  scope: () => DISCLOSURE_SCOPE,
  intent: ({ challenge, brandUuid }) => ({ scope: DISCLOSURE_SCOPE, challenge, brandUuid }),
  sessionExtra: () => ({}),
  assertResponse: assertDisclosureResponse,
  token: (response) => response.access_token,
  formats: new Map([
    [
      JwtType.jwt_ssi_disclosure_v1,
      { format: 'disclosure_v1', assert: assertDisclosureV1JwtPayload },
    ],
    [
      JwtType.jwt_ssi_disclosure_flat_v1,
      { format: 'disclosure_flat_v1', assert: assertAttestedFlatV1JwtPayload },
    ],
  ]),
};
