/**
 * 全局音频管理器 — 模块级单例
 *
 * 在模块顶层创建唯一 Audio 实例，即使 Next.js App Router 页面切换
 * 导致 React 组件卸载/重建，Audio 对象始终存活，音乐不会中断。
 */

export interface LyricLine {
  time: number; // 秒
  text: string;
}

const AUDIO_SRC = '/assets/许嵩-天龙八部之宿敌.mp3';

/* ===================== 单例 Audio ===================== */
let audioInstance: HTMLAudioElement | null = null;

function getAudio(): HTMLAudioElement {
  if (!audioInstance) {
    audioInstance = new Audio(AUDIO_SRC);
    audioInstance.preload = 'auto';
    audioInstance.loop = true;
  }
  return audioInstance;
}

/* ===================== 事件系统 ===================== */
type Listener = () => void;
const listeners = new Set<Listener>();

function notify() {
  listeners.forEach((fn) => fn());
}

export function subscribe(fn: Listener): () => void {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

/* ===================== 播放控制 ===================== */
export async function togglePlay(): Promise<void> {
  const audio = getAudio();
  if (audio.paused) {
    try {
      await audio.play();
    } catch {
      // 浏览器拦截自动播放时静默处理
    }
  } else {
    audio.pause();
  }
  notify();
}

export function seekTo(time: number): void {
  const audio = getAudio();
  audio.currentTime = time;
  notify();
}

export function setVolume(v: number): void {
  const audio = getAudio();
  audio.volume = Math.max(0, Math.min(1, v));
  notify();
}

/* ===================== 状态读取 ===================== */
export function isPlaying(): boolean {
  return getAudio().paused === false;
}

export function getCurrentTime(): number {
  return getAudio().currentTime;
}

export function getDuration(): number {
  return getAudio().duration || 0;
}

export function getVolume(): number {
  return getAudio().volume;
}

/* ===================== 初始化：绑定 audio 事件 ===================== */
let inited = false;

export function initAudioEvents(): void {
  if (inited) return;
  inited = true;
  const audio = getAudio();
  audio.addEventListener('play', notify);
  audio.addEventListener('pause', notify);
  audio.addEventListener('timeupdate', notify);
  audio.addEventListener('loadedmetadata', notify);
  audio.addEventListener('ended', notify);
  audio.addEventListener('volumechange', notify);
}
