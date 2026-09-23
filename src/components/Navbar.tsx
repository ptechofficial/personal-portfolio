"use client";

import React, { useState } from "react";
import Link from "next/link";
import { List, X, ArrowUpRight } from "@phosphor-icons/react";
import { portfolioData } from "@/data/portfolio";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="#"
          className="flex items-center gap-2.5 font-semibold tracking-tight text-white hover:text-sky-400 transition-colors"
        >
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 ring-4 ring-emerald-400/20" />
          <span>{portfolioData.personal.name}</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1.5 text-xs font-medium text-sky-300 hover:bg-sky-500/20 transition-all"
          >
            <span>LinkedIn</span>
            <ArrowUpRight size={13} weight="bold" />
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-zinc-400 hover:text-white md:hidden"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={22} weight="bold" /> : <List size={22} weight="bold" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-zinc-800 bg-zinc-950 px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-sm font-medium text-zinc-300 hover:text-sky-400"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 py-2 text-xs font-medium text-sky-300"
              >
                <span>View LinkedIn Profile</span>
                <ArrowUpRight size={13} weight="bold" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
