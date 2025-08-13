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
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.webforge.sg', // when `www` is accessed
          },
        ],
        destination: 'https://webforge.sg/:path*', // redirect to non-www version
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'webforge.sg', // no redirection if it's already non-www
          },
        ],
        destination: 'https://webforge.sg/:path*', // ensure https version
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
