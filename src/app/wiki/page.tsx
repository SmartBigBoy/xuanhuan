import Link from 'next/link';
import { Scroll, ChevronRight, BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { wikiEntries, getWikiEntryById } from '@/data/realms';
import { novels } from '@/data/novels';

export const metadata = {
  title: '修仙设定百科',
  description: '灵根、天道、天劫、宗门……通用修仙设定知识库，一网打尽。',
};

export default function WikiPage() {
  const categories = [...new Set(wikiEntries.map((e) => e.category))];

  return (
    <div className="xian-bg-pattern">
      {/* 页头 */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-xian-purple/10 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-xian-purple/20 bg-xian-purple/5 mb-4">
            <Scroll className="h-4 w-4 text-xian-purple" />
            <span className="text-sm text-xian-purple">通用设定</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold font-serif text-xian-gold xian-text-glow mb-3">
            修仙设定百科
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            灵根、天道、天劫、丹药、法宝、宗门……修仙小说通用设定知识库，深入浅出，一网打尽
          </p>
        </div>
      </section>

      {/* 百科条目 */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <div className="space-y-8">
          {categories.map((cat) => {
            const catEntries = wikiEntries.filter((e) => e.category === cat);
            return (
              <div key={cat}>
                <h2 className="text-xl font-bold font-serif text-xian-gold mb-4 flex items-center gap-2">
                  <div className="h-1 w-6 bg-gradient-to-r from-xian-purple to-transparent rounded" />
                  {cat}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {catEntries.map((entry) => (
                    <Link key={entry.id} href={`/wiki/${entry.id}`}>
                      <Card className="xian-card h-full bg-card/80 hover:bg-accent/50 transition-all duration-300 hover:-translate-y-0.5">
                        <CardContent className="p-5">
                          <h3 className="text-lg font-semibold text-foreground mb-2 font-serif">
                            {entry.title}
                          </h3>
                          <p className="text-sm text-muted-foreground line-clamp-3 mb-3">
                            {entry.content}
                          </p>
                          <div className="flex items-center gap-2 flex-wrap">
                            <Badge
                              variant="secondary"
                              className="text-[11px] bg-xian-purple/10 text-xian-purple border-xian-purple/20"
                            >
                              {entry.category}
                            </Badge>
                            {entry.relatedNovels.slice(0, 3).map((novelId) => {
                              const novel = novels.find((n) => n.id === novelId);
                              return novel ? (
                                <Badge
                                  key={novelId}
                                  variant="outline"
                                  className="text-[10px] border-border text-muted-foreground"
                                >
                                  {novel.title}
                                </Badge>
                              ) : null;
                            })}
                          </div>
                          <div className="flex items-center justify-end mt-3 text-xs text-xian-purple">
                            查看详情 <ChevronRight className="h-3 w-3" />
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
