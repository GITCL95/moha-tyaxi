"use client";

import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  HeartPulse,
  MapPin,
  Phone,
  Plane,
  Users,
} from "lucide-react";
import { SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

type TripType = "privee" | "cpam" | "aeroport";

type FormValues = {
  pickup: string;
  dropoff: string;
  date: string;
  time: string;
  passengers: number;
  phone: string;
  name: string;
  notes?: string;
  tripType: TripType;
};

const TRIP_OPTIONS: {
  id: TripType;
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  sub: string;
}[] = [
  { id: "privee", label: "Course privée", icon: MapPin, sub: "Ville / région" },
  { id: "cpam", label: "CPAM médical", icon: HeartPulse, sub: "0 € à avancer" },
  { id: "aeroport", label: "Aéroport", icon: Plane, sub: "Forfait fixe" },
];

export function QuickBookingForm() {
  const [step, setStep] = useState<1 | 2>(1);
  const [tripType, setTripType] = useState<TripType>("privee");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const today = useMemo(() => new Date().toISOString().split("T")[0], []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    trigger,
  } = useForm<FormValues>({
    defaultValues: {
      passengers: 1,
      date: today,
      tripType: "privee",
    },
    mode: "onTouched",
  });

  const pickup = watch("pickup");
  const dropoff = watch("dropoff");
  const date = watch("date");
  const time = watch("time");

  async function onSubmit(values: FormValues) {
    setError(null);
    setSubmitting(true);
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, tripType }),
      });
      if (!res.ok) throw new Error("Une erreur est survenue");
      setSuccess(true);
      reset({ passengers: 1, date: today, tripType });
      setStep(1);
    } catch (e) {
      setError(
        "Une erreur est survenue. Appelez-nous directement au 07 63 08 96 95."
      );
    } finally {
      setSubmitting(false);
    }
  }

  async function goNext() {
    const ok = await trigger(["pickup", "dropoff", "date", "time"]);
    if (ok) setStep(2);
  }

  if (success) {
    return (
      <div className="relative overflow-hidden rounded-3xl border border-ink-200 bg-white p-8 text-center shadow-card-lg">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-50 text-brand-600">
          <CheckCircle2 size={36} />
        </div>
        <h3 className="font-display text-2xl font-bold text-ink-900">
          Demande envoyée !
        </h3>
        <p className="mt-2 text-ink-600">
          Un de nos chauffeurs vous rappelle dans les 2 minutes pour confirmer
          votre course.
        </p>
        <a href={SITE.phoneHref} className="btn-primary mt-6 inline-flex">
          <Phone size={18} />
          Ou appelez maintenant — {SITE.phone}
        </a>
        <button
          type="button"
          onClick={() => setSuccess(false)}
          className="mt-3 block w-full text-sm text-ink-500 hover:text-ink-900"
        >
          Faire une autre demande
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative overflow-hidden rounded-3xl border border-ink-200 bg-white p-6 shadow-card-lg sm:p-8"
      aria-label="Réservation rapide de taxi"
    >
      {/* Top banner */}
      <div className="mb-6 flex items-center justify-between gap-3">
        <div>
          <div className="eyebrow">Réservation express</div>
          <h2 className="mt-2 font-display text-2xl font-extrabold text-ink-900 sm:text-3xl">
            Votre taxi en <span className="text-brand-600">30 secondes</span>
          </h2>
        </div>
        <div className="hidden text-right sm:block">
          <div className="text-xs text-ink-500">Paiement</div>
          <div className="text-sm font-semibold text-ink-900">
            CB · Espèces · CPAM
          </div>
        </div>
      </div>

      {/* Trip type tabs */}
      <div className="mb-5 grid grid-cols-3 gap-2">
        {TRIP_OPTIONS.map((o) => {
          const Icon = o.icon;
          const active = tripType === o.id;
          return (
            <button
              key={o.id}
              type="button"
              onClick={() => setTripType(o.id)}
              className={cn(
                "flex flex-col items-center gap-1 rounded-2xl border px-2 py-3 text-center transition",
                active
                  ? "border-brand-500 bg-brand-50 text-ink-900 shadow-sm"
                  : "border-ink-200 bg-white text-ink-600 hover:border-ink-300 hover:bg-ink-50"
              )}
              aria-pressed={active}
            >
              <Icon
                size={18}
                className={active ? "text-brand-600" : "text-ink-500"}
              />
              <span className="text-xs font-semibold">{o.label}</span>
              <span className="text-[10px] text-ink-500">{o.sub}</span>
            </button>
          );
        })}
      </div>

      {/* Step 1 */}
      <div className={cn("space-y-4", step === 2 && "hidden")}>
        <div>
          <label className="field-label" htmlFor="pickup">
            Départ
          </label>
          <div className="relative">
            <MapPin
              size={18}
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-brand-600"
            />
            <input
              id="pickup"
              type="text"
              autoComplete="street-address"
              placeholder="Ex : 12 Rue de Paris, Montigny"
              className="field-input pl-10"
              {...register("pickup", { required: "Lieu de départ requis" })}
            />
          </div>
          {errors.pickup && (
            <p className="mt-1 text-xs text-red-600">{errors.pickup.message}</p>
          )}
        </div>

        <div>
          <label className="field-label" htmlFor="dropoff">
            Destination
          </label>
          <div className="relative">
            <MapPin
              size={18}
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-brand-600"
            />
            <input
              id="dropoff"
              type="text"
              placeholder="Ex : Aéroport Charles de Gaulle"
              className="field-input pl-10"
              {...register("dropoff", { required: "Destination requise" })}
            />
          </div>
          {errors.dropoff && (
            <p className="mt-1 text-xs text-red-600">
              {errors.dropoff.message}
            </p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="field-label" htmlFor="date">
              Date
            </label>
            <div className="relative">
              <CalendarDays
                size={18}
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-brand-600"
              />
              <input
                id="date"
                type="date"
                min={today}
                className="field-input pl-10"
                {...register("date", { required: "Date requise" })}
              />
            </div>
          </div>
          <div>
            <label className="field-label" htmlFor="time">
              Heure
            </label>
            <div className="relative">
              <Clock3
                size={18}
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-brand-600"
              />
              <input
                id="time"
                type="time"
                className="field-input pl-10"
                {...register("time", { required: "Heure requise" })}
              />
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={goNext}
          className="btn-primary w-full justify-center text-base"
          disabled={!pickup || !dropoff || !date || !time}
        >
          Continuer
          <ArrowRight size={18} />
        </button>

        <div className="flex items-center justify-between text-xs text-ink-500">
          <span className="inline-flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" /> Chauffeur disponible
          </span>
          <span>Étape 1 / 2</span>
        </div>
      </div>

      {/* Step 2 */}
      <div className={cn("space-y-4", step === 1 && "hidden")}>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="field-label" htmlFor="name">
              Votre nom
            </label>
            <input
              id="name"
              type="text"
              autoComplete="name"
              placeholder="Nom"
              className="field-input"
              {...register("name", { required: "Nom requis" })}
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label className="field-label" htmlFor="passengers">
              Passagers
            </label>
            <div className="relative">
              <Users
                size={18}
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-brand-600"
              />
              <input
                id="passengers"
                type="number"
                min={1}
                max={8}
                defaultValue={1}
                className="field-input pl-10"
                {...register("passengers", {
                  required: true,
                  valueAsNumber: true,
                  min: 1,
                  max: 8,
                })}
              />
            </div>
          </div>
        </div>

        <div>
          <label className="field-label" htmlFor="phone">
            Téléphone
          </label>
          <div className="relative">
            <Phone
              size={18}
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-brand-600"
            />
            <input
              id="phone"
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              placeholder="06 12 34 56 78"
              className="field-input pl-10"
              {...register("phone", {
                required: "Téléphone requis",
                pattern: {
                  value: /^[0-9\s+\-().]{9,}$/,
                  message: "Numéro invalide",
                },
              })}
            />
          </div>
          {errors.phone && (
            <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label className="field-label" htmlFor="notes">
            Précisions (optionnel)
          </label>
          <textarea
            id="notes"
            rows={2}
            placeholder="Bagages, fauteuil, siège enfant..."
            className="field-input resize-none"
            {...register("notes")}
          />
        </div>

        {error && (
          <p className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
            {error}
          </p>
        )}

        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => setStep(1)}
            className="btn-secondary flex-1 justify-center"
          >
            Retour
          </button>
          <button
            type="submit"
            disabled={submitting}
            className="btn-primary flex-1 justify-center"
          >
            {submitting ? "Envoi..." : "Valider ma réservation"}
          </button>
        </div>

        <p className="text-center text-xs text-ink-500">
          En validant, vous autorisez notre chauffeur à vous rappeler.{" "}
          <a
            href={SITE.phoneHref}
            className="font-semibold text-brand-700 hover:text-brand-800"
          >
            Préférez appeler ?
          </a>
        </p>
      </div>
    </form>
  );
}
