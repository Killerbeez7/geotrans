"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { serviceCategories } from "@/config/services/categories";
import { FaAngleRight } from "react-icons/fa6";

type NavSrvListProps = {
  onClick?: () => void;
  itemClass: (active: boolean) => string;
};

export const NavSrvList = ({ onClick, itemClass }: NavSrvListProps) => {
  const pathname = usePathname();

  const isExact = (href: string) => pathname === href;

  return (
    <>
      {serviceCategories.map((service) => {
        const href = `/uslugi/${service.slug}`;
        const active = isExact(href);

        return (
          <li key={service.slug}>
            <Link href={href} onClick={onClick} className={itemClass(active)}>
              {service.title}
            </Link>
          </li>
        );
      })}

      <li className="list-none border-t border-white/10">
        <Link
          href="/uslugi"
          onClick={onClick}
          className={clsx(itemClass(isExact("/uslugi")))}
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
