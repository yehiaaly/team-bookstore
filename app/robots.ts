import { MetadataRoute } from "next";

export const runtime = "edge";

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL ||
  "https://8272f0a9.team-bookstore.pages.dev";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/sign-up", "/sign-in"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
