import Link from "next/link";
import { SERVICE_LINKS } from "components/config/ServicesConfig";

type ServiceSectionProps = {
    title: string;
    subtitle?: string;
    image?: string;
    ctaLabel?: string;
    ctaHref?: string;
};

export const ServiceSection = ({
    title,
    subtitle,
    ctaLabel,
    ctaHref,
}: ServiceSectionProps) => {
    return (
        <section className="relative overflow-hidden mx-10">
           <div className="grid items-center gap-12 px-8 py-16 sm:grid-cols-2 sm:py-20">
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {SERVICE_LINKS.map((s) => (
                        <Link
                            key={s.slug}
                            href={`/services/${s.slug}`}
                            className="rounded-2xl bg-white p-5 shadow-sm transition hover:shadow-md"
                        >
                            <div className="flex items-start gap-3">
                                <div className="text-2xl">{s.icon ?? "•"}</div>
                                <div>
                                    <h3 className="text-lg font-semibold">{s.title}</h3>
                                    <p className="mt-1 text-sm text-text-secondary">
                                        {s.slug}
                                    </p>
                                    <p className="mt-3 text-sm text-link">Детайли →</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-4 sm:hidden">
                    <Link
                        href="/services"
                        className="inline-flex rounded-lg px-3 py-2 text-sm font-semibold text-link ring-1 ring-black/10 hover:bg-white"
                    >
                        Всички услуги →
                    </Link>
                </div>


                   <div>
                    <h1 className="text-4xl font-semibold tracking-tight">{title}</h1>

                    {subtitle && (
                        <p className="mt-4 text-lg text-text-secondary">{subtitle}</p>
                    )}

                    {ctaLabel && ctaHref && (
                        <div className="mt-6">
                            <Link
                                href={ctaHref}
                                className="inline-flex rounded-lg bg-btn-primary px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
                            >
                                {ctaLabel}
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};
