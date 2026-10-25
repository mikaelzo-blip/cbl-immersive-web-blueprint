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

/**
 * Shared by the desktop header and the mobile menu. On the homepage `activeSection`
 * holds the nav href of the section under the scrollspy line ('' between tracked sections).
 */
export function isNavItemActive(itemHref: string, pathname: string, activeSection: string): boolean {
  if (pathname === '/') return activeSection === itemHref;
  if (itemHref === '/layanan') return pathname.startsWith('/layanan');
  if (itemHref === '/proyek') return pathname.startsWith('/proyek');
  return pathname === itemHref;
}
