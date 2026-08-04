import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  as?: 'h1' | 'h2' | 'h3';
  className?: string;
  light?: boolean;
}

export function SectionHeading({
  badge,
  title,
  description,
  align = 'center',
  as: Component = 'h2',
  className,
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'flex flex-col mb-10 md:mb-14',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className
      )}
    >
      {badge && (
        <span
          className={cn(
            'inline-flex items-center px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] rounded-full mb-3',
            light
              ? 'bg-[#00A8CC]/20 text-[#67E8F9]'
              : 'bg-[#F0F7FD] text-[#0E6BA8] border border-[#0E6BA8]/20'
          )}
        >
          {badge}
        </span>
      )}
      
      <Component
        className={cn(
          'max-w-4xl text-3xl sm:text-4xl md:text-5xl font-black tracking-[-0.025em] leading-[1.08]',
          light ? 'text-white' : 'text-[#0F2942]'
        )}
      >
        {title}
      </Component>

      {/* Visual Accent Line */}
      <div
        className={cn(
          'h-1 w-16 rounded-full accent-line-gradient mt-4 mb-4',
          align === 'center' && 'mx-auto'
        )}
      />

      {description && (
        <p
          className={cn(
            'max-w-2xl text-base sm:text-lg leading-relaxed mt-1',
            light ? 'text-[#E2E8F0]' : 'text-[#475569]'
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
