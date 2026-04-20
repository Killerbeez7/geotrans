import { CtaButton } from "@/components/parts/CtaButton";
import { siteContent } from "@/config/site-content";
import { FaPhone } from "react-icons/fa";
import { Section } from "../layout/Section";

export function FinalCta() {
  const { phone } = siteContent.contacts;

  return (
    <Section tone="brand" className="border-t border-br-light/70">
      <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        <div className="max-w-2xl">
          <p className="typo-kicker text-accent">Контакт</p>

          <h2 className="mt-3 typo-h2 text-tx-inverse">
            Имате нужда от <span className="text-accent">геодезическа услуга?</span>
          </h2>

          <p className="typo-body mt-4 max-w-xl text-tx-inverse/74">
            Свържете се с нас за консултация. Ще разгледаме вашия случай и ще предложим
            най-подходящото решение за вашия имот или проект.
          </p>
        </div>

        <div className="flex flex-col items-start gap-4 lg:items-end">
          <CtaButton href="/contacts" size="lg">
            Изпрати запитване
          </CtaButton>

          <div className="flex items-center gap-3 pl-3 pr-0 md:pl-0 md:pr-10">
            <FaPhone className="text-accent" />
            <span className="typo-body font-medium text-tx-inverse/74">{phone}</span>
          </div>
        </div>
      </div>
    </Section>
  );
}
