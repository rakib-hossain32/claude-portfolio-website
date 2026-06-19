import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { content } from "@/lib/content";
import "./globals.css";

const { person } = content;
const siteUrl = "https://rakibhossain.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${person.name} — ${person.role}`,
    template: `%s · ${person.name}`,
  },
  description: person.tagline,
  keywords: [
    "Rakib Hossain",
    "Full-Stack Developer",
    "Next.js",
    "TypeScript",
    "PostgreSQL",
    "React",
    "Node.js",
    "Web Developer Dhaka",
  ],
  authors: [{ name: person.name }],
  creator: person.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: `${person.name} — ${person.role}`,
    description: person.tagline,
    siteName: person.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${person.name} — ${person.role}`,
    description: person.tagline,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0b0f14",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="min-h-dvh antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-bg"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
