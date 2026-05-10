// 修仙境界体系数据

export interface RealmLevel {
  order: number;
  name: string;
  alias?: string; // 别名/俗称
  description: string;
  lifespan?: string; // 寿命
  keyAbilities: string[]; // 核心能力
  breakthroughCondition?: string; // 突破条件
  subdivisions?: string[]; // 细分境界（如初期/中期/后期/大圆满）
}

export interface RealmSystem {
  novelId: string;
  novelTitle: string;
  overview: string;
  feature: string; // 体系特色
  levels: RealmLevel[];
  crossComparison?: {
    title: string;
    description: string;
    mappings: { level: string; equivalent: string }[];
  };
}

export const realmSystems: RealmSystem[] = [
  {
    novelId: 'rmjz',
    novelTitle: '凡人修仙传',
    overview:
      '凡人修仙传的境界体系是"凡人流"修仙小说的标杆，以层次分明、进阶严苛著称。从炼气入道到飞升仙界，每一步都需大量资源与机缘。修仙者寿命随境界提升大幅增长，但天劫也随之加剧。',
    feature:
      '凡人流标志性体系，强调"资质—机缘—努力"三要素的平衡，修仙资源争夺是推动剧情的核心动力。境界细分（初期/中期/后期/大圆满）极为细致，越到高阶越难突破。',
    levels: [
      {
        order: 1,
        name: '炼气期',
        alias: '练气期',
        description: '修仙入门阶段，感应天地灵气，纳入体内经脉循环。灵力稀薄，仅能使用低级法术与符箓。',
        lifespan: '百岁左右',
        keyAbilities: ['御器飞行（后期）', '低级法术', '灵力外放', '开光法器'],
        breakthroughCondition: '灵根觉醒，拜入宗门',
        subdivisions: ['初期', '中期', '后期', '大圆满'],
      },
      {
        order: 2,
        name: '筑基期',
        description: '灵力凝聚为液态，构建修仙根基。此阶段可御剑飞行，寿命显著延长，是正式踏入修仙之路的标志。',
        lifespan: '两百余岁',
        keyAbilities: ['御剑飞行', '中阶法术', '神识初成', '丹药炼制'],
        breakthroughCondition: '筑基丹辅助，或以大量灵石冲击',
        subdivisions: ['初期', '中期', '后期', '大圆满'],
      },
      {
        order: 3,
        name: '结丹期',
        alias: '金丹期',
        description: '体内灵力凝结为金丹，是修仙者真正实力的分水岭。可施展强大法术，操控法宝，开始参与修仙界的争斗。',
        lifespan: '五百岁左右',
        keyAbilities: ['金丹凝聚', '法宝操控', '高阶法术', '神识远探'],
        breakthroughCondition: '须有足够灵力与感悟，结丹率极低',
        subdivisions: ['初期', '中期', '后期', '大圆满'],
      },
      {
        order: 4,
        name: '元婴期',
        description: '金丹孕育出元婴，修仙者拥有第二生命。元婴出窍可独立行动，神识大增，是修仙界的中坚力量。',
        lifespan: '千岁左右',
        keyAbilities: ['元婴出窍', '瞬移', '搜魂术', '分身之术'],
        breakthroughCondition: '须度过心魔劫，感悟大道法则',
        subdivisions: ['初期', '中期', '后期', '大圆满'],
      },
      {
        order: 5,
        name: '化神期',
        description: '元婴与天地法则相合，初步掌控一方天地之力。此境界修士可呼风唤雨，在修仙界已是顶尖存在。',
        lifespan: '两千余岁',
        keyAbilities: ['法则初窥', '天地灵气调度', '空间挪移', '大范围法术'],
        breakthroughCondition: '须感悟天地法则的一丝痕迹',
        subdivisions: ['初期', '中期', '后期', '大圆满'],
      },
      {
        order: 6,
        name: '炼虚期',
        description: '将天地法则融入自身，虚实结合，法力通天。此境界已非凡俗之力可衡量，举手投足间有毁天灭地之威。',
        lifespan: '五千岁左右',
        keyAbilities: ['法则融合', '虚空炼化', '天地共鸣', '禁制布置'],
        breakthroughCondition: '须将法则完全内化，融合虚空',
      },
      {
        order: 7,
        name: '合体期',
        description: '肉身与元婴彻底合而为一，天人合一。此时修士已近乎与天地同寿，是凡人界的巅峰存在。',
        lifespan: '万余岁',
        keyAbilities: ['天人合一', '化身千万', '法则掌控', '位面之力'],
        breakthroughCondition: '须经历合体天劫，九死一生',
      },
      {
        order: 8,
        name: '大乘期',
        description: '修为登峰造极，已触及仙凡之隔的最后一步。大乘修士在凡人界近乎无敌，随时可尝试飞升。',
        lifespan: '数万岁',
        keyAbilities: ['半仙之力', '仙器驱动', '虚空穿梭', '改天换地'],
        breakthroughCondition: '修为圆满，等待飞升契机',
      },
      {
        order: 9,
        name: '渡劫期',
        description: '飞升前最后考验，须度过天劫方可飞升仙界。天劫分为雷劫、心魔劫等，渡过则为仙人。',
        lifespan: '近乎不朽',
        keyAbilities: ['天劫洗礼', '仙力初凝', '飞升之力', '超脱凡尘'],
        breakthroughCondition: '度过九重天劫',
      },
      {
        order: 10,
        name: '真仙境',
        description: '飞升仙界后的初始境界，虽为仙界底层，但实力已非凡人界可比。仙力充盈，寿元无尽。',
        lifespan: '近乎永生',
        keyAbilities: ['仙力驱动', '仙器御使', '仙法施放', '神念覆盖'],
        breakthroughCondition: '飞升仙界',
      },
      {
        order: 11,
        name: '金仙境',
        description: '仙界中坚力量，掌控部分天道法则，实力远超真仙。',
        lifespan: '永生',
        keyAbilities: ['法则掌控', '仙域开辟', '万法归一', '金仙之体'],
        breakthroughCondition: '感悟天道法则',
      },
      {
        order: 12,
        name: '太乙境',
        alias: '大罗金仙',
        description: '仙界顶尖存在，法则之力浑然天成，可开辟独立小世界。',
        lifespan: '永生不灭',
        keyAbilities: ['天道法则', '开辟世界', '时空操控', '因果之力'],
        breakthroughCondition: '领悟天道本源',
      },
    ],
    crossComparison: {
      title: '凡人修仙传 vs 遮天 境界对比',
      description:
        '两者同为顶级修仙作品，但世界观与境界体系差异显著。凡人重细节渐进，遮天重宏大叙事。',
      mappings: [
        { level: '炼气期', equivalent: '轮海秘境' },
        { level: '筑基期', equivalent: '道宫秘境' },
        { level: '结丹期', equivalent: '四极秘境' },
        { level: '元婴期', equivalent: '龙化秘境' },
        { level: '化神期', equivalent: '仙台一层' },
        { level: '炼虚期', equivalent: '仙台二层' },
        { level: '合体期', equivalent: '仙台三层' },
        { level: '大乘期', equivalent: '仙台四层' },
        { level: '渡劫/真仙', equivalent: '仙台五层(大能)' },
        { level: '金仙', equivalent: '仙台六层(帝级)' },
      ],
    },
  },
  {
    novelId: 'bi-luo',
    novelTitle: '遮天',
    overview:
      '遮天的修炼体系以"秘境"为核心概念，每个秘境对应人体不同部位的修炼开发，从开辟轮海到登临仙台，最终证道成帝。遮天体系宏大，横跨星空万界，大帝更是万古无敌的存在。',
    feature:
      '以人体秘境为修炼核心，强调"人身即宇宙"的理念。大帝体系是遮天独有的巅峰设定，每一位大帝都是一段不朽传说。',
    levels: [
      {
        order: 1,
        name: '轮海秘境',
        description: '开辟人体生命之轮与苦海，是修炼的起点。修士在体内构建苦海，积蓄生命精气。',
        lifespan: '百岁至数百岁',
        keyAbilities: ['苦海开辟', '命泉涌动', '精气积蓄', '初窥道痕'],
        breakthroughCondition: '开辟苦海，踏上修行路',
        subdivisions: ['苦海', '命泉', '神桥', '彼岸'],
      },
      {
        order: 2,
        name: '道宫秘境',
        description: '修炼人体五脏神祇，对应五行之力。心肝脾肺肾各蕴神祇，逐一觉醒后战力大增。',
        lifespan: '千岁左右',
        keyAbilities: ['五脏神祇', '五行之力', '道宫守护', '神力倍增'],
        subdivisions: ['心之神祇', '肝之神祇', '脾之神祇', '肺之神祇', '肾之神祇'],
      },
      {
        order: 3,
        name: '四极秘境',
        description: '打通人体四肢的极境，四肢如天柱擎天，战力飞跃。修士可御空而行，横渡虚空。',
        lifespan: '两千余岁',
        keyAbilities: ['四极贯通', '虚空横渡', '天柱之力', '战力暴增'],
        subdivisions: ['一极', '二极', '三极', '四极'],
      },
      {
        order: 4,
        name: '龙化秘境',
        description: '肉身化龙，生命力蜕变。修士肉身堪比神铁，战力达到另一个层次。',
        lifespan: '三千余岁',
        keyAbilities: ['肉身化龙', '生命力蜕变', '龙气护体', '横扫同阶'],
        subdivisions: ['一变', '二变', '三变', '四变', '五变', '六变', '七变', '八变', '九变'],
      },
      {
        order: 5,
        name: '仙台秘境',
        alias: '斩道/圣人',
        description: '登临仙台，圣人境到大帝境的漫长阶梯。仙台每上一层都是质的飞跃。',
        lifespan: '万岁至数万岁',
        keyAbilities: ['圣威压制', '道则掌控', '圣人法相', '领域之力'],
        subdivisions: ['仙台一层(圣人)', '仙台二层(大圣)', '仙台三层(准帝)', '仙台四层(帝级)', '仙台五层(大能)', '仙台六层(大帝)'],
      },
      {
        order: 6,
        name: '大帝',
        alias: '古皇',
        description: '遮天体系巅峰，证道成帝！大帝万古无敌，一人镇压一整片星空，号令宇宙万族。',
        lifespan: '一万年至两万年',
        keyAbilities: ['证道之力', '天心印记', '万法归一', '镇压星空', '帝兵驱动'],
        breakthroughCondition: '证道于天，获得天心印记',
      },
      {
        order: 7,
        name: '红尘仙',
        description: '大帝之上，在红尘中成仙。不死药与九世蜕变，或以其他逆天方式超脱帝境，成为红尘仙。',
        lifespan: '永生不灭',
        keyAbilities: ['仙道法则', '长生久视', '超脱轮回', '逆天之力'],
        breakthroughCondition: '九世蜕变或以其他方式超脱',
      },
    ],
    crossComparison: {
      title: '遮天 vs 完美世界 境界对比',
      description:
        '同为辰东作品，遮天与完美世界的世界观有千丝万缕的联系，但修炼体系各有侧重。',
      mappings: [
        { level: '轮海', equivalent: '搬血境' },
        { level: '道宫', equivalent: '洞天境' },
        { level: '四极', equivalent: '化道境' },
        { level: '龙化', equivalent: '尊者境' },
        { level: '仙台(圣人)', equivalent: '神火境' },
        { level: '仙台(大圣)', equivalent: '真一境' },
        { level: '仙台(准帝)', equivalent: '天神境' },
        { level: '大帝', equivalent: '道祖/仙王' },
        { level: '红尘仙', equivalent: '仙帝' },
      ],
    },
  },
  {
    novelId: 'zhu-xian',
    novelTitle: '诛仙',
    overview:
      '诛仙的修炼体系分为正道与魔道两大阵营，以"天地灵气"为修炼根基，修士通过吐纳灵气、参悟天道来提升境界。正道以青云门、天音寺、焚香谷为代表，魔道以鬼王宗、合欢派、万毒门为势力。',
    feature:
      '正魔双修的独特设定，玉清境、上清境、太清境三阶修为体系简洁而深刻，天书是贯穿全书的至高修炼典籍。',
    levels: [
      {
        order: 1,
        name: '玉清境',
        description: '青云门基础修为，初步感应天地灵气，学习基础道法。多数青云弟子终其一生止步于此。',
        lifespan: '略超凡人',
        keyAbilities: ['灵气感应', '基础道法', '御剑初步', '神剑御雷真诀(入门)'],
        subdivisions: ['第一层', '第二层', '第三层', '第四层', '第五层', '第六层', '第七层', '第八层', '第九层'],
      },
      {
        order: 2,
        name: '上清境',
        description: '修为精进，道法大成。可熟练使用青云门各路高深道法，是门中核心力量的标志。',
        lifespan: '两百年左右',
        keyAbilities: ['高深道法', '御剑自如', '法力雄厚', '独当一面'],
        subdivisions: ['初入', '小成', '大成'],
      },
      {
        order: 3,
        name: '太清境',
        description: '青云门修为巅峰，道法通神。数百年难出一位太清境高手，是门中至高战力。',
        lifespan: '五百年以上',
        keyAbilities: ['道法通神', '天地借法', '万剑归宗', '诛仙剑阵(需诛仙剑)'],
        breakthroughCondition: '道法通悟，需极高天赋与悟性',
      },
      {
        order: 4,
        name: '天书境界',
        description: '参悟天书后达到的超然境界，不受正魔门户之限，融合诸法。',
        lifespan: '未知',
        keyAbilities: ['天书法力', '正魔合一', '超脱常理', '逆转乾坤'],
        breakthroughCondition: '参悟天书全部卷册',
      },
    ],
  },
  {
    novelId: 'xi-zhen',
    novelTitle: '仙逆',
    overview:
      '仙逆的修炼体系强调"逆"字，与天道逆行，以杀证道。从凝气到踏天，每一步都是对天道的挑战与反叛。王林以独特的逆修之路，走出了前无古人的道。',
    feature:
      '"顺为凡，逆为仙"的核心哲学，杀道、化凡、天逆珠等独特设定。修仙不再是顺应天道，而是逆天而行。',
    levels: [
      { order: 1, name: '凝气期', description: '凝聚灵气，踏入修仙。共十五层，远比一般小说细分更多。', lifespan: '百岁', keyAbilities: ['灵气凝聚', '初级法术', '灵力运转'] },
      { order: 2, name: '筑基期', description: '灵力凝实，构建修仙根基。', lifespan: '两百余岁', keyAbilities: ['根基稳固', '中阶法术', '神识萌芽'] },
      { order: 3, name: '结丹期', description: '灵力结丹，战力大幅跃升。', lifespan: '五百岁', keyAbilities: ['金丹之力', '法宝御使', '高阶法术'] },
      { order: 4, name: '元婴期', description: '金丹化婴，拥有第二生命。', lifespan: '千岁', keyAbilities: ['元婴出窍', '分身术', '搜魂术'] },
      { order: 5, name: '化神期', description: '元婴与天地法则相合，掌控天地之力。', lifespan: '两千岁', keyAbilities: ['法则初窥', '天地共鸣', '空间挪移'] },
      { order: 6, name: '婴变期', description: '仙逆独创境界，元婴发生质变，介于化神与问鼎之间。', lifespan: '三千岁', keyAbilities: ['元婴蜕变', '天道感悟', '逆转之力'] },
      { order: 7, name: '问鼎期', description: '向天道发出叩问，是凡人界到修仙界的过渡。', lifespan: '五千岁', keyAbilities: ['天道叩问', '法则掌控', '位面之力'] },
      { order: 8, name: '窥涅期', description: '窥视涅槃之路，开始超脱凡尘。', lifespan: '万岁', keyAbilities: ['涅槃窥视', '超脱之力', '虚空跨越'] },
      { order: 9, name: '净涅期', description: '涅槃净化，实力登峰造极。', lifespan: '数万岁', keyAbilities: ['涅槃之力', '天地同寿', '改天换地'] },
      { order: 10, name: '天变期', alias: '踏天境', description: '仙逆最终境界，逆天而行，踏上天路，与天道平起平坐。', lifespan: '永生', keyAbilities: ['逆天之力', '天道抗衡', '万法归逆'] },
    ],
  },
  {
    novelId: 'da-zhu-zai',
    novelTitle: '大主宰',
    overview:
      '大主宰的修炼体系以"灵力"为核心，修士通过修炼将灵力不断升华，从感知灵力到掌控位面之力，最终成为大千世界的大主宰。',
    feature:
      '位面交汇的独特世界观，修炼体系与斗破苍穹、武动乾坤有传承关系，灵力修炼逐步进阶至掌控天地。',
    levels: [
      { order: 1, name: '感应境', description: '感知天地灵力，踏入修炼之门。', lifespan: '略超凡人', keyAbilities: ['灵力感知', '基础灵技'] },
      { order: 2, name: '灵动境', description: '灵力开始运转，初具战力。', lifespan: '百余岁', keyAbilities: ['灵力运转', '灵动攻击'] },
      { order: 3, name: '灵轮境', description: '体内灵力凝聚为轮，战力质变。', lifespan: '数百岁', keyAbilities: ['灵轮凝聚', '灵力外放', '灵器御使'] },
      { order: 4, name: '神魄境', description: '凝聚神魄，精神力大增。', lifespan: '千岁', keyAbilities: ['神魄凝聚', '精神攻击', '搜魂之力'] },
      { order: 5, name: '融天境', description: '与天地灵力相融，掌控一方天地。', lifespan: '数千岁', keyAbilities: ['天地灵力', '领域雏形', '空间感知'] },
      { order: 6, name: '化天境', description: '化天地之力为己用，实力飞跃。', lifespan: '万岁', keyAbilities: ['天地化用', '领域成形', '大范围攻击'] },
      { order: 7, name: '通天境', description: '通天彻地，是大千世界的顶尖战力。', lifespan: '数万岁', keyAbilities: ['通天之力', '位面感知', '超凡入圣'] },
      { order: 8, name: '大主宰', description: '大千世界至高境界，掌控大千世界的终极力量。', lifespan: '永生', keyAbilities: ['世界掌控', '万法归一', '大千之主'] },
    ],
  },
  {
    novelId: 'tun-shi',
    novelTitle: '吞噬星空',
    overview:
      '吞噬星空以科幻与修炼融合的方式构建修炼体系，从地球武者到宇宙之主，修炼层次横跨星球、星系、宇宙，格局极其宏大。',
    feature:
      '科幻修仙的独特设定，修炼者从武者到宇宙之主，战力层级跨越星球到宇宙尺度。基因层次、法则感悟是核心修炼要素。',
    levels: [
      { order: 1, name: '武者', description: '地球武者，身体素质超越常人极限。', lifespan: '约两百岁', keyAbilities: ['内力', '身法', '格斗术'] },
      { order: 2, name: '战将', description: '武者中的精英，可徒手搏杀怪兽。', lifespan: '数百年', keyAbilities: ['战将之力', '精神力萌芽', '武器操控'] },
      { order: 3, name: '行星级', description: '踏出地球，成为宇宙公民的起点。', lifespan: '千岁', keyAbilities: ['星球穿梭', '念力', '领域初成'] },
      { order: 4, name: '恒星级', description: '实力可摧毁星球，是宇宙中的中坚力量。', lifespan: '万岁', keyAbilities: ['恒星穿梭', '领域扩展', '法则初窥'] },
      { order: 5, name: '宇宙级', description: '可横渡宇宙，掌控法则之力。', lifespan: '十万岁', keyAbilities: ['法则掌控', '宇宙穿梭', '世界雏形'] },
      { order: 6, name: '域主级', description: '掌控一方星域，拥有自己的势力。', lifespan: '百万岁', keyAbilities: ['星域掌控', '法则大成', '世界开辟'] },
      { order: 7, name: '界主级', description: '开辟自己的小世界，实力深不可测。', lifespan: '千万岁', keyAbilities: ['世界开辟', '法则圆满', '造物之力'] },
      { order: 8, name: '不朽', description: '肉身不朽，与宇宙同在。', lifespan: '近乎永生', keyAbilities: ['不朽之体', '法则融合', '星河之力'] },
      { order: 9, name: '宇宙之主', description: '吞噬星空的至高境界，掌控整个宇宙。', lifespan: '永生', keyAbilities: ['宇宙掌控', '创世之力', '万法归一'] },
    ],
  },
];

