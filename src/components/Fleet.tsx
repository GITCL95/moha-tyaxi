"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Briefcase, Check, Phone, Users } from "lucide-react";
import { FLEET, SITE } from "@/lib/constants";
import { SectionHeader } from "./SectionHeader";

export function Fleet() {
  return (
    <section id="fleet" className="section-pad relative">
      <div className="container-page">
        <SectionHeader
          eyebrow="Notre flotte"
          title={
            <>
              Des véhicules{" "}
              <span className="brand-gradient-text">récents & confortables</span>
            </>
          }
          description="Berline premium ou van 8 places : on choisit le véhicule le mieux adapté à votre trajet."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {FLEET.map((v, i) => (
            <motion.div
              key={v.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-ink-200 bg-white shadow-card"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-ink-100">
                <Image
                  src={v.image}
                  alt={v.name}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-900/40 via-transparent to-transparent" />
                <div className="absolute left-5 top-5 flex gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-ink-900 shadow-card backdrop-blur">
                    <Users size={14} className="text-brand-600" />
                    {v.capacity}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-ink-900 shadow-card backdrop-blur">
                    <Briefcase size={14} className="text-brand-600" />
                    {v.luggage}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-7">
                <h3 className="font-display text-2xl font-bold text-ink-900">
                  {v.name}
                </h3>
                <p className="mt-2 text-sm text-ink-600">{v.description}</p>

                <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
                  {v.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-ink-700"
                    >
                      <Check size={14} className="text-brand-600" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a href="#reserver" className="btn-primary">
                    Réserver ce véhicule
                  </a>
                  <a
                    href={SITE.phoneHref}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-ink-700 hover:text-brand-700"
                  >
                    <Phone size={14} className="text-brand-600" />
                    {SITE.phone}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
