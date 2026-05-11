'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Music, Pause, Play, Volume2, VolumeX, X, ChevronUp } from 'lucide-react';
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

/* ===================== 组件 ===================== */
export function MusicPlayer() {
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVol] = useState(1);
  const [panelOpen, setPanelOpen] = useState(false);
  const [currentLine, setCurrentLine] = useState(0);
  const lyricsContainerRef = useRef<HTMLDivElement>(null);
  const lineRefs = useRef<(HTMLDivElement | null)[]>([]);
  const progressRef = useRef<HTMLDivElement>(null);

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
    const line = findCurrentLine(currentTime);
    setCurrentLine(line);
  }, [currentTime]);

  /* 自动滚动歌词到当前行 */
  useEffect(() => {
    const container = lyricsContainerRef.current;
    const lineEl = lineRefs.current[currentLine];
    if (!container || !lineEl) return;
    const containerH = container.clientHeight;
    const lineTop = lineEl.offsetTop;
    const lineH = lineEl.clientHeight;
    const scrollTo = lineTop - containerH / 2 + lineH / 2;
    container.scrollTo({ top: scrollTo, behavior: 'smooth' });
  }, [currentLine]);

  /* 进度条点击跳转 */
  const handleProgressClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const bar = progressRef.current;
    if (!bar || !duration) return;
    const rect = bar.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    seekTo(ratio * duration);
  }, [duration]);

  /* 音量切换 */
  const toggleMute = useCallback(() => {
    setVolume(volume > 0 ? 0 : 1);
  }, [volume]);

  /* 点击歌词行跳转 */
  const handleLineClick = useCallback((time: number) => {
    seekTo(time);
  }, []);

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <>
      {/* ================== 导航栏音乐按钮 ================== */}
      <button
        onClick={() => {
          if (panelOpen) {
            setPanelOpen(false);
          } else {
            togglePlay();
          }
        }}
        onContextMenu={(e) => {
          e.preventDefault();
          setPanelOpen(true);
        }}
        className={`relative flex items-center justify-center h-10 w-10 rounded-lg border transition-all duration-300 ${
          playing
            ? 'border-xian-gold/40 text-xian-gold bg-xian-gold/10 shadow-sm shadow-xian-gold/20'
            : 'border-border/50 text-muted-foreground hover:text-xian-gold hover:border-xian-gold/30'
        }`}
        title="音乐播放器"
        aria-label="音乐播放器"
      >
        <Music className={`h-5 w-5 ${playing ? 'animate-spin-slow' : ''}`} />
        {playing && (
          <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-xian-gold opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-xian-gold" />
          </span>
        )}
      </button>

      {/* ================== 底部播放栏（播放时显示） ================== */}
      {playing && !panelOpen && (
        <div
          className="fixed bottom-0 left-0 right-0 z-[55] bg-card/95 backdrop-blur-md border-t border-xian-gold/20 shadow-lg shadow-black/20"
        >
          {/* 进度条（极细，放在最顶部） */}
          <div
            ref={progressRef}
            className="h-1 bg-xian-gold/10 cursor-pointer group"
            onClick={handleProgressClick}
          >
            <div
              className="h-full bg-gradient-to-r from-xian-gold to-xian-amber transition-[width] duration-200 ease-linear group-hover:h-1.5"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-2.5">
            {/* 歌曲信息 */}
            <div className="flex items-center gap-3 min-w-0 flex-1">
              <button
                onClick={() => setPanelOpen(true)}
                className="flex items-center gap-3 min-w-0 group cursor-pointer"
                aria-label="展开歌词面板"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-xian-gold/20 to-xian-amber/20 border border-xian-gold/20 group-hover:border-xian-gold/40 transition-colors">
                  <Music className="h-4 w-4 text-xian-gold" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-medium text-foreground truncate">{songInfo.title}</div>
                  <div className="text-xs text-muted-foreground truncate">{songInfo.artist}</div>
                </div>
              </button>
            </div>

            {/* 播放控制 */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground tabular-nums hidden sm:block">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
              <button
                onClick={togglePlay}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-xian-gold/15 text-xian-gold hover:bg-xian-gold/25 transition-colors"
                aria-label={playing ? '暂停' : '播放'}
              >
                {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 ml-0.5" />}
              </button>
              <button
                onClick={toggleMute}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground hover:text-foreground transition-colors"
                aria-label={volume > 0 ? '静音' : '取消静音'}
              >
                {volume > 0 ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
              </button>
            </div>

            {/* 展开歌词按钮 */}
            <button
              onClick={() => setPanelOpen(true)}
              className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground hover:text-xian-gold transition-colors"
              aria-label="展开歌词"
            >
              <ChevronUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* ================== 歌词面板（全屏浮层） ================== */}
      {panelOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 backdrop-blur-md animate-in fade-in duration-300">
          <div className="relative w-full max-w-lg mx-4 h-[85vh] flex flex-col rounded-2xl border border-xian-gold/20 bg-card/95 backdrop-blur-lg shadow-2xl shadow-black/40 overflow-hidden">
            {/* 顶部关闭栏 */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-border/40">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-xian-gold/20 to-xian-amber/20 border border-xian-gold/20">
                  <Music className="h-4 w-4 text-xian-gold" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{songInfo.title}</div>
                  <div className="text-xs text-muted-foreground">{songInfo.artist} · {songInfo.album}</div>
                </div>
              </div>
              <button
                onClick={() => setPanelOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent/60 transition-colors"
                aria-label="关闭歌词面板"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* 歌词区域 */}
            <div
              ref={lyricsContainerRef}
              className="flex-1 overflow-y-auto px-5 py-8 scroll-smooth"
              style={{ maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)' }}
            >
              <div className="space-y-1">
                {lyrics.map((line, i) => (
                  <div
                    key={i}
                    ref={(el) => { lineRefs.current[i] = el; }}
                    onClick={() => handleLineClick(line.time)}
                    className={`py-2.5 px-3 rounded-lg cursor-pointer transition-all duration-500 text-center ${
                      i === currentLine
                        ? 'text-xian-gold text-lg font-semibold scale-105 bg-xian-gold/5'
                        : i === currentLine - 1 || i === currentLine + 1
                          ? 'text-muted-foreground/80 text-base'
                          : 'text-muted-foreground/40 text-sm'
                    }`}
                  >
                    {line.text}
                  </div>
                ))}
              </div>
            </div>

            {/* 底部控制栏 */}
            <div className="border-t border-border/40 px-5 py-3 space-y-2">
              {/* 进度条 */}
              <div
                className="h-1.5 bg-xian-gold/10 rounded-full cursor-pointer group"
                onClick={handleProgressClick}
              >
                <div
                  className="h-full bg-gradient-to-r from-xian-gold to-xian-amber rounded-full transition-[width] duration-200 ease-linear group-hover:h-2"
                  style={{ width: `${progress}%` }}
                />
              </div>
              {/* 时间与控制 */}
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground tabular-nums">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={toggleMute}
                    className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={volume > 0 ? '静音' : '取消静音'}
                  >
                    {volume > 0 ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
                  </button>
                  <button
                    onClick={togglePlay}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-xian-gold to-xian-amber text-xian-deep hover:shadow-lg hover:shadow-xian-gold/30 transition-all"
                    aria-label={playing ? '暂停' : '播放'}
                  >
                    {playing ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-0.5" />}
                  </button>
                </div>
                <div className="w-[76px]" /> {/* 右侧占位保持居中 */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
