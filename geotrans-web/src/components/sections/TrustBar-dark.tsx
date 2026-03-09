import clsx from "clsx";
import {
  FaRegClock,
  FaRegFileLines,
  FaRegCircleCheck,
  FaShieldHalved,
} from "react-icons/fa6";

type TrustItem = {
  title: string;
  subtitle: string;
  Icon: React.ComponentType<{ className?: string }>;
};

const TRUST: TrustItem[] = [
  { title: "Ясни срокове", subtitle: "без изненади", Icon: FaRegClock },
  { title: "Готови документи", subtitle: "за институции", Icon: FaRegFileLines },
  { title: "Прецизност", subtitle: "всяко измерване", Icon: FaRegCircleCheck },
  { title: "Коректност", subtitle: "в комуникацията", Icon: FaShieldHalved },
];

export default function TrustBarLuxuryOlive({ className }: { className?: string }) {
  return (
    <section className={clsx("relative", className)}>
      {/* almost full-bleed shell */}
      <div className="relative left-1/2 w-[calc(100vw-24px)] -translate-x-1/2 sm:w-[calc(100vw-32px)] lg:w-[calc(100vw)]">
        <div
          className={clsx(
            "relative overflow-hidden",
            "border border-white/8",
            "bg-bg-nav/95 text-tx-inverse",
            "shadow-[0_30px_90px_-55px_rgba(0,0,0,0.45)]"
          )}
        >
          {/* top accent strip */}
          <div className="absolute inset-x-0 top-0 h-[3px] bg-linear-to-r from-transparent via-accent/50 to-transparent" />

          {/* soft inner glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-90"
            style={{
              background: `
                radial-gradient(circle at 12% 18%, color-mix(in srgb, var(--color-accent) 18%, transparent) 0%, transparent 28%),
                radial-gradient(circle at 88% 82%, color-mix(in srgb, var(--color-accent) 12%, transparent) 0%, transparent 30%),
                linear-gradient(180deg, color-mix(in srgb, white 4%, transparent), transparent 40%)
              `,
            }}
          />

          {/* very subtle technical grid */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
              maskImage: "radial-gradient(circle at center, black 35%, transparent 85%)",
              WebkitMaskImage:
                "radial-gradient(circle at center, black 35%, transparent 85%)",
            }}
          />

          <div className="container-page relative">
            <div
              className={clsx(
                "grid",
                "grid-cols-1 min-[560px]:grid-cols-2 lg:grid-cols-4"
              )}
            >
              {TRUST.map((t, i) => (
                <div
                  key={i}
                  className={clsx(
                    "flex items-center gap-4 px-5 py-5 sm:px-6 sm:py-6 lg:px-7",
                    "min-h-[104px]",
                    "border-white/10",
                    i !== TRUST.length - 1 && "lg:border-r",
                    i < 2 && "min-[560px]:border-b lg:border-b-0"
                  )}
                >
                  <div
                    className={clsx(
                      "shrink-0 inline-flex h-11 w-11 items-center justify-center rounded-xl",
                      "bg-white/8 ring-1 ring-white/12",
                      "text-accent",
                      "shadow-[0_10px_24px_-18px_rgba(0,0,0,0.30)]"
                    )}
                  >
                    <t.Icon className="h-[18px] w-[18px]" />
                  </div>

                  <div className="min-w-0">
                    <div className="text-[14px] sm:text-[15px] font-semibold leading-snug text-tx-inverse">
                      {t.title}
                    </div>
                    <div className="mt-1 text-[13px] leading-snug text-white/65">
                      {t.subtitle}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
