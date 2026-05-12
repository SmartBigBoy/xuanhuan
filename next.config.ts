import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  // 自定义域名不需要 basePath；如使用 smartbigboy.github.io/xuanhuan/ 则设为 '/xuanhuan'
  basePath: process.env.BASE_PATH || '',
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
