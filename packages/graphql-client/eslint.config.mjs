import baseConfig from '../../eslint.config.mjs';

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
            '{projectRoot}/codegen.ts',
          ],
          ignoredDependencies: [
            '@graphql-codegen/cli',
            '@graphql-codegen/typescript',
            '@graphql-codegen/typescript-operations',
            '@graphql-codegen/typed-document-node',
            '@graphql-codegen/near-operation-file-preset',
            'tsup'
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
