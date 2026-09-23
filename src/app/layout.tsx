import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Prakarsh Gupta | AI Systems Engineer & Full-Stack Developer",
  description:
    "Portfolio of Prakarsh Gupta: Software Engineer at Expedia Group, Google Summer of Code Alumnus, and builder of autonomous AI agent systems.",
  keywords: [
    "Prakarsh Gupta",
    "AI Systems Engineer",
    "Expedia Group",
    "Claude Code",
    "LangChain",
    "n8n",
    "Google Summer of Code",
    "Agentic SaaS",
  ],
  authors: [{ name: "Prakarsh Gupta" }],
  openGraph: {
    title: "Prakarsh Gupta | AI Systems Engineer",
    description: "Building production-grade agentic AI systems and resilient cloud architecture.",
    url: "https://www.linkedin.com/in/prakarshgupta/",
    siteName: "Prakarsh Gupta Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable}`}>
      <body className="bg-zinc-950 text-zinc-100 font-sans antialiased selection:bg-sky-500/20 selection:text-sky-200">
        {children}
      </body>
    </html>
  );
}
