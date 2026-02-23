import clsx from "clsx";

export function Grid({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={clsx("grid grid-cols-12 gap-6 sm:gap-8 lg:gap-14", className)}>
      {children}
    </div>
  );
}
