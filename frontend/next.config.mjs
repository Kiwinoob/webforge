/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self';",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google.com https://www.gstatic.com;",
              "style-src 'self' 'unsafe-inline';",
              "img-src 'self' data: blob:;",
              "font-src 'self' https://fonts.gstatic.com;",
              "connect-src 'self' https://webforge-backend.onrender.com https://www.figma.com;",
              "media-src 'self' https://firebasestorage.googleapis.com;",

              // === THIS IS THE FIX ===
              // We explicitly allow every source that was trying to create an iframe.
              "frame-src 'self' https://dragons-den-sg.vercel.app https://furry-friends-webforge.vercel.app https://embed.figma.com https://www.figma.com https://www.google.com;",

              // For security, this prevents OTHER unknown sites from embedding your site.
              "frame-ancestors 'none';",
            ].join(" "),
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/api/sitemap",
      },
    ];
  },
};

export default nextConfig;
