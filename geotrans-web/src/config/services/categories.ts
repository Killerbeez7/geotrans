export type ServiceItem = {
  slug: string;
  title: string;
  meta?: string;
  thumbnail: string;
  ogImage?: string;
  description: string;
  neededWhen?: string[];
  requiredDocs?: string[];
  deliverables?: string[];
  processSteps?: string[];
};

export type ServiceCategory = {
  slug: string;
  title: string;
  intro: string;
  heroImage?: string;
  items: ServiceItem[];
};

export const serviceCategories: ServiceCategory[] = [
  // ========================================================= Заснемане =========================================================
  {
    slug: "zasnemane",
    title: "Геодезическо заснемане",
    intro:
      "Прецизно заснемане на терени, сгради и инфраструктура за проектиране, строителство и техническа документация.",
    heroImage: "/images/services/geodezichesko-zasnemane-og.jpg",
    items: [
      {
        slug: "za-proektirane",
        title: "Геодезическо заснемане за проектиране",
        meta: "Терен • Основа за проект",
        thumbnail: "/images/services/geodezichesko-zasnemane-thumb.jpg",
        ogImage: "/images/services/geodezichesko-zasnemane-og.jpg",
        description:
          "Подробно геодезическо заснемане на имот и съществуващо положение като надеждна основа за инвестиционен проект.",
        neededWhen: [
          "Преди изработване на инвестиционен проект",
          "При подготовка за ново строителство",
          "Когато проектантът има нужда от актуална геодезическа основа",
        ],
        requiredDocs: [
          "Документ за собственост при необходимост",
          "Идентификатор или точен адрес на имота",
          "Налични скици, схеми или стари материали, ако има",
        ],
        deliverables: [
          "Ситуация на съществуващото положение",
          "Цифрови файлове по договорка – DWG, PDF и др.",
          "Основа за проектиране и съгласуване",
        ],
        processSteps: [
          "Уточняване на имота и необходимия обхват",
          "Теренни измервания на място",
          "Обработка на данните",
          "Предаване на готовите материали",
        ],
      },
      {
        slug: "na-sgrada",
        title: "Геодезическо заснемане на сграда",
        meta: "Сграда • Документация",
        thumbnail: "/images/services/geodezichesko-zasnemane-thumb.jpg",
        description:
          "Заснемане на съществуваща сграда за техническа документация, реконструкция, узаконяване или последващо проектиране.",
      },
      {
        slug: "na-fasadi",
        title: "Геодезическо заснемане на фасади",
        meta: "Фасади • Архитектура",
        thumbnail: "/images/services/geodezichesko-zasnemane-thumb.jpg",
        description:
          "Прецизно заснемане на фасади за архитектурни, реставрационни и проектантски цели.",
      },
      {
        slug: "na-tehnicheska-infrastruktura",
        title: "Геодезическо заснемане на техническа инфраструктура",
        meta: "Мрежи • Съоръжения",
        thumbnail: "/images/services/geodezichesko-zasnemane-thumb.jpg",
        description:
          "Заснемане на инфраструктура, мрежи и съоръжения за координация, проектиране и технически анализ.",
      },
      {
        slug: "na-darvesna-rastitelnost",
        title: "Геодезическо заснемане на дървесна растителност",
        meta: "Дървета • Терен",
        thumbnail: "/images/services/geodezichesko-zasnemane-thumb.jpg",
        description:
          "Заснемане на дървета и зеленина за проектиране, регулация, благоустройство и съгласуване.",
      },
    ],
  },
  // ========================================================= Трасиране =========================================================
  {
    slug: "trasirane",
    title: "Трасиране",
    intro: "Точно пренасяне на проектни оси, линии, граници и характерни точки на терен.",
    heroImage: "/images/services/trasirane-og.png",
    items: [
      {
        slug: "na-imotni-granici",
        title: "Трасиране на имотни граници",
        meta: "Граници • Точки",
        thumbnail: "/images/services/trasirane-thumb.jpg",
        ogImage: "/images/services/trasirane-og.png",
        description:
          "Точно обозначаване на границите на имота на място по наличните данни и документи.",
        neededWhen: [
          "Преди изграждане на ограда",
          "Преди строителство или покупко-продажба",
          "При спор или неяснота относно границите",
        ],
        requiredDocs: [
          "Документ за собственост",
          "Скица, схема или налични кадастрални данни",
        ],
        deliverables: [
          "Трасирани гранични точки на място",
          "Разяснение по извършеното трасиране",
        ],
        processSteps: [
          "Преглед на наличните данни",
          "Уточняване на обхвата",
          "Излизане на терен",
          "Маркиране на точките",
        ],
      },
      {
        slug: "na-sgradi",
        title: "Трасиране на сгради",
        meta: "Оси • Контури",
        thumbnail: "/images/services/trasirane-thumb.jpg",
        description:
          "Пренасяне на проектните оси и контури на сгради на място преди започване на строителството.",
      },
      {
        slug: "na-osi-i-konstruktivni-elementi",
        title: "Трасиране на оси и конструктивни елементи",
        meta: "Конструкция • Точност",
        thumbnail: "/images/services/trasirane-thumb.jpg",
        description:
          "Трасиране на оси, конструктивни елементи и характерни точки според проекта.",
      },
      {
        slug: "na-lineyni-saorazhenia",
        title: "Трасиране на линейни съоръжения",
        meta: "Трасета • Канали",
        thumbnail: "/images/services/trasirane-thumb.jpg",
        description:
          "Трасиране на трасета, канали, пътища, кабелни линии и други линейни съоръжения.",
      },
      {
        slug: "na-ulichna-regulacia",
        title: "Трасиране на улична регулация",
        meta: "Регулация • Линии",
        thumbnail: "/images/services/trasirane-thumb.jpg",
        description:
          "Трасиране на регулационни линии и елементи по действащ устройствен план.",
      },
    ],
  },
  // ========================================================= Кадастър =========================================================
  {
    slug: "kadastar",
    title: "Кадастър",
    intro:
      "Кадастрални услуги, промени, отразяване на обекти и съдействие по административни процедури.",
    heroImage: "/images/services/kadastyr-og.png",
    items: [
      {
        slug: "skica-na-pozemlen-imot",
        title: "Скица на поземлен имот",
        meta: "Имот • Скица",
        thumbnail: "/images/services/kadastyr-thumb.jpg",
        ogImage: "/images/services/kadastyr-og.png",
        description:
          "Съдействие и подготовка на документи, свързани със скица на поземлен имот за сделки, процедури и справки.",
        neededWhen: [
          "При сделки с имот",
          "При административни процедури",
          "При нужда от актуални кадастрални данни",
        ],
        requiredDocs: ["Документ за собственост", "Идентификатор или точен адрес"],
        deliverables: [
          "Подготвени документи според случая",
          "Насоки за следващите стъпки",
        ],
      },
      {
        slug: "schema-na-samostoyatelen-obekt",
        title: "Схема на самостоятелен обект",
        meta: "Апартамент • Обект",
        thumbnail: "/images/services/kadastyr-thumb.jpg",
        description:
          "Съдействие по документи и материали за схема на апартамент, офис или друг самостоятелен обект.",
      },
      {
        slug: "proekt-za-izmenenie",
        title: "Проект за изменение в кадастралната карта",
        meta: "Промяна • Карта",
        thumbnail: "/images/services/kadastyr-thumb.jpg",
        description:
          "Изготвяне на проект и материали при промяна на граници, данни или обекти в кадастралната карта.",
      },
      {
        slug: "nanasyane-na-novi-sgradi",
        title: "Нанасяне на нови сгради и обекти",
        meta: "Сгради • Отразяване",
        thumbnail: "/images/services/kadastyr-thumb.jpg",
        description:
          "Подготовка и съдействие за отразяване на новопостроени сгради и обекти в кадастъра.",
      },
      {
        slug: "udostoverenie-za-identichnost",
        title: "Удостоверяване на идентичност",
        meta: "Документи • Данни",
        thumbnail: "/images/services/kadastyr-thumb.jpg",
        description:
          "Установяване на съответствие между данни от различни документи и кадастрални записи.",
      },
    ],
  },
  // ========================================================= Проектиране =========================================================
  {
    slug: "proektirane",
    title: "Проектиране",
    intro:
      "Проектантски услуги, изходни данни и координация за реализация на инвестиционни намерения.",
    heroImage: "/images/services/proektirane-og.png",
    items: [
      {
        slug: "vertikalna-planirovka",
        title: "Вертикална планировка",
        meta: "Коти • Наклони",
        thumbnail: "/images/services/vertical_plan-thumb.jpg",
        ogImage: "/images/services/vertical_plan-og.png",
        description:
          "Решения за коти, наклони и отводняване, съобразени с терена и проекта.",
        neededWhen: [
          "При ново строителство и благоустройство",
          "При дворове, алеи, рампи и прилежащи площи",
          "При проблеми с отводняване и наклони",
        ],
        requiredDocs: ["Геодезическо заснемане", "Налични проектни данни, ако има"],
        deliverables: ["Чертеж за вертикална планировка", "Коти и наклони за изпълнение"],
      },
      {
        slug: "proektantski-uslugi",
        title: "Проектантски услуги",
        meta: "Данни • Координация",
        thumbnail: "/images/services/proektirane-thumb.jpg",
        ogImage: "/images/services/proektirane-og.png",
        description:
          "Координация, изходни данни и проектни материали според обхвата на конкретния проект.",
      },
      {
        slug: "konsultacia-i-ocenka",
        title: "Консултация и оценка",
        meta: "План • Срокове",
        thumbnail: "/images/services/consulting-thumb.jpg",
        ogImage: "/images/services/consulting-og.jpg",
        description:
          "Ориентиране по случая, необходимите документи и най-подходящия ред за действие.",
      },
    ],
  },
  // ========================================================= Градоустройство =========================================================
  {
    slug: "gradoustroistvo",
    title: "Градоустройство",
    intro: "Устройствени процедури, ПУП, регулация и планиране на развитие на имоти.",
    heroImage: "/images/services/docs-og.jpg",
    items: [
      {
        slug: "izrabotvane-na-pup",
        title: "Изработване на ПУП",
        meta: "ПУП • Устройство",
        thumbnail: "/images/services/docs-thumb.jpg",
        description:
          "Съдействие при изработване на подробен устройствен план за застрояване, регулация и развитие на имота.",
      },
      {
        slug: "izmenenie-na-pup",
        title: "Изменение на ПУП",
        meta: "Промяна • План",
        thumbnail: "/images/services/docs-thumb.jpg",
        description:
          "Съдействие при изменение на действащ подробен устройствен план според конкретния казус.",
      },
      {
        slug: "raboten-ustroistven-plan",
        title: "Работен устройствен план",
        meta: "РУП • Параметри",
        thumbnail: "/images/services/docs-thumb.jpg",
        description:
          "Работен устройствен план за уточняване на параметрите на застрояване и режимите в имота.",
      },
      {
        slug: "plan-za-regulacia",
        title: "План за регулация",
        meta: "Регулация • УПИ",
        thumbnail: "/images/services/docs-thumb.jpg",
        description:
          "Процедури и материали, свързани с регулационни линии, улични профили и устройствен режим.",
      },
      {
        slug: "razdelyane-i-obedinyavane-na-upi",
        title: "Разделяне и обединяване на УПИ",
        meta: "УПИ • Промени",
        thumbnail: "/images/services/docs-thumb.jpg",
        description:
          "Подготовка и координация за разделяне или обединяване на урегулирани поземлени имоти.",
      },
    ],
  },
] as const;
