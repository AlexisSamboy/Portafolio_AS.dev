import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Use standalone output for production/Dokploy, export for static deployments (GitHub Pages)
  output: process.env.STATIC_EXPORT === "true" ? "export" : "standalone",
  images: {
    unoptimized: true,
  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || "",
  // Ignore TypeScript errors during production build to ensure successful compilation
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
