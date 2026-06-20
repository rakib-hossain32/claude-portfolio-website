import type { SiteContent } from "@/lib/types";
import { Section } from "./section";
import { Stagger, StaggerItem } from "./reveal";

export function Skills({ skills }: { skills: SiteContent["skills"] }) {
  const marquee = [...new Set(skills.flatMap((g) => g.items))];

  return (
    <Section
      id="skills"
      label="Skills"
      title="Tools I reach for"
      intro="The stack I'm fastest in. I lean full-stack, with most of my depth on the backend and data side."
    >
      <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((group) => (
          <StaggerItem
            key={group.group}
            className="group relative overflow-hidden rounded-2xl border border-border bg-surface/40 p-6 transition-colors hover:border-accent/30"
          >
            <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-accent/5 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
              {group.group}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {group.items.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-muted">
                  <span className="h-1 w-1 rounded-full bg-faint transition-colors group-hover:bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </StaggerItem>
        ))}
      </Stagger>

      {/* subtle marquee strip */}
      <div className="relative mt-10 overflow-hidden rounded-2xl border border-border-soft bg-surface/20 py-4 mask-[linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
        <div className="flex w-max animate-marquee gap-8 pr-8">
          {[...marquee, ...marquee].map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="whitespace-nowrap font-mono text-sm text-faint"
            >
              {tech}
              <span className="ml-8 text-border">/</span>
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
