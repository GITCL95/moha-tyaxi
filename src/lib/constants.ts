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
    image: "/fleet/berline-premium.png",
  },
  {
    name: "Van Spacieux 8 places",
    description:
      "Pour les familles, groupes et PMR. Agréé transport conventionné CPAM.",
    capacity: "1 – 8 passagers",
    luggage: "8 bagages",
    features: ["Accès PMR", "Sièges enfants", "Climatisation auto", "Grand coffre"],
    image: "/fleet/van-spacieux.png",
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

/* ---------------------------------------------------------------------------
 *  TAXI MÉDICAL — données dédiées à la page /taxi-medical
 * ------------------------------------------------------------------------- */

export const MEDICAL_HOSPITALS_95 = [
  {
    name: "Hôpital NOVO – Site de Pontoise (René-Dubos)",
    city: "Pontoise (95)",
    specialties: ["Cardiologie", "Dialyse", "Oncologie", "Urgences / SAMU 95"],
    time: "≈ 25 min",
  },
  {
    name: "Centre Hospitalier Victor-Dupouy",
    city: "Argenteuil (95)",
    specialties: ["Urgences 24/7", "Chirurgie", "Maternité", "Gériatrie"],
    time: "≈ 15 min",
  },
  {
    name: "Hôpital Simone-Veil",
    city: "Eaubonne / Montmorency (95)",
    specialties: ["Médecine", "Chirurgie", "Soins de suite", "Gériatrie"],
    time: "≈ 20 min",
  },
  {
    name: "CHP Sainte-Marie",
    city: "Osny (95)",
    specialties: ["Cancérologie", "Chimiothérapie", "Radiothérapie"],
    time: "≈ 30 min",
  },
  {
    name: "Hôpital Privé Nord-Parisien",
    city: "Sarcelles (95)",
    specialties: ["Oncologie", "Maternité", "Urgences gynécologiques"],
    time: "≈ 35 min",
  },
  {
    name: "Hôpital NOVO – Beaumont-sur-Oise",
    city: "Beaumont-sur-Oise (95)",
    specialties: ["Médecine", "Urgences", "SMR"],
    time: "≈ 35 min",
  },
] as const;

export const MEDICAL_HOSPITALS_PARIS = [
  {
    name: "Hôpital Bichat-Claude-Bernard (AP-HP)",
    city: "Paris 18e",
    specialties: ["Cardiologie", "Pneumologie", "Maladies infectieuses"],
    time: "≈ 30 min",
  },
  {
    name: "Hôpital Beaujon (AP-HP)",
    city: "Clichy (92)",
    specialties: ["Oncologie digestive", "Hépato-gastro", "Chirurgie"],
    time: "≈ 25 min",
  },
  {
    name: "Hôpital Européen Georges-Pompidou (HEGP)",
    city: "Paris 15e",
    specialties: ["Cardiologie", "Oncologie", "Néphrologie"],
    time: "≈ 40 min",
  },
  {
    name: "Hôpital Saint-Louis (AP-HP)",
    city: "Paris 10e",
    specialties: ["Hématologie", "Greffes", "Dermatologie"],
    time: "≈ 35 min",
  },
  {
    name: "Pitié-Salpêtrière (AP-HP)",
    city: "Paris 13e",
    specialties: ["Neurologie", "Cardiologie", "Toutes spécialités"],
    time: "≈ 45 min",
  },
  {
    name: "Hôpital Necker – Enfants Malades",
    city: "Paris 15e",
    specialties: ["Pédiatrie", "Maladies rares"],
    time: "≈ 40 min",
  },
  {
    name: "Hôpital Cochin (AP-HP)",
    city: "Paris 14e",
    specialties: ["Maternité (Port-Royal)", "Rhumatologie", "Diabétologie"],
    time: "≈ 45 min",
  },
  {
    name: "Gustave-Roussy",
    city: "Villejuif (94)",
    specialties: ["Cancérologie", "Radiothérapie", "Chimiothérapie"],
    time: "≈ 55 min",
  },
  {
    name: "Institut Curie",
    city: "Paris 5e",
    specialties: ["Cancérologie", "Sénologie", "Protonthérapie"],
    time: "≈ 45 min",
  },
  {
    name: "Hôpital Foch",
    city: "Suresnes (92)",
    specialties: ["Neurochirurgie", "Pneumologie", "Greffes pulmonaires"],
    time: "≈ 25 min",
  },
] as const;

export const MEDICAL_USE_CASES = [
  {
    icon: "Droplets",
    title: "Dialyse",
    description:
      "Trajets récurrents (2 à 3 fois par semaine) vers les centres de néphrologie. Même chauffeur possible, ponctualité garantie.",
  },
  {
    icon: "Activity",
    title: "Chimiothérapie & Radiothérapie",
    description:
      "Transfert vers Gustave-Roussy, Institut Curie, CHP Sainte-Marie, Hôpital Nord-Parisien… Confort et discrétion assurés.",
  },
  {
    icon: "Stethoscope",
    title: "Consultations spécialistes",
    description:
      "Cardiologie, oncologie, ophtalmologie, endocrinologie : accompagnement aux consultations CHU, cliniques et cabinets.",
  },
  {
    icon: "Building2",
    title: "Hôpital de jour & examens",
    description:
      "IRM, scanner, bilan pré-op, hospitalisation de jour. Nous attendons la fin de l'examen pour votre retour.",
  },
  {
    icon: "BedDouble",
    title: "Sortie d'hospitalisation",
    description:
      "Sortie programmée ou de dernière minute. Aide à l'installation dans le véhicule et retour en toute sécurité à domicile.",
  },
  {
    icon: "Accessibility",
    title: "Transport PMR & Seniors",
    description:
      "Véhicule adapté, aide à la marche, patience et écoute. Accompagnement jusqu'au service hospitalier si besoin.",
  },
] as const;

export const MEDICAL_DOCUMENTS = [
  {
    title: "Prescription Médicale de Transport (PMT)",
    hint: "Cerfa n°11574*05 remis par votre médecin, spécialiste ou hôpital.",
  },
  {
    title: "Carte Vitale à jour",
    hint: "Ou attestation de droits avec numéro de Sécurité Sociale.",
  },
  {
    title: "Carte de mutuelle complémentaire",
    hint: "Pour la prise en charge des 10 % restants si votre mutuelle le prévoit.",
  },
  {
    title: "Pièce d'identité",
    hint: "Carte d'identité, passeport ou titre de séjour en cours de validité.",
  },
] as const;

export const MEDICAL_ELIGIBILITY = [
  "Patients en Affection Longue Durée (ALD)",
  "Accidents du travail & maladies professionnelles",
  "Maternité & transports néonataux",
  "Patients à mobilité réduite (PMR)",
  "Transports vers un centre de convocation CPAM",
  "Sorties d'hospitalisation (court & moyen séjour)",
] as const;

export const MEDICAL_FAQS = [
  {
    q: "Qu'est-ce qu'un taxi conventionné CPAM ?",
    a: "C'est un taxi agréé par la Sécurité Sociale pour transporter des patients dont les trajets sont pris en charge par l'Assurance Maladie. Nous sommes conventionnés CPAM dans le Val-d'Oise (95) et appliquons le tiers payant : vous n'avancez rien sur présentation d'une prescription médicale de transport valide.",
  },
  {
    q: "Comment obtenir une prescription médicale de transport ?",
    a: "Elle est délivrée par votre médecin traitant, votre spécialiste ou le service hospitalier (Cerfa n°11574*05). Elle précise le motif, la date, le mode de transport prescrit (taxi conventionné) et, si besoin, le caractère répétitif des trajets (dialyse, chimio, radiothérapie).",
  },
  {
    q: "Qui peut bénéficier d'un taxi médical remboursé ?",
    a: "Les patients en ALD, les accidents du travail / maladies professionnelles, les femmes enceintes (dans le cadre de la maternité), les patients à mobilité réduite, les mineurs convoqués par le service médical, et toute personne dont l'état de santé justifie un transport assis professionnalisé, prescrit par un médecin.",
  },
  {
    q: "Quels hôpitaux desservez-vous depuis Herblay et Montigny-lès-Cormeilles ?",
    a: "Tous les hôpitaux du Val-d'Oise (NOVO Pontoise, Victor-Dupouy Argenteuil, Simone-Veil Eaubonne, CHP Sainte-Marie Osny, Nord-Parisien Sarcelles…) et l'ensemble des établissements AP-HP de Paris et banlieue (Bichat, HEGP, Pitié-Salpêtrière, Cochin, Necker, Saint-Louis, Gustave-Roussy, Curie, Foch…).",
  },
  {
    q: "Le trajet est-il vraiment à 0 € pour le patient ?",
    a: "Oui, avec une prescription valide, nous appliquons le tiers payant direct avec la CPAM et votre mutuelle. Vous n'avancez aucun frais. Dans de rares cas (franchise médicale de 4 € par trajet, plafonnée à 50 €/an), une participation forfaitaire peut s'appliquer, conformément à la réglementation.",
  },
  {
    q: "Puis-je réserver le même chauffeur pour mes dialyses ou ma chimiothérapie ?",
    a: "Absolument. Pour les trajets récurrents (dialyse 3x/semaine, séances de chimio ou de radiothérapie), nous organisons un planning fixe avec le même chauffeur autant que possible. Cela rassure le patient et garantit la ponctualité pour chaque rendez-vous.",
  },
  {
    q: "Acceptez-vous les patients à mobilité réduite (PMR) ?",
    a: "Oui. Notre van 8 places est adapté aux passagers PMR. Le chauffeur vous aide à l'installation, au port du bagage médical, et peut vous accompagner jusqu'à l'accueil du service hospitalier si vous le souhaitez.",
  },
  {
    q: "Êtes-vous disponibles la nuit, le week-end et les jours fériés ?",
    a: "Oui, le service de taxi médical est disponible 24h/24 et 7j/7, y compris les week-ends et jours fériés. Pour les dialyses matinales ou les sorties d'hospitalisation imprévues, il suffit d'appeler le 07 63 08 96 95.",
  },
] as const;

export type Service = (typeof SERVICES)[number];
export type Testimonial = (typeof TESTIMONIALS)[number];
export type MedicalHospital = (typeof MEDICAL_HOSPITALS_95)[number];
export type MedicalUseCase = (typeof MEDICAL_USE_CASES)[number];
export type MedicalFAQ = (typeof MEDICAL_FAQS)[number];
