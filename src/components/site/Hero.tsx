import heroImage from "@/assets/hero.jpg";
import { WHATSAPP_URL } from "@/lib/clinic";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden bg-navy-deep">
      <img
        src={heroImage}
        alt="Recepção da clínica odontológica Odyssey em mármore branco com detalhes em azul-marinho e dourado suave"
        width={1920}
        height={1280}
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/85 via-navy-deep/55 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-transparent to-navy-deep/30" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-[88rem] flex-col justify-end px-6 pb-20 pt-32 lg:justify-center lg:px-10 lg:pb-28">
        <div className="max-w-3xl">
          <p className="eyebrow animate-fade-in">São Paulo · Nova York · Dubai</p>

          <h1
            className="mt-6 font-display text-[3.1rem] leading-[0.95] text-white sm:text-7xl lg:text-[6.2rem]"
            style={{ animation: "fade-in 1.2s cubic-bezier(0.16,1,0.3,1) both" }}
          >
            Seu sorriso
            <span className="block italic text-gold-soft">merece excelência.</span>
          </h1>

          <div className="mt-10 flex max-w-xl items-start gap-6">
            <span className="mt-3 hidden h-px w-16 shrink-0 bg-gold/70 sm:block" />
            <p className="text-base font-light leading-relaxed text-white/75 sm:text-lg">
              Odontologia personalizada de alto padrão com tecnologia de ponta —
              planejada em torno do seu rosto, do seu ritmo e da sua definição de beleza.
            </p>
          </div>

          <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a
              href="#contact"
              className="group relative overflow-hidden border border-gold bg-gold px-10 py-5 text-center text-[0.7rem] uppercase tracking-[0.28em] text-charcoal transition-all duration-700 hover:bg-transparent hover:text-gold-soft"
            >
              Agendar consulta
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="border border-white/30 px-10 py-5 text-center text-[0.7rem] uppercase tracking-[0.28em] text-white transition-all duration-700 hover:border-white hover:bg-white/10"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-6 hidden items-center gap-4 lg:right-10 lg:flex">
        <span className="text-[0.65rem] uppercase tracking-[0.3em] text-white/50">
          Role
        </span>
        <span className="h-12 w-px bg-gradient-to-b from-white/10 to-gold" />
      </div>
    </section>
  );
}
