import { Reveal } from "./Reveal";

const TREATMENTS = [
  {
    n: "01",
    title: "Dental Implants",
    text: "Guided, computer-planned implants placed with sub-millimetre accuracy — often with a provisional crown the same day.",
  },
  {
    n: "02",
    title: "Orthodontics",
    text: "Invisible aligners and self-ligating systems, simulated end-to-end before the first tray is ever worn.",
  },
  {
    n: "03",
    title: "Teeth Whitening",
    text: "Enamel-safe protocols calibrated to your natural shade, never beyond what a face can carry.",
  },
  {
    n: "04",
    title: "Veneers",
    text: "Ultra-thin ceramic laminates, hand-layered by a master ceramist to mimic the optics of natural enamel.",
  },
  {
    n: "05",
    title: "Facial Harmonization",
    text: "Restrained facial balancing that frames the smile — proportion first, product second.",
  },
  {
    n: "06",
    title: "Aesthetic Dentistry",
    text: "Full-mouth rehabilitations that restore function and quietly rewrite the way a face reads.",
  },
];

export function Treatments() {
  return (
    <section id="treatments" className="bg-ivory py-28 lg:py-40">
      <div className="mx-auto max-w-[88rem] px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Treatments</p>
          <h2 className="mt-6 font-display text-4xl leading-[1.08] text-navy sm:text-5xl lg:text-6xl">
            Six disciplines,
            <span className="italic text-gold"> one standard.</span>
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
