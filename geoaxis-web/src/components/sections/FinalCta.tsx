import { FaEnvelope, FaPhone } from "react-icons/fa";
import type { ReactNode } from "react";

import { Section } from "@/components/layout/Section";
import { CtaButton } from "@/components/parts/CtaButton";
import { siteContent } from "@/config/site-content";

function ContactAction({
  href,
  icon,
  label,
  value,
}: {
  href: string;
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <a
      href={href}
      className="group flex items-center gap-4 py-3 transition"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-accent transition group-hover:bg-white/14">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-tx-inverse/45">
          {label}
        </span>
        <span className="mt-1 block wrap-break-word text-base font-semibold text-tx-inverse/86 transition group-hover:text-accent md:text-lg">
          {value}
        </span>
      </span>
    </a>
  );
}

export function FinalCta() {
  const { phone, email } = siteContent.contacts;

  return (
    <Section tone="brand" className="border-t border-white/10">
      <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(22rem,0.72fr)] lg:gap-14">
        <div className="max-w-2xl">
          <p className="typo-kicker inline-block border-b border-accent/40 pb-2 text-accent">
            Контакт
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-[1.12] text-tx-inverse md:text-4xl">
            Имате нужда от <span className="text-accent">геодезическа услуга?</span>
          </h2>
          <p className="mt-4 max-w-xl text-base leading-8 text-tx-inverse/72 md:text-lg">
            Свържете се с нас за консултация. Ще разгледаме случая и ще ви
            насочим към правилната услуга, документи и следваща стъпка.
          </p>
        </div>

        <div className="lg:justify-self-end lg:w-full lg:max-w-md">
          <div className="grid gap-1">
            <ContactAction
              href={`tel:${phone}`}
              icon={<FaPhone className="h-4 w-4" />}
              label="Телефон"
              value={phone}
            />
            <ContactAction
              href={`mailto:${email}`}
              icon={<FaEnvelope className="h-4 w-4" />}
              label="Имейл"
              value={email}
            />
          </div>

          <div className="mt-5 border-t border-white/14 pt-5">
            <CtaButton href="/contacts" size="lg" className="w-full sm:w-auto">
              Изпрати запитване
            </CtaButton>
            <p className="mt-3 max-w-sm text-sm leading-6 text-tx-inverse/55">
              Използвайте формата, ако искате да добавите повече детайли или файлове.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
