import { Reveal } from "./Reveal";

const QUOTES = [
  {
    quote:
      "Já fui atendida em Londres e em Nova York. A Odyssey é o primeiro lugar em que senti que o plano foi construído em torno do meu rosto, e não de um catálogo.",
    name: "Marina L.",
    detail: "Lentes · Jardins",
  },
  {
    quote:
      "Dois implantes, nenhum inchaço, de volta ao escritório na manhã seguinte. O planejamento digital fez com que não houvesse surpresa em nenhuma etapa.",
    name: "Ricardo T.",
    detail: "Implantes · Itaim",
  },
  {
    quote:
      "A clínica é silenciosa, os horários são cumpridos e a Dra. Helena responde às próprias mensagens. Esse nível de atenção é raro.",
    name: "Sophie B.",
    detail: "Ortodontia · Pinheiros",
  },
];

export function Testimonials() {
  return (
    <section className="bg-background py-28 lg:py-40">
      <div className="mx-auto max-w-[88rem] px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Depoimentos</p>
          <h2 className="mt-6 font-display text-4xl leading-[1.08] text-navy sm:text-5xl lg:text-6xl">
            Palavras dos
            <span className="italic text-gold"> nossos pacientes.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px border border-border bg-border lg:mt-24 lg:grid-cols-3">
          {QUOTES.map((q, i) => (
            <Reveal key={q.name} delay={i * 100}>
              <blockquote className="flex h-full flex-col justify-between bg-background p-9 lg:p-12">
                <p className="font-display text-2xl italic leading-[1.5] text-navy lg:text-[1.7rem]">
                  “{q.quote}”
                </p>
                <footer className="mt-10 border-t border-border pt-6">
                  <p className="text-sm text-charcoal">{q.name}</p>
                  <p className="mt-2 text-[0.6rem] uppercase tracking-[0.24em] text-gold">
                    {q.detail}
                  </p>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
