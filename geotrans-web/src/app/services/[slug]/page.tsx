// app/services/[slug]/page.tsx

import { notFound } from "next/navigation";
import Link from "next/link";
import { getServiceBySlug, SERVICE_LINKS } from "../../../config/ServicesConfig";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

export const dynamicParams = false;

export function generateStaticParams() {
    return SERVICE_LINKS.map((s) => ({ slug: s.slug }));
}

type Props = {
    params: { slug: string } | Promise<{ slug: string }>;
};

export default async function ServiceDetailPage({ params }: Props) {
    const { slug } = await Promise.resolve(params);
    if (!slug) return notFound();

    const service = getServiceBySlug(slug);
    if (!service) return notFound();

    return (
        <main className="relative min-h-screen bg-(--bg-page)">
            {/* Optional subtle topo background */}
            <div
                className="absolute inset-0 -z-10 opacity-5 pointer-events-none"
                style={{
                    backgroundImage: "url(/images/topo-pattern-light.svg)",
                    backgroundSize: "cover",
                }}
            />

            <section className="pt-28 pb-16 md:pt-36 md:pb-20">
                <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                    {/* Header with icon + title */}
                    <div className="flex flex-col sm:flex-row items-start gap-6">
                        <div className="shrink-0 text-5xl sm:text-6xl text-(--color-accent) bg-(--color-accent)/10 p-5 rounded-2xl">
                            {service.icon ?? "📐"}
                        </div>
                        <div className="flex-1">
                            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-(--text-primary)">
                                {service.title}
                            </h1>
                            <p className="mt-4 text-lg text-(--text-secondary)">
                                Обхват: София и Софийска област (за други райони – по
                                договаряне)
                            </p>
                        </div>
                    </div>

                    {/* Content sections */}
                    <div className="mt-16 grid gap-10 lg:gap-12">
                        <DetailSection
                            title="Кога е необходимо?"
                            items={service.neededWhen}
                            icon={<FaCheckCircle className="text-(--color-success)" />}
                        />
                        <DetailSection
                            title="Какво е необходимо от клиента?"
                            items={service.requiredDocs}
                            icon={<FaArrowRight className="text-(--color-accent)" />}
                        />
                        <DetailSection
                            title="Какво получавате от нас?"
                            items={service.deliverables}
                            icon={<FaCheckCircle className="text-(--color-success)" />}
                        />
                    </div>

                    {/* CTA Card */}
                    <div className="mt-16 rounded-3xl bg-gradient-to-br from-(--color-nav)/90 to-(--color-nav) p-8 sm:p-10 text-white shadow-2xl border border-white/10 backdrop-blur-md">
                        <h2 className="text-2xl sm:text-3xl font-bold">
                            Искате оферта за тази услуга?
                        </h2>
                        <p className="mt-4 text-lg opacity-90">
                            Изпратете ни кратко описание на обекта (адрес, идентификатор,
                            снимки) и ще се свържем с вас в рамките на 24 часа с точна
                            цена и срок.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <Link
                                href="/contacts"
                                className="inline-flex items-center justify-center gap-3 rounded-xl bg-(--color-btn-primary) px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-(--color-btn-primary-hover) hover:shadow-xl transition-all hover:scale-105"
                            >
                                Изпратете запитване
                                <FaArrowRight />
                            </Link>
                            <a
                                href="tel:+359123456789"
                                className="inline-flex items-center justify-center gap-3 rounded-xl border-2 border-white/30 px-8 py-4 text-lg font-medium backdrop-blur-sm hover:bg-white/10 transition-all"
                            >
                                <span className="text-2xl">☎</span>
                                Обаждане сега
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

// Reusable section component
function DetailSection({
    title,
    items,
    icon,
}: {
    title: string;
    items: string[];
    icon?: React.ReactNode;
}) {
    return (
        <div className="group rounded-2xl bg-(--bg-surface) p-8 shadow-lg border border-(--color-border-light) hover:shadow-xl hover:border-(--color-accent)/20 transition-all duration-300">
            <div className="flex items-center gap-4">
                {icon && <div className="text-3xl">{icon}</div>}
                <h2 className="text-2xl font-bold text-(--text-primary)">{title}</h2>
            </div>

            <ul className="mt-6 space-y-4">
                {items.map((item, i) => (
                    <li
                        key={i}
                        className="flex items-start gap-4 text-(--text-secondary)"
                    >
                        <span className="mt-1.5 shrink-0 text-(--color-success)">✓</span>
                        <span className="leading-relaxed">{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
