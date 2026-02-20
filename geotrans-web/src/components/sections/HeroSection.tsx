import clsx from "clsx";
import Image from "next/image";
import { FaPhone } from "react-icons/fa6";
import { CtaButton } from "../parts/CtaButton";
import { HeroContent } from "@/config/site-content";

export function HeroSection({ title, subtitle, kicker, image, cta }: HeroContent) {
  const [line1 = "", line2 = "", accent = ""] = title.split("||");

  return (
    <section
      id="hero-section"
      className={clsx(
        "relative overflow-hidden",
        "bg-bg-page",
        "px-4 sm:px-6 lg:px-12",

        "pt-10 sm:pt-12 lg:pt-14",
        "pb-12 sm:pb-14 lg:pb-16"
      )}
    >
      <div className="mx-auto max-w-7xl ">
        <div className={clsx("grid items-center gap-10 lg:gap-14", "lg:grid-cols-12")}>
          {/* Text */}
          <div className="lg:col-span-6 max-w-xl">
            <p className="typo-kicker">{kicker}</p>

            <h1 className="mt-4 typo-hero">
              {line1}
              <br />
              {line2}
              <span className="text-accent">{accent}</span>
            </h1>

            <p className="mt-5 typo-lead max-w-prose">{subtitle}</p>

            {cta && (
              <div className="mt-8 flex items-center gap-3">
                <CtaButton href={cta?.href}>
                  <FaPhone className="text-lg opacity-90" />
                  {cta?.label}
                </CtaButton>
                <CtaButton variant="glassAccent">{cta.content}</CtaButton>
              </div>
            )}
          </div>

          {/* Image */}
          <div className="lg:col-span-6">
            <div
              className={clsx(
                "relative overflow-hidden rounded-3xl shadow-xl",
                "border border-br-light/20",
                "aspect-16/10 sm:aspect-4/3"
              )}
            >
              <Image
                src={image}
                alt="Геодезическо заснемане на терен"
                fill
                priority
                className="object-cover saturate-90 contrast-95"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/10 via-transparent to-transparent" />
            </div>{" "}
          </div>
        </div>
      </div>
    </section>
  );
}
