"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Clock3, MapPin } from "lucide-react";
import { DESTINATIONS, SITE } from "@/lib/constants";
import { SectionHeader } from "./SectionHeader";

export function Destinations() {
  return (
    <section id="destinations" className="section-pad bg-ink-50">
      <div className="container-page">
        <SectionHeader
          eyebrow="Trajets populaires"
          title={
            <>
              Forfaits fixes vers les{" "}
              <span className="brand-gradient-text">grandes destinations</span>
            </>
          }
          description="Un prix annoncé, fixe, sans surprise dans les embouteillages. Demandez votre devis en 30 secondes."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {DESTINATIONS.map((d, i) => (
            <motion.a
              key={d.label}
              href="#reserver"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group flex items-center justify-between rounded-2xl border border-ink-200 bg-white p-5 shadow-card transition hover:-translate-y-0.5 hover:border-brand-500/40 hover:shadow-card-md"
            >
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <MapPin size={18} />
                </span>
                <div>
                  <div className="font-semibold text-ink-900">{d.label}</div>
                  <div className="mt-1 flex items-center gap-1 text-xs text-ink-500">
                    <Clock3 size={12} />
                    {d.time}
                  </div>
                </div>
              </div>
              <ArrowUpRight
                size={18}
                className="text-ink-400 transition group-hover:rotate-12 group-hover:text-brand-600"
              />
            </motion.a>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 rounded-3xl border border-ink-900 bg-ink-900 p-6 text-center text-white sm:flex-row sm:text-left">
          <div className="flex-1">
            <h3 className="font-display text-xl font-bold">
              Votre destination n'est pas dans la liste ?
            </h3>
            <p className="mt-1 text-sm text-ink-300">
              Toute destination en France ou pays limitrophes sur devis.
            </p>
          </div>
          <a href={SITE.phoneHref} className="btn-primary whitespace-nowrap">
            Demander un devis
          </a>
        </div>
      </div>
    </section>
  );
}
