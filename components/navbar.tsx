"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { clsx } from "clsx";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const sectionIds = ["about", "skills", "work", "experience", "contact"];

export function Navbar({ name }: { name: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const initials = name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("");

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border/70 bg-bg/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav className="container-px mx-auto flex h-16 max-w-6xl items-center justify-between md:h-[4.5rem]">
        <a
          href="#"
          className="group flex items-center gap-2.5"
          aria-label={`${name} — home`}
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-border bg-surface font-mono text-sm font-semibold text-accent transition-colors group-hover:border-accent/50">
            {initials}
          </span>
          <span className="hidden text-sm font-medium tracking-tight text-ink/90 sm:block">
            {name}
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={clsx(
                    "relative rounded-lg px-3.5 py-2 text-sm transition-colors",
                    isActive ? "text-ink" : "text-muted hover:text-ink"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-lg bg-surface"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-medium text-accent transition-all hover:border-accent/60 hover:bg-accent/15"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            Available
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 grid h-10 w-10 place-items-center rounded-lg border border-border bg-surface/60 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <div className="flex w-5 flex-col gap-[5px]">
            <span
              className={clsx(
                "h-px w-full bg-ink transition-all duration-300",
                open && "translate-y-[6px] rotate-45"
              )}
            />
            <span
              className={clsx(
                "h-px w-full bg-ink transition-all duration-300",
                open && "opacity-0"
              )}
            />
            <span
              className={clsx(
                "h-px w-full bg-ink transition-all duration-300",
                open && "-translate-y-[6px] -rotate-45"
              )}
            />
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-16 z-40 bg-bg/95 backdrop-blur-xl md:hidden"
          >
            <ul className="container-px flex flex-col gap-1 pt-6">
              {links.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-border-soft py-4 text-lg text-ink/90"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 + links.length * 0.05 }}
                className="pt-6"
              >
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2.5 text-sm font-medium text-accent"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Available for work
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
