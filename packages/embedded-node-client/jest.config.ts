export default {
  displayName: '@ver-id/embedded-node-client',
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
  transformIgnorePatterns: ['node_modules/(?!(?:.pnpm/)?(?:jose|oauth4webapi))'],
  coverageDirectory: 'test-output/jest/coverage',
  passWithNoTests: true,
};
