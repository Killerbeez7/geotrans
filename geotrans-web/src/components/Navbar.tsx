"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

import clsx from "clsx";
import { IoIosArrowDown } from "react-icons/io";
import { NAV_LINKS, NavItem } from "../config/NavConfig";
import { SERVICE_LINKS } from "../config/ServicesConfig";

// Navigation links
const navLinkClass = (isActive: boolean) =>
  clsx(
    "group flex items-center gap-1",
    "px-2 py-1 transition",
    "border-b-2 border-transparent",
    "hover:border-accent",
    isActive && "border-b-accent"
  );

// Dropdown sublinks
const srvLinkClass = (isActive: boolean) =>
  clsx(
    "flex items-center gap-2 px-4 py-2 transition",
    isActive ? "bg-black/10 font-medium text-black" : "hover:bg-black/5"
  );

export const Navbar = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  // Close all dropdowns and menues
  const closeAll = () => {
    setMobileOpen(false);
    setMobileDropdown(null);
  };

  // Check active path for links
  const isActivePath = (href?: string): boolean => {
    if (!href || !pathname) return false;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  // Check active path for sublinks
  const isExact = (href: string): boolean => {
    return pathname === href;
  };

  const renderDesktopItem = (item: NavItem) => {
    const isActive = isActivePath(item.href);

    return (
      <li key={item.name} className="relative group">
        <Link
          href={item.href}
          draggable={false}
          className={navLinkClass(isActive)}
          aria-haspopup={item.hasDropdown ? "menu" : undefined}
        >
          <span>{item.name}</span>

          {item.hasDropdown && (
            <IoIosArrowDown className="mt-px text-xs opacity-70 transition-transform duration-200 group-hover:rotate-180" />
          )}
        </Link>

        {/* Dropdown */}
        {item.hasDropdown && (
          <div
            className="absolute left-0 top-full mt-2
                            min-w-[220px]  
   
  

                            rounded-xl bg-white text-black shadow-lg
                            opacity-0 scale-95 pointer-events-none
                            transition-all duration-200
                            group-hover:opacity-100
                            group-hover:scale-100
                            group-hover:pointer-events-auto
                            before:absolute before:-top-2 before:left-0
                            before:h-2 before:w-full before:content-['']"
          >
            <ul className="py-2">
              {/* All services */}
              <Link
                href="/services"
                draggable={false}
                aria-current={isExact("/services") ? "page" : undefined}
                className={clsx(
                  "block px-4 py-2 font-medium transition",
                  isExact("/services") ? "bg-black/10 text-black" : "hover:bg-black/5"
                )}
              >
                Всички услуги
              </Link>

              <li className="my-1 h-px bg-black/10" />

              {/* Specific services */}
              {SERVICE_LINKS.map((service) => {
                const isActive = isExact(`/services/${service.slug}`);

                return (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${service.slug}`}
                      draggable={false}
                      aria-current={isActive ? "page" : undefined}
                      className={srvLinkClass(isActive)}
                    >
                      {service.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </li>
    );
  };

  const renderMobileItem = (item: NavItem) => {
    const isActive = isActivePath(item.href);
    const isOpen = mobileDropdown === item.name;

    // Item WITH dropdown (Services)
    if (item.hasDropdown) {
      return (
        <div key={item.name} className="flex flex-col">
          <button
            type="button"
            className={clsx(
              navLinkClass(isActive),
              "flex w-full items-center justify-between"
            )}
            onClick={() => setMobileDropdown(isOpen ? null : item.name)}
            aria-expanded={isOpen}
          >
            <span>{item.name}</span>
            <IoIosArrowDown
              className={clsx("text-sm transition-transform", isOpen && "rotate-180")}
            />
          </button>

          {isOpen && (
            <div className="ml-4 mt-1 flex flex-col gap-1">
              <Link
                href="/services"
                onClick={closeAll}
                className="px-4 py-2 text-sm hover:bg-white/10 rounded-md"
              >
                Всички услуги
              </Link>

              {SERVICE_LINKS.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  onClick={closeAll}
                  className="px-4 py-2 text-sm hover:bg-white/10 rounded-md"
                >
                  {service.title}
                </Link>
              ))}
            </div>
          )}
        </div>
      );
    }

    // Normal mobile link
    return (
      <Link
        key={item.name}
        href={item.href}
        className={navLinkClass(isActive)}
        onClick={closeAll}
      >
        {item.name}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-navbar text-navbar-text shadow-md no-drag">
      <nav className="mx-auto max-w-4xl px-4">
        <div className="flex h-14 items-center justify-between">
          {/* Brand */}
          <Link href="/" draggable={false} className="font-semibold tracking-wide">
            GeoTrans
          </Link>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-6 md:flex">
            {NAV_LINKS.map((item) => renderDesktopItem(item))}

            {/* Desktop CTA */}
            <li>
              <Link
                href="/contacts"
                draggable={false}
                className="
                                inline-flex items-center justify-center
                                rounded-lg bg-btn-primary
                                px-3 py-2
                                text-sm font-semibold text-white

                                transform
                                transition-transform duration-200 ease-out
                                hover:scale-103
                                hover:shadow-lg
                                "
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
            onClick={() => setMobileOpen((o) => !o)}
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
                  draggable={false}
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
