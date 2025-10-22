import { ErrorLink } from '@apollo/client/link/error';
import { CombinedGraphQLErrors } from '@apollo/client/errors';
import { Observable } from '@apollo/client';
import { OperationFailedError, UnknownError } from '@verid-sdk-js-mono/core';

/**
 * Error link for handling and transforming GraphQL and network errors.
 * Converts Apollo Client errors into custom error types for consistent error handling.
 */
export const errorLink = new ErrorLink(({ error, operation }) => {
  // Transform the error into custom error types
  let customError: Error;

  if (CombinedGraphQLErrors.is(error)) {
    // Extract error details from GraphQL errors
    const errorMessage = error.errors.map((err) => err.message).join('; ');

    // Collect all error codes from all errors
    const errorCodes = error.errors
      .map((err) => err.extensions?.code as string | undefined)
      .filter((code): code is string => code !== undefined);

    const errorCode = errorCodes.length > 0 ? `[${errorCodes.join(', ')}]` : undefined;

    customError = new OperationFailedError(
      `GraphQL operation "${operation.operationName}" failed`,
      errorMessage,
      errorCode,
    );
  } else {
    // Handle unknown errors
    customError = new UnknownError(
      `Unknown error in "${operation.operationName}": ${error.message}`,
    );
  }

  // Return an Observable that emits the custom error
  return new Observable((observer) => {
    observer.error(customError);
  });
});
