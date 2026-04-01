export interface ClientsContent {
  id: "clients";
  title: string;
  list: string[];
}

export const clients: ClientsContent = {
  id: "clients",
  title: "Работим с",
  list: [
    "Частни собственици на имоти",
    "Инвеститори и строителни фирми",
    "Архитекти и проектантски бюра",
    "Нотариуси, адвокати и консултанти",
    "Общини и държавни институции",
  ],
} as const;
