import type { SiteContent } from "@/lib/types";
import { GithubIcon, LinkedinIcon, MailIcon } from "./icons";

export function Footer({ person }: { person: SiteContent["person"] }) {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border-soft">
      <div className="container-px mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 py-10 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="text-sm font-medium text-ink/90">{person.name}</p>
          <p className="mt-1 text-xs text-faint">
            © {year} All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={person.socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-surface/40 text-muted transition-colors hover:border-accent/40 hover:text-accent"
          >
            <GithubIcon className="h-4.5 w-4.5" />
          </a>
          <a
            href={person.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-surface/40 text-muted transition-colors hover:border-accent/40 hover:text-accent"
          >
            <LinkedinIcon className="h-4.5 w-4.5" />
          </a>
          <a
            href={`mailto:${person.email}`}
            aria-label="Email"
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-surface/40 text-muted transition-colors hover:border-accent/40 hover:text-accent"
          >
            <MailIcon className="h-4.5 w-4.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
