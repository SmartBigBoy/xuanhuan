// 修仙小说基础数据

export interface Novel {
  id: string;
  title: string;
  author: string;
  cover: string;
  category: string;
  description: string;
  tags: string[];
  realmCount: number;
  mapCount: number;
  popularity: number; // 1-10
}

export const categories = [
  '经典修仙',
  '仙侠玄幻',
  '都市修仙',
  '洪荒封神',
  '异界大陆',
] as const;

export type Category = (typeof categories)[number];

export const novels: Novel[] = [
  {
    id: 'rmjz',
    title: '凡人修仙传',
    author: '忘语',
    cover: '/novels/rmjz-cover.png',
    category: '经典修仙',
    description:
      '一个普通山村少年韩立，偶然间进入当地江湖小门派，成为了一名记名弟子。凭借自身努力和合理运用各种际遇，逐步走上仙途，在修仙世界中艰苦修炼，最终得道成仙。',
    tags: ['经典', '凡人流', '炼气期', '元婴', '化神'],
    realmCount: 12,
    mapCount: 5,
    popularity: 10,
  },
  {
    id: 'zhu-xian',
    title: '诛仙',
    author: '萧鼎',
    cover: '/novels/zhuxian.jpg',
    category: '仙侠玄幻',
    description:
      '天地不仁，以万物为刍狗。少年张小凡偶然获得天书，在正魔两道的夹缝中行走，历经爱恨情仇，最终揭开青云门千年之谜。',
    tags: ['经典', '正魔对立', '天书', '青云门'],
    realmCount: 9,
    mapCount: 3,
    popularity: 10,
  },
  {
    id: 'bi-luo',
    title: '遮天',
    author: '辰东',
    cover: '/novels/zhetian.jpg',
    category: '仙侠玄幻',
    description:
      '九龙拉棺的震撼开篇，叶凡误入星空古路，横渡星域，逆天证道，从荒古走到当世，开创万古盛世。',
    tags: ['星空', '证道', '大帝', '禁区'],
    realmCount: 11,
    mapCount: 7,
    popularity: 10,
  },

{
    id: 'wan-mei',
    title: '完美世界',
    author: '辰东',
    cover: '/novels/wmsj.jpg',
    category: '仙侠玄幻',
    description:
      '九龙拉棺的震撼开篇，叶凡误入星空古路，横渡星域，逆天证道，从荒古走到当世，开创万古盛世。',
    tags: ['星空', '证道', '大帝', '禁区'],
    realmCount: 11,
    mapCount: 8,
    popularity: 10,
  },
  
  {
    id: 'xi-zhen',
    title: '仙逆',
    author: '耳根',
    cover: '/novels/xianni.jpg',
    category: '经典修仙',
    description:
      '顺为凡，逆为仙，一念之间。王林资质平庸却悟性惊人，以杀证道，走出了与前人截然不同的逆仙之路。',
    tags: ['逆修', '杀道', '化凡', '天逆珠'],
    realmCount: 10,
    mapCount: 4,
    popularity: 9,
  },
  {
    id: 'da-zhu-zai',
    title: '大主宰',
    author: '天蚕土豆',
    cover: '/novels/dazhuzai.jpg',
    category: '异界大陆',
    description:
      '大千世界，位面交汇，万族林立。少年牧尘从北灵境而出，踏上了大千世界的巅峰之路，最终成为大主宰。',
    tags: ['位面', '万族', '大千世界', '主宰'],
    realmCount: 8,
    mapCount: 6,
    popularity: 9,
  },
  {
    id: 'tun-shi',
    title: '吞噬星空',
    author: '我吃西红柿',
    cover: '/novels/tunshi.jpg',
    category: '都市修仙',
    description:
      '地球经历大涅槃时期，罗峰从一个普通的高中生，逐步觉醒成为武者，踏入宇宙，吞噬星空，最终成为宇宙之主。',
    tags: ['科幻修仙', '宇宙', '武者', '虫族'],
    realmCount: 9,
    mapCount: 8,
    popularity: 9,
  },
  {
    id: 'shen-yin',
    title: '神印王座',
    author: '唐家三少',
    cover: '/novels/shenyin.jpg',
    category: '仙侠玄幻',
    description:
      '骑士圣殿出身的龙皓晨，从一名普通骑士成长为守护人类的神印骑士，最终登上永恒与创造之神印王座。',
    tags: ['骑士', '光明', '圣殿', '魔族'],
    realmCount: 7,
    mapCount: 3,
    popularity: 8,
  },
  {
    id: 'jian-lai',
    title: '剑来',
    author: '烽火戏诸侯',
    cover: '/novels/jianlai.jpg',
    category: '仙侠玄幻',
    description:
      '少年陈平安行走江湖，以剑道证长生。浩然天下、蛮荒天下、青冥天下三界风云，一剑递出，天下皆惊。',
    tags: ['剑修', '江湖', '三界', '规矩'],
    realmCount: 10,
    mapCount: 5,
    popularity: 8,
  },
  {
    id: 'yi-nian',
    title: '一念永恒',
    author: '耳根',
    cover: '/novels/yinian.jpg',
    category: '经典修仙',
    description:
      '一念成沧海，一念化桑田。白小纯从灵溪宗走出，凭借独特的修炼方式和无尽的际遇，一步步踏上巅峰。',
    tags: ['永恒', '炼灵', '星空', '道域'],
    realmCount: 9,
    mapCount: 4,
    popularity: 8,
  },
  {
    id: 'huang-dao',
    title: '洪荒之永恒道主',
    author: '道主',
    cover: '/novels/honghuang.jpg',
    category: '洪荒封神',
    description:
      '盘古开天，洪荒初定。以洪荒为背景，讲述从混沌初开到封神之战的恢弘史诗，六圣证道，天道轮回。',
    tags: ['洪荒', '六圣', '封神', '天道'],
    realmCount: 8,
    mapCount: 4,
    popularity: 7,
  },
];

export function getNovelById(id: string): Novel | undefined {
  return novels.find((n) => n.id === id);
}

export function getNovelsByCategory(category: string): Novel[] {
  return novels.filter((n) => n.category === category);
}

export function getPopularNovels(count: number = 5): Novel[] {
  return [...novels].sort((a, b) => b.popularity - a.popularity).slice(0, count);
}
