import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { label: "Sobre", href: "#about" },
  { label: "Tratamentos", href: "#treatments" },
  { label: "Tecnologia", href: "#technology" },
  { label: "Resultados", href: "#results" },
  { label: "Doutores", href: "#doctors" },
  { label: "Contato", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const firstMobileLinkRef = useRef<HTMLAnchorElement | null>(null);
  const wasOpenRef = useRef(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Bloqueia o scroll e isola o restante da página (main/footer) do teclado e
  // de leitores de tela enquanto o menu mobile está aberto; devolve o foco ao
  // botão de menu ao fechar.
  useEffect(() => {
    const mainEl = document.querySelector("main");
    const footerEl = document.querySelector("footer");
    document.body.style.overflow = open ? "hidden" : "";

    if (open) {
      mainEl?.setAttribute("inert", "");
      footerEl?.setAttribute("inert", "");
      wasOpenRef.current = true;
      const focusTimer = window.setTimeout(() => firstMobileLinkRef.current?.focus(), 60);
      return () => window.clearTimeout(focusTimer);
    }

    mainEl?.removeAttribute("inert");
    footerEl?.removeAttribute("inert");
    if (wasOpenRef.current) {
      wasOpenRef.current = false;
      menuButtonRef.current?.focus();
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Esc fecha o menu; Tab/Shift+Tab ficam presos entre o botão de menu e os
  // links visíveis do overlay enquanto ele está aberto.
  const onHeaderKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    if (!open) return;
    if (e.key === "Escape") {
      e.preventDefault();
      setOpen(false);
      return;
    }
    if (e.key !== "Tab" || !headerRef.current) return;

    const focusable = Array.from(
      headerRef.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled])"),
    ).filter((el) => el.offsetParent !== null);
    if (focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  return (
    <header
      ref={headerRef}
      onKeyDown={onHeaderKeyDown}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled
          ? "border-b border-border/70 bg-background/85 py-3 backdrop-blur-xl"
          : "border-b border-transparent py-6"
      }`}
    >
      <div className="mx-auto grid max-w-[88rem] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 lg:grid-cols-[1fr_auto_1fr] lg:px-10">
        <a
          href="#top"
          className={`min-w-0 font-display text-2xl tracking-[0.22em] transition-colors duration-700 ${
            scrolled || open ? "text-navy" : "text-white"
          }`}
        >
          ODYSSEY
        </a>

        <nav className="hidden items-center gap-10 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`link-luxe text-[0.7rem] uppercase tracking-[0.22em] transition-colors duration-700 ${
                scrolled ? "text-charcoal/70 hover:text-navy" : "text-white/75 hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden justify-end lg:flex">
          <a
            href="#contact"
            className={`border px-7 py-3 text-[0.7rem] uppercase tracking-[0.22em] transition-all duration-700 ${
              scrolled
                ? "border-navy/20 text-navy hover:border-gold hover:bg-navy hover:text-primary-foreground"
                : "border-white/35 text-white hover:border-gold hover:bg-gold hover:text-charcoal"
            }`}
          >
            Agendar
          </a>
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className={`shrink-0 justify-self-end p-2 transition-colors duration-700 lg:hidden ${
            scrolled || open ? "text-navy" : "text-white"
          }`}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <div
        id="mobile-menu"
        inert={!open}
        className={`fixed inset-0 top-0 z-40 flex flex-col bg-background px-8 pt-28 transition-all duration-500 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1">
          {LINKS.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              ref={i === 0 ? firstMobileLinkRef : undefined}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: `${open ? 80 + i * 45 : 0}ms` }}
              className={`border-b border-border/70 py-5 font-display text-3xl text-navy transition-all duration-500 ${
                open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          onClick={() => setOpen(false)}
          className="mt-10 bg-navy py-5 text-center text-[0.7rem] uppercase tracking-[0.28em] text-primary-foreground"
        >
          Agendar consulta
        </a>
      </div>
    </header>
  );
}