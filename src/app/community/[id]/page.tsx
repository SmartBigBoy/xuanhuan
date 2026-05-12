import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  BookOpen,
  Eye,
  Calendar,
  User,
  Tag,
  Info,
  MessageSquarePlus,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getArticleById } from '@/data/articles';
import { BreadcrumbJsonLd } from '@/components/json-ld';

interface Props {
  params: Promise<{ id: string }>;
}

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const article = getArticleById(id);
  if (!article) return { title: '未找到' };
  return {
    title: article.title,
    description: article.summary,
    keywords: [article.title, article.category, '修仙杂谈', '网文分析'],
    openGraph: {
      title: `${article.title} | 诸天图鉴阁`,
      description: article.summary,
    },
  };
}

export default async function ArticleDetailPage({ params }: Props) {
  const { id } = await params;
  const article = getArticleById(id);

  if (!article) {
    notFound();
  }

  // 简单的 Markdown 渲染
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
          `<div class="overflow-x-auto"><table class="xian-table"><thead><tr>${headerCells}</tr></thead><tbody>${bodyRows}</tbody></table></div>`
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
        htmlParts.push(
          `<h3 class="text-lg font-semibold font-serif text-xian-gold mt-8 mb-3">${line.slice(4)}</h3>`
        );
      } else if (line.startsWith('## ')) {
        htmlParts.push(
          `<h2 class="text-xl font-bold font-serif text-xian-gold mt-10 mb-4 pb-2 border-b border-xian-gold/20">${line.slice(3)}</h2>`
        );
      } else if (line.startsWith('---')) {
        htmlParts.push('<hr class="xian-divider my-6" />');
      } else if (line.startsWith('- ')) {
        htmlParts.push(
          `<li class="text-sm text-muted-foreground ml-4 mb-1">${line.slice(2)}</li>`
        );
      } else if (line.match(/^\d+\.\s/)) {
        const content = line.replace(/^\d+\.\s/, '');
        htmlParts.push(
          `<li class="text-sm text-muted-foreground ml-4 mb-1 list-decimal">${content}</li>`
        );
      } else if (line.trim() === '') {
        htmlParts.push('<div class="h-2"></div>');
      } else {
        htmlParts.push(
          `<p class="text-sm text-muted-foreground leading-relaxed mb-2">${line}</p>`
        );
      }
    }
    closeTable();

    return htmlParts.join('\n');
  };

  return (
    <div className="xian-bg-pattern">
      <BreadcrumbJsonLd items={[{ name: '首页', href: '/' }, { name: '资料杂谈', href: '/community' }, { name: article.title, href: `/community/${id}` }]} />
      {/* 页头 */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
        <Link
          href="/community"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-xian-amber transition-colors mb-4"
        >
          <ArrowLeft className="h-4 w-4" />
          返回文章列表
        </Link>

        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <Badge
            variant="secondary"
            className="text-xs bg-xian-amber/10 text-xian-amber border-xian-amber/20"
          >
            {article.category}
          </Badge>
          {article.isOriginal && (
            <Badge variant="secondary" className="text-xs bg-xian-gold/10 text-xian-gold border-xian-gold/20">
              原创
            </Badge>
          )}
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold font-serif text-xian-gold xian-text-glow mb-4">
          {article.title}
        </h1>

        <div className="flex items-center gap-4 text-sm text-muted-foreground flex-wrap">
          <span className="flex items-center gap-1">
            <User className="h-4 w-4" />
            {article.author}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            {article.publishDate}
          </span>
          <span className="flex items-center gap-1">
            <Eye className="h-4 w-4" />
            {article.views.toLocaleString()} 阅读
          </span>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="xian-divider" />
      </div>

      {/* 正文 */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8">
        <Card className="xian-card bg-card/80">
          <CardContent className="p-6 sm:p-8 prose-xian">
            <div dangerouslySetInnerHTML={{ __html: renderContent(article.content) }} />
          </CardContent>
        </Card>
      </section>

      {/* 标签 */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pb-8">
        <div className="flex items-center gap-2 flex-wrap">
          <Tag className="h-4 w-4 text-muted-foreground" />
          {article.tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="text-xs border-border text-muted-foreground"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </section>

      {/* 互动提示 */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pb-12">
        <Card className="bg-xian-deep/50 border-xian-amber/10">
          <CardContent className="p-4 flex items-start gap-3">
            <MessageSquarePlus className="h-5 w-5 text-xian-amber mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm text-foreground mb-1">有想法？欢迎投稿分享！</p>
              <p className="text-xs text-muted-foreground">
                如果你也有原创的修仙小说解析、体系对比或同人创作，欢迎通过投稿通道提交，
                与更多道友分享你的见解。
              </p>
              <Link
                href="/community/submit-guide"
                className="text-xs text-xian-amber hover:underline mt-1 inline-block"
              >
                查看投稿指南 →
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
