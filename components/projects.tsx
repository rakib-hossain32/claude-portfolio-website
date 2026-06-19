"use client";

import { useRef, type MouseEvent } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "motion/react";
import type { Accent, Project, SiteContent } from "@/lib/types";
import { Section } from "./section";
import { ArrowUpRight, GithubIcon } from "./icons";

const accentMap: Record<
  Accent,
  { text: string; ring: string; glow: string; dot: string; chip: string }
> = {
  teal: {
    text: "text-[#4d7c0f]",
    ring: "group-hover:border-[#a3e635]/40",
    glow: "rgba(163,230,53,0.15)",
    dot: "bg-[#a3e635]",
    chip: "group-hover:text-[#4d7c0f]",
  },
  emerald: {
    text: "text-[#4d7c0f]",
    ring: "group-hover:border-[#a3e635]/40",
    glow: "rgba(163,230,53,0.15)",
    dot: "bg-[#a3e635]",
    chip: "group-hover:text-[#4d7c0f]",
  },
  cyan: {
    text: "text-[#4d7c0f]",
    ring: "group-hover:border-[#a3e635]/40",
    glow: "rgba(163,230,53,0.15)",
    dot: "bg-[#a3e635]",
    chip: "group-hover:text-[#4d7c0f]",
  },
  lime: {
    text: "text-[#4d7c0f]",
    ring: "group-hover:border-[#a3e635]/40",
    glow: "rgba(163,230,53,0.15)",
    dot: "bg-[#a3e635]",
    chip: "group-hover:text-[#4d7c0f]",
  },
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const a = accentMap[project.accent];
  const ref = useRef<HTMLElement>(null);

  // pointer-tracked spotlight
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useMotionValue(0), { stiffness: 150, damping: 18 });
  const ry = useSpring(useMotionValue(0), { stiffness: 150, damping: 18 });
  const spotlight = useMotionTemplate`radial-gradient(420px circle at ${mx}px ${my}px, ${a.glow}, transparent 70%)`;

  function onMove(e: MouseEvent<HTMLElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mx.set(x);
    my.set(y);
    rx.set(((y - rect.height / 2) / rect.height) * -5);
    ry.set(((x - rect.width / 2) / rect.width) * 5);
  }

  function onLeave() {
    rx.set(0);
    ry.set(0);
  }

  return (
    <motion.article
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: (index % 2) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
      className={`group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-surface/40 p-7 transition-colors duration-300 md:p-8 ${a.ring}`}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: spotlight }}
      />

      <div className="relative flex items-start justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <span className={`h-2 w-2 rounded-full ${a.dot}`} />
          <h3 className="text-xl font-semibold tracking-tight text-ink md:text-2xl">
            {project.name}
          </h3>
        </div>
        <span className="font-mono text-xs text-faint">{project.year}</span>
      </div>

      <p className={`relative mt-1.5 text-sm font-medium ${a.text}`}>{project.tagline}</p>

      <p className="relative mt-4 text-pretty text-sm leading-relaxed text-muted">
        {project.description}
      </p>

      <ul className="relative mt-5 space-y-2">
        {project.highlights.map((h) => (
          <li key={h} className="flex gap-2.5 text-sm text-ink/80">
            <span className={`mt-1.5 h-1 w-1 shrink-0 rounded-full ${a.dot}`} />
            <span className="leading-snug">{h}</span>
          </li>
        ))}
      </ul>

      <div className="relative mt-6 flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-md border border-border-soft bg-bg/40 px-2.5 py-1 font-mono text-[11px] text-faint"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="relative mt-7 flex items-center gap-4 border-t border-border-soft pt-5">
        {project.links.live && (
          <a
            href={project.links.live}
            target="_blank"
            rel="noreferrer"
            className={`group/link inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors ${a.chip}`}
          >
            Live site
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
          </a>
        )}
        {project.links.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-ink"
          >
            <GithubIcon className="h-4 w-4" />
            Code
          </a>
        )}
      </div>
    </motion.article>
  );
}

export function Projects({ projects }: { projects: SiteContent["projects"] }) {
  return (
    <Section
      id="work"
      label="Selected Work"
      title="Things I've built"
      intro="A few projects I've shipped end to end, from schema to deploy. Numbers are real and measured, not rounded up."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={project.name} project={project} index={i} />
        ))}
      </div>
    </Section>
  );
}
