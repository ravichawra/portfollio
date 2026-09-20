import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Required for Sanity Studio embedded at /studio
  transpilePackages: ["next-sanity", "sanity"],

  // Optimize images with modern next-gen formats
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io" },
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
    ],
  },

  compress: true,

  // Aggressive caching headers for static assets
  async headers() {
    return [
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/videos/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
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
