import type { NextConfig } from "next";
import path from "path";

const isProd = process.env.NODE_ENV === "production";
// Only use basePath for GitHub Pages, not for custom domain
const useCustomDomain = process.env.CUSTOM_DOMAIN === "true";
const basePath = isProd && !useCustomDomain ? "/gitsics-website" : "";

const nextConfig: NextConfig = {
  output: isProd ? "export" : undefined,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  turbopack: {
    root: path.resolve(process.cwd()),
  },
  ...(basePath && {
    basePath: basePath,
    assetPrefix: basePath,
  }),
};

export default nextConfig;
