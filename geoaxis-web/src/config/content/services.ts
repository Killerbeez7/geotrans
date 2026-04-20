export interface ServicesContent {
  id: "services";
  kicker?: string;
  title: string;
  subtitle: string;
}

export const services: ServicesContent = {
  id: "services",
  // kicker: "Услуги",
  kicker: "Услуги",
  title: "Нашите услуги",

  // title: "Нашите услуги",
  // subtitle: "От заснемане на парцел до нанасяне в кадастър.",
  subtitle:
    "Предлагаме пълен набор от геодезически решения за проектиране, строителство и регулация.",
} as const;
