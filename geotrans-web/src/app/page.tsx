import Link from "next/link";

import { Content } from "../config/ContentConfig";
import { HorizontalDivider } from "../components/HorizontalDivider";
// Sections
import { HeroSection } from "../components/HeroSection";
import { ServiceSection } from "../components/ServiceSection";
import { GallerySection } from "../components/GallerySection";
import  WorkflowSection  from "../components/WorkflowSection";

export default function Home() {
    return (
        <div className="mx-auto max-w-350">
            {/* Hero */}
            <HeroSection
                title={Content.hero.title}
                desc={Content.hero.description}
                image={Content.hero.image}
                ctaLabel={Content.cta.label}
                ctaHref={Content.cta.href}
            />

            <HorizontalDivider />

            {/* Services */}
            <ServiceSection
                title={Content.services.title}
                subtitle={Content.services.description}
            />

            <HorizontalDivider />

            {/* How it works */}
            <WorkflowSection
                title={Content.workflow.title}
                desc={Content.workflow.description}
                steps={Content.workflow.steps}
            />

            {/* Coverage + CTA */}
            <section className="mt-10 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-white p-6 shadow-sm">
                    <h2 className="text-xl font-semibold">Работен обхват</h2>
                    <p className="mt-2 text-text-secondary">
                        София и Софийска област. За други райони – по договаряне според
                        обекта и графика.
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2 text-sm">
                        <Pill>София</Pill>
                        <Pill>Софийска област</Pill>
                        <Pill>По договаряне</Pill>
                    </div>
                </div>

                <div className="rounded-2xl bg-white p-6 shadow-sm">
                    <h2 className="text-xl font-semibold">Готови ли сте да започнем?</h2>
                    <p className="mt-2 text-text-secondary">
                        Пишете ни какво ви трябва. Отговорът е кратък, конкретен и по
                        същество.
                    </p>

                    <div className="mt-5 flex flex-wrap gap-3">
                        <Link
                            href="/contacts"
                            className="rounded-lg bg-btn-primary px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
                        >
                            Запитване
                        </Link>
                        <Link
                            href="/gallery"
                            className="rounded-lg px-4 py-2 text-sm font-semibold text-link ring-1 ring-black/10 hover:bg-gray-50"
                        >
                            Виж галерия
                        </Link>
                    </div>
                </div>
            </section>

            {/* Gallery preview */}
            <GallerySection />
        </div>
    );
}

function Badge({ title, text }: { title: string; text: string }) {
    return (
        <div className="rounded-xl bg-gray-50 p-4 ring-1 ring-black/5">
            <p className="text-sm font-semibold">{title}</p>
            <p className="mt-1 text-sm text-text-secondary">{text}</p>
        </div>
    );
}

function Pill({ children }: { children: React.ReactNode }) {
    return (
        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-text-secondary ring-1 ring-black/5">
            {children}
        </span>
    );
}
