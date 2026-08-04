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
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]';

  const variants = {
    primary: 'bg-[#0E6BA8] text-white hover:bg-[#15426B] shadow-md hover:shadow-lg focus-visible:outline-[#0E6BA8]',
    secondary: 'bg-[#0F2942] text-white hover:bg-[#15426B] shadow-md hover:shadow-lg focus-visible:outline-[#0F2942]',
    outline: 'border-2 border-[#0E6BA8] text-[#0E6BA8] hover:bg-[#F0F7FD] focus-visible:outline-[#0E6BA8]',
    ghost: 'text-[#15426B] hover:bg-[#F0F7FD] hover:text-[#0E6BA8] focus-visible:outline-[#0E6BA8]',
    whatsapp: 'bg-[#C2410C] text-white hover:bg-[#9A3412] shadow-md hover:shadow-lg focus-visible:outline-[#C2410C]',
  };

  const sizes = {
    sm: 'text-xs px-3.5 py-2 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5 font-semibold',
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
