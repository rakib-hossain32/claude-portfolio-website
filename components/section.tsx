import type { ReactNode } from "react";
import { Reveal } from "./reveal";

interface SectionProps {
  id: string;
  label: string;
  title: string;
  intro?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, label, title, intro, children, className }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-24 py-24 md:py-32 ${className ?? ""}`}>
      <div className="container-px mx-auto w-full max-w-6xl">
        <Reveal className="mb-12 md:mb-16">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-accent/60" />
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
              {label}
            </span>
          </div>
          <h2 className="mt-5 max-w-2xl text-balance text-3xl font-semibold tracking-tight text-ink md:text-[2.6rem] md:leading-[1.1]">
            {title}
          </h2>
          {intro ? (
            <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted md:text-lg">
              {intro}
            </p>
          ) : null}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