export function getRealmSystemByNovelId(novelId: string): RealmSystem | undefined {
  return realmSystems.find((r) => r.novelId === novelId);
}

export interface WikiEntry {
  id: string;
  title: string;
  category: string;
  summary: string;
  content: string;
  relatedNovels: string[];
}

export const wikiEntries: WikiEntry[] = [
  {
    id: 'linggen',
    title: '灵根',
    category: '修炼基础',
    summary: '修仙者感应天地灵气的天赋根基，是决定修仙资质的核心因素。',
    content:
      '灵根是修仙者感应天地灵气、进行修炼的天赋根基。灵根按属性可分为金、木、水、火、土五行灵根，以及变异灵根如雷灵根、冰灵根等。灵根数量越少，修炼速度越快，天灵根（单一属性）为最佳。杂灵根（四五行属性）修炼极慢，多被视为废灵根。\n\n在凡人流小说中，灵根是进入修仙界的"入场券"。没有灵根的凡人，即便再努力也无法踏上修仙之路。灵根还决定了修仙者适合修炼的功法类型，以及突破瓶颈的难易程度。',
    relatedNovels: ['rmjz', 'xi-zhen', 'yi-nian'],
  },
  {
    id: 'tiandao',
    title: '天道',
    category: '核心概念',
    summary: '修仙世界的最高法则，掌控天地万物运行的根本规律。',
    content:
      '天道是修仙世界中的最高法则，掌控着天地万物的运行规律。修仙的过程本质上就是感悟天道、利用天道、最终超脱天道的过程。\n\n不同小说对天道的设定各异：凡人修仙传中天道是修炼者需要感悟的自然法则；仙逆中天道是需要"逆"的对象；遮天中的天心印记是大帝证道的标志。天劫是天道对修仙者的考验，也是维护天地平衡的机制。',
    relatedNovels: ['rmjz', 'bi-luo', 'xi-zhen', 'zhu-xian'],
  },
  {
    id: 'dan-yao',
    title: '丹药',
    category: '修炼资源',
    summary: '修仙者日常使用的辅助修炼物品，种类繁多，效果各异。',
    content:
      '丹药是修仙者最常用的辅助修炼物品，由炼丹师以灵药、灵草等材料炼制而成。按功效可分为：\n\n1. 增进修为类：如筑基丹、结丹丹等，帮助突破境界瓶颈\n2. 恢复类：如回灵丹、疗伤丹等，恢复灵力和伤势\n3. 辅助类：如隐灵丹、易容丹等，特殊用途\n4. 禁忌类：如噬心丹等，用于控制他人\n\n丹药品质分为下品、中品、上品、极品。品级越高，药效越好，杂质越少。',
    relatedNovels: ['rmjz', 'xi-zhen', 'da-zhu-zai'],
  },
  {
    id: 'faba-o',
    title: '法宝',
    category: '修炼资源',
    summary: '修仙者战斗和修炼的核心器具，品级从低到高千差万别。',
    content:
      '法宝是修仙者战斗和修炼的核心器具，按品级从低到高分为：法器、灵器、法宝、灵宝、通天灵宝、玄天之宝。\n\n法宝通常需要修仙者以神识祭炼后方可使用，品级越高的法宝所需的祭炼时间越长，但对修为的要求也越高。一些顶级法宝甚至拥有自己的器灵，可自主战斗。\n\n法宝的获取方式包括：自行炼制、购买交换、探险获取、前辈遗留、击杀夺取等。',
    relatedNovels: ['rmjz', 'bi-luo', 'xi-zhen'],
  },
  {
    id: 'tianjie',
    title: '天劫',
    category: '核心概念',
    summary: '天道对修仙者的考验，是突破高阶境界的必经之路。',
    content:
      '天劫是修仙者在突破高阶境界时，天道降下的考验。天劫的形式多种多样，最常见的为雷劫，此外还有心魔劫、火劫、风劫等。\n\n天劫的威力与修仙者的修为和资质有关。一般而言，天赋越高、修为越强的人，天劫的威力也越大。渡过天劫可获得天道的认可，修为大进；失败则可能重伤甚至身死道消。\n\n在某些小说中，天劫也是天道维持世界平衡的机制，防止修仙者过多消耗天地灵气。',
    relatedNovels: ['rmjz', 'bi-luo', 'xi-zhen', 'zhu-xian'],
  },
  {
    id: 'zongmen',
    title: '宗门',
    category: '修仙社会',
    summary: '修仙者组织的主要形式，是修仙社会的基本结构单位。',
    content:
      '宗门是修仙者组织的主要形式，是修仙社会的基本结构单位。宗门按实力分为不同等级，通常有：\n\n1. 顶级宗门：底蕴深厚，拥有元婴期以上的老祖坐镇\n2. 大型宗门：金丹期修士为骨干，结丹期长老\n3. 中型宗门：以结丹期修士为首\n4. 小型宗门：多为筑基期修士组成\n\n宗门为弟子提供修炼资源、功法传承和保护，弟子则需为宗门效力。宗门之间经常因资源、领地等发生争斗。',
    relatedNovels: ['rmjz', 'zhu-xian', 'xi-zhen'],
  },
];

export function getWikiEntryById(id: string): WikiEntry | undefined {
  return wikiEntries.find((w) => w.id === id);
}
