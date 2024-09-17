import {
  parseVariables,
  transformArgsToInputWrapper,
  typeObjectToString,
} from "./generateQueries";

describe("generateQueries", () => {
  describe("typeToWord", () => {
    it("should work with a complex list", () => {
      const res = typeObjectToString({
        kind: "NON_NULL",
        ofType: {
          kind: "LIST",
          ofType: {
            kind: "NON_NULL",
            ofType: {
              kind: "OBJECT",
              name: "ApiToken",
            },
          },
        },
      });
      expect(res).toEqual("[ApiToken!]!");
    });
  });

  describe("transformArgsToInputWrapper", () => {
    it("should work with a complex argument", () => {
      const res = transformArgsToInputWrapper([
        {
          name: "token",
          type: {
            kind: "NON_NULL",
            ofType: {
              kind: "SCALAR",
              name: "String",
            },
          },
        },
      ]);
      expect(res).toEqual("(token: String!)");
    });
  });

  describe("transformArgsToInputWrapper", () => {
    it("should work with a non-null complex input argument", () => {
      const allTypes = [
        {
          name: "getDetailedPairsStats",
          description:
            "Returns bucketed stats for a given token within a list of pairs.",
          args: [
            {
              name: "input",
              description: null,
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "LIST",
                  name: null,
                  ofType: {
                    kind: "NON_NULL",
                    name: null,
                    ofType: {
                      kind: "INPUT_OBJECT",
                      name: "GetDetailedPairsStatsInput",
                      ofType: null,
                    },
                  },
                },
              },
              defaultValue: null,
              isDeprecated: false,
              deprecationReason: null,
            },
          ],
          type: {
            kind: "LIST",
            name: null,
            ofType: {
              kind: "OBJECT",
              name: "DetailedPairStats",
              ofType: null,
            },
          },
          isDeprecated: false,
          deprecationReason: null,
        },
        {
          kind: "INPUT_OBJECT",
          name: "GetDetailedPairsStatsInput",
          description: "Input type of `getDetailedPairsStats`.",
          isOneOf: false,
          fields: null,
          inputFields: [
            {
              name: "bucketCount",
              description:
                "The number of aggregated values to receive. Note: Each duration has predetermined bucket sizes.<br>  The first n-1 buckets are historical. The last bucket is a snapshot of current data.<br> duration `day1`: 6 buckets (4 hours each) plus 1 partial bucket<br> duration `hour12`: 12 buckets (1 hour each) plus 1 partial bucket<br> duration `hour4`: 8 buckets (30 min each) plus 1 partial bucket<br> duration `hour1`: 12 buckets (5 min each) plus 1 partial bucket<br> duration `min5`: 5 buckets (1 min each) plus 1 partial bucket<br> For example, requesting 11 buckets for a `min5` duration will return the last 10 minutes worth of data plus a snapshot for the current minute.",
              type: {
                kind: "SCALAR",
                name: "Int",
                ofType: null,
              },
              defaultValue: null,
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: "durations",
              description:
                "The list of durations to get detailed pair stats for.",
              type: {
                kind: "LIST",
                name: null,
                ofType: {
                  kind: "ENUM",
                  name: "DetailedPairStatsDuration",
                  ofType: null,
                },
              },
              defaultValue: null,
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: "networkId",
              description: "The network ID the pair is deployed on.",
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "SCALAR",
                  name: "Int",
                  ofType: null,
                },
              },
              defaultValue: null,
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: "pairAddress",
              description: "The contract address of the pair.",
              type: {
                kind: "NON_NULL",
                name: null,
                ofType: {
                  kind: "SCALAR",
                  name: "String",
                  ofType: null,
                },
              },
              defaultValue: null,
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: "statsType",
              description:
                "The type of statistics returned. Can be `FILTERED` or `UNFILTERED`",
              type: {
                kind: "ENUM",
                name: "TokenPairStatisticsType",
                ofType: null,
              },
              defaultValue: null,
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: "timestamp",
              description:
                "The unix timestamp for the stats. Defaults to current.",
              type: {
                kind: "SCALAR",
                name: "Int",
                ofType: null,
              },
              defaultValue: null,
              isDeprecated: false,
              deprecationReason: null,
            },
            {
              name: "tokenOfInterest",
              description:
                "The token of interest used to calculate token-specific stats for the pair. Can be `token0` or `token1`.",
              type: {
                kind: "ENUM",
                name: "TokenOfInterest",
                ofType: null,
              },
              defaultValue: null,
              isDeprecated: false,
              deprecationReason: null,
            },
          ],
          interfaces: null,
          enumValues: null,
          possibleTypes: null,
        },
      ];

      const vars = parseVariables(allTypes, allTypes[0].args);
      console.log(vars);
    });
  });
});
