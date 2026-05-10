import Link from 'next/link';
import {
  Sparkles,
  BookOpen,
  MessageSquarePlus,
  ChevronRight,
  Flame,
  Megaphone,
  Star,
  Download,
  Clock,
  ArrowRight,
  Scroll,
  MapIcon,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { novels, getPopularNovels } from '@/data/novels';
import { realmSystems } from '@/data/realms';
import { worldMaps } from '@/data/maps';
import { articles } from '@/data/articles';
import { announcements, siteConfig } from '@/data/site';
import { MapCardImage } from '@/components/map-card-image';

export default function HomePage() {
  const popularNovels = getPopularNovels(6);
  const recentMaps = [...worldMaps]
    .sort((a, b) => b.downloads - a.downloads)
    .slice(0, 4);
  const recentArticles = [...articles]
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
    .slice(0, 4);

  return (
    <div className="xian-bg-pattern">
      {/* ========== Hero Banner with celestial animation ========== */}
      <section className="hero-section">
        {/* 旋转光环 */}
        <div className="hero-ring" />
        <div className="hero-ring" />

        {/* 仙气缭绕 */}
        <div className="hero-mist">
          <div className="hero-mist-layer" />
          <div className="hero-mist-layer" />
          <div className="hero-mist-layer" />
          <div className="hero-mist-layer" />
          <div className="hero-mist-layer" />
          <div className="hero-mist-layer" />
        </div>

        {/* 漂浮灵气粒子 */}
        <div className="hero-particles">
          {Array.from({ length: 15 }, (_, i) => (
            <div key={i} className="hero-particle" style={{ top: `${30 + (i * 7) % 60}%` }} />
          ))}
        </div>

        {/* 底部渐变遮罩 */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
          {/* 标志 */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-xian-gold/20 bg-xian-gold/5 mb-6">
            <Sparkles className="h-4 w-4 text-xian-gold" />
            <span className="text-sm text-xian-gold">纯公益 · 非商业 · 共建共享</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-xian-gold xian-text-glow mb-4">
            {siteConfig.name}
          </h1>
          <p className="text-xl sm:text-2xl text-xian-amber/80 font-serif mb-3">
            {siteConfig.slogan}
          </p>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
            {siteConfig.description}
          </p>

          {/* 搜索提示 */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link href="/realms">
              <Button className="bg-gradient-to-r from-xian-gold to-xian-amber text-xian-deep hover:opacity-90 font-semibold">
                <BookOpen className="mr-2 h-4 w-4" />
                浏览境界体系
              </Button>
            </Link>
            <Link href="/maps">
              <Button variant="outline" className="border-xian-gold/30 text-xian-gold hover:bg-xian-gold/10">
                <MapIcon className="mr-2 h-4 w-4" />
                下载世界地图
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ========== 核心板块快捷入口 ========== */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link href="/realms" className="group">
            <Card className="xian-card h-full bg-card/80 hover:bg-accent/50 transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-xian-gold/20 to-xian-amber/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <BookOpen className="h-7 w-7 text-xian-gold" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">修仙境界大全</h3>
                <p className="text-sm text-muted-foreground">
                  按小说分类，详解每部作品的修炼境界体系、层级表与特色解析
                </p>
                <span className="text-xs text-xian-gold flex items-center gap-1 mt-1">
                  查看详情 <ChevronRight className="h-3 w-3" />
                </span>
              </CardContent>
            </Card>
          </Link>

          <Link href="/maps" className="group">
            <Card className="xian-card h-full bg-card/80 hover:bg-accent/50 transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-xian-cyan/20 to-xian-purple/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MapIcon className="h-7 w-7 text-xian-cyan" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">世界地图下载</h3>
                <p className="text-sm text-muted-foreground">
                  高清无水印修仙世界地图，按作品与类型分类，支持筛选下载
                </p>
                <span className="text-xs text-xian-cyan flex items-center gap-1 mt-1">
                  查看详情 <ChevronRight className="h-3 w-3" />
                </span>
              </CardContent>
            </Card>
          </Link>

          <Link href="/wiki" className="group">
            <Card className="xian-card h-full bg-card/80 hover:bg-accent/50 transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-xian-purple/20 to-xian-amber/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Scroll className="h-7 w-7 text-xian-purple" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">修仙设定百科</h3>
                <p className="text-sm text-muted-foreground">
                  灵根、天道、天劫、宗门……通用修仙设定知识库，一网打尽
                </p>
                <span className="text-xs text-xian-purple flex items-center gap-1 mt-1">
                  查看详情 <ChevronRight className="h-3 w-3" />
                </span>
              </CardContent>
            </Card>
          </Link>

          <Link href="/community" className="group">
            <Card className="xian-card h-full bg-card/80 hover:bg-accent/50 transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-xian-amber/20 to-xian-gold/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageSquarePlus className="h-7 w-7 text-xian-amber" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">资料杂谈&投稿</h3>
                <p className="text-sm text-muted-foreground">
                  原创解析、体系对比、同人创作，开放投稿通道共建共享
                </p>
                <span className="text-xs text-xian-amber flex items-center gap-1 mt-1">
                  查看详情 <ChevronRight className="h-3 w-3" />
                </span>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>

      {/* ========== 热门推荐 ========== */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-3 mb-6">
          <Flame className="h-6 w-6 text-xian-amber" />
          <h2 className="text-2xl font-bold font-serif text-xian-gold">热门小说</h2>
          <Link href="/realms" className="ml-auto text-sm text-muted-foreground hover:text-xian-gold flex items-center gap-1">
            查看全部 <ArrowRight className="h-3 w-3" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {popularNovels.map((novel) => {
            const realmData = realmSystems.find((r) => r.novelId === novel.id);
            return (
              <Link key={novel.id} href={`/realms/${novel.id}`}>
                <Card className="xian-card h-full bg-card/80 hover:bg-accent/50 transition-all duration-300 hover:-translate-y-0.5">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      {/* 封面 */}
                      <div className="h-20 w-14 rounded-md overflow-hidden flex-shrink-0 bg-gradient-to-br from-xian-purple/30 to-xian-gold/20">
                        {novel.cover ? (
                          <img src={novel.cover} alt={novel.title} className="h-full w-full object-cover" loading="lazy" />
                        ) : (
                          <div className="h-full w-full flex items-center justify-center">
                            <BookOpen className="h-6 w-6 text-xian-gold/40" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-base font-semibold text-foreground truncate">
                            {novel.title}
                          </h3>
                          {novel.popularity >= 10 && (
                            <Star className="h-4 w-4 text-xian-amber fill-xian-amber flex-shrink-0" />
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground mb-2">
                          {novel.author} · {novel.category}
                        </p>
                        <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                          {novel.description}
                        </p>
                        <div className="flex items-center gap-2 flex-wrap">
                          <Badge variant="secondary" className="text-xs bg-xian-gold/10 text-xian-gold border-xian-gold/20">
                            {realmData ? `${realmData.levels.length} 大境界` : '境界待整理'}
                          </Badge>
                          <Badge variant="secondary" className="text-xs bg-xian-cyan/10 text-xian-cyan border-xian-cyan/20">
                            {novel.mapCount} 张地图
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="xian-divider" />
      </div>

      {/* ========== 热门地图 & 更新公告 双栏 ========== */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* 热门地图 */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-3 mb-6">
              <Download className="h-6 w-6 text-xian-cyan" />
              <h2 className="text-2xl font-bold font-serif text-xian-gold">热门地图</h2>
              <Link href="/maps" className="ml-auto text-sm text-muted-foreground hover:text-xian-cyan flex items-center gap-1">
                查看全部 <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {recentMaps.map((map) => (
                <Link key={map.id} href={`/maps/${map.id}`}>
                  <Card className="xian-card bg-card/80 hover:bg-accent/50 transition-all duration-300 hover:-translate-y-0.5">
                    <CardContent className="p-4">
                      {/* 预览图 */}
                      <div className="mb-3">
                        <MapCardImage src={map.previewUrl} alt={map.title} variant="compact" />
                      </div>
                      <h4 className="text-sm font-semibold text-foreground mb-1 line-clamp-1">
                        {map.title}
                      </h4>
                      <p className="text-xs text-muted-foreground line-clamp-2 mb-2">
                        {map.description}
                      </p>
                      <div className="flex items-center gap-2 flex-wrap">
                        <Badge variant="secondary" className="text-[10px] bg-xian-cyan/10 text-xian-cyan border-xian-cyan/20">
                          {map.type}
                        </Badge>
                        <span className="text-[10px] text-muted-foreground">
                          {map.resolution}
                        </span>
                        <span className="text-[10px] text-muted-foreground">
                          {map.downloads.toLocaleString()} 次下载
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          {/* 更新公告 */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Megaphone className="h-6 w-6 text-xian-amber" />
              <h2 className="text-2xl font-bold font-serif text-xian-gold">更新公告</h2>
            </div>
            <Card className="xian-card bg-card/80">
              <CardContent className="p-5">
                <div className="space-y-4">
                  {announcements.map((ann) => (
                    <div key={ann.id} className="group">
                      <div className="flex items-start gap-3">
                        <div
                          className={`mt-1.5 h-2 w-2 rounded-full flex-shrink-0 ${
                            ann.type === 'update'
                              ? 'bg-xian-cyan'
                              : ann.type === 'event'
                              ? 'bg-xian-amber'
                              : 'bg-xian-gold'
                          }`}
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <h4 className="text-sm font-medium text-foreground group-hover:text-xian-gold transition-colors">
                              {ann.title}
                            </h4>
                            {ann.isNew && (
                              <Badge className="text-[10px] px-1.5 py-0 bg-red-500/20 text-red-400 border-red-500/30">
                                NEW
                              </Badge>
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                            {ann.content}
                          </p>
                          <div className="flex items-center gap-1 mt-1.5 text-[10px] text-muted-foreground">
                            <Clock className="h-3 w-3" />
                            {ann.date}
                          </div>
                        </div>
                      </div>
                      <Separator className="mt-4 bg-border/50" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* 最新文章 */}
            <div className="mt-6">
              <div className="flex items-center gap-3 mb-4">
                <Scroll className="h-5 w-5 text-xian-amber" />
                <h3 className="text-lg font-semibold font-serif text-xian-gold">最新文章</h3>
              </div>
              <Card className="xian-card bg-card/80">
                <CardContent className="p-4">
                  <div className="space-y-3">
                    {recentArticles.slice(0, 3).map((article) => (
                      <Link key={article.id} href={`/community/${article.id}`}>
                        <div className="group py-2">
                          <h4 className="text-sm text-foreground group-hover:text-xian-gold transition-colors line-clamp-1">
                            {article.title}
                          </h4>
                          <div className="flex items-center gap-2 mt-1 text-[10px] text-muted-foreground">
                            <span>{article.author}</span>
                            <span>·</span>
                            <span>{article.publishDate}</span>
                            <span>·</span>
                            <span>{article.views.toLocaleString()} 阅读</span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 站点宗旨 ========== */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <Card className="xian-card bg-card/60 xian-glow">
          <CardContent className="p-8 sm:p-10 text-center">
            <h2 className="text-2xl font-bold font-serif text-xian-gold mb-4">
              关于诸天图鉴阁
            </h2>
            <div className="xian-divider mb-6 max-w-xs mx-auto" />
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-6">
              诸天图鉴阁是一个纯公益性质的网文资料站，致力于为修仙小说爱好者提供最全面、最准确的境界体系解析、世界地图资源与修仙设定百科。
              所有内容均为原创整理或合规同人素材，明确标注来源，严格遵守版权规范。
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-xian-gold mb-1">{novels.length}+</div>
                <div className="text-xs text-muted-foreground">收录小说</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-xian-gold mb-1">{worldMaps.length}</div>
                <div className="text-xs text-muted-foreground">地图资源</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-xian-gold mb-1">{articles.length}</div>
                <div className="text-xs text-muted-foreground">原创文章</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
