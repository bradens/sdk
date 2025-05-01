import { Codex } from "@codex-data/sdk";
import React from "react";
import NetworkList from "@/components/NetworkList"; // Import the new client component

// Define the Network type for data fetched on the server
type Network = {
  id: number;
  name: string;
};

// Keep this as an async Server Component
export default async function Home() {
  // Fetch data on the server using CODEX_API_KEY
  const apiKey = process.env.CODEX_API_KEY;
  if (!apiKey) {
    console.warn("CODEX_API_KEY environment variable is not set. Codex SDK might not work.");
    // Decide how to handle missing key on server - maybe render an error state?
  }

  // Instantiate the client (can use empty string if key is missing, but queries might fail)
  const codexClient = new Codex(apiKey || '');

  let initialNetworks: Network[] = [];
  let error: string | null = null;

  // Fetch initial network list on the server
  if (apiKey) { // Only attempt fetch if API key exists
    try {
      const result = await codexClient.queries.getNetworks({});
      initialNetworks = result.getNetworks || [];
    } catch (err) {
      console.error("Error fetching networks on server:", err);
      error = "Failed to load networks.";
    }
  } else {
    error = "Server API key is not configured. Cannot fetch networks.";
  }

  return (
    <main className="flex min-h-screen flex-col p-12 md:p-24">
      <div className="w-full max-w-md mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center">Tokedex</h1>
        <p className="text-lg text-center mb-8">
          Welcome to Tokedex! Your terminal-inspired crypto token screener.
          <br />
          Discover, analyze, and track tokens across various networks.
        </p>
      </div>

      <div className="w-full max-w-md mx-auto flex-grow flex flex-col">
        <NetworkList initialNetworks={initialNetworks} initialError={error} />
      </div>

      {/* More content can go here */}
    </main>
  );
}
