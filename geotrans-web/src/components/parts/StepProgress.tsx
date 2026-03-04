import clsx from "clsx";

export interface Step {
  title: string;
  description: string;
}

interface StepProgressProps {
  steps: Step[];
}

export default function StepProgress({ steps }: StepProgressProps) {
  return (
    <div className="relative mx-auto w-full max-w-6xl">
      {/* MOBILE: vertical timeline */}
      <div className="relative md:hidden">
        {/* left rail */}
        <span
          aria-hidden
          className="absolute left-[20px] top-2 bottom-2 w-px bg-br-default"
        />

        <div className="space-y-6">
          {steps.map((step, index) => {
            const n = index + 1;

            return (
              <div key={n} className="relative flex gap-4">
                {/* node */}
                <div
                  className={clsx(
                    "relative z-10 mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full",
                    "bg-white border border-black/10",
                    "shadow-[0_14px_40px_-32px_rgba(0,0,0,0.35)]"
                  )}
                >
                  <span className="text-sm font-semibold text-tx-primary">{n}</span>
                </div>

                {/* content */}
                <div
                  className={clsx(
                    "flex-1 rounded-[--radius-card] bg-white",
                    "border border-black/10",
                    "px-5 py-4",
                    "shadow-[0_18px_55px_-48px_rgba(0,0,0,0.22)]"
                  )}
                >
                  <div className="text-[15px] font-semibold leading-snug text-tx-primary">
                    {step.title}
                  </div>
                  <div className="mt-1.5 text-[14px] leading-relaxed text-tx-secondary">
                    {step.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* DESKTOP: horizontal timeline */}
      <div className="relative hidden md:block">
        {/* background line */}
        <div className="absolute left-[10%] right-[10%] top-[22px] h-px bg-br-default" />

        <div className="grid grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => {
            const n = index + 1;

            return (
              <div key={n} className="relative flex flex-col items-center">
                {/* node */}
                <div
                  className={clsx(
                    "relative z-10 flex h-11 w-11 items-center justify-center rounded-full",
                    "bg-white border border-black/10",
                    "shadow-[0_14px_40px_-32px_rgba(0,0,0,0.35)]"
                  )}
                >
                  <span className="text-sm font-semibold text-tx-primary">{n}</span>
                </div>

                {/* card */}
                <div
                  className={clsx(
                    "mt-5 w-full rounded-[--radius-card] bg-white",
                    "border border-black/10",
                    "px-6 py-5",
                    "shadow-[0_18px_55px_-48px_rgba(0,0,0,0.24)]",
                    "transition duration-200 hover:-translate-y-[2px] hover:shadow-[0_26px_80px_-58px_rgba(0,0,0,0.34)]",
                    "hover:border-accent/25 hover:ring-2 hover:ring-accent/10"
                  )}
                >
                  <div className="text-[15px] font-semibold leading-snug text-tx-primary">
                    {step.title}
                  </div>
                  <div className="mt-2 text-[14px] leading-relaxed text-tx-secondary">
                    {step.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
