import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Treatments", href: "#treatments" },
  { label: "Technology", href: "#technology" },
  { label: "Results", href: "#results" },
  { label: "Doctors", href: "#doctors" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
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
            scrolled ? "text-navy" : "text-navy lg:text-navy"
          }`}
        >
          ODYSSEY
        </a>

        <nav className="hidden items-center gap-10 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="link-luxe text-[0.7rem] uppercase tracking-[0.22em] text-charcoal/70 transition-colors hover:text-navy"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden justify-end lg:flex">
          <a
            href="#contact"
            className="border border-navy/20 px-7 py-3 text-[0.7rem] uppercase tracking-[0.22em] text-navy transition-all duration-500 hover:border-gold hover:bg-navy hover:text-primary-foreground"
          >
            Schedule
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="shrink-0 justify-self-end p-2 text-navy lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <div
        className={`fixed inset-0 top-0 z-40 flex flex-col bg-background px-8 pt-28 transition-all duration-500 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1">
          {LINKS.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
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
          Schedule appointment
        </a>
      </div>
    </header>
  );
}
