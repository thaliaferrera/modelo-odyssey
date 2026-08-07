import { Reveal } from "./Reveal";

const QUOTES = [
  {
    quote:
      "I have been treated in London and in New York. Odyssey is the first place where I felt the plan was built around my face rather than around a catalogue.",
    name: "Marina L.",
    detail: "Veneers · Jardins",
  },
  {
    quote:
      "Two implants, no swelling, back at the office the next morning. The digital planning meant there were no surprises at any stage.",
    name: "Ricardo T.",
    detail: "Implants · Itaim",
  },
  {
    quote:
      "The clinic is silent, the appointments run on time, and Dra. Helena answers her own messages. That level of attention is rare.",
    name: "Sophie B.",
    detail: "Orthodontics · Pinheiros",
  },
];

export function Testimonials() {
  return (
    <section className="bg-background py-28 lg:py-40">
      <div className="mx-auto max-w-[88rem] px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Testimonials</p>
          <h2 className="mt-6 font-display text-4xl leading-[1.08] text-navy sm:text-5xl lg:text-6xl">
            Words from
            <span className="italic text-gold"> our patients.</span>
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
