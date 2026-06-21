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
      "I am actively looking for opportunities where I can grow as an engineer, take on greater responsibility, and contribute to a team building meaningful products.",
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
      items: [
        "React",
        "Next.js",
        "JavaScript",
        "TypeScript",
        "TanStack Query",
        "Tailwind CSS",
        "HTML & CSS",
        "Axios",
        "Shadcn/UI",
        "React Router",
        "Zod",
      ],
    },
    {
      group: "Backend",
      items: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "Prisma",
        "JWT",
        "Mongoose",
      ],
    },
    {
      group: "Databases",
      items: ["PostgreSQL", "MongoDB", "Redis", "NeonDB"],
    },
    {
      group: "Tools & Deploy",
      items: [
        "Git",
        "GitHub",
        "Vercel",
        "Postman",
        "GitHub Actions",
        "Firebase",
      ],
    },
  ],

  projects: [
    {
      name: "ContestHub",
      tagline:
        "Creative contest platform for designers, developers, and writers",
      image: "https://i.ibb.co.com/Nd1KwFCT/photo-4.png",
      description:
        "ContestHub is a modern contest management platform where creative professionals can discover competitions, register, submit their work, and track upcoming events. The platform features advanced filtering, countdown timers, user dashboards, secure authentication, and a seamless submission workflow wrapped in a premium glassmorphism UI.",
      tech: [
        "React",
        "Vite",
        "Tailwind CSS",
        "Stripe",
        "Firebase",
        "React Router",
        "MongoDB",
        "Axios",
      ],

      links: {
        live: "https://contest-hub-c7402.web.app/",
        github: "https://github.com/rakib-hossain32/Contest-Hub",
      },
      year: "2025",
      accent: "lime",
    },
    {
      name: "GFC - Golden First Contracting",
      tagline: "Digital platform for global freight and supply chain solutions",
      image: "https://i.ibb.co.com/tpCM3Fff/photo-1.png",
      description:
        "GFC is a business-focused logistics platform designed to strengthen the digital presence of a global freight forwarding company. The website presents transportation, cargo, and supply chain services through a modern interface, helping potential clients quickly understand capabilities, explore solutions, and connect with the company.",

      tech: [
        "Next.js",
        "MongoDB",
        "Tailwind CSS",
        "TypeScript",
        "recharts",
        "qrcode",
        "nodemailer",
        "react-phone-number-input"
      ],
      links: {
        live: "https://www.gfcont.com/",
        github: "https://github.com/rakib-hossain32/gfc",
      },

      year: "2025",
      accent: "emerald",
    },
    {
      name: "Movie Master Pro",
      tagline: "Movie discovery and watchlist management platform",
      image: "https://i.ibb.co.com/TBmfxXWB/photo-2.png",
      description:
        "Movie Master Pro is a modern movie exploration platform where users can discover trending films, browse detailed movie information, manage personalized watchlists, and explore movies by genre. The application provides a smooth and engaging experience with secure authentication, dynamic content management, and a responsive user interface.",
      tech: [
        "React",
        "Firebase",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "React Router",
      ],

      links: {
        live: "https://movies-master-pro.web.app/",
        github: "https://github.com/rakib-hossain32/Movie-Master-Pro",
      },
      year: "2025",
      accent: "cyan",
    },
    {
      name: "Hotel Builder",
      tagline: "No-code platform for building professional hotel websites",
      image: "https://i.ibb.co.com/LDvs5s4s/photo-5.png",
      description:
        "Hotel Builder is a SaaS platform that enables hotel owners to create and manage professional websites for their properties without coding. Users can customize branding, showcase rooms and amenities, manage content, and launch a modern hotel website through an intuitive dashboard.",

      tech: [
        "Next.js",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "Tailwind CSS",
        "Express.js",
        "REST API",
        "JWT",
        "Prisma",
        "Bcrypt",
      ],
      links: {
        live: "https://hotel-builder-frontend.vercel.app/",
        
      },

      year: "2026",
      accent: "lime",
    },
    {
      name: "Cha Wala",
      tagline: "Modern tea store and e-commerce experience",
      image: "https://i.ibb.co.com/CpCk89KL/photo-3.png",
      description:
        "Cha Wala is a modern tea shop platform that showcases premium tea collections through an elegant and user-friendly interface. Customers can explore products, learn about different tea varieties, and enjoy a seamless browsing experience with responsive design and engaging visual elements.",
      tech: [
        "html5-qrcode",
        "Next.js",
        "Tailwind CSS",
        "TypeScript",
        "MongoDB",
        "Mongoose",
        "html2pdf.js",
        "qrcode.react",
        "recharts"
      ],

      links: {
        live: "https://cha-wala-bice.vercel.app/hero-gateway",
        github: "https://github.com/rakib-hossain32/cha-wala",
      },

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
