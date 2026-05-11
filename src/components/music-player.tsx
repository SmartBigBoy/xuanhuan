'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Music, Pause, Play, Volume2, VolumeX } from 'lucide-react';
import {
  initAudioEvents,
  subscribe,
  togglePlay,
  setVolume,
  isPlaying,
  getCurrentTime,
  getDuration,
  getVolume,
  seekTo,
} from '@/lib/audio-manager';
import { lyrics, songInfo } from '@/data/lyrics';

/* ===================== 工具函数 ===================== */
function formatTime(s: number): string {
  if (!s || !isFinite(s)) return '0:00';
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, '0')}`;
}

function findCurrentLine(time: number): number {
  let idx = 0;
  for (let i = 0; i < lyrics.length; i++) {
    if (lyrics[i].time <= time) idx = i;
    else break;
  }
  return idx;
}

/* 只展示当前行附近若干行（上2 + 当前行 + 下4） */
const VISIBLE_BEFORE = 2;
const VISIBLE_AFTER = 4;

/* ===================== 组件 ===================== */
export function MusicPlayer() {
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVol] = useState(1);
  const [lyricsVisible, setLyricsVisible] = useState(true);
  const [currentLine, setCurrentLine] = useState(0);
  const currentLineRef = useRef<HTMLDivElement>(null);

  /* 初始化 audio 事件 */
  useEffect(() => {
    initAudioEvents();
  }, []);

  /* 订阅音频状态变更 */
  useEffect(() => {
    const unsubscribe = subscribe(() => {
      setPlaying(isPlaying());
      setCurrentTime(getCurrentTime());
      setDuration(getDuration());
      setVol(getVolume());
    });
    return unsubscribe;
  }, []);

  /* 同步歌词高亮行 */
  useEffect(() => {
    setCurrentLine(findCurrentLine(currentTime));
  }, [currentTime]);

  /* 自动滚动当前行到可视区 */
  useEffect(() => {
    currentLineRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, [currentLine]);

  /* 音量切换 */
  const toggleMute = useCallback(() => {
    setVolume(volume > 0 ? 0 : 1);
  }, [volume]);

  /* 点击歌词行跳转 */
  const handleLineClick = useCallback((time: number) => {
    seekTo(time);
  }, []);

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

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

      {/* ================== 右侧浮动歌词（仅播放时显示） ================== */}
      {playing && lyricsVisible && (
        <div className="fixed right-4 top-[88px] z-40 w-56 select-none pointer-events-none">
          {/* 歌曲标题 */}
          <div className="mb-3 flex items-center gap-2 pointer-events-auto">
            <Music className="h-3.5 w-3.5 text-xian-gold/60 shrink-0" />
            <span className="text-xs text-xian-gold/50 font-medium truncate">
              {songInfo.title} · {songInfo.artist}
            </span>
          </div>

          {/* 歌词区域 */}
          <div className="space-y-1">
            {visibleLyrics.map((line) => {
              const isActive = line.time === lyrics[currentLine]?.time;
              const distFromActive = Math.abs(lyrics.indexOf(line) - currentLine);
              return (
                <div
                  key={`${line.time}-${line.text}`}
                  ref={isActive ? currentLineRef : undefined}
                  onClick={() => handleLineClick(line.time)}
                  className={`cursor-pointer transition-all duration-500 pointer-events-auto rounded-md px-2 py-1 ${
                    isActive
                      ? 'text-xian-gold text-base font-semibold'
                      : distFromActive <= 1
                        ? 'text-muted-foreground/50 text-sm hover:text-muted-foreground/70'
                        : 'text-muted-foreground/25 text-xs hover:text-muted-foreground/50'
                  }`}
                >
                  {line.text}
                </div>
              );
            })}
          </div>

          {/* 迷你控制条 */}
          <div className="mt-3 flex items-center gap-1.5 pointer-events-auto">
            {/* 进度条 */}
            <div className="flex-1 h-0.5 bg-xian-gold/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-xian-gold/40 rounded-full transition-[width] duration-200 ease-linear"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="text-[10px] text-muted-foreground/30 tabular-nums whitespace-nowrap">
              {formatTime(currentTime)}
            </span>
            <button
              onClick={toggleMute}
              className="flex h-5 w-5 items-center justify-center text-muted-foreground/30 hover:text-muted-foreground/60 transition-colors"
              aria-label={volume > 0 ? '静音' : '取消静音'}
            >
              {volume > 0 ? <Volume2 className="h-3 w-3" /> : <VolumeX className="h-3 w-3" />}
            </button>
            <button
              onClick={() => setLyricsVisible(false)}
              className="flex h-5 w-5 items-center justify-center text-muted-foreground/30 hover:text-muted-foreground/60 transition-colors"
              aria-label="隐藏歌词"
            >
              <Pause className="h-3 w-3" />
            </button>
          </div>
        </div>
      )}

      {/* ================== 歌词隐藏时的迷你恢复按钮 ================== */}
      {playing && !lyricsVisible && (
        <div className="fixed right-4 top-[88px] z-40 pointer-events-auto">
          <button
            onClick={() => setLyricsVisible(true)}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xian-gold/40 hover:text-xian-gold/70 hover:bg-xian-gold/5 transition-all text-xs"
            aria-label="显示歌词"
          >
            <Music className="h-3.5 w-3.5 animate-spin-slow" />
            <span className="truncate">{songInfo.title}</span>
          </button>
        </div>
      )}
    </>
  );
}
