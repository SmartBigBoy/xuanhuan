import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  BookOpen,
  Star,
  Layers,
  GitCompare,
  Info,
  Zap,
  Clock,
  ChevronUp,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { getNovelById } from '@/data/novels';
import { getRealmSystemByNovelId } from '@/data/realms';
import { RealmDetailJsonLd, BreadcrumbJsonLd } from '@/components/json-ld';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const novel = getNovelById(id);
  if (!novel) return { title: '未找到' };
  return {
    title: `${novel.title} 境界体系详解`,
    description: `${novel.title}修炼境界体系完整解析，含${novel.realmCount}大境界层级表、特色解析与跨体系对比。${novel.author}著。`,
    keywords: [novel.title, `${novel.title}境界`, `${novel.title}修炼等级`, novel.author, '修仙境界'],
    openGraph: {
      title: `${novel.title} 境界体系详解 | 诸天图鉴阁`,
      description: `${novel.title}修炼境界体系完整解析，含层级表与特色解析`,
    },
  };
}

export default async function RealmDetailPage({ params }: Props) {
  const { id } = await params;
  const novel = getNovelById(id);
  const realmSystem = getRealmSystemByNovelId(id);

  if (!novel) {
    notFound();
  }

  if (!realmSystem) {
    return (
      <div className="xian-bg-pattern min-h-screen">
        {/* 页头 */}
        <div className="relative bg-xian-deep/80 border-b border-xian-gold/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
            <Link href="/realms" className="inline-flex items-center text-sm text-muted-foreground hover:text-xian-gold mb-6">
              <ArrowLeft className="mr-1 h-4 w-4" />
              返回境界大全
            </Link>
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0">
                {novel.cover ? (
                  <img src={novel.cover} alt={novel.title} className="w-36 h-48 rounded-lg object-cover border-2 border-xian-gold/20 shadow-lg" />
                ) : (
                  <div className="w-36 h-48 rounded-lg bg-gradient-to-br from-xian-gold/20 to-xian-purple/20 border-2 border-xian-gold/20 flex items-center justify-center">
                    <BookOpen className="h-12 w-12 text-xian-gold/50" />
                  </div>
                )}
              </div>
              <div className="flex-1">
                <h1 className="text-3xl font-serif font-bold text-xian-gold mb-2">{novel.title}</h1>
                <p className="text-muted-foreground mb-3">{novel.author} · {novel.category}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {novel.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 text-xs rounded-full border border-xian-cyan/20 text-xian-cyan bg-xian-cyan/5">{tag}</span>
                  ))}
                </div>
                <Card className="bg-xian-deep/50 border-xian-amber/10 inline-block">
                  <CardContent className="p-3 text-center">
                    <BookOpen className="h-6 w-6 text-xian-amber mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">境界体系整理中</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* 故事概述 */}
        {novel.summary && (
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
            <section>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-xian-gold/10 border border-xian-gold/20">
                  <BookOpen className="h-4 w-4 text-xian-gold" />
                </div>
                <h2 className="text-xl font-serif font-bold text-xian-gold">故事概述与阅读评价</h2>
              </div>
              <Card className="xian-card bg-card/80">
                <CardContent className="p-6 space-y-4">
                  {novel.summary.split('\n\n').map((paragraph, idx) => {
                    if (paragraph.startsWith('【阅读评价】')) {
                      return (
                        <div key={idx} className="pt-4 border-t border-xian-gold/10">
                          <div className="flex items-center gap-2 mb-3">
                            <Star className="h-4 w-4 text-xian-gold" />
                            <span className="font-serif font-semibold text-xian-gold text-sm">阅读评价</span>
                          </div>
                          <div className="text-sm text-muted-foreground leading-relaxed space-y-1.5">
                            {paragraph.replace('【阅读评价】', '').split('。').filter((s: string) => s.trim()).map((sentence: string, sIdx: number) => (
                              <p key={sIdx} className="flex items-start gap-2">
                                <span className="inline-block w-1.5 h-1.5 rounded-full bg-xian-gold/40 mt-2 flex-shrink-0" />
                                <span>{sentence.trim()}。</span>
                              </p>
                            ))}
                          </div>
                        </div>
                      );
                    }
                    return (
                      <p key={idx} className="text-sm text-foreground/80 leading-relaxed">{paragraph}</p>
                    );
                  })}
                </CardContent>
              </Card>
            </section>
          </div>
        )}

        {/* 免责提示 */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
          <Card className="bg-xian-deep/50 border-xian-amber/10">
            <CardContent className="p-4">
              <div className="flex items-start gap-2">
                <Info className="h-4 w-4 text-xian-amber mt-0.5 flex-shrink-0" />
                <p className="text-xs text-muted-foreground">
                  以上内容为基于原著的原创整理，仅供学习交流之用。原著版权归作者{novel.author}及出版社所有。
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="xian-bg-pattern">
      <RealmDetailJsonLd novelId={id} />
      <BreadcrumbJsonLd items={[{ name: '首页', href: '/' }, { name: '修仙境界', href: '/realms' }, { name: novel.title, href: `/realms/${id}` }]} />
      {/* 页头 */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-xian-purple/10 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <Link
            href="/realms"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-xian-gold transition-colors mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            返回境界大全
          </Link>
          <div className="flex items-start gap-6">
            {/* 封面 */}
            <div className="hidden sm:flex h-32 w-20 rounded-lg overflow-hidden flex-shrink-0 bg-gradient-to-br from-xian-purple/30 to-xian-gold/20">
              {novel.cover ? (
                <img src={novel.cover} alt={novel.title} className="h-full w-full object-cover" />
              ) : (
                <div className="h-full w-full flex items-center justify-center">
                  <BookOpen className="h-10 w-10 text-xian-gold/40" />
                </div>
              )}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold font-serif text-xian-gold xian-text-glow">
                  {novel.title}
                </h1>
                {novel.popularity >= 10 && (
                  <Star className="h-5 w-5 text-xian-amber fill-xian-amber" />
                )}
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                {novel.author} · {novel.category} · {realmSystem.levels.length} 大境界
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {realmSystem.overview}
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="xian-divider" />
      </div>

      {/* 体系特色 */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <Card className="xian-card bg-card/80 xian-glow">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="h-5 w-5 text-xian-amber" />
              <h2 className="text-lg font-bold font-serif text-xian-gold">
                体系特色
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {realmSystem.feature}
            </p>
          </CardContent>
        </Card>
      </section>

      {/* 境界层级表 */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-8">
        <div className="flex items-center gap-2 mb-6">
          <Layers className="h-5 w-5 text-xian-gold" />
          <h2 className="text-xl font-bold font-serif text-xian-gold">
            境界层级表
          </h2>
          <span className="text-sm text-muted-foreground">
            （共 {realmSystem.levels.length} 大境界）
          </span>
        </div>

        <div className="space-y-4">
          {realmSystem.levels.map((level) => (
            <Card key={level.order} className="xian-card bg-card/80">
              <CardContent className="p-5 sm:p-6">
                {/* 境界标题行 */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-gradient-to-br from-xian-gold/20 to-xian-amber/20 text-sm font-bold text-xian-gold flex-shrink-0">
                    {level.order}
                  </div>
                  <h3 className="text-lg font-bold text-foreground font-serif">
                    {level.name}
                  </h3>
                  {level.alias && (
                    <Badge
                      variant="secondary"
                      className="text-xs bg-xian-amber/10 text-xian-amber border-xian-amber/20"
                    >
                      别名：{level.alias}
                    </Badge>
                  )}
                  {level.lifespan && (
                    <div className="ml-auto flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      寿命：{level.lifespan}
                    </div>
                  )}
                </div>

                {/* 描述 */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 pl-11">
                  {level.description}
                </p>

                {/* 核心能力 */}
                <div className="pl-11 space-y-3">
                  <div>
                    <span className="text-xs font-semibold text-xian-gold mb-2 block">
                      核心能力
                    </span>
                    <div className="flex items-center gap-2 flex-wrap">
                      {level.keyAbilities.map((ability) => (
                        <Badge
                          key={ability}
                          variant="secondary"
                          className="text-xs bg-xian-cyan/10 text-xian-cyan border-xian-cyan/20"
                        >
                          {ability}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* 细分境界 */}
                  {level.subdivisions && level.subdivisions.length > 0 && (
                    <div>
                      <span className="text-xs font-semibold text-xian-purple mb-2 block">
                        细分境界
                      </span>
                      <div className="flex items-center gap-1.5 flex-wrap">
                        {level.subdivisions.map((sub, idx) => (
                          <span key={sub} className="flex items-center gap-1.5">
                            <Badge
                              variant="outline"
                              className="text-xs border-border text-muted-foreground"
                            >
                              {sub}
                            </Badge>
                            {idx < level.subdivisions!.length - 1 && (
                              <ChevronUp className="h-3 w-3 text-muted-foreground rotate-90" />
                            )}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* 突破条件 */}
                  {level.breakthroughCondition && (
                    <div>
                      <span className="text-xs font-semibold text-xian-amber mb-1 block">
                        突破条件
                      </span>
                      <p className="text-xs text-muted-foreground">
                        {level.breakthroughCondition}
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 跨体系对比 */}
      {realmSystem.crossComparison && (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="xian-divider" />
          </div>
          <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 pb-16">
            <div className="flex items-center gap-2 mb-4">
              <GitCompare className="h-5 w-5 text-xian-purple" />
              <h2 className="text-xl font-bold font-serif text-xian-gold">
                {realmSystem.crossComparison.title}
              </h2>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              {realmSystem.crossComparison.description}
            </p>
            <Card className="xian-card bg-card/80 overflow-hidden">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm xian-table">
                    <thead>
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold">
                          {novel.title}
                        </th>
                        <th className="px-4 py-3 text-left font-semibold">
                          对应境界
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {realmSystem.crossComparison.mappings.map((mapping, idx) => (
                        <tr key={idx} className="border-b border-border/50">
                          <td className="px-4 py-2.5 text-foreground">
                            {mapping.level}
                          </td>
                          <td className="px-4 py-2.5 text-xian-cyan">
                            {mapping.equivalent}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
            <p className="text-xs text-muted-foreground mt-3 italic">
              * 对比仅供参考，不同小说的世界观与战力体系各有侧重，任何对比都存在局限性。
            </p>
          </section>
        </>
      )}

      {/* 故事概述与阅读评价 */}
      {novel.summary && (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-6">
          <section>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-xian-gold/10 border border-xian-gold/20">
                <BookOpen className="h-4 w-4 text-xian-gold" />
              </div>
              <h2 className="text-xl font-serif font-bold text-xian-gold">
                故事概述与阅读评价
              </h2>
            </div>
            <Card className="xian-card bg-card/80">
              <CardContent className="p-6 space-y-4">
                {novel.summary.split('\n\n').map((paragraph, idx) => {
                  if (paragraph.startsWith('【阅读评价】')) {
                    return (
                      <div key={idx} className="pt-4 border-t border-xian-gold/10">
                        <div className="flex items-center gap-2 mb-3">
                          <Star className="h-4 w-4 text-xian-gold" />
                          <span className="font-serif font-semibold text-xian-gold text-sm">阅读评价</span>
                        </div>
                        <div className="text-sm text-muted-foreground leading-relaxed space-y-1.5">
                          {paragraph.replace('【阅读评价】', '').split('。').filter((s: string) => s.trim()).map((sentence: string, sIdx: number) => (
                            <p key={sIdx} className="flex items-start gap-2">
                              <span className="inline-block w-1.5 h-1.5 rounded-full bg-xian-gold/40 mt-2 flex-shrink-0" />
                              <span>{sentence.trim()}。</span>
                            </p>
                          ))}
                        </div>
                      </div>
                    );
                  }
                  return (
                    <p key={idx} className="text-sm text-foreground/80 leading-relaxed">
                      {paragraph}
                    </p>
                  );
                })}
              </CardContent>
            </Card>
          </section>
        </div>
      )}

      {/* 免责提示 */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
        <Card className="bg-xian-deep/50 border-xian-amber/10">
          <CardContent className="p-4">
            <div className="flex items-start gap-2">
              <Info className="h-4 w-4 text-xian-amber mt-0.5 flex-shrink-0" />
              <p className="text-xs text-muted-foreground">
                以上境界体系资料为基于原著的原创整理，仅供学习交流之用。原著版权归作者{novel.author}及出版社所有。
                如有疏漏或错误，欢迎通过投稿专区反馈指正。
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
