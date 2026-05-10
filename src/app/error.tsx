'use client';

import { useEffect } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="xian-bg-pattern min-h-[60vh] flex items-center justify-center">
      <div className="text-center px-4">
        <div className="w-20 h-20 rounded-full border-2 border-red-500/30 bg-red-500/5 flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="w-9 h-9 text-red-500/70" />
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold font-serif text-foreground mb-3">
          天道异变，灵气紊乱
        </h2>

        <p className="text-muted-foreground max-w-md mx-auto mb-8 leading-relaxed">
          页面遭遇了不可预知的灵气波动，暂时无法正常显示。
          <br />
          请尝试重新凝聚灵力，再次访问。
        </p>

        <Button
          onClick={() => reset()}
          size="lg"
          className="bg-xian-gold hover:bg-xian-amber text-black font-medium"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          重新加载
        </Button>
      </div>
    </div>
  );
}
