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
        <Link href={href}>
            <div className="group relative h-72 overflow-hidden rounded-2xl border border-border-default shadow-md transition hover:-translate-y-1 hover:shadow-xl cursor-pointer">
                <Image
                    src={thumb}
                    alt={title}
                    width={400}
                    height={300}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
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
