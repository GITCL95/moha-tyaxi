"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { CITIES, SITE } from "@/lib/constants";
import { SectionHeader } from "./SectionHeader";

export function Coverage() {
  return (
    <section id="coverage" className="section-pad relative bg-ink-50">
      <div className="container-page">
        <SectionHeader
          eyebrow="Zones desservies"
          title={
            <>
              Tout le{" "}
              <span className="brand-gradient-text">Val-d'Oise (95)</span> et
              l'Île-de-France
            </>
          }
          description="Basés à Montigny-lès-Cormeilles, nous intervenons dans toutes les communes voisines et au-delà."
        />

        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl border border-ink-200 bg-white shadow-card"
          >
            <iframe
              title="Carte des zones desservies"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d279589.45191335684!2d2.0534195910591646!3d49.10965974488624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6f59ac710fac3%3A0x30b82c3688b2b70!2sVal-d&#39;Oise%2C%20France!5e1!3m2!1sen!2sth!4v1759756523663!5m2!1sen!2sth"
              className="h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col rounded-3xl border border-ink-200 bg-white p-6 shadow-card sm:p-8"
          >
            <h3 className="font-display text-xl font-bold text-ink-900">
              Communes & zones couvertes
            </h3>
            <p className="mt-2 text-sm text-ink-600">
              Prise en charge 24h/24 avec délai moyen de 10 min.
            </p>

            <ul className="mt-5 flex flex-wrap gap-2">
              {CITIES.map((c, i) => (
                <li key={c}>
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm ${
                      i === 0 || i === 1
                        ? "border-brand-500 bg-brand-50 font-semibold text-brand-800"
                        : "border-ink-200 bg-white text-ink-700"
                    }`}
                  >
                    <MapPin size={12} className="text-brand-600" />
                    {c}
                  </span>
                </li>
              ))}
              <li>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-dashed border-ink-300 bg-white px-3 py-1.5 text-sm text-ink-600">
                  + Aéroports CDG / Orly / Beauvais
                </span>
              </li>
            </ul>

            <div className="mt-auto pt-6">
              <a
                href={SITE.phoneHref}
                className="btn-primary w-full justify-center"
              >
                Je réserve — {SITE.phone}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
