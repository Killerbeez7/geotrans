import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/services",
        destination: "/uslugi",
        permanent: true,
      },
      {
        source: "/services/:path*",
        destination: "/uslugi/:path*",
        permanent: true,
      },
    ];
  },
  reactCompiler: true,
};

export default nextConfig;
