import techImage from "@/assets/technology.jpg";
import { Reveal } from "./Reveal";

const TECH = [
  {
    title: "Scanner 3D",
    text: "Escaneamento intraoral em menos de quatro minutos. Sem moldeiras, sem massa de moldagem, sem enjoo.",
  },
  {
    title: "Planejamento Digital",
    text: "Seu caso é projetado e aprovado na tela antes de qualquer instrumento ser aberto.",
  },
  {
    title: "Tecnologia a Laser",
    text: "Lasers de tecidos moles para procedimentos praticamente sem sangramento e cicatrização muito mais rápida.",
  },
  {
    title: "Raio-X Digital",
    text: "Tomografia com até 90% menos radiação e clareza diagnóstica imediata.",
  },
];

export function Technology() {
  return (
    <section id="technology" className="relative overflow-hidden bg-navy py-28 lg:py-40">
      <div className="mx-auto max-w-[88rem] px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div className="flex flex-col justify-center">
            <Reveal>
              <p className="eyebrow">Tecnologia</p>
              <h2 className="mt-6 font-display text-4xl leading-[1.08] text-white sm:text-5xl lg:text-6xl">
                Instrumentos que
                <span className="italic text-gold-soft"> eliminam a incerteza.</span>
              </h2>
            </Reveal>

            <div className="mt-14 flex flex-col">
              {TECH.map((t, i) => (
                <Reveal key={t.title} delay={i * 90}>
                  <div className="group grid grid-cols-[auto_minmax(0,1fr)] gap-6 border-t border-white/10 py-8 last:border-b">
                    <span className="font-display text-sm text-gold">
                      0{i + 1}
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-display text-2xl text-white lg:text-3xl">
                        {t.title}
                      </h3>
                      <p className="mt-3 text-sm leading-[1.9] text-white/55">
                        {t.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal variant="slow" className="relative lg:pt-10">
            <img
              src={techImage}
              alt="Scanner intraoral 3D ao lado de um projeto digital do sorriso na tela"
              width={1408}
              height={1008}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover lg:aspect-[3/4]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/80 to-transparent p-8">
              <p className="font-display text-2xl italic text-gold-soft">
                Planejado em pixels. Entregue em esmalte.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
