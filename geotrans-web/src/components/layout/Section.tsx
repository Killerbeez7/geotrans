import clsx from "clsx";

type SectionProps = {
  id?: string;
  className?: string;
  containerClassName?: string;
  variant?: "default" | "hero";
  children: React.ReactNode;
};

export function Section({
  id,
  className,
  containerClassName,
  variant = "default",
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={clsx(
        "relative",
        "px-4 sm:px-6 lg:px-12",
        variant === "hero"
          ? "pt-10 sm:pt-12 lg:pt-14 pb-12 sm:pb-14 lg:pb-16"
          : "py-18 sm:py-20 lg:py-24",
        className
      )}
    >
      <div className={clsx("mx-auto max-w-7xl", containerClassName)}>{children}</div>
    </section>
  );
}
