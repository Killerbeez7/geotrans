import Link from "next/link";
import { GALLERY_IMAGES } from "../config/GalleryConfig";
import { GalleryCard } from "./GalleryCard";

export function GallerySection() {
    return (
        <section className="relative overflow-hidden">
            <div className="px-8 py-16">
                <div className="flex items-end justify-between gap-4 ">
                    <div>
                        <h2 className="text-2xl font-semibold">Галерия</h2>
                        <p className="mt-2 text-text-secondary">
                            Примери от изпълнени обекти (снимки/визуализации).
                        </p>
                    </div>
                    <Link
                        href="/gallery"
                        className="rounded-lg px-3 py-2 text-sm font-semibold text-link ring-1 ring-black/10 hover:bg-gray-50"
                    >
                        Към галерия →
                    </Link>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                    {GALLERY_IMAGES.map((image) => (
                        <GalleryCard key={image.id} image={image} />
                    ))}
                </div>
            </div>
        </section>
    );
}
