import Link from 'next/link';
import { Sparkles, Mail } from 'lucide-react';
import { siteConfig } from '@/data/site';

export function SiteFooter() {
  return (
    <footer className="border-t border-border/50 bg-xian-deep/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        {/* 上部 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* 站点信息 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-xian-gold to-xian-amber">
                <Sparkles className="h-4 w-4 text-xian-deep" />
              </div>
              <span className="text-lg font-bold text-xian-gold font-serif">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {siteConfig.description}
            </p>
          </div>

          {/* 快捷链接 */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-xian-gold">快捷导航</h4>
            <div className="grid grid-cols-2 gap-2">
              <Link href="/realms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                修仙境界大全
              </Link>
              <Link href="/maps" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                世界地图下载
              </Link>
              <Link href="/wiki" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                修仙设定百科
              </Link>
              <Link href="/community" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                资料杂谈&投稿
              </Link>
            </div>
          </div>

          {/* 免责声明与联系方式 */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-xian-gold">版权与联系方式</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {siteConfig.disclaimer}
            </p>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Mail className="h-3.5 w-3.5 text-xian-gold" />
              <span>资料收集 & 侵权反馈：</span>
              <a href={`mailto:${siteConfig.contactEmail}`} className="text-xian-cyan hover:underline">
                {siteConfig.contactEmail}
              </a>
            </div>
          </div>
        </div>

        {/* 分隔线 */}
        <div className="xian-divider mb-6" />

        {/* 底部 */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <p>{siteConfig.footerText}</p>
          <p>域名：<a href={siteConfig.siteUrl} className="text-xian-cyan hover:underline">{siteConfig.siteUrl.replace('https://', '')}</a> · 所有内容仅供学习交流，禁止商业用途</p>
        </div>
      </div>
    </footer>
  );
}
