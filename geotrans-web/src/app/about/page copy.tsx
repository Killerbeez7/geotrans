import Link from "next/link";
import Image from "next/image";
import { FaCheckCircle, FaMapMarkedAlt, FaUsers } from "react-icons/fa";
import { Stats } from "../../components/sections/StatsSection";

export default function About() {
    return (
        <main className="relative min-h-screen">
            {/* Hero Section with topographic / map background */}
            <section className="relative isolate pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
                <div className="absolute inset-0 -z-10 bg-contain bg-center bg-no-repeat bg-[url('/images/element-bg.png')]" />

                <div className="absolute inset-0 -z-10 bg-linear-to-b from-black/60 via-black/50 to-black/70" />

                <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                        За нас
                    </h1>
                    <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-200 leading-relaxed">
                        GeoTrans е компания за професионални геодезически и кадастрални
                        услуги, която комбинира модерна технология, експертен опит и
                        безкомпромисна точност. Работим с частни клиенти, инвеститори и
                        строителни компании в София област.
                    </p>
                    {/* <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-200 leading-relaxed">
                        Ние измерваме с точност. Планираме с отговорност. Изпълняваме с
                        увереност. GeoTrans е вашият надежден партньор в геодезията и
                        кадастъра.
                    </p> */}
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
                                    GeoTrans е основана през 2015 г. от екип лицензирани
                                    геодезисти с дългогодишен практически опит в
                                    кадастъра, регулационните процедури и инженерната
                                    геодезия. Още от самото начало поставихме фокус върху
                                    прецизността, прозрачността и коректността към
                                    клиента.
                                </p>
                                <p>
                                    Днес реализираме проекти с различен мащаб – от
                                    заснемане и трасиране на частни имоти до участие в
                                    инфраструктурни и инвестиционни проекти. Работим с
                                    модерна техника и софтуер, което ни позволява да
                                    гарантираме надеждни резултати във всеки етап от
                                    процеса.
                                </p>
                                {/* <p>
                                    GeoTrans е създадена през [година, напр. 2015] от екип
                                    геодезисти с дългогодишен опит в кадастрални и
                                    инженерни заснемания. Започнахме с малки проекти в
                                    [регион/град], а днес работим по обекти от национално
                                    значение – от регулации на парцели до големи
                                    инфраструктурни проекти.
                                </p>
                                <p>
                                    Нашата мисия е проста: да предоставяме точни, бързи и
                                    коректни геодезически услуги, които спестяват време и
                                    пари на нашите клиенти и предотвратяват скъпи грешки.
                                </p> */}
                            </div>
                        </div>

                        <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-4/3 lg:aspect-auto">
                            <Image
                                src="/images/tripod.jpg"
                                alt="Екипът на GeoTrans на терен"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
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
                                icon: (
                                    <FaCheckCircle className="h-10 w-10 text-(--color-accent)" />
                                ),
                                title: "Прецизност",
                                // desc: "Използваме най-съвременна техника (GNSS, тотални станции, лазерно сканиране) и двойна проверка на всяко измерване.",
                                desc: "Работим с GNSS системи, тотални станции и съвременен софтуер за обработка на данни. Всяко измерване преминава през вътрешен контрол за гарантирана точност.",
                            },
                            {
                                icon: (
                                    <FaMapMarkedAlt className="h-10 w-10 text-(--color-accent)" />
                                ),
                                title: "Скорост",
                                // desc: "Знаем колко е важно времето - затова оптимизираме процесите и доставяме резултати в договорените срокове.",
                                desc: "Оптимизирали сме процесите си така, че да осигурим бързо изпълнение без компромис в качеството. Спазването на срокове е наш стандарт.",
                            },
                            {
                                icon: (
                                    <FaUsers className="h-10 w-10 text-(--color-accent)" />
                                ),
                                title: "Партньорство",
                                // desc: "Работим като част от вашия екип - с разбиране към проекта и пълна прозрачност.",
                                desc: "Изграждаме дългосрочни отношения, базирани на доверие, ясна комуникация и професионална отговорност към всеки проект.",
                            },
                        ].map((value, i) => (
                            <div
                                key={i}
                                className="bg-(--bg-surface) p-8 rounded-2xl shadow-lg border border-(--color-border-light) text-center hover:shadow-xl transition-shadow"
                            >
                                <div className="mx-auto">{value.icon}</div>
                                <h3 className="mt-6 text-xl font-semibold">
                                    {value.title}
                                </h3>
                                <p className="mt-4 text-(--text-secondary)">
                                    {value.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats */}
            <Stats />

            {/* CTA */}
            <section className="py-16 md:py-24 bg-(--color-nav)/10 border-t border-(--color-border-light)">
                <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-(--text-primary) sm:text-4xl">
                        Готови ли сте да започнем?
                    </h2>
                    <p className="mt-6 text-lg text-(--text-secondary)">
                        Нуждаете се от геодезически услуги или консултация? Свържете се с
                        нас и ще получите професионално съдействие още днес.
                    </p>

                    {/* <p className="mt-6 text-lg text-(--text-secondary)">
                        Свържете се с нас и нека обсъдим как можем да помогнем.
                    </p> */}
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
