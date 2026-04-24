import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import {
  Accessibility,
  Activity,
  BadgeCheck,
  BedDouble,
  Building2,
  CheckCircle2,
  Clock,
  Droplets,
  FileText,
  HeartPulse,
  Hospital,
  MapPin,
  Phone,
  ShieldCheck,
  Stethoscope,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { TrustBar } from "@/components/TrustBar";
import {
  MEDICAL_DOCUMENTS,
  MEDICAL_ELIGIBILITY,
  MEDICAL_FAQS,
  MEDICAL_HOSPITALS_95,
  MEDICAL_HOSPITALS_PARIS,
  MEDICAL_USE_CASES,
  SITE,
} from "@/lib/constants";

/* -------------------------------------------------------------------------- */
/*                                   SEO                                      */
/* -------------------------------------------------------------------------- */

const pageTitle =
  "Taxi Médical Herblay & Montigny-lès-Cormeilles — Conventionné CPAM 95";
const pageDescription =
  "Taxi médical conventionné CPAM à Herblay & Montigny-lès-Cormeilles. Transferts vers tous les hôpitaux du Val-d'Oise et de Paris (Bichat, Pitié-Salpêtrière, Gustave-Roussy, Pontoise, Argenteuil…). 0 € à avancer avec votre prescription. 24h/24 — 7j/7.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "taxi médical Herblay",
    "taxi médical Montigny-lès-Cormeilles",
    "taxi conventionné CPAM 95",
    "taxi conventionné Val-d'Oise",
    "transfert hôpital Paris depuis 95",
    "taxi dialyse Val-d'Oise",
    "taxi chimiothérapie Herblay",
    "taxi radiothérapie Gustave Roussy",
    "taxi Pitié-Salpêtrière",
    "taxi hôpital Pontoise NOVO",
    "taxi hôpital Argenteuil Victor-Dupouy",
    "taxi Simone Veil Eaubonne",
    "taxi CPAM tiers payant 95",
    "transport sanitaire Herblay",
    "taxi PMR Val-d'Oise",
  ],
  alternates: { canonical: "/taxi-medical" },
  openGraph: {
    type: "article",
    locale: "fr_FR",
    url: `${SITE.url}/taxi-medical`,
    siteName: SITE.name,
    title: pageTitle,
    description: pageDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
  },
};

/* -------------------------------------------------------------------------- */
/*                                Icon registry                               */
/* -------------------------------------------------------------------------- */

const useCaseIcons: Record<string, LucideIcon> = {
  Droplets,
  Activity,
  Stethoscope,
  Building2,
  BedDouble,
  Accessibility,
};

/* -------------------------------------------------------------------------- */
/*                                 Schema.org                                 */
/* -------------------------------------------------------------------------- */

const medicalSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalBusiness",
      "@id": `${SITE.url}/taxi-medical#service`,
      name: `${SITE.name} — Taxi conventionné CPAM`,
      url: `${SITE.url}/taxi-medical`,
      telephone: SITE.phoneE164,
      email: SITE.email,
      priceRange: "Tiers payant — 0 € à avancer",
      address: {
        "@type": "PostalAddress",
        addressLocality: SITE.city,
        postalCode: SITE.postalCode,
        addressCountry: "FR",
      },
      areaServed: [
        { "@type": "City", name: "Herblay-sur-Seine" },
        { "@type": "City", name: "Montigny-lès-Cormeilles" },
        { "@type": "City", name: "Cormeilles-en-Parisis" },
        { "@type": "City", name: "Argenteuil" },
        { "@type": "AdministrativeArea", name: "Val-d'Oise" },
      ],
      medicalSpecialty: [
        "Oncology",
        "Cardiology",
        "Nephrology",
        "Dialysis",
        "Geriatrics",
      ],
      availableService: MEDICAL_USE_CASES.map((u) => ({
        "@type": "MedicalProcedure",
        name: u.title,
        description: u.description,
      })),
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: MEDICAL_FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Accueil",
          item: SITE.url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Taxi médical conventionné CPAM",
          item: `${SITE.url}/taxi-medical`,
        },
      ],
    },
  ],
};

/* -------------------------------------------------------------------------- */
/*                                    Page                                    */
/* -------------------------------------------------------------------------- */

