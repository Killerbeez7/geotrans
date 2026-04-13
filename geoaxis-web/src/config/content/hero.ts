export interface HeroContent {
  id: "hero";
  title: string;
  subtitle: string;
  kicker?: string;
  image: string;
  cta?: {
    primary: { label: string; href: string };
    secondary: { label: string; href: string };
  };
}

export const hero: HeroContent = {
  id: "hero",
  title: " Точни измервания. || Сигурен резултат.",
  subtitle:
    "Геодезически услуги в София и област - от заснемане на парцел до нанасяне в кадастър.",
  kicker: "Геодезия • Кадастър • Градоустройство",
  image: "/images/sections/hero-img.jpeg",
  cta: {
    primary: { label: "Свържи се", href: "/contacts" },
    secondary: { label: "Виж услуги", href: "/uslugi" },
  },
} as const;
