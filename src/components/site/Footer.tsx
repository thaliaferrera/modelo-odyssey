import { ADDRESS_LINES, EMAIL, PHONE_DISPLAY } from "@/lib/clinic";

const NAV = [
  { label: "Sobre", href: "#about" },
  { label: "Tratamentos", href: "#treatments" },
  { label: "Tecnologia", href: "#technology" },
  { label: "Resultados", href: "#results" },
  { label: "Doutores", href: "#doctors" },
  { label: "Contato", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="bg-navy-deep pb-12 text-white/60">
      <div className="mx-auto max-w-[88rem] px-6 lg:px-10">
        <div className="hairline" />
        <div className="grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-3xl tracking-[0.22em] text-white">ODYSSEY</p>
            <p className="mt-6 max-w-sm text-sm leading-[1.9]">
              Odontologia personalizada de alto padrão. Projetada digitalmente, entregue
              à mão.
            </p>
          </div>

          <nav className="flex flex-col gap-3">
            <p className="text-[0.6rem] uppercase tracking-[0.26em] text-gold">Navegar</p>
            {NAV.map((l) => (
              <a key={l.href} href={l.href} className="w-fit text-sm link-luxe">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <p className="text-[0.6rem] uppercase tracking-[0.26em] text-gold">Visite</p>
            {ADDRESS_LINES.map((l) => (
              <span key={l} className="text-sm">
                {l}
              </span>
            ))}
            <a href={`tel:${PHONE_DISPLAY.replace(/\s|-/g, "")}`} className="w-fit text-sm link-luxe">
              {PHONE_DISPLAY}
            </a>
            <a href={`mailto:${EMAIL}`} className="w-fit text-sm link-luxe">
              {EMAIL}
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 pt-8 text-[0.65rem] uppercase tracking-[0.22em] sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} Odyssey Odontologia</span>
          <span>CRO-SP 00000 · Responsável: Dra. Helena Vieira</span>
        </div>
      </div>
    </footer>
  );
}
