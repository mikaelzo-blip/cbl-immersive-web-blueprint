'use client';

import { useEffect } from 'react';

// Headings, staggered list rows and fill images inside <main> get scroll-triggered motion; styles live in globals.css.
const TARGETS = 'h2, [data-stagger] > *, img[data-nimg="fill"]';

export function MotionObserver() {
  useEffect(() => {
    const main = document.querySelector('main');
    if (!main || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          (entry.target as HTMLElement).dataset.in = '';
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: '0px 0px -8% 0px' }
    );

    const scan = () => {
      main.querySelectorAll<HTMLElement>('[data-stagger]').forEach((list) => {
        Array.from(list.children).forEach((child, index) => {
          (child as HTMLElement).style.setProperty('--i', String(index % 6));
        });
      });

      main.querySelectorAll<HTMLElement>(TARGETS).forEach((target) => {
        const el = target.tagName === 'IMG' ? target.parentElement : target;
        // Skip only revealed elements: a re-run effect (Strict Mode, remount) must re-observe hidden ones.
        if (!el || el.dataset.in !== undefined) return;

        el.dataset.motion = target.tagName === 'H2' ? 'heading' : target.tagName === 'IMG' ? 'frame' : 'row';
        // Already on screen: show it as-is so nothing flashes hidden.
        if (el.getBoundingClientRect().top < window.innerHeight) el.dataset.in = '';
        else observer.observe(el);
      });
    };

    scan();
    document.documentElement.classList.add('motion-ready');

    // Client navigation and project filters render new nodes into the same <main>.
    const mutations = new MutationObserver(scan);
    mutations.observe(main, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutations.disconnect();
    };
  }, []);

  return <div className="scroll-progress" aria-hidden="true" />;
}
