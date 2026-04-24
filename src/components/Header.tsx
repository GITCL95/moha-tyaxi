"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HeartPulse, Menu, Phone, X } from "lucide-react";
import { SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

type NavLink = {
  href: string;
  label: string;
  highlight?: boolean;
};

const links: NavLink[] = [
  { href: "/#services", label: "Services" },
  { href: "/taxi-medical", label: "Taxi médical", highlight: true },
  { href: "/#fleet", label: "Flotte" },
  { href: "/#coverage", label: "Zones" },
  { href: "/#avis", label: "Avis" },
  { href: "/#faq", label: "FAQ" },
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
          aria-label="Accueil — Taxi Montigny-lès-Cormeilles"
          className="relative flex items-center"
        >
          <Image
            src="/logo-header.png"
            alt="Taxi Montigny-lès-Cormeilles"
            width={220}
            height={290}
            priority
            className="h-12 w-auto sm:h-14"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) =>
            l.highlight ? (
              <Link
                key={l.href}
                href={l.href}
                className="inline-flex items-center gap-1.5 rounded-full border border-brand-500/30 bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700 transition hover:border-brand-500 hover:bg-brand-100"
              >
                <HeartPulse size={14} />
                {l.label}
              </Link>
            ) : (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-ink-600 transition hover:bg-ink-100 hover:text-ink-900"
              >
                {l.label}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={SITE.phoneHref}
            className="group hidden items-center gap-2 rounded-full border border-ink-200 bg-white px-4 py-2 text-sm font-semibold text-ink-900 transition hover:border-ink-900 md:inline-flex"
          >
            <Phone size={16} className="text-brand-600" />
            {SITE.phone}
          </a>
          <Link href="/#reserver" className="btn-primary hidden sm:inline-flex">
            Réserver
          </Link>

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
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center justify-between rounded-xl px-4 py-3 text-base font-semibold transition",
                    l.highlight
                      ? "bg-brand-50 text-brand-700 hover:bg-brand-100"
                      : "text-ink-900 hover:bg-ink-100"
                  )}
                >
                  <span className="flex items-center gap-2">
                    {l.highlight && <HeartPulse size={16} />}
                    {l.label}
                  </span>
                  {l.highlight && (
                    <span className="rounded-full bg-brand-500 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                      CPAM
                    </span>
                  )}
                </Link>
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
              <Link
                href="/#reserver"
                className="btn-primary"
                onClick={() => setOpen(false)}
              >
                Réserver
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

