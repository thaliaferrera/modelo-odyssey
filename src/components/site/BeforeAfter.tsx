import { useCallback, useRef, useState, type KeyboardEvent } from "react";
import afterImage from "@/assets/after.jpg";
import afterImageWebp from "@/assets/after.webp";
import beforeImage from "@/assets/before.jpg";
import beforeImageWebp from "@/assets/before.webp";
import { Reveal } from "./Reveal";

const MIN_POS = 2;
const MAX_POS = 98;
const KEY_STEP = 4;

export function BeforeAfter() {
  const [pos, setPos] = useState(52);
  const frameRef = useRef<HTMLDivElement | null>(null);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = frameRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(MAX_POS, Math.max(MIN_POS, next)));
  }, []);

  const onKeyDown = useCallback((e: KeyboardEvent<HTMLDivElement>) => {
    switch (e.key) {
      case "ArrowLeft":
      case "ArrowDown":
        e.preventDefault();
        setPos((p) => Math.max(MIN_POS, p - KEY_STEP));
        break;
      case "ArrowRight":
      case "ArrowUp":
        e.preventDefault();
        setPos((p) => Math.min(MAX_POS, p + KEY_STEP));
        break;
      case "Home":
        e.preventDefault();
        setPos(MIN_POS);
        break;
      case "End":
        e.preventDefault();
        setPos(MAX_POS);
        break;
      default:
        break;
    }
  }, []);

  return (
    <section id="results" className="bg-background py-28 lg:py-40">
      <div className="mx-auto max-w-[88rem] px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-24">
          <Reveal>
            <p className="eyebrow">Antes &amp; Depois</p>
            <h2 className="mt-6 font-display text-4xl leading-[1.08] text-navy sm:text-5xl lg:text-6xl">
              A diferença está
              <span className="italic text-gold"> na discrição.</span>
            </h2>
            <p className="mt-8 max-w-md text-base leading-[1.9] text-charcoal/70">
              Um resultado não deve se anunciar. Arraste o controle para ver um caso
              completo de lentes cerâmicas — proporção, translucidez e linha gengival
              reconstruídas para parecer que sempre estiveram ali.
            </p>
            <dl className="mt-10 grid grid-cols-2 gap-8 border-t border-border pt-8">
              <div>
                <dt className="text-[0.6rem] uppercase tracking-[0.22em] text-muted-foreground">
                  Tratamento
                </dt>
                <dd className="mt-2 font-display text-xl text-navy">10 lentes</dd>
              </div>
              <div>
                <dt className="text-[0.6rem] uppercase tracking-[0.22em] text-muted-foreground">
                  Duração
                </dt>
                <dd className="mt-2 font-display text-xl text-navy">12 dias</dd>
              </div>
            </dl>
          </Reveal>

          <Reveal variant="slow">
            <div
              ref={frameRef}
              onPointerDown={(e) => {
                dragging.current = true;
                e.currentTarget.setPointerCapture(e.pointerId);
                setFromClientX(e.clientX);
              }}
              onPointerMove={(e) => dragging.current && setFromClientX(e.clientX)}
              onPointerUp={() => (dragging.current = false)}
              onPointerCancel={() => (dragging.current = false)}
              onKeyDown={onKeyDown}
              tabIndex={0}
              role="slider"
              aria-label="Comparação antes e depois do tratamento com lentes cerâmicas"
              aria-orientation="horizontal"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(pos)}
              className="relative aspect-square w-full cursor-ew-resize select-none overflow-hidden touch-none"
            >
              <picture>
                <source srcSet={afterImageWebp} type="image/webp" />
                <img
                  src={afterImage}
                  alt="Sorriso depois do tratamento com lentes cerâmicas na Odyssey"
                  width={912}
                  height={912}
                  loading="lazy"
                  className="absolute inset-0 size-full object-cover"
                />
              </picture>
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${pos}%` }}
              >
                <picture>
                  <source srcSet={beforeImageWebp} type="image/webp" />
                  <img
                    src={beforeImage}
                    alt="Sorriso antes do tratamento com lentes cerâmicas"
                    width={912}
                    height={912}
                    loading="lazy"
                    className="absolute inset-0 h-full object-cover"
                    style={{ width: frameRef.current?.clientWidth ?? "100%" }}
                  />
                </picture>
              </div>

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 w-px bg-gold"
                style={{ left: `${pos}%` }}
              >
                <span className="absolute top-1/2 left-1/2 flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gold bg-background/90 text-[0.6rem] uppercase tracking-[0.1em] text-navy backdrop-blur">
                  ↔
                </span>
              </div>

              <span
                aria-hidden="true"
                className="pointer-events-none absolute left-5 top-5 bg-charcoal/70 px-4 py-2 text-[0.6rem] uppercase tracking-[0.25em] text-white"
              >
                Antes
              </span>
              <span
                aria-hidden="true"
                className="pointer-events-none absolute right-5 top-5 bg-navy/80 px-4 py-2 text-[0.6rem] uppercase tracking-[0.25em] text-gold-soft"
              >
                Depois
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}