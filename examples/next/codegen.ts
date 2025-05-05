import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "src/schema.graphql",
  documents: ["src/**/*.graphql"], // Look for operations in TS/TSX AND .graphql files
  ignoreNoDocuments: true, // Don't error if no operations are found initially
  debug: true,
  generates: {
    "src/gql/": { // Output directory
      preset: "client", // Use the client preset for React apps
    }
  }
};

export default config;