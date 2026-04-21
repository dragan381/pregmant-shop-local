import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";
const repoName = "pregmant-shop-local";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  basePath: isProduction ? `/${repoName}` : "",
  assetPrefix: isProduction ? `/${repoName}/` : undefined,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
