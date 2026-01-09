import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/terms',
        destination: 'https://prazyl.app/terms',
        permanent: true,
      },
      {
        source: '/privacy',
        destination: 'https://prazyl.app/privacy',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
