"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  Clock3,
  Phone,
  Shield,
  Star,
} from "lucide-react";
import { SITE, STATS } from "@/lib/constants";
import { QuickBookingForm } from "./QuickBookingForm";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28"
    >
      {/* Background layers */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-white to-ink-50"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-radial-brand mask-radial"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-grid-ink [background-size:60px_60px] opacity-60 mask-radial"
      />
      {/* Glow blobs */}
      <div
        aria-hidden
        className="absolute -left-40 top-10 -z-10 h-[400px] w-[400px] rounded-full bg-brand-300/30 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -right-40 bottom-0 -z-10 h-[500px] w-[500px] rounded-full bg-brand-100/60 blur-3xl"
      />

      <div className="container-page grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center gap-3"
          >
            <span className="eyebrow">
              <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-brand-500" />
              En ligne maintenant
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-ink-200 bg-white px-3 py-1 text-xs font-semibold text-ink-700 shadow-card">
              <Star size={14} className="fill-amber-400 text-amber-400" />
              4,9 / 5 sur 187 avis
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="heading-xl mt-5"
          >
            Taxi à Montigny-lès-Cormeilles{" "}
            <span className="brand-gradient-text">& Herblay</span>
            <br />
            <span className="text-ink-700">en moins de 10 minutes.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-5 max-w-xl text-base text-ink-600 sm:text-lg"
          >
            Conventionné CPAM, transferts aéroports CDG/Orly, courses privées,
            transport médical. Service disponible{" "}
            <span className="font-semibold text-ink-900">24h/24 et 7j/7</span>{" "}
            dans tout le Val-d'Oise.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href={SITE.phoneHref}
              className="btn-primary animate-pulse-brand shimmer group w-full justify-center text-base sm:w-auto"
            >
              <Phone size={18} className="transition group-hover:rotate-12" />
              Appeler maintenant — {SITE.phone}
            </a>
            <a
              href="#reserver"
              className="btn-secondary w-full justify-center sm:w-auto"
            >
              Réserver en ligne
            </a>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-ink-700"
          >
            <li className="flex items-center gap-2">
              <BadgeCheck size={18} className="text-brand-600" />
              Conventionné CPAM
            </li>
            <li className="flex items-center gap-2">
              <Clock3 size={18} className="text-brand-600" />
              24h/24 — 7j/7
            </li>
            <li className="flex items-center gap-2">
              <Shield size={18} className="text-brand-600" />
              Chauffeurs certifiés
            </li>
          </motion.ul>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4"
          >
            {STATS.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-ink-200 bg-white p-4 text-center shadow-card transition hover:-translate-y-0.5 hover:border-brand-500/40 hover:shadow-card-md"
              >
                <div className="font-display text-xl font-extrabold text-ink-900 sm:text-2xl">
                  {s.value}
                </div>
                <div className="mt-1 text-xs text-ink-500">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          id="reserver"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative scroll-mt-28"
        >
          <div
            aria-hidden
            className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-200/50 via-white to-ink-100 blur-2xl"
          />
          <QuickBookingForm />
        </motion.div>
      </div>
    </section>
  );
}
