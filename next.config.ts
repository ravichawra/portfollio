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

  logging: {
    fetches: { fullUrl: false },
  },
};

export default nextConfig;
