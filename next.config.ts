import type { NextConfig } from "next";

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
  ...(basePath && {
    basePath: basePath,
    assetPrefix: basePath,
  }),
};

export default nextConfig;
