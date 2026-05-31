import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Note: If you deploy to a repository subdirectory (e.g. username.github.io/repo-name),
  // Next.js will automatically inherit the basePath if you use GitHub Actions with actions/configure-pages.
};

export default nextConfig;
