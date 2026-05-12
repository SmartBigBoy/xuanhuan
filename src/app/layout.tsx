import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { XianThemeProvider } from '@/components/xian-theme-provider';

export const metadata: Metadata = {
  title: {
    default: '诸天图鉴阁 — 修仙玄幻小说境界体系与地图资料站',
    template: '%s | 诸天图鉴阁',
  },
  description:
    '诸天图鉴阁是专注于修仙玄幻小说境界体系与世界地图资料的纯公益网文资料站，提供凡人修仙传、遮天、诛仙等顶流小说的境界详解、世界地图下载与修仙设定百科。',
  keywords: [
    '修仙',
    '玄幻小说',
    '境界体系',
    '修仙境界',
    '世界地图',
    '凡人修仙传',
    '遮天',
    '诛仙',
    '仙逆',
    '大主宰',
    '吞噬星空',
    '修仙设定',
    '网文资料',
  ],
  authors: [{ name: '诸天图鉴阁编辑部' }],
  openGraph: {
    title: '诸天图鉴阁 — 诸天万界，一阁尽览',
    description:
      '专注于修仙玄幻小说境界体系与世界地图资料的纯公益网文资料站',
    locale: 'zh_CN',
    type: 'website',
    siteName: '诸天图鉴阁',
  },
  twitter: {
    card: 'summary_large_image',
    title: '诸天图鉴阁 — 修仙玄幻小说境界体系与地图资料站',
    description:
      '专注于修仙玄幻小说境界体系与世界地图资料的纯公益网文资料站',
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: '文学',
  classification: '修仙玄幻小说资料站',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <Script
          id="baidu-tongji"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?9bdd82045f476f7f02179faa4b54941b";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();
`,
          }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <XianThemeProvider>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </XianThemeProvider>
      </body>
    </html>
  );
}
