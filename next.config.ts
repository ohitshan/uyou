import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["@sparticuz/chromium", "puppeteer-core"],
  outputFileTracingIncludes: {
    "/api/scrape": ["./node_modules/@sparticuz/chromium/bin/**"],
  },
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
