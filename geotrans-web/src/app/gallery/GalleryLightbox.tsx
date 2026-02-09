"use client";

import Image from "next/image";
import { GalleryImageProps } from "../../config/GalleryConfig";

interface GalleryLightboxProps {
    image: GalleryImageProps | null;
    onClose: () => void;
}

export function GalleryLightbox({ image, onClose }: GalleryLightboxProps) {
    if (!image) return null;

    return (
        <div
            className="fixed inset-0 z-100 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={onClose}
        >
            <div
                className="relative max-w-[95vw] max-h-[90vh] w-auto h-auto bg-gray-950/40 rounded-2xl overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close button */}
                <button
                    className="absolute top-4 right-4 z-10 text-white text-4xl hover:text-amber-400 transition-colors duration-200"
                    onClick={onClose}
                    aria-label="Затвори галерия"
                >
                    ×
                </button>

                {/* Main image */}
                <div className="relative flex items-center justify-center p-4">
                    <Image
                        src={image.src}
                        alt={image.alt}
                        width={1600}
                        height={1200}
                        className="max-w-full max-h-[80vh] object-contain rounded-xl"
                        priority
                        onError={(e) => {
                            console.error("Failed to load lightbox image:", image.src);
                            // optional: show fallback
                            (e.target as HTMLImageElement).src =
                                "/images/fallback-placeholder.jpg";
                        }}
                    />
                </div>

                {/* Caption area */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black/80 to-transparent text-white">
                    <p className="text-lg font-medium">{image.alt}</p>
                    {image.caption && (
                        <p className="mt-1 text-sm opacity-90">{image.caption}</p>
                    )}
                </div>
            </div>
        </div>
    );
}
