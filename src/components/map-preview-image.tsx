'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import { MapIcon, Eye, Download, X, ZoomIn, ZoomOut, RotateCw } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface MapPreviewImageProps {
  src: string;
  alt: string;
  resolution?: string;
  downloadUrl?: string;
  fileName?: string;
}

export function MapPreviewImage({ src, alt, resolution, downloadUrl, fileName }: MapPreviewImageProps) {
  const [imgError, setImgError] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const lightboxRef = useRef<HTMLDivElement>(null);

  const handleOpenLightbox = useCallback(() => {
    if (!imgError) {
      setZoom(1);
      setRotation(0);
      setLightboxOpen(true);
    }
  }, [imgError]);

  const handleCloseLightbox = useCallback(() => {
    setLightboxOpen(false);
    setZoom(1);
    setRotation(0);
  }, []);

  const handleZoomIn = useCallback(() => {
    setZoom((z) => Math.min(z + 0.5, 4));
  }, []);

  const handleZoomOut = useCallback(() => {
    setZoom((z) => Math.max(z - 0.5, 0.5));
  }, []);

  const handleRotate = useCallback(() => {
    setRotation((r) => (r + 90) % 360);
  }, []);

  const handleDownload = useCallback(() => {
    const url = downloadUrl || src;
    const name = fileName || alt || 'map';
    const link = document.createElement('a');
    link.href = url;
    link.download = name;
    // For same-origin files, try fetch+blob approach
    fetch(url)
      .then((res) => res.blob())
      .then((blob) => {
        const blobUrl = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = blobUrl;
        a.download = name.endsWith('.png') || name.endsWith('.jpg') ? name : `${name}.png`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(blobUrl);
      })
      .catch(() => {
        // fallback: open in new tab
        window.open(url, '_blank');
      });
  }, [downloadUrl, src, fileName, alt]);

  // ESC key and scroll to close
  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleCloseLightbox();
      if (e.key === '+' || e.key === '=') handleZoomIn();
      if (e.key === '-') handleZoomOut();
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [lightboxOpen, handleCloseLightbox, handleZoomIn, handleZoomOut]);

  return (
    <>
      {/* 预览区域 - 可点击 */}
      <div
        className="aspect-[16/10] rounded-md bg-gradient-to-br from-xian-deep via-xian-purple/10 to-xian-cyan/10 flex items-center justify-center relative overflow-hidden cursor-pointer group"
        onClick={handleOpenLightbox}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter') handleOpenLightbox(); }}
        aria-label="点击查看大图"
      >
        {!imgError && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={alt}
            className="absolute inset-0 w-full h-full object-contain rounded-md transition-transform duration-300 group-hover:scale-105"
            onError={() => setImgError(true)}
          />
        )}
        <MapIcon className={`h-20 w-20 text-xian-cyan/15 ${!imgError ? 'opacity-0' : ''}`} />

        {/* Hover overlay */}
        {!imgError && (
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
              <div className="h-12 w-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <ZoomIn className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        )}

        <div className="absolute bottom-4 right-4 z-10">
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
      </div>

      {/* Lightbox 弹窗 */}
      {lightboxOpen && (
        <div
          ref={lightboxRef}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex flex-col items-center justify-center"
          onClick={(e) => {
            if (e.target === e.currentTarget) handleCloseLightbox();
          }}
        >
          {/* 顶部工具栏 */}
          <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-4 py-3 bg-gradient-to-b from-black/60 to-transparent">
            <div className="text-white text-sm font-medium truncate max-w-[50%]">{alt}</div>
            <div className="flex items-center gap-2">
              {/* 缩放控制 */}
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 text-white hover:bg-white/20 rounded-full"
                onClick={handleZoomOut}
                title="缩小"
              >
                <ZoomOut className="h-5 w-5" />
              </Button>
              <span className="text-white/80 text-xs min-w-[3rem] text-center">
                {Math.round(zoom * 100)}%
              </span>
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 text-white hover:bg-white/20 rounded-full"
                onClick={handleZoomIn}
                title="放大"
              >
                <ZoomIn className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 text-white hover:bg-white/20 rounded-full"
                onClick={handleRotate}
                title="旋转"
              >
                <RotateCw className="h-5 w-5" />
              </Button>
              <div className="w-px h-5 bg-white/20 mx-1" />
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 text-white hover:bg-white/20 rounded-full"
                onClick={handleDownload}
                title="下载地图"
              >
                <Download className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 text-white hover:bg-white/20 rounded-full"
                onClick={handleCloseLightbox}
                title="关闭"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* 图片区域 */}
          <div className="flex-1 w-full flex items-center justify-center overflow-auto p-8 pt-16 pb-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={alt}
              className="max-w-full max-h-full object-contain transition-transform duration-200"
              style={{
                transform: `scale(${zoom}) rotate(${rotation}deg)`,
              }}
              draggable={false}
            />
          </div>

          {/* 底部提示 */}
          <div className="absolute bottom-4 left-0 right-0 text-center">
            <p className="text-white/40 text-xs">
              按 ESC 关闭 · 滚轮或 +/- 缩放 · 点击外部区域关闭
            </p>
          </div>
        </div>
      )}
    </>
  );
}
