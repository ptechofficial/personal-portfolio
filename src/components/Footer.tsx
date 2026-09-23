import React from "react";
import { portfolioData } from "@/data/portfolio";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800/80 bg-zinc-950 py-8 text-center text-xs text-zinc-500">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          © {currentYear} {portfolioData.personal.name}. All rights reserved.
        </div>
        <div className="flex items-center gap-4 text-zinc-400">
          <a
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400 transition-colors"
          >
            LinkedIn
          </a>
          <span>·</span>
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <span>·</span>
          <a
            href="#about"
            className="hover:text-white transition-colors"
          >
            Back to Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
