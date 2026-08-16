import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'whatsapp';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  external?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  external,
  fullWidth = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-semibold transition-[background-color,color,border-color,transform] duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50 active:translate-y-px';

  const variants = {
    primary: 'bg-[#0F2942] text-white hover:bg-[#173B5C] focus-visible:outline-[#0F2942]',
    secondary: 'bg-[#173B5C] text-white hover:bg-[#0F2942] focus-visible:outline-[#0F2942]',
    outline: 'border border-[#0F2942]/35 bg-transparent text-[#0F2942] hover:border-[#0F2942] hover:bg-[#0F2942]/5 focus-visible:outline-[#0E6BA8]',
    ghost: 'text-[#0F2942] hover:bg-[#0F2942]/5 focus-visible:outline-[#0E6BA8]',
    whatsapp: 'bg-[#B34718] text-white hover:bg-[#8F3413] focus-visible:outline-[#B34718]',
  };

  const sizes = {
    sm: 'gap-1.5 px-3.5 py-2 text-xs',
    md: 'gap-2 px-5 py-2.5 text-sm',
    lg: 'gap-2.5 px-6 py-3.5 text-sm sm:text-base',
  };

  const combinedClasses = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    fullWidth && 'w-full',
    className
  );

  if (href) {
    if (external || href.startsWith('http') || href.startsWith('https') || href.startsWith('tel:') || href.startsWith('mailto:')) {
      return (
        <a
          href={href}
          target={external || href.startsWith('http') ? '_blank' : undefined}
          rel={external || href.startsWith('http') ? 'noopener noreferrer' : undefined}
          className={combinedClasses}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
