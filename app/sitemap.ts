import type { MetadataRoute } from "next";
import { supabase } from "@/lib/supabase";
import { routing } from "@/i18n/routing";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://uyou-two.vercel.app";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { data: universities } = await supabase
    .from("universities")
    .select("slug");

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    entries.push({
      url: `${SITE_URL}/${locale}`,
      changeFrequency: "daily",
      priority: 1,
    });

    for (const u of universities ?? []) {
      entries.push({
        url: `${SITE_URL}/${locale}/universities/${u.slug}`,
        changeFrequency: "weekly",
        priority: 0.8,
      });
    }
  }

  return entries;
}
