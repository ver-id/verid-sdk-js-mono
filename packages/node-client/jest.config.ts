export default {
  displayName: '@ver-id/node-client',
  preset: '../../jest.preset.js',
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
  // `jose` and `oauth4webapi` ship as ESM ("type": "module"); the default preset skips
  // node_modules, so let @swc/jest transpile them (the OAuth client pulls both transitively).
  transformIgnorePatterns: ['node_modules/(?!(?:jose|oauth4webapi)/)'],
  // Resolve @ver-id/core to its sources rather than its bundled dist. The cache manager
  // contract in ../core/tests asserts on error classes thrown inside core, and those only
  // match `instanceof` when both sides come from the same module graph.
  moduleNameMapper: {
    '^@ver-id/core$': '<rootDir>/../core/src/index.ts',
    '^@ver-id/core/(.+)$': '<rootDir>/../core/src/$1/index.ts',
  },
  coverageDirectory: 'test-output/jest/coverage',
  passWithNoTests: true,
};
