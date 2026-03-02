import { siteContent } from "@/config/site-content";

export function Stats() {
  const ABOUT_STATS = siteContent.stats;

  return (
    <section className="relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] w-screen py-20 md:py-32 overflow-hidden border-y border-br-light">
      {/* Watermark */}
      {/* <div className="absolute inset-0 hidden sm:flex items-center justify-center pointer-events-none select-none z-0">
        <span className="text-[20vw] font-black uppercase tracking-tighter text-tx-muted/15 ">
          GeoTrans
        </span>
      </div> */}

      {/* Mask */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `radial-gradient(circle at center, var(--color-bg-section) 0%, transparent 100%)`,
          opacity: "0.9",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-12 sm:gap-y-16">
          {ABOUT_STATS.map((stat, i) => (
            <div
              key={i}
              className={`relative px-6 flex flex-col items-center text-center md:items-start md:text-left group`}
            >
              <div className="relative pb-4 inline-block">
                <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-semibold tracking-tighter text-tx-primary transition-colors group-hover:text-accent">
                  {stat.number}
                </span>
                <span className="mt-2 block text-xs md:text-sm font-bold uppercase tracking-[0.2em]">
                  {stat.label}
                </span>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 h-1 w-14 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-center md:origin-left duration-500 ease-out" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
