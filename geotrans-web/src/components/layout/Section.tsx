import clsx from "clsx";

type SectionProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

export function Section({ id, className, children }: SectionProps) {
  return (
    <section
      id={id}
      className={clsx(
        "relative overflow-x-hidden",
        "px-4 sm:px-6 lg:px-12",
        "py-18 sm:py-20 lg:py-24",
        className
      )}
    >
      <div className="mx-auto max-w-7xl w-full">{children}</div>
    </section>
  );
}
