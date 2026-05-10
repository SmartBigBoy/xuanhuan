'use client';

import Link from 'next/link';
import { useState, useMemo } from 'react';
import { Map, Download, Filter, ChevronRight, Eye } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { worldMaps, mapTypes } from '@/data/maps';
import { novels } from '@/data/novels';

export default function MapsPage() {
  const [selectedNovel, setSelectedNovel] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');

  const uniqueNovels = useMemo(() => {
    const seen = new Set<string>();
    return novels.filter((n) => {
      if (seen.has(n.id)) return false;
      seen.add(n.id);
      return worldMaps.some((m) => m.novelId === n.id);
    });
  }, []);

  const filteredMaps = useMemo(() => {
    return worldMaps.filter((m) => {
      if (selectedNovel !== 'all' && m.novelId !== selectedNovel) return false;
      if (selectedType !== 'all' && m.type !== selectedType) return false;
      return true;
    });
  }, [selectedNovel, selectedType]);

  return (
    <div className="xian-bg-pattern">
      {/* 页头 */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-xian-cyan/8 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-xian-cyan/20 bg-xian-cyan/5 mb-4">
            <Map className="h-4 w-4 text-xian-cyan" />
            <span className="text-sm text-xian-cyan">地图资源</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold font-serif text-xian-gold xian-text-glow mb-3">
            世界地图下载
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            高清无水印修仙世界地图资源，按作品与类型分类，支持筛选，免费下载
          </p>
        </div>
      </section>

      {/* 筛选 */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8">
        <Card className="xian-card bg-card/80">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center gap-2 mb-4">
              <Filter className="h-4 w-4 text-xian-cyan" />
              <span className="text-sm font-semibold text-xian-gold">资源筛选</span>
            </div>

            <div className="space-y-4">
              {/* 按作品筛选 */}
              <div>
                <span className="text-xs text-muted-foreground mb-2 block">按作品</span>
                <div className="flex items-center gap-2 flex-wrap">
                  <Button
                    size="sm"
                    variant={selectedNovel === 'all' ? 'default' : 'outline'}
                    className={
                      selectedNovel === 'all'
                        ? 'bg-xian-gold/20 text-xian-gold border-xian-gold/30 hover:bg-xian-gold/30'
                        : 'border-border text-muted-foreground hover:text-foreground'
                    }
                    onClick={() => setSelectedNovel('all')}
                  >
                    全部作品
                  </Button>
                  {uniqueNovels.map((novel) => (
                    <Button
                      key={novel.id}
                      size="sm"
                      variant={selectedNovel === novel.id ? 'default' : 'outline'}
                      className={
                        selectedNovel === novel.id
                          ? 'bg-xian-gold/20 text-xian-gold border-xian-gold/30 hover:bg-xian-gold/30'
                          : 'border-border text-muted-foreground hover:text-foreground'
                      }
                      onClick={() => setSelectedNovel(novel.id)}
                    >
                      {novel.title}
                    </Button>
                  ))}
                </div>
              </div>

              {/* 按类型筛选 */}
              <div>
                <span className="text-xs text-muted-foreground mb-2 block">按类型</span>
                <div className="flex items-center gap-2 flex-wrap">
                  <Button
                    size="sm"
                    variant={selectedType === 'all' ? 'default' : 'outline'}
                    className={
                      selectedType === 'all'
                        ? 'bg-xian-cyan/20 text-xian-cyan border-xian-cyan/30 hover:bg-xian-cyan/30'
                        : 'border-border text-muted-foreground hover:text-foreground'
                    }
                    onClick={() => setSelectedType('all')}
                  >
                    全部类型
                  </Button>
                  {mapTypes.map((type) => (
                    <Button
                      key={type}
                      size="sm"
                      variant={selectedType === type ? 'default' : 'outline'}
                      className={
                        selectedType === type
                          ? 'bg-xian-cyan/20 text-xian-cyan border-xian-cyan/30 hover:bg-xian-cyan/30'
                          : 'border-border text-muted-foreground hover:text-foreground'
                      }
                      onClick={() => setSelectedType(type)}
                    >
                      {type}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-4 text-xs text-muted-foreground">
              共筛选出 <span className="text-xian-gold font-semibold">{filteredMaps.length}</span> 张地图
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 地图列表 */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        {filteredMaps.length === 0 ? (
          <div className="text-center py-16">
            <Map className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">暂无符合条件的地图资源</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredMaps.map((map) => (
              <Link key={map.id} href={`/maps/${map.id}`}>
                <Card className="xian-card h-full bg-card/80 hover:bg-accent/50 transition-all duration-300 hover:-translate-y-0.5">
                  <CardContent className="p-4">
                    {/* 预览图占位 */}
                    <div className="aspect-video rounded-md bg-gradient-to-br from-xian-deep to-xian-cyan/10 flex items-center justify-center mb-3 overflow-hidden relative">
                      <Map className="h-10 w-10 text-xian-cyan/20" />
                      <div className="absolute bottom-2 right-2">
                        <Badge className="text-[10px] bg-black/50 text-white border-none">
                          <Eye className="h-3 w-3 mr-1" />
                          预览
                        </Badge>
                      </div>
                    </div>

                    <h4 className="text-sm font-semibold text-foreground mb-1 line-clamp-2 min-h-[2.5rem]">
                      {map.title}
                    </h4>
                    <p className="text-xs text-muted-foreground line-clamp-2 mb-2">
                      {map.description}
                    </p>

                    <div className="flex items-center gap-2 flex-wrap mb-2">
                      <Badge
                        variant="secondary"
                        className="text-[10px] bg-xian-cyan/10 text-xian-cyan border-xian-cyan/20"
                      >
                        {map.type}
                      </Badge>
                      <Badge
                        variant="outline"
                        className="text-[10px] border-border text-muted-foreground"
                      >
                        {map.resolution}
                      </Badge>
                    </div>

                    <div className="flex items-center justify-between text-[10px] text-muted-foreground">
                      <span>{map.format} · {map.fileSize}</span>
                      <span className="flex items-center gap-1">
                        <Download className="h-3 w-3" />
                        {map.downloads.toLocaleString()}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
