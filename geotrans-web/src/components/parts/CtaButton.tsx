import Link from "next/link";
import clsx from "clsx";
import { ReactNode } from "react";

type Variant = "primary" | "outline" | "glass" | "glassAccent";
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
        "hover:scale-105",
        "active:scale-100",
        "leading-none",
    );

    const sizes: Record<Size, string> = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-4 text-base",
        lg: "px-8 py-4 text-lg",
    };

    const variants: Record<Variant, string> = {
        primary: clsx("bg-accent", "text-(--tx-inverse)", "hover:bg-accent-hover"),

        outline: clsx(
            "border border-[var(--accent)]",
            "text-[var(--accent)]",
            "hover:bg-[var(--accent)] hover:text-[var(--tx-inverse)]",
        ),

        glass: clsx(
            "bg-white/10 backdrop-blur-md",
            "border border-white/20",
            "text-white",
            "hover:bg-white/20",
        ),
        glassAccent: clsx(
            "bg-[var(--accent)]/15",
            "backdrop-blur-md",
            "border border-[var(--accent)]/30",
            "text-[var(--accent)]",
            "hover:bg-[var(--accent)]",
            "hover:text-[var(--gray-900)]",
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
