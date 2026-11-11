import { assertDisclosureV1JwtPayload, assertOpenIdJwtPayload } from '../src/utils/assert.js';

// A UUIDv7, which the platform may move to; the old checks only accepted versions 1-5.
const UUID_V7 = '01936b2e-8f4a-7c3d-9e2f-1a2b3c4d5e6f';
const UUID = '1a2b3c4d-5e6f-4a7b-8c9d-0e1f2a3b4c5d';

const disclosurePayload = () => ({
  iss: 'urn:ver-id:crypto:key@development:oauth/v1',
  aud: ['urn:ver-id:crypto:key@external:*'],
  exp: 2_000_000_000,
  uuid: UUID,
  parameter: { challenge: UUID },
  meta: {},
  mapping: {},
  disclosureUuid: UUID,
  organizationUuid: UUID,
  credentials: [
    {
      credentialUuid: UUID,
      issuerUuid: UUID,
      trustUuid: UUID,
      handlerUuid: UUID,
      credentialName: 'PID',
      issuerName: 'RvIG',
      trustName: 'PID Scheme NL',
      handlerName: 'OID4VC',
      type: 'sd_jwt',
      attributes: [
        { attributeUuid: UUID, attributeName: 'given_name', value: 'Jane', type: 'sd_jwt' },
      ],
    },
  ],
});

describe('assertDisclosureV1JwtPayload tolerates additive platform changes', () => {
  it('accepts a credential type this SDK does not know', () => {
    const payload = disclosurePayload();
    payload.credentials[0].type = 'eudi_pid';
    payload.credentials[0].attributes[0].type = 'eudi_pid';

    expect(() => assertDisclosureV1JwtPayload(payload, 'token')).not.toThrow();
  });

  it('accepts ids that are not UUIDv1-5', () => {
    const payload = { ...disclosurePayload(), uuid: UUID_V7, disclosureUuid: UUID_V7 };
    payload.credentials[0].credentialUuid = UUID_V7;
    payload.credentials[0].attributes[0].attributeUuid = UUID_V7;

    expect(() => assertDisclosureV1JwtPayload(payload, 'token')).not.toThrow();
  });

  it('accepts an empty name and fields it does not know', () => {
    const payload = { ...disclosurePayload(), addedLater: { anything: true } };
    payload.credentials[0].trustName = '';

    expect(() => assertDisclosureV1JwtPayload(payload, 'token')).not.toThrow();
  });

  it('still rejects a credential without attributes', () => {
    const payload = disclosurePayload();
    delete (payload.credentials[0] as { attributes?: unknown }).attributes;

    expect(() => assertDisclosureV1JwtPayload(payload, 'token')).toThrow('attributes');
  });

  it('still rejects an attribute without a name', () => {
    const payload = disclosurePayload();
    delete (payload.credentials[0].attributes[0] as { attributeName?: unknown }).attributeName;

    expect(() => assertDisclosureV1JwtPayload(payload, 'token')).toThrow('attributeName');
  });

  it('still rejects an id of the wrong type', () => {
    const payload = { ...disclosurePayload(), disclosureUuid: 42 };

    expect(() => assertDisclosureV1JwtPayload(payload, 'token')).toThrow('disclosureUuid');
  });

  it('still rejects a missing challenge', () => {
    const payload = { ...disclosurePayload(), parameter: {} };

    expect(() => assertDisclosureV1JwtPayload(payload, 'token')).toThrow('challenge');
  });
});

describe('assertOpenIdJwtPayload tolerates additive platform changes', () => {
  it('accepts an address with parts missing', () => {
    const payload = { sub: 'subject', address: { formatted: 'Main St 1, Utrecht', country: 'NL' } };

    expect(() => assertOpenIdJwtPayload(payload, 'token')).not.toThrow();
  });

  it('accepts company and NIN types this SDK does not know', () => {
    const payload = {
      sub: 'subject',
      company: { identifier: '123', name: 'Acme', identifier_type: 'BE_KBO', type: 'BE_BV' },
      nin: { identifier: '123', identifier_type: 'BE_RRN' },
    };

    expect(() => assertOpenIdJwtPayload(payload, 'token')).not.toThrow();
  });

  it('still rejects an address part of the wrong type', () => {
    const payload = { sub: 'subject', address: { country: 31 } };

    expect(() => assertOpenIdJwtPayload(payload, 'token')).toThrow('address.country');
  });

  it('still rejects a token without a subject', () => {
    expect(() => assertOpenIdJwtPayload({ name: 'Jane' }, 'token')).toThrow('sub');
  });

  it('accepts the optional claims when they are present and well-formed', () => {
    const payload = {
      sub: 'subject',
      given_name: 'Jane',
      email: 'jane@example.com',
      email_verified: true,
      updated_at: 1_700_000_000,
    };

    expect(() => assertOpenIdJwtPayload(payload, 'token')).not.toThrow();
  });

  it.each([
    ['an empty string claim', { given_name: '' }, 'given_name'],
    ['a string claim of the wrong type', { email: 42 }, 'email'],
    ['a boolean claim of the wrong type', { email_verified: 'yes' }, 'email_verified'],
    ['a number claim of the wrong type', { updated_at: 'today' }, 'updated_at'],
  ])('still rejects %s', (_name, claims, claim) => {
    expect(() => assertOpenIdJwtPayload({ sub: 'subject', ...claims }, 'token')).toThrow(claim);
  });
});
