import Link from "next/link";
import { content } from "@/lib/content";
import { ArrowRight, ArrowUpRight } from "@/components/icons";

export default function NotFound() {
  const { person } = content;

  return (
    <main className="relative flex min-h-dvh items-center overflow-hidden px-6 py-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute -top-48 left-1/2 h-[32rem] w-[54rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(163,230,53,0.24),transparent)] blur-2xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[radial-gradient(closest-side,rgba(163,230,53,0.13),transparent)] blur-2xl" />
      </div>

      <section className="mx-auto w-full max-w-4xl">
        <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-border bg-surface/80 py-1.5 pl-2 pr-4 text-sm text-muted shadow-card">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
          </span>
          Page missing
        </div>

        <p className="font-mono text-sm font-medium uppercase tracking-[0.26em] text-accent">
          404
        </p>
        <h1 className="mt-4 max-w-3xl text-balance text-5xl font-semibold leading-[1.02] tracking-tight text-ink sm:text-7xl">
          Not found
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
          The page you opened does not exist, or the link has changed. Head back home
          and keep exploring {person.name}'s work.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 text-sm font-semibold text-ink shadow-glow transition-transform hover:-translate-y-0.5"
          >
            Back home
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/#contact"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-accent/40 hover:text-accent"
          >
            Contact Rakib
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
