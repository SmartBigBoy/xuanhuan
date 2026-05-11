'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Music, X } from 'lucide-react';
import {
  initAudioEvents,
  subscribe,
  togglePlay,
  isPlaying,
  getCurrentTime,
  getDuration,
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

/* 只展示当前行附近若干行 */
const VISIBLE_BEFORE = 2;
const VISIBLE_AFTER = 4;

/* ===================== 组件 ===================== */
export function MusicPlayer() {
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [lyricsVisible, setLyricsVisible] = useState(true);
  const [currentLine, setCurrentLine] = useState(0);
  const currentLineRef = useRef<HTMLDivElement>(null);
  const lyricsBoxRef = useRef<HTMLDivElement>(null);

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

  /* 自动滚动当前行到可视区 — 只滚动歌词容器，阻止穿透到页面 */
  useEffect(() => {
    currentLineRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, [currentLine]);

  /* 阻止歌词区域滚动穿透到页面 */
  const preventScrollPropagation = useCallback((e: React.WheelEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const { scrollTop, scrollHeight, clientHeight } = el;
    const { deltaY } = e;

    // 向下滚动到底部时阻止继续
    if (deltaY > 0 && scrollTop + clientHeight >= scrollHeight) {
      e.preventDefault();
    }
    // 向上滚动到顶部时阻止继续
    if (deltaY < 0 && scrollTop <= 0) {
      e.preventDefault();
    }
  }, []);

  /* 点击歌词行跳转 */
  const handleLineClick = useCallback((time: number) => {
    seekTo(time);
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

      {/* ================== 右侧浮动透明歌词（仅播放时显示） ================== */}
      {playing && lyricsVisible && (
        <div
          ref={lyricsBoxRef}
          onWheel={preventScrollPropagation}
          className="fixed right-5 top-[88px] z-40 w-52 max-h-[60vh] overflow-y-auto select-none group"
          style={{
            maskImage: 'linear-gradient(to bottom, transparent 0%, black 8%, black 88%, transparent 100%)',
            scrollbarWidth: 'none',
          }}
        >
          {/* 折叠按钮 — 仅 hover 歌词区域时显示 */}
          <button
            onClick={() => setLyricsVisible(false)}
            className="absolute top-0 right-0 z-10 flex h-6 w-6 items-center justify-center rounded-md text-muted-foreground/0 hover:text-muted-foreground/60 hover:bg-background/40 transition-all opacity-0 group-hover:opacity-100"
            aria-label="折叠歌词"
          >
            <X className="h-3.5 w-3.5" />
          </button>

          {/* 歌曲标题 */}
          <div className="mb-2.5 flex items-center gap-1.5">
            <Music className="h-3 w-3 text-xian-gold/40 shrink-0" />
            <span className="text-[11px] text-xian-gold/35 font-medium truncate">
              {songInfo.title} · {songInfo.artist}
            </span>
          </div>

          {/* 歌词区域 */}
          <div className="space-y-0.5">
            {visibleLyrics.map((line) => {
              const globalIdx = startLine + visibleLyrics.indexOf(line);
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

      {/* ================== 歌词隐藏时的迷你恢复按钮 ================== */}
      {playing && !lyricsVisible && (
        <div className="fixed right-5 top-[88px] z-40 pointer-events-auto">
          <button
            onClick={() => setLyricsVisible(true)}
            className="flex items-center gap-1.5 px-2 py-1 rounded-md text-xian-gold/30 hover:text-xian-gold/60 hover:bg-xian-gold/5 transition-all text-[11px]"
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
