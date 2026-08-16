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
        'mb-10 flex flex-col md:mb-14',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className
      )}
    >
      {badge && (
        <div
          className={cn(
            'mb-5 flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.17em]',
            light ? 'text-[#9ED7E8]' : 'text-[#B34718]'
          )}
        >
          <span className={cn('h-px w-8', light ? 'bg-white/35' : 'bg-[#B34718]/45')} aria-hidden="true" />
          <span>{badge}</span>
        </div>
      )}

      <Component
        className={cn(
          'max-w-4xl text-[clamp(2.2rem,5vw,4.75rem)] font-semibold leading-[0.99] tracking-[-0.043em]',
          light ? 'text-white' : 'text-[#0F2942]'
        )}
      >
        {title}
      </Component>

      {description && (
        <p
          className={cn(
            'mt-5 max-w-3xl text-[0.95rem] leading-7 sm:text-base sm:leading-8',
            light ? 'text-[#D7E1E8]' : 'text-[#5F6D78]'
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
