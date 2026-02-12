"use client";

import Image from "next/image";
import { ProjectImageProps } from "@/config/ProjectsConfig";
import { useState } from "react";

interface ProjectCardProps {
    image: ProjectImageProps;
    onClick?: () => void;
}

export function ProjectDisplayCard({ image, onClick }: ProjectCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`
        group relative aspect-4/3 rounded-2xl overflow-hidden
        shadow-md hover:shadow-xl transition-all duration-300
        cursor-pointer ${onClick ? "" : ""}
      `}
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className={`
          object-cover transition-transform duration-500 ease-out
          ${isHovered ? "scale-110" : "scale-100"}
        `}
                loading="lazy"
                // placeholder="blur"
                // blurDataURL={image.blurDataURL} // add in config for better UX
            />

            {/* Hover caption overlay */}
            <div
                className={`
          absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent
          opacity-0 group-hover:opacity-100 transition-opacity duration-300
          flex items-end p-4
        `}
            >
                <p className="text-white text-sm font-medium line-clamp-2">
                    {image.caption || image.alt}
                </p>
            </div>
        </div>
    );
}
