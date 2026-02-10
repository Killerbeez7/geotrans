"use client";

import Link from "next/link";
import { GALLERY_IMAGES } from "../config/GalleryConfig";
import { GalleryCard } from "./GalleryCard";
import { GalleryLightbox } from "../app/projects/GalleryLightbox";
import { useState } from "react";

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<typeof GALLERY_IMAGES[0] | null>(null);

  return (
    <section className="relative overflow-hidden bg-(--bg-section)/50 py-16">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-(--text-primary)">
              Галерия
            </h2>
            <p className="mt-2 text-lg text-(--text-secondary)">
              Примери от изпълнени обекти (снимки/визуализации от реални проекти).
            </p>
          </div>
          <Link
            href="/projects"
            className={`
              rounded-xl px-5 py-2.5 text-sm font-semibold
              bg-(--color-accent)/10 text-(--color-accent)
              hover:bg-(--color-accent)/20 transition-all
            `}
          >
            Към пълна галерия →
          </Link>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {GALLERY_IMAGES.slice(0, 6).map((image) => ( // limit to 6 for teaser
            <GalleryCard
              key={image.id}
              image={image}
              onClick={() => setSelectedImage(image)} // enable lightbox
            />
          ))}
        </div>
      </div>

      {/* Unified lightbox */}
      <GalleryLightbox image={selectedImage} onClose={() => setSelectedImage(null)} />
    </section>
  );
}