/**
 * Abstract base class for all Ver.iD SDK errors.
 *
 * Provides a consistent structure with `type` and `type_description` getters,
 * automatic `this.name` assignment, and proper prototype chain restoration
 * for reliable `instanceof` checks.
 *
 * @public
 * @abstract
 */
export abstract class VeridError extends Error {
  /**
   * Machine-readable error type identifier (e.g. `'ERR_INVALID_ARG'`).
   * @protected
   */
  protected abstract readonly _type: string;

  /**
   * Human-readable error type description (e.g. `'Invalid argument.'`).
   * @protected
   */
  protected abstract readonly _type_description: string;

  constructor(message: string) {
    super(message);
    this.name = new.target.name;
    Object.setPrototypeOf(this, new.target.prototype);
  }

  /**
   * Gets the machine-readable error type identifier.
   *
   * @returns The error type string
   */
  get type(): string {
    return this._type;
  }

  /**
   * Gets the human-readable error type description.
   *
   * @returns The error type description string
   */
  get type_description(): string {
    return this._type_description;
  }
}
