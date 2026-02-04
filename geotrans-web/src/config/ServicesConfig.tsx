export type Service = {
    href: string;
    slug: string;
    title: string;
    thumbnail: string;
    description: string;
    icon?: string;
    neededWhen: string[];
    requiredDocs: string[];
    deliverables: string[];
};

export const SERVICE_LINKS: Service[] = [
    {
        href: "/services/geodezichesko-zasnemane",
        slug: "geodezichesko-zasnemane",
        title: "Геодезическо заснемане",
        thumbnail: "/images/tripod.jpg",
        description:
            "Заснемане на терени и обекти за проектиране, строителство и документация.",
        neededWhen: [
            "При проектиране и инвестиционни намерения",
            "При строителство и контрол на изпълнение",
            "При изготвяне/актуализация на документация",
        ],
        requiredDocs: [
            "Документ за собственост (ако е приложимо)",
            "Налични скици/проекти (ако има)",
            "Адрес/идентификатор на имота (ако е наличен)",
        ],
        deliverables: [
            "Геодезически чертеж/ситуация",
            "Цифрови файлове (по договорка)",
            "Материали, готови за използване при проектиране/съгласуване",
        ],
    },
    {
        href: "/services/trasirane",
        slug: "trasirane",
        title: "Трасиране на имоти",
        thumbnail: "/images/trasirane.jpg",
        description: "Пренасяне на проектни точки/оси на терен и контролни измервания.",
        neededWhen: [
            "Трасиране на оси и контури на сгради",
            "Трасиране на граници, линии и елементи",
            "Контролни измервания по време на строителство",
        ],
        requiredDocs: ["Проект/чертеж (ако има)", "Задание/изисквания за трасиране"],
        deliverables: ["Трасиране на място", "Протокол/отчет (ако е необходим)"],
    },
    {
        href: "/services/kadastar",
        slug: "kadastar",
        title: "Кадастър",
        thumbnail: "/images/kadastyr.jpg",
        description: "Подготовка на материали и съдействие при кадастрални процедури.",
        neededWhen: [
            "Поправки/актуализации в КККР",
            "Нанасяне/промяна на обекти в кадастъра",
            "Скици/схеми и процедури към институции",
        ],
        requiredDocs: [
            "Документ за собственост",
            "Налични скици/схеми (ако има)",
            "Идентификатор/адрес",
        ],
        deliverables: [
            "Подготвени материали за процедура",
            "Съдействие по етапите (по договорка)",
        ],
    },
    {
        href: "/services/vertikalna-planirovka",
        slug: "vertikalna-planirovka",
        title: "Вертикална планировка",
        thumbnail: "/images/vertical_plan.jpg",
        description: "Решения за коти, наклони и отводняване според терена и проекта.",
        neededWhen: [
            "Нови сгради и дворове",
            "Реконструкции и благоустройство",
            "Отводняване и наклони",
        ],
        requiredDocs: [
            "Геодезическо заснемане (или възлагане към нас)",
            "Архитектурни данни (ако има)",
        ],
        deliverables: [
            "План/чертеж вертикална планировка",
            "Коти/наклони и обяснения (по договорка)",
        ],
    },
    {
        href: "/services/proektirane",
        slug: "proektirane",
        title: "Проектиране",
        thumbnail: "/images/proektirane.png",
        description:
            "Проектантски услуги, свързани с геодезия и устройствени решения (по обхват).",
        neededWhen: [
            "Инвестиционни намерения",
            "Подготовка за съгласуване",
            "Комбинирани услуги",
        ],
        requiredDocs: [
            "Изходни данни за имота/обекта",
            "Задание/изисквания",
            "Налични материали (ако има)",
        ],
        deliverables: [
            "Проектни материали по договорка",
            "Координация с други части (ако е приложимо)",
        ],
    },
];

export const getServiceBySlug = (slug: string) =>
    SERVICE_LINKS.find((s) => s.slug === slug);
