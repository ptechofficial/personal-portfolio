import React from "react";
import { ArrowUpRight, VideoCamera } from "@phosphor-icons/react/dist/ssr";
import { portfolioData } from "@/data/portfolio";

export function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 border-b border-zinc-800/80">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
          Featured Work & Projects
        </h2>
        <p className="mt-2 text-sm sm:text-base text-zinc-400">
          Selected AI agents, software platforms, and creative technical experiments.
        </p>

        {/* Project Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioData.projects.map((proj) => (
            <div
              key={proj.title}
              className="flex flex-col justify-between rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-6 backdrop-blur-sm transition-all hover:border-sky-500/40 hover:bg-zinc-900/60"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-semibold text-sky-300">
                    {proj.badge}
                  </span>
                  {proj.stats && (
                    <span className="text-xs font-medium text-emerald-400">
                      {proj.stats}
                    </span>
                  )}
                </div>

                <h3 className="mt-4 text-xl font-bold text-white tracking-tight">
                  {proj.title}
                </h3>

                <p className="mt-2.5 text-sm text-zinc-400 leading-relaxed">
                  {proj.description}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-1.5 pt-4 border-t border-zinc-800/60">
                {proj.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-zinc-800 bg-zinc-950 px-2.5 py-0.5 text-xs text-zinc-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Public Talks & Keynotes */}
        <div className="mt-12">
          <h3 className="text-lg font-bold text-white">
            Invited Tech Talks & Conferences
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-zinc-400">
            Recorded keynotes presented at open-source summits and engineering communities.
          </p>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {portfolioData.talks.map((talk) => (
              <a
                key={talk.title}
                href={talk.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between rounded-xl border border-zinc-800/80 bg-zinc-900/30 p-5 transition-all hover:border-red-500/40 hover:bg-zinc-900/60"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-xs font-medium text-red-400">
                      <VideoCamera size={14} weight="fill" />
                      <span>{talk.organization}</span>
                    </span>
                    <ArrowUpRight
                      size={14}
                      className="text-zinc-500 group-hover:text-red-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                    />
                  </div>

                  <h4 className="mt-3 text-base font-semibold text-white group-hover:text-red-300 transition-colors">
                    {talk.title}
                  </h4>
                  <p className="mt-1 text-xs text-zinc-400">
                    {talk.description}
                  </p>
                </div>

                <div className="mt-4 text-xs font-medium text-zinc-500 group-hover:text-zinc-300">
                  Watch on YouTube →
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
