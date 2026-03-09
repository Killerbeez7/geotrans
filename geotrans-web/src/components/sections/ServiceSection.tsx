import clsx from "clsx";
import { Section } from "@/components/layout/Section";
import { ServiceCard, MoreCard } from "@/components/parts/ServiceCards";
import type { ServicesContent } from "@/config/site-content";

export const ServiceSection = ({ id, title, subtitle, items }: ServicesContent) => {
  const main = items.slice(0, 5);
  const extra = Math.max(0, items.length - main.length);

  return (
    // <Section id={id} className="bg-bg-brand-soft">
    <Section id={id} className="bg-bg-section">
      <header className="text-center">
        <h2 className="typo-h2">{title}</h2>
        <p className="mx-auto mt-4 max-w-2xl typo-subtitle">{subtitle}</p>
      </header>

      <div
        className={clsx(
          "mt-12 grid gap-6 sm:gap-7 lg:gap-8 xl:gap-10",
          "grid-cols-1 gap-0 min-[840px]:grid-cols-2  min-[1280px]:grid-cols-3"
        )}
      >
        {main.map((item) => (
          <ServiceCard key={item.id} item={item} />
        ))}
        <MoreCard extraCount={extra} />
      </div>
    </Section>
  );
};
