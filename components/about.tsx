import type { SiteContent } from "@/lib/types";
import { Section } from "./section";
import { Reveal, Stagger, StaggerItem } from "./reveal";

export function About({
  about,
  person,
}: {
  about: SiteContent["about"];
  person: SiteContent["person"];
}) {
  return (
    <Section id="about" label="About" title="A bit about how I work">
      <div className="grid gap-12 md:grid-cols-[1.55fr_1fr] md:gap-16">
        <div className="space-y-5">
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className="text-pretty text-base leading-[1.8] text-muted md:text-[1.05rem]">
                {p}
              </p>
            </Reveal>
          ))}
        </div>

        <div className="md:pt-1.5">
          <Stagger className="flex flex-wrap gap-3">
            {about.highlights.map((h) => (
              <StaggerItem
                key={h}
                className="min-w-[150px] flex-1 rounded-2xl border border-border bg-surface/40 p-4 transition-colors hover:border-accent/30"
              >
                <p className="text-sm font-medium leading-snug text-ink/90">{h}</p>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.2}>
            <div className="mt-3 rounded-2xl border border-border bg-gradient-to-br from-surface/60 to-surface-2/30 p-5">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-faint">
                Currently
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Based in {person.location}, building full-stack products and{" "}
                {person.available ? "open to new work." : "heads-down on a project."}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
