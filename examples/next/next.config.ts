import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'token-media.defined.fi',
      },
      {
        protocol: 'https',
        hostname: 'crypto-token-logos-production.s3.us-west-2.amazonaws.com',
      },
    ],
  },
};

export default nextConfig;
