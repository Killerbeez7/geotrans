import Link from "next/link";

export const Navbar = () => {
    return (
        <nav className="w-full bg-gray-200">
            <ul className="mx-auto flex w-full max-w-4xl justify-center gap-8 p-4 list-none">
                <li><Link href="/">Начало</Link></li>
                <li><Link href="/contacts">Контакти</Link></li>
                <li><Link href="/about">За нас</Link></li>
                <li><Link href="/goals">Цели</Link></li>
                <li><Link href="/cadastre">Кадастър</Link></li>
            </ul>
        </nav>
    );
};
