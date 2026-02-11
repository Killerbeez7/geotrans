import clsx from "clsx";
import Image from "next/image";
import { FaPhone } from "react-icons/fa6";
import { CtaButton } from "../parts/CtaButton";

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
        <section
            id="hero-section"
            className="relative overflow-hidden px-4 sm:px-6 lg:px-12 bg-(--bg-page)"
        >
            <div
                className={clsx(
                    "mx-auto max-w-7xl ",
                    "flex flex-col-reverse items-center gap-12 py-12",
                    "sm:py-16 lg:flex-row lg:gap-20 justify-between lg:py-24",
                )}
            >
                {/* Text */}
                <div className="w-full max-w-xl text-center lg:text-left">
                    <h1 className="font-semibold tracking-tight text-2xl sm:text-3xl xl:text-4xl">
                        {title1}
                        <br />
                        <span className="text-(--accent) text-shadow-2xs">{title2}</span>
                    </h1>

                    {desc && (
                        <p className="mt-5 text-base xl:text-lg text-(--tx-secondary)">
                            {desc}
                        </p>
                    )}

                    {ctaLabel && ctaHref && (
                        <div className="mt-8 flex justify-center lg:justify-start">
                            <CtaButton href={ctaHref}>
                                <FaPhone className="text-lg opacity-90" />
                                {ctaLabel}
                            </CtaButton>
                        </div>
                    )}
                </div>

                {/* Image */}
                {image && (
                    <div
                        className={clsx(
                            "relative aspect-4/3",
                            "w-full max-w-md sm:max-w-lg lg:max-w-xl",
                            "overflow-hidden rounded-3xl",
                            "shadow-xl",
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
                )}
            </div>
        </section>
    );
}