export default function TaxiMedicalPage() {
  return (
    <>
      <Header />
      <main className="relative bg-white">
        <MedicalHero />
        <TrustBar />
        <HowItWorks />
        <HospitalsSection />
        <UseCases />
        <DocumentsAndEligibility />
        <MedicalReassurance />
        <MedicalFAQ />
        <MedicalFinalCTA />
      </main>
      <Footer />
      <FloatingCTA />
      <Script
        id="ld-json-medical"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalSchema) }}
      />
    </>
  );
}

/* -------------------------------------------------------------------------- */
/*                                   Hero                                     */
/* -------------------------------------------------------------------------- */

function MedicalHero() {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Decorative blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full bg-brand-500/10 blur-3xl" />
        <div className="absolute top-1/2 -right-24 h-[420px] w-[420px] rounded-full bg-ink-200/60 blur-3xl" />
      </div>

      <div className="container-page">
        {/* Breadcrumb */}
        <nav
          aria-label="Fil d'Ariane"
          className="mb-6 text-sm text-ink-500"
        >
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="hover:text-ink-900">
                Accueil
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="font-semibold text-ink-900">Taxi médical</li>
          </ol>
        </nav>

        <div className="grid items-start gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <span className="eyebrow">
              <HeartPulse size={14} /> Conventionné CPAM · 0 € à avancer
            </span>
            <h1 className="heading-xl mt-5">
              Taxi médical à{" "}
              <span className="brand-gradient-text">Herblay</span> &{" "}
              <span className="brand-gradient-text">
                Montigny-lès-Cormeilles
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-600">
              Agréé <strong className="text-ink-900">Sécurité Sociale</strong>,
              nous assurons vos transferts vers{" "}
              <strong className="text-ink-900">
                tous les hôpitaux du Val-d'Oise
              </strong>{" "}
              et les grands établissements de{" "}
              <strong className="text-ink-900">Paris</strong> (Bichat,
              Pitié-Salpêtrière, Gustave-Roussy, Institut Curie…). Tiers payant
              direct — <strong className="text-brand-700">vous ne payez rien</strong> sur
              présentation d'une prescription médicale valide.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href={SITE.phoneHref} className="btn-primary">
                <Phone size={18} />
                {SITE.phone}
              </a>
              <Link href="/#reserver" className="btn-secondary">
                Réserver un trajet
              </Link>
              <span className="flex items-center gap-2 text-sm text-ink-500">
                <Clock size={16} className="text-brand-600" />
                Disponible 24h/24 · 7j/7
              </span>
            </div>

            {/* Inline trust badges */}
            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {[
                {
                  icon: BadgeCheck,
                  label: "Agrément CPAM 95",
                  sub: "Transport conventionné",
                },
                {
                  icon: Wallet,
                  label: "0 € à avancer",
                  sub: "Tiers payant direct",
                },
                {
                  icon: Accessibility,
                  label: "PMR & Seniors",
                  sub: "Véhicule adapté",
                },
                {
                  icon: ShieldCheck,
                  label: "Confidentialité",
                  sub: "Secret médical respecté",
                },
              ].map((b) => (
                <li
                  key={b.label}
                  className="flex items-start gap-3 rounded-xl border border-ink-200 bg-white p-3"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                    <b.icon size={18} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink-900">
                      {b.label}
                    </p>
                    <p className="text-xs text-ink-500">{b.sub}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right-side highlight card */}
          <aside className="relative overflow-hidden rounded-3xl border border-ink-200 bg-gradient-to-br from-white to-ink-50 p-7 shadow-card">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
              <span className="inline-flex h-2 w-2 rounded-full bg-brand-500 animate-pulse" />
              Urgence & planning
            </div>
            <h2 className="mt-3 font-display text-2xl font-extrabold text-ink-900">
              Besoin d'un transport médical maintenant ?
            </h2>
            <p className="mt-3 text-sm text-ink-600">
              Prise en charge rapide, même de nuit ou le week-end. Un chauffeur
              dédié peut être réservé pour vos trajets réguliers (dialyse,
              chimiothérapie, radiothérapie).
            </p>

            <a
              href={SITE.phoneHref}
              className="mt-6 flex items-center justify-between rounded-2xl bg-ink-900 px-5 py-4 font-bold text-white transition hover:bg-brand-600"
            >
              <span className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                  <Phone size={18} />
                </span>
                Appeler maintenant
              </span>
              <span className="font-display text-lg">{SITE.phone}</span>
            </a>

            <a
              href={SITE.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center justify-center gap-2 rounded-2xl border border-ink-200 bg-white px-5 py-3 font-semibold text-ink-900 transition hover:border-ink-900"
            >
              Envoyer sur WhatsApp
            </a>

            <ul className="mt-6 space-y-2 border-t border-ink-200 pt-5 text-sm">
              {[
                "Temps de prise en charge < 15 min",
                "Véhicule 4 ou 8 places (PMR)",
                "Paiement 100 % CPAM géré pour vous",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2 text-ink-700">
                  <CheckCircle2
                    size={16}
                    className="mt-0.5 shrink-0 text-brand-600"
                  />
                  {t}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                How it works                                */
/* -------------------------------------------------------------------------- */

function HowItWorks() {
  const steps = [
    {
      n: "01",
      icon: FileText,
      title: "Obtenez votre prescription",
      desc: "Votre médecin, spécialiste ou hôpital vous remet une Prescription Médicale de Transport (Cerfa 11574*05) indiquant « taxi conventionné ».",
    },
    {
      n: "02",
      icon: Phone,
      title: "Appelez-nous pour réserver",
      desc: "Un seul appel au 07 63 08 96 95 : on planifie votre trajet, unique ou récurrent (dialyse, chimio…), à l'heure de votre rendez-vous.",
    },
    {
      n: "03",
      icon: Wallet,
      title: "0 € à régler à la sortie",
      desc: "Tiers payant direct avec la CPAM et votre mutuelle. Nous nous occupons des démarches : aucune avance de frais pour vous.",
    },
  ] as const;

  return (
    <section id="tiers-payant" className="section-pad bg-ink-50">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Comment ça marche</span>
          <h2 className="heading-lg mt-4">
            Le tiers payant CPAM, <span className="brand-gradient-text">expliqué simplement</span>
          </h2>
          <p className="body-muted mt-4">
            En 3 étapes, votre transport médical est organisé et réglé par la
            Sécurité Sociale.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.n}
              className="relative overflow-hidden rounded-3xl border border-ink-200 bg-white p-7 shadow-card"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-5xl font-black text-ink-100">
                  {s.n}
                </span>
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500 text-white shadow-brand-glow">
                  <s.icon size={20} />
                </span>
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-ink-900">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-600">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                              Hospitals section                             */
/* -------------------------------------------------------------------------- */

function HospitalsSection() {
  return (
    <section id="hopitaux" className="section-pad">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Hôpitaux desservis</span>
          <h2 className="heading-lg mt-4">
            Tous les hôpitaux du{" "}
            <span className="brand-gradient-text">Val-d'Oise</span> et de{" "}
            <span className="brand-gradient-text">Paris</span>
          </h2>
          <p className="body-muted mt-4">
            Nous transférons les patients d'Herblay, Montigny-lès-Cormeilles et
            de tout le Val-d'Oise vers les grands établissements publics et
            privés, 7 jours sur 7.
          </p>
        </div>

        {/* Val-d'Oise */}
        <div className="mt-14">
          <div className="flex items-end justify-between gap-4">
            <h3 className="font-display text-2xl font-bold text-ink-900">
              Hôpitaux du Val-d'Oise (95)
            </h3>
            <span className="hidden text-sm text-ink-500 sm:inline">
              Temps de trajet depuis Herblay
            </span>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {MEDICAL_HOSPITALS_95.map((h) => (
              <HospitalCard key={h.name} hospital={h} />
            ))}
          </div>
        </div>

        {/* Paris / Banlieue */}
        <div className="mt-16">
          <div className="flex items-end justify-between gap-4">
            <h3 className="font-display text-2xl font-bold text-ink-900">
              Hôpitaux AP-HP & centres spécialisés de Paris
            </h3>
            <span className="hidden text-sm text-ink-500 sm:inline">
              Temps de trajet depuis Herblay
            </span>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {MEDICAL_HOSPITALS_PARIS.map((h) => (
              <HospitalCard key={h.name} hospital={h} />
            ))}
          </div>
        </div>

        <p className="mt-10 rounded-2xl border border-ink-200 bg-ink-50 p-5 text-center text-sm text-ink-600">
          Votre hôpital, clinique ou centre de consultations n'est pas dans la
          liste ?{" "}
          <a
            href={SITE.phoneHref}
            className="font-semibold text-brand-700 underline underline-offset-2 hover:text-brand-800"
          >
            Appelez le {SITE.phone}
          </a>{" "}
          — nous couvrons toute l'Île-de-France.
        </p>
      </div>
    </section>
  );
}

type HospitalCardProps = {
  hospital: {
    name: string;
    city: string;
    specialties: readonly string[];
    time: string;
  };
};

function HospitalCard({ hospital }: HospitalCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-ink-200 bg-white p-6 shadow-card transition hover:-translate-y-0.5 hover:border-brand-500/40 hover:shadow-card-md">
      <div className="flex items-start justify-between gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
          <Hospital size={18} />
        </span>
        <span className="rounded-full bg-ink-100 px-2.5 py-1 text-xs font-semibold text-ink-700">
          {hospital.time}
        </span>
      </div>
      <h4 className="mt-4 font-display text-base font-bold leading-snug text-ink-900">
        {hospital.name}
      </h4>
      <p className="mt-1 flex items-center gap-1.5 text-sm text-ink-500">
        <MapPin size={14} />
        {hospital.city}
      </p>
      <ul className="mt-4 flex flex-wrap gap-1.5">
        {hospital.specialties.map((s) => (
          <li
            key={s}
            className="rounded-full border border-ink-200 bg-white px-2.5 py-1 text-xs font-medium text-ink-700"
          >
            {s}
          </li>
        ))}
      </ul>
    </article>
  );
}

/* -------------------------------------------------------------------------- */
/*                                 Use cases                                  */
/* -------------------------------------------------------------------------- */

function UseCases() {
  return (
    <section className="section-pad bg-ink-50">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Nos transports médicaux</span>
          <h2 className="heading-lg mt-4">
            Pour chaque besoin, une{" "}
            <span className="brand-gradient-text">prise en charge adaptée</span>
          </h2>
          <p className="body-muted mt-4">
            Trajets uniques ou récurrents, de jour comme de nuit, toujours avec
            la même exigence : ponctualité, confort et discrétion.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {MEDICAL_USE_CASES.map((u) => {
            const Icon = useCaseIcons[u.icon] ?? HeartPulse;
            return (
              <div
                key={u.title}
                className="group rounded-3xl border border-ink-200 bg-white p-7 shadow-card transition hover:-translate-y-0.5 hover:border-brand-500/40 hover:shadow-card-md"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500 text-white shadow-brand-glow">
                  <Icon size={22} />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-ink-900">
                  {u.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-600">
                  {u.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                        Documents + eligibility block                       */
/* -------------------------------------------------------------------------- */

function DocumentsAndEligibility() {
  return (
    <section className="section-pad">
      <div className="container-page grid gap-10 lg:grid-cols-2">
        {/* Documents */}
        <div className="rounded-3xl border border-ink-200 bg-white p-8 shadow-card">
          <span className="eyebrow">
            <FileText size={14} /> Documents à préparer
          </span>
          <h2 className="heading-md mt-4">
            Ce que le chauffeur vous demandera
          </h2>
          <p className="mt-3 text-sm text-ink-600">
            Pour activer le tiers payant CPAM, munissez-vous des justificatifs
            ci-dessous le jour de votre trajet médical.
          </p>
          <ul className="mt-8 space-y-5">
            {MEDICAL_DOCUMENTS.map((d, i) => (
              <li key={d.title} className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 font-display text-base font-black text-brand-700">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-semibold text-ink-900">{d.title}</p>
                  <p className="mt-1 text-sm text-ink-600">{d.hint}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Eligibility */}
        <div className="relative overflow-hidden rounded-3xl bg-ink-900 p-8 text-white">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-500/20 blur-3xl"
          />
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">
            <ShieldCheck size={14} /> Qui peut en bénéficier ?
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight">
            Un transport pris en charge à{" "}
            <span className="text-brand-400">100 %</span> pour…
          </h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {MEDICAL_ELIGIBILITY.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm text-ink-100"
              >
                <CheckCircle2
                  size={16}
                  className="mt-0.5 shrink-0 text-brand-400"
                />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-5 py-3 font-bold text-white transition hover:bg-brand-600"
            >
              <Phone size={16} />
              {SITE.phone}
            </a>
            <a
              href={SITE.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                          Medical reassurance strip                         */
/* -------------------------------------------------------------------------- */

function MedicalReassurance() {
  const items = [
    {
      icon: Stethoscope,
      title: "Chauffeur formé au transport sanitaire",
      desc: "Expérience des patients fragiles, gestes de sécurité, discrétion absolue.",
    },
    {
      icon: ShieldCheck,
      title: "Hygiène renforcée",
      desc: "Véhicule désinfecté après chaque transport médical, masques à disposition.",
    },
    {
      icon: Clock,
      title: "Ponctualité garantie",
      desc: "Anticipation du trafic Île-de-France pour arriver avant vos rendez-vous.",
    },
  ];
  return (
    <section className="section-pad bg-ink-50">
      <div className="container-page">
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((i) => (
            <div
              key={i.title}
              className="rounded-2xl border border-ink-200 bg-white p-6 shadow-card"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                <i.icon size={20} />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-ink-900">
                {i.title}
              </h3>
              <p className="mt-2 text-sm text-ink-600">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                  Medical FAQ                               */
/* -------------------------------------------------------------------------- */

function MedicalFAQ() {
  return (
    <section id="faq-medical" className="section-pad">
      <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <span className="eyebrow">FAQ Taxi Médical</span>
          <h2 className="heading-lg mt-4">
            Vos questions sur le{" "}
            <span className="brand-gradient-text">taxi conventionné CPAM</span>
          </h2>
          <p className="body-muted mt-4">
            Retrouvez les réponses aux questions les plus fréquentes sur le
            fonctionnement du tiers payant, les documents nécessaires et la
            prise en charge de vos trajets à Herblay, Montigny-lès-Cormeilles
            et dans tout le Val-d'Oise.
          </p>
          <a href={SITE.phoneHref} className="btn-primary mt-8 inline-flex">
            <Phone size={16} />
            Poser ma question
          </a>
        </div>

        <div className="space-y-3">
          {MEDICAL_FAQS.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl border border-ink-200 bg-white p-6 shadow-card transition hover:border-brand-500/40 open:border-brand-500/50"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-display text-base font-bold text-ink-900">
                {f.q}
                <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink-100 text-ink-700 transition group-open:rotate-45 group-open:bg-brand-500 group-open:text-white">
                  +
                </span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-ink-600">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                  Final CTA                                 */
/* -------------------------------------------------------------------------- */

function MedicalFinalCTA() {
  return (
    <section className="section-pad">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-[32px] bg-ink-900 p-10 text-white sm:p-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 -right-24 h-[420px] w-[420px] rounded-full bg-brand-500/20 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-brand-500/10 blur-3xl"
          />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.5fr_1fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">
                <HeartPulse size={14} /> Taxi conventionné CPAM — 95
              </span>
              <h2 className="mt-5 font-display text-4xl font-black leading-[1.05] sm:text-5xl">
                Votre prochain rendez-vous médical ?{" "}
                <span className="text-brand-400">On s'en occupe.</span>
              </h2>
              <p className="mt-5 max-w-2xl text-lg text-ink-200">
                Un appel suffit. Nous planifions votre trajet unique ou
                récurrent vers l'hôpital de votre choix, et nous gérons toutes
                les démarches CPAM — vous n'avancez pas un centime.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={SITE.phoneHref}
                  className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-3.5 font-bold text-white shadow-brand-glow transition hover:-translate-y-0.5 hover:bg-brand-600"
                >
                  <Phone size={18} />
                  {SITE.phone}
                </a>
                <a
                  href={SITE.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
                >
                  WhatsApp
                </a>
                <Link
                  href="/#reserver"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-ink-900 transition hover:-translate-y-0.5"
                >
                  Formulaire en ligne
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <ul className="space-y-4 text-sm text-ink-100">
                {[
                  "Agréé Sécurité Sociale — Val-d'Oise (95)",
                  "Tiers payant direct : 0 € à régler",
                  "Tous les hôpitaux du 95 & AP-HP Paris",
                  "Dialyse, chimio, radio, consultations",
                  "Accessible PMR · Véhicule 8 places",
                  "Disponible 24h/24 — 7j/7",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-brand-400"
                    />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
