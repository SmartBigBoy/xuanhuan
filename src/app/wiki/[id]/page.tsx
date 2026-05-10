import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Scroll, BookOpen, Info } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { getWikiEntryById } from '@/data/realms';
import { novels } from '@/data/novels';

interface Props {
  params: Promise<{ id: string }>;
}

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const entry = getWikiEntryById(id);
  if (!entry) return { title: '未找到' };
  return {
    title: entry.title,
    description: entry.summary,
  };
}

export default async function WikiDetailPage({ params }: Props) {
  const { id } = await params;
  const entry = getWikiEntryById(id);

  if (!entry) {
    notFound();
  }

  // 简单的 Markdown 渲染（将内容中的标题、列表、表格等转为 HTML）
  const renderContent = (text: string) => {
    const lines = text.split('\n');
    const htmlParts: string[] = [];
    let inTable = false;
    let tableRows: string[] = [];

    const closeTable = () => {
      if (tableRows.length > 0) {
        const headerCells = tableRows[0]
          .split('|')
          .filter((c) => c.trim())
          .map((c) => `<th>${c.trim()}</th>`)
          .join('');
        const bodyRows = tableRows
          .slice(1)
          .filter((r) => !r.match(/^\|[\s-|]+\|$/))
          .map((row) => {
            const cells = row
              .split('|')
              .filter((c) => c.trim())
              .map((c) => `<td>${c.trim()}</td>`)
              .join('');
            return `<tr>${cells}</tr>`;
          })
          .join('');
        htmlParts.push(
          `<table class="xian-table"><thead><tr>${headerCells}</tr></thead><tbody>${bodyRows}</tbody></table>`
        );
        tableRows = [];
        inTable = false;
      }
    };

    for (const line of lines) {
      if (line.includes('|') && line.trim().startsWith('|')) {
        if (!inTable) {
          closeTable();
          inTable = true;
        }
        tableRows.push(line);
        continue;
      } else if (inTable) {
        closeTable();
      }

      if (line.startsWith('### ')) {
        htmlParts.push(`<h3 class="text-lg font-semibold font-serif text-xian-gold mt-6 mb-3">${line.slice(4)}</h3>`);
      } else if (line.startsWith('## ')) {
        htmlParts.push(`<h2 class="text-xl font-bold font-serif text-xian-gold mt-8 mb-4 pb-2 border-b border-xian-gold/20">${line.slice(3)}</h2>`);
      } else if (line.startsWith('- ')) {
        htmlParts.push(`<li class="text-sm text-muted-foreground ml-4 mb-1">${line.slice(2)}</li>`);
      } else if (line.match(/^\d+\.\s/)) {
        const content = line.replace(/^\d+\.\s/, '');
        htmlParts.push(`<li class="text-sm text-muted-foreground ml-4 mb-1 list-decimal">${content}</li>`);
      } else if (line.trim() === '') {
        htmlParts.push('<div class="h-2"></div>');
      } else {
        htmlParts.push(`<p class="text-sm text-muted-foreground leading-relaxed mb-2">${line}</p>`);
      }
    }
    closeTable();

    return htmlParts.join('\n');
  };

  return (
    <div className="xian-bg-pattern">
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
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-xian-purple/20">
            <Scroll className="h-5 w-5 text-xian-purple" />
          </div>
          <div>
            <Badge variant="secondary" className="text-xs bg-xian-purple/10 text-xian-purple border-xian-purple/20 mb-1">
              {entry.category}
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

      {/* 正文 */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8">
        <Card className="xian-card bg-card/80">
          <CardContent className="p-6 sm:p-8 prose-xian">
            <div dangerouslySetInnerHTML={{ __html: renderContent(entry.content) }} />
          </CardContent>
        </Card>
      </section>

      {/* 关联小说 */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pb-8">
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
