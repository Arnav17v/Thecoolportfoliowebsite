import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  // Only the single portfolio page belongs here; sections are fragment links.
  return siteUrl ? [{ url: `${siteUrl}/` }] : [];
}
