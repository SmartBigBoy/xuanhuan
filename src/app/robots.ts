import type { MetadataRoute } from 'next';

const BASE_URL = process.env.COZE_PROJECT_ENV === 'PROD'
  ? 'https://xuanhuan.skin'
  : process.env.COZE_PROJECT_DOMAIN_DEFAULT
    ? `https://${process.env.COZE_PROJECT_DOMAIN_DEFAULT}`
    : 'http://localhost:5000';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
