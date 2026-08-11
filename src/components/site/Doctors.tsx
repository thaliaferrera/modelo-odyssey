import doctor1 from "@/assets/doctor-1.jpg";
import doctor1Webp from "@/assets/doctor-1.webp";
import doctor2 from "@/assets/doctor-2.jpg";
import doctor2Webp from "@/assets/doctor-2.webp";
import doctor3 from "@/assets/doctor-3.jpg";
import doctor3Webp from "@/assets/doctor-3.webp";
import { Reveal } from "./Reveal";

const DOCTORS = [
  {
    image: doctor1,
    imageWebp: doctor1Webp,
    name: "Dra. Helena Vieira",
    role: "Fundadora · Odontologia Estética",
    credential: "Mestre em Prótese Dentária, NYU",
  },
  {
    image: doctor2,
    imageWebp: doctor2Webp,
    name: "Dr. Marcus Alvim",
    role: "Implantodontia · Cirurgia",
    credential: "Doutor em Implantodontia, USP",
  },
  {
    image: doctor3,
    imageWebp: doctor3Webp,
    name: "Dra. Camila Andrade",
    role: "Ortodontia",
    credential: "Invisalign Diamond Provider",
  },
];

export function Doctors() {
  return (
    <section id="doctors" className="bg-ivory py-28 lg:py-40">
      <div className="mx-auto max-w-[88rem] px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Os doutores</p>
          <h2 className="mt-6 font-display text-4xl leading-[1.08] text-navy sm:text-5xl lg:text-6xl">
            Você sempre saberá
            <span className="italic text-gold"> de quem são as mãos.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:mt-24 lg:grid-cols-3 lg:gap-14">
          {DOCTORS.map((d, i) => (
            <Reveal key={d.name} delay={i * 110}>
              <figure className="group">
                <div className="overflow-hidden bg-background">
                  <picture>
                    <source srcSet={d.imageWebp} type="image/webp" />
                    <img
                      src={d.image}
                      alt={`${d.name}, ${d.role} na Odyssey`}
                      width={912}
                      height={1200}
                      loading="lazy"
                      className="aspect-[3/4] w-full object-cover grayscale transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03] group-hover:grayscale-0"
                    />
                  </picture>
                </div>
                <figcaption className="mt-7">
                  <h3 className="font-display text-2xl text-navy">{d.name}</h3>
                  <p className="mt-2 text-[0.65rem] uppercase tracking-[0.24em] text-gold">
                    {d.role}
                  </p>
                  <p className="mt-3 text-sm text-charcoal/60">{d.credential}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
