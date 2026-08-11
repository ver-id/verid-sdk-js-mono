/**
 * A generic JSON value type that can represent any valid JSON structure,
 * including nested objects and arrays.
 */
export type JSONValue = string | number | boolean | null | JSONValueObject | JSONValueArray;

/**
 * A JSON object type where keys are strings and values are of type JSONValue or undefined.
 */
export type JSONValueObject = {
  [key in string]?: JSONValue | undefined;
};

/**
 * A JSON array type where each element is of type JSONValue.
 */
export type JSONValueArray = Array<JSONValue>;

/**
 * A type alias for UUID strings.
 */
export type UUID = string;
