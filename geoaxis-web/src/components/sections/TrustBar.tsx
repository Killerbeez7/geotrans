import clsx from "clsx";
import { Section } from "@/components/layout/Section";
import {
  FaRegClock,
  FaRegFileLines,
  FaRegCircleCheck,
  FaShieldHalved,
} from "react-icons/fa6";
import type { ComponentType } from "react";

type TrustItem = {
  title: string;
  subtitle: string;
  Icon: ComponentType<{ className?: string }>;
};

const TRUST: TrustItem[] = [
  {
    title: "Точни срокове",
    subtitle: "Реалистични срокове и ясно разписани етапи.",
    Icon: FaRegClock,
  },
  {
    title: "Подредени документи",
    subtitle: "Съдействие за нужните документи и следващи стъпки.",
    Icon: FaRegFileLines,
  },
  {
    title: "Прецизна работа",
    subtitle: "Прецизност във всяко измерване и сигурност в резултата.",
    Icon: FaRegCircleCheck,
  },
  {
    title: "Ясна комуникация",
    subtitle: "Ясно обяснение на процеса без излишно объркване.",
    Icon: FaShieldHalved,
  },
];

export default function TrustBar({ className }: { className?: string }) {
  return (
    <Section
      tone="muted"
      className={clsx("relative overflow-hidden border-y border-br-light/80", className)}
    >
      {/* atmosphere */}
      <div
        aria-hidden
        className={clsx(
          "pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(215,175,69,0.08),transparent_26%)",
          "radial-gradient(circle_at_bottom_right,rgba(215,175,69,0.05),transparent_30%)]"
        )}
      />

      <div
        aria-hidden
        className={clsx(
          "pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,var(--color-br-light)_1px,transparent_1px)",
          "linear-gradient(to_bottom,var(--color-br-light)_1px,transparent_1px)] [background-size:38px_38px]"
        )}
      />

      {/* HEADER */}
      <header className="mx-auto mb-8 max-w-3xl text-center md:mb-10">
        <p className="typo-kicker">Подход</p>

        <h2 className="mt-3 typo-h2">Яснота и сигурност още от първата стъпка</h2>

        <p className="mx-auto mt-4 max-w-2xl typo-subtitle">
          Работим с внимание към точността, документацията и комуникацията, така че да
          получите не само измерване, а и спокойствие какво следва.
        </p>
      </header>

      {/* GRID */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {TRUST.map((t) => (
          <article
            key={t.title}
            className={clsx(
              "group relative h-full rounded-[26px] border",
              "border-br-light bg-white/75 backdrop-blur-[6px]",
              "p-5",
              "shadow-[0_10px_24px_-18px_rgba(15,23,42,0.14)]",
              "transition-all duration-300",
              "hover:-translate-y-0.5 hover:border-br-default hover:bg-white/88"
            )}
          >
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-br-accent-soft bg-accent/10 text-accent">
                <t.Icon className="h-[18px] w-[18px]" />
              </div>

              <div>
                <h3 className="text-[15px] font-semibold text-tx-primary">{t.title}</h3>

                <p className="mt-2 text-[13px] leading-6 text-tx-secondary">
                  {t.subtitle}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
