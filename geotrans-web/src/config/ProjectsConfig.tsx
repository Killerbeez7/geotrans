export type ProjectImageProps = {
    id: string | number;
    src: string;
    alt: string;
    caption?: string;
    category?: string;
    blurDataURL?: string;
};

export const PROJECT_IMAGES: ProjectImageProps[] = [
    {
        id: 1,
        src: "/images/tripod.jpg",
        alt: "Геодезическо заснемане на земеделски терен с GNSS",
        caption: "Точно определяне на граници върху 120 дка земеделска земя",
        category: "Заснемане",
    },
    {
        id: 2,
        src: "/images/trasirane.jpg",
        alt: "Работа с тотална станция на строителен обект",
        caption: "Трасиране на регулационни линии за нов строеж",
        category: "Трасиране",
    },

];
