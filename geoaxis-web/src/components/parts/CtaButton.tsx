import Link from "next/link";
import clsx from "clsx";
import { ReactNode } from "react";

type Variant = "primary" | "outline" | "glass" | "glassInverse" | "glassAccent" | "soft";

type Size = "sm" | "md" | "lg";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function CtaButton({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  const baseStyles = clsx(
    "inline-flex items-center justify-center gap-2",
    "font-semibold",
    "rounded-2xl",
    "transition-all duration-200",
    "shadow-lg hover:shadow-xl",
    "active:scale-100",
    "leading-none"
  );

  const sizes: Record<Size, string> = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm md:text-base",
    lg: "px-6 py-3 text-sm md:text-lg",
  };

  const variants: Record<Variant, string> = {
    primary: clsx("bg-accent/90", "text-tx-inverse", "hover:bg-accent-hover/90"),

    outline: clsx(
      "border border-br-light/50",
      "text-white bg-white/10",
      "hover:bg-white/20 hover:text-tx-inverse"
    ),

    glass: clsx(
      "bg-(--surface-overlay-sm) backdrop-blur-md",
      "border border-(--surface-overlay-lg)",
      "text-white",
      "hover:bg-(--surface-overlay-lg)"
    ),
    glassInverse: clsx(
      "bg-(--surface-overlay-lg) backdrop-blur-md",
      "border border-br-strong",
      "text-tx-muted",
      "hover:bg-(--surface-overlay-lg)"
    ),
    glassAccent: clsx(
      "bg-(--surface-overlay-sm) backdrop-blur-md",
      "border border-white/20",
      "text-white",
      "hover:bg-(--surface-overlay-lg)"
    ),
    soft: clsx(
      "inline-flex items-center justify-center rounded-full",
      "px-5 py-2.5 text-sm font-semibold",
      "border border-accent/25",
      "bg-accent/10 text-accent-strong",
      "shadow-none",
      "transition-all duration-200",
      "hover:bg-accent/15 hover:border-accent/40"
    ),
  };

  const finalClass = clsx(baseStyles, sizes[size], variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={finalClass}>
        {children}
      </Link>
    );
  }

  return (
    <button {...props} className={finalClass}>
      {children}
    </button>
  );
}
