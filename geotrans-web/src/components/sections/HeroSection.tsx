import clsx from "clsx";
import Image from "next/image";
import { FaPhone } from "react-icons/fa6";
import { CtaButton } from "../parts/CtaButton";
import { Section } from "@/components/layout/Section";
import { Grid } from "@/components/layout/Grid";
import type { HeroContent } from "@/config/site-content";

export function HeroSection({ id, title, subtitle, kicker, image, cta }: HeroContent) {
  const [line1 = "", line2 = "", accent = ""] = title.split("||").map((s) => s.trim());

  return (
    <Section id={id} variant="hero" className="overflow-hidden bg-bg-page">
      <Grid className="items-center">
        {/* Text */}
        <div className="col-span-12 lg:col-span-6">
          <div className="max-w-xl">
            {kicker && <p className="typo-kicker">{kicker}</p>}

            <h1 className="mt-4 typo-hero">
              {line1}
              <br />
              {line2} <span className="text-accent">{accent}</span>
            </h1>

            <p className="mt-5 typo-lead max-w-prose">{subtitle}</p>

            {cta && (
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <CtaButton href={cta.href}>
                  <FaPhone className="text-lg opacity-90" />
                  {cta.label}
                </CtaButton>
                <CtaButton variant="glassAccent" href="/services">
                  {cta.content}
                </CtaButton>
              </div>
            )}
          </div>
        </div>

        {/* Image */}
        <div className="col-span-12 lg:col-span-6">
          <div
            className={clsx(
              "relative overflow-hidden rounded-3xl shadow-xl",
              // "border border-br-light/20",
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
          </div>
        </div>
      </Grid>
    </Section>
  );
}
