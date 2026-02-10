"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { SERVICE_LINKS } from "../config/ServicesConfig";

type NavSrvListProps = {
    onClick?: () => void;
    itemClass: (active: boolean) => string;
};

export const NavSrvList = ({ onClick, itemClass }: NavSrvListProps) => {
    const pathname = usePathname();

    const isExact = (href: string) => pathname === href;

    return (
        <>
            {SERVICE_LINKS.map((service) => {
                const active = isExact(`/services/${service.slug}`);

                return (
                    <li key={service.slug}>
                        <Link
                            href={`/services/${service.slug}`}
                            onClick={onClick}
                            className={itemClass(active)}
                        >
                            {service.title}
                        </Link>
                    </li>
                );
            })}
            <li
                aria-hidden
                className={clsx(
                    "mt-3 mx-3 h-px",
                    "bg-linear-to-r",
                    "from-transparent",
                    "via-(--br-light)/40",
                    "to-transparent",
                )}
            />
            <li>
                <Link
                    href="/services"
                    onClick={onClick}
                    className={itemClass(isExact("/services"))}
                >
                    Виж всички
                </Link>
            </li>
        </>
    );
};
