import React from 'react';
import * as Icons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DynamicIconProps {
  name: string;
  className?: string;
  size?: number;
}

export function DynamicIcon({ name, className, size = 24 }: DynamicIconProps) {
  const iconSet = Icons as unknown as Record<string, LucideIcon>;
  const IconComponent = iconSet[name] || Icons.HelpCircle;

  return (
    <IconComponent
      size={size}
      className={cn('inline-block shrink-0', className)}
      aria-hidden="true"
    />
  );
}
