"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import type { Project, SiteContent } from "@/lib/types";
import { Section } from "./section";
import { ArrowUpRight, GithubIcon } from "./icons";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface/40 transition-all duration-300 hover:border-accent/30 hover:shadow-[0_8px_32px_rgba(77,124,15,0.09)]"
    >
      {/* Image */}
      <div className="relative aspect-video w-full overflow-hidden bg-surface-2">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 82vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          /* Placeholder when no image */
          <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-surface-2 to-surface">
            <span className="font-mono text-2xl font-bold text-accent/20">
              {project.name[0]}
            </span>
          </div>
        )}
        {/* Year badge */}
        <span className="absolute right-3 top-3 rounded-md bg-bg/80 px-2 py-0.5 font-mono text-[11px] text-faint backdrop-blur-sm">
          {project.year}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        {/* Title & tagline */}
        <div className="flex items-start gap-2">
          <span className="mt-1.75 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-2" />
          <div>
            <h3 className="text-base font-semibold tracking-tight text-ink">
              {project.name}
            </h3>
            <p className="mt-0.5 text-xs font-medium text-accent">{project.tagline}</p>
          </div>
        </div>

        {/* Description */}
        <p className="mt-3 text-pretty text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        {/* Tech chips */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-md border border-border-soft bg-bg px-2 py-0.5 font-mono text-[10px] text-faint"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links — pushed to bottom */}
        <div className="flex items-center gap-5 border-t border-border-soft pt-4 mt-4">
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-accent"
            >
              Live site
              <ArrowUpRight className="h-3.5 w-3.5" />
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
      </div>
    </motion.article>
  );
}

export function Projects({ projects }: { projects: SiteContent["projects"] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  function handleScroll() {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.scrollWidth / projects.length;
    setActiveIndex(Math.round(el.scrollLeft / cardWidth));
  }

  return (
    <Section
      id="work"
      label="Selected Work"
      title="Things I've built"
      intro="A selection of projects I have designed, built, and shipped — from initial architecture to production deployment."
    >
      {/* ── Mobile: swipeable horizontal carousel ── */}
      <div className="md:hidden -mx-6">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-4 overflow-x-auto px-6 pb-6 snap-x snap-mandatory scrollbar-none [&::-webkit-scrollbar]:hidden"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {projects.map((project, i) => (
            <div
              key={project.name}
              className="w-[85vw] shrink-0 snap-center snap-always sm:w-[70vw]"
            >
              <ProjectCard project={project} index={i} />
            </div>
          ))}
        </div>

        {/* Dot indicators */}
        <div className="mt-3 flex justify-center gap-1.5">
          {projects.map((p, i) => (
            <span
              key={p.name}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === activeIndex ? "w-4 bg-accent" : "w-1.5 bg-border"
              }`}
            />
          ))}
        </div>
      </div>

      {/* ── Tablet (md) & Large tablet (lg): 2-col grid ── */}
      <div className="hidden gap-5 md:grid md:grid-cols-2 lg:hidden">
        {projects.map((project, i) => (
          <ProjectCard key={project.name} project={project} index={i} />
        ))}
      </div>

      {/* ── Desktop (lg+): 3-col grid ── */}
      <div className="hidden gap-5 lg:grid lg:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={project.name} project={project} index={i} />
        ))}
      </div>
    </Section>
  );
}
