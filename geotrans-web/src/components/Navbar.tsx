"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

import clsx from "clsx";
import { IoIosArrowDown } from "react-icons/io";
import { NAV_LINKS, NavItem } from "../config/NavConfig";
import { ServicesList } from "./ServicesList";

// Styles
const navLinkCls = (isActive: boolean) =>
  clsx(
    "text-lg text-navbar-text",
    "group flex items-center gap-1 px-2 py-1 transition",
    "border-b-2 border-transparent hover:border-accent",
    isActive && "border-b-accent"
  );

const desktopSrvCls = (isActive: boolean) =>
  clsx(
    "block px-4 py-2 transition",
    isActive ? "bg-black/10 font-medium text-black" : "hover:bg-black/5"
  );

// Component
export const Navbar = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  const closeAll = () => {
    setMobileOpen(false);
    setMobileDropdown(null);
  };

  const isActivePath = (href?: string): boolean => {
    if (!href || !pathname) return false;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  // Desktop render
  const renderDesktopItem = (item: NavItem) => {
    const active = isActivePath(item.href);

    return (
      <li key={item.name} className="relative group">
        <Link
          href={item.href}
          draggable={false}
          className={navLinkCls(active)}
          aria-haspopup={item.hasDropdown ? "menu" : undefined}
        >
          {item.name}

          {item.hasDropdown && (
            <IoIosArrowDown className="mt-px text-xs opacity-70 transition-transform group-hover:rotate-180" />
          )}
        </Link>

        {item.hasDropdown && (
          <div
            className={clsx(
              "absolute left-0 top-full mt-2 min-w-[220px]",
              " rounded-xl bg-white text-black shadow-lg",
              "opacity-0 scale-95 pointer-events-none",
              "     transition-all duration-200",
              " group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto",
              "before:absolute before:-top-2 before:h-2 before:w-full"
            )}
          >
            <ul className="py-2">
              <ServicesList itemClass={desktopSrvCls} />
            </ul>
          </div>
        )}
      </li>
    );
  };

  // Mobile render
  const renderMobileItem = (item: NavItem) => {
    const active = isActivePath(item.href);
    const open = mobileDropdown === item.name;

    if (!item.hasDropdown) {
      return (
        <Link
          key={item.name}
          href={item.href}
          onClick={closeAll}
          className={navLinkCls(active)}
        >
          {item.name}
        </Link>
      );
    }

    return (
      <div key={item.name} className="flex flex-col">
        <button
          className={clsx(navLinkCls(active), "flex justify-between")}
          onClick={() => setMobileDropdown(open ? null : item.name)}
          aria-expanded={open}
        >
          {item.name}
          <IoIosArrowDown className={clsx("transition", open && "rotate-180")} />
        </button>

        {open && (
          <ul className="ml-4 mt-1 flex flex-col gap-1">
            <ServicesList
              onClick={closeAll}
              itemClass={(active) =>
                clsx(
                  "px-4 py-2 rounded-md text-sm",
                  active ? "bg-white/15 font-medium" : "hover:bg-white/10"
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
    <header className="sticky top-0 z-50 w-full bg-navbar shadow-md no-drag">
      <nav className="mx-auto max-w-4xl px-4">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            draggable={false}
            className="text-2xl text-navbar-text font-semibold tracking-wide"
          >
            GeoTrans
          </Link>

          {/* Desktop */}
          <ul className="hidden items-center gap-6 md:flex">
            {NAV_LINKS.map(renderDesktopItem)}

            <li>
              <Link
                href="/contacts"
                draggable={false}
                className={clsx(
                  "inline-flex items-center justify-center",
                  "rounded-lg bg-btn-primary px-3 py-2",
                  "text-sm font-semibold text-white",
                  "transition-transform duration-200",
                  "hover:scale-105 hover:shadow-lg/10"
                )}
              >
                Запитване
              </Link>
            </li>
          </ul>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-white/10"
            onClick={() => setMobileOpen((o) => !o)}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4">
            <div className="rounded-xl bg-white/10 p-3 flex flex-col gap-2">
              {NAV_LINKS.map(renderMobileItem)}

              <Link
                href="/contacts"
                onClick={closeAll}
                className="mt-2 rounded-lg bg-btn-primary px-3 py-2 text-center text-sm font-semibold text-white"
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
