import { HttpLink } from '@apollo/client/core';

export const createHttpLink = (endpoint: string) =>
  new HttpLink({
    uri: endpoint,
  });
