'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Menu,
  X,
  Moon,
  Sun,
  Eye,
  Search,
  BookOpen,
  Map,
  ScrollText,
  MessageSquare,
  Sparkles,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useXianTheme, type XianTheme } from '@/components/xian-theme-provider';
import { novels } from '@/data/novels';
import { realmSystems } from '@/data/realms';
import { worldMaps } from '@/data/maps';
import { wikiEntries } from '@/data/realms';
import { articles } from '@/data/articles';

/* ===================== Nav links ===================== */
const navLinks = [
  { href: '/realms', label: '境界大全', icon: BookOpen },
  { href: '/maps', label: '世界地图', icon: Map },
  { href: '/wiki', label: '设定百科', icon: ScrollText },
  { href: '/community', label: '资料杂谈', icon: MessageSquare },
];

/* ===================== Search result types ===================== */
interface SearchItem {
  title: string;
  href: string;
  type: 'novel' | 'realm' | 'map' | 'wiki' | 'article';
  desc: string;
}

const typeLabels: Record<SearchItem['type'], string> = {
  novel: '小说',
  realm: '境界',
  map: '地图',
  wiki: '百科',
  article: '文章',
};

function buildSearchData(): SearchItem[] {
  const items: SearchItem[] = [];
  for (const n of novels) {
    items.push({ title: n.title, href: `/realms/${n.id}`, type: 'novel', desc: n.author });
  }
  for (const r of realmSystems) {
    items.push({ title: r.novelTitle, href: `/realms/${r.novelId}`, type: 'realm', desc: `${r.levels.length}层境界` });
  }
  for (const m of worldMaps) {
    items.push({ title: m.title, href: `/maps/${m.id}`, type: 'map', desc: m.novelTitle });
  }
  for (const w of wikiEntries) {
    items.push({ title: w.title, href: `/wiki/${w.id}`, type: 'wiki', desc: w.summary });
  }
  for (const a of articles) {
    items.push({ title: a.title, href: `/community/${a.id}`, type: 'article', desc: a.summary });
  }
  return items;
}

/* ===================== Theme icon helper ===================== */
function ThemeIcon({ theme }: { theme: XianTheme }) {
  switch (theme) {
    case 'night':
      return <Moon className="h-5 w-5" />;
    case 'day':
      return <Sun className="h-5 w-5" />;
    case 'eye-care':
      return <Eye className="h-5 w-5" />;
  }
}

function ThemeLabel({ theme }: { theme: XianTheme }) {
  switch (theme) {
    case 'night':
      return '夜晚';
    case 'day':
      return '白天';
    case 'eye-care':
      return '护眼';
  }
}

