import clsx from "clsx";
import { Section } from "@/components/layout/Section";
import { ServiceCard } from "@/components/parts/ServiceCards";

import type { ServicesContent } from "@/config/site-content";

export const ServiceSection = ({ id, title, subtitle, items }: ServicesContent) => {
  const displayItems = items.filter((item) => item.id !== "more").slice(0, 5);
  const moreItem = items.find((item) => item.id === "more");
  const extraItems = Math.max(0, items.length - 1 - displayItems.length);

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
        {displayItems.map((item) => (
          <ServiceCard key={item.id} item={item} />
        ))}
        {moreItem && <ServiceCard item={moreItem} extraCount={extraItems} />}
      </div>
    </Section>
  );
};
