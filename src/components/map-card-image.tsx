'use client';

import { useState } from 'react';
import { MapIcon } from 'lucide-react';

interface MapCardImageProps {
  src: string;
  alt: string;
  variant?: 'card' | 'compact';
}

export function MapCardImage({ src, alt, variant = 'card' }: MapCardImageProps) {
  const [imgError, setImgError] = useState(false);

  const iconSize = variant === 'compact' ? 'h-8 w-8' : 'h-10 w-10';
  const iconOpacity = variant === 'compact' ? 'text-xian-cyan/30' : 'text-xian-cyan/20';

  return (
    <div className="aspect-video rounded-md bg-gradient-to-br from-xian-deep to-xian-cyan/10 flex items-center justify-center overflow-hidden relative">
      {!imgError && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover rounded-md"
          onError={() => setImgError(true)}
        />
      )}
      <MapIcon className={`${iconSize} ${iconOpacity} ${!imgError ? 'opacity-0' : ''}`} />
    </div>
  );
}
