import { Mail, MapPin, Phone } from "lucide-react";
import { SITE } from "@/lib/constants";

const cols = [
  {
    title: "Navigation",
    links: [
      { href: "#top", label: "Accueil" },
      { href: "#services", label: "Services" },
      { href: "#fleet", label: "Flotte" },
      { href: "#avis", label: "Avis" },
      { href: "#faq", label: "FAQ" },
    ],
  },
  {
    title: "Services",
    links: [
      { href: "#services", label: "Transport privé" },
      { href: "#services", label: "Conventionné CPAM" },
      { href: "#services", label: "Taxi aéroport" },
      { href: "#destinations", label: "Trajets populaires" },
      { href: "#coverage", label: "Zones desservies" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-ink-200 bg-white">
      <div className="container-page py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <a
              href="#top"
              className="flex items-center gap-2 font-display text-lg font-extrabold text-ink-900"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink-900 text-white">
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
              </span>
              Taxi <span className="text-brand-600">Montigny 95</span>
            </a>
            <p className="mt-4 max-w-sm text-sm text-ink-600">
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
                    <a
                      href={l.href}
                      className="text-sm text-ink-600 transition hover:text-brand-700"
                    >
                      {l.label}
                    </a>
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
