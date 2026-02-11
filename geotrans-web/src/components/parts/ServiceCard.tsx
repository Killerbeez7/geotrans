import { clsx } from "clsx";
import Link from "next/link";
import Image from "next/image";

type CardProps = {
    title: string;
    desc: string;
    thumb: string;
    href: string;
};

export default function ServiceCard({ title, desc, thumb, href }: CardProps) {
    return (
        <Link href={href} className="block h-full m-0 sm:m-2">
            <div
                className={clsx(
                    "group relative h-72 w-full max-w-full mx-auto",
                    "overflow-hidden rounded-3xl border border-border-default",
                    "transition hover:shadow-sm hover:-translate-y-1 duration-300",
                )}
            >
                <Image
                    src={thumb}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1536px) 33vw, 25vw"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

                {/* Content - always at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col gap-3">
                    <div>
                        <h3 className="text-lg font-semibold text-white line-clamp-2">
                            {title}
                        </h3>
                        <p className="mt-2 text-sm text-white/80 line-clamp-2 leading-relaxed">
                            {desc}
                        </p>
                    </div>

                    <div className="pt-2">
                        <span className="inline-block text-sm font-medium bg-accent/20 hover:bg-accent/30 text-accent px-3 py-1.5 rounded-lg transition">
                            Детайли →
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
