import baseConfig from '../../../eslint.config.mjs';

export default [
  ...baseConfig,
  {
    files: ['**/*.json'],
    rules: {
      '@nx/dependency-checks': [
        'error',
        {
          ignoredFiles: [
            '{projectRoot}/eslint.config.{js,cjs,mjs,ts,cts,mts}',
            '{projectRoot}/tests/**/*',
          ],
          // Optional peers of the Redis and DynamoDB stores re-exported from core.
          ignoredDependencies: [
            'tsup',
            'redis',
            'ioredis',
            '@aws-sdk/client-dynamodb',
            '@aws-sdk/lib-dynamodb',
          ],
        },
      ],
    },
    languageOptions: {
      parser: await import('jsonc-eslint-parser'),
    },
  },
  {
    ignores: ['**/out-tsc'],
  },
];
