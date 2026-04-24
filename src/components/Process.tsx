"use client";

import { motion } from "framer-motion";
import { Car, CheckCircle2, PhoneCall } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const STEPS = [
  {
    n: "01",
    icon: PhoneCall,
    title: "Appelez ou réservez",
    text: "Par téléphone ou formulaire, indiquez-nous votre trajet. On confirme en 2 minutes.",
  },
  {
    n: "02",
    icon: Car,
    title: "Le chauffeur arrive",
    text: "Moins de 10 min de délai moyen sur Montigny & Herblay. Plaque & modèle par SMS.",
  },
  {
    n: "03",
    icon: CheckCircle2,
    title: "Voyagez serein",
    text: "Véhicule climatisé, chargeur, eau offerte. Paiement CB, espèces ou tiers payant CPAM.",
  },
];

export function Process() {
  return (
    <section className="section-pad relative bg-ink-50">
      <div className="container-page">
        <SectionHeader
          eyebrow="Comment ça marche"
          title={
            <>
              3 étapes, <span className="brand-gradient-text">zéro stress</span>
            </>
          }
        />

        <div className="relative grid gap-6 md:grid-cols-3">
          <div
            aria-hidden
            className="absolute left-10 right-10 top-10 hidden h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent md:block"
          />
          {STEPS.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative rounded-3xl border border-ink-200 bg-white p-6 shadow-card"
              >
                <div className="flex items-center gap-4">
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-ink-900 text-white">
                    <Icon size={22} />
                    <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-brand-500 text-[11px] font-bold text-white shadow-card">
                      {s.n}
                    </span>
                  </div>
                </div>
                <h3 className="mt-4 font-display text-xl font-bold text-ink-900">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-ink-600">{s.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
