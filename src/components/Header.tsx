"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

const links = [
  { href: "#services", label: "Services" },
  { href: "#fleet", label: "Flotte" },
  { href: "#coverage", label: "Zones" },
  { href: "#avis", label: "Avis" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-ink-200 bg-white/85 backdrop-blur-xl"
          : "bg-white/0"
      )}
    >
      <div className="container-page flex h-20 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 font-display text-lg font-extrabold tracking-tight text-ink-900"
          aria-label="Accueil"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink-900 text-white shadow-card">
            <LogoMark />
          </span>
          <span className="hidden sm:block">
            Taxi <span className="text-brand-600">Montigny 95</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-ink-600 transition hover:bg-ink-100 hover:text-ink-900"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={SITE.phoneHref}
            className="group hidden items-center gap-2 rounded-full border border-ink-200 bg-white px-4 py-2 text-sm font-semibold text-ink-900 transition hover:border-ink-900 md:inline-flex"
          >
            <Phone size={16} className="text-brand-600" />
            {SITE.phone}
          </a>
          <a href="#reserver" className="btn-primary hidden sm:inline-flex">
            Réserver
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 bg-white text-ink-900 transition hover:bg-ink-100 lg:hidden"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden fixed inset-x-0 top-20 z-40 origin-top transition-all duration-300",
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        )}
      >
        <div className="border-b border-ink-200 bg-white/95 backdrop-blur-xl">
          <div className="container-page py-6">
            <nav className="flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-semibold text-ink-900 transition hover:bg-ink-100"
                >
                  {l.label}
                </a>
              ))}
            </nav>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <a
                href={SITE.phoneHref}
                className="btn-secondary"
                onClick={() => setOpen(false)}
              >
                <Phone size={16} /> Appeler
              </a>
              <a
                href="#reserver"
                className="btn-primary"
                onClick={() => setOpen(false)}
              >
                Réserver
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function LogoMark() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M14 16H9a2 2 0 0 0-2 2v2h10v-2a2 2 0 0 0-2-2Z" />
      <path d="M5 11V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4" />
      <path d="M3 13h18" />
      <circle cx="7.5" cy="14.5" r="1" />
      <circle cx="16.5" cy="14.5" r="1" />
    </svg>
  );
}
