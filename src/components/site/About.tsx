import aboutImage from "@/assets/about.jpg";
import aboutImageWebp from "@/assets/about.webp";
import { Reveal } from "./Reveal";

const STATS = [
  { value: "18", label: "Anos de prática" },
  { value: "9.400", label: "Sorrisos projetados" },
  { value: "4", label: "Doutores especialistas" },
];

export function About() {
  return (
    <section id="about" className="bg-background py-28 lg:py-40">
      <div className="mx-auto max-w-[88rem] px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <Reveal variant="slow" className="relative">
            <picture>
              <source srcSet={aboutImageWebp} type="image/webp" />
              <img
                src={aboutImage}
                alt="Detalhe da recepção da clínica Odyssey em mármore e dourado suave"
                width={1200}
                height={1504}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </picture>
            <div className="absolute -bottom-8 -right-4 hidden bg-navy px-10 py-8 sm:block lg:-right-10">
              <p className="font-display text-5xl italic text-gold-soft">Odyssey</p>
              <p className="mt-2 text-[0.65rem] uppercase tracking-[0.3em] text-white/60">
                Desde 2008
              </p>
            </div>
          </Reveal>

          <div className="flex flex-col justify-center">
            <Reveal>
              <p className="eyebrow">A clínica</p>
              <h2 className="mt-6 font-display text-4xl leading-[1.08] text-navy sm:text-5xl lg:text-6xl">
                Uma forma silenciosa de
                <span className="italic text-gold"> precisão.</span>
              </h2>
            </Reveal>

            <Reveal delay={120}>
              <p className="mt-8 max-w-xl text-base leading-[1.9] text-charcoal/70">
                A Odyssey nasceu de uma convicção simples: a odontologia no mais alto
                nível deve ser imperceptível. Sem salas de espera que ecoam, sem
                tratamentos apressados. Cada visita é um atendimento exclusivo,
                planejado digitalmente antes da sua chegada e revisado pelo doutor que
                irá tratá-lo.
              </p>
              <p className="mt-6 max-w-xl text-base leading-[1.9] text-charcoal/70">
                Nossa equipe estudou e atuou em São Paulo, Nova York e Dubai. O que
                trouxemos de volta é um padrão de cuidado medido em mícrons — e um
                ambiente medido em calma.
              </p>
            </Reveal>

            <Reveal delay={220}>
              <div className="mt-14 grid grid-cols-3 gap-6 border-t border-border pt-10">
                {STATS.map((s) => (
                  <div key={s.label}>
                    <p className="font-display text-3xl text-navy sm:text-5xl">
                      {s.value}
                    </p>
                    <p className="mt-3 text-[0.6rem] uppercase leading-relaxed tracking-[0.2em] text-muted-foreground">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}