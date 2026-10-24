import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import {
  Hero, Why, Specialties, Facilities, Packages, Doctors, Stories, News, Partners, Contact,
} from "@/components/site/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "South Apollo Hospital, Barishal | World-Class Healthcare" },
      { name: "description", content: "Expert doctors, advanced diagnostics and 24/7 emergency care at South Apollo Hospital, Barishal. Hotline 10678." },
      { property: "og:title", content: "South Apollo Hospital, Barishal" },
      { property: "og:description", content: "World-class healthcare, right here in Barishal. 24/7 emergency and expert specialists." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />
      <main>
        <Hero />
        <Why />
        <Specialties />
        <Facilities />
        <Packages />
        <Doctors />
        <Stories />
        <News />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
