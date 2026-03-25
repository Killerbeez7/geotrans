import clsx from "clsx";
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
    title: "Ясни срокове",
    subtitle: "Реалистични очаквания и предварително уточнени етапи.",
    Icon: FaRegClock,
  },
  {
    title: "Подредени документи",
    subtitle: "Съдействие при подготовка за институции и последващи действия.",
    Icon: FaRegFileLines,
  },
  {
    title: "Прецизна работа",
    subtitle: "Внимание към всяко измерване и сигурност в крайния резултат.",
    Icon: FaRegCircleCheck,
  },
  {
    title: "Коректна комуникация",
    subtitle: "Ясно обяснение на процеса, нужните материали и следващите стъпки.",
    Icon: FaShieldHalved,
  },
];

export default function TrustBar({ className }: { className?: string }) {
  return (
    <section
      className={clsx("relative overflow-hidden bg-bg-page py-14 md:py-16", className)}
    >
      <div className="container-page">
        <div className="mb-7 max-w-3xl md:mb-8">
          <p className="typo-kicker text-accent">Как работим</p>
          <h2 className="mt-3 typo-h3 text-tx-primary">
            Ясен процес и надежден подход във всяка стъпка
          </h2>
          <p className="mt-3 typo-body text-tx-secondary">
            Работим с внимание към точността, документацията и комуникацията, така че да
            получите не само измерване, а и яснота какво следва.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST.map((t) => (
            <article
              key={t.title}
              className={clsx(
                "group rounded-[24px] border border-br-light",
                "bg-bg-section p-5 transition-all duration-300",
                "hover:-translate-y-0.5 hover:border-white/15"
              )}
            >
              <div
                className={clsx(
                  "flex h-11 w-11 items-center justify-center rounded-xl",
                  "bg-accent/10 text-accent ring-1 ring-accent/15"
                )}
              >
                <t.Icon className="h-[18px] w-[18px]" />
              </div>

              <div className="mt-4">
                <h3 className="text-[15px] font-semibold leading-tight text-tx-primary">
                  {t.title}
                </h3>

                <p className="mt-2 text-[13px] leading-6 text-tx-muted">{t.subtitle}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
