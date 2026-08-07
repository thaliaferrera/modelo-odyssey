import { Reveal } from "./Reveal";

const TREATMENTS = [
  {
    n: "01",
    title: "Implantes Dentários",
    text: "Implantes guiados e planejados por computador, posicionados com precisão submilimétrica — muitas vezes com coroa provisória no mesmo dia.",
  },
  {
    n: "02",
    title: "Ortodontia",
    text: "Alinhadores invisíveis e sistemas autoligados, simulados do início ao fim antes do primeiro alinhador ser usado.",
  },
  {
    n: "03",
    title: "Clareamento Dental",
    text: "Protocolos seguros para o esmalte, calibrados para o seu tom natural, nunca além do que o rosto comporta.",
  },
  {
    n: "04",
    title: "Lentes de Contato Dental",
    text: "Laminados cerâmicos ultrafinos, estratificados à mão por um ceramista mestre para imitar a óptica do esmalte natural.",
  },
  {
    n: "05",
    title: "Harmonização Facial",
    text: "Equilíbrio facial contido que emoldura o sorriso — proporção primeiro, produto depois.",
  },
  {
    n: "06",
    title: "Odontologia Estética",
    text: "Reabilitações totais que devolvem função e reescrevem discretamente a forma como um rosto é percebido.",
  },
];

export function Treatments() {
  return (
    <section id="treatments" className="bg-ivory py-28 lg:py-40">
      <div className="mx-auto max-w-[88rem] px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Tratamentos</p>
          <h2 className="mt-6 font-display text-4xl leading-[1.08] text-navy sm:text-5xl lg:text-6xl">
            Seis especialidades,
            <span className="italic text-gold"> um só padrão.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px border border-border bg-border sm:grid-cols-2 lg:mt-24 lg:grid-cols-3">
          {TREATMENTS.map((t, i) => (
            <Reveal key={t.title} delay={i * 70}>
              <article className="group relative flex h-full flex-col justify-between bg-background p-9 transition-colors duration-700 hover:bg-navy lg:p-12">
                <div>
                  <span className="font-display text-sm tracking-[0.3em] text-gold">
                    {t.n}
                  </span>
                  <h3 className="mt-8 font-display text-3xl text-navy transition-colors duration-700 group-hover:text-white lg:text-4xl">
                    {t.title}
                  </h3>
                  <p className="mt-5 text-sm leading-[1.9] text-charcoal/65 transition-colors duration-700 group-hover:text-white/65">
                    {t.text}
                  </p>
                </div>
                <span className="mt-12 block h-px w-10 bg-gold transition-all duration-700 group-hover:w-24" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
