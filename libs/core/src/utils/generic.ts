/**
 * Converts an enum type to an array of its values.
 *
 * @param keyvalues - The enum object containing key-value pairs
 * @returns An array of enum values
 * @example
 * ```typescript
 * enum MyEnum { A = 'a', B = 'b' }
 * const values = convertEnumToValues(MyEnum); // ['a', 'b']
 * ```
 */
export function convertEnumToValues(keyvalues: Record<string, unknown>): unknown[] {
  return Object.values(keyvalues);
}

/**
 * Converts an enum type to an array of its keys.
 *
 * @param keyvalues - The enum object containing key-value pairs
 * @returns An array of enum keys
 * @example
 * ```typescript
 * enum MyEnum { A = 'a', B = 'b' }
 * const keys = convertEnumToKeys(MyEnum); // ['A', 'B']
 * ```
 */
export function convertEnumToKeys(keyvalues: Record<string, unknown>): unknown[] {
  return Object.keys(keyvalues);
}
