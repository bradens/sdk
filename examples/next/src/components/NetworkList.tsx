'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Input } from "@/components/ui/input"; // Using shadcn Input for consistency

// Define the Network type again for the props
type Network = {
  id: number;
  name: string;
};

interface NetworkListProps {
  initialNetworks: Network[];
  initialError: string | null;
}

export default function NetworkList({ initialNetworks, initialError }: NetworkListProps) {
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Filter networks based on search query
  const filteredNetworks = initialNetworks.filter((network) =>
    network.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Determine content based on error and data states
  let content;
  if (initialError) {
    content = <p className="text-destructive">{initialError}</p>;
  } else if (initialNetworks.length === 0) {
    content = <p>No networks available.</p>;
  } else if (filteredNetworks.length === 0) {
    // Escape quotes for JSX linter
    content = <p>No networks found matching &quot;{searchQuery}&quot;.</p>;
  } else {
    content = (
      <ul className="list-none pl-0 flex-grow overflow-y-auto">
        {filteredNetworks.map((network) => (
          <li key={network.id} className="py-1 border-b border-dashed border-border/50 last:border-b-0">
            <Link href={`/networks/${network.id}`} className="block w-full h-full hover:underline">
              {network.name}
            </Link>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="w-full h-full border border-border p-4 flex flex-col">
      <h2 className="text-xl font-semibold mb-3">Available Networks</h2>

      {/* Search Input - only show if there are networks to search */}
      {!initialError && initialNetworks.length > 0 && (
        <Input
          type="text"
          placeholder="Search networks..."
          value={searchQuery}
          // Add explicit type for the event object
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
          className="w-full mb-4"
        />
      )}

      {/* Render the determined content */}
      {content}
    </div>
  );
}