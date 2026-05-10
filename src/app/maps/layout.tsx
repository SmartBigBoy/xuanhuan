import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '修仙世界地图',
  description:
    '修仙玄幻小说世界地图资源下载，含天南舆图、乱星海、灵界等高清地图。凡人修仙传、遮天等经典作品的世界观地图一站汇集。',
  keywords: [
    '修仙地图',
    '世界地图',
    '凡人修仙传地图',
    '天南舆图',
    '灵界地图',
    '乱星海',
    '小说地图下载',
  ],
  openGraph: {
    title: '修仙世界地图 | 诸天图鉴阁',
    description: '修仙玄幻小说世界地图资源下载，高清地图一站汇集',
  },
};

export default function MapsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
