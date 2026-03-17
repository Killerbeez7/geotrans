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
  "more-services": IoIosMore,
};

type ServiceItem = ServicesContent["items"][number];

export const ServiceCard = ({
  item,
  extraCount,
}: {
  item: ServiceItem;
  extraCount?: number;
}) => {
  const Icon = ICON_BY_SLUG[item.slug] ?? FaCompassDrafting;

  const isMore = item.id === "more";
  const href = isMore ? "/services" : `/services/${item.slug}`;
  const metaText =
    isMore && extraCount ? `${item.cardMeta} + ${extraCount}` : item.cardMeta;

  return (
    <Link
      href={href}
      aria-label={`Детайли за ${item.cardTitle ?? item.title}`}
      className={clsx(
        "group relative flex h-[220px] sm:h-80 flex-col justify-end overflow-hidden rounded-2xl bg-black",
        "shadow-[0_14px_34px_-24px_rgba(0,0,0,0.20)]",
        "transition-all duration-300"
      )}
    >
      {/* Background Image */}
      <Image
        src={item.thumbnail}
        alt={metaText}
        width={400}
        height={400}
        // className={clsx(
        //   "absolute inset-0 h-full w-full object-cover transition-all duration-500 group-hover:scale-110",
        //   isMore
        //     ? "opacity-60 group-hover:opacity-40"
        //     : "opacity-95 group-hover:opacity-50"
        // )}
        className="absolute inset-0 h-full w-full object-cover opacity-95 transition-all duration-500 group-hover:scale-110 group-hover:opacity-50"
      />

      {/* Gradient Overlay */}
      <div
        className={clsx(
          "absolute inset-0 rounded-2xl bg-linear-to-t",
          "from-black via-black/55 to-black/10",
          "md:via-black/35 md:to-black/5"
        )}
      />

      <div className="relative p-5 sm:p-6 text-white">
        {metaText && (
          <p className="hidden mb-2 md:inline-block text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.18em] text-accent">
            {metaText}
          </p>
        )}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <Icon className="h-4.5 w-4.5 sm:h-5 sm:w-5 text-white/70" />
          <h3 className="text-[17px] sm:text-xl text-tx-inverse/95 font-bold leading-[1.08]">
            {item.cardTitle ?? item.title}
          </h3>
        </div>

        {/* Desktop: expanding desc on hover */}
        <div className="max-h-24 overflow-hidden transition-all duration-500 md:max-h-0 md:group-hover:max-h-24">
          <p className="mt-2 sm:mt-3 text-[13px] sm:text-sm leading-relaxed line-clamp-3 text-tx-inverse/85">
            {item.description}
          </p>
        </div>

        <div className="mt-3 sm:mt-4 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-accent md:text-tx-inverse/50">
          {isMore ? "Към списъка" : "Детайли"}
          <FaAngleRight className="transition-transform group-hover:translate-x-0.5" />
        </div>
      </div>
    </Link>
  );
};