/* ===================== Component ===================== */
export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { theme, cycleTheme } = useXianTheme();

  /* search state */
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchItem[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const searchDataRef = useRef<SearchItem[] | null>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  /* lazy-init search data */
  const getSearchData = useCallback(() => {
    if (!searchDataRef.current) searchDataRef.current = buildSearchData();
    return searchDataRef.current;
  }, []);

  /* handle search input */
  const handleQuery = useCallback(
    (val: string) => {
      setQuery(val);
      if (!val.trim()) {
        setResults([]);
        return;
      }
      const q = val.toLowerCase();
      const filtered = getSearchData().filter(
        (item) =>
          item.title.toLowerCase().includes(q) || item.desc.toLowerCase().includes(q)
      );
      setResults(filtered.slice(0, 12));
    },
    [getSearchData]
  );

  /* open search */
  const openSearch = useCallback(() => {
    setSearchOpen(true);
    setTimeout(() => inputRef.current?.focus(), 50);
  }, []);

  /* close search */
  const closeSearch = useCallback(() => {
    setSearchOpen(false);
    setQuery('');
    setResults([]);
  }, []);

  /* keyboard shortcut */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (searchOpen) closeSearch();
        else openSearch();
      }
      if (e.key === 'Escape' && searchOpen) closeSearch();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [searchOpen, openSearch, closeSearch]);

  /* click outside to close */
  useEffect(() => {
    if (!searchOpen) return;
    const handler = (e: MouseEvent) => {
      if (overlayRef.current && !overlayRef.current.contains(e.target as Node)) {
        closeSearch();
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [searchOpen, closeSearch]);

  return (
    <>
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/30">
        {/* Top accent line */}
        <div className="h-[2px] bg-gradient-to-r from-transparent via-xian-gold/60 to-transparent" />

        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-xian-gold via-xian-amber to-xian-gold shadow-lg shadow-xian-gold/20 group-hover:shadow-xian-gold/40 transition-shadow">
              <Sparkles className="h-6 w-6 text-xian-deep" />
              <div className="absolute inset-0 rounded-xl border border-xian-gold/30" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-bold text-xian-gold font-serif tracking-wider leading-none">
                诸天图鉴阁
              </span>
              <span className="text-[10px] text-muted-foreground/60 tracking-widest mt-0.5 hidden sm:block">
                诸天万界 · 一阁尽览
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const active = pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-base font-medium transition-all duration-200 ${
                    active
                      ? 'text-xian-gold bg-xian-gold/10 border border-xian-gold/20 shadow-sm shadow-xian-gold/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-accent/60 border border-transparent'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            {/* Search trigger */}
            <Button
              variant="ghost"
              size="sm"
              className="hidden sm:flex items-center gap-2.5 text-muted-foreground h-10 px-4 border border-border/50 rounded-lg hover:border-xian-gold/30 hover:text-xian-gold transition-all"
              onClick={openSearch}
            >
              <Search className="h-[18px] w-[18px]" />
              <span className="text-sm">搜索</span>
              <kbd className="ml-1.5 text-[11px] text-muted-foreground/50 border border-border/40 rounded px-1.5 py-0.5 bg-background/50">
                ⌘K
              </kbd>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="sm:hidden h-10 w-10"
              onClick={openSearch}
            >
              <Search className="h-5 w-5" />
            </Button>

            {/* Theme toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center gap-2 h-10 px-3 text-muted-foreground hover:text-xian-gold border border-border/50 rounded-lg hover:border-xian-gold/30 transition-all"
              onClick={cycleTheme}
              title={`当前：${ThemeLabel({ theme })}模式，点击切换`}
            >
              <ThemeIcon theme={theme} />
              <span className="hidden sm:inline text-sm">{ThemeLabel({ theme })}</span>
            </Button>

            {/* Mobile menu toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden h-10 w-10 border border-border/50 rounded-lg"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile nav dropdown */}
        {mobileOpen && (
          <div className="md:hidden border-t border-border/30 bg-background/95 backdrop-blur-md">
            <nav className="flex flex-col p-4 gap-1.5">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const active = pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      active
                        ? 'text-xian-gold bg-xian-gold/10 border border-xian-gold/20'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent/60'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </header>

      {/* ===================== Search Overlay ===================== */}
      {searchOpen && (
        <div className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm flex items-start justify-center pt-[12vh]">
          <div
            ref={overlayRef}
            className="w-full max-w-lg mx-4 bg-card border border-border/60 rounded-xl shadow-2xl shadow-black/30 overflow-hidden"
          >
            {/* Search input */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-border/50">
              <Search className="h-5 w-5 text-muted-foreground shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => handleQuery(e.target.value)}
                placeholder="搜索小说、境界、地图、百科、文章…"
                className="flex-1 bg-transparent text-base text-foreground placeholder:text-muted-foreground outline-none"
              />
              <kbd className="text-[11px] text-muted-foreground/50 border border-border/40 rounded px-2 py-0.5 bg-background/50">
                ESC
              </kbd>
            </div>

            {/* Results */}
            <div className="max-h-[50vh] overflow-y-auto">
              {query.trim() && results.length === 0 && (
                <div className="px-5 py-10 text-center text-base text-muted-foreground">
                  未找到与 &quot;{query}&quot; 相关的内容
                </div>
              )}
              {results.map((item) => (
                <Link
                  key={item.href + item.title}
                  href={item.href}
                  onClick={closeSearch}
                  className="flex items-center gap-3 px-5 py-3 hover:bg-accent/60 transition-colors"
                >
                  <span className="shrink-0 text-xs px-2 py-0.5 rounded-md border border-xian-gold/20 text-xian-gold bg-xian-gold/5">
                    {typeLabels[item.type]}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="text-base font-medium truncate">{item.title}</div>
                    <div className="text-sm text-muted-foreground truncate">{item.desc}</div>
                  </div>
                </Link>
              ))}
              {!query.trim() && (
                <div className="px-5 py-10 text-center text-base text-muted-foreground">
                  输入关键词开始搜索
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
