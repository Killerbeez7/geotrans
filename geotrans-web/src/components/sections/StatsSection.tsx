import { ABOUT_STATS } from "@/config/site-data";

ABOUT_STATS

export function Stats() {
    return (
        <section className="relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] w-screen py-20 md:py-32 overflow-hidden border-y border-(--color-border-light) bg-(--bg-section)">
            {/* Watermark */}
            <div className="absolute inset-0 hidden sm:flex items-center justify-center pointer-events-none select-none z-0">
                <span className="text-[20vw] font-black uppercase tracking-tighter text-(--gray-300) opacity-30">
                    GeoTrans
                </span>
            </div>

            {/* Mask */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    background: `radial-gradient(circle at center, var(--bg-section) 0%, transparent 100%)`,
                    opacity: "0.9",
                }}
            />

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-12 sm:gap-y-16">
                    {ABOUT_STATS.map((stat, i) => (
                        <div
                            key={i}
                            className={`relative px-6 flex flex-col items-center text-center md:items-start md:text-left group
                            ${i !== 3 ? "md:border-r border-(--color-border-light)" : ""}
                            border-b sm:border-b-0 pb-8 sm:pb-0 border-(--color-border-light) last:border-b-0
                            ${i % 2 === 0 ? "sm:border-r md:border-r-0" : ""}
                        `}
                        >
                            <div className="relative pb-4 inline-block">
                                <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-semibold tracking-tighter text-(--tx-primary) transition-colors group-hover:text-(--color-accent)">
                                    {stat.number}
                                </span>
                                <span className="mt-2 block text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-(--tx-secondary)">
                                    {stat.label}
                                </span>
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 h-1 w-14 bg-(--color-accent) scale-x-0 group-hover:scale-x-100 transition-transform origin-center md:origin-left duration-500 ease-out" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
