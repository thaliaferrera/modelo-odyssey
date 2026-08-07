import { type FormEvent, useState } from "react";
import { ADDRESS_LINES, EMAIL, PHONE_DISPLAY, WHATSAPP_URL } from "@/lib/clinic";
import { Reveal } from "./Reveal";

const FIELD =
  "w-full border-b border-white/15 bg-transparent py-4 text-sm text-white placeholder:text-white/35 outline-none transition-colors duration-500 focus:border-gold";

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="bg-navy-deep py-28 lg:py-40">
      <div className="mx-auto max-w-[88rem] px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <Reveal>
              <p className="eyebrow">Contact</p>
              <h2 className="mt-6 font-display text-4xl leading-[1.08] text-white sm:text-5xl lg:text-6xl">
                Begin your
                <span className="italic text-gold-soft"> odyssey.</span>
              </h2>
              <p className="mt-8 max-w-md text-base leading-[1.9] text-white/60">
                Appointments are limited to eight patients per day. Tell us what you
                would like to change and our concierge will respond within a few hours.
              </p>
            </Reveal>

            <Reveal delay={140}>
              <dl className="mt-14 space-y-8 border-t border-white/10 pt-10">
                <div>
                  <dt className="text-[0.6rem] uppercase tracking-[0.26em] text-gold">
                    Clinic
                  </dt>
                  <dd className="mt-3 text-sm leading-relaxed text-white/70">
                    {ADDRESS_LINES.map((l) => (
                      <span key={l} className="block">
                        {l}
                      </span>
                    ))}
                  </dd>
                </div>
                <div>
                  <dt className="text-[0.6rem] uppercase tracking-[0.26em] text-gold">
                    Direct
                  </dt>
                  <dd className="mt-3 space-y-1 text-sm text-white/70">
                    <a href={`tel:${PHONE_DISPLAY.replace(/\s|-/g, "")}`} className="block link-luxe w-fit">
                      {PHONE_DISPLAY}
                    </a>
                    <a href={`mailto:${EMAIL}`} className="block link-luxe w-fit">
                      {EMAIL}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-[0.6rem] uppercase tracking-[0.26em] text-gold">
                    Hours
                  </dt>
                  <dd className="mt-3 text-sm text-white/70">
                    Mon – Fri · 09h – 20h · Sat by appointment
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>

          <Reveal delay={100}>
            <form onSubmit={onSubmit} className="flex h-full flex-col">
              <div className="grid gap-8 sm:grid-cols-2">
                <input required placeholder="Full name" className={FIELD} />
                <input required type="tel" placeholder="Phone" className={FIELD} />
              </div>
              <div className="mt-8 grid gap-8 sm:grid-cols-2">
                <input required type="email" placeholder="Email" className={FIELD} />
                <select required defaultValue="" className={`${FIELD} text-white/60`}>
                  <option value="" disabled className="bg-navy">
                    Interest
                  </option>
                  {[
                    "Dental Implants",
                    "Orthodontics",
                    "Teeth Whitening",
                    "Veneers",
                    "Facial Harmonization",
                    "Aesthetic Dentistry",
                  ].map((o) => (
                    <option key={o} value={o} className="bg-navy text-white">
                      {o}
                    </option>
                  ))}
                </select>
              </div>
              <textarea
                rows={4}
                placeholder="What would you like to change about your smile?"
                className={`${FIELD} mt-8 resize-none`}
              />

              <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:gap-4">
                <button
                  type="submit"
                  className="border border-gold bg-gold px-10 py-5 text-[0.7rem] uppercase tracking-[0.28em] text-charcoal transition-all duration-700 hover:bg-transparent hover:text-gold-soft"
                >
                  {sent ? "Request received" : "Schedule appointment"}
                </button>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-white/25 px-10 py-5 text-center text-[0.7rem] uppercase tracking-[0.28em] text-white transition-all duration-700 hover:border-white hover:bg-white/10"
                >
                  WhatsApp
                </a>
              </div>
              {sent && (
                <p className="mt-6 text-sm text-gold-soft">
                  Thank you — our concierge will contact you shortly.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
