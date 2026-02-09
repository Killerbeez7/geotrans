import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="relative bg-nav text-gray-300">
      {/* Optional subtle overlay or gradient for depth */}
      <div className="absolute inset-0 bg-linear-to-t from-black/60 to-black/40 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          {/* Column 1: Brand + short desc */}
          <div>
            <p className="text-lg font-semibold text-white">GeoTrans</p>
            <p className="mt-3 text-sm opacity-80">
              Professional geodetic and transportation solutions.
            </p>
          </div>

          {/* Column 2: Quick links (mirror some nav items) */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Quick Links
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-amber-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-amber-400 transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contacts" className="hover:text-amber-400 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact / Social */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Get in Touch
            </p>
            <p className="text-sm">Email: info@geotrans.example</p>
            <p className="text-sm mt-1">Phone: +1 571-457-2321</p>
          </div>
        </div>
      </div>
      <div className="bg-black/30 h-[100px] w-full">
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm opacity-70">
          © 2026 GeoTrans. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
