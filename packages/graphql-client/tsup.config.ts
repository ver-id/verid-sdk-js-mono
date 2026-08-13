import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: {
    resolve: true, // Resolve and bundle external type dependencies
    compilerOptions: {
      composite: false,
      baseUrl: '.',
    },
  },
  sourcemap: true,
  clean: true,
  // @ver-id/core is a published dependency, not something we inline.
  external: [
    '@ver-id/core',
    '@apollo/client',
    'graphql',
    '@graphql-typed-document-node/core',
  ],
  treeshake: true,
  splitting: false,
  bundle: true,
});
