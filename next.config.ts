import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output :"export",
   // Optional additional configs:
  images: {
    unoptimized: true, // Required for static exports
  },
  trailingSlash: true, // Recommended for static exports
};


export default nextConfig;
