export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: 1, src: "/teren.jpg", alt: "Геодезист с тотална станция на терен" },
  { id: 2, src: "/tripod.jpg", alt: "Геодезическо оборудване" },
  { id: 3, src: "/teren.jpg", alt: "Геодезическо заснемане на обект" },
];
