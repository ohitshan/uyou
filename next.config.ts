import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["@sparticuz/chromium", "puppeteer-core"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "skzdwrzrmbiqlrevwdgb.supabase.co",
        pathname: "/storage/v1/object/**",
      },
    ],
  },
};
export default nextConfig;
