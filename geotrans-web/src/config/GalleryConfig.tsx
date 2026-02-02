export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: 1, src: "/images/teren.jpg", alt: "Геодезист с тотална станция на терен" },
  { id: 2, src: "/images/tripod.jpg", alt: "Геодезическо оборудване" },
  { id: 3, src: "/images/teren.jpg", alt: "Геодезическо заснемане на обект" },
];
