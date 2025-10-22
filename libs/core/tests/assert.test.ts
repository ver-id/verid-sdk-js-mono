import {
  assertString,
  assertNumber,
  assertBoolean,
  assertUrlString,
  assertObject,
  assertArray,
  assertJsonValue,
} from '../src/utils/assert';

describe('Assert utilities', () => {
  describe('assertString', () => {
    it('should pass for valid strings', () => {
      expect(() => assertString('test', 'value')).not.toThrow();
      expect(() => assertString('non-empty', 'value')).not.toThrow();
    });

    it('should throw for non-strings', () => {
      expect(() => assertString(123, 'value')).toThrow('Invalid value: not a valid string');
      expect(() => assertString(null, 'value')).toThrow('Invalid value: not a valid string');
      expect(() => assertString(undefined, 'value')).toThrow('Invalid value: not a valid string');
    });

    it('should throw for empty strings by default', () => {
      expect(() => assertString('', 'value')).toThrow('Invalid value: must be a non-empty string');
      expect(() => assertString('   ', 'value')).toThrow(
        'Invalid value: must be a non-empty string',
      );
    });

    it('should allow empty strings when configured', () => {
      expect(() => assertString('', 'value', undefined, { allowEmpty: true })).not.toThrow();
    });
  });

  describe('assertNumber', () => {
    it('should pass for valid positive numbers', () => {
      expect(() => assertNumber(42, 'value')).not.toThrow();
      expect(() => assertNumber(3.14, 'value')).not.toThrow();
    });

    it('should throw for non-numbers', () => {
      expect(() => assertNumber('123', 'value')).toThrow('Invalid value: not a valid number');
      expect(() => assertNumber(null, 'value')).toThrow('Invalid value: not a valid number');
      expect(() => assertNumber(NaN, 'value')).toThrow('Invalid value: not a valid number');
      expect(() => assertNumber(Infinity, 'value')).toThrow('Invalid value: not a valid number');
    });

    it('should throw for negative numbers by default', () => {
      expect(() => assertNumber(-1, 'value')).toThrow(
        'Invalid value: must be a positive non-zero number',
      );
    });

    it('should allow zero when configured', () => {
      expect(() => assertNumber(0, 'value', undefined, { allowZero: true })).not.toThrow();
    });
  });

  describe('assertBoolean', () => {
    it('should pass for valid booleans', () => {
      expect(() => assertBoolean(true, 'value')).not.toThrow();
      expect(() => assertBoolean(false, 'value')).not.toThrow();
    });

    it('should throw for non-booleans', () => {
      expect(() => assertBoolean('true', 'value')).toThrow('Invalid value: not a valid boolean');
      expect(() => assertBoolean(1, 'value')).toThrow('Invalid value: not a valid boolean');
      expect(() => assertBoolean(null, 'value')).toThrow('Invalid value: not a valid boolean');
    });
  });

  describe('assertUrlString', () => {
    it('should pass for valid URLs', () => {
      expect(() => assertUrlString('https://example.com', 'url')).not.toThrow();
      expect(() => assertUrlString('http://localhost:3000', 'url')).not.toThrow();
    });

    it('should throw for invalid URLs', () => {
      expect(() => assertUrlString('not-a-url', 'url')).toThrow('Invalid url: not a valid url');
      expect(() => assertUrlString('', 'url')).toThrow('Invalid url: must be a non-empty string');
      expect(() => assertUrlString(123, 'url')).toThrow('Invalid url: not a valid string');
    });
  });

  describe('assertObject', () => {
    it('should pass for valid objects', () => {
      expect(() => assertObject({}, 'obj')).not.toThrow();
      expect(() => assertObject({ key: 'value' }, 'obj')).not.toThrow();
    });

    it('should throw for non-objects', () => {
      expect(() => assertObject(null, 'obj')).toThrow('Invalid obj: not a valid object');
      expect(() => assertObject('string', 'obj')).toThrow('Invalid obj: not a valid object');
      expect(() => assertObject(123, 'obj')).toThrow('Invalid obj: not a valid object');
    });
  });

  describe('assertArray', () => {
    it('should pass for valid arrays', () => {
      expect(() => assertArray([], 'arr')).not.toThrow();
      expect(() => assertArray([1, 2, 3], 'arr')).not.toThrow();
    });

    it('should throw for non-arrays', () => {
      expect(() => assertArray({}, 'arr')).toThrow('Invalid arr: not a valid array');
      expect(() => assertArray('string', 'arr')).toThrow('Invalid arr: not a valid array');
      expect(() => assertArray(null, 'arr')).toThrow('Invalid arr: not a valid array');
    });
  });

  describe('assertJsonValue', () => {
    it('should pass for valid JSON values', () => {
      expect(() => assertJsonValue('string', 'value')).not.toThrow();
      expect(() => assertJsonValue(123, 'value')).not.toThrow();
      expect(() => assertJsonValue(true, 'value')).not.toThrow();
      expect(() => assertJsonValue(null, 'value')).not.toThrow();
      expect(() => assertJsonValue({}, 'value')).not.toThrow();
      expect(() => assertJsonValue([], 'value')).not.toThrow();
      expect(() => assertJsonValue(new Date(), 'value')).not.toThrow();
    });

    it('should throw for invalid JSON values', () => {
      expect(() => assertJsonValue(undefined, 'value')).toThrow(
        'Invalid value: not a valid JSON value',
      );
      expect(() => assertJsonValue(Symbol('test'), 'value')).toThrow(
        'Invalid value: not a valid JSON value',
      );
    });

    it('should validate nested objects', () => {
      const validObject = {
        name: 'test',
        age: 25,
        active: true,
        metadata: null,
        tags: ['tag1', 'tag2'],
      };
      expect(() => assertJsonValue(validObject, 'value')).not.toThrow();
    });
  });
});
