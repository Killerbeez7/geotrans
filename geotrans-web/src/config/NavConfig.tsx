export interface NavItem {
    name: string;
    href: string;
    hasDropdown?: boolean;
}


export const NAV_LINKS: (NavItem)[] = [
    { name: "Начало", href: "/" },
    { name: "Услуги", href: "/services", hasDropdown: true},
    { name: "Галерия", href: "/gallery" },
    { name: "За нас", href: "/about" },
    { name: "Контакти", href: "/contacts" },
];