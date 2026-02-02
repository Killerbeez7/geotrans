"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SERVICE_LINKS } from "../config/ServicesConfig";

type SrvListProps = {
    onClick?: () => void;
    itemClass: (active: boolean) => string;
};

export const ServicesList = ({ onClick, itemClass }: SrvListProps) => {
    const pathname = usePathname();

    const isExact = (href: string) => pathname === href;

    return (
        <>
            <li>
                <Link
                    href="/services"
                    onClick={onClick}
                    className={itemClass(isExact("/services"))}
                >
                    Всички услуги
                </Link>
            </li>

            <li className="my-1 h-px bg-black/10" />

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
        </>
    );
};
