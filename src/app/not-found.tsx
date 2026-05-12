import Link from 'next/link';
import { Home, ArrowLeft, Scroll, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="xian-bg-pattern min-h-[60vh] flex items-center justify-center">
      <div className="text-center px-4">
        {/* 装饰性图标 */}
        <div className="relative inline-block mb-6">
          <div className="w-24 h-24 rounded-full border-2 border-xian-gold/30 bg-xian-gold/5 flex items-center justify-center mx-auto">
            <Scroll className="w-10 h-10 text-xian-gold/60" />
          </div>
          <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-red-500/90 flex items-center justify-center text-white text-sm font-bold">
            !
          </div>
        </div>

        {/* 404 数字 */}
        <h1 className="text-7xl sm:text-8xl font-bold font-serif text-xian-gold/20 xian-text-glow mb-4">
          404
        </h1>

        {/* 主标题 */}
        <h2 className="text-2xl sm:text-3xl font-bold font-serif text-foreground mb-3">
          此路不通，仙友请回
        </h2>

        {/* 副标题 */}
        <p className="text-muted-foreground max-w-md mx-auto mb-8 leading-relaxed">
          你寻觅的仙途似乎已断，此方天地中并无你所求之物。
          <br />
          不如返回山门，重新寻觅大道。
        </p>

        {/* 操作按钮 */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <Button asChild size="lg" className="bg-xian-gold hover:bg-xian-amber text-black font-medium">
            <Link href="/">
              <Home className="w-4 h-4 mr-2" />
              返回首页
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-xian-gold/30 text-xian-gold hover:bg-xian-gold/10">
            <Link href="/realms">
              <Search className="w-4 h-4 mr-2" />
              浏览境界体系
            </Link>
          </Button>
          <Button asChild variant="ghost" size="lg" className="text-muted-foreground">
            <button onClick={() => typeof window !== 'undefined' && window.history.back()}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              返回上页
            </button>
          </Button>
        </div>

        {/* 快捷导航 */}
        <div className="mt-12 pt-8 border-t border-xian-gold/10">
          <p className="text-sm text-muted-foreground mb-4">或前往以下栏目继续探索</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { href: '/realms', label: '修仙境界' },
              { href: '/maps', label: '世界地图' },
              { href: '/wiki', label: '设定百科' },
              { href: '/community', label: '资料杂谈' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 rounded-full border border-xian-gold/20 text-sm text-xian-gold/80 hover:bg-xian-gold/10 hover:border-xian-gold/40 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
