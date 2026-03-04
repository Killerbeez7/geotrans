import { ServiceCard, MoreCard } from "../parts/ServiceCard";

import { Section } from "@/components/layout/Section";
import type { ServicesContent } from "@/config/site-content";

export const ServiceSection = ({ id, title, subtitle, items }: ServicesContent) => {
  const main = items.slice(0, 7);
  const extra = Math.max(0, items.length - main.length);

  return (
    <section className="relative overflow-hidden bg-bg-page py-16 sm:py-20">
      {/* Background pattern */}
      {/* <div
        aria-hidden
        className="
    pointer-events-none
    absolute
    left-1/2
    top-0
    -translate-x-1/2
    w-[150%]
    h-full
    z-0
    opacity-[0.80]
    bg-[url('/patterns/vector.avif')]
    bg-center
    bg-cover
  "
        style={{
          maskImage: "radial-gradient(circle at center, transparent 35%, black 75%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, transparent 35%, black 75%)",
        }}
      /> */}

      {/* Content */}
      <Section id={id} className="relative z-10" containerClassName="container-page">
        <header className="text-center">
          <h2 className="typo-h2">{title}</h2>
          <p className="mx-auto mt-4 max-w-2xl typo-subtitle">{subtitle}</p>
        </header>

        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {main.map((item) => (
            <ServiceCard key={item.id} item={item} />
          ))}

          <MoreCard extraCount={extra} />
        </div>
      </Section>
    </section>
  );
};
