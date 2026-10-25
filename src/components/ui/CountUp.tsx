'use client';

import { useEffect, useRef, useState } from 'react';

interface CountUpProps {
  value: string;
  duration?: number;
}

export function CountUp({ value, duration = 1400 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const node = ref.current;
    const target = Number(value);
    if (!node || Number.isNaN(target) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    // Already visible on mount: keep the final number instead of resetting it in view.
    if (node.getBoundingClientRect().top < window.innerHeight) return;

    const format = (n: number) => String(n).padStart(value.length, '0');
    setDisplay(format(0));
    let frame = 0;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        setDisplay(format(Math.round(target * (1 - Math.pow(1 - progress, 4)))));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }, { rootMargin: '0px 0px -10% 0px' });

    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value, duration]);

  return (
    <span ref={ref} aria-label={value} className="tabular-nums">
      <span aria-hidden="true">{display}</span>
    </span>
  );
}
