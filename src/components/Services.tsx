"use client";

import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Check, HeartPulse, Plane } from "lucide-react";
import { SERVICES, SITE } from "@/lib/constants";
import { SectionHeader } from "./SectionHeader";
import { cn } from "@/lib/utils";

const ICONS = { Briefcase, HeartPulse, Plane };

export function Services() {
  return (
    <section id="services" className="section-pad relative">
      <div className="container-page">
        <SectionHeader
          eyebrow="Nos services"
          title={
            <>
              Trois formules,{" "}
              <span className="brand-gradient-text">un seul numéro.</span>
            </>
          }
          description="Qu'il s'agisse d'un rendez-vous médical, d'un vol à prendre ou d'un déplacement professionnel, notre équipe s'occupe de tout."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.icon as keyof typeof ICONS];
            const highlight = "highlight" in s && s.highlight;
            return (
              <motion.article
                key={s.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={cn(
                  "group relative flex h-full flex-col overflow-hidden rounded-3xl border p-7 transition-all duration-300",
                  highlight
                    ? "border-brand-500 bg-white shadow-brand-glow ring-1 ring-brand-500/30"
                    : "border-ink-200 bg-white shadow-card hover:-translate-y-1 hover:border-ink-900/20 hover:shadow-card-md"
                )}
              >
                {highlight && (
                  <span className="absolute right-5 top-5 rounded-full bg-brand-500 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                    Populaire
                  </span>
                )}
                <div
                  className={cn(
                    "mb-5 flex h-14 w-14 items-center justify-center rounded-2xl",
                    highlight
                      ? "bg-brand-500 text-white"
                      : "bg-ink-900 text-white"
                  )}
                >
                  <Icon size={26} />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-brand-700">
                    {s.tagline}
                  </div>
                  <h3 className="mt-1 font-display text-2xl font-bold text-ink-900">
                    {s.title}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-ink-600">
                  {s.description}
                </p>
                <ul className="mt-5 space-y-2">
                  {s.perks.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-2 text-sm text-ink-700"
                    >
                      <Check
                        size={16}
                        className="mt-0.5 shrink-0 text-brand-600"
                      />
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex items-center gap-3 border-t border-ink-100 pt-5">
                  <a
                    href="#reserver"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-ink-900 transition hover:text-brand-700"
                  >
                    Réserver
                    <ArrowRight
                      size={16}
                      className="transition group-hover:translate-x-1"
                    />
                  </a>
                  <span className="text-ink-300">·</span>
                  <a
                    href={SITE.phoneHref}
                    className="text-sm font-semibold text-brand-700 hover:text-brand-800"
                  >
                    Appeler
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
