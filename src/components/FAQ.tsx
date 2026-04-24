"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { FAQS } from "@/lib/constants";
import { SectionHeader } from "./SectionHeader";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-pad">
      <div className="container-page max-w-4xl">
        <SectionHeader
          eyebrow="Questions fréquentes"
          title={
            <>
              On répond à vos{" "}
              <span className="brand-gradient-text">questions</span>
            </>
          }
        />

        <div className="divide-y divide-ink-200 overflow-hidden rounded-3xl border border-ink-200 bg-white shadow-card">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-ink-50"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-ink-900">{f.q}</span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition ${
                      isOpen
                        ? "border-brand-500 bg-brand-500 text-white"
                        : "border-ink-300 text-ink-700"
                    }`}
                  >
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 text-sm leading-relaxed text-ink-600">
                    {f.a}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
