"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GALLERY_IMAGES, GalleryImageProps } from "../../config/GalleryConfig";
import { GalleryLightbox } from "./GalleryLightbox";

export default function GalleryPage() {
    const [selectedImage, setSelectedImage] = useState<GalleryImageProps | null>(null);

    return (
        <main className="relative min-h-screen bg-(--bg-page)">
            {/* Background pattern */}
            <div
                className="absolute inset-0 -z-10 opacity-[0.04] pointer-events-none"
                style={{
                    backgroundImage: "url(/images/topo-pattern-light.svg)",
                    backgroundSize: "cover",
                }}
            />

            <section className="pt-28 pb-20 md:pt-36 md:pb-28">
                <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-(--text-primary)">
                            Галерия
                        </h1>
                        <p className="mt-5 text-lg sm:text-xl text-(--text-secondary)">
                            Реални примери от нашите геодезически и кадастрални проекти –
                            заснемания, трасирания, карти, 3D модели и полеви снимки.
                        </p>
                    </div>

                    {/* Gallery Grid */}
                    <div className="mt-16 columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
                        {GALLERY_IMAGES.map((img) => (
                            <div
                                key={img.id}
                                className="group break-inside-avoid cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
                                onClick={() => setSelectedImage(img)}
                            >
                                <div className="relative aspect-4/3 sm:aspect-3/4 lg:aspect-4/5 overflow-hidden pointer-events-none">
                                    <Image
                                        src={img.src}
                                        alt={img.alt}
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 pointer-events-none"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 pointer-events-none">
                                    <p className="text-white text-sm font-medium">
                                        {img.caption || img.alt}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Low count message */}
                    {GALLERY_IMAGES.length < 6 && (
                        <div className="mt-16 text-center text-(--text-secondary)">
                            <p className="text-lg">Още проекти се добавят редовно.</p>
                            <Link
                                href="/contacts"
                                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-(--color-btn-primary) px-6 py-3 text-base font-semibold text-white hover:bg-(--color-btn-primary-hover) transition"
                            >
                                Попитайте за ваш проект →
                            </Link>
                        </div>
                    )}
                </div>
            </section>

            <GalleryLightbox
                image={selectedImage}
                onClose={() => setSelectedImage(null)}
            />
        </main>
    );
}
