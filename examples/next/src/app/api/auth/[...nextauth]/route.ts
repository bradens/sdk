import NextAuth from "next-auth"
import { authOptions } from "../../../../lib/auth" // Use correct relative path to rule out alias issues

// Add a log to check if this file is executed
console.log("--- EXECUTING [...nextauth]/route.ts ---");

// Log the imported authOptions to verify structure
console.log("--- [...nextauth]/route.ts --- Imported authOptions:", JSON.stringify(authOptions, null, 2));

let handler;
let initializationError: Error | null = null;

try {
  handler = NextAuth(authOptions);
  console.log("--- [...nextauth]/route.ts --- NextAuth handler initialized successfully.");
} catch (error) {
  initializationError = error as Error;
  console.error("--- [...nextauth]/route.ts --- ERROR initializing NextAuth handler:", error);
  // Optionally re-throw or handle differently if needed
  // For now, we'll let requests fail if initialization fails
}

// Export the handler (or potentially an error handler if init failed)
// Note: If handler is undefined due to error, requests will likely fail
export { handler as GET, handler as POST }