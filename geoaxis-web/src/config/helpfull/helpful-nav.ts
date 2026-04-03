export type HelpfulNavItem = {
  slug: string;
  label: string;
  href: string;
  description?: string;
};

export const HELPFUL_NAV_ITEMS: readonly HelpfulNavItem[] = [
  {
    slug: "statii",
    label: "Статии",
    href: "/helpfull/statii",
    description: "Практически теми и обяснения",
  },
  {
    slug: "faq",
    label: "Въпроси и отговори",
    href: "/helpfull/faq",
    description: "Кратки отговори на често задавани въпроси",
  },
  {
    slug: "rechnik",
    label: "Речник",
    href: "/helpfull/rechnik",
    description: "Основни термини в геодезията и кадастъра",
  },
  {
    slug: "resursi",
    label: "Полезни ресурси",
    href: "/helpfull/resursi",
    description: "Институции, справки и външни източници",
  },
  {
    slug: "rakovodstva",
    label: "Ръководства",
    href: "/helpfull/rakovodstva",
    description: "По-подробни насоки и материали",
  },
] as const;
