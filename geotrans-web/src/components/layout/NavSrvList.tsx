"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { siteContent } from "@/config/site-content";
import { FaAngleRight } from "react-icons/fa6";

type NavSrvListProps = {
  onClick?: () => void;
  itemClass: (active: boolean) => string;
};

export const NavSrvList = ({ onClick, itemClass }: NavSrvListProps) => {
  const pathname = usePathname();

  const dropdownLinks = siteContent.services.items.filter(
    (service) => service.showInNav === true
  );

  const isExact = (href: string) => pathname === href;

  return (
    <>
      {dropdownLinks.map((service) => {
        const href = `/services/${service.slug}`;
        const active = isExact(href);

        return (
          <li key={service.id}>
            <Link href={href} onClick={onClick} className={itemClass(active)}>
              {service.title}
            </Link>
          </li>
        );
      })}

      {/* Decorative Divider */}
      <li
        aria-hidden="true"
        className={clsx(
          "my-2 mx-4 h-px",
          "bg-linear-to-r from-transparent via-white/10 to-transparent"
        )}
      />
      {/* View All Services Link */}
      <li>
        <Link
          href="/services"
          onClick={onClick}
          className={clsx(itemClass(isExact("/services")))}
        >
          <span>Всички услуги</span>
          <FaAngleRight
            className={clsx(
              "hidden md:block",
              "h-3 w-3 text-accent/80 transition-all duration-300",
              "group-hover:translate-x-1 group-hover:text-accent"
            )}
          />
        </Link>
      </li>
    </>
  );
};
