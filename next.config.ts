/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Static export for cPanel
  images: {
    unoptimized: true,
  },
  basePath: '', // Add '/subfolder' if not in root
  trailingSlash: true,
}

module. exports = nextConfig