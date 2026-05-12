(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,93631,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"warnOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},99832,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={assign:function(){return s},searchParamsToUrlQuery:function(){return i},urlQueryToSearchParams:function(){return u}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});function i(e){let t={};for(let[r,n]of e.entries()){let e=t[r];void 0===e?t[r]=n:Array.isArray(e)?e.push(n):t[r]=[e,n]}return t}function a(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function u(e){let t=new URLSearchParams;for(let[r,n]of Object.entries(e))if(Array.isArray(n))for(let e of n)t.append(r,a(e));else t.set(r,a(n));return t}function s(e,...t){for(let r of t){for(let t of r.keys())e.delete(t);for(let[t,n]of r.entries())e.append(t,n)}return e}},20887,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={formatUrl:function(){return u},formatWithValidation:function(){return l},urlObjectKeys:function(){return s}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let i=e.r(10229)._(e.r(99832)),a=/https?|ftp|gopher|file/;function u(e){let{auth:t,hostname:r}=e,n=e.protocol||"",o=e.pathname||"",u=e.hash||"",s=e.query||"",l=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?l=t+e.host:r&&(l=t+(~r.indexOf(":")?`[${r}]`:r),e.port&&(l+=":"+e.port)),s&&"object"==typeof s&&(s=String(i.urlQueryToSearchParams(s)));let c=e.search||s&&`?${s}`||"";return n&&!n.endsWith(":")&&(n+=":"),e.slashes||(!n||a.test(n))&&!1!==l?(l="//"+(l||""),o&&"/"!==o[0]&&(o="/"+o)):l||(l=""),u&&"#"!==u[0]&&(u="#"+u),c&&"?"!==c[0]&&(c="?"+c),o=o.replace(/[?#]/g,encodeURIComponent),c=c.replace("#","%23"),`${n}${l}${o}${c}${u}`}let s=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function l(e){return u(e)}},82101,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return o}});let n=e.r(8813);function o(e,t){let r=(0,n.useRef)(null),o=(0,n.useRef)(null);return(0,n.useCallback)(n=>{if(null===n){let e=r.current;e&&(r.current=null,e());let t=o.current;t&&(o.current=null,t())}else e&&(r.current=i(e,n)),t&&(o.current=i(t,n))},[e,t])}function i(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},42339,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={DecodeError:function(){return v},MiddlewareNotFoundError:function(){return x},MissingStaticPage:function(){return O},NormalizeError:function(){return m},PageNotFoundError:function(){return b},SP:function(){return g},ST:function(){return y},WEB_VITALS:function(){return i},execOnce:function(){return a},getDisplayName:function(){return f},getLocationOrigin:function(){return l},getURL:function(){return c},isAbsoluteUrl:function(){return s},isResSent:function(){return d},loadGetInitialProps:function(){return h},normalizeRepeatedSlashes:function(){return p},stringifyError:function(){return P}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let i=["CLS","FCP","FID","INP","LCP","TTFB"];function a(e){let t,r=!1;return(...n)=>(r||(r=!0,t=e(...n)),t)}let u=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,s=e=>u.test(e);function l(){let{protocol:e,hostname:t,port:r}=window.location;return`${e}//${t}${r?":"+r:""}`}function c(){let{href:e}=window.location,t=l();return e.substring(t.length)}function f(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function d(e){return e.finished||e.headersSent}function p(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function h(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await h(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&d(r))return n;if(!n)throw Object.defineProperty(Error(`"${f(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return n}let g="undefined"!=typeof performance,y=g&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class v extends Error{}class m extends Error{}class b extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class O extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class x extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function P(e){return JSON.stringify({message:e.message,stack:e.stack})}},88284,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"isLocalURL",{enumerable:!0,get:function(){return i}});let n=e.r(42339),o=e.r(636);function i(e){if(!(0,n.isAbsoluteUrl)(e))return!0;try{let t=(0,n.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,o.hasBasePath)(r.pathname)}catch(e){return!1}}},65568,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"errorOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},98861,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={default:function(){return v},useLinkStatus:function(){return b}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let i=e.r(10229),a=e.r(15952),u=i._(e.r(8813)),s=e.r(20887),l=e.r(57152),c=e.r(82101),f=e.r(42339),d=e.r(55328);e.r(93631);let p=e.r(30),h=e.r(88284),g=e.r(47529);function y(e){return"string"==typeof e?e:(0,s.formatUrl)(e)}function v(t){var r;let n,o,i,[s,v]=(0,u.useOptimistic)(p.IDLE_LINK_STATUS),b=(0,u.useRef)(null),{href:O,as:x,children:P,prefetch:k=null,passHref:_,replace:j,shallow:E,scroll:w,onClick:S,onMouseEnter:M,onTouchStart:T,legacyBehavior:C=!1,onNavigate:N,ref:R,unstable_dynamicOnHover:A,...L}=t;n=P,C&&("string"==typeof n||"number"==typeof n)&&(n=(0,a.jsx)("a",{children:n}));let z=u.default.useContext(l.AppRouterContext),U=!1!==k,$=!1!==k?null===(r=k)||"auto"===r?g.FetchStrategy.PPR:g.FetchStrategy.Full:g.FetchStrategy.PPR,{href:I,as:D}=u.default.useMemo(()=>{let e=y(O);return{href:e,as:x?y(x):e}},[O,x]);if(C){if(n?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});o=u.default.Children.only(n)}let B=C?o&&"object"==typeof o&&o.ref:R,F=u.default.useCallback(e=>(null!==z&&(b.current=(0,p.mountLinkInstance)(e,I,z,$,U,v)),()=>{b.current&&((0,p.unmountLinkForCurrentNavigation)(b.current),b.current=null),(0,p.unmountPrefetchableInstance)(e)}),[U,I,z,$,v]),K={ref:(0,c.useMergedRef)(F,B),onClick(t){C||"function"!=typeof S||S(t),C&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(t),!z||t.defaultPrevented||function(t,r,n,o,i,a,s){if("undefined"!=typeof window){let l,{nodeName:c}=t.currentTarget;if("A"===c.toUpperCase()&&((l=t.currentTarget.getAttribute("target"))&&"_self"!==l||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,h.isLocalURL)(r)){i&&(t.preventDefault(),location.replace(r));return}if(t.preventDefault(),s){let e=!1;if(s({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:f}=e.r(80350);u.default.startTransition(()=>{f(n||r,i?"replace":"push",a??!0,o.current)})}}(t,I,D,b,j,w,N)},onMouseEnter(e){C||"function"!=typeof M||M(e),C&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),z&&U&&(0,p.onNavigationIntent)(e.currentTarget,!0===A)},onTouchStart:function(e){C||"function"!=typeof T||T(e),C&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),z&&U&&(0,p.onNavigationIntent)(e.currentTarget,!0===A)}};return(0,f.isAbsoluteUrl)(D)?K.href=D:C&&!_&&("a"!==o.type||"href"in o.props)||(K.href=(0,d.addBasePath)(D)),i=C?u.default.cloneElement(o,K):(0,a.jsx)("a",{...L,...K,children:n}),(0,a.jsx)(m.Provider,{value:s,children:i})}e.r(65568);let m=(0,u.createContext)(p.IDLE_LINK_STATUS),b=()=>(0,u.useContext)(m);("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},78632,e=>{"use strict";let t=(0,e.i(82724).default)("Map",[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]]);e.s(["default",()=>t])},74001,(e,t,r)=>{t.exports=e.r(26970)},44121,e=>{"use strict";let t=(0,e.i(82724).default)("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);e.s(["Search",()=>t],44121)},68404,83549,e=>{"use strict";var t=e.i(15952),r=e.i(80639),n=e.i(33824);let o=e=>"boolean"==typeof e?`${e}`:0===e?"0":e,i=n.clsx,a=(e,t)=>r=>{var n;if((null==t?void 0:t.variants)==null)return i(e,null==r?void 0:r.class,null==r?void 0:r.className);let{variants:a,defaultVariants:u}=t,s=Object.keys(a).map(e=>{let t=null==r?void 0:r[e],n=null==u?void 0:u[e];if(null===t)return null;let i=o(t)||o(n);return a[e][i]}),l=r&&Object.entries(r).reduce((e,t)=>{let[r,n]=t;return void 0===n||(e[r]=n),e},{});return i(e,s,null==t||null==(n=t.compoundVariants)?void 0:n.reduce((e,t)=>{let{class:r,className:n,...o}=t;return Object.entries(o).every(e=>{let[t,r]=e;return Array.isArray(r)?r.includes({...u,...l}[t]):({...u,...l})[t]===r})?[...e,r,n]:e},[]),null==r?void 0:r.class,null==r?void 0:r.className)};e.s(["cva",0,a],83549);var u=e.i(83326);let s=a("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9","icon-sm":"size-8","icon-lg":"size-10"}},defaultVariants:{variant:"default",size:"default"}});function l({className:e,variant:n="default",size:o="default",asChild:i=!1,...a}){let l=i?r.Slot:"button";return(0,t.jsx)(l,{"data-inspector-line":"52","data-inspector-column":"4","data-inspector-relative-path":"src/components/ui/button.tsx","data-slot":"button","data-variant":n,"data-size":o,className:(0,u.cn)(s({variant:n,size:o,className:e})),...a})}e.s(["Button",()=>l],68404)},12631,e=>{"use strict";let t=(0,e.i(82724).default)("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);e.s(["Eye",()=>t],12631)},8452,e=>{"use strict";let t=(0,e.i(82724).default)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);e.s(["X",()=>t],8452)},58990,24341,e=>{"use strict";let t=(0,e.i(82724).default)("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);e.s(["BookOpen",()=>t],58990);let r=[{id:"realm-compare-1",title:"六大修仙小说境界体系横向对比",author:"灵虚子",category:"修炼体系对比",summary:"从凡人修仙传到遮天，从仙逆到大主宰，六大顶流修仙小说的境界体系到底有何异同？本文进行深入对比分析。",content:`修仙小说的境界体系是构建世界观的核心骨架，不同的境界设定反映了作者对"修仙"这一概念的不同理解。本文将从境界数量、进阶难度、战力跨度、寿命变化等维度，对六部顶流修仙小说的境界体系进行横向对比。

## 一、境界数量对比

| 小说 | 境界数量 | 是否细分 | 特色 |
|------|----------|----------|------|
| 凡人修仙传 | 12+ | 每阶分初/中/后/大圆满 | 层次最细 |
| 遮天 | 7 | 部分有细分 | 秘境概念独特 |
| 仙逆 | 10 | 凝气期分15层 | 逆修独创 |
| 大主宰 | 8 | 较简洁 | 位面交汇 |
| 吞噬星空 | 9 | 科幻化 | 跨越星球到宇宙 |
| 诛仙 | 4 | 玉清分9层 | 最简洁 |

## 二、核心差异分析

### 1. 修炼哲学差异
- **凡人流**（凡人修仙传、仙逆）：强调资质与机缘并重，修炼是漫长而艰辛的过程
- **天赋流**（遮天、大主宰）：更强调天赋与悟性，修炼效率差异巨大
- **科幻流**（吞噬星空）：将修炼与科技融合，基因层次是关键

### 2. 战力天花板差异
- 遮天的大帝可镇压一整片星空，战力天花板最高
- 凡人修仙传的太乙境虽强，但更注重境界间的量变积累
- 诛仙的天书境界最为神秘，战力上限未明

### 3. 寿命设定差异
不同小说对高阶修士的寿命设定差异巨大，从千年到永生不等。寿命设定直接影响修炼节奏和剧情推进方式。`,tags:["境界对比","修仙体系","横向分析"],publishDate:"2024-12-20",views:12800,isOriginal:!0},{id:"world-building-1",title:"修仙世界的地理学：从天南到乱星海",author:"墨染青衫",category:"世界观考据",summary:"深入考据凡人修仙传中的地理设定，从天南七派到乱星海星宫，还原一个完整的修仙世界地理版图。",content:`凡人修仙传的世界观构建精巧，地理设定严谨。本文将从地理学角度，对书中的主要区域进行考据与分析。

## 天南地区

天南是韩立修仙之路的起点，也是故事前半段的主要舞台。

### 地理特征
- 以越国为中心，辐射周边数国
- 灵气浓度适中，适合中小型宗门发展
- 七派联盟是天南最大的修仙势力

### 重要地点
1. **黄枫谷** - 韩立入门的宗门
2. **坠魔谷** - 上古大战遗址
3. **天星城** - 天南最大的修仙城市

## 乱星海

乱星海是凡人修仙传中最具特色的地理区域。

### 地理特征
- 分为内海和外海
- 内海由星宫控制，秩序相对稳定
- 外海是妖族的领地，凶险异常

### 势力分布
- **星宫** - 乱星海的实际统治者
- **妙音门** - 内海第二大势力
- **逆星盟** - 反星宫联盟`,tags:["地理考据","凡人修仙传","天南","乱星海"],publishDate:"2024-12-15",views:8900,isOriginal:!0},{id:"cultivation-theory-1",title:'论修仙小说中"道"的三重境界',author:"无为散人",category:"境界解析",summary:'从感悟天道、掌控天道到超脱天道，修仙小说中"道"的三个层次解析。',content:`修仙小说中的"道"是一个核心概念，贯穿了几乎所有修仙作品的始终。本文将从三个层次解析"道"在修仙小说中的含义。

## 第一重：感悟天道

这是修仙的入门阶段。修仙者通过修炼，开始感知天地间存在的法则与规律。

- 凡人修仙传中，化神期修士需要感悟天地法则
- 遮天中，轮海秘境是对生命法则的初步感知
- 仙逆中，"顺为凡"就是对天道的顺应

## 第二重：掌控天道

当修仙者对"道"的理解达到一定程度，便可以主动运用天道法则。

- 大乘期修士可改天换地
- 遮天大帝可以号令宇宙法则
- 仙逆的问鼎期是向天道发出叩问

## 第三重：超脱天道

这是修仙的终极目标——不再受天道约束，与天道平起平坐，甚至超越天道。

- 仙逆的踏天境——踏天而行
- 遮天的红尘仙——超脱帝境
- 凡人修仙传的太乙境——与天道相合`,tags:["道","天道","修炼哲学","境界解析"],publishDate:"2024-12-10",views:7200,isOriginal:!0},{id:"fan-work-1",title:"【同人】若韩立入遮天，境界对应几何？",author:"道心通明",category:"同人创作",summary:"假设凡人修仙传的韩立进入遮天世界，他的修为境界该如何对应？一篇趣味横生的跨界同人分析。",content:`这是一个纯粹的趣味假设：如果韩立带着修为进入遮天世界，他会是什么级别的强者？

## 炼气期 → 轮海初期

韩立初入修仙界，与叶凡刚开辟苦海时的状态类似。都是初窥门径的小修士。

## 筑基期 → 道宫初期

筑基期的韩立已经可以御剑飞行，相当于道宫秘境初期。但遮天世界的道宫修士战力更强一些。

## 结丹期 → 四极秘境

结丹期是凡人修仙传的重要分水岭，对应遮天的四极秘境。两者都是战力飞跃的关键阶段。

## 元婴期 → 龙化秘境

元婴出窍，拥有第二生命，对应龙化的肉身蜕变。都是修士质的飞跃。

## 化神期 → 仙台一层（圣人）

化神期修士已可掌控天地之力，相当于遮天圣人境。两者都是各自世界中公认的高手。

## 大乘期 → 仙台四层（准帝到大帝之间）

大乘期是凡人界的巅峰，对应遮天的准帝甚至大帝初期。但大帝有"天心印记"加成，实际战力可能更强。

## 太乙境 → 红尘仙

太乙境是凡人修仙传的至高境界，对应遮天的红尘仙。两者都已超脱凡俗，近乎永生。

---

*注：本文纯属趣味推演，不同小说的世界观与战力体系各有侧重，任何对比都存在局限性。*`,tags:["同人","韩立","遮天","跨界对比"],publishDate:"2024-12-05",views:15600,isOriginal:!0},{id:"resource-share-1",title:"修仙小说经典地图资源合集（持续更新）",author:"资料站编辑部",category:"资源分享",summary:"整理各平台优质修仙小说世界地图资源，按作品分类汇总，方便查阅下载。",content:`本站持续收集整理各平台优质的修仙小说世界地图资源，以下是目前已收录的资源清单。

## 凡人修仙传

| 地图名称 | 类型 | 分辨率 | 来源 |
|----------|------|--------|------|
| 修仙界全景地图 | 全景 | 6000\xd74000 | 本站原创 |
| 乱星海势力分布 | 势力 | 4500\xd73000 | 本站原创 |

## 遮天

| 地图名称 | 类型 | 分辨率 | 来源 |
|----------|------|--------|------|
| 星空古路全图 | 星域 | 8000\xd75000 | 本站原创 |
| 东荒势力分布 | 势力 | 7000\xd74500 | 本站原创 |

## 诛仙

| 地图名称 | 类型 | 分辨率 | 来源 |
|----------|------|--------|------|
| 青云门详图 | 城市 | 5000\xd73500 | 本站原创 |
| 中土世界全景 | 全景 | 6500\xd74200 | 本站原创 |

---

所有地图资源均可在"世界地图下载"栏目中查看预览并下载。

*声明：所有地图资源均为原创整理或已获授权，如涉及版权问题请联系 tanggao@coze.email。*`,tags:["地图","资源合集","持续更新"],publishDate:"2024-12-01",views:22100,isOriginal:!0},{id:"submit-guide",title:"投稿指南：如何为资料站贡献内容",author:"资料站编辑部",category:"投稿专区",summary:"详细说明本站的投稿规范、内容要求、格式标准和投稿流程，欢迎各位道友积极参与共建。",content:`感谢您对本站的关注与支持！我们欢迎所有修仙小说爱好者投稿，共同建设最全面的修仙资料库。

## 投稿内容范围

1. **境界体系解析** - 对小说境界体系的详细解读
2. **世界观考据** - 对小说世界观的地理、历史、文化等考据
3. **修炼体系对比** - 不同小说间的境界、体系对比分析
4. **同人创作** - 基于原著的合理推测与创作
5. **资源分享** - 地图、设定图等可视化资源

## 投稿要求

- 内容须为原创或已获授权
- 引用原著内容需注明出处
- 观点须有依据，避免主观臆断
- 图文并茂者优先采用
- 字数建议 1000 字以上

## 格式规范

- 标题简洁明确
- 使用 Markdown 格式
- 表格数据需注明来源
- 图片需为高清无水印

## 投稿方式

请将稿件发送至 tanggao@coze.email，或在本站投稿专区提交。编辑部将在 3 个工作日内回复审核结果。

---

*本站为纯公益性质，所有投稿内容仅供学习交流，不涉及任何商业用途。*`,tags:["投稿指南","规范","共建"],publishDate:"2024-11-20",views:5600,isOriginal:!0}];e.s(["articleCategories",0,["境界解析","世界观考据","修炼体系对比","同人创作","资源分享","投稿专区"],"articles",0,r],24341)}]);