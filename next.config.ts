import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/calgirard.github.io',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
