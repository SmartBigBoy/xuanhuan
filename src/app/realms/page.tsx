import Link from 'next/link';
import { BookOpen, Star, ChevronRight, Layers, MapIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { novels, categories } from '@/data/novels';
import { realmSystems } from '@/data/realms';
import { BreadcrumbJsonLd } from '@/components/json-ld';

export const metadata = {
  title: '修仙境界大全',
  description:
    '按小说分类展示各部修仙玄幻小说的境界体系详解，含层级表、特色解析与跨体系对比。涵盖凡人修仙传、遮天、仙逆、诛仙等139部作品。',
  keywords: [
    '修仙境界',
    '修炼等级',
    '凡人修仙传境界',
    '遮天境界',
    '仙逆境界',
    '诛仙境界',
    '境界体系',
    '修仙等级划分',
  ],
  openGraph: {
    title: '修仙境界大全 | 诸天图鉴阁',
    description:
      '139部修仙玄幻小说境界体系完整解析，含层级表、特色解析与跨体系对比',
  },
};

export default function RealmsPage() {
  return (
    <div className="xian-bg-pattern">
      <BreadcrumbJsonLd items={[{ name: '首页', href: '/' }, { name: '修仙境界', href: '/realms' }]} />
      {/* 页头 */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-xian-purple/10 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-xian-gold/20 bg-xian-gold/5 mb-4">
            <Layers className="h-4 w-4 text-xian-gold" />
            <span className="text-sm text-xian-gold">境界体系</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold font-serif text-xian-gold xian-text-glow mb-3">
            修仙境界大全
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            按小说分类展示各部作品的修炼境界体系，提供详细的层级表、特色解析与跨体系对比
          </p>
        </div>
      </section>

      {/* 分类筛选 */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm text-muted-foreground mr-1">分类：</span>
          {categories.map((cat) => {
            const count = novels.filter((n) => n.category === cat).length;
            return (
              <Badge
                key={cat}
                variant="secondary"
                className="bg-xian-gold/10 text-xian-gold border-xian-gold/20 cursor-default"
              >
                {cat} ({count})
              </Badge>
            );
          })}
        </div>
      </section>

      {/* 小说列表 */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <div className="space-y-6">
          {categories.map((cat) => {
            const catNovels = novels.filter((n) => n.category === cat);
            if (catNovels.length === 0) return null;
            return (
              <div key={cat}>
                <h2 className="text-xl font-bold font-serif text-xian-gold mb-4 flex items-center gap-2">
                  <div className="h-1 w-6 bg-gradient-to-r from-xian-gold to-transparent rounded" />
                  {cat}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {catNovels.map((novel) => {
                    const realmData = realmSystems.find(
                      (r) => r.novelId === novel.id
                    );
                    return (
                      <Link key={novel.id} href={`/realms/${novel.id}`}>
                        <Card className="xian-card h-full bg-card/80 hover:bg-accent/50 transition-all duration-300 hover:-translate-y-0.5">
                          <CardContent className="p-5">
                            <div className="flex items-start gap-4">
                              {/* 封面 */}
                              <div className="h-24 w-16 rounded-md overflow-hidden flex-shrink-0 bg-gradient-to-br from-xian-purple/30 to-xian-gold/20">
                                {novel.cover ? (
                                  <img
                                    src={novel.cover}
                                    alt={novel.title}
                                    className="h-full w-full object-cover"
                                    loading="lazy"
                                  />
                                ) : (
                                  <div className="h-full w-full flex items-center justify-center">
                                    <BookOpen className="h-8 w-8 text-xian-gold/40" />
                                  </div>
                                )}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                  <h3 className="text-base font-semibold text-foreground truncate">
                                    {novel.title}
                                  </h3>
                                  {novel.popularity >= 10 && (
                                    <Star className="h-3.5 w-3.5 text-xian-amber fill-xian-amber flex-shrink-0" />
                                  )}
                                </div>
                                <p className="text-xs text-muted-foreground mb-2">
                                  {novel.author}
                                </p>
                                <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                                  {novel.description}
                                </p>
                                <div className="flex items-center gap-2 flex-wrap">
                                  <Badge
                                    variant="secondary"
                                    className="text-[11px] bg-xian-gold/10 text-xian-gold border-xian-gold/20"
                                  >
                                    {realmData
                                      ? `${realmData.levels.length} 大境界`
                                      : '待整理'}
                                  </Badge>
                                  <Badge
                                    variant="secondary"
                                    className="text-[11px] bg-xian-cyan/10 text-xian-cyan border-xian-cyan/20"
                                  >
                                    <MapIcon className="h-3 w-3 mr-1" />
                                    {novel.mapCount} 图
                                  </Badge>
                                  {realmData?.crossComparison && (
                                    <Badge
                                      variant="secondary"
                                      className="text-[11px] bg-xian-purple/10 text-xian-purple border-xian-purple/20"
                                    >
                                      含对比
                                    </Badge>
                                  )}
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center justify-end mt-3 text-xs text-xian-gold">
                              查看境界详情 <ChevronRight className="h-3 w-3" />
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
