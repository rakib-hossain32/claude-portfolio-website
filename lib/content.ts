import type { SiteContent } from "./types";

// Working content set. Plain English throughout — edit anything here freely.
// Replace the placeholder project links / email / socials with your real ones.
export const content: SiteContent = {
  person: {
    name: "Rakib Hossain",
    role: "Full-Stack Developer",
    location: "Dhaka, Bangladesh",
    heroHeadline: "I build the boring parts that hold up.",
    tagline:
      "Full-stack developer working mostly in Next.js and TypeScript. Most of my time goes into the data layer and whatever falls over when traffic actually shows up.",
    available: true,
    email: "hello@rakibhossain.dev",
    socials: {
      github: "https://github.com/rakibhossain",
      linkedin: "https://linkedin.com/in/rakibhossain",
    },
  },

  about: {
    paragraphs: [
      "I got into this by accident. I was running a tiny inventory spreadsheet for a friend's shop and it kept falling apart every time two people edited it at once. So I built a small web app to replace it, broke it a few more times, and somewhere in there I figured out I'd rather do that than the job I had. That was 2022. Since then it's been production web apps full time, mostly Next.js and TypeScript up front with Node and Postgres underneath.",
      "Most of my work sits closer to the backend. I like getting the database schema right, watching query plans, and figuring out why a request that should take 30ms is taking 600. I use Prisma day to day, but I'm comfortable dropping into raw SQL when the query builder gets in the way, which happens more than I'd like. Redis comes up a lot too. Sometimes for caching, sometimes just to stop hammering Postgres with the same lookup.",
      "I keep a Postgres explain-analyze output open in a tab way too often. It's a habit. My one real pet peeve is a 500 with no log line attached, so I've gotten stubborn about logging. I'd rather ship something boring that survives a traffic spike than something clever I have to babysit. I've been on the wrong end of the clever version enough times. I write tests with Vitest and Playwright, deploy on Vercel and AWS depending on the project, and I'm happy doing the Docker and CI plumbing nobody else volunteers for.",
    ],
    highlights: [
      "~3 yrs building production web apps",
      "Next.js / TypeScript / Node / Postgres",
      "Open to full-stack & backend roles",
    ],
  },

  skills: [
    {
      group: "Frontend",
      items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "React Query"],
    },
    {
      group: "Backend",
      items: ["Node.js", "tRPC", "REST APIs", "PostgreSQL", "Prisma", "Redis"],
    },
    {
      group: "Infra & Deploy",
      items: ["Docker", "AWS", "Vercel", "GitHub Actions"],
    },
    {
      group: "Testing",
      items: ["Vitest", "Playwright", "Testing Library"],
    },
  ],

  projects: [
    {
      name: "Sift",
      tagline: "Product analytics dashboard for small SaaS teams",
      description:
        "Small teams kept wiring up half a dozen tools just to answer 'are people actually using this feature'. I built Sift as a single dashboard that ingests events and turns them into funnels and retention charts, so you don't need a data engineer to set it up. It's been running in production for two teams I know, handling their full event stream.",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Redis", "ClickHouse", "Tailwind CSS"],
      highlights: [
        "Handles ~4M events/day with p95 ingest under 90ms",
        "Cut dashboard query time from 2.1s to 240ms by moving aggregations to ClickHouse",
        "Pre-computed rollups in Redis dropped Postgres read load by about 60%",
      ],
      links: { live: "https://sift.rakibhossain.dev", github: "https://github.com/rakibhossain/sift" },
      year: "2024",
      accent: "teal",
    },
    {
      name: "Marginal",
      tagline: "Real-time collaborative editor for review notes",
      description:
        "My team was leaving review feedback in three places and losing half of it. Marginal is a shared editor where comments anchor to a line and update live for everyone in the doc. I built the sync layer on top of Yjs over WebSockets and spent most of the time on the awkward cases like reconnection and offline edits.",
      tech: ["Next.js", "TypeScript", "Node.js", "WebSockets", "Yjs", "PostgreSQL", "Prisma"],
      highlights: [
        "Holds ~50 concurrent editors per doc with sub-120ms update propagation",
        "Reconnect-and-merge logic recovers offline edits without dropping changes",
        "Server memory per active doc kept under 40MB after a rewrite of the snapshot store",
      ],
      links: { live: "https://marginal.rakibhossain.dev", github: "https://github.com/rakibhossain/marginal" },
      year: "2024",
      accent: "emerald",
    },
    {
      name: "Stallworth",
      tagline: "Marketplace for secondhand camera gear",
      description:
        "A friend who flips camera equipment was running everything through DMs and a notebook. I built Stallworth so sellers can list gear, buyers checkout through Stripe, and both sides get an actual order history. The hard part wasn't the UI, it was inventory. One item is one unit, so two people buying the same lens at the same moment is a real way to ruin someone's day.",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Stripe", "Tailwind CSS", "Vercel"],
      highlights: [
        "Row-level locking on checkout fixed a double-sell race we hit in week one",
        "Trimmed the listing page bundle from 310KB to 180KB, LCP went from 3.4s to 1.6s",
        "Processed ~1,200 orders in the first six months with no failed payouts",
      ],
      links: { live: "https://stallworth.rakibhossain.dev", github: "https://github.com/rakibhossain/stallworth" },
      year: "2023",
      accent: "cyan",
    },
    {
      name: "Relay",
      tagline: "Internal tool for managing background jobs and retries",
      description:
        "We had cron jobs scattered across three services and no easy way to see why one failed or to re-run it. Relay registers jobs, shows their run history, and lets you retry a failed run from the UI. It started as a weekend script to read our queue and grew into the tool on-call actually ends up using.",
      tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "Redis", "BullMQ", "Docker"],
      highlights: [
        "Tracks ~80k job runs/week with searchable history going back 90 days",
        "Replaced a 600-line bash cron setup; time to diagnose a failure dropped to a couple of minutes",
        "Idempotency keys on retries stopped duplicate side effects we'd been quietly living with",
      ],
      links: { live: "https://relay.rakibhossain.dev", github: "https://github.com/rakibhossain/relay" },
      year: "2025",
      accent: "lime",
    },
  ],

  experience: [
    {
      role: "Full-Stack Developer",
      company: "Freelance & contract",
      period: "2024 — Present",
      summary:
        "Working with a few small product teams, usually owning a slice end to end from the Postgres schema up to the React it feeds.",
      bullets: [
        "Took over a slow Next.js app and cut p95 page response from 820ms to 140ms by fixing N+1 queries and adding Redis caching",
        "Moved a client off a managed service to a Dockerized AWS setup and dropped their monthly bill by about 60%",
        "Mentor one junior dev on SQL and migration hygiene, mostly catching the migrations that lock a table at the wrong time",
        "Wrote the Stripe integration and the row-level locking that keeps single-unit inventory from overselling",
      ],
    },
    {
      role: "Web Developer",
      company: "Orbit Labs",
      period: "2022 — 2024",
      summary:
        "First real dev job. Joined when it was a prototype and was still there when people started actually paying for it.",
      bullets: [
        "Migrated the app from a single Express monolith to a Next.js frontend with a typed tRPC API",
        "Moved the database off a hand-rolled query layer to Prisma, which cut a whole class of runtime SQL errors",
        "Added Docker and a staging environment so we stopped testing in production",
        "Built the first version of the background job system that later became Relay",
      ],
    },
  ],

  contact: {
    headline: "Open to work",
    text: "I'm looking for full-stack or backend-leaning roles, the kind where I can own the data layer and the API. If you've got something gnarly in Postgres, or a Next.js app that's quietly gotten slow, that's the work I'd take. Email is the fastest way to reach me.",
    email: "hello@rakibhossain.dev",
  },
};
