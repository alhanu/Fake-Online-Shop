import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // allow product images from the fake store api
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
      },
    ],
  },
};

export default nextConfig;
