"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper/types";

import ServiceCard from "../parts/ServiceCard";
import type { ServiceItem } from "@/config/site-content";
import { getServiceHref } from "@/utils/selectors";

import clsx from "clsx";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface SwiperCarouselProps {
  items: ServiceItem[];
}

export default function SwiperCarousel({ items }: SwiperCarouselProps) {
  const swiperRef = useRef<SwiperType | null>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const syncPosition = (swiper: SwiperType) => {
    setAtStart(swiper.isBeginning);
    setAtEnd(swiper.isEnd);
  };

  useEffect(() => {
    if (swiperRef.current) syncPosition(swiperRef.current);
  }, []);

  // Arrow base
  const edgeBase = clsx(
    "pointer-events-auto absolute top-0 z-10 hidden md:block h-full w-16 lg:w-20",
    "transition-all duration-200 ease-out",
    "group"
  );

  const edgeLeft = clsx(
    edgeBase,
    "js-swiper-prev left-0",
    atStart && "opacity-0 pointer-events-none"
  );
  const edgeRight = clsx(
    edgeBase,
    "js-swiper-next right-0",
    atEnd && "opacity-0 pointer-events-none"
  );

  const chevron = clsx(
    "absolute top-1/2 -translate-y-1/2",
    "text-5xl lg:text-6xl font-extralight leading-none",
    "transition-all duration-200 ease-out"
  );

  // Arrow overlay
  const overlayBase = clsx(
    "pointer-events-none absolute top-1/2 -translate-y-1/2",
    "h-full",
    "rounded-3xl",
    "opacity-90 group-hover:opacity-100",
    "transition-opacity duration-200"
  );

  const overlayLeft = clsx(
    overlayBase,
    "left-0 w-16 lg:w-20 rounded-l-none",
    "bg-linear-to-r from-bg-muted/85 via-bg-muted/35 to-transparent",
    "group-hover:via-bg-muted/50"
  );

  const overlayRight = clsx(
    overlayBase,
    "right-0 w-16 lg:w-20 rounded-r-none",
    "bg-linear-to-l from-bg-muted/85 via-bg-muted/35 to-transparent",
    "group-hover:via-bg-muted/50"
  );

  return (
    <div className="relative pt-6 no-drag">
      {/* Custom edge navigation zones */}
      <div className="hidden md:block pointer-events-none">
        <button
          type="button"
          aria-label="Предишна"
          disabled={atStart}
          className={edgeLeft}
        >
          {/* overlay shadow LEFT */}
          <div className={overlayLeft} />
          <span
            className={clsx(
              chevron,
              "left-4 lg:left-6",
              atStart
                ? "text-tx-secondary/60"
                : "text-tx-secondary group-hover:text-accent group-hover:-translate-x-1"
            )}
          >
            ‹
          </span>
        </button>

        <button
          type="button"
          aria-label="Следваща"
          disabled={atEnd}
          className={edgeRight}
        >
          {/* overlay shadow RIGHT*/}
          <div className={overlayRight} />
          <span
            className={clsx(
              chevron,
              "right-4 lg:right-6",
              atEnd
                ? "text-tx-secondary/60"
                : "text-tx-secondary group-hover:text-accent group-hover:translate-x-1"
            )}
          >
            ›
          </span>
        </button>
      </div>

      {/* Swiper wrapper */}
      <div className="w-full max-w-full">
        <Swiper
          className="w-full!"
          slidesOffsetBefore={-8}
          slidesOffsetAfter={-8}
          modules={[Navigation, Pagination]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            syncPosition(swiper);
          }}
          onSlideChange={syncPosition}
          onResize={syncPosition}
          navigation={{
            prevEl: ".js-swiper-prev",
            nextEl: ".js-swiper-next",
          }}
          pagination={{
            el: ".services-pagination",
            clickable: true,
          }}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 12 },
            400: { slidesPerView: 1.2, spaceBetween: 12 },
            480: { slidesPerView: 1.5, spaceBetween: 14 },
            640: { slidesPerView: 2, spaceBetween: 14 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            840: { slidesPerView: 2.2, spaceBetween: 20 },
            1024: { slidesPerView: 2.5, spaceBetween: 16 },
            1100: { slidesPerView: 3, spaceBetween: 8 },
            1240: { slidesPerView: 3, spaceBetween: 16 },
            1536: { slidesPerView: 3.5, spaceBetween: 16 },
          }}
        >
          {items.map((item) => (
            <SwiperSlide key={item.slug} className="h-auto min-w-0!">
              <ServiceCard
                title={item.title}
                desc={item.description}
                thumb={item.thumbnail}
                href={getServiceHref(item.slug)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Pagination dots – always below */}
      <div className="services-pagination mt-6 flex justify-center gap-2.5" />
    </div>
  );
}
