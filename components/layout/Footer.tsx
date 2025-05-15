"use client";

import Link from "next/link";
import React from "react";

import { fanLinks, officialLinks } from "@/constants/SocialLinks";

interface SocialLinkProps {
  name: string;
  url: string;
  icon: React.ReactNode;
  description: string;
}

function SocialLink({
  name,
  url,
  icon,
  description,
}: Readonly<SocialLinkProps>) {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={description}
      title={description}
      className="
        flex items-center space-x-2 rounded-lg px-3 py-2 transition
      hover:bg-foreground/5 hover:text-ado-blue/80
        focus:outline-none focus:ring-2 focus:ring-ado-key
      "
    >
      {icon}
      <span className="text-sm md:text-lg">{name}</span>
    </Link>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-background text-foreground dark:bg-slate-900">
      <div className="container mx-auto grid grid-cols-1 gap-8 md:gap-12 px-4 py-8 md:py-12 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">ado.fan</h2>
          <p className="text-sm md:text-xl text-foreground/60">
            A fan-made site celebrating the incredible artistry of Ado.
          </p>
          <p className="text-sm md:text-xl text-foreground/60">
            All music, visuals, trademarks and related content remain the
            exclusive property of Universal Music Japan and Ado’s official
            staff—this site is not officially affiliated with or endorsed by
            them.
          </p>
        </div>

        <nav aria-label="Social links">
          <h3 className="mb-4 text-2xl font-medium">Connect with Ado</h3>

          <div className="mb-4">
            <h4 className="mb-2 text-sm font-semibold uppercase text-foreground/80">
              Official
            </h4>
            <ul className="flex flex-wrap gap-0">
              {officialLinks.map((link) => (
                <li key={link.url}>
                  <SocialLink {...link} />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-2 text-sm font-semibold uppercase text-foreground/80">
              Fan Community
            </h4>
            <ul className="flex flex-wrap gap-0">
              {fanLinks.map((link) => (
                <li key={link.url}>
                  <SocialLink {...link} />
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>

      <div className="mb-6 text-center text-sm text-foreground/70">
        Thank you for visiting—let’s honor Ado’s talent together!
      </div>

      <div className="border-t border-foreground/10 py-4 text-center text-xs text-foreground/60">
        &copy; {year} Ado Fan Tribute — Powered by passion, not profit.
      </div>
    </footer>
  );
}
