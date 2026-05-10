'use client';

import { useState } from 'react';
import { Download, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MapDownloadButtonProps {
  downloadUrl: string;
  fileName: string;
}

export function MapDownloadButton({ downloadUrl, fileName }: MapDownloadButtonProps) {
  const [downloading, setDownloading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleDownload = async () => {
    if (downloading || success) return;

    // 如果没有有效的下载链接
    if (!downloadUrl || downloadUrl === '#') {
      // 提示暂无下载资源
      setDownloading(true);
      setTimeout(() => {
        alert('该地图资源正在整理中，敬请期待后续更新。');
        setDownloading(false);
      }, 300);
      return;
    }

    setDownloading(true);
    try {
      const response = await fetch(downloadUrl);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(blobUrl);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch {
      // fallback: open in new tab
      window.open(downloadUrl, '_blank');
    } finally {
      setDownloading(false);
    }
  };

  return (
    <Button
      className="w-full bg-gradient-to-r from-xian-cyan to-xian-gold text-xian-deep hover:opacity-90 font-semibold"
      onClick={handleDownload}
      disabled={downloading}
    >
      {success ? (
        <>
          <CheckCircle className="mr-2 h-4 w-4" />
          下载完成
        </>
      ) : (
        <>
          <Download className="mr-2 h-4 w-4" />
          {downloading ? '准备中...' : '免费下载'}
        </>
      )}
    </Button>
  );
}
