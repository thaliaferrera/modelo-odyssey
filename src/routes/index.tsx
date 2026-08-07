import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Treatments } from "@/components/site/Treatments";
import { Technology } from "@/components/site/Technology";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { Doctors } from "@/components/site/Doctors";
import { Testimonials } from "@/components/site/Testimonials";
import { Faq } from "@/components/site/Faq";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const TITLE = "Odyssey — Luxury Dental Clinic in São Paulo";
const DESCRIPTION =
  "High-end personalized dentistry using cutting-edge technology. Implants, veneers, orthodontics and aesthetic dentistry at Odyssey, Jardins, São Paulo.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <About />
        <Treatments />
        <Technology />
        <BeforeAfter />
        <Doctors />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
