import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: {
    resolve: true, // Resolve and bundle external type dependencies
    compilerOptions: {
      composite: false,
      baseUrl: '.',
      paths: {
        '@verid-sdk-js-mono/core': ['../../libs/core/src/index.ts'],
      },
    },
  },
  sourcemap: true,
  clean: true,
  external: [
    '@apollo/client',
    'graphql',
    '@graphql-typed-document-node/core',
  ],
  // Bundle the @verid-sdk-js-mono/core package since it's a workspace dependency
  noExternal: ['@verid-sdk-js-mono/core'],
  treeshake: true,
  splitting: false,
  bundle: true,
});
