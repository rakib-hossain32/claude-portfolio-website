"use client";

import { useState } from "react";
import { motion } from "motion/react";
import type { SiteContent } from "@/lib/types";
import { Reveal } from "./reveal";
import { ArrowUpRight, CheckIcon, CopyIcon, GithubIcon, LinkedinIcon, MailIcon } from "./icons";

export function Contact({
  contact,
  person,
}: {
  contact: SiteContent["contact"];
  person: SiteContent["person"];
}) {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard not available */
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 py-24 md:py-32">
      <div className="container-px mx-auto w-full max-w-6xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-gradient-to-br from-surface/70 via-surface/40 to-bg p-8 md:p-16">
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(closest-side,rgba(45,212,191,0.14),transparent)] blur-2xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-10 h-64 w-64 rounded-full bg-[radial-gradient(closest-side,rgba(52,211,153,0.10),transparent)] blur-2xl" />

            <div className="relative max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-accent/60" />
                <span className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
                  Contact
                </span>
              </div>

              <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-ink md:text-5xl">
                {contact.headline}
              </h2>
              <p className="mt-5 text-pretty text-base leading-relaxed text-muted md:text-lg">
                {contact.text}
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${contact.email}`}
                  className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-bg shadow-glow transition-transform hover:-translate-y-0.5"
                >
                  <MailIcon className="h-4 w-4" />
                  {contact.email}
                </a>

                <button
                  onClick={copyEmail}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-accent/40"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <motion.span
                      initial={{ scale: 0.6, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="inline-flex items-center gap-2 text-accent"
                    >
                      <CheckIcon className="h-4 w-4" /> Copied
                    </motion.span>
                  ) : (
                    <span className="inline-flex items-center gap-2">
                      <CopyIcon className="h-4 w-4" /> Copy
                    </span>
                  )}
                </button>
              </div>

              <div className="mt-8 flex items-center gap-3">
                <a
                  href={person.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
                >
                  <GithubIcon className="h-[18px] w-[18px]" /> GitHub
                  <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
                <span className="text-border">·</span>
                <a
                  href={person.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
                >
                  <LinkedinIcon className="h-[18px] w-[18px]" /> LinkedIn
                  <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
