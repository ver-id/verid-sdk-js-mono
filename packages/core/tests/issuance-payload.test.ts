import { assertIssuanceFlatV1JwtPayload, assertIssuanceV1JwtPayload } from '../src/utils/assert';

// Shaped like the platform's issuance token guards (groot GrootMessagesSSIIssuance*TokenPayloadGuard).
const ids = {
  run: '6f1c2a4e-3b5d-4c7e-9f10-2a3b4c5d6e7f',
  credential: '1a2b3c4d-5e6f-4a7b-8c9d-0e1f2a3b4c5d',
  attribute: '2b3c4d5e-6f7a-4b8c-9d0e-1f2a3b4c5d6e',
  record: '3c4d5e6f-7a8b-4c9d-8e1f-2a3b4c5d6e7f',
  challenge: '4d5e6f7a-8b9c-4d0e-9f2a-3b4c5d6e7f8a',
};

const v1Payload = () => ({
  iss: 'https://ssi.example',
  aud: 'client',
  exp: 2_000_000_000,
  uuid: '5e6f7a8b-9c0d-4e1f-8a3b-4c5d6e7f8a9b',
  parameter: {
    challenge: ids.challenge,
    payload: { data: [{ attributeUuid: ids.attribute, value: 'Jane' }], mapping: {} },
  },
  meta: {},
  credentials: [
    {
      credentialUuid: ids.credential,
      credentialRecordUuid: ids.record,
      issuerUuid: ids.credential,
      trustUuid: ids.credential,
      handlerUuid: ids.credential,
      credentialName: 'PID',
      issuerName: 'RvIG',
      trustName: 'PID Scheme NL',
      handlerName: 'OID4VC',
      type: 'sd_jwt',
      sd_jwt: { vct: 'urn:eu.europa.ec.eudi:pid:1' },
      attributes: [
        {
          attributeUuid: ids.attribute,
          attributeName: 'given_name',
          value: 'Jane',
          type: 'sd_jwt',
        },
      ],
      status: 'ISSUED',
    },
  ],
  issuanceUuid: '6f7a8b9c-0d1e-4f2a-9b4c-5d6e7f8a9b0c',
  organizationUuid: '7a8b9c0d-1e2f-4a3b-8c5d-6e7f8a9b0c1d',
  handlerAppUuid: '8b9c0d1e-2f3a-4b4c-9d6e-7f8a9b0c1d2e',
  appName: 'Wallet',
  issuanceRunUuid: ids.run,
});

const flatPayload = () => ({
  iss: 'https://ssi.example',
  issuanceRunUuid: ids.run,
  output: [
    {
      uuid: '5e6f7a8b-9c0d-4e1f-8a3b-4c5d6e7f8a9b',
      parameter: { challenge: ids.challenge },
      meta: {},
      data: [
        {
          attributeUuid: ids.attribute,
          credentialUuid: ids.credential,
          issuerUuid: ids.credential,
          trustUuid: ids.credential,
          handlerUuid: ids.credential,
          value: 'Jane',
          status: 'ISSUED',
        },
      ],
    },
  ],
});

describe('assertIssuanceV1JwtPayload', () => {
  it('accepts the payload the platform issues', () => {
    expect(() => assertIssuanceV1JwtPayload(v1Payload(), 'token')).not.toThrow();
  });

  it('rejects a payload without issuanceRunUuid', () => {
    const { issuanceRunUuid: _omitted, ...payload } = v1Payload();
    expect(() => assertIssuanceV1JwtPayload(payload, 'token')).toThrow('issuanceRunUuid');
  });
});

describe('assertIssuanceFlatV1JwtPayload', () => {
  it('accepts the payload the platform issues', () => {
    expect(() => assertIssuanceFlatV1JwtPayload(flatPayload(), 'token')).not.toThrow();
  });

  it('rejects a payload without issuanceRunUuid', () => {
    const { issuanceRunUuid: _omitted, ...payload } = flatPayload();
    expect(() => assertIssuanceFlatV1JwtPayload(payload, 'token')).toThrow('issuanceRunUuid');
  });
});
