/**
 * Utility for handling errors consistently across the application
 * Extracts all properties from error objects for detailed debugging
 */
export function formatError(err: unknown): string {
  if (err instanceof Error) {
    // Create an object with all error properties
    const errorObj: Record<string, any> = {
      name: err.name,
      message: err.message,
    };

    // Copy all enumerable properties
    Object.getOwnPropertyNames(err).forEach((key) => {
      if (key !== 'name' && key !== 'message') {
        errorObj[key] = (err as any)[key];
      }
    });

    // Add stack trace if available
    if (err.stack) {
      errorObj.stack = err.stack;
    }

    return JSON.stringify(errorObj, null, 2);
  }

  return String(err);
}
