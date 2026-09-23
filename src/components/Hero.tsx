"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, GithubLogo, LinkedinLogo, YoutubeLogo, MapPin } from "@phosphor-icons/react";
import { portfolioData } from "@/data/portfolio";

export function Hero() {
  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 border-b border-zinc-800/80 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-sky-500/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-10">
          {/* Main Info */}
          <div className="flex-1 max-w-2xl">
            {/* Status indicator */}
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/80 px-3.5 py-1 text-xs text-zinc-300 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for engineering & AI systems collaboration</span>
            </div>

            {/* Headline (Max 2 lines) */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.1]">
              Architecting production <span className="text-sky-400">AI agents</span> & cloud systems.
            </h1>

            {/* Subtext (Max 20 words) */}
            <p className="mt-5 text-base sm:text-lg text-zinc-400 leading-relaxed max-w-xl">
              Software Engineer at Expedia Group and AI systems engineer turning high-friction workflows into autonomous production platforms.
            </p>

            {/* CTAs & Socials */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-2.5 text-sm font-semibold text-zinc-950 hover:bg-sky-400 active:scale-[0.98] transition-all shadow-lg shadow-sky-500/20"
              >
                View Selected Work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-zinc-700 bg-zinc-900/60 px-6 py-2.5 text-sm font-semibold text-white hover:border-zinc-500 hover:bg-zinc-800/80 active:scale-[0.98] transition-all"
              >
                Get in Touch
              </a>

              <div className="flex items-center gap-2 pl-2">
                <a
                  href={portfolioData.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full border border-zinc-800 bg-zinc-900/80 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <GithubLogo size={20} weight="fill" />
                </a>
                <a
                  href={portfolioData.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full border border-zinc-800 bg-zinc-900/80 text-zinc-400 hover:text-sky-400 hover:border-sky-500/40 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinLogo size={20} weight="fill" />
                </a>
                <a
                  href={portfolioData.personal.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full border border-zinc-800 bg-zinc-900/80 text-zinc-400 hover:text-red-400 hover:border-red-500/40 transition-colors"
                  aria-label="YouTube Channel"
                >
                  <YoutubeLogo size={20} weight="fill" />
                </a>
              </div>
            </div>
          </div>

          {/* Profile Card / Headshot */}
          <div className="flex justify-center md:justify-end">
            <div className="relative group">
              {/* Outer glow ring */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-sky-500/40 to-emerald-500/20 blur-md opacity-60 group-hover:opacity-100 transition-opacity" />
              
              {/* Headshot container */}
              <div className="relative h-44 w-44 sm:h-52 sm:w-52 rounded-full overflow-hidden border-2 border-zinc-700/80 bg-zinc-900 p-1">
                <div className="relative h-full w-full rounded-full overflow-hidden bg-zinc-950">
                  <Image
                    src={portfolioData.personal.avatar}
                    alt={portfolioData.personal.name}
                    fill
                    className="object-cover scale-105"
                    priority
                  />
                </div>
              </div>

              {/* Location Badge */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 rounded-full border border-zinc-800 bg-zinc-900/90 px-3 py-1 text-xs font-medium text-zinc-300 shadow-md backdrop-blur">
                <MapPin size={12} weight="fill" className="text-sky-400" />
                <span className="whitespace-nowrap">{portfolioData.personal.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {portfolioData.metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-4 text-center md:text-left backdrop-blur-sm"
            >
              <div className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                {metric.value}
              </div>
              <div className="mt-1 text-xs sm:text-sm text-zinc-400">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
