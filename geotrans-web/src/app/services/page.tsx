// app/uslugi/page.tsx  (or wherever your Services page lives)

import Link from "next/link";
import { SERVICE_LINKS } from "../../config/ServicesConfig"; // assuming this exports array of { slug, title, description, icon? }

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen bg-(--bg-page)">
      {/* Optional subtle background for depth – matches your map/contour style */}
      <div
        className="absolute inset-0 -z-10 opacity-5 pointer-events-none"
        style={{
          backgroundImage: "url(/images/topo-pattern-light.svg)", // subtle contour lines if you have one
          backgroundSize: "cover",
        }}
      />

      <section className="pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-(--text-primary)">
              Наши услуги
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-(--text-secondary)">
              GeoTrans предлага пълен спектър от геодезически и кадастрални услуги в София и Софийска област – с прецизност, бързина и професионализъм.
            </p>
          </div>

          {/* Services Grid */}
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICE_LINKS.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className={`
                  group relative rounded-2xl bg-(--bg-surface) p-6 sm:p-8
                  border border-(--color-border-light) shadow-sm
                  hover:shadow-xl hover:border-(--color-accent)/30
                  transition-all duration-300 ease-out
                  overflow-hidden
                `}
                aria-label={`Разгледайте детайли за ${service.title}`}
              >
                {/* Optional subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-(--color-accent)/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative flex flex-col h-full">
                  {/* Icon / Emoji */}
                  <div className="text-4xl sm:text-5xl mb-5 text-(--color-accent)">
                    {service.icon ?? "📐"}
                  </div>

                  <h2 className="text-xl sm:text-2xl font-semibold text-(--text-primary) group-hover:text-(--color-accent) transition-colors">
                    {service.title}
                  </h2>

                  <p className="mt-4 text-base text-(--text-secondary) flex-grow">
                    {service.description}
                  </p>

                  <div className="mt-6 flex items-center text-sm font-medium text-(--color-accent) group-hover:underline">
                    Вижте повече →
                  </div>
                </div>
              </Link>
            ))}
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
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}