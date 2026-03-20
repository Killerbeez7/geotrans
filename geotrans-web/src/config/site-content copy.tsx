// ======================================== BRAND ========================================
export interface BrandContent {
  logo: string;
  slogan: string;
  name: string;
  tagline: string;
  metaLine: string;
}

const brand: BrandContent = {
  logo: "/images/brand/logo.svg",
  slogan: "Accurate Land Solutions",
  name: "GeoMetric",
  tagline: "Прецизни геодезически услуги, ясни срокове и надеждна документация.",

  metaLine: "София • Софийска област • По договаряне",
};

// ======================================== HERO ========================================
export interface HeroContent {
  id: "hero";
  title: string;
  subtitle: string;
  kicker?: string;
  image: string;
  cta?: {
    label: string;
    href: string;
    content: string;
  };
}

const hero: HeroContent = {
  id: "hero",

  title: " Точни измервания. || Сигурен резултат.",
  // subtitle:
  // "Професионални геодезически услуги в София и Софийска област - от заснемане на парцел до нанасяне в кадастър.",
  subtitle:
    "Геодезически услуги в София и област - от заснемане на парцел до нанасяне в кадастър.",
  kicker: "Геодезия • Кадастър • Градоустройство",
  image: "/images/sections/hero-img.jpeg",

  cta: {
    label: "Свържи се",
    href: "/contacts",
    content: "Виж услуги",
  },
};

// ======================================== SERVICES ========================================
export interface ServicesContent {
  id: "services";
  title: string;
  subtitle: string;
}

const services: ServicesContent = {
  id: "services",
  title: "Услуги",
  subtitle:
    "Геодезически и кадастрални дейности, необходими за проектиране, строителство и регулация на имоти.",
};

// ======================================== CONTACTS ========================================
export interface ContactsContent {
  id: "contacts";
  title: string;
  subtitle: string;
  phone: string;
  email: string;
  address: string;
  mapsUrl: string;
}

const contacts: ContactsContent = {
  id: "contacts",
  title: "Свържи се",
  subtitle: "Имаш въпрос или нужда от услуга? Свържи се с нас и ще ти съдействаме.",
  phone: "+359 98 831 6263",
  email: "geometricsofia@gmail.com",
  address: "1618 бул. България||София, България",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Sofia%2C+Bulgaria",
};

// ======================================== ABOUT ========================================
export interface AboutValueItem {
  key: "precision" | "speed" | "partnership";
  title: string;
  description: string;
}

export interface AboutContent {
  id: "about";
  title: string;
  hero: {
    intro: string;
    imageBg: string;
  };

  story: {
    title: string;
    paragraphs: string[];
    image: {
      src: string;
      alt: string;
    };
  };

  values: {
    title: string;
    intro: string;
    items: AboutValueItem[];
  };

  cta: {
    title: string;
    text: string;
    buttonLabel: string;
    buttonHref: string;
  };
}

const about: AboutContent = {
  id: "about",
  title: "За нас",

  hero: {
    intro:
      `${brand.name} е компания за професионални геодезически и кадастрални услуги, ` +
      `която комбинира модерна технология, експертен опит и безкомпромисна точност. ` +
      `Работим с частни клиенти, инвеститори и строителни компании в София и Софийска област.`,
    imageBg: "/images/sections/5.jpeg",
  },

  story: {
    title: "Нашата история",
    paragraphs: [
      `${brand.name} е основана през 2008 г. от екип лицензирани геодезисти с дългогодишен практически опит в кадастъра, регулационните процедури и инженерната геодезия. Още от самото начало поставихме фокус върху прецизността, прозрачността и коректността към клиента.`,
      `Днес реализираме проекти с различен мащаб – от заснемане и трасиране на частни имоти до участие в инфраструктурни и инвестиционни проекти. Работим със съвременна техника и софтуер, което ни позволява да гарантираме надеждни резултати във всеки етап от процеса.`,
    ],
    image: {
      src: "/images/sections/about-element.png",
      alt: `Екипът на ${brand.name} на терен`,
    },
  },

  values: {
    title: "Нашите ценности",
    intro: "Всичко, което правим, се ръководи от тези принципи.",
    items: [
      {
        key: "precision",
        title: "Прецизност",
        description:
          "Работим с GNSS системи, тотални станции и съвременен софтуер. Всяко измерване преминава през вътрешен контрол за гарантирана точност.",
      },
      {
        key: "speed",
        title: "Срокове",
        description:
          "Процесите ни са оптимизирани за бързо изпълнение без компромис в качеството. Спазването на срокове е стандарт.",
      },
      {
        key: "partnership",
        title: "Партньорство",
        description:
          "Изграждаме доверие с ясна комуникация и професионална отговорност към всеки проект – от първия разговор до финалния документ.",
      },
    ],
  },

  cta: {
    title: "Готови ли сте да започнем?",
    text: "Ще получите бърза консултация и ясни стъпки. При нужда – среща на място.",
    buttonLabel: "Запитване",
    buttonHref: "/contacts",
  },
};

