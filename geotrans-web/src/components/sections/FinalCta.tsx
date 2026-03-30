import { CtaButton } from "@/components/parts/CtaButton";
import { siteContent } from "@/config/site-content";
import { FaPhone } from "react-icons/fa";
import clsx from "clsx";

export default function FinalCTA() {
  const { phone } = siteContent.contacts;

  return (
    <section
      className={clsx(
        "relative border-y border-br-default/70 bg-bg-soft py-18 sm:py-20 lg:py-24"
      )}
    >
      <div className="container-page grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="max-w-2xl">
          <p className="typo-kicker text-accent">Контакт</p>
          <h2 className="mt-3 typo-h2">
            Имате нужда от <span className="text-accent">геодезическа услуга?</span>
          </h2>

          <p className="mt-5 max-w-xl typo-body text-tx-secondary">
            Свържете се с нас за консултация. Ще разгледаме вашия случай и ще предложим
            най-подходящото решение за вашия имот или проект.
          </p>
        </div>

        <div className="flex flex-col items-start gap-5 lg:items-end">
          <CtaButton href="/contacts" size="lg">
            Свържете се с нас
          </CtaButton>

          <div className="flex items-center gap-3 text-tx-secondary">
            <FaPhone className="text-accent" />
            <span className="font-medium">{phone}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
