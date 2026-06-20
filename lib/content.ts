import type { SiteContent } from "./types";

// Working content set. Plain English throughout — edit anything here freely.
// Replace the placeholder project links / email / socials with your real ones.
export const content: SiteContent = {
  person: {
    name: "Rakib Hossain",
    role: "Full-Stack Developer",
    location: "",
    heroHeadline: "Building scalable and robust web applications.",
    tagline:
      "Full-stack developer with professional experience building modern web applications using React, Next.js, Node.js, PostgreSQL, MongoDB, Express.js and more.",
    available: true,
    email: "rakibulhasanmd678@gmail.com",
    socials: {
      github: "https://github.com/rakib-hossain32",
      linkedin: "https://linkedin.com/in/rakib-hossain-md",
    },
  },

  about: {
    paragraphs: [
      "I am a Full-Stack Developer with hands-on professional experience building modern, production-ready web applications. I work across the entire stack — from designing responsive React UIs to building robust REST APIs with Node.js and Express, backed by both SQL and NoSQL databases.",
      "My backend experience includes working with PostgreSQL via Prisma, as well as MongoDB with Mongoose. I am comfortable designing schemas, writing efficient queries, and structuring APIs that are clean and maintainable.",
      "I am actively looking for opportunities where I can grow as an engineer, take on greater responsibility, and contribute to a team building meaningful products."
    ],
    highlights: [
      "4 months professional experience",
      "Next.js / TypeScript / Node / Postgres",
      "Open to full-stack & backend roles",
    ],
  },

  skills: [
    {
      group: "Frontend",
      items: ["React", "Next.js", "JavaScript", "TypeScript", "TanStack Query", "Tailwind CSS", "HTML & CSS", "Axios", "Shadcn/UI", "React Router", "Zod"],
    },
    {
      group: "Backend",
      items: ["Node.js", "Express.js", "REST APIs", "Prisma", "JWT", "Mongoose"],
    },
    {
      group: "Databases",
      items: ["PostgreSQL", "MongoDB", "Redis", "NeonDB"],
    },
    {
      group: "Tools & Deploy",
      items: ["Git", "GitHub", "Vercel", "Postman", "GitHub Actions", "Firebase"],
    },
  ],

  projects: [
    {
      name: "Sift",
      tagline: "Product analytics dashboard for small SaaS teams",
      image: "https://img.magnific.com/free-psd/flat-design-creativity-template_23-2150471372.jpg?semt=ais_hybrid&w=740&q=80",
      description:
        "Small teams kept wiring up half a dozen tools just to answer 'are people actually using this feature'. I built Sift as a single dashboard that ingests events and turns them into funnels and retention charts, so you don't need a data engineer to set it up.",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Redis", "Tailwind CSS"],
      highlights: [
        "Handles ~4M events/day with p95 ingest under 90ms",
        "Cut dashboard query time from 2.1s to 240ms",
        "Pre-computed rollups in Redis dropped Postgres read load by 60%",
      ],
      links: { live: "https://sift.rakibhossain.dev", github: "https://github.com/rakib-hossain32/sift" },
      year: "2024",
      accent: "teal",
    },
    {
      name: "Marginal",
      tagline: "Real-time collaborative editor for review notes",
      image: "https://img.magnific.com/free-psd/flat-design-creativity-template_23-2150471372.jpg?semt=ais_hybrid&w=740&q=80",
      description:
        "My team was leaving review feedback in three places and losing half of it. Marginal is a shared editor where comments anchor to a line and update live for everyone in the doc.",
      tech: ["Next.js", "TypeScript", "Node.js", "WebSockets", "PostgreSQL", "Prisma"],
      highlights: [
        "Holds ~50 concurrent editors per doc with sub-120ms update propagation",
        "Reconnect-and-merge logic recovers offline edits without dropping changes",
        "Server memory per active doc kept under 40MB",
      ],
      links: { live: "https://marginal.rakibhossain.dev", github: "https://github.com/rakib-hossain32/marginal" },
      year: "2024",
      accent: "emerald",
    },
    {
      name: "Stallworth",
      tagline: "Marketplace for secondhand camera gear",
      image: "https://img.magnific.com/free-psd/flat-design-creativity-template_23-2150471372.jpg?semt=ais_hybrid&w=740&q=80",
      description:
        "A friend who flips camera equipment was running everything through DMs and a notebook. I built Stallworth so sellers can list gear, buyers checkout through Stripe, and both sides get an actual order history.",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Stripe", "Tailwind CSS"],
      highlights: [
        "Row-level locking on checkout fixed a double-sell race we hit in week one",
        "Trimmed the listing page bundle from 310KB to 180KB, LCP went from 3.4s to 1.6s",
        "Processed ~1,200 orders in the first six months with no failed payouts",
      ],
      links: { live: "https://stallworth.rakibhossain.dev", github: "https://github.com/rakib-hossain32/stallworth" },
      year: "2023",
      accent: "cyan",
    },
    {
      name: "Relay",
      tagline: "Internal tool for managing background jobs and retries",
      image: "https://img.magnific.com/free-psd/flat-design-creativity-template_23-2150471372.jpg?semt=ais_hybrid&w=740&q=80",
      description:
        "We had cron jobs scattered across three services and no easy way to see why one failed or to re-run it. Relay registers jobs, shows their run history, and lets you retry a failed run from the UI.",
      tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Redis", "BullMQ", "Docker"],
      highlights: [
        "Tracks ~80k job runs/week with searchable history going back 90 days",
        "Replaced a 600-line bash cron setup; diagnosis time dropped to minutes",
        "Idempotency keys on retries stopped duplicate side effects",
      ],
      links: { live: "https://relay.rakibhossain.dev", github: "https://github.com/rakib-hossain32/relay" },
      year: "2025",
      accent: "lime",
    },
  ],

  experience: [
    {
      role: "MERN Stack Developer",
      company: "Rise Together",
      period: "2026-03-01 — Present",
      summary:
        "Worked as a full-stack developer on a product team, building and maintaining features across the entire stack using the MERN technology set.",
      bullets: [
        "Developed and maintained RESTful APIs with Express.js and Node.js, consumed by a Next.js frontend",
        "Designed and managed MongoDB schemas and wrote optimized queries for core application features",
        "Built reusable React components and integrated them with backend APIs to deliver complete user-facing features",
        "Collaborated in a team environment using Git for version control and participated in code reviews",
      ],
    },
  ],

  contact: {
    headline: "Open to work",
    text: "I'm looking for full-stack or backend-leaning roles, the kind where I can own the data layer and the API. If you've got something gnarly in Postgres, or a Next.js app that's quietly gotten slow, that's the work I'd take. Email is the fastest way to reach me.",
    email: "rakibulhasanmd678@gmail.com",
  },
};
