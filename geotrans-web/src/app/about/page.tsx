import Image from "next/image";
import { FaCheckCircle, FaMapMarkedAlt, FaUsers } from "react-icons/fa";
import { Stats } from "@/components/sections/StatsSection";
import { CtaButton } from "@/components/parts/CtaButton";

export default function About() {
  return (
    <main className="relative min-h-screen">
      <section className="relative isolate h-90 overflow-hidden">
        {/* Background image */}
        <div className="absolute top-0 inset-0 -z-20 bg-cover bg-center bg-no-repeat bg-[url('/images/sections/5.jpeg')]" />

        {/* Dark overlay */}
        <div className="absolute inset-0 -z-10 bg-linear-to-b from-black/70 via-black/60 to-black/80" />

        {/* Accent glow */}
        <div className="absolute top-1/2 left-1/2 -z-10 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/3 blur-3xl" />

        <div className="h-full mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-center justify-center text-center">
          <h1 className="typo-hero text-tx-inverse">За нас</h1>

          <p className="typo-lead mt-4 text-tx-inverse/90 text-balance">
            GeoTrans е компания за професионални геодезически и кадастрални услуги, която
            комбинира модерна технология, експертен опит и безкомпромисна точност. Работим
            с частни клиенти, инвеститори и строителни компании в цялата страна.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-bg-section">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="typo-h2">Нашата история</h2>

              <div className="mt-4 space-y-6 typo-lead">
                <p>
                  GeoTrans е основана през 2015 г. от екип лицензирани геодезисти с
                  дългогодишен практически опит в кадастъра, регулационните процедури и
                  инженерната геодезия. Още от самото начало поставихме фокус върху
                  прецизността, прозрачността и коректността към клиента.
                </p>

                <p>
                  Днес реализираме проекти с различен мащаб – от заснемане и трасиране на
                  частни имоти до участие в инфраструктурни и инвестиционни проекти.
                  Работим със съвременна техника и софтуер, което ни позволява да
                  гарантираме надеждни резултати във всеки етап от процеса.
                </p>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden ">
              <div className="relative aspect-4/3">
                <Image
                  src="/images/sections/about-element.png"
                  alt="Екипът на GeoTrans на терен"
                  fill
                  className="object-cover "
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-bg-nav/5 border-t border-b border-br-light">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="typo-h2">Нашите ценности</h2>
            <p className="mt-4 typo-lead mx-auto max-w-3xl text-tx-secondary">
              Всичко, което правим, се ръководи от тези принципи
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaCheckCircle className="h-10 w-10 text-accent" />,
                title: "Прецизност",
                desc: "Работим с GNSS системи, тотални станции и съвременен софтуер за обработка на данни. Всяко измерване преминава през вътрешен контрол за гарантирана точност.",
              },
              {
                icon: <FaMapMarkedAlt className="h-10 w-10 text-accent" />,
                title: "Скорост",
                desc: "Оптимизирали сме процесите си така, че да осигурим бързо изпълнение без компромис в качеството. Спазването на срокове е наш стандарт.",
              },
              {
                icon: <FaUsers className="h-10 w-10 text-accent" />,
                title: "Партньорство",
                desc: "Изграждаме дългосрочни отношения, базирани на доверие, ясна комуникация и професионална отговорност към всеки проект.",
              },
            ].map((value, i) => (
              <div
                key={i}
                className="group bg-bg-surface p-8 rounded-3xl backdrop-blur-sm shadow-xl border border-br-light text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
              >
                <div className="mx-auto transition-transform duration-300 group-hover:scale-110">
                  {value.icon}
                </div>

                <h3 className="mt-4 typo-h3">{value.title}</h3>
                <p className="mt-4 typo-body">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Stats />

      {/* ================= CTA ================= */}
      <section className="py-20 md:py-28 bg-bg-nav/10 border-t border-br-subtle">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="typo-h2">Не губете време, свържете се сега!</h2>

          <p className="mt-6 typo-body">
            Ще получите безплатна консултация и стъпки които да следвате. При нужда среща
            на живо.
          </p>

          <div className="mt-10">
            <CtaButton href="/contacts" size="lg">
              Запитване
            </CtaButton>
          </div>
        </div>
      </section>
    </main>
  );
}
