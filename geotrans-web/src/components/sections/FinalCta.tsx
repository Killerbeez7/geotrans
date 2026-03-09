import { CtaButton } from "@/components/parts/CtaButton";
import { siteContent } from "@/config/site-content";
import { FaPhone } from "react-icons/fa";

export default function FinalCTA() {
  const { phone } = siteContent.contacts;

  return (
    <section className="py-20 bg-bg-section ">
      <div className="container-page grid gap-10 lg:grid-cols-2 items-center">
        {/* Text */}
        <div>
          <h2 className="typo-h2 mb-6">
            Имате нужда от <span className="text-accent">геодезическа услуга?</span>
          </h2>

          <p className="typo-body text-tx-secondary max-w-xl">
            Свържете се с нас за консултация. Ще разгледаме вашия случай и ще предложим
            най-подходящото решение за вашия имот или проект.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-6 lg:justify-end items-start sm:items-center">
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
