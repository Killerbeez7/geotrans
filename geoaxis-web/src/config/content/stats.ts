export interface StatItem {
  number: string;
  label: string;
}

export const stats: StatItem[] = [
  { number: "574+", label: "Реализирани проекта" },
  { number: "15+", label: "Години опит" },
  { number: "100%", label: "Гарантирана точност" },
  { number: "375+", label: "Доволни клиенти" },
] as const;
