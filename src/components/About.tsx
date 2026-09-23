import React from "react";
import { portfolioData } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 border-b border-zinc-800/80">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
          About
        </h2>

        <div className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 sm:p-8 backdrop-blur-sm">
          <p className="text-xl sm:text-2xl font-medium text-zinc-100 leading-snug">
            &ldquo;{portfolioData.about.lead}&rdquo;
          </p>

          <p className="mt-5 text-base sm:text-lg text-zinc-400 leading-relaxed">
            {portfolioData.about.body}
          </p>

          <div className="mt-6 pt-6 border-t border-zinc-800/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-sm text-zinc-400">
            <div>
              <span className="text-zinc-500 font-medium">Current Role:</span>{" "}
              <span className="text-zinc-200">Software Engineer at Expedia Group</span>
            </div>
            <div>
              <span className="text-zinc-500 font-medium">Alma Mater:</span>{" "}
              <span className="text-zinc-200">NIT Kurukshetra (B.Tech, 9.34 GPA)</span>
            </div>
            <div>
              <span className="text-zinc-500 font-medium">Specialization:</span>{" "}
              <span className="text-sky-400">Agentic SaaS & Enterprise Backend</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
