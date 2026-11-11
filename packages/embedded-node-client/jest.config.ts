export default {
  displayName: '@ver-id/embedded-node-client',
  preset: '../../../jest.preset.js',
  testEnvironment: 'node',
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
  transformIgnorePatterns: ['node_modules/(?!(?:.pnpm/)?(?:jose|oauth4webapi))'],
  // Resolve @ver-id/core to its sources rather than its bundled dist: Nx's Jest preset hands
  // the dist's .cjs files to ts-jest, which TypeScript 6 rejects outside this project's rootDir.
  moduleNameMapper: {
    '^@ver-id/core$': '<rootDir>/../core/src/index.ts',
    '^@ver-id/core/(.+)$': '<rootDir>/../core/src/$1/index.ts',
  },
  coverageDirectory: 'test-output/jest/coverage',
};
