import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Trang preview component demo + folder dev không cần index
        disallow: ["/preview/", "/api/"],
      },
    ],
    sitemap: "https://duongminhtho.vn/sitemap.xml",
    host: "https://duongminhtho.vn",
  };
}
