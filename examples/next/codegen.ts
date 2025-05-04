import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "node_modules/@codex-data/sdk/dist/resources/schema.graphql",
  documents: ["src/**/*.{ts,tsx}", "src/**/*.graphql"], // Look for operations in TS/TSX AND .graphql files
  ignoreNoDocuments: true, // Don't error if no operations are found initially
  generates: {
    "src/gql/": { // Output directory
      preset: "client", // Use the client preset for React apps
      plugins: [], // client-preset handles the necessary plugins
      // presetConfig: {
        // gqlTagName: 'gql', // Default tag name for embedded queries
        // If you want Apollo Client hooks:
        // fragmentMasking: false // Can be useful for complex fragments, but start without it
      // },
      config: {
        // Optional: Configure specific plugin options if needed
        // Example for typescript-react-apollo:
        withHooks: true, // Generate React hooks (useQuery, useMutation, etc.)
        withComponent: false, // Don't generate React components
        withHOC: false, // Don't generate Higher-Order Components
      }
    }
  }
};

export default config;