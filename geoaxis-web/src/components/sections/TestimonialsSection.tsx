import { FaStar } from "react-icons/fa";
import { Section } from "@/components/layout/Section";
import { TestimonialsContent } from "@/config/content/testimonials";

const testimonials = [
  {
    name: "Иван Петров",
    role: "Частен клиент",
    text: "Работихме с GeoAxis за геодезическо заснемане на парцел преди започване на строеж. Работата беше свършена бързо и много професионално, а комуникацията беше ясна през целия процес.",
  },
  {
    name: "Мария Георгиева",
    role: "Архитект",
    text: "Отлично съдействие при изготвяне на необходимите геодезически данни за проект. Получихме точни материали и бърза реакция при всякакви въпроси.",
  },
  {
    name: "Николай Стоянов",
    role: "Инвеститор",
    text: "Работили сме с различни геодезисти, но при GeoAxis останахме най-доволни. Точност, коректност и много добро отношение към клиента.",
  },
];

export function TestimonialsSection({
  id,
  kicker,
  title,
  subtitle,
}: TestimonialsContent) {
  return (
    <Section id={id} tone="muted">
      <div className="mb-10 max-w-3xl sm:mb-12">
        <span className="typo-kicker inline-block border-b border-accent/40 pb-2">
          {kicker}
        </span>
        <h2 className="typo-h2 mt-2">{title}</h2>
        <p className="typo-subtitle mt-3">{subtitle}</p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((item) => (
          <div
            key={item.name}
            className="rounded-card border border-br-light bg-bg-page p-6 shadow-sm transition hover:border-br-accent-soft hover:shadow-md sm:p-7"
          >
            <div className="mb-4 flex gap-0.5 text-accent">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="h-3.5 w-3.5" />
              ))}
            </div>

            <p className="mb-6 text-[15px] leading-7 text-tx-secondary">
              &ldquo;{item.text}&rdquo;
            </p>

            <div>
              <p className="text-base font-semibold text-tx-primary">{item.name}</p>
              <p className="text-sm text-tx-muted">{item.role}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
