'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';

export type XianTheme = 'night' | 'day' | 'eye-care';

interface XianThemeCtx {
  theme: XianTheme;
  setTheme: (t: XianTheme) => void;
  cycleTheme: () => void;
}

const Ctx = createContext<XianThemeCtx | null>(null);

const ORDER: XianTheme[] = ['night', 'day', 'eye-care'];

export function XianThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<XianTheme>('night');

  useEffect(() => {
    const saved = localStorage.getItem('xian-theme') as XianTheme | null;
    if (saved && ORDER.includes(saved)) {
      setThemeState(saved);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.removeAttribute('data-theme');
    root.setAttribute('data-theme', theme);
    localStorage.setItem('xian-theme', theme);
  }, [theme]);

  const setTheme = useCallback((t: XianTheme) => setThemeState(t), []);
  const cycleTheme = useCallback(() => {
    setThemeState((prev) => {
      const idx = ORDER.indexOf(prev);
      return ORDER[(idx + 1) % ORDER.length];
    });
  }, []);

  return (
    <Ctx.Provider value={{ theme, setTheme, cycleTheme }}>
      {children}
    </Ctx.Provider>
  );
}

export function useXianTheme() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('useXianTheme must be used inside XianThemeProvider');
  return ctx;
}
