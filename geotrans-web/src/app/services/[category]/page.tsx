import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { serviceCategories } from "@/config/services/categories";

type Props = {
  params: Promise<{
    category: string;
  }>;
};

export default async function CategoryPage({ params }: Props) {
  const resolvedParams = await params;
  const categorySlug = resolvedParams.category;
  console.log("Category slug from URL:", categorySlug);
  const category = serviceCategories.find((cat) => cat.slug === categorySlug);

  if (!category) {
    console.log("Category not found for slug:", categorySlug);
    return notFound();
  }

  return (
    <main className="bg-bg-page pb-16 pt-28">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-black">
        <div className="relative min-h-[40dvh] flex items-end">
          {/* Image */}
          <Image
            src={category.heroImage ?? category.thumbnail}
            alt={category.title}
            fill
            priority
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Content */}
          <div className="container-page relative py-12 text-white">
            <p className="typo-kicker">{category.meta}</p>

            <h1 className="mt-3 typo-h2">{category.title}</h1>

            <p className="mt-4 max-w-2xl text-white/80">
              {category.longDescription ?? category.description}
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-10 md:py-14">
        <div className="container-page grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {category.services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${category.slug}/${service.slug}`}
              className="group relative overflow-hidden rounded-2xl bg-black"
            >
              {/* Image */}
              <Image
                src={service.thumbnail}
                alt={service.title}
                width={600}
                height={400}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/65" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-5 text-white">
                <p className="text-xs uppercase tracking-wider text-white/60">
                  {service.meta}
                </p>

                <h3 className="mt-1 text-lg font-semibold">{service.title}</h3>

                <p className="mt-2 text-sm text-white/80 line-clamp-2">
                  {service.description}
                </p>

                <div className="mt-3 text-xs font-semibold uppercase tracking-wide text-accent">
                  Детайли →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA BLOCK */}
      <section className="pb-10 md:pb-14">
        <div className="container-page">
          <div className="rounded-3xl border border-br-light bg-bg-surface p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-tx-primary">
              Не сте сигурни кое е подходящо?
            </h2>

            <p className="mt-3 max-w-2xl text-tx-secondary">
              Опишете накратко случая и ще получите насоки за правилната услуга и
              необходимите документи.
            </p>

            <Link
              href="/contacts"
              className="mt-6 inline-flex rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-tx-inverse"
            >
              Изпратете запитване
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
