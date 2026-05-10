# 诸天图鉴阁 — 修仙玄幻小说境界体系与地图资料站

## 项目概览

诸天图鉴阁是一个纯公益性质的网文资料站，专注于修仙玄幻小说的境界体系解析、世界地图资源分享与修仙设定百科。站点定位为非商业、共建共享的知识库。

### 版本技术栈

- **Framework**: Next.js 16 (App Router)
- **Core**: React 19
- **Language**: TypeScript 5
- **UI 组件**: shadcn/ui (基于 Radix UI)
- **Styling**: Tailwind CSS 4 (暗色修仙主题)

## 目录结构

```
├── public/                    # 静态资源
├── scripts/                   # 构建与启动脚本
├── src/
│   ├── app/                   # 页面路由与布局
│   │   ├── layout.tsx         # 根布局 (含 SiteHeader + SiteFooter)
│   │   ├── page.tsx           # 首页
│   │   ├── globals.css        # 全局样式 (修仙主题色彩体系)
│   │   ├── realms/            # 修仙境界大全栏目
│   │   │   ├── page.tsx       # 境界列表页 (按小说分类)
│   │   │   └── [id]/page.tsx  # 单部小说境界详情页
│   │   ├── maps/              # 世界地图下载栏目
│   │   │   ├── page.tsx       # 地图列表页 (含筛选, Client Component)
│   │   │   └── [id]/page.tsx  # 单张地图详情页
│   │   ├── wiki/              # 修仙设定百科栏目
│   │   │   ├── page.tsx       # 百科条目列表
│   │   │   └── [id]/page.tsx  # 百科条目详情页
│   │   └── community/         # 资料杂谈&投稿专区
│   │       ├── page.tsx       # 文章列表 (含分类筛选, Client Component)
│   │       └── [id]/page.tsx  # 文章详情页
│   ├── components/            # 自定义组件
│   │   ├── site-header.tsx    # 顶部导航 (Client Component, 含移动端菜单)
│   │   ├── site-footer.tsx    # 底部版权区 (含免责声明)
│   │   └── ui/                # Shadcn UI 组件库
│   ├── data/                  # 数据层 (静态数据)
│   │   ├── novels.ts          # 小说基础数据 (10部顶流修仙小说)
│   │   ├── realms.ts          # 境界体系数据 + 百科条目数据
│   │   ├── maps.ts            # 世界地图资源数据
│   │   ├── articles.ts        # 文章数据 (含投稿指南)
│   │   └── site.ts            # 站点配置 + 公告数据
│   ├── hooks/                 # 自定义 Hooks
│   ├── lib/                   # 工具库
│   │   └── utils.ts           # 通用工具函数 (cn)
│   └── server.ts              # 自定义服务端入口
├── next.config.ts             # Next.js 配置
├── package.json               # 项目依赖管理
└── tsconfig.json              # TypeScript 配置
```

## 主题设计

- **色彩体系**: 以深紫/暗蓝为底，金色/琥珀为强调色，营造修仙玄幻氛围
- **CSS 变量**: 在 `globals.css` 中定义了 `--xian-gold`、`--xian-amber`、`--xian-purple`、`--xian-deep`、`--xian-cyan` 等主题色
- **装饰类**: `.xian-divider` (金色渐变分隔线)、`.xian-glow` (金色辉光)、`.xian-text-glow` (文字辉光)、`.xian-card` (渐变边框卡片)、`.xian-bg-pattern` (微妙点阵背景)
- **表格样式**: `.xian-table` 提供深色主题表格样式
- **排版规范**: `.prose-xian` 提供 Markdown 内容的修仙主题排版

## 包管理规范

**仅允许使用 pnpm** 作为包管理器，**严禁使用 npm 或 yarn**。

## 开发规范

### 编码规范

- 默认按 TypeScript `strict` 心智写代码
- 禁止隐式 `any` 和 `as any`
- 页面组件尽量使用 Server Component，需要交互的部分使用 Client Component (`'use client'`)
- 动态路由详情页使用 `export const dynamic = 'force-dynamic'` 确保运行时渲染

### Hydration 问题防范

1. 严禁在 JSX 渲染逻辑中直接使用 typeof window、Date.now()、Math.random()
2. 禁止使用 head 标签，优先使用 metadata API
3. 动态内容必须使用 'use client' 并配合 useEffect + useState

## 构建与测试

```bash
pnpm dev          # 启动开发服务器 (端口 5000)
pnpm build        # 构建生产版本
pnpm start        # 启动生产服务器
pnpm ts-check     # TypeScript 类型检查
pnpm lint:build   # ESLint 静态检查
```

## 数据说明

所有内容数据位于 `src/data/` 目录，为静态数据文件（无数据库依赖）：
- **小说数据**: 10部顶流修仙小说的基础信息与分类
- **境界数据**: 6部小说的完整境界体系（凡人修仙传12境、遮天7境、仙逆10境等）
- **地图数据**: 8张世界地图资源的元信息
- **百科数据**: 6个通用修仙设定条目（灵根、天道、丹药、法宝、天劫、宗门）
- **文章数据**: 6篇原创文章（含境界对比、世界观考据、投稿指南等）
