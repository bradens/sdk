import { Codex } from "@codex-data/sdk";

const sdk = new Codex(process.env.CODEX_API_KEY || "");

sdk.queries
  .token({
    input: {
      address: "0xc56c7a0eaa804f854b536a5f3d5f49d2ec4b12b8",
      networkId: 1,
    },
  })
  .then(console.log);
