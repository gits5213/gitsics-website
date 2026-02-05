import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://gitsics.com";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function robots(): MetadataRoute.Robots {
  const sitemapUrl = `${siteUrl}${basePath}/sitemap.xml`.replace(/([^:]\/)\/+/g, "$1");
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: sitemapUrl,
    host: siteUrl,
  };
}
