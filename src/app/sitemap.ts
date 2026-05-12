import type { MetadataRoute } from 'next';
import { novels } from '@/data/novels';
import { worldMaps } from '@/data/maps';
import { wikiEntries } from '@/data/realms';
import { articles } from '@/data/articles';

export const dynamic = 'force-static';
export const revalidate = false;

const BASE_URL = 'https://xuanhuan.skin';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  // 静态页面
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/realms`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/maps`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/wiki`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/community`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
  ];

  // 境界详情页
  const realmPages: MetadataRoute.Sitemap = novels.map((novel) => ({
    url: `${BASE_URL}/realms/${novel.id}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // 地图详情页
  const mapPages: MetadataRoute.Sitemap = worldMaps.map((map) => ({
    url: `${BASE_URL}/maps/${map.id}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // 百科详情页
  const wikiPages: MetadataRoute.Sitemap = wikiEntries.map((entry) => ({
    url: `${BASE_URL}/wiki/${entry.id}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // 文章详情页
  const articlePages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${BASE_URL}/community/${article.id}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  return [...staticPages, ...realmPages, ...mapPages, ...wikiPages, ...articlePages];
}
