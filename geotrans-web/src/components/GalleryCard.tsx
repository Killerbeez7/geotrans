import Image from "next/image";
import { GalleryImage } from "../config/GalleryConfig";

interface GalleryCardProps {
  image: GalleryImage;
}

export function GalleryCard({ image }: GalleryCardProps) {
  return (
    <div className="aspect-4/3 rounded-2xl overflow-hidden">
      <Image
        src={image.src}
        alt={image.alt}
        width={400}
        height={300}
        className="object-cover w-full h-full"
      />
    </div>
  );
}
