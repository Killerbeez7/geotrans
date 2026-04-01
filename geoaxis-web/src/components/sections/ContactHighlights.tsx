import { CtaButton } from "../parts/CtaButton";

/* Export component */
export function ContactHighlights() {
    return (
        <section className="relative py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-8">
                <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-full w-screen -translate-x-1/2 bg-gray-50" />
                <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
                    <CoverageCard />
                    <CtaCard />
                </div>
            </div>
        </section>
    );
}

/* Internal components */
function CoverageCard() {
    return (
        <div className="rounded-3xl bg-bg-surface p-8 md:p-10 border border-br-subtle shadow-sm flex flex-col justify-between transition-all hover:shadow-md hover:border-br-light group">
            <div>
                <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                    {/* <h2 className="text-2xl font-bold tracking-tight text-(--tx-primary)"> */}
                    <h2 className="typo-h3">Работен обхват</h2>
                </div>
                {/* <p className="mt-4 text-lg text-(--tx-secondary) leading-relaxed"> */}
                <p className="mt-4 typo-lead">
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
        <div className="rounded-3xl bg-bg-nav p-8 md:p-10 text-white shadow-xl flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute -right-4 -bottom-6 text-white opacity-5 text-9xl font-black rotate-12 pointer-events-none select-none transition-transform group-hover:scale-110 duration-700">
                GT
            </div>
            <div className="relative z-10">
                {/* <h2 className="text-3xl font-bold tracking-tight"> */}
                <h2 className="typo-h2 text-tx-inverse">Готови ли сте?</h2>
                {/* <p className="mt-4 text-lg text-(--tx-inverse) opacity-90"> */}
                <p className="mt-4 typo-lead text-tx-inverse-secondary">
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
        <span className="rounded-full bg-bg-page border border-br-subtle px-4 py-1.5 text-xs font-bold text-tx-secondary shadow-xs transition-all hover:border-accent hover:text-tx-primary cursor-default">
            {children}
        </span>
    );
}
