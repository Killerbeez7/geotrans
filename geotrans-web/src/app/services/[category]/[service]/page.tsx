import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { serviceCategories } from "@/config/services/categories";

type Props = {
  params: Promise<{
    category: string;
    service: string;
  }>;
};

export default async function ServiceDetailPage({ params }: Props) {
  const { category: categorySlug, service: serviceSlug } = await params;

  const category = serviceCategories.find((item) => item.slug === categorySlug);
  if (!category) return notFound();

  const service = category.services.find((item) => item.slug === serviceSlug);

  if (!service) return notFound();

  const heroImage = service.heroImage ?? service.thumbnail;
  const introText = service.longDescription ?? service.description;

  return (
    <main className="bg-bg-page pb-16 pt-28">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-black">
        <div className="relative min-h-[42dvh] md:min-h-[48dvh]">
          <Image
            src={heroImage}
            alt={service.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-black/20" />

          <div className="container-page relative flex min-h-[42dvh] md:min-h-[48dvh] items-end py-10 md:py-14">
            <div className="max-w-3xl text-white">
              <nav className="mb-5 text-sm text-white/65">
                <Link href="/" className="transition hover:text-white">
                  Начало
                </Link>
                <span className="mx-2">/</span>
                <Link href="/services" className="transition hover:text-white">
                  Услуги
                </Link>
                <span className="mx-2">/</span>
                <Link
                  href={`/services/${category.slug}`}
                  className="transition hover:text-white"
                >
                  {category.shortTitle ?? category.title}
                </Link>
              </nav>

              {service.meta && (
                <p className="typo-kicker text-white/80">{service.meta}</p>
              )}

              <h1 className="mt-3 typo-h2 text-white">{service.title}</h1>

              <p className="mt-4 max-w-2xl text-base leading-7 text-white/82 md:text-lg">
                {introText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-10 md:py-14">
        <div className="container-page grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
          <div className="space-y-6">
            {service.neededWhen && service.neededWhen.length > 0 && (
              <section className="rounded-3xl border border-br-light bg-bg-surface p-6 md:p-8">
                <h2 className="text-2xl font-semibold text-tx-primary">
                  Кога е подходящо
                </h2>
                <ul className="mt-4 space-y-3">
                  {service.neededWhen.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-tx-secondary">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                      <span className="leading-7">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {service.requiredDocs && service.requiredDocs.length > 0 && (
              <section className="rounded-3xl border border-br-light bg-bg-surface p-6 md:p-8">
                <h2 className="text-2xl font-semibold text-tx-primary">
                  Необходими документи
                </h2>
                <ul className="mt-4 space-y-3">
                  {service.requiredDocs.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-tx-secondary">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                      <span className="leading-7">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {service.deliverables && service.deliverables.length > 0 && (
              <section className="rounded-3xl border border-br-light bg-bg-surface p-6 md:p-8">
                <h2 className="text-2xl font-semibold text-tx-primary">
                  Какво получавате
                </h2>
                <ul className="mt-4 space-y-3">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-tx-secondary">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                      <span className="leading-7">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {service.processSteps && service.processSteps.length > 0 && (
              <section className="rounded-3xl border border-br-light bg-bg-surface p-6 md:p-8">
                <h2 className="text-2xl font-semibold text-tx-primary">Как протича</h2>
                <ol className="mt-5 grid gap-4 md:grid-cols-2">
                  {service.processSteps.map((step, index) => (
                    <li
                      key={step}
                      className="rounded-2xl border border-br-light bg-bg-page p-5"
                    >
                      <div className="flex items-center gap-3">
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-accent text-sm font-semibold text-tx-inverse">
                          {index + 1}
                        </span>
                        <p className="font-medium text-tx-primary">{step}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-28">
            <div className="rounded-3xl border border-br-light bg-bg-surface p-6 md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                {category.shortTitle ?? category.title}
              </p>

              <h2 className="mt-3 text-2xl font-semibold text-tx-primary">
                Нуждаете се от насоки?
              </h2>

              <p className="mt-3 leading-7 text-tx-secondary">
                Опишете накратко случая и ще получите насоки за подходящата услуга,
                необходимите документи и следващите стъпки.
              </p>

              <div className="mt-6 flex flex-col gap-3">
                <Link
                  href="/contacts"
                  className="inline-flex items-center justify-center rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-tx-inverse"
                >
                  Изпратете запитване
                </Link>

                <Link
                  href={`/services/${category.slug}`}
                  className="inline-flex items-center justify-center rounded-xl border border-br-light bg-bg-page px-5 py-3 text-sm font-semibold text-tx-primary transition hover:bg-bg-section"
                >
                  Назад към {category.shortTitle ?? category.title}
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
