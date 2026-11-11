// codegen.ts
import type { CodegenConfig } from '@graphql-codegen/cli';

const scalarMap = {
  AccessEntitlement: 'string',
  AccessResource: 'string',
  AccessRole: 'string',
  DateTime: 'string',
  ClientPicture: 'string | null',
  Domain: 'string',
  DomainName: 'string',
  ProfilePicture: 'string | null',
  Entitlement: 'string',
  HexColor: 'string',
  Email: 'string',
  ISO3166: 'string',
  Password: 'string',
  NonEmpty: 'string',
  Price: 'number',
  Resource: 'string',
  RedirectPath: 'string',
  RedirectProtocol: 'string',
  RedirectPort: 'number',
  Role: 'string',
  URL: 'string',
  URN: 'string',
  UUID: 'string',
  FilteringValue: 'string | number | boolean | string[]',
  UInt: 'number',
  JSONObject: 'any',
  JwtMediaType: 'string',
  Locale: 'string',
};

const config: CodegenConfig = {
  // Garden's merged schema. Not the supergraph: its federation types (join__*, link__*)
  // would become public exports.
  schema: '../../../libs/schemas/adam/dist/unified.graphql',
  documents: 'src/**/*.gql',
  generates: {
    // Generate base schema types first
    'src/contrib/graphql/schema-types.ts': {
      plugins: ['typescript'],
      config: {
        defaultScalarType: 'unknown',
        scalars: scalarMap,
      },
    },
    // Generate operation-specific types next to each .gql file
    'src/operations/query/': {
      preset: 'near-operation-file',
      presetConfig: {
        extension: '.gql.ts',
        // Relative path from each generated file to schema types
        // Note: .js extension added via postcodegen script
        baseTypesPath: '../../contrib/graphql/schema-types',
        importTypesNamespace: 'Types',
      },
      plugins: ['typescript-operations', 'typed-document-node'],
      config: {
        useTypeImports: true,
        emitLegacyCommonJSImports: false,
        defaultScalarType: 'unknown',
        scalars: scalarMap,
        enumsAsConst: true,
        avoidOptionals: false,
        maybeValue: 'T | null',
        skipTypename: false,
        dedupeFragments: true,
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
