import "./globals.css";
import type { Metadata } from "next";
import { Inter, Montserrat, Sofia_Sans } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { getLocalBusinessSchema } from "@/utils/structured-data";
import { SITE_URL } from "@/config/site";

const inter = Inter({
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  variable: "--font-mont",
  display: "swap",
});

const sofia = Sofia_Sans({
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  variable: "--font-sofia",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "GeoTrans | Геодезически услуги в София",
    template: "%s | GeoTrans",
  },

  description:
    "Геодезически услуги в София и Софийска област – геодезическо заснемане, трасиране, кадастър и вертикална планировка с гарантирана точност.",

  keywords: [
    "геодезист София",
    "геодезически услуги София",
    "геодезическо заснемане София",
    "трасиране София",
    "кадастър София",
    "вертикална планировка София",
    "GeoTrans",
    "София",
    "Софийска област",
  ],

  openGraph: {
    title: "GeoTrans - Геодезически услуги в София",
    description:
      "Професионални геодезически услуги в София – заснемане, трасиране и кадастрални процедури.",
    url: SITE_URL,
    siteName: "GeoTrans",
    locale: "bg_BG",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bg">
      <body
        className={`${inter.variable} ${montserrat.variable} ${sofia.variable} antialiased flex flex-col`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getLocalBusinessSchema(SITE_URL)),
          }}
        />

        {/* Navbar overlay */}
        <div className="absolute top-0 left-0 w-full h-(--nav-h) bg-bg-nav -z-10" />
        <Navbar />
        <main className="grow bg-(--bg-page)">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
