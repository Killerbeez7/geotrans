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
    <Section tone="muted">
      {/* Header — centered */}
      <div className="mx-auto max-w-2xl text-center mb-12">
        <p className="typo-kicker">Подход</p>
        <h2 className="typo-h2 mt-2">
          Яснота и сигурност
          <br className="hidden sm:block" /> още от първата стъпка
        </h2>
        <p className="typo-body mt-4">
          Работим с внимание към точността, документацията и комуникацията — така че да
          получите не само измерване, а и спокойствие какво следва.
        </p>
      </div>

      {/* Trust cards */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
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
