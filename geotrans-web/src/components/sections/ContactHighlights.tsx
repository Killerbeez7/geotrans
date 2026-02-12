import Link from "next/link";
import { CtaButton } from "../parts/CtaButton";

/* Export component */
export function ContactHighlights() {
    return (
        <section className="max-w-7xl mx-auto px-6 pb-32">
            <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
                <CoverageCard />
                <CtaCard />
            </div>
        </section>
    );
}

/* Internal components */
function CoverageCard() {
    return (
        <div className="rounded-3xl bg-(--bg-surface) p-8 md:p-10 border border-(--color-border-light) shadow-sm flex flex-col justify-between transition-all hover:shadow-md hover:border-(--color-border-default) group">
            <div>
                <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-(--color-accent) animate-pulse" />
                    <h2 className="text-2xl font-bold tracking-tight text-(--tx-primary)">
                        Работен обхват
                    </h2>
                </div>
                <p className="mt-4 text-lg text-(--tx-secondary) leading-relaxed">
                    София и Софийска област. За други райони – по договаряне според обекта
                    и графика.
                </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
                {["София", "Софийска област", "По договаряне"].map((loc) => (
                    <Pill key={loc}>{loc}</Pill>
                ))}
            </div>
        </div>
    );
}

function CtaCard() {
    return (
        <div className="rounded-3xl bg-(--bg-nav) p-8 md:p-10 text-white shadow-xl flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute -right-4 -bottom-6 text-white opacity-5 text-9xl font-black rotate-12 pointer-events-none select-none transition-transform group-hover:scale-110 duration-700">
                GT
            </div>
            <div className="relative z-10">
                <h2 className="text-3xl font-bold tracking-tight">Готови ли сте?</h2>
                <p className="mt-4 text-lg text-(--tx-inverse) opacity-90">
                    Пишете ни какво ви трябва. Отговорът е кратък, конкретен и по
                    същество.
                </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-4 relative z-10">
                <CtaButton href="/contacts">Запитване</CtaButton>
                <CtaButton href="/projects" variant="glass">
                    Виж проекти
                </CtaButton>
            </div>
        </div>
    );
}

function Pill({ children }: { children: React.ReactNode }) {
    return (
        <span className="rounded-full bg-(--bg-page) border border-(--color-border-light) px-4 py-1.5 text-xs font-bold text-(--tx-secondary) shadow-xs transition-all hover:border-(--color-accent) hover:text-(--tx-primary) cursor-default">
            {children}
        </span>
    );
}
