import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { FaPhone } from "react-icons/fa6";

type HeroSectionProps = {
    title: string;
    desc?: string;
    image?: string;
    ctaLabel?: string;
    ctaHref?: string;
};

export function HeroSection({ title, desc, image, ctaLabel, ctaHref }: HeroSectionProps) {
    return (
        <section className="relative overflow-hidden px-10">
            <div className="flex flex-col-reverse md:flex-row items-center gap-16 py-16 sm:py-20">
                {/* Text */}
                <div>
                    <h1 className="text-3xl font-semibold tracking-tight max-w-md">
                        {title}
                    </h1>

                    {desc && (
                        <p className="mt-4 text-md text-(--text-secondary)">{desc}</p>
                    )}

                    {ctaLabel && ctaHref && (
                        <div className="mt-8">
                            <Link
                                href={ctaHref}
                                className={clsx(
                                    "inline-flex items-center justify-center gap-2 rounded-xl",
                                    "bg-btn-primary hover:bg-btn-primary-hover",
                                    "px-6 py-4 font-semibold shadow-lg hover:shadow-xl",
                                    "transition-transform hover:scale-105",
                                )}
                            >
                                <FaPhone className="block shrink-0 text-lg" />
                                <span className="leading-none">{ctaLabel}</span>
                            </Link>
                        </div>
                    )}
                </div>

                {/* Image */}
                {image && (
                    <div className="relative aspect-4/3 w-full max-w-xl overflow-hidden rounded-2xl shadow-lg">
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
