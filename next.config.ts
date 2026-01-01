import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/test',  // Add your subfolder here
  assetPrefix: '/test',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
