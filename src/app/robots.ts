import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';
export const revalidate = false;

const BASE_URL = 'https://xuanhuan.skin';

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
