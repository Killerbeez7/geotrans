import Link from "next/link";
import { SERVICE_LINKS } from "../config/ServicesConfig";

export default function Home() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      {/* Hero */}
      <section className="rounded-2xl bg-white p-6 shadow-sm">
        <p className="text-sm font-medium text-text-secondary">
          София + Софийска област
        </p>

        <h1 className="mt-2 text-3xl font-semibold leading-tight">
          Геодезически и кадастрални услуги
        </h1>

        <p className="mt-3 text-text-secondary">
          GeoTrans предлага геодезическо заснемане, трасиране, кадастър, вертикална
          планировка и проектиране – с ясна комуникация и реални срокове.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/contacts"
            className="rounded-lg bg-btn-primary px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
          >
            Запитване
          </Link>
          <Link
            href="/services"
            className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-link shadow-sm ring-1 ring-black/10 hover:bg-gray-50"
          >
            Виж услуги
          </Link>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <Badge title="Точност" text="Професионален подход и контрол." />
          <Badge title="Срокове" text="Работа с ясни стъпки и комуникация." />
          <Badge title="Документи" text="Материали, готови за институции." />
        </div>
      </section>

      {/* Services */}
      <section className="mt-10">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold">Услуги</h2>
            <p className="mt-2 text-text-secondary">
              Фокус върху реално предлаганите услуги – без излишни обещания.
            </p>
          </div>

          <Link
            href="/services"
            className="hidden rounded-lg px-3 py-2 text-sm font-semibold text-link ring-1 ring-black/10 hover:bg-white sm:inline-flex"
          >
            Всички услуги →
          </Link>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {SERVICE_LINKS.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="rounded-2xl bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-start gap-3">
                <div className="text-2xl">{s.icon ?? "•"}</div>
                <div>
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                  <p className="mt-1 text-sm text-text-secondary">{s.slug}</p>
                  <p className="mt-3 text-sm text-link">Детайли →</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-4 sm:hidden">
          <Link
            href="/services"
            className="inline-flex rounded-lg px-3 py-2 text-sm font-semibold text-link ring-1 ring-black/10 hover:bg-white"
          >
            Всички услуги →
          </Link>
        </div>
      </section>

      {/* How it works */}
      <section className="mt-10 rounded-2xl bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold">Как работим</h2>
        <p className="mt-2 text-text-secondary">
          Прост процес, без губене на време.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <Step
            n="01"
            title="Запитване"
            text="Изпращате кратко описание + адрес/идентификатор."
          />
          <Step
            n="02"
            title="Оферта"
            text="Уточняваме обхват и срокове, даваме ясна цена."
          />
          <Step
            n="03"
            title="Изпълнение"
            text="Извършваме услугата и предоставяме готови материали."
          />
        </div>
      </section>

      {/* Coverage + CTA */}
      <section className="mt-10 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Работен обхват</h2>
          <p className="mt-2 text-text-secondary">
            София и Софийска област. За други райони – по договаряне според обекта
            и графика.
          </p>

          <div className="mt-5 flex flex-wrap gap-2 text-sm">
            <Pill>София</Pill>
            <Pill>Софийска област</Pill>
            <Pill>По договаряне</Pill>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Готови ли сте да започнем?</h2>
          <p className="mt-2 text-text-secondary">
            Пишете ни какво ви трябва. Отговорът е кратък, конкретен и по същество.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/contacts"
              className="rounded-lg bg-btn-primary px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
            >
              Запитване
            </Link>
            <Link
              href="/gallery"
              className="rounded-lg px-4 py-2 text-sm font-semibold text-link ring-1 ring-black/10 hover:bg-gray-50"
            >
              Виж галерия
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery preview (simple) */}
      <section className="mt-10 rounded-2xl bg-white p-6 shadow-sm">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold">Галерия</h2>
            <p className="mt-2 text-text-secondary">
              Примери от изпълнени обекти (снимки/визуализации).
            </p>
          </div>
          <Link
            href="/gallery"
            className="rounded-lg px-3 py-2 text-sm font-semibold text-link ring-1 ring-black/10 hover:bg-gray-50"
          >
            Към галерия →
          </Link>
        </div>

        {/* Placeholder cards until you add real images */}
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <GalleryPlaceholder />
          <GalleryPlaceholder />
          <GalleryPlaceholder />
        </div>
      </section>
    </div>
  );
}

function Badge({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-xl bg-gray-50 p-4 ring-1 ring-black/5">
      <p className="text-sm font-semibold">{title}</p>
      <p className="mt-1 text-sm text-text-secondary">{text}</p>
    </div>
  );
}

function Step({ n, title, text }: { n: string; title: string; text: string }) {
  return (
    <div className="rounded-xl bg-gray-50 p-4 ring-1 ring-black/5">
      <p className="text-xs font-semibold text-text-secondary">{n}</p>
      <p className="mt-1 font-semibold">{title}</p>
      <p className="mt-1 text-sm text-text-secondary">{text}</p>
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-text-secondary ring-1 ring-black/5">
      {children}
    </span>
  );
}

function GalleryPlaceholder() {
  return (
    <div className="aspect-[4/3] rounded-2xl bg-gray-100 ring-1 ring-black/5">
      <div className="flex h-full items-center justify-center text-sm text-text-secondary">
        Снимка (скоро)
      </div>
    </div>
  );
}
