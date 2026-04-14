export type HelpfulArticleSection = "statii" | "rakovodstva";

export type HelpfulArticleCategory =
  | "geodezia"
  | "kadastar"
  | "trasirane"
  | "gradoustroistvo"
  | "pup"
  | "polezno";

export type HelpfulArticleBlock =
  | {
      type: "paragraph";
      content: string;
    }
  | {
      type: "list";
      title?: string;
      items: string[];
    };

export type HelpfulArticleLink = {
  label: string;
  href: string;
};

export type HelpfulArticle = {
  slug: string;
  title: string;
  excerpt: string;
  description: string;
  section: HelpfulArticleSection;
  category: HelpfulArticleCategory;

  publishedAt: string;
  updatedAt?: string;

  coverImage?: {
    src: string;
    alt: string;
  };

  keywords?: string[];

  body: HelpfulArticleBlock[];

  relatedServices?: HelpfulArticleLink[];
  relatedArticles?: HelpfulArticleLink[];
  cta?: {
    title: string;
    text: string;
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel?: string;
    secondaryHref?: string;
  };
};

export const HELPFUL_ARTICLES: readonly HelpfulArticle[] = [
  {
    slug: "kakvo-e-geodezichesko-zasnemane",
    title: "Какво е геодезическо заснемане?",
    excerpt: "Кратко и ясно обяснение кога се налага и защо е важно.",
    description:
      "Научете какво представлява геодезическото заснемане, кога се изисква и как помага при проектиране, строителство и кадастър.",
    section: "statii",
    category: "geodezia",
    publishedAt: "2026-04-14",
    coverImage: {
      src: "/images/sections/hero-img.jpeg",
      alt: "Геодезически измервания на терен",
    },
    keywords: ["геодезическо заснемане", "геодезия", "София"],
    body: [
      {
        type: "paragraph",
        content:
          "Геодезическото заснемане представлява измерване и графично представяне на съществуващото положение на терена, сградите, съоръженията и характерните точки в имота.",
      },
      {
        type: "paragraph",
        content:
          "То е необходимо при проектиране, подготовка за строителство, процедури по кадастър, регулация и различни административни действия, при които се изисква точна информация за реалното състояние на място.",
      },
      {
        type: "paragraph",
        content:
          "Добре изготвеното заснемане дава надеждна основа за следващите стъпки и намалява риска от грешки, разминавания и забавяния в проекта.",
      },
      {
        type: "list",
        title: "Кога най-често е необходимо",
        items: [
          "Преди изработване на инвестиционен проект",
          "При подготовка за строителство",
          "При кадастрални и регулационни процедури",
          "Когато трябва точна основа за следващи решения",
        ],
      },
    ],
    relatedServices: [
      {
        label: "Геодезическо заснемане",
        href: "/uslugi/zasnemane",
      },
      {
        label: "Геодезическо заснемане за проектиране",
        href: "/uslugi/zasnemane/za-proektirane",
      },
    ],
    relatedArticles: [
      {
        label: "Кога ви трябва геодезист?",
        href: "/polezno/rakovodstva/koga-vi-tryabva-geodezist",
      },
    ],
    cta: {
      title: "Нужна Ви е конкретна насока?",
      text: "Ако случаят Ви изисква реална оценка на място, документи или избор на конкретна услуга, изпратете кратко описание и ще получите насоки.",
      primaryLabel: "Изпратете запитване",
      primaryHref: "/contacts",
      secondaryLabel: "Разгледайте услугите",
      secondaryHref: "/uslugi",
    },
  },
  {
    slug: "kolko-struva-trasirane",
    title: "Колко струва трасиране?",
    excerpt: "Факторите, които влияят върху цената и какво да очаквате.",
    description:
      "Вижте кои фактори влияят върху цената на трасирането и как да прецените каква услуга е нужна за вашия случай.",
    section: "statii",
    category: "trasirane",
    publishedAt: "2026-04-14",
    keywords: ["трасиране", "цена трасиране", "геодезия"],
    body: [
      {
        type: "paragraph",
        content:
          "Цената на трасирането зависи от вида на обекта, броя точки, сложността на терена, наличната документация и това дали се трасират граници, сграда, оси или линейни съоръжения.",
      },
      {
        type: "paragraph",
        content:
          "При по-прости случаи цената е по-ниска, но при сложни обекти, липсващи данни или необходимост от допълнителна подготовка стойността се увеличава.",
      },
      {
        type: "paragraph",
        content:
          "Най-добрият подход е първо да се уточни конкретният случай, за да се даде точна насока каква услуга е нужна и какъв е обхватът на работа.",
      },
      {
        type: "list",
        title: "Какво влияе върху цената",
        items: [
          "Видът на трасирането",
          "Броят на точките",
          "Сложността на терена",
          "Наличната документация",
          "Необходимостта от допълнителна подготовка",
        ],
      },
    ],
    relatedServices: [
      {
        label: "Трасиране",
        href: "/uslugi/trasirane",
      },
      {
        label: "Трасиране на имотни граници",
        href: "/uslugi/trasirane/na-imotni-granici",
      },
    ],
    relatedArticles: [
      {
        label: "Кога ви трябва геодезист?",
        href: "/polezno/rakovodstva/koga-vi-tryabva-geodezist",
      },
    ],
    cta: {
      title: "Искате по-точна насока за цена?",
      text: "Опишете накратко обекта, документацията и какво трябва да се трасира, за да получите по-ясна ориентация.",
      primaryLabel: "Свържете се с нас",
      primaryHref: "/contacts",
      secondaryLabel: "Вижте услугите по трасиране",
      secondaryHref: "/uslugi/trasirane",
    },
  },
  {
    slug: "koga-vi-tryabva-geodezist",
    title: "Кога ви трябва геодезист?",
    excerpt: "Най-честите ситуации, в които геодезистът е задължителен.",
    description:
      "Разберете в кои случаи е необходим геодезист и как професионалната помощ спестява грешки, време и разходи.",
    section: "rakovodstva",
    category: "polezno",
    publishedAt: "2026-04-14",
    keywords: ["кога трябва геодезист", "геодезически услуги"],
    body: [
      {
        type: "paragraph",
        content:
          "Геодезист е нужен при заснемане на имот, трасиране, подготовка за проектиране, строителство, кадастрални процедури и случаи, в които трябва точно установяване на граници и положения.",
      },
      {
        type: "paragraph",
        content:
          "Често професионалната намеса е необходима още в началото, за да не се стигне до грешен проект, неправилно позициониране или проблеми при последващи административни процедури.",
      },
      {
        type: "paragraph",
        content:
          "Когато не сте сигурни каква услуга ви е нужна, кратка консултация обикновено е най-добрият първи ход.",
      },
      {
        type: "list",
        title: "Най-чести случаи",
        items: [
          "Преди покупка или продажба на имот",
          "Преди проектиране и строителство",
          "При спор или неяснота за граници",
          "При кадастрални или регулационни процедури",
        ],
      },
    ],
    relatedServices: [
      {
        label: "Консултации",
        href: "/uslugi/konsultacia",
      },
      {
        label: "Геодезическо заснемане",
        href: "/uslugi/zasnemane",
      },
    ],
    relatedArticles: [
      {
        label: "Какво е геодезическо заснемане?",
        href: "/polezno/statii/kakvo-e-geodezichesko-zasnemane",
      },
      {
        label: "Колко струва трасиране?",
        href: "/polezno/statii/kolko-struva-trasirane",
      },
    ],
    cta: {
      title: "Не сте сигурни откъде да започнете?",
      text: "Кратка консултация може да Ви спести време, грешки и ненужни разходи още в началото.",
      primaryLabel: "Направете запитване",
      primaryHref: "/contacts",
      secondaryLabel: "Вижте консултациите",
      secondaryHref: "/uslugi/konsultacia",
    },
  },
] as const;

export function getArticleBySlug(slug: string) {
  return HELPFUL_ARTICLES.find((article) => article.slug === slug);
}

export function getArticlesBySection(section: HelpfulArticleSection) {
  return HELPFUL_ARTICLES.filter((article) => article.section === section);
}

export function getRelatedArticles(currentSlug: string, limit = 2) {
  return HELPFUL_ARTICLES.filter((article) => article.slug !== currentSlug).slice(
    0,
    limit
  );
}
