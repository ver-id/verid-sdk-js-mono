import { defineConfig } from 'tsup';

export default defineConfig({
  // One entry per public subpath export, so consumers can deep-import
  // `@ver-id/core/error`, `@ver-id/core/oauth`, ... without pulling in the world.
  entry: [
    'src/index.ts',
    'src/cache/index.ts',
    'src/embedded/index.ts',
    'src/error/index.ts',
    'src/flow/index.ts',
    'src/oauth/index.ts',
    'src/types/index.ts',
    'src/utils/index.ts',
  ],
  format: ['esm', 'cjs'],
  dts: {
    compilerOptions: {
      composite: false,
      baseUrl: '.',
      lib: ['ES2022'],
      types: ['node'],
    },
  },
  sourcemap: true,
  clean: true,
  // Runtime dependencies stay external — they are declared in package.json.
  external: ['jose', 'oauth4webapi'],
  // Shared internals live in a single chunk instead of being duplicated per
  // entry, so `instanceof` keeps working across subpath imports.
  splitting: true,
  treeshake: true,
  bundle: true,
});
