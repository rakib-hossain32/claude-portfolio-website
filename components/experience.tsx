import type { SiteContent } from "@/lib/types";
import { Section } from "./section";
import { Reveal } from "./reveal";

export function Experience({ experience }: { experience: SiteContent["experience"] }) {
  return (
    <Section
      id="experience"
      label="Experience"
      title="Where I've worked"
    >
      <div className="relative">
        <div className="absolute bottom-2 left-[7px] top-2 w-px bg-gradient-to-b from-accent/40 via-border to-transparent md:left-[9px]" />

        <div className="space-y-10">
          {experience.map((job, i) => (
            <Reveal key={`${job.company}-${i}`} delay={i * 0.06}>
              <div className="relative pl-9 md:pl-12">
                <span className="absolute left-0 top-1.5 grid h-[18px] w-[18px] place-items-center rounded-full border border-border bg-surface">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                </span>

                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-lg font-semibold text-ink">
                    {job.role}{" "}
                    <span className="text-muted">· {job.company}</span>
                  </h3>
                  <span className="font-mono text-xs text-faint">{job.period}</span>
                </div>

                <p className="mt-2 text-sm leading-relaxed text-muted">{job.summary}</p>

                <ul className="mt-4 space-y-2">
                  {job.bullets.map((b) => (
                    <li key={b} className="flex gap-2.5 text-sm text-ink/75">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent/70" />
                      <span className="leading-snug">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
