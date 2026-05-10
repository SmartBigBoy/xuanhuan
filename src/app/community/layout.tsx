import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '资料杂谈与投稿',
  description:
    '修仙玄幻小说资料杂谈专区，含境界对比、世界观考据、修仙设定分析等原创文章，欢迎投稿共建。',
  keywords: [
    '修仙杂谈',
    '境界对比',
    '世界观考据',
    '修仙投稿',
    '网文分析',
  ],
  openGraph: {
    title: '资料杂谈与投稿 | 诸天图鉴阁',
    description: '修仙玄幻小说资料杂谈专区，欢迎投稿共建',
  },
};

export default function CommunityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
