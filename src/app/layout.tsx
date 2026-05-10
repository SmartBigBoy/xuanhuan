import type { Metadata } from 'next';
import { Inspector } from 'react-dev-inspector';
import './globals.css';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

export const metadata: Metadata = {
  title: {
    default: '修仙阁 — 修仙玄幻小说境界体系与地图资料站',
    template: '%s | 修仙阁',
  },
  description:
    '修仙阁是专注于修仙玄幻小说境界体系与世界地图资料的纯公益网文资料站，提供凡人修仙传、遮天、诛仙等顶流小说的境界详解、世界地图下载与修仙设定百科。',
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
  authors: [{ name: '修仙阁编辑部' }],
  openGraph: {
    title: '修仙阁 — 万卷天书，一阁尽览',
    description:
      '专注于修仙玄幻小说境界体系与世界地图资料的纯公益网文资料站',
    locale: 'zh_CN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isDev = process.env.COZE_PROJECT_ENV === 'DEV';

  return (
    <html lang="zh-CN">
      <body className="antialiased min-h-screen flex flex-col">
        {isDev && <Inspector />}
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
