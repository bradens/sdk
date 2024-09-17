import { Codex } from "@codex-data/sdk";

const sdk = new Codex(process.env.CODEX_API_KEY || "");

const res = await sdk.queries.token({
  input: {
    address: "0x812ba41e071c7b7fa4ebcfb62df5f45f6fa853ee",
    networkId: 1,
  },
});

console.log({ token: res.token });
