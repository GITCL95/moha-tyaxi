import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { SITE } from "@/lib/constants";

const cols = [
  {
    title: "Navigation",
    links: [
      { href: "/", label: "Accueil" },
      { href: "/#services", label: "Services" },
      { href: "/#fleet", label: "Flotte" },
      { href: "/#avis", label: "Avis" },
      { href: "/#faq", label: "FAQ" },
    ],
  },
  {
    title: "Services",
    links: [
      { href: "/taxi-medical", label: "Taxi médical CPAM" },
      { href: "/#services", label: "Transport privé" },
      { href: "/#services", label: "Taxi aéroport" },
      { href: "/#destinations", label: "Trajets populaires" },
      { href: "/#coverage", label: "Zones desservies" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-ink-200 bg-white">
      <div className="container-page py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Link
              href="/"
              aria-label="Accueil — Taxi Montigny-lès-Cormeilles"
              className="inline-block"
            >
              <Image
                src="/logo.png"
                alt="Logo Taxi Montigny-lès-Cormeilles — Conventionné CPAM"
                width={220}
                height={290}
                className="h-auto w-[180px] sm:w-[210px]"
                priority={false}
              />
            </Link>
            <p className="mt-5 max-w-sm text-sm text-ink-600">
              Votre service de taxi conventionné CPAM à Montigny-lès-Cormeilles
              & Herblay. Disponible 24h/24, 7j/7 dans tout le Val-d'Oise.
            </p>
            <a href={SITE.phoneHref} className="btn-primary mt-6 inline-flex">
              <Phone size={16} />
              {SITE.phone}
            </a>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="font-display text-sm font-bold uppercase tracking-wider text-ink-900">
                {c.title}
              </h4>
              <ul className="mt-4 space-y-2">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-ink-600 transition hover:text-brand-700"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-ink-900">
              Coordonnées
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-ink-600">
              <li className="flex items-start gap-2">
                <MapPin
                  size={16}
                  className="mt-0.5 shrink-0 text-brand-600"
                />
                {SITE.address}
              </li>
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5 shrink-0 text-brand-600" />
                <a
                  href={SITE.phoneHref}
                  className="text-ink-900 hover:text-brand-700"
                >
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 shrink-0 text-brand-600" />
                <a
                  href={SITE.emailHref}
                  className="break-all text-ink-900 hover:text-brand-700"
                >
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-ink-200 pt-6 text-center text-xs text-ink-500 sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} {SITE.name}. Tous droits réservés.
          </p>
          <p>
            Conventionné CPAM · Val-d'Oise (95) · Artisan Taxi Licencié
          </p>
        </div>
      </div>
    </footer>
  );
}
