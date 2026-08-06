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
      paths: {
        '@verid-sdk-js-mono/core': ['../../libs/core/src/index.ts'],
        '@verid-sdk-js-mono/core/error': ['../../libs/core/src/error/index.ts'],
        '@verid-sdk-js-mono/core/cache': ['../../libs/core/src/cache/index.ts'],
        '@verid-sdk-js-mono/core/flow': ['../../libs/core/src/flow/index.ts'],
        '@verid-sdk-js-mono/core/oauth': ['../../libs/core/src/oauth/index.ts'],
        '@verid-sdk-js-mono/core/types': ['../../libs/core/src/types/index.ts'],
        '@verid-sdk-js-mono/core/utils': ['../../libs/core/src/utils/index.ts'],
      },
    },
  },
  sourcemap: true,
  clean: true,
  external: ['redis', 'ioredis', '@aws-sdk/client-dynamodb', '@aws-sdk/lib-dynamodb'],
  // Bundle the @verid-sdk-js-mono/core package since it's a workspace dependency
  noExternal: [/@verid-sdk-js-mono\/core/],
  treeshake: true,
  splitting: false,
  bundle: true,
});
