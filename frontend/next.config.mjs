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
      {
        source: '/:path*', // catch-all route
        has: [
          {
            type: 'host',
            value: 'webforge.sg', // matching the non-www domain
          },
        ],
        destination: 'https://webforge.sg/:path*', // redirect to https version of the site
        permanent: true,
      },
      {
        source: '/:path*', // catch-all route
        has: [
          {
            type: 'host',
            value: 'www.webforge.sg', // matching the www subdomain
          },
        ],
        destination: 'https://webforge.sg/:path*', // redirect to the non-www version
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
