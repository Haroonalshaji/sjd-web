"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/data/site";

function useInView(ref: React.RefObject<HTMLElement | null>) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);

  return inView;
}

function AnimatedNumber({
  value,
  decimals = 0,
  active,
}: {
  value: number;
  decimals?: number;
  active: boolean;
}) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 1400;
    const start = performance.now();
    let frame: number;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(value * eased);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, value]);

  return <>{display.toFixed(decimals)}</>;
}

export function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const active = useInView(ref);

  return (
    <div
      ref={ref}
      className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6"
    >
      {siteConfig.stats.map((stat) => (
        <div
          key={stat.label}
          className="glass blue-glow rounded-2xl p-5 text-center md:p-6"
        >
          <p className="font-heading text-3xl font-semibold text-foreground md:text-4xl">
            <AnimatedNumber
              value={stat.value}
              decimals={"decimals" in stat ? stat.decimals : 0}
              active={active}
            />
            {stat.suffix}
          </p>
          <p className="mt-2 text-sm text-muted">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
