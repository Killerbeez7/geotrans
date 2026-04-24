export interface TestimonialsContent {
  id: "testimonials";
  kicker?: string;
  title: string;
  subtitle: string;
}

export const testimonials: TestimonialsContent = {
  id: "testimonials",
  kicker: "Отзиви",
  title: "Какво казват нашите клиенти",
  subtitle:
    "Доверието на нашите клиенти е най-доброто доказателство за качеството на нашата работа.",
} as const;
