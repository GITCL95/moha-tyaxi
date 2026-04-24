"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, MapPin } from "lucide-react";
import { useEffect, useState } from "react";

const MESSAGES = [
  { who: "Camille", trip: "Herblay → CDG", ago: "il y a 3 min" },
  { who: "Yann", trip: "Montigny → Orly", ago: "il y a 7 min" },
  { who: "Mme Laurent", trip: "CPAM Franconville → Argenteuil", ago: "il y a 12 min" },
  { who: "Thomas", trip: "Cormeilles → Gare du Nord", ago: "il y a 16 min" },
  { who: "Sonia", trip: "Montigny → Hôpital Pontoise", ago: "il y a 22 min" },
  { who: "Karim", trip: "Herblay → Disneyland", ago: "il y a 28 min" },
];

export function LiveBookingToast() {
  const [idx, setIdx] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const first = setTimeout(() => setShow(true), 4000);
    return () => clearTimeout(first);
  }, []);

  useEffect(() => {
    if (!show) return;
    const interval = setInterval(() => {
      setShow(false);
      setTimeout(() => {
        setIdx((i) => (i + 1) % MESSAGES.length);
        setShow(true);
      }, 400);
    }, 7000);
    return () => clearInterval(interval);
  }, [show]);

  const msg = MESSAGES[idx];

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-24 z-30 flex justify-center px-4 sm:bottom-24 sm:left-6 sm:right-auto sm:justify-start">
      <AnimatePresence mode="wait">
        {show && (
          <motion.div
            key={msg.who}
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.35 }}
            className="pointer-events-auto max-w-sm rounded-2xl border border-ink-200 bg-white px-4 py-3 shadow-card-lg"
          >
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                <CheckCircle2 size={18} />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-ink-900">
                  {msg.who} vient de réserver
                </p>
                <p className="flex items-center gap-1 truncate text-xs text-ink-500">
                  <MapPin size={12} className="text-brand-600" />
                  {msg.trip} · {msg.ago}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
