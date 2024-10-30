import Link from "next/link";

import { sdk } from "@/sdk";

export default async function Networks() {
  const nets = (await sdk.queries.getNetworks({})).getNetworks;

  return (
    <div className="flex flex-col gap-2">
      {nets.map((n) => (
        <div key={n.id}>
          <Link href={`/network/${n.id}?networkName=${n.name}`}>
            {n.name} - {n.id}
          </Link>
        </div>
      ))}
    </div>
  );
}
