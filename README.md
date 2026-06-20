# 🚀 Rakib Hossain — Portfolio

A minimal, stunning, and highly responsive portfolio for a Full-Stack Developer. Featuring a clean, refreshing "White + Lime" aesthetic, this portfolio is designed to showcase projects, skills, and experience with beautiful micro-interactions.

Built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS v4**, and **Motion**.

---

## ✨ Features

- 🎨 **White + Lime Theme**: A clean, modern, and refreshing light mode design.
- ⚡ **Next.js App Router**: Fast, optimized, and SEO-friendly routing.
- 💅 **Tailwind CSS v4**: Beautiful, utility-first styling with custom theme tokens.
- 🎬 **Motion**: Smooth scroll animations, hover states, and reveal effects.
- 📱 **Fully Responsive**: Carefully crafted to look perfect on desktop, tablet, and mobile.
- 🛠️ **Centralized Content**: Update your entire portfolio by editing just **one** file!

---

## 🚀 Getting Started

### 1️⃣ Installation

Install the project dependencies:

```bash
npm install
```

### 2️⃣ Development Server

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 3️⃣ Production Build

To build and serve the optimized application for production:

```bash
npm run build
npm run start
```

---

## 📝 Edit Your Content

**Everything you'd want to change lives in one single file:** [`lib/content.ts`](lib/content.ts).

You can easily modify the following sections:

- 👤 **`person`** — Your name, role, location, hero headline, tagline, email, and social links (GitHub/LinkedIn).
- 📖 **`about`** — Your professional bio paragraphs and small statistic chips.
- 🛠️ **`skills`** — Grouped technologies and tools you work with.
- 💻 **`projects`** — Project cards detailing the name, description, tech stack, highlights, live/repo links, year, and a customized card `accent` color.
- 🏢 **`experience`** — Your professional work timeline and history.
- 📬 **`contact`** — The closing call-to-action details and messaging.

> 💡 **Note:** The current links, email, and socials are placeholders. Don't forget to swap them out for your real ones before sharing your site!

### 🎨 Project Accents
Each project has an `accent` property that accepts `teal` | `emerald` | `cyan` | `lime` to tint its card's hover glow with a unique color.

---

## 🎨 Theming

Colors and fonts are defined once in [`app/globals.css`](app/globals.css) under `@theme`. 
You can easily change the `--color-*` CSS variables there to completely reskin the whole site and make it your own!

---

## 📂 Project Structure

```text
.
├── app/
│   ├── layout.tsx     # Global fonts, metadata, and <html> structure
│   ├── page.tsx       # Assembles and renders all sections
│   └── globals.css    # Tailwind v4 theme and base styles
├── components/        # UI components (Navbar, Hero, About, Skills, Projects, etc.)
└── lib/
    ├── content.ts     # ← 📝 ALL YOUR CONTENT LIVES HERE
    └── types.ts       # TypeScript definitions for the content
```

---

<p align="center">
  Built with ❤️ by Rakib Hossain.
</p>
