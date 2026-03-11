import { JWTPayload } from 'jose';
import { InvalidAssertionError } from '../error/index.js';
import { ICacheManager } from '../interface/ICacheManager.js';
import { JSONValue, UUID } from '../types/generic.js';
import {
  AttestedFlatV1JwtPayload,
  AuthenticationResponse,
  DisclosureV1JwtPayload,
  DisclosureResponse,
  IssuanceFlatV1JwtPayload,
  IssuanceV1JwtPayload,
  IssuanceResponse,
  OpenIdJwtCompanyIdentifierType,
  OpenIdJwtCompanyType,
  OpenIdJwtNINIdentifierType,
  OpenIdJwtPayload,
  OutputCredentialType,
  SignatureV1JwtPayload,
} from '../types/index.js';
import { convertEnumToValues } from './generic.js';

/**
 * Regular expression pattern for validating UUID strings (versions 1-5).
 * Matches the standard UUID format: 8-4-4-4-12 hexadecimal digits.
 * @constant
 */
const UUID_REGEX =
  /^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-[1-5]{1}[0-9A-Fa-f]{3}-[ABab89]{1}[0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$/;

/**
 * Type definition for error constructor functions.
 * Used to create custom error instances in assertion functions.
 * @public
 */
type ErrorConstructorType = new (message: string) => Error;

/**
 * Base assertion function that validates a condition and throws an error if it fails.
 *
 * @param assertion - The condition to test. If falsy, an error will be thrown
 * @param message - The error message to display when the assertion fails
 * @param ctor - Optional custom error constructor. Defaults to InvalidAssertionError
 * @throws {InvalidAssertionError} When assertion fails and no custom error constructor is provided
 * @throws {Error} Custom error type when assertion fails and a custom constructor is provided
 * @example
 * ```typescript
 * assert(value > 0, 'Value must be positive');
 * assert(typeof obj === 'object', 'Must be an object', TypeError);
 * ```
 */
export function assert(
  assertion: unknown,
  message: string,
  ctor?: ErrorConstructorType,
): asserts assertion {
  // Test assertion
  if (!assertion) {
    // Throw statement
    if (ctor) {
      assert(ctor?.prototype instanceof Error, 'Invalid ctor argument: not a valid Error.');

      // Throw the error
      throw new ctor(message);
    } else {
      throw new InvalidAssertionError(message);
    }
  }
}

/**
 * Asserts that the given value is a valid JSON value.
 * Recursively validates arrays and objects to ensure all nested values are valid JSON types.
 *
 * @param value - The value to validate as a JSON-compatible type
 * @param name - The name of the value for error reporting
 * @param error - Optional custom error constructor to use when assertion fails
 * @throws {InvalidAssertionError} When value is not a valid JSON type (by default)
 * @throws {Error} Custom error type when specified and value is not a valid JSON type
 */
export function assertJsonValue(
  value: unknown,
  name: string,
  error?: ErrorConstructorType,
): asserts value is JSONValue {
  assert(
    typeof value === 'string' ||
      typeof value === 'number' ||
      typeof value === 'boolean' ||
      typeof value === 'object' ||
      Array.isArray(value) ||
      value instanceof Date ||
      value === null,
    `Invalid ${name}: not a valid JSON value`,
    error,
  );

  if (Array.isArray(value)) {
    value.map((item, index) => assertJsonValue(item, `"item" at ${index} in ${name}`, error));
  }

  if (typeof value === 'object' && value !== null && !(value instanceof Date)) {
    Object.entries(value).map(([key, val]) => {
      assertString(key, `"key" in ${name}`, error);
      assertJsonValue(val, `"value" for key "${key}" in ${name}`, error);
    });
  }
}

/**
 * Asserts that the given value is a valid URL string.
 * Uses the URL constructor to validate the URL format.
 *
 * @param url - The value to validate as a URL
 * @param name - The name of the value for error reporting
 * @param error - Optional custom error constructor to use when assertion fails
 * @throws {InvalidAssertionError} When url is not a valid URL string (by default)
 * @throws {Error} Custom error type when specified and url is not valid
 */
export function assertUrlString(
  url: unknown,
  name: string,
  error?: ErrorConstructorType,
): asserts url is string {
  const ctor = error ?? InvalidAssertionError;
  assertString(url, name, ctor);
  try {
    new URL(url);
  } catch {
    throw new ctor(`Invalid ${name}: not a valid url.`);
  }
}

/**
 * Asserts that the given value is a valid object (non-null object type).
 *
 * @param value - The value to validate as an object
 * @param name - The name of the value for error reporting
 * @param error - Optional custom error constructor to use when assertion fails
 * @throws {InvalidAssertionError} When value is not an object or is null (by default)
 * @throws {Error} Custom error type when specified and value is not an object
 */
export function assertObject(
  value: unknown,
  name: string,
  error?: ErrorConstructorType,
): asserts value is Record<string, unknown> {
  assert(typeof value === 'object' && value !== null, `Invalid ${name}: not a valid object`, error);
}

/**
 * Asserts that the given value is a valid string.
 * By default, requires non-empty strings (after trimming whitespace).
 *
 * @param value - The value to validate as a string
 * @param name - The name of the value for error reporting
 * @param error - Optional custom error constructor to use when assertion fails
 * @param options - Optional configuration object
 * @param options.allowEmpty - If true, allows empty strings. Defaults to false
 * @throws {InvalidAssertionError} When value is not a string or is empty when not allowed (by default)
 * @throws {Error} Custom error type when specified and value is not valid
 */
export function assertString(
  value: unknown,
  name: string,
  error?: ErrorConstructorType,
  options?: {
    allowEmpty?: boolean;
    allowUndefined?: boolean;
  },
): asserts value is string {
  const allowEmpty = options?.allowEmpty ?? false;
  const allowUndefined = options?.allowUndefined ?? false;

  if (typeof value === 'undefined') {
    assert(allowUndefined, `Invalid ${name}: not a valid string`, error);
    return;
  }

  assert(typeof value === 'string', `Invalid ${name}: not a valid string`, error);
  assert(allowEmpty || value.trim() !== '', `Invalid ${name}: must be a non-empty string.`, error);
}

/**
 * Asserts that the given value is a valid finite number.
 * By default, requires positive non-zero numbers.
 *
 * @param value - The value to validate as a number
 * @param name - The name of the value for error reporting
 * @param error - Optional custom error constructor to use when assertion fails
 * @param options - Optional configuration object
 * @param options.allowZero - If true, allows zero as a valid value. Defaults to false
 * @throws {InvalidAssertionError} When value is not a finite number or is negative/zero when not allowed (by default)
 * @throws {Error} Custom error type when specified and value is not valid
 */
export function assertNumber(
  value: unknown,
  name: string,
  error?: ErrorConstructorType,
  options?: {
    allowZero?: boolean;
  },
): asserts value is number {
  const allowZero = options?.allowZero ?? false;
  const ctor = error ?? InvalidAssertionError;

  assert(
    typeof value === 'number' && Number.isFinite(value),
    `Invalid ${name}: not a valid number`,
    error,
  );

  if (value > 0) return;

  if (allowZero) {
    if (value !== 0) {
      throw new ctor(`Invalid ${name}: must be a non-negative number`);
    }
    return;
  }

  throw new ctor(`Invalid ${name}: must be a positive non-zero number`);
}

/**
 * Asserts that the given value is a valid boolean.
 *
 * @param value - The value to validate as a boolean
 * @param name - The name of the value for error reporting
 * @param error - Optional custom error constructor to use when assertion fails
 * @throws {InvalidAssertionError} When value is not a boolean (by default)
 * @throws {Error} Custom error type when specified and value is not a boolean
 */
export function assertBoolean(
  value: unknown,
  name: string,
  error?: ErrorConstructorType,
): asserts value is boolean {
  assert(typeof value === 'boolean', `Invalid ${name}: not a valid boolean`, error);
}

/**
 * Asserts that the given value is a valid function.
 *
 * @param value - The value to validate as a function
 * @param name - The name of the value for error reporting
 * @param error - Optional custom error constructor to use when assertion fails
 * @throws {InvalidAssertionError} When value is not a function (by default)
 * @throws {Error} Custom error type when specified and value is not a function
 */
export function assertFunction(
  value: unknown,
  name: string,
  error?: ErrorConstructorType,
): asserts value is (...args: unknown[]) => unknown {
  assert(typeof value === 'function', `Invalid ${name}: not a valid function`, error);
}

/**
 * Asserts that the given value is a valid array.
 *
 * @param value - The value to validate as an array
 * @param name - The name of the value for error reporting
 * @param error - Optional custom error constructor to use when assertion fails
 * @throws {InvalidAssertionError} When value is not an array (by default)
 * @throws {Error} Custom error type when specified and value is not an array
 */
export function assertArray(
  value: unknown,
  name: string,
  error?: ErrorConstructorType,
): asserts value is Array<unknown> {
  assert(Array.isArray(value), `Invalid ${name}: not a valid array`, error);
}

/**
 * Asserts that the given value is a valid Date object.
 * Validates that the date is not "Invalid Date".
 *
 * @param value - The value to validate as a Date
 * @param name - The name of the value for error reporting
 * @param error - Optional custom error constructor to use when assertion fails
 * @throws {InvalidAssertionError} When value is not a valid Date object (by default)
 * @throws {Error} Custom error type when specified and value is not a valid Date
 */
export function assertDate(
  value: unknown,
  name: string,
  error?: ErrorConstructorType,
): asserts value is Date {
  assert(
    value instanceof Date && !isNaN(value.getTime()),
    `Invalid ${name}: not a valid date`,
    error,
  );
}

/**
 * Asserts that the given value is a valid UUID string (versions 1-5).
 * Validates the UUID format using a regular expression.
 *
 * @param value - The value to validate as a UUID
 * @param name - The name of the value for error reporting
 * @param error - Optional custom error constructor to use when assertion fails
 * @throws {InvalidAssertionError} When value is not a valid UUID string (by default)
 * @throws {Error} Custom error type when specified and value is not a valid UUID
 */
export function assertUUID(
  value: unknown,
  name: string,
  error?: ErrorConstructorType,
): asserts value is UUID {
  assertString(value, name, error);
  assert(UUID_REGEX.test(value), `Invalid ${name}: not a valid UUID`, error);
}

/**
 * Asserts that the given value is a valid cache manager implementing ICacheManager interface.
 * Validates that the object has required methods: save, get, and remove.
 *
 * @param value - The value to validate as a cache manager
 * @param name - The name of the value for error reporting
 * @param error - Optional custom error constructor to use when assertion fails
 * @throws {InvalidAssertionError} When value doesn't implement ICacheManager interface (by default)
 * @throws {Error} Custom error type when specified and value is not a valid cache manager
 */
export function assertCacheManager(
  value: unknown,
  name: string,
  error?: ErrorConstructorType,
): asserts value is ICacheManager {
  const ctor = error ?? InvalidAssertionError;

  assertObject(value, name, ctor);
  const requiredMethods = ['save', 'get', 'remove'];
  for (const m of requiredMethods) {
    assertFunction(value[m], `"${m}" in ${name}`, ctor);
  }
}

/**
 * Asserts that the given value is a valid DisclosureResponse.
 * Validates all required properties: access_token, expires_in, scope, and token_type.
 *
 * @param response - The value to validate as a DisclosureResponse
 * @param name - The name of the value for error reporting
 * @param error - Optional custom error constructor to use when assertion fails
 * @throws {InvalidAssertionError} When response is not a valid DisclosureResponse (by default)
 * @throws {Error} Custom error type when specified and response is not valid
 */
export function assertDisclosureResponse(
  response: unknown,
  name: string,
  error?: ErrorConstructorType,
): asserts response is DisclosureResponse {
  const ctor = error ?? InvalidAssertionError;

  assertObject(response, name, ctor);
  assertString(response.access_token, `access_token in ${name}`, ctor);
  assertNumber(response.expires_in, `expires_in in ${name}`, ctor);
  assertString(response.scope, `scope in ${name}`, ctor);
  assertString(response.token_type, `token_type in ${name}`, ctor);
}

/**
 * Asserts that the given value is a valid IssuanceResponse.
 * Validates all required properties: access_token, expires_in, scope, and token_type.
 *
 * @param response - The value to validate as a IssuanceResponse
 * @param name - The name of the value for error reporting
 * @param error - Optional custom error constructor to use when assertion fails
 * @throws {InvalidAssertionError} When response is not a valid IssuanceResponse (by default)
 * @throws {Error} Custom error type when specified and response is not valid
 */
export function assertIssuanceResponse(
  response: unknown,
  name: string,
  error?: ErrorConstructorType,
): asserts response is IssuanceResponse {
  const ctor = error ?? InvalidAssertionError;

  assertObject(response, name, ctor);
  assertString(response.access_token, `access_token in ${name}`, ctor);
  assertNumber(response.expires_in, `expires_in in ${name}`, ctor);
  assertString(response.scope, `scope in ${name}`, ctor);
  assertString(response.token_type, `token_type in ${name}`, ctor);
}

/**
 * Asserts that the given value is a valid AuthenticationResponse.
 * Validates required properties: access_token, id_token, expires_in, and token_type.
 *
 * @param response - The value to validate as an AuthenticationResponse
 * @param name - The name of the value for error reporting
 * @param error - Optional custom error constructor to use when assertion fails
 * @throws {InvalidAssertionError} When response is not a valid AuthenticationResponse (by default)
 * @throws {Error} Custom error type when specified and response is not valid
 */
export function assertAuthenticationResponse(
  response: unknown,
  name: string,
  error?: ErrorConstructorType,
): asserts response is AuthenticationResponse {
  const ctor = error ?? InvalidAssertionError;

  assertObject(response, name, ctor);
  assertString(response.access_token, `access_token in ${name}`, ctor);
  assertString(response.id_token, `id_token in ${name}`, ctor);
  assertNumber(response.expires_in, `expires_in in ${name}`, ctor);
  assertString(response.token_type, `token_type in ${name}`, ctor);
}

/**
 * Asserts that the given value is a valid JWT payload.
 * Validates standard JWT claims including iss, sub, aud, exp, and iat when present.
 *
 * @param value - The value to validate as a JWT payload
 * @param name - The name of the value for error reporting
 * @param error - Optional custom error constructor to use when assertion fails
 * @throws {InvalidAssertionError} When value is not a valid JWTPayload (by default)
 * @throws {Error} Custom error type when specified and value is not valid
 */
export function assertJwtPayload(
  value: unknown,
  name: string,
  error?: ErrorConstructorType,
): asserts value is JWTPayload {
  const ctor = error ?? InvalidAssertionError;

  assertObject(value, name, ctor);

  // Check JWTPayload properties
  if (typeof value.iss !== 'undefined') {
    assertString(value.iss, `"iss" in ${name}`, ctor);
  }
  if (typeof value.sub !== 'undefined') {
    assertString(value.sub, `"sub" in ${name}`, ctor);
  }
  if (typeof value.aud !== 'undefined') {
    if (typeof value.aud === 'string') {
      assertString(value.aud, `"aud" in ${name}`, ctor);
    } else if (Array.isArray(value.aud)) {
      assertArray(value.aud, `"aud" in ${name}`, ctor);
    } else {
      throw new ctor(`Invalid "aud" in ${name}: must be a string or an array.`);
    }
  }
  if (typeof value.exp !== 'undefined') {
    assertNumber(value.exp, `"exp" in ${name}`, ctor);
  }
  if (typeof value.iat !== 'undefined') {
    assertNumber(value.iat, `"iat" in ${name}`, ctor);
  }
}

/**
 * Asserts that the given data array contains valid output data items.
 * Validates each data item has required UUID properties and a valid JSON value.
 * This is a common helper used by both assertAttestedFlatV1JwtPayload and assertIssuanceFlatV1JwtPayload.
 *
 * @param data - The data array to validate
 * @param outputIndex - The index of the parent output item for error reporting
 * @param name - The name of the parent payload for error reporting
 * @param ctor - The error constructor to use when assertion fails
 * @internal
 */
function assertOutputDataItems(
  data: unknown[],
  outputIndex: number,
  name: string,
  ctor: ErrorConstructorType,
): void {
  for (const [dataIndex, dataItem] of data.entries()) {
    assertObject(
      dataItem,
      `"dataItem" at index ${dataIndex} in "OutputItem.data" ${outputIndex} in ${name}`,
      ctor,
    );

    for (const prop of [
      'attributeUuid',
      'credentialUuid',
      'issuerUuid',
      'schemeUuid',
      'providerUuid',
    ]) {
      assertUUID(
        dataItem[prop],
        `"dataItem.${prop}" at index ${dataIndex} in "OutputItem.data" ${outputIndex} in ${name}`,
        ctor,
      );
    }

    assertJsonValue(
      dataItem.value,
      `"dataItem.value" at index ${dataIndex} in "OutputItem.data" ${outputIndex} in ${name}`,
      ctor,
    );
  }
}

/**
 * Asserts that the given value is a valid AttestedFlatV1JwtPayload.
 * Validates JWT payload with output array containing disclosure/signature data.
 * Recursively validates all nested OutputItem and OutputData structures.
 *
 * @param value - The value to validate as an AttestedFlatV1JwtPayload
 * @param name - The name of the value for error reporting
 * @param error - Optional custom error constructor to use when assertion fails
 * @throws {InvalidAssertionError} When value is not a valid AttestedFlatV1JwtPayload (by default)
 * @throws {Error} Custom error type when specified and value is not valid
 */
export function assertAttestedFlatV1JwtPayload(
  value: unknown,
  name: string,
  error?: ErrorConstructorType,
): asserts value is AttestedFlatV1JwtPayload {
  const ctor = error ?? InvalidAssertionError;

  assertJwtPayload(value, name, ctor);

  // Check output property
  assert('output' in value, `Invalid "output" in ${name}: should be defined.`, ctor);
  assertArray(value.output, `"output" in ${name}`, ctor);

  // Validate each OutputItem
  for (const [index, item] of value.output.entries()) {
    assertObject(item, `OutputItem at index ${index} in ${name}`, ctor);
    // Validate uuid
    assertString(item.uuid, `OutputItem.uuid at index ${index} in ${name}`, ctor);
    // Validate type
    assert(
      item.type === 'disclosure' || item.type === 'signature',
      `Invalid "OutputItem.type" at index ${index} in ${name}: must be 'disclosure' or 'signature'`,
      ctor,
    );
    // Validate parameter
    assertObject(item.parameter, `"OutputItem.parameter" at index ${index} in ${name}`, ctor);
    assertString(
      (item.parameter as any).challenge,
      `"OutputItem.parameter.challenge" at index ${index} in ${name}`,
      ctor,
    );

    // Validate meta
    assertObject(item.meta, `"OutputItem.meta" at index ${index} in ${name}`, ctor);

    // Validate data
    assertArray(item.data, `"OutputItem.data" at index ${index} in ${name}`, ctor);

    // Validate each data item using common helper
    assertOutputDataItems(item.data as unknown[], index, name, ctor);

    // Validate mapping
    assertObject(item.mapping, `"OutputItem.mapping" at index ${index} in ${name}`, ctor);
  }
}

/**
 * Asserts that the given value is a valid IssuanceFlatV1JwtPayload (legacy flat format).
 * Validates JWT payload with output array containing issuance data.
 *
 * @param value - The value to validate as an IssuanceFlatV1JwtPayload
 * @param name - The name of the value for error reporting
 * @param error - Optional custom error constructor to use when assertion fails
 * @deprecated Use assertIssuanceV1JwtPayload for v1 credential-grouped tokens
 */
export function assertIssuanceFlatV1JwtPayload(
  value: unknown,
  name: string,
  error?: ErrorConstructorType,
): asserts value is IssuanceFlatV1JwtPayload {
  const ctor = error ?? InvalidAssertionError;

  assertJwtPayload(value, name, ctor);

  // Check output property
  assert('output' in value, `Invalid "output" in ${name}: should be defined.`, ctor);
  assertArray(value.output, `"output" in ${name}`, ctor);

  // Validate each IssuanceOutputItem
  for (const [index, item] of value.output.entries()) {
    assertObject(item, `OutputItem at index ${index} in ${name}`, ctor);
    // Validate uuid
    assertString(item.uuid, `OutputItem.uuid at index ${index} in ${name}`, ctor);

    // Validate parameter
    assertObject(item.parameter, `"OutputItem.parameter" at index ${index} in ${name}`, ctor);
    assertString(
      (item.parameter as any).challenge,
      `"OutputItem.parameter.challenge" at index ${index} in ${name}`,
      ctor,
    );

    // Validate meta
    assertObject(item.meta, `"OutputItem.meta" at index ${index} in ${name}`, ctor);

    // Validate data
    assertArray(item.data, `"OutputItem.data" at index ${index} in ${name}`, ctor);

    // Validate each data item using common helper
    assertOutputDataItems(item.data as unknown[], index, name, ctor);

    // Validate mapping
    assertObject(item.mapping, `"OutputItem.mapping" at index ${index} in ${name}`, ctor);
  }
}

/**
 * Asserts that the given value is a valid OpenIdJwtPayload.
 * Validates OpenID Connect standard claims including profile, address, company, and NIN information.
 * All claims except 'sub' are optional but validated when present.
 *
 * @param value - The value to validate as an OpenIdJwtPayload
 * @param name - The name of the value for error reporting
 * @param error - Optional custom error constructor to use when assertion fails
 * @throws {InvalidAssertionError} When value is not a valid OpenIdJwtPayload (by default)
 * @throws {Error} Custom error type when specified and value is not valid
 */
export function assertOpenIdJwtPayload(
  value: unknown,
  name: string,
  error?: ErrorConstructorType,
): asserts value is OpenIdJwtPayload {
  const ctor = error ?? InvalidAssertionError;

  assertJwtPayload(value, name, ctor);

  // Required property
  assertString(value.sub, `sub in ${name}`, ctor);

  // Optional string properties
  if (typeof value.name !== 'undefined') assertString(value.name, `name in ${name}`, ctor);
  if (typeof value.given_name !== 'undefined')
    assertString(value.given_name, `given_name in ${name}`, ctor);
  if (typeof value.middle_name !== 'undefined')
    assertString(value.middle_name, `middle_name in ${name}`, ctor);
  if (typeof value.family_name !== 'undefined')
    assertString(value.family_name, `family_name in ${name}`, ctor);
  if (typeof value.birthdate !== 'undefined')
    assertString(value.birthdate, `birthdate in ${name}`, ctor);
  if (typeof value.birth_country !== 'undefined')
    assertString(value.birth_country, `birth_country in ${name}`, ctor);
  if (typeof value.nonce !== 'undefined') assertString(value.nonce, `nonce in ${name}`, ctor);
  if (typeof value.email !== 'undefined') assertString(value.email, `email in ${name}`, ctor);
  if (typeof value.phone_number !== 'undefined')
    assertString(value.phone_number, `phone_number in ${name}`, ctor);

  // Optional boolean properties
  if (typeof value.email_verified !== 'undefined')
    assertBoolean(value.email_verified, `email_verified in ${name}`, ctor);
  if (typeof value.phone_number_verified !== 'undefined')
    assertBoolean(value.phone_number_verified, `phone_number_verified in ${name}`, ctor);

  // Optional number properties
  if (typeof value.updated_at !== 'undefined')
    assertNumber(value.updated_at, `updated_at in ${name}`, ctor);

  // Address object
  if (typeof value.address !== 'undefined') {
    assertObject(value.address, `address in ${name}`, ctor);
    assertString(value.address.formatted, `address.formatted in ${name}`, ctor);
    assertString(value.address.street_address, `address.street_address in ${name}`, ctor);
    assertString(value.address.postal_code, `address.postal_code in ${name}`, ctor);
    assertString(value.address.house_number, `address.house_number in ${name}`, ctor);
    assertString(value.address.street, `address.street in ${name}`, ctor);
    assertString(value.address.locality, `address.locality in ${name}`, ctor);
    assertString(value.address.region, `address.region in ${name}`, ctor);
    assertString(value.address.country, `address.country in ${name}`, ctor);
  }

  // Company object
  if (typeof value.company !== 'undefined') {
    assertObject(value.company, `company in ${name}`, ctor);
    assertString(value.company.identifier, `company.identifier in ${name}`, ctor);
    assertString(value.company.name, `company.name in ${name}`, ctor);
    assert(
      convertEnumToValues(OpenIdJwtCompanyIdentifierType).includes(value.company.identifier_type),
      `Invalid company.identifier_type in ${name}: not a valid OpenIdJwtCompanyIdentifierType`,
      ctor,
    );
    assert(
      convertEnumToValues(OpenIdJwtCompanyType).includes(value.company.type),
      `Invalid company.type in ${name}: not a valid OpenIdJwtCompanyType`,
      ctor,
    );
  }

  // NIN object
  if (typeof value.nin !== 'undefined') {
    assertObject(value.nin, `nin in ${name}`, ctor);
    assertString(value.nin.identifier, `nin.identifier in ${name}`, ctor);
    assert(
      convertEnumToValues(OpenIdJwtNINIdentifierType).includes(value.nin.identifier_type),
      `Invalid nin.identifier_type in ${name}: not a valid OpenIdJwtNinIdentifierType`,
      ctor,
    );
  }
}

/**
 * Asserts that the given credentials array contains valid credential-grouped items.
 * Validates each credential has required UUID, name, type, and attribute properties.
 * Used by assertDisclosureV1JwtPayload, assertSignatureV1JwtPayload, and assertIssuanceV1JwtPayload.
 *
 * @param credentials - The credentials array to validate
 * @param name - The name of the parent payload for error reporting
 * @param ctor - The error constructor to use when assertion fails
 * @internal
 */
function assertCredentials(
  credentials: unknown[],
  name: string,
  ctor: ErrorConstructorType,
): void {
  for (const [index, cred] of credentials.entries()) {
    assertObject(cred, `credential at index ${index} in ${name}`, ctor);

    const c = cred as Record<string, unknown>;

    // UUID fields
    for (const prop of ['credentialUuid', 'issuerUuid', 'schemeUuid', 'providerUuid']) {
      assertUUID(c[prop], `"${prop}" in credential at index ${index} in ${name}`, ctor);
    }

    // Name fields
    for (const prop of ['credentialName', 'issuerName', 'schemeName', 'providerName']) {
      assertString(c[prop], `"${prop}" in credential at index ${index} in ${name}`, ctor);
    }

    // Type
    assert(
      convertEnumToValues(OutputCredentialType).includes(c.type as string),
      `Invalid "type" in credential at index ${index} in ${name}: not a valid OutputCredentialType`,
      ctor,
    );

    // Attributes
    assertArray(c.attributes, `"attributes" in credential at index ${index} in ${name}`, ctor);
    for (const [attrIndex, attr] of (c.attributes as unknown[]).entries()) {
      assertObject(attr, `attribute at index ${attrIndex} in credential ${index} in ${name}`, ctor);
      const a = attr as Record<string, unknown>;
      assertUUID(a.attributeUuid, `"attributeUuid" in attribute ${attrIndex} in credential ${index} in ${name}`, ctor);
      assertString(a.attributeName, `"attributeName" in attribute ${attrIndex} in credential ${index} in ${name}`, ctor);
      assertJsonValue(a.value, `"value" in attribute ${attrIndex} in credential ${index} in ${name}`, ctor);
      assert(
        convertEnumToValues(OutputCredentialType).includes(a.type as string),
        `Invalid "type" in attribute ${attrIndex} in credential ${index} in ${name}: not a valid OutputCredentialType`,
        ctor,
      );
    }
  }
}

/**
 * Asserts that the given value is a valid DisclosureV1JwtPayload (v2 credential-grouped format).
 * Validates JWT payload with credentials array, flow context, and metadata.
 *
 * @param value - The value to validate as a DisclosureV1JwtPayload
 * @param name - The name of the value for error reporting
 * @param error - Optional custom error constructor to use when assertion fails
 * @throws {InvalidAssertionError} When value is not a valid DisclosureV1JwtPayload (by default)
 */
export function assertDisclosureV1JwtPayload(
  value: unknown,
  name: string,
  error?: ErrorConstructorType,
): asserts value is DisclosureV1JwtPayload {
  const ctor = error ?? InvalidAssertionError;

  assertJwtPayload(value, name, ctor);

  assertUUID(value.uuid, `"uuid" in ${name}`, ctor);
  assertObject(value.parameter, `"parameter" in ${name}`, ctor);
  assertString((value.parameter as any).challenge, `"parameter.challenge" in ${name}`, ctor);
  assertObject(value.meta, `"meta" in ${name}`, ctor);
  assertObject(value.mapping, `"mapping" in ${name}`, ctor);
  assertUUID(value.disclosureUuid, `"disclosureUuid" in ${name}`, ctor);
  assertUUID(value.organizationUuid, `"organizationUuid" in ${name}`, ctor);

  assertArray(value.credentials, `"credentials" in ${name}`, ctor);
  assertCredentials(value.credentials as unknown[], name, ctor);
}

/**
 * Asserts that the given value is a valid SignatureV1JwtPayload (v2 credential-grouped format).
 * Validates JWT payload with credentials array, flow context, and metadata.
 *
 * @param value - The value to validate as a SignatureV1JwtPayload
 * @param name - The name of the value for error reporting
 * @param error - Optional custom error constructor to use when assertion fails
 * @throws {InvalidAssertionError} When value is not a valid SignatureV1JwtPayload (by default)
 */
export function assertSignatureV1JwtPayload(
  value: unknown,
  name: string,
  error?: ErrorConstructorType,
): asserts value is SignatureV1JwtPayload {
  const ctor = error ?? InvalidAssertionError;

  assertJwtPayload(value, name, ctor);

  assertUUID(value.uuid, `"uuid" in ${name}`, ctor);
  assertObject(value.parameter, `"parameter" in ${name}`, ctor);
  assertString((value.parameter as any).challenge, `"parameter.challenge" in ${name}`, ctor);
  assertObject(value.meta, `"meta" in ${name}`, ctor);
  assertObject(value.mapping, `"mapping" in ${name}`, ctor);
  assertUUID(value.signatureUuid, `"signatureUuid" in ${name}`, ctor);
  assertUUID(value.organizationUuid, `"organizationUuid" in ${name}`, ctor);

  assertArray(value.credentials, `"credentials" in ${name}`, ctor);
  assertCredentials(value.credentials as unknown[], name, ctor);
}

/**
 * Asserts that the given value is a valid IssuanceV1JwtPayload (v2 credential-grouped format).
 * Validates JWT payload with credentials array (including status), flow context, and echoed input payload.
 *
 * @param value - The value to validate as an IssuanceV1JwtPayload
 * @param name - The name of the value for error reporting
 * @param error - Optional custom error constructor to use when assertion fails
 * @throws {InvalidAssertionError} When value is not a valid IssuanceV1JwtPayload (by default)
 */
export function assertIssuanceV1JwtPayload(
  value: unknown,
  name: string,
  error?: ErrorConstructorType,
): asserts value is IssuanceV1JwtPayload {
  const ctor = error ?? InvalidAssertionError;

  assertJwtPayload(value, name, ctor);

  assertString(value.uuid, `"uuid" in ${name}`, ctor);
  assertObject(value.parameter, `"parameter" in ${name}`, ctor);
  assertString((value.parameter as any).challenge, `"parameter.challenge" in ${name}`, ctor);
  assertObject((value.parameter as any).payload, `"parameter.payload" in ${name}`, ctor);
  assertObject(value.meta, `"meta" in ${name}`, ctor);
  assertObject(value.mapping, `"mapping" in ${name}`, ctor);
  assertString(value.issuanceUuid, `"issuanceUuid" in ${name}`, ctor);
  assertString(value.organizationUuid, `"organizationUuid" in ${name}`, ctor);

  assertArray(value.credentials, `"credentials" in ${name}`, ctor);
  assertCredentials(value.credentials as unknown[], name, ctor);

  // Validate issuance-specific status on each credential
  for (const [index, cred] of (value.credentials as unknown[]).entries()) {
    assertString(
      (cred as Record<string, unknown>).status,
      `"status" in credential at index ${index} in ${name}`,
      ctor,
    );
  }
}
