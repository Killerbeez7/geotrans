import Image from "next/image";
import { Section } from "../layout/Section";
import { LuClock, LuFileCheck, LuCrosshair, LuMessageSquare } from "react-icons/lu";

const TRUST = [
  {
    icon: LuClock,
    title: "Точни срокове",
    text: "Реалистични срокове и ясно разписани етапи.",
  },
  {
    icon: LuFileCheck,
    title: "Подредени документи",
    text: "Съдействие за нужните документи и следващи стъпки.",
  },
  {
    icon: LuCrosshair,
    title: "Прецизна работа",
    text: "Прецизност във всяко измерване и сигурност в резултата.",
  },
  {
    icon: LuMessageSquare,
    title: "Ясна комуникация",
    text: "Ясно обяснение на процеса без излишно объркване.",
  },
];

export function WhatWeDoSection() {
  return (
    <Section className="pt-16 pb-14 md:pt-20 md:pb-18" tone="muted">
      {/* Top: image + text */}
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="relative aspect-4/3 overflow-hidden border border-br-default rounded-3xl shadow-xl">
          <Image
            src="/images/more/plocha.jpg"
            // src="/images/whatwedo3.png"
            fill
            preload
            alt="Геодезическо заснемане"
            sizes="50vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-bg-muted/50 mix-blend-color" />
        </div>

        <div className="max-w-xl">
          <p className="typo-kicker mb-4 text-center md:text-left">Какво правим</p>
          <h2 className="typo-h2 text-center md:text-left">
            Прецизни геодезически
            <br className="hidden md:block" /> и кадастрални решения
          </h2>
          <p className="typo-body mt-5 text-center md:text-left">
            От заснемане и трасиране до кадастър и проектиране, работим по целия процес с
            фокус върху точност, ясна комуникация и надежден резултат.
          </p>
        </div>
      </div>

      {/* Bottom: trust cards */}
      <div className="mt-14 pt-10 border-t border-br-light grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {TRUST.map(({ icon: Icon, title, text }) => (
          <div
            key={title}
            className="rounded-2xl bg-bg-page border border-br-light p-5 flex gap-4 items-start"
          >
            <div className="shrink-0 mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10">
              <Icon className="h-4 w-4 text-accent" />
            </div>
            <div>
              <h3 className="text-[15px] font-semibold text-tx-primary">{title}</h3>
              <p className="mt-1 text-[13px] leading-relaxed text-tx-muted">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
