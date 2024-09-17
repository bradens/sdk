import fs from "fs";
import * as gql from "gql-query-builder";
import path from "path";

type SchemaTypeDefinition = {
  kind:
  | "NON_NULL"
  | "SCALAR"
  | "LIST"
  | "OBJECT"
  | "INPUT_OBJECT"
  | "ENUM"
  | "UNION"
  | undefined
  | null;
  name?: string | null;
  ofType?: SchemaTypeDefinition | null;
};

type SchemaType = {
  name: string;
  description?: string | null;
  type: SchemaTypeDefinition;
};

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const typeObjectToString = (type: SchemaTypeDefinition): string => {
  if (type.kind === "SCALAR" || type.kind === "OBJECT") {
    return type.name!;
  }

  if (type.kind === "NON_NULL") {
    return typeObjectToString(type.ofType!) + "!";
  }

  if (type.kind === "LIST") {
    return `[${typeObjectToString(type.ofType!)}]`;
  }

  return "";
};

// This one transforms the args into the type wraps (e.g. query(input: MyQueryInput!) { ... })
export const transformArgsToInputWrapper = (args: SchemaType[]): string => {
  if (args.length === 0) return "";

  return `(${args
    .map((arg: SchemaType) => `${arg.name}: ${typeObjectToString(arg.type)}`)
    .join(", ")})`;
};

export const resolveToFirstObjectType = (
  type: SchemaTypeDefinition,
): SchemaTypeDefinition => {
  if (type.kind === "OBJECT" || type.kind === "SCALAR") return type;
  if (type.kind === "NON_NULL" || type.kind === "LIST")
    return resolveToFirstObjectType(type.ofType!);
  throw new Error("not sure what to do with");
};

export const transformTypeToSelectionSet = (
  type: SchemaTypeDefinition,
): string => {
  // Resolve down to the first object type
  return "";
};

type Fields = Array<string | { [key: string]: Fields }>;

export const getLeafType = (
  type: SchemaTypeDefinition,
  allTypes: any[],
  result: Fields,
  currentName: string,
  level = 0,
): Fields => {
  if (level > 8 || !type?.kind || type.kind === "UNION") return result;

  // If it's a scalar, return the name
  if (type.kind === "SCALAR" || type.kind === "ENUM")
    return [...result, currentName!];

  // If it's an object resolve it.
  if (type.kind === "OBJECT") {
    // For each of the fields of the subtype, resolve them
    const subType = allTypes.find((t) => t.name === type.name);
    // const subTypeLeaves = subType.fields.map((f: any) => f.name);
    const subTypeLeaves = subType.fields
      .map((f: any) => getLeafType(f.type, allTypes, [], f.name, level + 1))
      .flat();
    return [
      ...result,
      ...(level === 0 ? subTypeLeaves : [{ [currentName]: subTypeLeaves }]),
    ];
  }

  // If it's a list, resolve the first object type
  if (type.kind === "LIST")
    return getLeafType(type.ofType!, allTypes, [...result], currentName, level);

  // If it's required, resolve the first object type
  if (type.kind === "NON_NULL")
    return getLeafType(type.ofType!, allTypes, [...result], currentName, level);

  throw new Error(`Unknown type ${type.name} ${type.kind}`);
};

export const getLeafArgs = (type: SchemaTypeDefinition, result: any): any => {
  if (
    type.kind === "NON_NULL" &&
    ["INPUT_OBJECT", "SCALAR", "OBJECT", "ENUM"].includes(
      type.ofType?.kind as string,
    )
  )
    return { ...result, type: `${type.ofType!.name!}!` };

  // If it's a scalar, return the name
  if (
    type.kind === "SCALAR" ||
    type.kind === "OBJECT" ||
    type.kind === "ENUM" ||
    type.kind === "INPUT_OBJECT"
  )
    return { ...result, type: type.name!, value: null };

  // If it's a list, resolve the first object type
  if (type.kind === "LIST")
    return getLeafArgs(type.ofType!, { ...result, list: true });

  // If it's required, resolve the first object type
  if (type.kind === "NON_NULL")
    return getLeafArgs(type.ofType!, { ...result, required: true });

  throw new Error(`Unknown type ${type.name} ${type.kind}`);
};

export function parseVariables(allTypes: any[], args: any) {
  const parsedVariables = args.reduce((acc: any, arg: any) => {
    return {
      ...acc,
      [arg.name]: getLeafArgs(arg.type, {}),
    };
  }, {});
  return parsedVariables;
}

/**
 * Runs a query against the currently published graphql schema,
 * and generates a query ts file for query.
 */
async function run() {
  console.log("Generating queries...");

  const res = await fetch(`https://graph.codex.io/schema/latest.json`, {
    method: "GET",
  });

  const schemaJson = await res.json();

  // console.debug("Schema", schemaJson);
  //
  // find the main query type
  const types = schemaJson.__schema.types;

  const queryType = types.find((type: any) => type.name === "Query");

  const queries = queryType.fields.map((field: any) => {
    const args = field.args;

    // if (field.name === "getDetailedPairsStats") debugger;

    const parsedVariables = parseVariables(types, args);
    const parsedFields = getLeafType(field.type, types, [], "").filter(Boolean);

    const queryBuilderObject = gql.query({
      operation: field.name,
      variables: Object.keys(parsedVariables).length
        ? parsedVariables
        : undefined,
      fields: parsedFields.length ? parsedFields : undefined,
    });

    // console.log("Query", queryBuilderObject);

    fs.writeFileSync(
      path.resolve(
        __dirname,
        "..",
        "resources",
        "generated_queries",
        `${field.name}.graphql`,
      ),
      `query ${capitalize(field.name)}Query${queryBuilderObject.query
        .toString()
        .slice(6)}`,
    );

    return queryBuilderObject;
  });
}

run().then(() => process.exit());
