import { useState } from "react";
import { Plus } from "lucide-react";
import { Reveal } from "./Reveal";

const FAQS = [
  {
    q: "How does a first consultation work?",
    a: "It lasts around 60 minutes. We scan, photograph and discuss — no treatment is performed on day one. You leave with a written plan, a digital simulation and a fixed price.",
  },
  {
    q: "Do you treat patients from abroad?",
    a: "Frequently. We compress treatment into concentrated visits and coordinate with your hotel and driver. Remote follow-up is done by video with your treating doctor.",
  },
  {
    q: "Will veneers look artificial?",
    a: "Not when they are designed properly. We simulate the result on your own face first and only proceed once the proportions read as natural to you.",
  },
  {
    q: "Is the treatment painful?",
    a: "Most procedures are performed under local anaesthesia with laser assistance, and sedation is available. The majority of our patients return to normal routine the same day.",
  },
  {
    q: "Do you offer payment plans?",
    a: "Yes. Plans are structured case by case with our concierge, including instalments and international card payments.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-ivory py-28 lg:py-40">
      <div className="mx-auto max-w-[88rem] px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <Reveal>
            <p className="eyebrow">Questions</p>
            <h2 className="mt-6 font-display text-4xl leading-[1.08] text-navy sm:text-5xl">
              Everything you
              <span className="italic text-gold"> may ask.</span>
            </h2>
          </Reveal>

          <div className="border-t border-border">
            {FAQS.map((f, i) => {
              const active = open === i;
              return (
                <Reveal key={f.q} delay={i * 60}>
                  <div className="border-b border-border">
                    <button
                      type="button"
                      onClick={() => setOpen(active ? null : i)}
                      aria-expanded={active}
                      className="grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-6 py-7 text-left"
                    >
                      <span className="min-w-0 font-display text-xl text-navy sm:text-2xl">
                        {f.q}
                      </span>
                      <Plus
                        className={`size-4 shrink-0 text-gold transition-transform duration-500 ${
                          active ? "rotate-45" : ""
                        }`}
                      />
                    </button>
                    <div
                      className="grid transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                      style={{ gridTemplateRows: active ? "1fr" : "0fr" }}
                    >
                      <div className="overflow-hidden">
                        <p className="max-w-2xl pb-8 text-sm leading-[1.9] text-charcoal/70">
                          {f.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
