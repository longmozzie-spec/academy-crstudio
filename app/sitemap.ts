import type { MetadataRoute } from "next";
import { courseCategories } from "@/lib/site-config";

const BASE_URL = "https://duongminhtho.vn";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Routes tĩnh
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`,               lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE_URL}/khoa-hoc`,       lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE_URL}/khoa-hoc-capcut`,lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE_URL}/giang-vien`,     lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/du-an`,          lastModified: now, changeFrequency: "weekly",  priority: 0.8 },
  ];

  // Dynamic: từng category landing + từng class detail
  const courseRoutes: MetadataRoute.Sitemap = [];
  for (const cat of courseCategories) {
    courseRoutes.push({
      url: `${BASE_URL}/khoa-hoc/${cat.slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    });
    for (const cls of cat.classes) {
      courseRoutes.push({
        url: `${BASE_URL}/khoa-hoc/${cat.slug}/${cls.slug}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.8,
      });
    }
  }

  return [...staticRoutes, ...courseRoutes];
}
