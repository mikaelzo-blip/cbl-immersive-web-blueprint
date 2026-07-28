import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Resolves anchor HREFs to include leading '/' when not on home page (`/`).
 * e.g., `#kontak` -> `/#kontak` when pathname is `/proyek` or `/proyek/xxx`.
 */
export function resolveSectionHref(href: string, pathname: string): string {
  if (!href.startsWith('#')) {
    return href;
  }
  if (pathname === '/') {
    return href;
  }
  return `/${href}`;
}
