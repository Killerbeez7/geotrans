export type ProjectMedia = {
  src: string;
  alt: string;
  caption?: string;
};

export type ProjectItem = ProjectMedia & {
  id: string | number;
  category?: string;
  blurDataURL?: string;
  gallery?: readonly ProjectMedia[];
};

export type ProjectsContent = {
  id: "projects";
  kicker?: string;
  title: string;
  subtitle: string;
  cta: {
    label: string;
    href: string;
    content: string;
  };
  items: ProjectItem[];
};

export const projects: ProjectsContent = {
  id: "projects",
  kicker: "Проекти",
  title: "Завършени обекти",
  subtitle: "Подбрани примери от реализирани геодезически и кадастрални дейности.",
  cta: {
    label: "Всички проекти",
    href: "/projects",
    content: "Виж проекти →",
  },
  items: [
    {
      id: "trasirane-koloni-skladova-sgrada",
      src: "/images/projects/trasirane-koloni-skladova-sgrada/cover.jpeg",
      alt: "Трасиране на конструктивни оси и колони при промишлено строителство",
      caption:
        "Геодезическо трасиране на конструктивни оси и контролни точки за колони при изграждане на складова сграда.",
      category: "Трасиране",
      gallery: [
        {
          src: "/images/projects/trasirane-koloni-skladova-sgrada/cover.jpeg",
          alt: "Трасиране на конструктивни оси и колони при промишлено строителство",
          caption:
            "Общ изглед към промишления обект, където са трасирани контролни точки за позициониране на колоните.",
        },
        {
          src: "/images/projects/trasirane-koloni-skladova-sgrada/control-points-row.jpeg",
          alt: "Маркирани контролни точки за колони върху бетонова основа",
          caption:
            "Контролни точки по редица фундаментни позиции, подготвени за ясно ориентиране на строителния екип.",
        },
        {
          src: "/images/projects/trasirane-koloni-skladova-sgrada/column-row-and-foundations.jpeg",
          alt: "Геодезическо трасиране на фундаментни точки за складова сграда",
          caption:
            "Трасиране на конструктивни оси и позиции на колони спрямо проектните данни.",
        },
        {
          src: "/images/projects/trasirane-koloni-skladova-sgrada/marked-foundations-detail.jpeg",
          alt: "Контролни точки за колона при промишлено строителство",
          caption:
            "Детайл от маркировките върху бетонова основа за правилно позициониране на конструктивен елемент.",
        },
        {
          src: "/images/projects/trasirane-koloni-skladova-sgrada/foundation-row-construction.jpeg",
          alt: "Ред фундаментни позиции при трасиране на складова сграда",
          caption:
            "Последователно трасиране по редица от фундаментни позиции в рамките на строителния обект.",
        },
      ],
    },
    {
      id: 1,
      src: "/images/projects/project-1.webp",
      alt: "Геодезическо заснемане на земеделски терен с GNSS апаратура",
      caption:
        "Прецизно определяне на граници и заснемане на земеделски терен с GNSS технология.",
      category: "Геодезическо заснемане",
    },
    {
      id: 2,
      src: "/images/projects/project-2.jpg",
      alt: "Трасиране на строителен обект с тотална станция",
      caption:
        "Трасиране на регулационни линии и оси за ново строителство с тотална станция.",
      category: "Трасиране",
    },
    {
      id: 3,
      src: "/images/projects/project-3.jpg",
      alt: "Кадастрална процедура за нанасяне на сграда в кадастъра",
      caption:
        "Подготовка и изготвяне на документи за нанасяне на новоизградена сграда в кадастъра.",
      category: "Кадастрални услуги",
    },
    {
      id: 4,
      src: "/images/projects/project-4.webp",
      alt: "Вертикална планировка на двор и прилежащ терен",
      caption:
        "Изготвяне на вертикална планировка за жилищен имот с решение за наклони и отводняване.",
      category: "Вертикална планировка",
    },
    {
      id: 5,
      src: "/images/projects/project-5.jpg",
      alt: "Проектантски услуги и координация на геодезически данни",
      caption:
        "Изготвяне на проектни материали и координация с други части по инвестиционен проект.",
      category: "Проектиране",
    },
    {
      id: 6,
      src: "/images/projects/project-6.jpg",
      alt: "Контролни геодезически измервания на строителен обект",
      caption:
        "Контролни измервания и проверка на изпълнението по време на строителен процес.",
      category: "Контролни измервания",
    },
  ],
} as const;
