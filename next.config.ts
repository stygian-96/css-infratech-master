import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "618531912872-ccs-infratech.s3.us-east-1.amazonaws.com",
        port: "",
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      { protocol: 'https', hostname: 'picsum.photos' },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
