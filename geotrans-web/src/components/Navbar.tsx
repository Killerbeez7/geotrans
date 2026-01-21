"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

import clsx from "clsx";
import { IoIosArrowDown } from "react-icons/io";

import { NAV_LINKS, NavItem } from "../app/config/NavConfig";
import { SERVICE_LINKS } from "../app/config/ServicesConfig"

const navLinkClasses = (isActive: boolean) =>
    clsx(
        "group flex items-center gap-1",
        "px-2 py-1 transition",
        "border-b-2 border-transparent",
        "hover:border-accent",
        isActive && "border-b-accent"
    );

export const Navbar = () => {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);

    const isActivePath = (path: string | null): boolean => {
        if (!path) {
            return false;
        }

        return pathname === path;
    };


    const renderDesktopItem = (item: NavItem) => {
        const isActive = isActivePath(item.href);

        return (
            <li key={item.name} className="relative group">
                {/* trigger */}
                <Link
                    href={item.href}
                    className={navLinkClasses(isActive)}
                    aria-haspopup={item.hasDropdown ? "menu" : undefined}
                >
                    <span>{item.name}</span>

                    {item.hasDropdown && (
                        <IoIosArrowDown
                            className="
                         mt-px text-xs opacity-70
                         transition-transform duration-200
                         group-hover:rotate-180
                       "
                        />
                    )}
                </Link>

                {/* dropdown */}
                {item.hasDropdown && (
                    <div
                        className="
                       absolute left-0 top-full mt-2
    min-w-[220px]
    rounded-xl bg-white text-black shadow-lg
    opacity-0 scale-95 pointer-events-none
    transition-all duration-200
    group-hover:opacity-100
    group-hover:scale-100
    group-hover:pointer-events-auto

    before:absolute before:-top-2 before:left-0
    before:h-2 before:w-full before:content-['']
                    "
                    >
                        <ul className="py-2">
                            {/* All services */}
                            <li>
                                <Link
                                    href="/services"
                                    className="block px-4 py-2 font-medium hover:bg-black/5"
                                >
                                    Всички услуги
                                </Link>
                            </li>

                            <li className="my-1 h-px bg-black/10" />

                            {/* Individual services */}
                            {SERVICE_LINKS.map((service) => (
                                <li key={service.slug}>
                                    <Link
                                        href={`/services/${service.slug}`}
                                        className="flex items-center gap-2 px-4 py-2 hover:bg-black/5"
                                    >
                                        {service.icon && <span>{service.icon}</span>}
                                        <span>{service.title}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}


            </li>
        );
    };

    const renderMobileItem = (item: NavItem) => {
        const isActive = isActivePath(item.href);

        return (
            <Link
                key={item.name}
                href={item.href}
                className={navLinkClasses(isActive)}
            >
                {item.name}
            </Link>
        );
    };

    return (
        <header className="sticky top-0 z-50 w-full bg-navbar text-navbar-text shadow-md">
            <nav className="mx-auto max-w-4xl px-4">
                <div className="flex h-14 items-center justify-between">
                    {/* Brand */}
                    <Link href="/" className="font-semibold tracking-wide">
                        GeoTrans
                    </Link>

                    {/* Desktop nav */}
                    <ul className="hidden items-center gap-6 md:flex">
                        {NAV_LINKS.map((item) => renderDesktopItem(item))}

                        {/* Desktop CTA */}
                        <li>
                            <Link
                                href="/contacts"
                                className="rounded-lg bg-btn-primary px-3 py-2 text-sm font-semibold text-white transition hover:opacity-90"
                            >
                                Запитване
                            </Link>
                        </li>
                    </ul>

                    {/* Mobile button */}
                    <button
                        type="button"
                        className="inline-flex items-center justify-center rounded-md p-2 transition hover:bg-white/10 md:hidden"
                        aria-label="Отвори меню"
                        aria-expanded={mobileOpen}
                        onClick={() => setMobileOpen((v) => !v)}
                    >
                        <span className="text-lg">{mobileOpen ? "✕" : "☰"}</span>
                    </button>
                </div>

                {/* Mobile menu */}
                {mobileOpen && (
                    <div className="md:hidden pb-4">
                        <div className="rounded-xl bg-white/10 p-3">
                            <div className="flex flex-col gap-2">
                                {NAV_LINKS.map((item) => renderMobileItem(item))}

                                {/* Mobile CTA */}
                                <Link
                                    href="/contacts"
                                    className="mt-2 rounded-lg bg-btn-primary px-3 py-2 text-center text-sm font-semibold text-white"
                                >
                                    Запитване
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};
