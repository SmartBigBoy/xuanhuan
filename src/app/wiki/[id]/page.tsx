import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Scroll, BookOpen, Info } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getWikiEntryById } from '@/data/realms';
import { novels } from '@/data/novels';
import { WikiDetailJsonLd, BreadcrumbJsonLd } from '@/components/json-ld';

import { wikiEntries } from '@/data/realms';

interface Props {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return wikiEntries.map((e) => ({ id: e.id }));
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const entry = getWikiEntryById(id);
  if (!entry) return { title: '未找到' };
  return {
    title: entry.title,
    description: entry.summary,
    keywords: [entry.title, entry.category, '修仙设定', '修仙百科'],
    openGraph: {
      title: `${entry.title} | 诸天图鉴阁`,
      description: entry.summary,
    },
  };
}

export default async function WikiDetailPage({ params }: Props) {
  const { id } = await params;
  const entry = getWikiEntryById(id);

  if (!entry) {
    notFound();
  }

  return (
    <div className="xian-bg-pattern">
      <WikiDetailJsonLd entryId={id} />
      <BreadcrumbJsonLd items={[{ name: '首页', href: '/' }, { name: '设定百科', href: '/wiki' }, { name: entry.title, href: `/wiki/${id}` }]} />
      {/* 页头 */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
        <Link
          href="/wiki"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-xian-purple transition-colors mb-4"
        >
          <ArrowLeft className="h-4 w-4" />
          返回设定百科
        </Link>

        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-xian-purple/20 text-2xl">
            {entry.titleEmoji}
          </div>
          <div>
            <Badge
              variant="secondary"
              className={`text-xs ${entry.categoryColor} bg-current/10 border-current/20 mb-1`}
              style={{
                backgroundColor: undefined,
              }}
            >
              <span className={entry.categoryColor}>{entry.category}</span>
            </Badge>
            <h1 className="text-3xl font-bold font-serif text-xian-gold xian-text-glow">
              {entry.title}
            </h1>
          </div>
        </div>
        <p className="text-muted-foreground leading-relaxed">{entry.summary}</p>
      </section>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="xian-divider" />
      </div>

      {/* 概述 */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-6">
        <Card className="xian-card bg-card/80">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-3">
              <Scroll className="h-5 w-5 text-xian-gold" />
              <h2 className="text-lg font-bold font-serif text-xian-gold">概述</h2>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{entry.overview}</p>
          </CardContent>
        </Card>
      </section>

      {/* 分类内容 */}
      {entry.sections.map((section, sIdx) => (
        <section key={sIdx} className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pb-6">
          <Card className={`border ${section.borderColor} ${section.bgColor} bg-card/60`}>
            <CardContent className="p-6">
              {/* 分类标题 */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">{section.emoji}</span>
                <h2 className={`text-lg font-bold font-serif ${section.color}`}>
                  {section.title}
                </h2>
              </div>
              {section.description && (
                <p className="text-xs text-muted-foreground mb-4 pl-8">{section.description}</p>
              )}

              {/* 条目列表 */}
              <div className="space-y-3">
                {section.items.map((item, iIdx) => (
                  <div
                    key={iIdx}
                    className={`rounded-lg border ${section.borderColor} bg-card/40 p-3 sm:p-4 hover:bg-card/70 transition-colors`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-lg flex-shrink-0 mt-0.5">{item.emoji}</span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className={`font-bold text-sm ${section.color}`}>{item.name}</span>
                          {item.source && (
                            <Badge
                              variant="outline"
                              className="text-[10px] px-1.5 py-0 border-xian-gold/30 text-xian-gold/70"
                            >
                              {item.source}
                            </Badge>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed mt-1">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      ))}

      {/* 关联小说 */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pb-8 pt-2">
        <h3 className="text-lg font-semibold font-serif text-xian-gold mb-4">
          相关小说
        </h3>
        <div className="flex flex-wrap gap-3">
          {entry.relatedNovels.map((novelId) => {
            const novel = novels.find((n) => n.id === novelId);
            if (!novel) return null;
            return (
              <Link key={novelId} href={`/realms/${novelId}`}>
                <Card className="xian-card bg-card/80 hover:bg-accent/50 transition-all">
                  <CardContent className="p-3 flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-xian-gold" />
                    <span className="text-sm text-foreground">{novel.title}</span>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      {/* 免责 */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pb-12">
        <Card className="bg-xian-deep/50 border-xian-amber/10">
          <CardContent className="p-4">
            <div className="flex items-start gap-2">
              <Info className="h-4 w-4 text-xian-amber mt-0.5 flex-shrink-0" />
              <p className="text-xs text-muted-foreground">
                本百科条目为原创整理，基于多部修仙小说的通用设定综合编写，仅供参考学习。
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
