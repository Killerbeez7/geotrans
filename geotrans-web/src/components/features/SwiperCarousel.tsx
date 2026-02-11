"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import ServiceCard from "../parts/ServiceCard";
import { SERVICE_LINKS } from "@/config/ServicesConfig";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function SwiperCarousel() {
    return (
        <div className="relative pt-6 md:px-10">
            {/* slide arrows */}
            <div className="hidden md:block">
                <div className="swiper-button-prev -left-5! z-10" />
                <div className="swiper-button-next -right-5! z-10" />
            </div>
            <Swiper
                modules={[Navigation, Pagination]}
                navigation={{
                    prevEl: ".swiper-button-prev",
                    nextEl: ".swiper-button-next",
                }}
                pagination={{
                    el: ".swiper-pagination",
                    clickable: true,
                }}
                breakpoints={{
                    // Mobile (small phones)
                    0: { slidesPerView: 1, spaceBetween: 0 }, //16
                    320: { slidesPerView: 1, spaceBetween: 12 }, //24
                    480: { slidesPerView: 1.2, spaceBetween: 20 }, //20
                    // Small tablets / larger phones
                    640: { slidesPerView: 1.5, spaceBetween: 4 }, // slidesPerView: 2, spaceBetween: 20
                    768: { slidesPerView: 2, spaceBetween: 8 }, //24
                    // Tablets / small laptops
                    1024: { slidesPerView: 2.5, spaceBetween: 8 }, // slidesPerView: 3, spaceBetween: 24
                    1200: { slidesPerView: 3, spaceBetween: 8 }, //24
                    // Larger laptops / desktops
                    1340: { slidesPerView: 3, spaceBetween: 8 }, //24
                    1536: { slidesPerView: 4, spaceBetween: 4 }, //20
                }}
            >
                {SERVICE_LINKS.map((s) => (
                    <SwiperSlide key={s.slug}>
                        <ServiceCard
                            title={s.title}
                            desc={s.description}
                            thumb={s.thumbnail}
                            href={s.href}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* pagination */}
            <div className="swiper-pagination relative! top-0! mt-4 flex justify-center" />
        </div>
    );
}
