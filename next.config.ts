import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  // GitHub Pages 项目站点路径: /xuanhuan/
  basePath: '/xuanhuan',
  // 生成目录结构: /realms/rmjz/index.html 而非 /realms/rmjz.html
  trailingSlash: true,
  allowedDevOrigins: ['*.dev.coze.site'],
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
