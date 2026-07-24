export default {
  displayName: '@ver-id/embedded-browser-client',
  preset: '../../jest.preset.js',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.[tj]s$': [
      '@swc/jest',
      {
        jsc: {
          target: 'es2017',
          parser: { syntax: 'typescript', decorators: true, dynamicImport: true },
          transform: { decoratorMetadata: true, legacyDecorator: true },
          keepClassNames: true,
          externalHelpers: true,
          loose: true,
        },
        module: { type: 'es6' },
        sourceMaps: true,
        exclude: [],
      },
    ],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  setupFiles: ['<rootDir>/jest.setup.ts'],
  // The public barrel re-exports `parseRonanMessage` from core, which transitively
  // pulls in the ESM-only `jose` and `oauth4webapi` packages. Let swc transform them.
  transformIgnorePatterns: ['node_modules/(?!(?:.pnpm/)?(?:jose|oauth4webapi))'],
  coverageDirectory: 'test-output/jest/coverage',
};
