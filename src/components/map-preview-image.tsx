'use client';

import { useState } from 'react';
import { MapIcon, Eye } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface MapPreviewImageProps {
  src: string;
  alt: string;
  resolution?: string;
}

export function MapPreviewImage({ src, alt, resolution }: MapPreviewImageProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="aspect-[16/10] rounded-md bg-gradient-to-br from-xian-deep via-xian-purple/10 to-xian-cyan/10 flex items-center justify-center relative overflow-hidden">
      {!imgError && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 w-full h-full object-contain rounded-md"
          onError={() => setImgError(true)}
        />
      )}
      <MapIcon className={`h-20 w-20 text-xian-cyan/15 ${!imgError ? 'opacity-0' : ''}`} />
      <div className="absolute bottom-4 right-4 z-10">
        <Badge className="bg-black/60 text-white border-none text-xs">
          <Eye className="h-3 w-3 mr-1" />
          地图预览
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
  );
}
