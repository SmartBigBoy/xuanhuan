'use client';

import { useState, useCallback, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, RotateCw, Download, X, Eye } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface MapImageCarouselProps {
  images: string[];
  alt: string;
  resolution?: string;
}

export function MapImageCarousel({ images, alt, resolution }: MapImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({});

  const goToPrev = useCallback(() => {
    setCurrentIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  }, [images.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  }, [images.length]);

  const handleOpenLightbox = useCallback(() => {
    if (!imgErrors[currentIndex]) {
      setZoom(1);
      setRotation(0);
      setLightboxOpen(true);
    }
  }, [imgErrors, currentIndex]);

  const handleCloseLightbox = useCallback(() => {
    setLightboxOpen(false);
    setZoom(1);
    setRotation(0);
  }, []);

  const handleZoomIn = useCallback(() => setZoom((z) => Math.min(z + 0.5, 4)), []);
  const handleZoomOut = useCallback(() => setZoom((z) => Math.max(z - 0.5, 0.5)), []);
  const handleRotate = useCallback(() => setRotation((r) => (r + 90) % 360), []);

  const handleDownload = useCallback(() => {
    const url = images[currentIndex];
    const name = `${alt}-${currentIndex + 1}.jpg`;
    fetch(url)
      .then((res) => res.blob())
      .then((blob) => {
        const blobUrl = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = blobUrl;
        a.download = name;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(blobUrl);
      })
      .catch(() => window.open(url, '_blank'));
  }, [images, currentIndex, alt]);

  // Keyboard navigation
  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleCloseLightbox();
      if (e.key === '+' || e.key === '=') handleZoomIn();
      if (e.key === '-') handleZoomOut();
      if (e.key === 'ArrowLeft') goToPrev();
      if (e.key === 'ArrowRight') goToNext();
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [lightboxOpen, handleCloseLightbox, handleZoomIn, handleZoomOut, goToPrev, goToNext]);

  const currentSrc = images[currentIndex];

  return (
    <>
      {/* 轮播预览区域 */}
      <div className="relative">
        {/* 主图 - 可点击放大 */}
        <div
          className="aspect-[16/10] rounded-md bg-gradient-to-br from-xian-deep via-xian-purple/10 to-xian-cyan/10 flex items-center justify-center relative overflow-hidden cursor-pointer group"
          onClick={handleOpenLightbox}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === 'Enter') handleOpenLightbox(); }}
          aria-label="点击查看大图"
        >
          {!imgErrors[currentIndex] && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={currentSrc}
              alt={`${alt} 第${currentIndex + 1}页`}
              className="absolute inset-0 w-full h-full object-contain rounded-md transition-all duration-500 ease-in-out group-hover:scale-105"
              onError={() => setImgErrors((prev) => ({ ...prev, [currentIndex]: true }))}
            />
          )}

          {/* Hover overlay */}
          {!imgErrors[currentIndex] && (
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="h-12 w-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <ZoomIn className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          )}

          {/* 左右翻页按钮 */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); goToPrev(); }}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-200 opacity-0 group-hover:opacity-100"
                aria-label="上一张"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); goToNext(); }}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-200 opacity-0 group-hover:opacity-100"
                aria-label="下一张"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}

          {/* 角标信息 */}
          <div className="absolute bottom-4 right-4 z-10 flex items-center gap-2">
            <Badge className="bg-black/60 text-white border-none text-xs">
              <Eye className="h-3 w-3 mr-1" />
              点击查看大图
            </Badge>
          </div>
          {resolution && (
            <div className="absolute top-4 left-4 z-10">
              <Badge className="bg-black/60 text-white border-none text-xs">
                {resolution}
              </Badge>
            </div>
          )}

          {/* 页码指示器 */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-4 z-10 flex items-center gap-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setCurrentIndex(i); }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === currentIndex
                      ? 'w-6 bg-xian-gold'
                      : 'w-2 bg-white/40 hover:bg-white/60'
                  }`}
                  aria-label={`第${i + 1}页`}
                />
              ))}
            </div>
          )}
        </div>

        {/* 底部页码文字 */}
        {images.length > 1 && (
          <div className="mt-3 text-center text-sm text-muted-foreground">
            第 <span className="text-xian-gold font-semibold">{currentIndex + 1}</span> / {images.length} 页
            <span className="ml-2 text-xs">← → 翻页</span>
          </div>
        )}
      </div>

      {/* Lightbox 弹窗 */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex flex-col items-center justify-center"
          onClick={(e) => { if (e.target === e.currentTarget) handleCloseLightbox(); }}
        >
          {/* 顶部工具栏 */}
          <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-4 py-3 bg-gradient-to-b from-black/60 to-transparent">
            <div className="text-white text-sm font-medium truncate max-w-[50%]">
              {alt} · 第{currentIndex + 1}页
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="h-9 w-9 text-white hover:bg-white/20 rounded-full" onClick={handleZoomOut} title="缩小">
                <ZoomOut className="h-5 w-5" />
              </Button>
              <span className="text-white/80 text-xs min-w-[3rem] text-center">{Math.round(zoom * 100)}%</span>
              <Button variant="ghost" size="icon" className="h-9 w-9 text-white hover:bg-white/20 rounded-full" onClick={handleZoomIn} title="放大">
                <ZoomIn className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 text-white hover:bg-white/20 rounded-full" onClick={handleRotate} title="旋转">
                <RotateCw className="h-5 w-5" />
              </Button>
              <div className="w-px h-5 bg-white/20 mx-1" />
              <Button variant="ghost" size="icon" className="h-9 w-9 text-white hover:bg-white/20 rounded-full" onClick={handleDownload} title="下载当前页">
                <Download className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 text-white hover:bg-white/20 rounded-full" onClick={handleCloseLightbox} title="关闭">
                <X className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* 左右翻页（lightbox内） */}
          {images.length > 1 && (
            <>
              <button
                onClick={goToPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-sm flex items-center justify-center text-white transition-all"
                aria-label="上一张"
              >
                <ChevronLeft className="h-8 w-8" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-sm flex items-center justify-center text-white transition-all"
                aria-label="下一张"
              >
                <ChevronRight className="h-8 w-8" />
              </button>
            </>
          )}

          {/* 图片 */}
          <div className="flex-1 w-full flex items-center justify-center overflow-auto p-8 pt-16 pb-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={currentSrc}
              alt={`${alt} 第${currentIndex + 1}页`}
              className="max-w-full max-h-full object-contain transition-transform duration-200"
              style={{ transform: `scale(${zoom}) rotate(${rotation}deg)` }}
              draggable={false}
            />
          </div>

          {/* 底部页码 */}
          <div className="absolute bottom-4 left-0 right-0 flex flex-col items-center gap-2">
            {images.length > 1 && (
              <div className="flex items-center gap-1.5">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === currentIndex ? 'w-6 bg-xian-gold' : 'w-2 bg-white/40 hover:bg-white/60'
                    }`}
                    aria-label={`第${i + 1}页`}
                  />
                ))}
              </div>
            )}
            <p className="text-white/40 text-xs">
              ESC 关闭 · ← → 翻页 · +/- 缩放
            </p>
          </div>
        </div>
      )}
    </>
  );
}
