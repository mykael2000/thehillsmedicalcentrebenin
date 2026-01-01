import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/',  // Add your subfolder here
  assetPrefix: '/',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
