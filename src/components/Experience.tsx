import React from "react";
import { Briefcase, MapPin, CalendarBlank } from "@phosphor-icons/react/dist/ssr";
import { portfolioData } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 border-b border-zinc-800/80">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
          Work Experience
        </h2>
        <p className="mt-2 text-sm sm:text-base text-zinc-400">
          Professional trajectory across high-scale enterprise engineering, autonomous AI systems, and open source.
        </p>

        <div className="mt-10 space-y-6">
          {portfolioData.experiences.map((exp, idx) => (
            <div
              key={`${exp.company}-${idx}`}
              className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-6 sm:p-7 backdrop-blur-sm transition-all hover:border-zinc-700/80"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {exp.role}
                  </h3>
                  <div className="text-sm font-medium text-sky-400">
                    {exp.company}
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-zinc-400">
                  <CalendarBlank size={14} />
                  <span>{exp.period}</span>
                </div>
              </div>

              <div className="mt-2 flex items-center gap-1.5 text-xs text-zinc-500">
                <MapPin size={13} />
                <span>{exp.location}</span>
                <span className="text-zinc-700">·</span>
                <span>{exp.type}</span>
              </div>

              <p className="mt-3 text-sm text-zinc-300">
                {exp.summary}
              </p>

              <ul className="mt-3.5 space-y-2 text-sm text-zinc-400">
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400/80" />
                    <span className="leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-1.5 pt-4 border-t border-zinc-800/60">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-zinc-800 bg-zinc-950/80 px-2.5 py-0.5 text-xs font-medium text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
