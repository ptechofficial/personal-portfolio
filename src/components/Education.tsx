import React from "react";
import { GraduationCap, Certificate } from "@phosphor-icons/react/dist/ssr";
import { portfolioData } from "@/data/portfolio";

export function Education() {
  return (
    <section id="education" className="py-16 md:py-24 border-b border-zinc-800/80">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Education Column */}
          <div>
            <div className="flex items-center gap-2 text-sky-400">
              <GraduationCap size={22} weight="duotone" />
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                Education
              </h2>
            </div>

            <div className="mt-6 space-y-4">
              {portfolioData.education.map((edu) => (
                <div
                  key={edu.institution}
                  className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-5 backdrop-blur-sm"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-base font-bold text-white">
                      {edu.institution}
                    </h3>
                    <span className="text-xs text-zinc-500 whitespace-nowrap">
                      {edu.period}
                    </span>
                  </div>

                  <div className="mt-1 text-sm font-medium text-sky-400">
                    {edu.degree}
                  </div>

                  <div className="mt-2 inline-block rounded-md bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 text-xs font-semibold text-emerald-400">
                    {edu.grade}
                  </div>

                  {edu.details && (
                    <p className="mt-2.5 text-xs text-zinc-400 leading-relaxed">
                      {edu.details}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div>
            <div className="flex items-center gap-2 text-sky-400">
              <Certificate size={22} weight="duotone" />
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                Certifications
              </h2>
            </div>

            <div className="mt-6 space-y-4">
              {portfolioData.certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-5 backdrop-blur-sm"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-base font-bold text-white">
                      {cert.title}
                    </h3>
                    <span className="text-xs text-zinc-500 whitespace-nowrap">
                      {cert.date}
                    </span>
                  </div>

                  <div className="mt-1 text-xs font-semibold text-zinc-300">
                    Issuer: <span className="text-sky-400">{cert.issuer}</span>
                  </div>

                  <div className="mt-2 font-mono text-[11px] text-zinc-500">
                    ID: {cert.credentialId}
                  </div>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md border border-zinc-800 bg-zinc-950 px-2 py-0.5 text-[11px] text-zinc-400"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
