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
    novelId: 'wan-mei',
    novelTitle: '完美世界',
    overview:
      '完美世界的修炼体系以"骨文"为根基，修士通过烙印骨文、开辟体内秘境来提升实力。从搬血境到仙帝，横跨下界八域与上界三千道州，最终征战异域与界海彼岸，体系恢弘壮阔。',
    feature:
      '骨文修炼为核心，每一境都需在体内开辟秘境或烙印骨文。独有"道火""天命""仙王"等高阶境界设定，修炼之路与天地大道紧密相连，后期涉及纪元轮回与仙帝之争。',
    levels: [
      { order: 1, name: '搬血境', description: '修炼起点，以气血搬动体内宝藏，淬炼肉身。需引天地精华入体，激发血脉之力。', lifespan: '百岁', keyAbilities: ['气血激发', '肉身淬炼', '力量暴涨'], subdivisions: ['初期', '中期', '后期', '圆满'] },
      { order: 2, name: '洞天境', description: '在体内开辟洞天福地，吞吐天地精华。每开辟一座洞天，实力便大幅跃升。', lifespan: '数百岁', keyAbilities: ['洞天开辟', '精华吞吐', '空间雏形'], subdivisions: ['一洞天', '二洞天', '三洞天', '四洞天', '五洞天', '六洞天', '七洞天', '八洞天', '九洞天', '十洞天'] },
      { order: 3, name: '化道境', description: '洞天化为大道，体内秘境与天地法则共鸣。修士开始感悟天地法则之力。', lifespan: '千岁', keyAbilities: ['法则感悟', '道火点燃', '化道之力'] },
      { order: 4, name: '尊者境', description: '称尊一方，修士在此境可开辟领地，威震一方。实力远超化道境。', lifespan: '数千岁', keyAbilities: ['领域开辟', '法则运用', '尊者之威'] },
      { order: 5, name: '神火境', description: '点燃神火，战力发生质变。体内法则凝聚为神火，可焚天煮海。', lifespan: '万岁', keyAbilities: ['神火点燃', '法则凝聚', '天神之威'], subdivisions: ['点燃神火', '神火旺盛', '神火圆满'] },
      { order: 6, name: '真一境', description: '神火燃尽归一，修为达到另一个巅峰。真一者，唯一不二，战力惊人。', lifespan: '数万岁', keyAbilities: ['真一之力', '法则归一', '神通大盛'] },
      { order: 7, name: '天神境', description: '超凡入圣，成为天神。天神可横渡虚空，掌控一方天地法则。', lifespan: '数十万岁', keyAbilities: ['虚空横渡', '法则掌控', '天神之域'] },
      { order: 8, name: '虚道境', description: '触摸大道本源，修炼至道与法合一。介于天神与斩道之间。', lifespan: '百万岁', keyAbilities: ['道法合一', '大道触摸', '虚空造化'] },
      { order: 9, name: '斩道境', description: '斩断大道束缚，走出自己的路。斩道者是真正的强者，可开辟自己的大道。', lifespan: '数百万岁', keyAbilities: ['斩道之力', '自我大道', '道则切割'] },
      { order: 10, name: '遁一境', description: '万道归一，超脱法则束缚。遁一境是至尊之下最强境界。', lifespan: '千万岁', keyAbilities: ['万道归一', '法则超脱', '遁一之力'] },
      { order: 11, name: '至尊境', description: '世间至尊，可在界内称尊。至尊是下界与上界公认的最强层次。', lifespan: '千万岁以上', keyAbilities: ['至尊之威', '界内称尊', '法则圆满'] },
      { order: 12, name: '仙王境', description: '踏入仙道领域，仙王不朽不灭，一念可毁灭星域。是仙道领域的强大存在。', lifespan: '永生', keyAbilities: ['仙道法则', '不朽不灭', '星域毁灭', '仙王之威'] },
      { order: 13, name: '仙帝', description: '完美世界至高境界，仙帝执掌纪元，可逆天改命，重塑天地。千古以来仅有数位仙帝。', lifespan: '永生不灭', keyAbilities: ['纪元掌控', '天地重塑', '逆天改命', '万法之源'], breakthroughCondition: '需在界海彼岸证道，经历纪元轮回' },
    ],
    crossComparison: {
      title: '完美世界 vs 遮天 境界对比',
      description:
        '完美世界是遮天的前传，世界观一脉相承但修炼体系各有侧重。',
      mappings: [
        { level: '搬血境', equivalent: '轮海秘境' },
        { level: '洞天境', equivalent: '道宫秘境' },
        { level: '化道境', equivalent: '四极秘境' },
        { level: '尊者境', equivalent: '龙化秘境' },
        { level: '神火境', equivalent: '仙台(圣人)' },
        { level: '真一境', equivalent: '仙台(大圣)' },
        { level: '天神境', equivalent: '仙台(准帝)' },
        { level: '仙王境', equivalent: '大帝' },
        { level: '仙帝', equivalent: '红尘仙' },
      ],
    },
  },
  {
    novelId: 'shen-yin',
    novelTitle: '神印王座',
    overview:
      '神印王座的修炼体系以"灵力"为核心，分为战士与骑士两大主路线。骑士是人类的守护者，以守护苍生为信念，修炼至高可获神印王座认可。六大圣殿代表了人类文明的最后堡垒。',
    feature:
      '骑士修行的独特设定，以守护信念驱动灵力修炼。灵力从光明属性到至高神力逐级升华，神印王座是骑士的至高荣耀。六大圣殿体系构建了完整的人类防线。',
    levels: [
      { order: 1, name: '预备骑士', description: '骑士之路的起点，修炼基础灵力与体术。需通过考核方可成为正式骑士侍从。', lifespan: '略超凡人', keyAbilities: ['灵力觉醒', '基础体术', '灵力外放'], subdivisions: ['一阶', '二阶', '三阶', '四阶', '五阶'] },
      { order: 2, name: '骑士侍从', description: '正式踏上骑士修行，灵力开始凝实。可使用灵力武器进行战斗。', lifespan: '百余岁', keyAbilities: ['灵力凝实', '灵力武器', '守护术入门'] },
      { order: 3, name: '正式骑士', description: '获得骑士封号，灵力质变为光明灵力。是六大圣殿的中坚力量。', lifespan: '两百余岁', keyAbilities: ['光明灵力', '守护术', '灵力坐骑', '圣殿之盾'] },
      { order: 4, name: '大骑士', description: '骑士中的强者，灵力深厚，可施展高级守护术。一人可守护一方。', lifespan: '三百余岁', keyAbilities: ['高级守护术', '灵力领域', '光明审判'] },
      { order: 5, name: '圣骑士', description: '灵力升华至圣光层次，战力极其强大。是六大圣殿的核心战力。', lifespan: '五百余岁', keyAbilities: ['圣光灵力', '神圣守护', '圣光审判', '领域展开'] },
      { order: 6, name: '神殿骑士', description: '六大圣殿的顶尖战力，灵力接近神力。每一位神殿骑士都是一方支柱。', lifespan: '千岁', keyAbilities: ['半神之力', '神圣领域', '神术初窥', '圣殿守护'] },
      { order: 7, name: '圣殿骑士长', description: '执掌圣殿的至强者，灵力已达神力层次。可驱动神器级装备。', lifespan: '数千岁', keyAbilities: ['神力驱动', '神器操控', '领域大成', '圣殿之主'] },
      { order: 8, name: '神印骑士', description: '获神印王座认可的至高骑士，拥有神印之力。是人类的终极守护者。', lifespan: '近乎永生', keyAbilities: ['神印之力', '王座之威', '天地守护', '至高神力'], breakthroughCondition: '获神印王座认可，承受神印传承' },
    ],
  },
  {
    novelId: 'jian-lai',
    novelTitle: '剑来',
    overview:
      '剑来的修炼体系以"境界"与"拳理"并重，武夫与修士各有进阶之路。从三境武夫到十五境飞升，修炼体系兼具武道与仙道双轨。剑修更是其中最锋锐的存在，一剑可开天辟地。',
    feature:
      '武道与仙道双轨并行的独特设定，"拳理""剑意""道法"三路齐修。境界以数字命名（一境至十五境），简洁而层次分明。剑修可越境杀敌，是战力天花板。',
    levels: [
      { order: 1, name: '一境·泥瓶境', description: '修炼起点，炼体固本，泥瓶刻字。肉身与灵力初步结合。', lifespan: '百岁', keyAbilities: ['炼体', '灵力入体', '基础武技'] },
      { order: 2, name: '二境·木簪境', description: '灵力运转全身，木簪束发，修为小成。可使用简单法术与武技。', lifespan: '百余岁', keyAbilities: ['灵力运转', '法术入门', '武技精进'] },
      { order: 3, name: '三境·无炬境', description: '灵力凝实，可暗夜视物如白昼，故称无炬。是正式踏入修行的标志。', lifespan: '两百余岁', keyAbilities: ['灵力凝实', '夜视', '中阶法术'] },
      { order: 4, name: '四境·洞微境', description: '洞察入微，感知天地灵气变化。修行者开始领悟天地法则。', lifespan: '三百余岁', keyAbilities: ['法则感知', '洞察入微', '高阶武技'] },
      { order: 5, name: '五境·龙宫境', description: '体内开辟龙宫秘境，灵力如海。战力大增，可独当一面。', lifespan: '五百余岁', keyAbilities: ['龙宫开辟', '灵力如海', '秘境之力'] },
      { order: 6, name: '六境·玉璞境', description: '璞玉浑成，返璞归真。修为深厚，灵力质变。是中流砥柱的存在。', lifespan: '千岁', keyAbilities: ['返璞归真', '灵力质变', '领域初成'] },
      { order: 7, name: '七境·金丹境', description: '金丹大道，灵力凝为金丹。修士战力飞跃，可御剑飞行。', lifespan: '两千岁', keyAbilities: ['金丹凝聚', '御剑飞行', '道法运用'] },
      { order: 8, name: '八境·元婴境', description: '金丹化婴，拥有第二生命。是修士中的强者。', lifespan: '五千岁', keyAbilities: ['元婴出窍', '分身之术', '搜魂之力'] },
      { order: 9, name: '九境·化神境', description: '元婴化神，掌控天地法则。可开辟洞天福地。', lifespan: '万岁', keyAbilities: ['法则掌控', '洞天开辟', '化神之力'] },
      { order: 10, name: '十境·上五境', description: '踏入上五境，超脱凡俗。每升一境都是质的飞跃，是世间的顶尖战力。', lifespan: '数万岁', keyAbilities: ['超脱凡俗', '天地共鸣', '大道感悟'] },
      { order: 11, name: '十一境至十四境', description: '仙人层次，从天仙到金仙到大罗金仙，每一境都意味着与天道的进一步融合。', lifespan: '近乎永生', keyAbilities: ['仙道法则', '天人合一', '大道之威'], subdivisions: ['十一境(天仙)', '十二境(金仙)', '十三境(大罗)', '十四境(合道)'] },
      { order: 12, name: '十五境·飞升', description: '剑来体系的至高境界，飞升而去，超脱此方天地。千古以来能达此境者屈指可数。', lifespan: '永生', keyAbilities: ['超脱天地', '飞升之力', '万法归一', '开天辟地'], breakthroughCondition: '道法圆满，天地认可，方可飞升' },
    ],
  },
  {
    novelId: 'yi-nian',
    novelTitle: '一念永恒',
    overview:
      '一念永恒的修炼体系以"灵力"与"寿元"为核心，修炼不仅是提升战力，更是为了延长寿元、追求永生。从凝气到天尊，每一步都是与天道争寿的修行。白小纯的修仙之路充满欢笑与热血。',
    feature:
      '"争寿"是核心主题，每提升一个境界便能大幅延长寿命。独有"天人""天尊"等高阶境界设定，后期涉及宇宙本源与永恒之门。修炼风格兼具搞笑与热血。',
    levels: [
      { order: 1, name: '凝气期', description: '凝聚天地灵气，踏入修仙。共十层，是修仙之路的起点。', lifespan: '百岁', keyAbilities: ['灵气凝聚', '初级法术', '灵力运转'], subdivisions: ['一层至十层'] },
      { order: 2, name: '筑基期', description: '灵力凝实构建根基，是正式踏入修仙的标志。', lifespan: '两百余岁', keyAbilities: ['根基构建', '中阶法术', '御器初步'] },
      { order: 3, name: '结丹期', description: '灵力结为金丹，战力质变。可御空飞行，法力深厚。', lifespan: '五百岁', keyAbilities: ['金丹凝聚', '御空飞行', '法宝御使'] },
      { order: 4, name: '元婴期', description: '金丹化婴，拥有元婴出窍之能。是修仙界的中坚力量。', lifespan: '千岁', keyAbilities: ['元婴出窍', '搜魂之术', '分身之能'] },
      { order: 5, name: '化神期', description: '元婴化神，与天地法则共鸣。可掌控一方天地之力。', lifespan: '两千岁', keyAbilities: ['法则共鸣', '天地借力', '领域初成'] },
      { order: 6, name: '天人境', description: '天人合一，灵力蜕变为天人灵力。是修仙界的顶尖战力。', lifespan: '万岁', keyAbilities: ['天人合一', '灵力蜕变', '领域展开', '天人法相'] },
      { order: 7, name: '地尊境', description: '掌控大地法则，实力深不可测。是通天世界的上层强者。', lifespan: '数万岁', keyAbilities: ['大地法则', '空间掌控', '造物之力'] },
      { order: 8, name: '天尊境', description: '一念永恒的至高境界，掌控天道法则，一念可定生死。天尊是通天世界最强的存在。', lifespan: '近乎永生', keyAbilities: ['天道法则', '一念定生死', '宇宙掌控', '永恒之力'], breakthroughCondition: '参悟永恒之道，打开永恒之门' },
    ],
  },
  {
    novelId: 'huang-dao',
    novelTitle: '洪荒之永恒道主',
    overview:
      '洪荒之永恒道主以中国神话洪荒体系为背景，修炼体系源自先天生灵对大道的感悟。从地仙到道祖，修士在洪荒天地间争夺气运、证道成圣，最终追求永恒不灭的超脱之路。',
    feature:
      '以洪荒六圣与道祖体系为核心，修炼与"气运""功德""天道"紧密关联。独有的"斩三尸""功德成圣""以力证道"等证道方式，构建了完整的洪荒修炼哲学。',
    levels: [
      { order: 1, name: '地仙', description: '修炼起点，脱离轮回，长生不死。地仙虽为最低仙阶，却已超脱凡俗。', lifespan: '永生（不受轮回）', keyAbilities: ['超脱轮回', '长生久视', '仙法入门'] },
      { order: 2, name: '天仙', description: '天仙之道，与天地同寿。灵力深厚，可腾云驾雾，施展仙法。', lifespan: '与天地同寿', keyAbilities: ['腾云驾雾', '仙法大成', '天仙之体'] },
      { order: 3, name: '真仙', description: '真仙证道，道心通明。修士对大道有了真正的领悟，法力通玄。', lifespan: '与天地同寿', keyAbilities: ['道心通明', '法力通玄', '真仙法相'] },
      { order: 4, name: '玄仙', description: '玄之又玄，众妙之门。玄仙对天地法则有了深入理解，可操控法则之力。', lifespan: '与天地同寿', keyAbilities: ['法则操控', '玄妙之力', '洞天开辟'] },
      { order: 5, name: '金仙', description: '金仙不朽，肉身与灵魂皆达不朽之境。是洪荒中的重要战力。', lifespan: '万劫不灭', keyAbilities: ['金仙不朽', '万劫不灭', '法则大成'] },
      { order: 6, name: '太乙金仙', description: '金仙之上的强者，太乙之道非同小可。可开辟大千世界。', lifespan: '万劫不灭', keyAbilities: ['太乙道果', '世界开辟', '大千之力'] },
      { order: 7, name: '大罗金仙', description: '洪荒顶尖战力，大罗之道涵盖万法。大罗金仙可纵横洪荒，鲜有敌手。', lifespan: '万劫不灭', keyAbilities: ['大罗道果', '万法归一', '时空掌控'] },
      { order: 8, name: '准圣', description: '斩三尸证道，准圣已触及圣人门槛。斩去善、恶、自我三尸，是成圣前的最后一步。', lifespan: '永恒不灭', keyAbilities: ['斩三尸', '准圣之威', '圣人门槛', '气运操控'], subdivisions: ['准圣初期', '准圣中期', '准圣后期', '准圣圆满'] },
      { order: 9, name: '圣人', description: '洪荒六圣级别，证道成圣后与天地同在，不死不灭。圣人一出，万法臣服。', lifespan: '与天道同在', keyAbilities: ['圣人法力', '天道认可', '不死不灭', '万法臣服'], breakthroughCondition: '功德成圣/斩三尸成圣/以力证道' },
      { order: 10, name: '天道', description: '掌控洪荒天道之力，是洪荒天地的主宰。可制定天道规则，执掌天地运转。', lifespan: '永恒', keyAbilities: ['天道掌控', '规则制定', '天地运转', '天罚之力'] },
      { order: 11, name: '大道', description: '超越天道，触及大道本源。大道是洪荒宇宙的终极法则，大道之主可超脱洪荒。', lifespan: '永恒超脱', keyAbilities: ['大道本源', '超脱洪荒', '创世之力', '万道之源'] },
      { order: 12, name: '永恒道主', description: '洪荒之永恒道主的至高境界，超脱一切法则与天道，成为永恒不灭的道之主宰。千古以来无人达此境。', lifespan: '永恒不灭', keyAbilities: ['永恒之力', '超脱一切', '道之主宰', '创世与灭世'], breakthroughCondition: '超脱大道，证永恒道果' },
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

export interface WikiItem {
  name: string;
  emoji: string;
  description: string;
  source?: string; // 出自哪部小说
}

export interface WikiSection {
  title: string;
  emoji: string;
  color: string; // Tailwind 色彩类名
  bgColor: string; // 背景色
  borderColor: string; // 边框色
  description?: string;
  items: WikiItem[];
}

export interface WikiEntry {
  id: string;
  title: string;
  titleEmoji: string;
  category: string;
  categoryColor: string;
  summary: string;
  overview: string; // 概述文字
  sections: WikiSection[];
  relatedNovels: string[];
}

export const wikiEntries: WikiEntry[] = [
  {
    id: 'linggen',
    title: '灵根',
    titleEmoji: '🌿',
    category: '修炼基础',
    categoryColor: 'text-green-400',
    summary: '修仙者感应天地灵气的天赋根基，是决定修仙资质的核心因素。',
    overview:
      '灵根是修仙者感应天地灵气、进行修炼的天赋根基。灵根按属性可分为金、木、水、火、土五行灵根，以及变异灵根如雷灵根、冰灵根等。灵根数量越少，修炼速度越快，天灵根（单一属性）为最佳。杂灵根（四五行属性）修炼极慢，多被视为废灵根。在凡人流小说中，灵根是进入修仙界的"入场券"。',
    sections: [
      {
        title: '五行灵根',
        emoji: '🔥',
        color: 'text-red-400',
        bgColor: 'bg-red-500/10',
        borderColor: 'border-red-500/30',
        description: '最常见的灵根类型，按五行属性划分',
        items: [
          { name: '金灵根', emoji: '⚔️', description: '擅长锋锐攻击类法术，炼器天赋突出，庚金之力可斩万物', source: '凡人修仙传' },
          { name: '木灵根', emoji: '🌱', description: '擅长生机恢复类法术，炼丹天赋优越，可催生灵药', source: '仙逆' },
          { name: '水灵根', emoji: '💧', description: '擅长柔韧变化类法术，御水之术出神入化', source: '诛仙' },
          { name: '火灵根', emoji: '🔥', description: '擅长毁灭攻击类法术，炼丹炼器皆宜，爆发力最强', source: '凡人修仙传' },
          { name: '土灵根', emoji: '🏔️', description: '擅长防御守护类法术，阵法造诣深厚，根基最为稳固' },
        ],
      },
      {
        title: '变异灵根',
        emoji: '⚡',
        color: 'text-purple-400',
        bgColor: 'bg-purple-500/10',
        borderColor: 'border-purple-500/30',
        description: '五行之外的特殊灵根，极为罕见',
        items: [
          { name: '雷灵根', emoji: '⚡', description: '天赋雷法，速度与攻击兼备，渡劫时天然优势', source: '凡人修仙传' },
          { name: '冰灵根', emoji: '❄️', description: '天赋冰法，攻守兼备，可冻结万物生灵', source: '仙逆' },
          { name: '风灵根', emoji: '🌀', description: '天赋风法，身法极速，攻击飘忽不定', source: '大主宰' },
          { name: '暗灵根', emoji: '🌑', description: '天赋暗属性法术，隐匿暗杀之术，魔道常见', source: '仙逆' },
        ],
      },
      {
        title: '灵根评级',
        emoji: '⭐',
        color: 'text-amber-400',
        bgColor: 'bg-amber-500/10',
        borderColor: 'border-amber-500/30',
        description: '按灵根数量和纯度划分的资质等级',
        items: [
          { name: '天灵根', emoji: '👑', description: '单一属性灵根，修炼速度极快，万中无一的绝顶天才' },
          { name: '真灵根', emoji: '💎', description: '二至三种属性，修炼速度较快，各宗门争抢的对象' },
          { name: '双灵根', emoji: '✨', description: '两种属性灵根，资质尚可，可修炼至中等境界' },
          { name: '三灵根', emoji: '📘', description: '三种属性灵根，资质一般，需更多资源支撑' },
          { name: '杂灵根', emoji: '💔', description: '四至五种属性，修炼极慢，被视为废灵根' },
          { name: '无灵根', emoji: '🚫', description: '完全无法感应灵气，与修仙无缘，终生为凡人' },
        ],
      },
      {
        title: '特殊体质',
        emoji: '🌟',
        color: 'text-cyan-400',
        bgColor: 'bg-cyan-500/10',
        borderColor: 'border-cyan-500/30',
        description: '超越灵根范畴的先天体质，拥有不可思议的天赋',
        items: [
          { name: '荒古圣体', emoji: '🛡️', description: '万古第一战体，肉身无敌，一旦大成可逆伐仙道', source: '遮天' },
          { name: '苍天霸体', emoji: '👊', description: '与圣体齐名的战体，攻伐之力天下无双', source: '遮天' },
          { name: '先天道体', emoji: '☯️', description: '天生亲近大道，悟性逆天，修炼速度远超同阶', source: '遮天' },
          { name: '太阴之体', emoji: '🌙', description: '至阴之体，修炼阴属功法一日千里', source: '遮天' },
          { name: '至尊骨', emoji: '🦴', description: '天生骨骼蕴含至强宝术，一旦觉醒战力惊人', source: '完美世界' },
        ],
      },
    ],
    relatedNovels: ['rmjz', 'xi-zhen', 'yi-nian'],
  },
  {
    id: 'tiandao',
    title: '天道',
    titleEmoji: '☯️',
    category: '核心概念',
    categoryColor: 'text-blue-400',
    summary: '修仙世界的最高法则，掌控天地万物运行的根本规律。',
    overview:
      '天道是修仙世界中的最高法则，掌控着天地万物的运行规律。修仙的过程本质上就是感悟天道、利用天道、最终超脱天道的过程。不同小说对天道的设定各异，但核心都是对"天地至高法则"的探讨。',
    sections: [
      {
        title: '天道法则',
        emoji: '📜',
        color: 'text-blue-400',
        bgColor: 'bg-blue-500/10',
        borderColor: 'border-blue-500/30',
        description: '天道运行的底层法则体系',
        items: [
          { name: '因果法则', emoji: '🔗', description: '种什么因得什么果，修仙者的行为终将得到天道的回应' },
          { name: '轮回法则', emoji: '♻️', description: '生老病死循环不息，跳出轮回方为永恒' },
          { name: '平衡法则', emoji: '⚖️', description: '天道维持世间平衡，过度索取必遭天劫' },
          { name: '命运法则', emoji: '🎲', description: '冥冥之中自有定数，逆天改命需付出代价' },
          { name: '造化法则', emoji: '✨', description: '天地造化万物，灵气孕育生机，是修炼的根基' },
        ],
      },
      {
        title: '各派天道观',
        emoji: '🏔️',
        color: 'text-indigo-400',
        bgColor: 'bg-indigo-500/10',
        borderColor: 'border-indigo-500/30',
        description: '不同小说中对天道的独特理解',
        items: [
          { name: '顺天之道', emoji: '🌅', description: '感悟自然法则、顺应天道，修炼至高境界需与天地共鸣', source: '凡人修仙传' },
          { name: '逆天之道', emoji: '⛈️', description: '天道不仁，以万物为刍狗，唯有逆天方得超脱', source: '仙逆' },
          { name: '天心印记', emoji: '💠', description: '大帝证道的标志，与天道融合获得至高权柄', source: '遮天' },
          { name: '天道轮回', emoji: '🔄', description: '六道轮回为天道根本，掌控轮回即掌控天道一角', source: '诛仙' },
          { name: '以力证道', emoji: '💪', description: '不悟天道法则，以纯粹力量强行证道，最为霸道', source: '洪荒之永恒道主' },
        ],
      },
      {
        title: '天罚与天劫',
        emoji: '⚡',
        color: 'text-yellow-400',
        bgColor: 'bg-yellow-500/10',
        borderColor: 'border-yellow-500/30',
        description: '天道对修仙者的惩罚与考验',
        items: [
          { name: '雷劫', emoji: '⚡', description: '最常见的天劫形式，以雷霆之力考验渡劫者' },
          { name: '心魔劫', emoji: '👹', description: '直击心灵深处的劫难，需斩断心魔方能通过' },
          { name: '天罚', emoji: '🔥', description: '天道对逆天者的直接惩罚，远比天劫恐怖' },
          { name: '因果劫', emoji: '🌀', description: '过往因果的清算，欠下越多劫难越重' },
        ],
      },
    ],
    relatedNovels: ['rmjz', 'bi-luo', 'xi-zhen', 'zhu-xian'],
  },
  {
    id: 'dan-yao',
    title: '丹药',
    titleEmoji: '💊',
    category: '修炼资源',
    categoryColor: 'text-orange-400',
    summary: '修仙者日常使用的辅助修炼物品，涵盖突破、疗伤、增寿、禁制等各类功效。',
    overview:
      '丹药是修仙者最常用的辅助修炼物品，由炼丹师以灵药、灵草等材料炼制而成。丹药品质分为下品、中品、上品、极品，品级越高药效越好、杂质越少。以下按功效分类详细罗列各小说中常见丹药。',
    sections: [
      {
        title: '境界突破类',
        emoji: '🚀',
        color: 'text-violet-400',
        bgColor: 'bg-violet-500/10',
        borderColor: 'border-violet-500/30',
        description: '辅助修士突破境界瓶颈的核心丹药',
        items: [
          { name: '筑基丹', emoji: '🏗️', description: '炼气期突破筑基期的关键丹药，无此丹则突破概率极低，低阶修士梦寐以求之物', source: '凡人修仙传' },
          { name: '结丹丹', emoji: '💠', description: '辅助筑基期突破结丹期，大幅提升结丹成功率，炼制材料极为稀有' },
          { name: '降尘丹', emoji: '⬇️', description: '辅助结丹的极品丹药，比普通结丹丹效果更佳', source: '凡人修仙传' },
          { name: '凝元丹', emoji: '🔵', description: '稳固境界、凝聚元婴之力，为突破元婴期做准备' },
          { name: '破婴丹', emoji: '🐣', description: '辅助结丹期突破元婴期，极为稀少，一方势力可能仅存数枚' },
          { name: '化神丹', emoji: '🌟', description: '辅助元婴期突破化神期，只有顶级炼丹师方可炼制' },
          { name: '造化丹', emoji: '🌈', description: '帮助强者突破瓶颈，炼制方法近乎失传', source: '大主宰' },
          { name: '凝魂丹', emoji: '👻', description: '帮助灵魂受损或修炼魂道的修士凝聚魂力', source: '仙逆' },
        ],
      },
      {
        title: '恢复疗伤类',
        emoji: '💚',
        color: 'text-emerald-400',
        bgColor: 'bg-emerald-500/10',
        borderColor: 'border-emerald-500/30',
        description: '治疗伤势、恢复灵力的必备丹药',
        items: [
          { name: '回灵丹', emoji: '🔄', description: '快速恢复灵力，战斗中必备的续命丹药' },
          { name: '疗伤丹', emoji: '🩹', description: '治疗外伤与内伤，最常见的丹药之一，各品级均有' },
          { name: '续命丹', emoji: '⏳', description: '大幅延长寿元，寿元将尽者的续命至宝', source: '凡人修仙传' },
          { name: '九转回春丹', emoji: '✨', description: '顶级疗伤丹药，几乎可将濒死之人救回，炼制极难' },
          { name: '还丹', emoji: '🔮', description: '可起死回生的珍稀丹药', source: '诛仙' },
          { name: '小还丹', emoji: '💊', description: '恢复灵力与伤势的中阶丹药，各大宗门均有储备' },
          { name: '大还丹', emoji: '💎', description: '高阶恢复丹药，药效远超小还丹，可恢复严重伤势' },
          { name: '归元丹', emoji: '☯️', description: '帮助修士恢复元气，稳固因激战或走火入魔而紊乱的灵力' },
          { name: '活络丹', emoji: '🦴', description: '治疗经脉损伤，修复因修炼不当或战斗造成的经脉堵塞' },
        ],
      },
      {
        title: '增寿延年类',
        emoji: '⏰',
        color: 'text-rose-400',
        bgColor: 'bg-rose-500/10',
        borderColor: 'border-rose-500/30',
        description: '延长寿元、永葆青春的珍贵丹药',
        items: [
          { name: '寿元丹', emoji: '🕐', description: '直接增加修士寿元，高阶者可延寿千年以上' },
          { name: '定颜丹', emoji: '💅', description: '服用后永葆青春容貌不变，女修趋之若鹜', source: '凡人修仙传' },
          { name: '延寿丹', emoji: '⏳', description: '较寿元丹低一阶，但延寿效果依然显著' },
          { name: '青元丹', emoji: '🌿', description: '可延寿数千年的古丹，需圣级药引方可炼制', source: '遮天' },
        ],
      },
      {
        title: '禁制控制类',
        emoji: '⛓️',
        color: 'text-red-400',
        bgColor: 'bg-red-500/10',
        borderColor: 'border-red-500/30',
        description: '用于控制、禁制他人的阴暗丹药，修仙界的禁忌之物',
        items: [
          { name: '噬心丹', emoji: '💀', description: '不服解药则万虫噬心而死，常用于控制下属', source: '凡人修仙传' },
          { name: '合欢散', emoji: '💋', description: '极为阴毒的春药类丹药，中者丧失理智沉迷欲念，需特殊手法解除', source: '凡人修仙传' },
          { name: '迷心丹', emoji: '🌀', description: '服用后精神恍惚、任人摆布，常用于审讯或控制俘虏' },
          { name: '搜魂丹', emoji: '🧠', description: '强行搜索他人记忆，被搜者往往神识受损甚至变为痴呆' },
          { name: '毒龙丹', emoji: '🐉', description: '以剧毒炼制，潜伏体内随时可被引爆' },
          { name: '绝情丹', emoji: '💔', description: '断绝七情六欲，修炼特定功法所用', source: '诛仙' },
        ],
      },
      {
        title: '功法辅助类',
        emoji: '📖',
        color: 'text-sky-400',
        bgColor: 'bg-sky-500/10',
        borderColor: 'border-sky-500/30',
        description: '辅助修炼功法、改善资质的基础丹药',
        items: [
          { name: '洗髓丹', emoji: '🛁', description: '洗毛伐髓、改善修炼资质，灵根资质较差者的命运之丹' },
          { name: '培元丹', emoji: '🌱', description: '培固本元、增强灵根品质，修炼初期服用奠定根基' },
          { name: '凝神丹', emoji: '🧘', description: '稳固神识、防止走火入魔，修炼高风险功法时必备' },
          { name: '通窍丹', emoji: '🔓', description: '开启人体窍穴，增强灵力运转效率', source: '剑来' },
          { name: '悟道丹', emoji: '💡', description: '辅助参悟天道法则，服用后可短暂进入顿悟状态，极为珍贵' },
          { name: '净心丹', emoji: '🤍', description: '消除心魔、净化杂念，渡心魔劫时的重要辅助丹药' },
        ],
      },
      {
        title: '特殊功能类',
        emoji: '🎭',
        color: 'text-teal-400',
        bgColor: 'bg-teal-500/10',
        borderColor: 'border-teal-500/30',
        description: '具有特殊功效的稀有丹药',
        items: [
          { name: '隐灵丹', emoji: '👻', description: '隐匿修为气息，使高阶修士伪装为低阶', source: '凡人修仙传' },
          { name: '易容丹', emoji: '🎭', description: '改变面貌，配合隐灵丹可完全变换身份' },
          { name: '辟谷丹', emoji: '🍚', description: '代替进食，服用一颗可数月不饥，闭关必备' },
          { name: '解毒丹', emoji: '🧪', description: '解除各类毒素，种类数不胜数' },
          { name: '化血丹', emoji: '🩸', description: '以精血炼制，可用于追踪或施展血道秘术' },
          { name: '分神丹', emoji: '👥', description: '辅助分化神识、一心多用，修炼分身术时使用' },
          { name: '聚灵丹', emoji: '✨', description: '辅助聚拢天地灵气加速修炼，日常消耗量最大的丹药之一', source: '凡人修仙传' },
          { name: '离殒丹', emoji: '🔮', description: '解除特殊禁制与毒素的珍稀丹药', source: '仙逆' },
          { name: '血玉丹', emoji: '🩸', description: '以生灵精血炼制的邪道丹药，药效凶猛但反噬严重' },
          { name: '大道丹', emoji: '🌟', description: '蕴含大道法则之力的顶级丹药', source: '一念永恒' },
        ],
      },
    ],
    relatedNovels: ['rmjz', 'zhu-xian', 'xi-zhen', 'bi-luo', 'da-zhu-zai', 'wan-mei', 'jian-lai', 'yi-nian'],
  },
  {
    id: 'faba-o',
    title: '法宝',
    titleEmoji: '⚔️',
    category: '修炼资源',
    categoryColor: 'text-orange-400',
    summary: '修仙者战斗和修炼的核心器具，品级从低到高千差万别。',
    overview:
      '法宝是修仙者战斗和修炼的核心器具，按品级从低到高分为：法器、灵器、法宝、灵宝、通天灵宝、玄天之宝。法宝通常需要修仙者以神识祭炼后方可使用，品级越高的法宝所需祭炼时间越长，但对修为的要求也越高。',
    sections: [
      {
        title: '法宝品级',
        emoji: '📊',
        color: 'text-amber-400',
        bgColor: 'bg-amber-500/10',
        borderColor: 'border-amber-500/30',
        description: '从低到高的法宝等级划分',
        items: [
          { name: '法器', emoji: '🗡️', description: '最低阶器具，炼气期修士使用，威力有限' },
          { name: '灵器', emoji: '⚔️', description: '蕴含灵性，筑基期修士主力装备' },
          { name: '法宝', emoji: '🔮', description: '结丹期方可祭炼，威力强大，可自主御敌' },
          { name: '灵宝', emoji: '💎', description: '元婴期法宝，部分拥有器灵，可自主战斗' },
          { name: '通天灵宝', emoji: '🌟', description: '化神期至宝，威力通天，一方势力镇宗之宝' },
          { name: '玄天之宝', emoji: '👑', description: '传说级至宝，蕴含天地法则，唯大能者方可驾驭' },
        ],
      },
      {
        title: '经典法宝',
        emoji: '🏆',
        color: 'text-violet-400',
        bgColor: 'bg-violet-500/10',
        borderColor: 'border-violet-500/30',
        description: '各小说中令人印象深刻的标志性法宝',
        items: [
          { name: '小绿瓶', emoji: '🧪', description: '可催熟灵药的逆天至宝，韩立崛起的根基', source: '凡人修仙传' },
          { name: '噬魂幡', emoji: '🏴', description: '以阴魂炼制的魔道法宝，吞噬神魂', source: '仙逆' },
          { name: '诛仙剑', emoji: '⚔️', description: '天地第一凶器，一剑可诛仙灭神', source: '诛仙' },
          { name: '荒塔', emoji: '🗼', description: '九层荒塔，蕴含无尽秘境与机缘', source: '遮天' },
          { name: '草灭剑', emoji: '🌿', description: '以一株草化剑，斩灭天地万物', source: '完美世界' },
          { name: '吞天罐', emoji: '🏺', description: '可吞噬万物炼化为己用，成长型至宝', source: '遮天' },
        ],
      },
      {
        title: '法宝类型',
        emoji: '🔧',
        color: 'text-cyan-400',
        bgColor: 'bg-cyan-500/10',
        borderColor: 'border-cyan-500/30',
        description: '按功能划分的法宝类别',
        items: [
          { name: '攻击型', emoji: '⚔️', description: '飞剑、宝刀、神枪等，以攻伐之力见长' },
          { name: '防御型', emoji: '🛡️', description: '宝甲、护盾、阵盘等，守护修士安全' },
          { name: '辅助型', emoji: '🔔', description: '储物袋、传音符、灵兽袋等，辅助日常' },
          { name: '飞行型', emoji: '🛸', description: '飞舟、灵兽坐骑、遁光法器等' },
          { name: '阵法型', emoji: '🎯', description: '阵盘、阵旗等，布阵攻防两用' },
          { name: '特殊型', emoji: '🎭', description: '因果类、时间类、空间类等稀世法宝' },
        ],
      },
    ],
    relatedNovels: ['rmjz', 'bi-luo', 'xi-zhen'],
  },
  {
    id: 'tianjie',
    title: '天劫',
    titleEmoji: '⚡',
    category: '核心概念',
    categoryColor: 'text-yellow-400',
    summary: '天道对修仙者的考验，是突破高阶境界的必经之路。',
    overview:
      '天劫是修仙者在突破高阶境界时，天道降下的考验。天劫的威力与修仙者的修为和资质有关，天赋越高、修为越强者，天劫威力也越大。渡过天劫可获得天道的认可，修为大进；失败则可能重伤甚至身死道消。',
    sections: [
      {
        title: '天劫类型',
        emoji: '⛈️',
        color: 'text-yellow-400',
        bgColor: 'bg-yellow-500/10',
        borderColor: 'border-yellow-500/30',
        description: '修仙者可能遭遇的各类天劫',
        items: [
          { name: '雷劫', emoji: '⚡', description: '最常见的天劫，以雷霆之力考验渡劫者，九重雷劫最凶险' },
          { name: '心魔劫', emoji: '👹', description: '直击心灵深处，需斩断心魔执念方可通过' },
          { name: '火劫', emoji: '🔥', description: '以天地异火焚烧肉身与神魂，浴火重生者方得超脱' },
          { name: '风劫', emoji: '🌪️', description: '罡风刮骨削魂，以风之利刃考验修士意志' },
          { name: '因果劫', emoji: '🔗', description: '过往因果清算，杀业越重劫难越凶' },
          { name: '天人五衰', emoji: '💀', description: '修仙者最恐怖的劫难，肉身与神魂同时衰败' },
        ],
      },
      {
        title: '雷劫等阶',
        emoji: '⚡',
        color: 'text-blue-400',
        bgColor: 'bg-blue-500/10',
        borderColor: 'border-blue-500/30',
        description: '雷劫按威力从弱到强的等阶划分',
        items: [
          { name: '一重雷劫', emoji: '🌧️', description: '最弱的雷劫，筑基或结丹期修士可渡' },
          { name: '三重雷劫', emoji: '⛈️', description: '中等雷劫，元婴期修士面临的考验' },
          { name: '六重雷劫', emoji: '🌩️', description: '较强雷劫，化神期修士方能承受' },
          { name: '九重雷劫', emoji: '⚡', description: '最强雷劫，每道雷劫都足以毁灭一方天地' },
          { name: '紫霄神雷', emoji: '💜', description: '传说中天道降下的至高神雷，大能者方可渡过', source: '洪荒之永恒道主' },
          { name: '混沌雷劫', emoji: '🌀', description: '超越常规的灭世雷劫，逆天者专属' },
        ],
      },
      {
        title: '渡劫方式',
        emoji: '🛡️',
        color: 'text-emerald-400',
        bgColor: 'bg-emerald-500/10',
        borderColor: 'border-emerald-500/30',
        description: '修仙者应对天劫的策略与手段',
        items: [
          { name: '硬抗', emoji: '💪', description: '以肉身和修为正面承受，最直接也最凶险' },
          { name: '法宝护身', emoji: '🛡️', description: '以防御型法宝抵挡天劫之力' },
          { name: '阵法抵御', emoji: '🎯', description: '提前布下防御阵法，以阵法之力消减天劫' },
          { name: '丹药辅助', emoji: '💊', description: '服用疗伤恢复类丹药，渡劫中持续补充' },
          { name: '借力突破', emoji: '🔄', description: '将天劫之力转化为修炼之用，以劫炼身' },
        ],
      },
    ],
    relatedNovels: ['rmjz', 'bi-luo', 'xi-zhen', 'zhu-xian'],
  },
  {
    id: 'zongmen',
    title: '宗门',
    titleEmoji: '🏯',
    category: '修仙社会',
    categoryColor: 'text-pink-400',
    summary: '修仙者组织的主要形式，是修仙社会的基本结构单位。',
    overview:
      '宗门是修仙者组织的主要形式，是修仙社会的基本结构单位。宗门按实力分为不同等级，为弟子提供修炼资源、功法传承和保护，弟子则需为宗门效力。宗门之间经常因资源、领地等发生争斗。',
    sections: [
      {
        title: '宗门等级',
        emoji: '🏛️',
        color: 'text-amber-400',
        bgColor: 'bg-amber-500/10',
        borderColor: 'border-amber-500/30',
        description: '按实力与底蕴划分的宗门等级',
        items: [
          { name: '顶级宗门', emoji: '👑', description: '底蕴深厚，拥有元婴期以上老祖坐镇，掌控一域' },
          { name: '大型宗门', emoji: '🏯', description: '金丹期修士为骨干，结丹期长老数十人' },
          { name: '中型宗门', emoji: '🏰', description: '以结丹期修士为首，是修仙界的中坚力量' },
          { name: '小型宗门', emoji: '🏠', description: '多为筑基期修士组成，附属于大势力' },
          { name: '修仙家族', emoji: '👨‍👩‍👧‍👦', description: '以血脉为纽带的修仙势力，同气连枝' },
        ],
      },
      {
        title: '宗门结构',
        emoji: '📋',
        color: 'text-blue-400',
        bgColor: 'bg-blue-500/10',
        borderColor: 'border-blue-500/30',
        description: '宗门内部的层级与职能划分',
        items: [
          { name: '宗主/掌门', emoji: '👤', description: '一宗之主，通常为宗门最强者' },
          { name: '太上长老', emoji: '🧓', description: '退位的老祖级人物，闭关修炼，危时出山' },
          { name: '长老', emoji: '👔', description: '各峰各堂的掌事者，宗门核心决策层' },
          { name: '内门弟子', emoji: '⭐', description: '天赋出众者，享受核心资源倾斜' },
          { name: '外门弟子', emoji: '📘', description: '普通弟子，需通过考核方可晋升内门' },
          { name: '杂役弟子', emoji: '🔧', description: '负责宗门日常劳作，地位最低' },
        ],
      },
      {
        title: '经典宗门',
        emoji: '🏆',
        color: 'text-violet-400',
        bgColor: 'bg-violet-500/10',
        borderColor: 'border-violet-500/30',
        description: '各小说中令人印象深刻的标志性宗门',
        items: [
          { name: '黄枫谷', emoji: '🍁', description: '韩立最初的宗门，中等实力但底蕴不俗', source: '凡人修仙传' },
          { name: '青云门', emoji: '☁️', description: '正道三大派之一，修真界的中流砥柱', source: '诛仙' },
          { name: '鬼王宗', emoji: '👹', description: '魔道大派，行事狠辣但内部团结', source: '诛仙' },
          { name: '恒岳派', emoji: '⛰️', description: '王林拜入的宗门，改变了他的命运', source: '仙逆' },
          { name: '摇光圣地', emoji: '✨', description: '东荒大教，底蕴深不可测', source: '遮天' },
          { name: '补天教', emoji: '🩹', description: '上界大教，势力横跨诸域', source: '完美世界' },
        ],
      },
    ],
    relatedNovels: ['rmjz', 'zhu-xian', 'xi-zhen'],
  },
  {
    id: 'lingshi',
    title: '灵石',
    titleEmoji: '💎',
    category: '修炼资源',
    categoryColor: 'text-cyan-400',
    summary: '修仙世界通用的货币与修炼能源，蕴含天地灵气的结晶矿物。',
    overview:
      '灵石是修仙世界中蕴含天地灵气的结晶矿物，既是通用货币，也是修炼的核心能源。灵石矿脉是修仙界各方势力争夺的核心资源，控制灵石矿意味着掌握了修炼经济的命脉。',
    sections: [
      {
        title: '灵石等级',
        emoji: '📊',
        color: 'text-cyan-400',
        bgColor: 'bg-cyan-500/10',
        borderColor: 'border-cyan-500/30',
        description: '按灵气浓度划分的灵石品质等级',
        items: [
          { name: '下品灵石', emoji: '🪨', description: '灵气稀薄，凡人修仙者日常使用，百枚兑换一枚中品' },
          { name: '中品灵石', emoji: '💎', description: '灵气充裕，百枚下品兑换一枚，筑基期修士主要流通' },
          { name: '上品灵石', emoji: '💠', description: '灵气浓郁，百枚中品兑换一枚，高阶修士交易使用' },
          { name: '极品灵石', emoji: '🌟', description: '灵气精纯至极，极为罕见，一方势力也未必有几枚' },
        ],
      },
      {
        title: '特殊灵石',
        emoji: '✨',
        color: 'text-purple-400',
        bgColor: 'bg-purple-500/10',
        borderColor: 'border-purple-500/30',
        description: '超越常规等级的珍稀灵石',
        items: [
          { name: '仙石', emoji: '☁️', description: '仙界流通货币，蕴含仙气，凡界极为罕见', source: '凡人修仙传' },
          { name: '魔石', emoji: '🌑', description: '魔道专用，蕴含魔气，修炼魔功效率倍增', source: '仙逆' },
          { name: '源石', emoji: '💠', description: '蕴含大道本源之力，可助人参悟法则', source: '遮天' },
          { name: '神源', emoji: '👑', description: '封印不死药与古尊的至宝，价值连城', source: '遮天' },
          { name: '天晶', emoji: '🔮', description: '天地精华凝聚，修炼速度百倍于普通灵石', source: '大主宰' },
        ],
      },
      {
        title: '灵石用途',
        emoji: '🔧',
        color: 'text-emerald-400',
        bgColor: 'bg-emerald-500/10',
        borderColor: 'border-emerald-500/30',
        description: '灵石在修仙界的各种用途',
        items: [
          { name: '修炼', emoji: '🧘', description: '吸收其中灵气加速修行，最基础的用途' },
          { name: '布阵', emoji: '🎯', description: '作为阵法能源，驱动防御或攻击大阵' },
          { name: '炼器炼丹', emoji: '🔥', description: '辅助材料，提升炼制品级与成功率' },
          { name: '交易', emoji: '💰', description: '通用货币，购买功法、丹药、法宝等' },
          { name: '传承', emoji: '📜', description: '某些传承需以灵石开启，灵石为钥' },
        ],
      },
    ],
    relatedNovels: ['rmjz', 'xi-zhen', 'yi-nian', 'zhu-xian'],
  },
  {
    id: 'busiyao',
    title: '不死药',
    titleEmoji: '🌸',
    category: '修炼资源',
    categoryColor: 'text-pink-400',
    summary: '传说中可令人长生不老、起死回生的至高灵药，修仙者梦寐以求的禁忌之物。',
    overview:
      '不死药是修仙世界中传说可令人长生不老、起死回生的至高灵药。不死药极为稀少，往往整部小说中也只出现寥寥数株，每一株都牵动无数修士的疯狂争夺。不死药往往伴有凶兽守护，采摘条件极为苛刻。',
    sections: [
      {
        title: '不死药类型',
        emoji: '🌺',
        color: 'text-pink-400',
        bgColor: 'bg-pink-500/10',
        borderColor: 'border-pink-500/30',
        description: '不死药按来源与炼制方式划分',
        items: [
          { name: '天生不死药', emoji: '🌱', description: '天地自然孕育，一个纪元可能只成熟一次，最为珍贵' },
          { name: '炼制不死药', emoji: '🔥', description: '由绝世炼丹师以逆天手法炼制，成功率极低' },
          { name: '准不死药', emoji: '💫', description: '药效接近不死药但略有不足，可延寿万年以上' },
        ],
      },
      {
        title: '经典不死药',
        emoji: '🏆',
        color: 'text-amber-400',
        bgColor: 'bg-amber-500/10',
        borderColor: 'border-amber-500/30',
        description: '各小说中出现的著名不死药',
        items: [
          { name: '蟠桃', emoji: '🍑', description: '天生不死药之王，食之可长生不老，天庭至宝', source: '洪荒之永恒道主' },
          { name: '人参果', emoji: '🍎', description: '万年一熟，闻一闻延寿三百六十岁，吃一颗活四万七千年', source: '洪荒之永恒道主' },
          { name: '不死神药', emoji: '🌿', description: '遮天中大帝续命的关键，一株足以引发血战', source: '遮天' },
          { name: '九妙不死药', emoji: '🌸', description: '可续命九次，每次皆有不同药效', source: '遮天' },
          { name: '太初古药', emoji: '💎', description: '诞生于太初时代的至宝，蕴含天地初开之力', source: '完美世界' },
          { name: '天神果', emoji: '🍎', description: '直接提升修为境界，突破瓶颈的逆天之果', source: '大主宰' },
        ],
      },
      {
        title: '不死药功效',
        emoji: '✨',
        color: 'text-emerald-400',
        bgColor: 'bg-emerald-500/10',
        borderColor: 'border-emerald-500/30',
        description: '不死药可带来的各种功效',
        items: [
          { name: '长生不死', emoji: '♾️', description: '大幅延长寿命，甚至真正长生不死' },
          { name: '起死回生', emoji: '💫', description: '将濒死之人从鬼门关拉回' },
          { name: '重塑肉身', emoji: '🦴', description: '断肢重生，甚至从一滴血重塑全身' },
          { name: '洗毛伐髓', emoji: '🛁', description: '提升修炼资质，脱胎换骨' },
          { name: '突破瓶颈', emoji: '🚀', description: '借助不死药之力强行突破境界' },
        ],
      },
    ],
    relatedNovels: ['bi-luo', 'wan-mei', 'rmjz', 'da-zhu-zai'],
  },
  {
    id: 'tiancaidibao',
    title: '天材地宝',
    titleEmoji: '🔮',
    category: '修炼资源',
    categoryColor: 'text-indigo-400',
    summary: '天地自然孕育的珍稀修炼资源，包括灵药、灵矿、神火、圣物等，是修仙者提升实力的关键依托。',
    overview:
      '天材地宝是天地自然孕育的珍稀修炼资源总称，涵盖灵药、灵矿、神火、圣物、异兽内丹等多种类型。天材地宝往往生长在险地秘境之中，或伴有强大凶兽守护。修仙界中"机缘"一词，很大程度指的就是获得天材地宝的际遇。',
    sections: [
      {
        title: '品级划分',
        emoji: '📊',
        color: 'text-indigo-400',
        bgColor: 'bg-indigo-500/10',
        borderColor: 'border-indigo-500/30',
        description: '按珍稀程度从低到高的五级分类',
        items: [
          { name: '凡品', emoji: '🪨', description: '常见灵草灵矿，低阶修士使用，市场有售' },
          { name: '灵品', emoji: '💚', description: '百年千年灵药，中阶修士争夺，价值不菲' },
          { name: '宝品', emoji: '💎', description: '万年灵药、稀世灵矿，高阶修士梦寐以求' },
          { name: '圣品', emoji: '🌟', description: '举世罕见，可遇不可求，足以引发宗门大战' },
          { name: '神品', emoji: '👑', description: '传说中的至高之物，足以改变天地格局' },
        ],
      },
      {
        title: '灵药类',
        emoji: '🌿',
        color: 'text-green-400',
        bgColor: 'bg-green-500/10',
        borderColor: 'border-green-500/30',
        description: '可直接服用或炼丹的天地灵药',
        items: [
          { name: '千年灵芝', emoji: '🍄', description: '最经典的灵药，年份越久药效越强' },
          { name: '万年何首乌', emoji: '🌿', description: '延寿灵药，万年者可增千年寿元' },
          { name: '九叶仙草', emoji: '🍃', description: '九片叶子各有妙用，炼丹上品' },
          { name: '血菩提', emoji: '🩸', description: '生于绝地，服之可大幅提升修为', source: '诛仙' },
          { name: '不死药草', emoji: '🌸', description: '不死药的伴生灵草，药效约为不死药十分之一' },
        ],
      },
      {
        title: '灵矿类',
        emoji: '⛏️',
        color: 'text-orange-400',
        bgColor: 'bg-orange-500/10',
        borderColor: 'border-orange-500/30',
        description: '用于炼器的珍稀矿物',
        items: [
          { name: '精铁', emoji: '⚙️', description: '最基础的炼器材料，大量用于低阶法器' },
          { name: '寒铁', emoji: '❄️', description: '蕴含寒气，炼制冰属法宝的上好材料' },
          { name: '陨星铁', emoji: '☄️', description: '天外陨铁，炼制顶级法宝的核心材料' },
          { name: '太乙精金', emoji: '✨', description: '先天灵矿，炼制灵宝的绝佳之选' },
          { name: '混沌石', emoji: '🌀', description: '诞生于混沌的至宝矿石，蕴含天地法则' },
        ],
      },
      {
        title: '天火类',
        emoji: '🔥',
        color: 'text-red-400',
        bgColor: 'bg-red-500/10',
        borderColor: 'border-red-500/30',
        description: '炼丹炼器的顶级火源，天地异火',
        items: [
          { name: '地心火', emoji: '🌋', description: '最常见异火，取自地底熔岩，炼丹入门火源' },
          { name: '三昧真火', emoji: '🔥', description: '修炼者以自身三昧之力凝聚，温度远超凡火' },
          { name: '九幽冥火', emoji: '🌑', description: '来自九幽深渊，焚烧神魂最为厉害' },
          { name: '混沌神火', emoji: '🌀', description: '天地初开时诞生的至高火焰，万物皆可焚' },
          { name: '太阳真火', emoji: '☀️', description: '太阳星核之火，至阳至刚', source: '洪荒之永恒道主' },
        ],
      },
      {
        title: '圣物与异宝',
        emoji: '🏆',
        color: 'text-violet-400',
        bgColor: 'bg-violet-500/10',
        borderColor: 'border-violet-500/30',
        description: '超越常规分类的绝世珍宝',
        items: [
          { name: '远古遗物', emoji: '🗿', description: '上古大战遗留，蕴含远古强者的意志与力量' },
          { name: '天地圣物', emoji: '🌟', description: '天地法则凝聚而成，触碰即可悟道' },
          { name: '龙血凤髓', emoji: '🐉', description: '上古神兽精血，淬体至宝' },
          { name: '世界石', emoji: '🌍', description: '一粒沙含一方世界，空间类至宝', source: '完美世界' },
          { name: '鸿蒙紫气', emoji: '💜', description: '大道之基，成圣之钥', source: '洪荒之永恒道主' },
        ],
      },
    ],
    relatedNovels: ['rmjz', 'bi-luo', 'wan-mei', 'xi-zhen', 'da-zhu-zai'],
  },
];

export function getWikiEntryById(id: string): WikiEntry | undefined {
  return wikiEntries.find((w) => w.id === id);
}
