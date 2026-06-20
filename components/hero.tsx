"use client";

import { motion, useReducedMotion } from "motion/react";
import type { SiteContent } from "@/lib/types";
import { ArrowDown, ArrowUpRight, GithubIcon, LinkedinIcon } from "./icons";

export function Hero({ person }: { person: SiteContent["person"] }) {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  };
  const item = reduce
    ? { hidden: {}, show: {} }
    : {
        hidden: { opacity: 0, y: 22 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
      };

  const firstName = person.name.split(" ")[0];

  return (
    <section className="relative flex min-h-dvh items-center overflow-hidden pt-24">
      {/* layered background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid" />
        <motion.div
          aria-hidden
          initial={reduce ? false : { opacity: 0, scale: 0.85 }}
          animate={reduce ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          className="absolute -top-40 left-1/2 h-136 w-240 -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(163,230,53,0.22),transparent)] blur-2xl"
        />
        <div className="absolute -right-20 top-1/3 h-72 w-72 rounded-full bg-[radial-gradient(closest-side,rgba(163,230,53,0.14),transparent)] blur-2xl" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="container-px mx-auto w-full max-w-6xl flex flex-col items-center justify-center text-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex max-w-3xl flex-col items-center"
        >
          <motion.div variants={item} className="mb-7 inline-flex items-center justify-center gap-2.5 rounded-full border border-border bg-surface/50 py-1.5 pl-2 pr-4 text-sm text-muted backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-2 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-2" />
            </span>
            {person.available ? "Open to new roles" : "Currently heads-down"}
            {person.location ? ` · ${person.location}` : ""}
          </motion.div>

          <motion.h1
            variants={item}
            className=" text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl md:text-7xl"
          >
            {person.heroHeadline}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-muted md:text-xl"
          >
            {person.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap justify-center items-center gap-3">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 text-sm font-semibold text-ink shadow-glow transition-transform hover:-translate-y-0.5"
            >
              View my work
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-surface/40 px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-accent/40 hover:text-accent"
            >
              Get in touch
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>

            <div className="ml-1 flex items-center gap-1">
              <a
                href={person.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="grid h-11 w-11 place-items-center rounded-full border border-border bg-surface/40 text-muted transition-colors hover:border-accent/40 hover:text-accent"
              >
                <GithubIcon className="h-4.5 w-4.5" />
              </a>
              <a
                href={person.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="grid h-11 w-11 place-items-center rounded-full border border-border bg-surface/40 text-muted transition-colors hover:border-accent/40 hover:text-accent"
              >
                <LinkedinIcon className="h-4.5 w-4.5" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* floating accent mark */}
      <motion.span
        aria-hidden
        initial={reduce ? false : { opacity: 0 }}
        animate={reduce ? undefined : { opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="pointer-events-none absolute bottom-10 right-8 hidden font-mono text-[11px] uppercase tracking-[0.3em] text-faint md:block [writing-mode:vertical-rl]"
      >
        {firstName} · {new Date().getFullYear()}
      </motion.span>
    </section>
  );
}
