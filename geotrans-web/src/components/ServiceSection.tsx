import ServiceCard from "./ServiceCard";
import { SERVICE_LINKS } from "components/config/ServicesConfig";

type ServiceSectionProps = {
    title: string;
    subtitle: string;
};

export const ServiceSection = ({ title, subtitle }: ServiceSectionProps) => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center pb-4 mb-2">
                    {title}
                </h2>
                <p className="text-center text-text-secondary mb-12">{subtitle}</p>

                <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {SERVICE_LINKS.map((s) => (
                        <li key={s.slug}>
                            <ServiceCard
                                title={s.title}
                                desc={s.description}
                                thumb={s.thumbnail}
                                href={s.href}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};
