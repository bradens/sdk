import { Codex } from '@codex-data/sdk'

const sdk = new Codex(process.env.CODEX_API_KEY || "")

sdk.queries.filterTokens({
  filters: {
    liquidity: { gt: 100000 },
    txnCount24: { gt: 200 },
    network: [1],
  },
  limit: 10
}).then(console.log)