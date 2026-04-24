import { NextResponse } from "next/server";

export const runtime = "nodejs";

const DEFAULT_FORMSPREE_ENDPOINT = "https://formspree.io/f/mnnokwja";

type Payload = {
  pickup: string;
  dropoff: string;
  date: string;
  time: string;
  phone: string;
  name: string;
  passengers: number;
  notes?: string;
  tripType: string;
};

const TRIP_LABELS: Record<string, string> = {
  privee: "Course privée",
  cpam: "Taxi médical CPAM",
  aeroport: "Aéroport / Gare",
};

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const required = [
    "pickup",
    "dropoff",
    "date",
    "time",
    "phone",
    "name",
  ] as const;
  for (const key of required) {
    if (!body[key]) {
      return NextResponse.json(
        { error: `Champ manquant : ${key}` },
        { status: 400 }
      );
    }
  }

  const endpoint = process.env.FORMSPREE_ENDPOINT || DEFAULT_FORMSPREE_ENDPOINT;
  const tripLabel = TRIP_LABELS[body.tripType] ?? body.tripType;

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _subject: `Nouvelle réservation taxi — ${tripLabel}`,
        _replyto: body.phone,
        type_de_course: tripLabel,
        nom: body.name,
        telephone: body.phone,
        depart: body.pickup,
        destination: body.dropoff,
        date: body.date,
        heure: body.time,
        passagers: body.passengers,
        precisions: body.notes ?? "",
      }),
    });

    if (!res.ok) {
      console.error("[booking] Formspree returned", res.status, await res.text());
      return NextResponse.json(
        { error: "Impossible d'envoyer la réservation. Merci d'appeler le 07 63 08 96 95." },
        { status: 502 }
      );
    }
  } catch (e) {
    console.error("[booking] Formspree forward failed", e);
    return NextResponse.json(
      { error: "Serveur injoignable. Appelez directement le 07 63 08 96 95." },
      { status: 502 }
    );
  }

  console.log("[booking]", { tripLabel, name: body.name, phone: body.phone });

  return NextResponse.json({ ok: true });
}
