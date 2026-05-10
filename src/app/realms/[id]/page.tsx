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

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const novel = getNovelById(id);
  if (!novel) return { title: '未找到' };
  return {
    title: `${novel.title} 境界体系详解`,
    description: `${novel.title}修炼境界体系完整解析，含层级表、特色解析与跨体系对比。`,
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
      <div className="xian-bg-pattern min-h-[50vh] flex items-center justify-center">
        <Card className="xian-card bg-card/80 max-w-md">
          <CardContent className="p-8 text-center">
            <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">境界体系整理中</h2>
            <p className="text-muted-foreground mb-4">
              {novel.title}的境界体系正在整理中，敬请期待。
            </p>
            <Link href="/realms">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                返回境界大全
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="xian-bg-pattern">
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
