export const SITE = {
  name: "Taxi Montigny-lès-Cormeilles & Herblay",
  shortName: "Taxi Montigny 95",
  url: "https://taxi-montigny-les-cormeilles.com",
  phone: "07 63 08 96 95",
  phoneE164: "+33763089695",
  phoneHref: "tel:+33763089695",
  whatsapp: "+33763089695",
  whatsappHref:
    "https://wa.me/33763089695?text=Bonjour%2C%20je%20souhaite%20r%C3%A9server%20un%20taxi.",
  email: "metaxi954@gmail.com",
  emailHref: "mailto:metaxi954@gmail.com",
  address: "Montigny-lès-Cormeilles, 95370, France",
  city: "Montigny-lès-Cormeilles",
  postalCode: "95370",
  description:
    "Taxi à Montigny-lès-Cormeilles & Herblay-sur-Seine. Conventionné CPAM. Aéroports CDG / Orly / Beauvais. Disponible 24h/24 et 7j/7 dans tout le Val-d'Oise (95).",
} as const;

export const STATS = [
  { value: "24/7", label: "Disponible jour & nuit" },
  { value: "< 10 min", label: "Délai d'arrivée moyen" },
  { value: "+12 000", label: "Courses réalisées" },
  { value: "4,9/5", label: "Note clients Google" },
] as const;

export const CITIES = [
  "Montigny-lès-Cormeilles",
  "Herblay-sur-Seine",
  "Cormeilles-en-Parisis",
  "Argenteuil",
  "La Frette-sur-Seine",
  "Franconville",
  "Taverny",
  "Beauchamp",
  "Pierrelaye",
  "Sannois",
  "Eaubonne",
  "Ermont",
] as const;

export const DESTINATIONS = [
  { label: "Aéroport Charles de Gaulle (CDG)", time: "≈ 45 min" },
  { label: "Aéroport d'Orly", time: "≈ 50 min" },
  { label: "Aéroport de Beauvais", time: "≈ 1h20" },
  { label: "Gare du Nord", time: "≈ 35 min" },
  { label: "Gare de Lyon", time: "≈ 40 min" },
  { label: "Disneyland Paris", time: "≈ 55 min" },
] as const;

export const SERVICES = [
  {
    id: "prive",
    icon: "Briefcase",
    title: "Transport Privé",
    tagline: "Business & particulier",
    description:
      "Déplacements pros ou personnels avec chauffeur dédié. Véhicules récents, discrétion garantie, paiement facilité.",
    perks: ["Chauffeur VTC certifié", "Facture pro sur demande", "Véhicule haut de gamme"],
  },
  {
    id: "cpam",
    icon: "HeartPulse",
    title: "Conventionné CPAM",
    tagline: "Tiers payant — 0 € à avancer",
    description:
      "Taxi médical agréé Sécurité Sociale. Nous gérons les formalités CPAM, vous ne payez rien en sortie.",
    perks: ["Agrément CPAM 95", "Prescription médicale acceptée", "Accompagnement PMR"],
    highlight: true,
  },
  {
    id: "aeroport",
    icon: "Plane",
    title: "Aéroports & Gares",
    tagline: "Forfait fixe, pas de surprise",
    description:
      "Transferts CDG, Orly, Beauvais et gares parisiennes. Suivi du vol en temps réel, prise en charge bagages.",
    perks: ["Forfait négocié à l'avance", "Suivi des vols 24h/24", "Panneau d'accueil offert"],
  },
] as const;

export const FLEET = [
  {
    name: "Berline Premium",
    description:
      "Idéale pour 1 à 4 passagers. Parfait pour les trajets pros, médicaux ou aéroports.",
    capacity: "1 – 4 passagers",
    luggage: "3 bagages",
    features: ["Clim individuelle", "Wi-Fi 4G offert", "Eau minérale", "Chargeur USB-C"],
    image:
      "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=1600&q=80",
  },
  {
    name: "Van Spacieux 8 places",
    description:
      "Pour les familles, groupes et PMR. Agréé transport conventionné CPAM.",
    capacity: "1 – 8 passagers",
    luggage: "8 bagages",
    features: ["Accès PMR", "Sièges enfants", "Climatisation auto", "Grand coffre"],
    image:
      "https://images.unsplash.com/photo-1609520505218-7421df17de59?auto=format&fit=crop&w=1600&q=80",
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Sophie L.",
    role: "Herblay-sur-Seine",
    rating: 5,
    quote:
      "Chauffeur à l'heure, voiture nickel, trajet tranquille vers Roissy. Je ne prends plus que celui-là.",
  },
  {
    name: "Jean D.",
    role: "CPAM — Dialyse hebdomadaire",
    rating: 5,
    quote:
      "Prend en charge toute la partie administrative CPAM. Patient, ponctuel, je me sens en sécurité.",
  },
  {
    name: "Marc A.",
    role: "Voyageur Orly",
    rating: 5,
    quote:
      "Réservation en 30 secondes, tarif annoncé respecté. Je recommande sans hésiter.",
  },
  {
    name: "Claire R.",
    role: "Cormeilles-en-Parisis",
    rating: 5,
    quote:
      "Appelée à 4h du matin, taxi devant chez moi en 8 minutes. Service impeccable.",
  },
] as const;

export const FAQS = [
  {
    q: "Comment réserver un taxi rapidement ?",
    a: "Le plus simple : appelez directement le 07 63 08 96 95, jour et nuit. Vous pouvez aussi utiliser notre formulaire en ligne ou WhatsApp. Temps de prise en charge moyen : moins de 10 minutes sur Montigny-lès-Cormeilles et Herblay.",
  },
  {
    q: "Êtes-vous conventionné CPAM ?",
    a: "Oui, nous sommes agréés CPAM dans le Val-d'Oise (95). Avec votre prescription médicale de transport, vous n'avancez rien : nous gérons le tiers payant directement avec la Sécurité Sociale.",
  },
  {
    q: "Quel est le tarif vers CDG ou Orly ?",
    a: "Nous proposons des forfaits fixes pour tous les aéroports : pas de mauvaise surprise, pas de compteur qui tourne dans les bouchons. Appelez le 07 63 08 96 95 pour votre devis gratuit en 1 minute.",
  },
  {
    q: "Quels horaires couvrez-vous ?",
    a: "Notre service est disponible 24h/24 et 7j/7, y compris les dimanches et jours fériés. Nous assurons les trajets de nuit, tôt le matin et les urgences médicales.",
  },
  {
    q: "Quelles villes sont desservies ?",
    a: "Nous opérons principalement sur Montigny-lès-Cormeilles, Herblay-sur-Seine, Cormeilles-en-Parisis, Argenteuil, La Frette, Franconville, Taverny et tout le Val-d'Oise (95). Prise en charge possible depuis toute l'Île-de-France.",
  },
  {
    q: "Acceptez-vous les paiements CB & entreprise ?",
    a: "Oui : espèces, carte bancaire, virement, facturation entreprise et tiers payant CPAM. Facture envoyée par email sur simple demande.",
  },
] as const;

export type Service = (typeof SERVICES)[number];
export type Testimonial = (typeof TESTIMONIALS)[number];
