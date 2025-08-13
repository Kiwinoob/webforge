/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      // Redirect from HTTP to HTTPS
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'webforge.sg', // your domain without "www"
          },
        ],
        destination: 'https://webforge.sg/:path*',
        permanent: true,
      },
      // Redirect from www to non-www (optional)
      {
        source: 'http://www.webforge.sg/:path*',
        destination: 'https://webforge.sg/:path*',
        permanent: true,
      },
    ]
  },
};

module.exports = nextConfig;
