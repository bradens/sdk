import fs from "fs";
import camelCase from "lodash/camelCase";
import path from "path";

const GENERATED_SUBSCRIPTIONS_DIRECTORY = path.join(
  __dirname,
  "..",
  "resources",
  "generated_subscriptions",
);
const GENERATED_MUTATIONS_DIRECTORY = path.join(
  __dirname,
  "..",
  "resources",
  "generated_mutations",
);
const GENERATED_QUERIES_DIRECTORY = path.join(
  __dirname,
  "..",
  "resources",
  "generated_queries",
);

class Subscription {
  constructor(private subscriptionName: string) {}

  pre() {
    return `${this.subscriptionName}SubscriptionVariables, ${this.subscriptionName}Subscription`;
  }

  main() {
    const graphqlString = fs.readFileSync(
      path.join(
        GENERATED_SUBSCRIPTIONS_DIRECTORY,
        this.subscriptionName + ".graphql",
      ),
      "utf8",
    );
    return `${camelCase(this.subscriptionName)} = async (vars: ${
      this.subscriptionName
    }SubscriptionVariables, sink: Sink<ExecutionResult<${
      this.subscriptionName
    }Subscription>>) => this.sdk.subscribe(\`${graphqlString}\`, vars, sink);`;
  }
}

class Mutation {
  constructor(private mutationName: string) {}

  pre() {
    return `${this.mutationName}Document,
  ${this.mutationName}MutationVariables`;
  }

  main() {
    return `${camelCase(this.mutationName)} = async (vars: ${
      this.mutationName
    }MutationVariables) => this.sdk.mutation(${
      this.mutationName
    }Document, vars);`;
  }
}

class Query {
  constructor(private queryName: string) {}

  pre() {
    return `${this.queryName}Document,
  ${this.queryName}QueryVariables`;
  }

  main() {
    return `${camelCase(this.queryName)} = async (vars: ${
      this.queryName
    }QueryVariables) => this.sdk.query(${this.queryName}Document, vars);`;
  }
}

class SDK {
  private queries: Query[] = [];
  private mutations: Mutation[] = [];
  private subscriptions: Subscription[] = [];

  constructor() {
    this.initialize();
  }
  initialize() {
    // crawl the generatedQueries and then create the typescript code for that query.
    const queries = fs.readdirSync(GENERATED_QUERIES_DIRECTORY);
    const mutations = fs.readdirSync(GENERATED_MUTATIONS_DIRECTORY);
    const subscriptions = fs.readdirSync(GENERATED_SUBSCRIPTIONS_DIRECTORY);

    for (const file of queries) {
      this.queries.push(new Query(path.basename(file, ".graphql")));
    }
    for (const file of mutations) {
      this.mutations.push(new Mutation(path.basename(file, ".graphql")));
    }
    for (const file of subscriptions) {
      this.subscriptions.push(
        new Subscription(path.basename(file, ".graphql")),
      );
    }
  }

  printSubscriptions(): string {
    return `import {
${this.subscriptions.map((q) => "  " + q.pre()).join(",\n")}
} from "./autogenerated/graphql";
import { Codex } from "./index";
import { ExecutionResult, Sink } from "graphql-ws";

export class Subscribe {
  constructor(private sdk: Codex) {}
  ${this.subscriptions.map((q) => q.main()).join("\n")}
}
    `;
  }

  printMutations(): string {
    return `import {
${this.mutations.map((q) => "  " + q.pre()).join(",\n")}
} from "./autogenerated/graphql";
      import { Codex } from "./index";

      export class Mutation {
        constructor(private sdk: Codex) {}
        ${this.mutations.map((q) => q.main()).join("\n")}
      }
    `;
  }

  printQueries(): string {
    return `import {
${this.queries.map((q) => "  " + q.pre()).join(",\n")}
} from "./autogenerated/graphql";
      import { Codex } from "./index";

      export class Query {
        constructor(private sdk: Codex) {}
        ${this.queries.map((q) => q.main()).join("\n")}
      }
    `;
  }

  output() {
    fs.writeFileSync(
      path.join(__dirname, "..", "sdk", "Subscribe.ts"),
      this.printSubscriptions(),
      "utf8",
    );
    fs.writeFileSync(
      path.join(__dirname, "..", "sdk", "Mutation.ts"),
      this.printMutations(),
      "utf8",
    );
    fs.writeFileSync(
      path.join(__dirname, "..", "sdk", "Query.ts"),
      this.printQueries(),
      "utf8",
    );
  }
}

async function run() {
  const sdk = new SDK();
  sdk.output();
}

run().then(() => process.exit());
