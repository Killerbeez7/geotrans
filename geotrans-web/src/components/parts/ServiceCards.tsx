import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";

import { IoIosMore } from "react-icons/io";
import {
  FaCompassDrafting,
  FaRulerCombined,
  FaMapLocationDot,
  FaLayerGroup,
  FaPenRuler,
  FaClipboardCheck,
  FaCircleNodes,
  FaAngleRight,
} from "react-icons/fa6";

import type { IconType } from "react-icons";
import type { ServicesContent } from "@/config/site-content";

const ICON_BY_SLUG: Record<string, IconType> = {
  "geodezichesko-zasnemane": FaCompassDrafting,
  trasirane: FaRulerCombined,
  kadastar: FaMapLocationDot,
  "vertikalna-planirovka": FaLayerGroup,
  proektirane: FaPenRuler,
  konsultacia: FaClipboardCheck,
  "dokumenti-proceduri": FaCircleNodes,
};

type ServiceItem = ServicesContent["items"][number];

export const ServiceCard = ({ item }: { item: ServiceItem }) => {
  const Icon = ICON_BY_SLUG[item.slug] ?? FaCompassDrafting;

  return (
    <Link
      href={`/services/${item.slug}`}
      className="group relative flex aspect-video sm:aspect-auto sm:h-80 flex-col justify-end overflow-hidden rounded-2xl bg-bg-nav"
    >
      {/* Background Image */}
      <Image
        src={item.thumbnail}
        alt={item.cardMeta}
        width={400}
        height={400}
        className="absolute inset-0 h-full w-full object-cover opacity-95 transition-all duration-500 group-hover:scale-110 group-hover:opacity-50"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/35 to-black/5 rounded-2xl" />

      <div className="relative p-6 text-white">
        {item.cardMeta && (
          <p className="mb-1 text-[10px] font-black uppercase tracking-[0.2em] text-accent">
            {item.cardMeta}
          </p>
        )}
        <div className="flex items-center gap-3">
          <Icon className="h-5 w-5 text-white/50" />
          <h3 className="text-xl text-tx-inverse/90 font-bold leading-tight">
            {item.cardTitle ?? item.title}
          </h3>
        </div>

        {/* Expanding Description on Hover (Desktop) */}
        <div className="max-h-24 overflow-hidden transition-all duration-500 md:max-h-0 md:group-hover:max-h-24">
          <p className="mt-3 text-sm text-tx-inverse/80 line-clamp-2">
            {item.description}
          </p>
        </div>

        <div className="mt-4 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-accent/90">
          {/* <div className="mt-4 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-tx-inverse/80"> */}
          Детайли
          <FaAngleRight className="transition-transform group-hover:translate-x-0.5" />
        </div>
      </div>
    </Link>
  );
};

// export const MoreCard = ({ extraCount }: { extraCount: number }) => {
//   const more = Math.max(1, extraCount);

//   return (
//     <Link
//       href="/services"
//       className={clsx(
//         "group relative flex h-full flex-col overflow-hidden",
//         "rounded-2xl bg-white",
//         "border border-gray-200/70 border-dashed", // dashed за да се отличава леко
//         "p-6 sm:p-7 lg:p-8",
//         "shadow-sm hover:shadow-md",
//         "transition-all duration-300 ease-out",
//         "hover:-translate-y-1 hover:scale-[1.02]",
//         "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2"
//       )}
//     >
//       {/* Същият топ акцент */}
//       <span
//         className={clsx(
//           "absolute inset-x-0 top-0 h-1 bg-accent scale-x-0 origin-left",
//           "transition-transform duration-400 ease-out",
//           "group-hover:scale-x-100"
//         )}
//       />

//       <div className="flex flex-col h-full">
//         <div className="flex items-start gap-4">
//           <div
//             className={clsx(
//               "shrink-0 flex items-center justify-center rounded-xl",
//               "h-10 w-10 sm:h-12 sm:w-12",
//               "bg-accent/10 text-accent",
//               "transition-colors duration-300",
//               "group-hover:bg-accent/15"
//             )}
//           >
//             <IoIosMore className="h-5 w-5 sm:h-6 sm:w-6" />
//           </div>

//           <div className="flex-1 min-w-0">
//             <h3 className="text-base sm:text-lg font-semibold leading-tight text-gray-900">
//               Още услуги
//             </h3>
//             <p className="mt-1 text-sm text-gray-500 font-medium">+{more} налични</p>
//           </div>
//         </div>

//         <div className="hidden sm:block my-5 h-px bg-gray-200" />

//         <p className="text-sm sm:text-base leading-relaxed text-gray-600 line-clamp-3">
//           Разгледайте всички геодезически услуги, процедури и документи на едно място.
//         </p>

//         <div className="mt-auto pt-5 sm:pt-6">
//           <span
//             className={clsx(
//               "inline-flex items-center gap-1.5",
//               "text-sm font-medium text-gray-500",
//               "transition-all duration-300",
//               "group-hover:text-accent group-hover:gap-2"
//             )}
//           >
//             Към всички услуги
//             <FaAngleRight className="text-xs opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
//           </span>
//         </div>
//       </div>
//     </Link>
//   );
// };

export const MoreCard = ({ extraCount }: { extraCount: number }) => {
  const more = Math.max(1, extraCount);

  return (
    <Link
      href="/services"
      className="group relative flex aspect-video sm:aspect-auto sm:h-80 flex-col justify-end overflow-hidden rounded-2xl bg-bg-nav"
    >
      {/* Background Image - сложи тук подходяща снимка за фон */}
      <Image
        src="/images/projects/project-4.webp" // Смени с твой път към обща снимка
        alt="Всички услуги"
        width={400}
        height={400}
        className="absolute inset-0 h-full w-full object-cover opacity-60 transition-all duration-500 group-hover:scale-110 group-hover:opacity-40"
      />

      {/* Gradient Overlay - същият като в ServiceCard */}
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent rounded-2xl" />

      <div className="relative p-6 text-white">
        {/* Малък надпис над заглавието */}
        <p className="mb-1 text-[10px] font-black uppercase tracking-[0.2em] text-accent">
          Виж още +{more}
        </p>

        <div className="flex items-center gap-3">
          {/* Икона в същия стил */}
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/20 text-accent">
            <IoIosMore className="h-5 w-5" />
          </div>
          <h3 className="text-xl text-tx-inverse/90 font-bold leading-tight">
            Всички услуги
          </h3>
        </div>

        {/* Описание, което се появява при hover по същия начин */}
        <div className="max-h-24 overflow-hidden transition-all duration-500 md:max-h-0 md:group-hover:max-h-24">
          <p className="mt-3 text-sm text-tx-inverse/80 line-clamp-2">
            Разгледайте пълния списък с геодезически услуги, процедури и документи.
          </p>
        </div>

        {/* Бутон "Детайли" в същия стил */}
        <div className="mt-4 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-accent/90">
          Към списъка
          <FaAngleRight className="transition-transform group-hover:translate-x-0.5" />
        </div>
      </div>
    </Link>
  );
};
