import { useState } from "react";
import { Plus } from "lucide-react";
import { Reveal } from "./Reveal";

const FAQS = [
  {
    q: "Como funciona a primeira consulta?",
    a: "Dura cerca de 60 minutos. Escaneamos, fotografamos e conversamos — nenhum tratamento é realizado no primeiro dia. Você sai com um plano por escrito, uma simulação digital e um preço fechado.",
  },
  {
    q: "Vocês atendem pacientes do exterior?",
    a: "Com frequência. Concentramos o tratamento em visitas reduzidas e coordenamos com seu hotel e motorista. O acompanhamento remoto é feito por vídeo com o seu doutor responsável.",
  },
  {
    q: "As lentes ficam com aparência artificial?",
    a: "Não quando são bem projetadas. Simulamos o resultado no seu próprio rosto antes e só seguimos adiante quando as proporções parecem naturais para você.",
  },
  {
    q: "O tratamento é doloroso?",
    a: "A maioria dos procedimentos é feita sob anestesia local com auxílio de laser, e há sedação disponível. A maior parte dos nossos pacientes retorna à rotina no mesmo dia.",
  },
  {
    q: "Vocês oferecem formas de pagamento parceladas?",
    a: "Sim. Os planos são estruturados caso a caso com nosso concierge, incluindo parcelamento e pagamento com cartões internacionais.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-ivory py-28 lg:py-40">
      <div className="mx-auto max-w-[88rem] px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <Reveal>
            <p className="eyebrow">Dúvidas</p>
            <h2 className="mt-6 font-display text-4xl leading-[1.08] text-navy sm:text-5xl">
              Tudo o que você
              <span className="italic text-gold"> pode perguntar.</span>
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