// const about: AboutContent = {
//   id: "about",
//   title: "За нас",
//   intro: `${brand.name} е компания за професионални геодезически и кадастрални услуги,
//   която комбинира модерна технология, експертен опит и безкомпромисна точност.
//   Работим с частни клиенти, инвеститори и строителни компании в цялата страна.`,
//   history: `${brand.name} е основана през 2008 г. от екип лицензирани геодезисти с дългогодишен практически опит в кадастъра, регулационните процедури и инженерната геодезия. Още от самото начало поставихме фокус върху прецизността, прозрачността и коректността към клиента.
//   || Днес реализираме проекти с различен мащаб – от заснемане и трасиране на частни имоти до участие в инфраструктурни и инвестиционни проекти. Работим съсвременна техника и софтуер, което ни позволява да гарантираме надеждни резултати във всеки етап от процеса.`,
//   values: "Всичко, което правим, се ръководи от тези принципи",
//   image: "/images/sections/about-element.png",
// };

// ======================================== WORKFLOW ========================================
export interface WorkflowStep {
  title: string;
  description: string;
  meta?: string;
}

export interface WorkflowContent {
  id: "workflow";
  title: string;
  subtitle: string;
  steps: WorkflowStep[];
}

const workflow: WorkflowContent = {
  id: "workflow",
  title: "Работен процес",
  subtitle:
    "От първия разговор до готовата документация - ясно, организирано и без излишни усложнения.",
  steps: [
    {
      title: "Консултация",
      meta: "Същия ден",
      description:
        "Разглеждаме случая, уточняваме нужните документи и определяме точния обхват на услугата.",
    },
    {
      title: "Оглед и измерване",
      meta: "30–90 мин",
      description:
        "Извършваме прецизно заснемане на място със съвременна апаратура (GNSS/тотална станция).",
    },
    {
      title: "Обработка и изготвяне",
      meta: "1–2 работни дни",
      description:
        "Обработваме данните и подготвяме планове, чертежи и необходимата документация според случая.",
    },
    {
      title: "Предаване и съдействие",
      meta: "След финал",
      description:
        "Предоставяме готовите материали и оставаме на разположение при въпроси/следващи стъпки.",
    },
  ],
};

// ======================================== STATS ========================================
export interface StatItem {
  number: string;
  label: string;
}

export const stats: StatItem[] = [
  { number: "574+", label: "Реализирани проекта" },
  { number: "15+", label: "Години опит" },
  { number: "100%", label: "Гарантирана точност" },
  { number: "375+", label: "Доволни клиенти" },
];

// ======================================== WHY US ========================================
export interface WhyUsContent {
  id: "why-us";
  title: string;
  subtitle: string;
  points: string[];
}

const whyUs: WhyUsContent = {
  id: "why-us",
  title: "Защо да избереш нас",
  subtitle:
    "Работим основно в София и Софийска област, с фокус върху точност, яснота и отговорност към всеки проект.",
  points: [
    "Прецизни измервания със съвременна геодезическа апаратура",
    "Опит в кадастрални и регулационни процедури",
    "Спазени срокове и прозрачност на всяка стъпка",
    "Лично отношение и реална ангажираност към проекта ти",
  ],
};

// ======================================== CLIENTS ========================================
export interface ClientsContent {
  id: "clients";
  title: string;
  list: string[];
}

const clients: ClientsContent = {
  id: "clients",
  title: "Работим с",
  list: [
    "Частни собственици на имоти",
    "Инвеститори и строителни фирми",
    "Архитекти и проектантски бюра",
    "Нотариуси, адвокати и консултанти",
    "Общини и държавни институции",
  ],
};

// ======================================== PROJECTS ========================================
export type ProjectItem = {
  id: string | number;
  src: string;
  alt: string;
  caption?: string;
  category?: string;
  blurDataURL?: string;
};

export type ProjectsContent = {
  id: "projects";
  title: string;
  subtitle: string;
  cta: {
    label: string;
    href: string;
    content: string;
  };
  items: ProjectItem[];
};

const projects: ProjectsContent = {
  id: "projects",
  title: "Проекти",
  subtitle: "Част от успешно завърпените ни проекти",
  cta: {
    label: "Всички проекти",
    href: "/projects",
    content: "Виж услуги →",
  },
  items: [
    {
      id: 1,
      src: "/images/projects/project-1.webp",
      alt: "Геодезическо заснемане на земеделски терен с GNSS апаратура",
      caption:
        "Прецизно определяне на граници и заснемане на 120 дка земеделска земя с GNSS технология.",
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
};

export const siteContent = {
  brand,
  hero,
  services,
  contacts,
  about,
  workflow,
  whyUs,
  clients,
  stats,
  projects,
} as const;
