"use client";
import { useEffect } from "react";
import Image from "next/image";
import clsx from "clsx";
import { siteContent } from "@/config/site-content";

export default function WhyChooseUs() {
  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0", "scale-100");
            entry.target.classList.remove("opacity-0", "translate-y-10", "scale-95");
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll(".reveal-img").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-bg-section py-24 overflow-hidden">
      <div className="container-page grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Content */}
        <div className="reveal-img opacity-0 translate-y-10 transition-all duration-700 max-w-xl text-center md:text-left">
          <h2 className="typo-h2 mb-6 text-balance">
            Защо да изберете <span className="text-accent">{siteContent.brand.name}</span>
          </h2>

          <div className="space-y-5">
            <p className="typo-body text-tx-secondary leading-relaxed">
              Работим в областта на геодезията от 2008 година и през годините сме
              преминали през множество различни казуси и ситуации на терен.
            </p>

            <p className="typo-body text-tx-secondary leading-relaxed">
              Този опит ни е помогнал да изградим подреден и ефективен начин на работа,
              който дава точност, яснота и сигурност във всяка стъпка от процеса.
            </p>

            <p className="typo-body text-tx-secondary leading-relaxed">
              Използваме съвременна геодезическа техника и софтуер, които позволяват
              измервания с изключително висока точност и надеждни резултати за всеки
              обект.
            </p>
          </div>
        </div>

        {/* Images */}
        <div className="relative mx-auto w-full max-w-2xl">
          {/* Main image */}
          <div
            className={clsx(
              "reveal-img opacity-0 translate-y-10 scale-95 transition-all duration-1000 ease-out-expo",
              "relative overflow-hidden rounded-[28px] shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
            )}
          >
            <div className="relative aspect-4/3">
              <Image
                src="/images/9.jpeg"
                alt="Геодезическо измерване"
                fill
                className="object-cover object-[52%_center] "
              />
            </div>
          </div>

          {/* Secondary image */}
          <div
            className={clsx(
              "reveal-img opacity-0 translate-y-10 scale-95 transition-all duration-1000 delay-300 ease-out-expo",
              "absolute -bottom-14 -left-10 hidden w-[220px] overflow-hidden rounded-[22px] shadow-[0_16px_40px_rgba(0,0,0,0.10)] lg:block xl:w-[250px]"
            )}
          >
            <div className="relative aspect-4/5">
              <Image
                src="/images/image.webp"
                alt="Детайл от геодезическа работа"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* spacer for overlap */}
          <div className="hidden h-10 lg:block" />
        </div>
      </div>
    </section>
  );
}
