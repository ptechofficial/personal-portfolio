"use client";

import React, { useState } from "react";
import {
  LinkedinLogo,
  GithubLogo,
  YoutubeLogo,
  ArrowUpRight,
  Check,
  Copy,
  EnvelopeSimple,
  MapPin,
} from "@phosphor-icons/react";
import { portfolioData } from "@/data/portfolio";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const contactEmail = "prakarshgupta.work@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Get in Touch
        </h2>
        <p className="mt-3 text-base sm:text-lg text-zinc-400 max-w-xl mx-auto">
          Interested in collaborating on AI agents, high-scale systems, or speaking opportunities? Feel free to reach out directly.
        </p>

        {/* Action Card */}
        <div className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-8 sm:p-10 backdrop-blur-md max-w-xl mx-auto text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-sky-500 px-7 py-3 text-sm font-semibold text-zinc-950 hover:bg-sky-400 active:scale-[0.98] transition-all shadow-lg shadow-sky-500/20"
            >
              <LinkedinLogo size={18} weight="bold" />
              <span>Connect on LinkedIn</span>
              <ArrowUpRight size={14} weight="bold" />
            </a>

            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-zinc-700 bg-zinc-950 px-6 py-3 text-sm font-semibold text-white hover:border-zinc-500 hover:bg-zinc-800/80 active:scale-[0.98] transition-all"
            >
              <GithubLogo size={18} weight="bold" />
              <span>GitHub Profile</span>
              <ArrowUpRight size={14} weight="bold" />
            </a>
          </div>

          {/* Social Links Row */}
          <div className="mt-8 pt-6 border-t border-zinc-800 flex items-center justify-center gap-6 text-sm text-zinc-400">
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-sky-400 transition-colors"
            >
              <LinkedinLogo size={16} weight="fill" />
              <span>LinkedIn</span>
            </a>
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <GithubLogo size={16} weight="fill" />
              <span>GitHub</span>
            </a>
            <a
              href={portfolioData.personal.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-red-400 transition-colors"
            >
              <YoutubeLogo size={16} weight="fill" />
              <span>YouTube</span>
            </a>
          </div>
        </div>

        <div className="mt-8 text-xs text-zinc-500 flex items-center justify-center gap-1.5">
          <MapPin size={13} weight="fill" />
          <span>Based in {portfolioData.personal.location} · Working with teams worldwide</span>
        </div>
      </div>
    </section>
  );
}
