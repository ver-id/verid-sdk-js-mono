import {
  assert,
  assertArray,
  assertIssuanceFlatV1JwtPayload,
  assertIssuanceResponse,
  assertIssuanceV1JwtPayload,
  assertObject,
} from '../utils/assert.js';
import { InvalidArgumentError } from '../error/index.js';
import { IssuanceFlatV1JwtPayload, IssuanceV1JwtPayload, JwtType } from '../types/jwt/index.js';
import { UUID } from '../types/generic.js';
import {
  VeridFlowDefinition,
  VeridSessionInput,
  VeridTokenResult,
  VeridUnknownTokenResult,
} from '../client/base.js';

const ISSUANCE_SCOPE = 'issuance';

/**
 * Input for an issuance session: what to issue, as exactly one of `data` or `mapping`.
 *
 * @public
 */
export type IssuanceSessionInput = VeridSessionInput & {
  /** How long the issued credentials stay valid, in seconds. Overrides the flow's configured value. */
  expirationDuration?: number;
  /** Per-credential validity in seconds, by credential UUID. Overrides `expirationDuration`. */
  credentialExpirationDurations?: Record<string, number>;
} & (
    | { data: { attributeUuid: string; value: unknown }[]; mapping?: never }
    | { mapping: Record<string, unknown>; data?: never }
  );

/**
 * Issuance-specific fields of a created session.
 *
 * @public
 */
export interface IssuanceSessionExtra {
  /** The issuance run this session belongs to, when the platform allocated one. */
  issuanceRunUuid?: UUID;
}

/**
 * The verified result of an issuance session.
 *
 * @public
 */
export type IssuanceResult =
  | VeridTokenResult<'issuance_v1', IssuanceV1JwtPayload>
  | VeridTokenResult<'issuance_flat_v1', IssuanceFlatV1JwtPayload>
  | VeridUnknownTokenResult;

/** Issuance: always runs from an intent carrying what is being issued. */
export const issuanceFlow: VeridFlowDefinition<IssuanceSessionInput, IssuanceSessionExtra> = {
  scope: () => ISSUANCE_SCOPE,
  intent({
    challenge,
    brandUuid,
    data,
    mapping,
    expirationDuration,
    credentialExpirationDurations,
  }) {
    const hasData = Array.isArray(data) && data.length > 0;
    const hasMapping = mapping !== undefined && Object.keys(mapping).length > 0;
    assert(
      hasData !== hasMapping,
      'Exactly one of data or mapping must be provided in an issuance session.',
      InvalidArgumentError,
    );
    if (data) {
      assertArray(data, 'data', InvalidArgumentError);
    }
    if (mapping) {
      assertObject(mapping, 'mapping', InvalidArgumentError);
    }

    return {
      scope: ISSUANCE_SCOPE,
      challenge,
      brandUuid,
      payload: { mapping: mapping ?? {}, data: data ?? [] },
      expirationDuration,
      credentialExpirationDurations,
    };
  },
  sessionExtra: (intent) => ({ issuanceRunUuid: intent.issuance_run_uuid }),
  assertResponse: assertIssuanceResponse,
  token: (response) => response.access_token,
  formats: new Map([
    [JwtType.jwt_ssi_issuance_v1, { format: 'issuance_v1', assert: assertIssuanceV1JwtPayload }],
    [
      JwtType.jwt_ssi_issuance_flat_v1,
      { format: 'issuance_flat_v1', assert: assertIssuanceFlatV1JwtPayload },
    ],
  ]),
};
