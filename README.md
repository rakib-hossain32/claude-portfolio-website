# Rakib Hossain — Portfolio

A minimal, dark "Midnight + Emerald" portfolio for a full-stack developer.
Built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS v4**, and **Motion**.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build
npm run start    # serve the production build
```

## Edit your content

**Everything you'd want to change lives in one file:** [`lib/content.ts`](lib/content.ts).

- `person` — name, role, location, hero headline, tagline, email, GitHub/LinkedIn links
- `about` — your bio paragraphs + the small stat chips
- `skills` — grouped tech you work with
- `projects` — the project cards (name, description, tech, highlights, links, year, `accent`)
- `experience` — your work timeline
- `contact` — the closing call-to-action

> The links, email, and socials are placeholders (`rakibhossain.dev`, `github.com/rakibhossain`, …).
> Swap them for your real ones before you share the site.

Each project has an `accent` of `teal` | `emerald` | `cyan` | `lime` that tints its card glow.

## Theme

Colors and fonts are defined once in [`app/globals.css`](app/globals.css) under `@theme`.
Change the `--color-*` values there to reskin the whole site.

## Structure

```
app/
  layout.tsx     # fonts, metadata, <html>
  page.tsx       # assembles the sections
  globals.css    # Tailwind v4 theme + base styles
components/       # navbar, hero, about, skills, projects, experience, contact, footer
lib/
  content.ts     # ← your content
  types.ts       # content types
```
