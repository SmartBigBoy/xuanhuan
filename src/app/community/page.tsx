'use client';

import Link from 'next/link';
import { useState, useMemo } from 'react';
import {
  MessageSquarePlus,
  ChevronRight,
  Eye,
  Calendar,
  User,
  Filter,
  PenSquare,
  BookOpen,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { articles, articleCategories, type ArticleCategory } from '@/data/articles';

export default function CommunityPage() {
  const [selectedCategory, setSelectedCategory] = useState<ArticleCategory | 'all'>('all');

  const filteredArticles = useMemo(() => {
    if (selectedCategory === 'all') return articles;
    return articles.filter((a) => a.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="xian-bg-pattern">
      {/* 页头 */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-xian-amber/8 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-xian-amber/20 bg-xian-amber/5 mb-4">
            <MessageSquarePlus className="h-4 w-4 text-xian-amber" />
            <span className="text-sm text-xian-amber">共建共享</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold font-serif text-xian-gold xian-text-glow mb-3">
            资料杂谈 & 投稿专区
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            原创解析、体系对比、世界观考据、同人创作，开放投稿通道，欢迎共建共享
          </p>
        </div>
      </section>

      {/* 投稿入口 */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8">
        <Card className="xian-card bg-card/80 xian-glow">
          <CardContent className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-xian-amber/20 to-xian-gold/20 flex items-center justify-center flex-shrink-0">
                <PenSquare className="h-6 w-6 text-xian-amber" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  欢迎投稿，共建资料库
                </h3>
                <p className="text-sm text-muted-foreground">
                  境界解析、世界观考据、体系对比、同人创作……你的原创内容，我们帮你传播
                </p>
              </div>
            </div>
            <Link href="/community/submit-guide">
              <Button className="bg-gradient-to-r from-xian-amber to-xian-gold text-xian-deep hover:opacity-90 font-semibold whitespace-nowrap">
                <PenSquare className="mr-2 h-4 w-4" />
                投稿指南
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>

      {/* 分类筛选 */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex items-center gap-2 flex-wrap">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <Button
            size="sm"
            variant={selectedCategory === 'all' ? 'default' : 'outline'}
            className={
              selectedCategory === 'all'
                ? 'bg-xian-amber/20 text-xian-amber border-xian-amber/30 hover:bg-xian-amber/30'
                : 'border-border text-muted-foreground hover:text-foreground'
            }
            onClick={() => setSelectedCategory('all')}
          >
            全部分类
          </Button>
          {articleCategories.map((cat) => (
            <Button
              key={cat}
              size="sm"
              variant={selectedCategory === cat ? 'default' : 'outline'}
              className={
                selectedCategory === cat
                  ? 'bg-xian-amber/20 text-xian-amber border-xian-amber/30 hover:bg-xian-amber/30'
                  : 'border-border text-muted-foreground hover:text-foreground'
              }
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </Button>
          ))}
        </div>
      </section>

      {/* 文章列表 */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        {filteredArticles.length === 0 ? (
          <div className="text-center py-16">
            <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">暂无该分类的文章</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredArticles.map((article) => (
              <Link key={article.id} href={`/community/${article.id}`}>
                <Card className="xian-card bg-card/80 hover:bg-accent/50 transition-all duration-300 hover:-translate-y-0.5">
                  <CardContent className="p-5 sm:p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                          <Badge
                            variant="secondary"
                            className="text-[11px] bg-xian-amber/10 text-xian-amber border-xian-amber/20"
                          >
                            {article.category}
                          </Badge>
                          {article.isOriginal && (
                            <Badge
                              variant="secondary"
                              className="text-[11px] bg-xian-gold/10 text-xian-gold border-xian-gold/20"
                            >
                              原创
                            </Badge>
                          )}
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-2 hover:text-xian-gold transition-colors line-clamp-1">
                          {article.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                          {article.summary}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground flex-wrap">
                          <span className="flex items-center gap-1">
                            <User className="h-3 w-3" />
                            {article.author}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {article.publishDate}
                          </span>
                          <span className="flex items-center gap-1">
                            <Eye className="h-3 w-3" />
                            {article.views.toLocaleString()} 阅读
                          </span>
                        </div>
                      </div>
                      <ChevronRight className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-2" />
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
