import { Scroll } from 'lucide-react';

export default function Loading() {
  return (
    <div className="xian-bg-pattern min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <div className="relative inline-block mb-6">
          <Scroll className="w-12 h-12 text-xian-gold/60 animate-pulse" />
          <div className="absolute inset-0 w-12 h-12 border-2 border-xian-gold/20 border-t-xian-gold rounded-full animate-spin mx-auto" />
        </div>
        <p className="text-muted-foreground text-sm">仙卷展开中，请稍候...</p>
      </div>
    </div>
  );
}
