import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/gitsics-website" : "";

const nextConfig: NextConfig = {
  output: isProd ? "export" : undefined,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  ...(basePath && {
    basePath: basePath,
    assetPrefix: basePath,
  }),
};

export default nextConfig;
