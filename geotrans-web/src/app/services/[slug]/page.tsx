import { notFound } from "next/navigation";
import { getServiceBySlug, SERVICE_LINKS } from "../../config/ServicesConfig";

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
        <div className="mx-auto max-w-4xl px-4 py-10">
            <div className="flex items-start gap-3">
                <div className="text-3xl">{service.icon ?? "•"}</div>
                <div>
                    <h1 className="text-3xl font-semibold">{service.title}</h1>
                    <p className="mt-2 text-text-secondary">{service.slug}</p>
                    <p className="mt-3 text-sm text-text-secondary">
                        Обхват: София и Софийска област (за други райони – по договаряне).
                    </p>
                </div>
            </div>

            <div className="mt-10 grid gap-6">
                <Section title="Кога е необходимо" items={service.neededWhen} />
                <Section
                    title="Какво е необходимо от клиента"
                    items={service.requiredDocs}
                />
                <Section title="Какво получавате" items={service.deliverables} />

                <div className="rounded-xl bg-white p-5 shadow-sm">
                    <h2 className="text-lg font-semibold">Запитване</h2>
                    <p className="mt-2 text-sm text-text-secondary">
                        Изпратете кратко описание + адрес/идентификатор и ще се върнем с
                        отговор.
                    </p>
                    <a
                        className="mt-4 inline-flex rounded-lg bg-btn-primary px-4 py-2 text-white"
                        href="/contacts"
                    >
                        Към контакти
                    </a>
                </div>
            </div>
        </div>
    );
}

function Section({ title, items }: { title: string; items: string[] }) {
    return (
        <div className="rounded-xl bg-white p-5 shadow-sm">
            <h2 className="text-lg font-semibold">{title}</h2>
            <ul className="mt-3 list-disc pl-5 text-text-secondary">
                {items.map((x, i) => (
                    <li key={`${title}-${i}`} className="py-0.5">
                        {x}
                    </li>
                ))}
            </ul>
        </div>
    );
}
