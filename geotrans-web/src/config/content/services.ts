export interface ServicesContent {
  id: "services";
  title: string;
  subtitle: string;
}

export const services: ServicesContent = {
  id: "services",
  title: "Услуги",
  subtitle:
    "Геодезически и кадастрални дейности, необходими за проектиране, строителство и регулация на имоти.",
} as const;
