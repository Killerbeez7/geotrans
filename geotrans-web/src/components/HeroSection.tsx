import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { FaPhone } from "react-icons/fa6";

type HeroSectionProps = {
  title: string;
  desc: string;
  image: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export function HeroSection({ title, desc, image, ctaLabel, ctaHref }: HeroSectionProps) {
  const [title1, title2] = title.split("||");

  return (
    <section className="relative overflow-hidden px-4 sm:px-6 lg:px-12">
      <div
        className={clsx(
          "mx-auto max-w-7xl flex flex-col-reverse items-center gap-12 py-12",
          "sm:py-16 lg:flex-row lg:gap-20"
        )}
      >
        {/* Text */}
        <div className="w-full max-w-xl text-center lg:text-left">
          <h1 className="font-semibold tracking-tight text-2xl lg:text-3xl xl:text-4xl">
            {title1}
            <br />
            {title2}
          </h1>

          {desc && (
            <p className="mt-4 text-base text-(--text-secondary) xl:text-lg">{desc}</p>
          )}

          {ctaLabel && ctaHref && (
            <div className="mt-8 flex justify-center lg:justify-start">
              <Link
                href={ctaHref}
                className={clsx(
                  "inline-flex items-center justify-center gap-2 rounded-xl",
                  "bg-btn-primary hover:bg-btn-primary-hover",
                  "px-6 py-4 font-semibold shadow-lg hover:shadow-xl",
                  "transition-transform hover:scale-105"
                )}
              >
                <FaPhone className="shrink-0 text-lg" />
                <span className="leading-none">{ctaLabel}</span>
              </Link>
            </div>
          )}
        </div>

        {/* Image */}
        {image && (
          <div className="relative aspect-[4/3] w-full max-w-md sm:max-w-lg lg:max-w-xl overflow-hidden rounded-2xl shadow-lg">
            <Image
              src={image}
              alt="Геодезическо заснемане на терен"
              fill
              priority
              className="object-cover"
            />
          </div>
        )}
      </div>
    </section>
  );
}
