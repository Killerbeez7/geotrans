import Link from "next/link";

export const Footer = () => {
  return (
    <footer
      className="
        relative text-gray-300
        bg-gradient-to-b from-[var(--color-nav)] via-[color-mix(in srgb, var(--color-nav)_70%,_black_30%)] to-gray-950
      "
    >
      {/* Optional subtle noise/texture for premium dark feel (2026 trend) */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          {/* Brand */}
          <div>
            <p className="text-lg font-semibold text-white tracking-wide">GeoTrans</p>
            <p className="mt-3 text-sm opacity-80">
              Professional geodetic and transportation solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Quick Links
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-amber-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-amber-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contacts" className="hover:text-amber-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Get in Touch
            </p>
            <p className="text-sm">Email: ntamerrwael@mfano.ga</p>
            <p className="text-sm mt-1">Phone: 571-457-2321</p>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800/40 pt-8 text-center text-sm opacity-70">
          © {new Date().getFullYear()} GeoTrans. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
