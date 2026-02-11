import SwiperCarousel from "../features/SwiperCarousel";

type ServiceSectionProps = {
    title: string;
    subtitle: string;
};

export const ServiceSection = ({ title, subtitle }: ServiceSectionProps) => {
    return (
        <section className="py-14 sm:py-20  bg-(--bg-page)">
            <div className="container mx-auto px-6">
                <h2 className="font-semibold text-center tracking-tight text-2xl lg:text-3xl xl:text-4xl">
                    {title}
                </h2>

                <p className="mx-auto mt-2 max-w-2xl text-center text-base xl:text-lg text-(--text-secondary)">
                    {subtitle}
                </p>

                <SwiperCarousel />
            </div>
        </section>
    );
};
