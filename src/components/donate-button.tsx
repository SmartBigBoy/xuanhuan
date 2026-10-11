'use client';

import { Heart } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

interface DonateButtonProps {
  variant?: 'button' | 'link';
  className?: string;
}

/**
 * 捐赠入口：点击弹出微信赞赏码弹窗。
 * - variant="button" 用于首页醒目的支持按钮
 * - variant="link" 用于页脚等位置的轻量链接
 */
export function DonateButton({ variant = 'button', className }: DonateButtonProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {variant === 'link' ? (
          <button
            type="button"
            className={cn(
              'inline-flex cursor-pointer items-center gap-1.5 text-xs text-xian-gold transition-colors hover:text-xian-amber hover:underline',
              className
            )}
          >
            <Heart className="h-3.5 w-3.5" />
            <span>支持作者</span>
          </button>
        ) : (
          <button
            type="button"
            className={cn(
              'inline-flex cursor-pointer items-center gap-2 rounded-full bg-gradient-to-r from-xian-gold to-xian-amber px-8 py-3 text-base font-semibold text-xian-deep shadow-lg shadow-xian-gold/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xian-gold/40',
              className
            )}
          >
            <Heart className="h-4 w-4" />
            <span>支持作者</span>
          </button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-sm border-xian-gold/20 bg-card text-center max-h-[90vh] overflow-y-auto">
        <DialogHeader className="text-center">
          <DialogTitle className="mx-auto font-serif text-2xl text-xian-gold">
            ☕ 请我喝杯咖啡
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            感谢你的支持 💛
          </DialogDescription>
        </DialogHeader>
        <div className="mx-auto rounded-xl border border-xian-gold/20 bg-xian-gold/5 p-4">
          <img
            src="/images/wechat_donate.png"
            alt="微信赞赏码"
            className="mx-auto h-auto w-full max-w-[280px] rounded-lg object-contain"
          />
        </div>
        <p className="text-sm text-muted-foreground">用微信扫一扫即可赞赏</p>
      </DialogContent>
    </Dialog>
  );
}
