// 站点公告数据

export interface Announcement {
  id: string;
  title: string;
  content: string;
  date: string;
  type: 'update' | 'notice' | 'event';
  isNew: boolean;
}

export const announcements: Announcement[] = [
  {
    id: 'ann-1',
    title: '资料站正式上线',
    content: '修仙境界与地图资料站今日正式上线！首批上线凡人修仙传、遮天、诛仙等顶流小说的境界体系与地图资源。',
    date: '2024-12-20',
    type: 'notice',
    isNew: true,
  },
  {
    id: 'ann-2',
    title: '凡人修仙传境界体系更新',
    content: '凡人修仙传境界体系已完成完整梳理，含12大境界详细解析与跨体系对比，欢迎查阅！',
    date: '2024-12-18',
    type: 'update',
    isNew: true,
  },
  {
    id: 'ann-3',
    title: '遮天星空古路地图上线',
    content: '遮天星空古路全景地图上线，完整标注古路各站与帝坟位置，8000×5000高清大图免费下载。',
    date: '2024-12-15',
    type: 'update',
    isNew: false,
  },
  {
    id: 'ann-4',
    title: '投稿通道开放',
    content: '资料杂谈&投稿专区正式开放，欢迎各位道友投稿分享修仙小说资料与原创解析。',
    date: '2024-12-10',
    type: 'event',
    isNew: false,
  },
  {
    id: 'ann-5',
    title: '仙逆境界体系补充完成',
    content: '仙逆境界体系已补充"婴变期"等独创境界详解，并新增与凡人修仙传的对比分析。',
    date: '2024-12-08',
    type: 'update',
    isNew: false,
  },
];

export interface SiteConfig {
  name: string;
  slogan: string;
  description: string;
  footerText: string;
  disclaimer: string;
}

export const siteConfig: SiteConfig = {
  name: '诸天图鉴阁',
  slogan: '诸天万界，一阁尽览',
  description:
    '诸天图鉴阁是专注于修仙玄幻小说境界体系与世界地图资料的纯公益网文资料站，致力于为修仙小说爱好者提供最全面、最准确的设定资料与可视化资源。',
  footerText:
    '诸天图鉴阁 — 修仙玄幻小说资料站 | 纯公益 | 非商业',
  disclaimer:
    '本站所有内容均为原创整理或合规同人素材，仅供学习交流之用。小说原著版权归各作者及出版社所有，本站不持有任何原著版权。如涉及版权问题，请联系我们及时处理。',
};
