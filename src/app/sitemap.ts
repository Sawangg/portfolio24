import type { MetadataRoute } from "next";
import { domain } from "@lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: domain,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${domain}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
  ];
}
