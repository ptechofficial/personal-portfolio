import React from "react";
import { Sparkle, Cloud, Browsers } from "@phosphor-icons/react/dist/ssr";
import { portfolioData } from "@/data/portfolio";

export function Skills() {
  const categories = [
    {
      title: "AI Agents & LLM Systems",
      icon: Sparkle,
      skills: portfolioData.skills.ai,
      description: "Autonomous workflow agents, tool calling, and MCP integrations.",
    },
    {
      title: "Backend & Cloud Architecture",
      icon: Cloud,
      skills: portfolioData.skills.backend,
      description: "Distributed enterprise microservices, event streaming, and cloud platforms.",
    },
    {
      title: "Frontend & Full-Stack",
      icon: Browsers,
      skills: portfolioData.skills.frontend,
      description: "Reactive web interfaces, geospatial 3D rendering, and modern UI stacks.",
    },
  ];

  return (
    <section id="skills" className="py-16 md:py-24 border-b border-zinc-800/80">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
          Skills & Technical Expertise
        </h2>
        <p className="mt-2 text-sm sm:text-base text-zinc-400">
          Core toolkits utilized in production enterprise systems and specialized AI development.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.title}
                className="flex flex-col justify-between rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-6 backdrop-blur-sm"
              >
                <div>
                  <div className="flex items-center gap-2.5 text-sky-400">
                    <Icon size={20} weight="duotone" />
                    <h3 className="text-base font-bold text-white">
                      {cat.title}
                    </h3>
                  </div>

                  <p className="mt-2 text-xs text-zinc-400">
                    {cat.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-1 text-xs font-medium text-zinc-200 transition-colors hover:border-sky-500/40 hover:text-sky-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
