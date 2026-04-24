"use client";

import { BadgeCheck, Clock3, Shield, Sparkles, Star, Users } from "lucide-react";

const items = [
  { icon: BadgeCheck, label: "Agréé CPAM 95" },
  { icon: Clock3, label: "24h / 24 — 7j / 7" },
  { icon: Shield, label: "Chauffeurs certifiés" },
  { icon: Star, label: "Note 4,9 / 5" },
  { icon: Users, label: "+12 000 clients" },
  { icon: Sparkles, label: "Véhicules < 3 ans" },
];

export function TrustBar() {
  return (
    <section
      aria-label="Nos garanties"
      className="relative border-y border-ink-200 bg-ink-50"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-ink-50 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-ink-50 to-transparent" />
      <div className="overflow-hidden py-5">
        <div className="flex w-max animate-marquee gap-12 px-6">
          {[...items, ...items].map((it, i) => {
            const Icon = it.icon;
            return (
              <span
                key={i}
                className="flex shrink-0 items-center gap-2 text-sm font-semibold text-ink-700"
              >
                <Icon size={18} className="text-brand-600" />
                {it.label}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
