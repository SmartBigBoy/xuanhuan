// 世界地图资源数据

export interface WorldMap {
  id: string;
  title: string;
  novelId: string;
  novelTitle: string;
  type: MapType;
  description: string;
  previewUrl: string;
  downloadUrl: string;
  fileSize: string;
  resolution: string;
  format: string;
  author: string; // 地图绘制者
  source: string;
  tags: string[];
  detail: string; // 补充解析
  uploadDate: string;
  downloads: number;
}

export type MapType = '全景地图' | '势力分布' | '城市详图' | '秘境地图' | '星域图' | '路线图';

export const mapTypes: MapType[] = [
  '全景地图',
  '势力分布',
  '城市详图',
  '秘境地图',
  '星域图',
  '路线图',
];

export const worldMaps: WorldMap[] = [
  {
    id: 'rmjz-quanjing',
    title: '凡人修仙传 - 修仙界全景地图',
    novelId: 'rmjz',
    novelTitle: '凡人修仙传',
    type: '全景地图',
    description: '涵盖天南、乱星海、大晋三大区域的完整修仙界全景地图，标注主要宗门、城市、秘境位置。',
    previewUrl: '/maps/rmjz-quanjing-preview.jpg',
    downloadUrl: '#',
    fileSize: '12.5 MB',
    resolution: '6000×4000',
    format: 'PNG',
    author: '修仙资料站整理',
    source: '原创整理，参考原著描述',
    tags: ['天南', '乱星海', '大晋', '宗门', '全景'],
    detail: '本地图根据凡人修仙传原著中对各地地理位置的描述精心整理绘制。天南地区以越国为中心，辐射周边七派联盟；乱星海区域标注了星宫、内海群岛、外海妖族领地；大晋地区则详细标注了各大顶级宗门与上古遗迹。地图采用古风水墨画风格，配合标注说明，方便读者对照小说情节理解故事地理脉络。',
    uploadDate: '2024-12-15',
    downloads: 3280,
  },
  {
    id: 'rmjz-tiannan',
    title: '凡人修仙传 - 天南舆图',
    novelId: 'rmjz',
    novelTitle: '凡人修仙传',
    type: '势力分布',
    description: '天南区域古舆图，详载天道盟、正道、魔道、九国盟四大势力版图，标注各国与宗门位置，含无边海、飓风沙漠、慕兰草原等特殊地域。',
    previewUrl: '/maps/rmjz-tiannan.png',
    downloadUrl: '/maps/rmjz-tiannan.png',
    fileSize: '2.9 MB',
    resolution: '3000×2000',
    format: 'PNG',
    author: '网络获取',
    source: '免责声明！本文所展示的所有小说相关地图，均来源于网络公开渠道，非本人原创。若地图涉及版权侵权，请版权方及时联系本人，本人将在第一时间核实并删除相关内容，不承担任何侵权责任。',
    tags: ['天南', '天道盟', '正道', '魔道', '九国盟', '势力分布', '舆图'],
    detail: '天南是凡人修仙传主角韩立最初的修仙之地，本图以古舆图风格精细绘制了天南四大势力板块：北部的天道盟（花雨国、刹云国、溪国等），西部的正道（风都国、元武国等，含飓风沙漠与极西之地），东部的魔道（无妄国、兽国、天罗国等），南部的九国盟（紫金国、虞国等，临近慕兰草原）。各国、宗门、山脉、沙漠、海域均以不同色系区分标注，兼具实用性与古典美学价值，是理解凡人修仙传天南篇地理格局的绝佳参考资料。',
    uploadDate: '2026-05-10',
    downloads: 5120,
  },
  {
    id: 'rmjz-renjie',
    title: '凡人修仙传 - 人界地图总览',
    novelId: 'rmjz',
    novelTitle: '凡人修仙传',
    type: '全景地图',
    description: '凡人修仙传人界全境地图总览，涵盖天南、大晋、乱星海、极西之地等所有主要区域，标注各国、宗门、秘境及关键地理节点。',
    previewUrl: '/maps/rmjz-renjie.png',
    downloadUrl: '/maps/rmjz-renjie.png',
    fileSize: '2.3 MB',
    resolution: '3000×2000',
    format: 'PNG',
    author: '网络获取',
    source: '免责声明！本文所展示的所有小说相关地图，均来源于网络公开渠道，非本人原创。若地图涉及版权侵权，请版权方及时联系本人，本人将在第一时间核实并删除相关内容，不承担任何侵权责任。',
    tags: ['人界', '天南', '大晋', '乱星海', '全景', '总览'],
    detail: '人界是凡人修仙传中韩立修仙旅程的主要舞台，本图以全景视角完整呈现人界地理格局。地图涵盖天南（越国、七派联盟及四大势力板块）、大晋（顶级宗门与上古遗迹云集之地）、乱星海（内海星宫、外海妖族领地）、极西之地与无边海等区域，各国、宗门、山脉、海域、传送阵均有标注，是纵览人界全貌的权威参考资料。',
    uploadDate: '2026-05-10',
    downloads: 0,
  },
  {
    id: 'rmjz-shili',
    title: '凡人修仙传 - 乱星海势力分布图',
    novelId: 'rmjz',
    novelTitle: '凡人修仙传',
    type: '势力分布',
    description: '乱星海区域各势力分布详图，含星宫、妙音门、逆星盟等主要势力控制区域。',
    previewUrl: '/maps/rmjz-shili-preview.jpg',
    downloadUrl: '#',
    fileSize: '8.2 MB',
    resolution: '4500×3000',
    format: 'PNG',
    author: '修仙资料站整理',
    source: '原创整理，参考原著描述',
    tags: ['乱星海', '星宫', '逆星盟', '势力'],
    detail: '乱星海是凡人修仙传中最具特色的区域之一，本地图详细标注了星宫总部、内海各大岛屿、外海妖族势力范围、以及逆星盟的秘密据点。色彩上采用蓝色系为主，内海外海以深浅蓝色区分，势力范围以不同色块标注，清晰直观。',
    uploadDate: '2024-12-10',
    downloads: 2150,
  },
  {
    id: 'zhetian-xingkong',
    title: '遮天 - 星空古路全图',
    novelId: 'bi-luo',
    novelTitle: '遮天',
    type: '星域图',
    description: '遮天宇宙星空古路完整路线图，标注古路各站、生命禁区、帝坟位置。',
    previewUrl: '/maps/zhetian-xingkong-preview.jpg',
    downloadUrl: '#',
    fileSize: '18.3 MB',
    resolution: '8000×5000',
    format: 'PNG',
    author: '修仙资料站整理',
    source: '原创整理，参考原著描述',
    tags: ['星空古路', '禁区', '帝坟', '古路'],
    detail: '遮天的星空古路横跨数十个星域，是叶凡证道路上的重要旅程。本地图以星空为背景，标注了古路各站的星球位置、生命禁区的危险区域、历代大帝的帝坟位置，以及各星域间的传送通道。采用深色星空背景配合金色标注，兼具美观与实用性。',
    uploadDate: '2024-11-28',
    downloads: 4520,
  },
  {
    id: 'zhetian-donghuang',
    title: '遮天 - 东荒势力分布图',
    novelId: 'bi-luo',
    novelTitle: '遮天',
    type: '势力分布',
    description: '东荒大地上各大圣地、荒古世家、妖族领地分布详图。',
    previewUrl: '/maps/zhetian-donghuang-preview.jpg',
    downloadUrl: '#',
    fileSize: '15.7 MB',
    resolution: '7000×4500',
    format: 'PNG',
    author: '修仙资料站整理',
    source: '原创整理，参考原著描述',
    tags: ['东荒', '圣地', '世家', '妖族'],
    detail: '东荒是遮天故事的主要舞台之一，本图详细标注了东荒各大圣地（如摇光圣地、瑶池圣地等）、荒古世家的领地范围、妖族的活动区域，以及荒古禁地的位置。地图以古风山水的形式呈现，将遮天世界的恢弘壮阔一览无余。',
    uploadDate: '2024-11-20',
    downloads: 3870,
  },
  {
    id: 'zhuxian-qingyun',
    title: '诛仙 - 青云门详图',
    novelId: 'zhu-xian',
    novelTitle: '诛仙',
    type: '城市详图',
    description: '青云门七脉峰详细地图，含通天峰、大竹峰、小竹峰等各峰位置与建筑分布。',
    previewUrl: '/maps/zhuxian-qingyun-preview.jpg',
    downloadUrl: '#',
    fileSize: '9.8 MB',
    resolution: '5000×3500',
    format: 'PNG',
    author: '修仙资料站整理',
    source: '原创整理，参考原著描述',
    tags: ['青云门', '七脉', '通天峰', '大竹峰'],
    detail: '青云门是诛仙中最核心的场景之一。本图以山岳水墨风格绘制，详细标注了通天峰、大竹峰、小竹峰、朝阳峰、落霞峰、风回峰、龙首峰七脉的位置与主要建筑，包括玉清殿、虹桥、祖师祠堂等重要地点。',
    uploadDate: '2024-11-15',
    downloads: 2780,
  },
  {
    id: 'zhuxian-tianya',
    title: '诛仙 - 中土世界全景图',
    novelId: 'zhu-xian',
    novelTitle: '诛仙',
    type: '全景地图',
    description: '诛仙世界完整地图，含正道三派与魔教各势力分布。',
    previewUrl: '/maps/zhuxian-tianya-preview.jpg',
    downloadUrl: '#',
    fileSize: '14.2 MB',
    resolution: '6500×4200',
    format: 'PNG',
    author: '修仙资料站整理',
    source: '原创整理，参考原著描述',
    tags: ['中土', '正道', '魔教', '全景'],
    detail: '涵盖诛仙世界的完整地理，包括青云山、天音寺、焚香谷等正道势力的位置，鬼王宗、合欢派、万毒门等魔道势力的据点，以及死亡沼泽、蛮荒之地等危险区域。采用古典水墨画风格，配合详细的势力边界标注。',
    uploadDate: '2024-11-10',
    downloads: 2340,
  },
  {
    id: 'tunshi-yuzhou',
    title: '吞噬星空 - 宇宙势力图',
    novelId: 'tun-shi',
    novelTitle: '吞噬星空',
    type: '星域图',
    description: '吞噬星空宇宙势力分布图，含虚拟宇宙公司、巨斧斗武场等组织势力范围。',
    previewUrl: '/maps/tunshi-yuzhou-preview.jpg',
    downloadUrl: '#',
    fileSize: '20.1 MB',
    resolution: '8000×6000',
    format: 'PNG',
    author: '修仙资料站整理',
    source: '原创整理，参考原著描述',
    tags: ['宇宙', '虚拟宇宙公司', '巨斧', '星域'],
    detail: '吞噬星空的宇宙地图以科幻风格呈现，标注了人类疆域、虫族领地、机械族领地等主要势力范围，以及原始宇宙、小型宇宙的分布位置。配合不同色系区分各势力，并标注了主要星域间的超光速航道。',
    uploadDate: '2024-10-25',
    downloads: 1890,
  },
  {
    id: 'dazhuzai-daqian',
    title: '大主宰 - 大千世界全景图',
    novelId: 'da-zhu-zai',
    novelTitle: '大主宰',
    type: '全景地图',
    description: '大千世界完整地图，含北灵境、西天大陆、南域等各大区域。',
    previewUrl: '/maps/dazhuzai-daqian-preview.jpg',
    downloadUrl: '#',
    fileSize: '16.8 MB',
    resolution: '7500×5000',
    format: 'PNG',
    author: '修仙资料站整理',
    source: '原创整理，参考原著描述',
    tags: ['大千世界', '北灵境', '西天大陆', '南域'],
    detail: '大千世界位面交汇、万族林立，本地图完整呈现了大千世界的地理格局。标注了北灵境、西天大陆、南域等主要区域的位置，以及各大势力的控制范围。地图风格融合了东方玄幻与西方魔幻元素，呈现出独特的视觉体验。',
    uploadDate: '2024-10-18',
    downloads: 1650,
  },
];

export function getMapById(id: string): WorldMap | undefined {
  return worldMaps.find((m) => m.id === id);
}

export function getMapsByNovelId(novelId: string): WorldMap[] {
  return worldMaps.filter((m) => m.novelId === novelId);
}

export function getMapsByType(type: MapType): WorldMap[] {
  return worldMaps.filter((m) => m.type === type);
}
