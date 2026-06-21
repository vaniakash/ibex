import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow local /public images (default) + any future CDN domains
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
