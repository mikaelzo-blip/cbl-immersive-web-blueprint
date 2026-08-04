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
            'inline-flex items-center px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full mb-3',
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
          'text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight',
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
