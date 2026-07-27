import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Required for Sanity Studio embedded at /studio
  transpilePackages: ["next-sanity", "sanity"],

  // Allow images from Sanity CDN and Google (used by Stitch design)
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io" },
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
    ],
  },

  // Alias /robot.txt -> /robots.txt so both URL variations work
  async rewrites() {
    return [
      {
        source: "/robot.txt",
        destination: "/robots.txt",
      },
    ];
  },

  logging: {
    fetches: { fullUrl: false },
  },
};

export default nextConfig;
