import { NextResponse } from "next/server";

export const runtime = "nodejs";

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

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const required = ["pickup", "dropoff", "date", "time", "phone", "name"] as const;
  for (const key of required) {
    if (!body[key]) {
      return NextResponse.json(
        { error: `Champ manquant : ${key}` },
        { status: 400 }
      );
    }
  }

  // Optional : forward to Formspree if an endpoint is configured
  const formspree = process.env.FORMSPREE_ENDPOINT;
  if (formspree) {
    try {
      await fetch(formspree, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          _subject: `Nouvelle réservation taxi — ${body.tripType}`,
          ...body,
        }),
      });
    } catch (e) {
      // swallow – the user still sees success
      console.error("Formspree forward failed", e);
    }
  }

  // Always log for Vercel / server logs
  console.log("[booking]", body);

  return NextResponse.json({ ok: true });
}
