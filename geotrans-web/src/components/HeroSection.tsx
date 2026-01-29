import Image from "next/image";
import Link from "next/link";

type HeroSectionProps = {
    title: string;
    subtitle?: string;
    image?: string;
    ctaLabel?: string;
    ctaHref?: string;
};

export function HeroSection({
    title,
    subtitle,
    image,
    ctaLabel,
    ctaHref,
}: HeroSectionProps) {
    return (
        <section className="relative overflow-hidden px-10">
            <div className="flex flex-col-reverse sm:flex-row items-center gap-16 py-16 sm:py-20">
                {/* Text */}
                <div>
                    <h1 className="text-3xl font-semibold tracking-tight max-w-md">
                        {title}
                    </h1>

                    {subtitle && (
                        <p className="mt-4 text-md text-text-secondary">{subtitle}</p>
                    )}

                    {ctaLabel && ctaHref && (
                        <div className="mt-8">
                            <Link
                                href={ctaHref}
                                className="inline-flex rounded-xl bg-btn-primary hover:bg-btn-hover text-white px-8 py-4 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition"
                            >
                                {ctaLabel}
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
