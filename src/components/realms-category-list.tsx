'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BookOpen, Star, ChevronRight, ChevronDown, MapIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { novels, categories } from '@/data/novels';
import { realmSystems } from '@/data/realms';

const INITIAL_COUNT = 6;

export function RealmsCategoryList() {
  const [expandedCats, setExpandedCats] = useState<Set<string>>(new Set());

  const toggleCat = (cat: string) => {
    setExpandedCats((prev) => {
      const next = new Set(prev);
      if (next.has(cat)) {
        next.delete(cat);
      } else {
        next.add(cat);
      }
      return next;
    });
  };

  return (
    <div className="space-y-6">
      {categories.map((cat) => {
        const catNovels = novels.filter((n) => n.category === cat);
        if (catNovels.length === 0) return null;

        const isExpanded = expandedCats.has(cat);
        const visibleNovels = isExpanded
          ? catNovels
          : catNovels.slice(0, INITIAL_COUNT);
        const hiddenCount = catNovels.length - INITIAL_COUNT;
        const showMore = hiddenCount > 0;

        return (
          <div key={cat}>
            <h2 className="text-xl font-bold font-serif text-xian-gold mb-4 flex items-center gap-2">
              <div className="h-1 w-6 bg-gradient-to-r from-xian-gold to-transparent rounded" />
              {cat}
              <span className="text-sm font-normal text-muted-foreground ml-1">
                ({catNovels.length}部)
              </span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {visibleNovels.map((novel) => {
                const realmData = realmSystems.find(
                  (r) => r.novelId === novel.id
                );
                return (
                  <Link key={novel.id} href={`/realms/${novel.id}`}>
                    <Card className="xian-card h-full bg-card/80 hover:bg-accent/50 transition-all duration-300 hover:-translate-y-0.5">
                      <CardContent className="p-5">
                        <div className="flex items-start gap-4">
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

            {showMore && (
              <div className="mt-4 text-center">
                <button
                  onClick={() => toggleCat(cat)}
                  className="inline-flex items-center gap-1.5 px-5 py-2 rounded-lg border border-xian-gold/30 bg-xian-gold/5 text-xian-gold text-sm hover:bg-xian-gold/15 transition-colors cursor-pointer"
                >
                  {isExpanded ? (
                    <>
                      收起 <ChevronDown className="h-3.5 w-3.5 rotate-180" />
                    </>
                  ) : (
                    <>
                      加载更多（还有{hiddenCount}部）
                      <ChevronDown className="h-3.5 w-3.5" />
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
