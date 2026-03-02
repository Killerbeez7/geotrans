import Link from "next/link";
import { siteContent } from "@/config/site-content";

export default function ServicesPage() {
  const items = siteContent.services.items;

  return (
    <main className="relative min-h-screen bg-(--bg-page)">
      <div
        className="absolute inset-0 -z-10 opacity-5 pointer-events-none"
        style={{
          backgroundImage: "url(/images/topo-pattern-light.svg)",
          backgroundSize: "cover",
        }}
      />

      <section className="pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-(--text-primary)">
              {siteContent.services.title}
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-(--text-secondary)">
              {siteContent.services.subtitle}
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((service) => {
              const href = `/services/${service.slug}`;

              return (
                <Link
                  key={service.id}
                  href={href}
                  className={`
                    group relative rounded-2xl bg-(--bg-surface) p-6 sm:p-8
                    border border-(--color-border-light) shadow-sm
                    hover:shadow-xl hover:border-accent/30
                    transition-all duration-300 ease-out
                    overflow-hidden
                  `}
                  aria-label={`Разгледайте детайли за ${service.title}`}
                >
                  <div className="absolute inset-0 bg-linear-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative flex flex-col h-full">
                    <div className="text-4xl sm:text-5xl mb-5 text-(--color-accent)">
                      {service.icon ?? "📐"}
                    </div>

                    <h2 className="text-xl sm:text-2xl font-semibold text-(--text-primary) group-hover:text-(--color-accent) transition-colors">
                      {service.title}
                    </h2>

                    <p className="mt-4 text-base text-(--text-secondary) grow">
                      {service.description}
                    </p>

                    <div className="mt-6 flex items-center text-sm font-medium text-(--color-accent) group-hover:underline">
                      Вижте повече →
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-20 text-center">
            <p className="text-lg text-(--text-secondary) mb-8">
              Не намирате точната услуга? Свържете се с нас за индивидуално запитване.
            </p>

            <Link
              href="/contacts"
              className={`
                inline-flex items-center gap-3 rounded-xl
                bg-(--color-btn-primary) px-8 py-4 text-lg font-semibold text-white
                shadow-lg hover:bg-(--color-btn-primary-hover) hover:shadow-xl
                transition-all duration-300 hover:scale-[1.03]
              `}
            >
              <span>Изпратете запитване</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
