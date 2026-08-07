import aboutImage from "@/assets/about.jpg";
import { Reveal } from "./Reveal";

const STATS = [
  { value: "18", label: "Years of practice" },
  { value: "9.400", label: "Smiles designed" },
  { value: "4", label: "Specialist doctors" },
];

export function About() {
  return (
    <section id="about" className="bg-background py-28 lg:py-40">
      <div className="mx-auto max-w-[88rem] px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <Reveal variant="slow" className="relative">
            <img
              src={aboutImage}
              alt="Marble and soft gold reception detail at the Odyssey clinic"
              width={1200}
              height={1504}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
            <div className="absolute -bottom-8 -right-4 hidden bg-navy px-10 py-8 sm:block lg:-right-10">
              <p className="font-display text-5xl italic text-gold-soft">Odyssey</p>
              <p className="mt-2 text-[0.65rem] uppercase tracking-[0.3em] text-white/60">
                Since 2008
              </p>
            </div>
          </Reveal>

          <div className="flex flex-col justify-center">
            <Reveal>
              <p className="eyebrow">The clinic</p>
              <h2 className="mt-6 font-display text-4xl leading-[1.08] text-navy sm:text-5xl lg:text-6xl">
                A quiet kind of
                <span className="italic text-gold"> precision.</span>
              </h2>
            </Reveal>

            <Reveal delay={120}>
              <p className="mt-8 max-w-xl text-base leading-[1.9] text-charcoal/70">
                Odyssey was founded on a simple conviction: dentistry at the highest
                level should feel like nothing at all. No waiting rooms that echo, no
                treatments that rush. Every visit is a single-patient appointment,
                planned digitally before you arrive and reviewed by the doctor who will
                treat you.
              </p>
              <p className="mt-6 max-w-xl text-base leading-[1.9] text-charcoal/70">
                Our team studied and practiced across São Paulo, New York and Dubai. What
                we brought back is a standard of care measured in microns — and an
                environment measured in calm.
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
