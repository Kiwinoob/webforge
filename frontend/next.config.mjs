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
      // Redirect from www to non-www version
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.webforge.sg', // Only trigger if the host is www.webforge.sg
          },
        ],
        destination: 'https://webforge.sg/:path*', // Redirect to the non-www version
        permanent: true, // Make it permanent
      },
      // Ensure HTTPS on non-www version (if it's HTTP)
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'webforge.sg', // Trigger only on non-www
          },
        ],
        destination: 'https://webforge.sg/:path*', // Ensure HTTPS version
        permanent: true, // Make it permanent
      },
    ];
  },
};

export default nextConfig;
