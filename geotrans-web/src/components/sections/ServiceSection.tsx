import SwiperCarousel from "../features/SwiperCarousel";
import { ServicesContent } from "@/config/site-content";
import { Section } from "@/components/layout/Section";

export const ServiceSection = ({ id, title, subtitle, items }: ServicesContent) => {
  return (
    <Section id={id} className="bg-bg-muted ">
      {/* <div className="grid grid-cols-12 gap-6 "> */}
      <div className="grid grid-cols-12">
        {/* Header */}
        <header className="col-span-12 lg:col-span-8 lg:col-start-3 text-center">
          <h2 className="typo-h2">{title}</h2>
          <p className="mt-4 typo-subtitle mx-auto max-w-2xl">{subtitle}</p>
        </header>

        {/* Carousel */}
        <div className="col-span-12 mt-4">
          <SwiperCarousel items={items} />
        </div>
      </div>
    </Section>
  );
};
