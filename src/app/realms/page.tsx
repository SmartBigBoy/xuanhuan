import Link from 'next/link';
import { Layers } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { novels, categories } from '@/data/novels';
import { BreadcrumbJsonLd } from '@/components/json-ld';
import { RealmsCategoryList } from '@/components/realms-category-list';

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

      {/* 小说列表 - 按分类懒加载 */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <RealmsCategoryList />
      </section>
    </div>
  );
}
