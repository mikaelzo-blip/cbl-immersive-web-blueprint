import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost';
  children: React.ReactNode;
}

export function Badge({
  variant = 'primary',
  className,
  children,
  ...props
}: BadgeProps) {
  const base = 'inline-flex items-center px-2.5 py-0.5 text-xs font-semibold rounded-full tracking-wide transition-colors';

  const variants = {
    primary: 'bg-[#F0F7FD] text-[#0E6BA8] border border-[#0E6BA8]/20',
    secondary: 'bg-[#0F2942] text-white',
    accent: 'bg-[#C2410C]/10 text-[#C2410C] border border-[#C2410C]/20',
    outline: 'border border-[#E2E8F0] text-[#475569] bg-white',
    ghost: 'bg-[#F8FAFC] text-[#475569]',
  };

  return (
    <span className={cn(base, variants[variant], className)} {...props}>
      {children}
    </span>
  );
}
