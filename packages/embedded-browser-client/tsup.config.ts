import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: {
    resolve: true, // Resolve and bundle external type dependencies
    compilerOptions: {
      composite: false,
      baseUrl: '.',
      lib: ['ES2022', 'DOM'],
    },
  },
  sourcemap: true,
  clean: true,
  // @ver-id/core is a published dependency, not something we inline.
  external: ['@ver-id/core'],
  treeshake: true,
  splitting: false,
  bundle: true,
});
