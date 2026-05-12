import { novels } from '@/data/novels';
import { realmSystems, wikiEntries } from '@/data/realms';
import { worldMaps } from '@/data/maps';
import { siteConfig } from '@/data/site';

const BASE_URL = 'https://xuanhuan.skin';

/**
 * 首页 JSON-LD：WebSite + Organization
 */
export function HomePageJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${BASE_URL}/#website`,
        url: BASE_URL,
        name: siteConfig.name,
        description: siteConfig.description,
        inLanguage: 'zh-CN',
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${BASE_URL}/realms?q={search_term_string}`,
          },
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'Organization',
        '@id': `${BASE_URL}/#organization`,
        name: siteConfig.name,
        url: BASE_URL,
        description: siteConfig.description,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

/**
 * 境界详情页 JSON-LD：Article
 */
export function RealmDetailJsonLd({ novelId }: { novelId: string }) {
  const novel = novels.find((n) => n.id === novelId);
  const realmSystem = realmSystems.find((r) => r.novelId === novelId);
  if (!novel || !realmSystem) return null;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${novel.title} 境界体系详解`,
    description: realmSystem.overview,
    author: {
      '@type': 'Person',
      name: novel.author,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
    },
    url: `${BASE_URL}/realms/${novelId}`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}/realms/${novelId}`,
    },
    about: {
      '@type': 'Book',
      name: novel.title,
      author: {
        '@type': 'Person',
        name: novel.author,
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

/**
 * 地图详情页 JSON-LD：ImageObject
 */
export function MapDetailJsonLd({ mapId }: { mapId: string }) {
  const mapData = worldMaps.find((m) => m.id === mapId);
  if (!mapData) return null;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    name: mapData.title,
    description: mapData.description,
    contentUrl: mapData.previewUrl,
    uploadDate: mapData.uploadDate,
    author: {
      '@type': 'Organization',
      name: mapData.author,
    },
    about: {
      '@type': 'Book',
      name: mapData.novelTitle,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

/**
 * 百科详情页 JSON-LD：Article
 */
export function WikiDetailJsonLd({ entryId }: { entryId: string }) {
  const entry = wikiEntries.find((e) => e.id === entryId);
  if (!entry) return null;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: entry.title,
    description: entry.summary,
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
    },
    url: `${BASE_URL}/wiki/${entryId}`,
    about: {
      '@type': 'Thing',
      name: entry.category,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

/**
 * BreadcrumbList JSON-LD
 */
export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; href: string }[];
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${BASE_URL}${item.href}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
