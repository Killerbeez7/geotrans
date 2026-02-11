import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
    subsets: ["latin", "cyrillic"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "GeoTrans",
    description: "Професионални геодезически услуги",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="bg">
            <body className={`${inter.className} antialiased flex flex-col`}>
                <Navbar />
                <main className="grow pt-16 bg-(--bg-page)">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
