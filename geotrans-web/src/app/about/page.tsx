// app/za-nas/page.tsx  (or components/AboutUs.tsx)

import Link from "next/link";
import Image from "next/image";
import { FaCheckCircle, FaAward, FaMapMarkedAlt, FaUsers } from "react-icons/fa";

export default function AboutUs() {
  return (
    <main className="relative min-h-screen">
      {/* Hero Section with topographic / map background */}
      <section className="relative isolate pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/topo-map-light.jpg)" }} // use your contour/map image
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            За нас
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-200">
            GeoTrans – прецизност и надеждност в геодезията и кадастъра от години.
          </p>
        </div>
      </section>

      {/* Story / History */}
      <section className="py-16 md:py-24 bg-(--bg-section)">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-(--text-primary) sm:text-4xl">
                Нашата история
              </h2>
              <div className="mt-6 space-y-6 text-lg text-(--text-secondary)">
                <p>
                  GeoTrans е създадена през [година, напр. 2015] от екип геодезисти с дългогодишен опит в кадастрални и инженерни заснемания. Започнахме с малки проекти в [регион/град], а днес работим по обекти от национално значение – от регулации на парцели до големи инфраструктурни проекти.
                </p>
                <p>
                  Нашата мисия е проста: да предоставяме точни, бързи и коректни геодезически услуги, които спестяват време и пари на нашите клиенти и предотвратяват скъпи грешки.
                </p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-auto">
              <Image
                src="/images/team-field.jpg" // photo of team on site or equipment
                alt="Екипът на GeoTrans на терен"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 md:py-24 bg-(--color-nav)/5 border-t border-b border-(--color-border-light)">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-(--text-primary) sm:text-4xl">
              Нашите ценности
            </h2>
            <p className="mt-4 text-lg text-(--text-secondary) max-w-3xl mx-auto">
              Всичко, което правим, се ръководи от тези принципи
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaCheckCircle className="h-10 w-10 text-(--color-accent)" />,
                title: "Прецизност",
                desc: "Използваме най-съвременна техника (GNSS, тотални станции, лазерно сканиране) и двойна проверка на всяко измерване.",
              },
              {
                icon: <FaMapMarkedAlt className="h-10 w-10 text-(--color-accent)" />,
                title: "Скорост",
                desc: "Знаем колко е важно времето – затова оптимизираме процесите и доставяме резултати в договорените срокове.",
              },
              {
                icon: <FaUsers className="h-10 w-10 text-(--color-accent)" />,
                title: "Партньорство",
                desc: "Работим като част от вашия екип – с разбиране към проекта и пълна прозрачност.",
              },
            ].map((value, i) => (
              <div
                key={i}
                className="bg-(--bg-surface) p-8 rounded-2xl shadow-lg border border-(--color-border-light) text-center hover:shadow-xl transition-shadow"
              >
                <div className="mx-auto">{value.icon}</div>
                <h3 className="mt-6 text-xl font-semibold">{value.title}</h3>
                <p className="mt-4 text-(--text-secondary)">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats / Expertise Highlights */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Завършени проекта" },
              { number: "15+", label: "Години опит" },
              { number: "100%", label: "Точност на измерванията" },
              { number: "50+", label: "Доволни клиенти" },
            ].map((stat, i) => (
              <div key={i} className="p-6 bg-(--bg-muted)/50 rounded-xl border border-(--color-border-light)">
                <div className="text-4xl font-bold text-(--color-accent)">{stat.number}</div>
                <div className="mt-2 text-lg text-(--text-secondary)">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-(--color-nav)/10 border-t border-(--color-border-light)">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-(--text-primary) sm:text-4xl">
            Готови ли сте за точен проект?
          </h2>
          <p className="mt-6 text-lg text-(--text-secondary)">
            Свържете се с нас и нека обсъдим как можем да помогнем.
          </p>
          <div className="mt-10">
            <Link
              href="/contacts"
              className="inline-flex items-center gap-3 rounded-xl bg-(--color-btn-primary) px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-(--color-btn-primary-hover) hover:shadow-xl transition-all"
            >
              Изпратете запитване
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}