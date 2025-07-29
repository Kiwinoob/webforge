import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://webforge.sg";

  // Define your routes and their metadata
  const routes = [
    { path: "/", changefreq: "weekly", priority: 1.0 },
    { path: "/#about", changefreq: "monthly", priority: 0.8 },
    { path: "/#approach", changefreq: "monthly", priority: 0.8 },
    { path: "/#portfolio", changefreq: "weekly", priority: 0.9 },
    { path: "/#contact", changefreq: "monthly", priority: 0.7 },
  ];

  // Generate sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${routes
        .map(
          (route) => `
        <url>
          <loc>${baseUrl}${route.path}</loc>
          <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
          <changefreq>${route.changefreq}</changefreq>
          <priority>${route.priority}</priority>
        </url>`
        )
        .join("")}
    </urlset>`;

  // Return the sitemap XML with appropriate headers
  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
