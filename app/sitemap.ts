import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://gitsics.com";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "about/",
    "courses/",
    "course-curriculum/",
    "how-it-works/",
    "contact/",
    "enroll/",
    "advanced-career/",
    "career-services/",
    "staffing/",
    "staffing/qa-proposal/",
    "success-stories/",
    "privacy-policy/",
    "terms-of-use/",
    "refund-policy/",
    "copyright-notice/",
  ];

  const base = `${siteUrl}${basePath}`.replace(/([^:]\/)\/+/g, "$1");
  return paths.map((path) => ({
    url: path ? `${base}/${path}` : `${base}/`,
    lastModified: new Date(),
    changeFrequency: path === "" || path === "courses/" ? "weekly" : ("monthly" as const),
    priority: path === "" ? 1 : path === "courses/" ? 0.9 : 0.8,
  }));
}
