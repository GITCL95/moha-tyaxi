"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { SectionHeader } from "./SectionHeader";

export function Testimonials() {
  return (
    <section id="avis" className="section-pad">
      <div className="container-page">
        <SectionHeader
          eyebrow="Avis clients"
          title={
            <>
              Ils nous font confiance —{" "}
              <span className="brand-gradient-text">4,9 / 5</span>
            </>
          }
          description="187 avis Google vérifiés. Voici ce que disent nos clients habitués."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative flex h-full flex-col rounded-3xl border border-ink-200 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-card-md"
            >
              <Quote
                size={32}
                className="absolute right-5 top-5 text-brand-500/20"
              />
              <div className="flex items-center gap-1 text-amber-400">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} className="fill-amber-400" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink-700">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-ink-100 pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ink-900 font-display font-bold text-white">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-bold text-ink-900">
                    {t.name}
                  </div>
                  <div className="text-xs text-ink-500">{t.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
