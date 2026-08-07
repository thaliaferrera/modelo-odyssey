import type { ElementType, ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "default" | "slow";
  as?: ElementType;
};

export function Reveal({
  children,
  className,
  delay = 0,
  variant = "default",
  as,
}: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const Tag = (as ?? "div") as ElementType;

  return (
    <Tag
      ref={ref}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(variant === "slow" ? "reveal-slow" : "reveal", className)}
    >
      {children}
    </Tag>
  );
}
