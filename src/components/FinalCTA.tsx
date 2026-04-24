"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import { SITE } from "@/lib/constants";

export function FinalCTA() {
  return (
    <section id="contact" className="section-pad relative">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2.5rem] border border-ink-900 bg-ink-900 p-8 text-white shadow-card-lg sm:p-14"
        >
          <div
            aria-hidden
            className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-brand-500/20 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-brand-400/10 blur-3xl"
          />

          <div className="relative grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/40 bg-brand-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">
                Besoin d'un taxi maintenant ?
              </span>
              <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Un simple coup de fil et votre{" "}
                <span className="text-brand-400">taxi est en route.</span>
              </h2>
              <p className="mt-4 max-w-xl text-ink-300">
                Disponible 24h/24, 7j/7. Prise en charge moyenne en moins de 10
                minutes sur Montigny-lès-Cormeilles, Herblay et tout le
                Val-d'Oise.
              </p>
              <ul className="mt-6 grid gap-2 text-sm text-ink-200 sm:grid-cols-2">
                {[
                  "Réponse immédiate",
                  "Tarif annoncé sans surprise",
                  "Paiement CB / espèces / CPAM",
                  "SMS de confirmation",
                ].map((it) => (
                  <li key={it} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href={SITE.phoneHref}
                className="group flex items-center justify-between gap-4 rounded-2xl bg-brand-500 px-6 py-5 font-bold text-white shadow-brand-glow-lg transition hover:-translate-y-0.5 hover:bg-brand-600"
              >
                <span className="flex items-center gap-3">
                  <Phone
                    size={22}
                    className="transition group-hover:rotate-12"
                  />
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-wider opacity-80">
                      Téléphone direct
                    </span>
                    <span className="block text-xl">{SITE.phone}</span>
                  </span>
                </span>
              </a>
              <a
                href={SITE.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 rounded-2xl border border-white/15 bg-white/5 px-6 py-5 font-semibold text-white transition hover:border-[#25D366]/60 hover:bg-white/10"
              >
                <span className="flex items-center gap-3">
                  <MessageCircle size={22} className="text-[#25D366]" />
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-ink-300">
                      Message WhatsApp
                    </span>
                    <span className="block text-base">
                      Répondu en quelques minutes
                    </span>
                  </span>
                </span>
              </a>
              <a
                href="#reserver"
                className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-center text-sm font-semibold text-ink-200 transition hover:bg-white/10 hover:text-white"
              >
                Préférez le formulaire en ligne ? C'est juste en haut ↑
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
