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
import { CLINIC_ADDRESS, EMAIL, PHONE_DISPLAY } from "@/lib/clinic";

const TITLE = "Odyssey — Clínica Odontológica de Luxo em São Paulo";
const DESCRIPTION =
  "Odontologia personalizada de alto padrão com tecnologia de ponta. Implantes, lentes, ortodontia e odontologia estética na Odyssey, Jardins, São Paulo.";

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

// Dados estruturados (schema.org) para a clínica — usa exclusivamente os
// dados já existentes em src/lib/clinic.ts. É um site-modelo (template) da
// Lumina Studio, então nenhum dado real (CRO, avaliações etc.) é publicado
// aqui além do que já constava no projeto.
const CLINIC_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "Odyssey",
  description: DESCRIPTION,
  email: EMAIL,
  telephone: PHONE_DISPLAY,
  address: {
    "@type": "PostalAddress",
    ...CLINIC_ADDRESS,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "20:00",
    },
  ],
};

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger -- dados estáticos e confiáveis (schema.org)
        dangerouslySetInnerHTML={{ __html: JSON.stringify(CLINIC_JSON_LD) }}
      />
      <a
        href="#main-content"
        className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:left-4 focus-visible:top-4 focus-visible:z-[100] focus-visible:bg-navy focus-visible:px-6 focus-visible:py-3 focus-visible:text-[0.7rem] focus-visible:uppercase focus-visible:tracking-[0.22em] focus-visible:text-white"
      >
        Pular para o conteúdo
      </a>
      <Nav />
      <main id="main-content">
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
