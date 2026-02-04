import SwiperCarousel from "./SwiperCarousel";

type ServiceSectionProps = {
  title: string;
  subtitle: string;
};

export const ServiceSection = ({ title, subtitle }: ServiceSectionProps) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-semibold text-center">{title}</h1>
        <p className="text-center text-(--text-secondary) mt-2">{subtitle}</p>

        <SwiperCarousel />
      </div>
    </section>
  );
};
