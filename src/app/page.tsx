import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Fleet } from "@/components/Fleet";
import { Destinations } from "@/components/Destinations";
import { Testimonials } from "@/components/Testimonials";
import { Coverage } from "@/components/Coverage";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { LiveBookingToast } from "@/components/LiveBookingToast";

export default function HomePage() {
  return (
    <>
      <a
        href="#reserver"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-gold-400 focus:px-4 focus:py-2 focus:font-semibold focus:text-navy-900"
      >
        Aller à la réservation
      </a>
      <Header />
      <main className="relative">
        <Hero />
        <TrustBar />
        <Services />
        <Process />
        <Fleet />
        <Destinations />
        <Testimonials />
        <Coverage />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingCTA />
      <LiveBookingToast />
    </>
  );
}
