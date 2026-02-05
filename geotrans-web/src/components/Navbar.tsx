"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

import clsx from "clsx";
import { IoIosArrowDown } from "react-icons/io";
import { NAV_LINKS, NavItem } from "../config/NavConfig";
import { NavSrvList } from "./NavSrvList";

// Styles
const navLinkCls = (active: boolean) =>
  clsx(
    "relative group flex items-center gap-1 px-2 py-1",
    "text-nav-text",
    // Underline on hover
    "after:absolute after:left-1/2 after:bottom-0",
    "after:h-[2px] after:w-full after:-translate-x-1/2",
    "after:origin-center after:scale-x-0 after:bg-nav-hover",
    "after:transition-transform after:duration-300 after:ease-out",
    "group-hover:after:scale-x-100",
    active && "after:scale-x-100"
  );

const desktopSrvCls = (active: boolean) =>
  clsx(
    "flex items-center gap-2 px-4 py-2 transition whitespace-nowrap",
    active ? "bg-black/15" : "hover:bg-black/10"
  );

// Component
export const Navbar = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [desktopDropdown, setDesktopDropdown] = useState<string | null>(null);

  const closeAll = () => {
    setMobileOpen(false);
    setMobileDropdown(null);
    setDesktopDropdown(null);
  };

  const isActivePath = (href?: string): boolean => {
    if (!href || !pathname) return false;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  // Desktop render
  const renderDesktopItem = (item: NavItem) => {
    const isActive = isActivePath(item.href);
    const isOpen = desktopDropdown === item.name;

    return (
      <li
        key={item.name}
        className="relative group"
        onMouseEnter={() => setDesktopDropdown(item.name)}
        onMouseLeave={() => setDesktopDropdown(null)}
      >
        <Link
          href={item.href}
          draggable={false}
          className={navLinkCls(isActive)}
          aria-haspopup={item.hasDropdown ? "menu" : undefined}
        >
          {item.name}
          {item.hasDropdown && (
            <IoIosArrowDown
              className={clsx(
                "mt-px text-xs opacity-70 transition-transform",
                isOpen && "rotate-180"
              )}
            />
          )}
        </Link>

        {item.hasDropdown && (
          <div
            className={clsx(
              "absolute left-[-10] top-full mt-2 min-w-56",
              "rounded-xl bg-nav text-nav-text shadow-lg",
              "transition-all duration-200 ease-out",
              isOpen
                ? "opacity-100 scale-100 pointer-events-auto"
                : "opacity-0 scale-95 pointer-events-none",
              "before:absolute before:-top-2 before:h-2 before:w-full"
            )}
          >
            <ul className="py-2">
              <NavSrvList
                itemClass={desktopSrvCls}
                onClick={() => setDesktopDropdown(null)}
              />
            </ul>
          </div>
        )}
      </li>
    );
  };

  // Mobile render
  const renderMobileItem = (item: NavItem) => {
    const isActive = isActivePath(item.href);
    const isOpen = mobileDropdown === item.name;

    if (!item.hasDropdown) {
      return (
        <Link
          key={item.name}
          href={item.href}
          onClick={closeAll}
          className={navLinkCls(isActive)}
        >
          {item.name}
        </Link>
      );
    }

    return (
      <div key={item.name} className="flex flex-col">
        <button
          className={clsx(navLinkCls(isActive), "flex justify-between w-full")}
          onClick={() => setMobileDropdown(isOpen ? null : item.name)}
          aria-expanded={isOpen}
        >
          {item.name}
          <IoIosArrowDown
            className={clsx("transition-transform", isOpen && "rotate-180")}
          />
        </button>

        {isOpen && (
          <ul className="ml-4 mt-1 flex flex-col gap-1">
            <NavSrvList
              onClick={closeAll}
              itemClass={(active) =>
                clsx(
                  "px-4 py-2 rounded-md text-sm transition",
                  active ? "bg-white/15 font-medium" : "hover:bg-bg-muted/70"
                )
              }
            />
          </ul>
        )}
      </div>
    );
  };

  // Component render
  return (
    <header className="sticky top-0 z-50 w-full bg-nav shadow-md no-drag">
      <nav className="mx-auto max-w-7xl px-4 lg:px-8 ">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            draggable={false}
            className="flex items-center gap-2 pl-2 text-md sm:text-xl tracking-wide"
          >
            <svg
              className="w-7 h-7 text-nav-hover"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              aria-hidden
            >
              <g clipPath="url(#a)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.27 14.1a6.5 6.5 0 0 0 3.67-3.45q-1.24.21-2.7.34-.31 1.83-.97 3.1M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.48-1.52a7 7 0 0 1-.96 0H7.5a4 4 0 0 1-.84-1.32q-.38-.89-.63-2.08a40 40 0 0 0 3.92 0q-.25 1.2-.63 2.08a4 4 0 0 1-.84 1.31zm2.94-4.76q1.66-.15 2.95-.43a7 7 0 0 0 0-2.58q-1.3-.27-2.95-.43a18 18 0 0 1 0 3.44m-1.27-3.54a17 17 0 0 1 0 3.64 39 39 0 0 1-4.3 0 17 17 0 0 1 0-3.64 39 39 0 0 1 4.3 0m1.1-1.17q1.45.13 2.69.34a6.5 6.5 0 0 0-3.67-3.44q.65 1.26.98 3.1M8.48 1.5l.01.02q.41.37.84 1.31.38.89.63 2.08a40 40 0 0 0-3.92 0q.25-1.2.63-2.08a4 4 0 0 1 .85-1.32 7 7 0 0 1 .96 0m-2.75.4a6.5 6.5 0 0 0-3.67 3.44 29 29 0 0 1 2.7-.34q.31-1.83.97-3.1M4.58 6.28q-1.66.16-2.95.43a7 7 0 0 0 0 2.58q1.3.27 2.95.43a18 18 0 0 1 0-3.44m.17 4.71q-1.45-.12-2.69-.34a6.5 6.5 0 0 0 3.67 3.44q-.65-1.27-.98-3.1"
                  fill="currentColor"
                />
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="currentColor" d="M0 0h16v16H0z" />
                </clipPath>
              </defs>
            </svg>
            <span className="text-nav-text">Geo</span>
            <span className="text-nav-text">Trans</span>
          </Link>

          {/* Desktop */}
          <ul className="hidden items-center gap-2 lg:gap-6 md:flex">
            {NAV_LINKS.map(renderDesktopItem)}
          </ul>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-md text-2xl text-nav-text"
            onClick={() => setMobileOpen((o) => !o)}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden text-(--text-inverse) pb-6 mt-2">
            <div className="p-4 flex flex-col gap-3">
              {NAV_LINKS.map(renderMobileItem)}

              <Link
                href="/contacts"
                onClick={closeAll}
                className="mt-3 rounded-lg bg-nav-cta px-4 py-3 text-center text-sm font-semibold text-btn-primary-text hover:bg-nav-cta-hover transition"
              >
                Запитване
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
