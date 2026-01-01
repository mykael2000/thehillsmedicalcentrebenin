import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/myapp',  // Add your subfolder here
  assetPrefix: '/myapp',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
