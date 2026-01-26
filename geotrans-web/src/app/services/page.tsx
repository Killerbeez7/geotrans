import Link from "next/link";
import { SERVICE_LINKS } from "../../config/ServicesConfig";

export default function ServicesPage() {
    return (
        <div className="mx-auto max-w-4xl px-4 py-10">
            <h1 className="text-3xl font-semibold">Услуги</h1>
            <p className="mt-2 text-text-secondary">
                GeoTrans предлага геодезически и кадастрални услуги в София и Софийска
                област.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {SERVICE_LINKS.map((d) => (
                    <Link
                        key={d.slug}
                        href={`/services/${d.slug}`}
                        className="rounded-xl bg-white p-5 shadow-sm transition hover:shadow-md"
                    >
                        <div className="flex items-start gap-3">
                            <div className="text-2xl">{d.icon ?? "•"}</div>
                            <div>
                                <h2 className="text-lg font-semibold">{d.title}</h2>
                                <p className="mt-1 text-sm text-text-secondary">
                                    {d.description}
                                </p>
                                <p className="mt-3 text-sm text-link">Виж детайли →</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
