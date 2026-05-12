'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Music, X, GripVertical } from 'lucide-react';
import {
  initAudioEvents,
  subscribe,
  togglePlay,
  isPlaying,
  getCurrentTime,
  seekTo,
} from '@/lib/audio-manager';
import { lyrics, songInfo } from '@/data/lyrics';

/* ===================== 工具函数 ===================== */
function findCurrentLine(time: number): number {
  let idx = 0;
  for (let i = 0; i < lyrics.length; i++) {
    if (lyrics[i].time <= time) idx = i;
    else break;
  }
  return idx;
}

const VISIBLE_BEFORE = 1;
const VISIBLE_AFTER = 1;

/* ===================== 组件 ===================== */
export function MusicPlayer() {
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [lyricsVisible, setLyricsVisible] = useState(true);
  const [currentLine, setCurrentLine] = useState(0);
  const currentLineRef = useRef<HTMLDivElement>(null);
  const lyricsBoxRef = useRef<HTMLDivElement>(null);

  /* 拖拽位置（默认右侧导航栏下方，SSR 安全） */
  const [pos, setPos] = useState({ x: 0, y: 88 });
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setPos({ x: window.innerWidth - 220, y: 88 });
    setMounted(true);
  }, []);

  /* 拖拽状态 */
  const dragging = useRef(false);
  const dragStart = useRef({ mx: 0, my: 0, px: 0, py: 0 });

  /* 初始化 audio 事件 */
  useEffect(() => {
    initAudioEvents();
  }, []);

  /* 订阅音频状态变更 */
  useEffect(() => {
    const unsubscribe = subscribe(() => {
      setPlaying(isPlaying());
      setCurrentTime(getCurrentTime());
    });
    return unsubscribe;
  }, []);

  /* 同步歌词高亮行 */
  useEffect(() => {
    setCurrentLine(findCurrentLine(currentTime));
  }, [currentTime]);

  /* 仅在歌词容器内滚动到当前行，不影响页面 */
  useEffect(() => {
    const container = lyricsBoxRef.current;
    const lineEl = currentLineRef.current;
    if (!container || !lineEl) return;
    const containerRect = container.getBoundingClientRect();
    const lineRect = lineEl.getBoundingClientRect();
    const offset =
      lineRect.top -
      containerRect.top +
      container.scrollTop -
      container.clientHeight / 2 +
      lineEl.clientHeight / 2;
    container.scrollTo({ top: offset, behavior: 'smooth' });
  }, [currentLine]);

  /* 阻止歌词区域滚动穿透到页面 */
  const preventScrollPropagation = useCallback(
    (e: React.WheelEvent<HTMLDivElement>) => {
      const el = e.currentTarget;
      const { scrollTop, scrollHeight, clientHeight } = el;
      const { deltaY } = e;
      if (deltaY > 0 && scrollTop + clientHeight >= scrollHeight) {
        e.preventDefault();
      }
      if (deltaY < 0 && scrollTop <= 0) {
        e.preventDefault();
      }
    },
    [],
  );

  /* 点击歌词行跳转 */
  const handleLineClick = useCallback((time: number) => {
    seekTo(time);
  }, []);

  /* ===== 拖拽逻辑 ===== */
  const handleDragStart = useCallback(
    (e: React.MouseEvent | React.TouchEvent) => {
      e.preventDefault();
      dragging.current = true;

      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

      dragStart.current = {
        mx: clientX,
        my: clientY,
        px: pos.x,
        py: pos.y,
      };
    },
    [pos],
  );

  useEffect(() => {
    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!dragging.current) return;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      const dx = clientX - dragStart.current.mx;
      const dy = clientY - dragStart.current.my;
      const newX = Math.max(0, Math.min(window.innerWidth - 60, dragStart.current.px + dx));
      const newY = Math.max(0, Math.min(window.innerHeight - 60, dragStart.current.py + dy));
      setPos({ x: newX, y: newY });
    };

    const onUp = () => {
      dragging.current = false;
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
    document.addEventListener('touchmove', onMove, { passive: false });
    document.addEventListener('touchend', onUp);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
      document.removeEventListener('touchmove', onMove);
      document.removeEventListener('touchend', onUp);
    };
  }, []);

  /* 可见歌词行范围 */
  const startLine = Math.max(0, currentLine - VISIBLE_BEFORE);
  const endLine = Math.min(lyrics.length - 1, currentLine + VISIBLE_AFTER);
  const visibleLyrics = lyrics.slice(startLine, endLine + 1);

  return (
    <>
      {/* ================== 导航栏音乐按钮 ================== */}
      <button
        onClick={togglePlay}
        className={`relative flex items-center justify-center h-10 w-10 rounded-lg border transition-all duration-300 ${
          playing
            ? 'border-xian-gold/40 text-xian-gold bg-xian-gold/10 shadow-sm shadow-xian-gold/20'
            : 'border-border/50 text-muted-foreground hover:text-xian-gold hover:border-xian-gold/30'
        }`}
        title={playing ? '暂停音乐' : '播放音乐'}
        aria-label={playing ? '暂停音乐' : '播放音乐'}
      >
        <Music className={`h-5 w-5 ${playing ? 'animate-spin-slow' : ''}`} />
        {playing && (
          <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-xian-gold opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-xian-gold" />
          </span>
        )}
      </button>

      {/* ================== 可拖拽浮动歌词（仅播放时显示） ================== */}
      {playing && lyricsVisible && (
        <div
          ref={lyricsBoxRef}
          onWheel={preventScrollPropagation}
          className="fixed z-40 w-52 max-h-[96px] overflow-hidden select-none group"
          style={{
            left: pos.x,
            top: pos.y,
            scrollbarWidth: 'none',
          }}
        >
          {/* 拖拽手柄 + 折叠按钮 */}
          <div
            onMouseDown={handleDragStart}
            onTouchStart={handleDragStart}
            className="flex items-center justify-between mb-0.5 cursor-grab active:cursor-grabbing"
          >
            <div className="flex items-center gap-1">
              <GripVertical className="h-3 w-3 text-muted-foreground/20 group-hover:text-muted-foreground/40 transition-colors" />
              <span className="text-[10px] text-xian-gold/30 font-medium truncate">
                {songInfo.title} · {songInfo.artist}
              </span>
            </div>
            <button
              onClick={() => setLyricsVisible(false)}
              className="flex h-4 w-4 items-center justify-center rounded text-muted-foreground/50 hover:text-muted-foreground transition-all opacity-0 group-hover:opacity-100"
              aria-label="折叠歌词"
            >
              <X className="h-2.5 w-2.5" />
            </button>
          </div>

          {/* 歌词区域 */}
          <div className="space-y-0.5">
            {visibleLyrics.map((line, i) => {
              const globalIdx = startLine + i;
              const isActive = globalIdx === currentLine;
              const dist = Math.abs(globalIdx - currentLine);
              return (
                <div
                  key={`${line.time}-${line.text}`}
                  ref={isActive ? currentLineRef : undefined}
                  onClick={() => handleLineClick(line.time)}
                  className={`cursor-pointer transition-all duration-500 rounded-md px-1.5 py-0.5 ${
                    isActive
                      ? 'text-xian-gold text-sm font-semibold'
                      : dist <= 1
                        ? 'text-muted-foreground/40 text-xs hover:text-muted-foreground/60'
                        : 'text-muted-foreground/20 text-[11px] hover:text-muted-foreground/40'
                  }`}
                >
                  {line.text}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ================== 歌词折叠后的迷你恢复按钮（同样可拖拽） ================== */}
      {playing && !lyricsVisible && (
        <div
          className="fixed z-40"
          style={{ left: pos.x, top: pos.y }}
        >
          <button
            onClick={() => setLyricsVisible(true)}
            className="flex items-center gap-1.5 px-2 py-1 rounded-md text-xian-gold/30 hover:text-xian-gold/60 hover:bg-xian-gold/5 transition-all text-[11px] cursor-pointer"
            aria-label="显示歌词"
          >
            <Music className="h-3 w-3 animate-spin-slow" />
            <span className="truncate max-w-24">{songInfo.title}</span>
          </button>
        </div>
      )}
    </>
  );
}
