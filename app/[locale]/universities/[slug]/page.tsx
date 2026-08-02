import { notFound } from "next/navigation";
import Image from "next/image";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { supabase } from "@/lib/supabase";
import { PostCard } from "@/components/post-card";

export const revalidate = 3600;

async function getUniversity(slug: string, locale: string) {
  const { data, error } = await supabase
    .from("universities")
    .select(
      `id, name, region, address, description, logo_url, site_url,
       university_translations!left(name, region, address, description)`,
    )
    .eq("slug", slug)
    .eq("university_translations.locale", locale)
    .single();

  if (error) return null;
  return data;
}

async function getPosts(universityId: string) {
  const { data, error } = await supabase
    .from("university_posts")
    .select("id, title, url, published_at")
    .eq("university_id", universityId)
    .order("published_at", { ascending: false });

  if (error) throw error;
  return data;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const university = await getUniversity(slug, locale);

  if (!university) {
    return {};
  }

  const translation = university.university_translations?.[0];
  const name = translation?.name || university.name;
  const description = translation?.description || university.description;

  return {
    title: name,
    description: description || undefined,
    alternates: {
      canonical: `/${locale}/universities/${slug}`,
      languages: {
        ko: `/ko/universities/${slug}`,
        en: `/en/universities/${slug}`,
      },
    },
    openGraph: {
      title: name,
      description: description || undefined,
      images: university.logo_url ? [{ url: university.logo_url }] : undefined,
    },
  };
}

export default async function UniversityDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("UniversityDetail");
  const university = await getUniversity(slug, locale);

  if (!university) {
    notFound();
  }

  const translation = university.university_translations?.[0];
  const displayName = translation?.name || university.name;
  const displayRegion = translation?.region || university.region;
  const displayAddress = translation?.address || university.address;
  const displayDescription = translation?.description || university.description;

  const posts = await getPosts(university.id);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollegeOrUniversity",
    name: displayName,
    url: university.site_url,
    logo: university.logo_url,
    address: displayAddress
      ? {
          "@type": "PostalAddress",
          streetAddress: displayAddress,
          addressRegion: displayRegion,
          addressCountry: "KR",
        }
      : undefined,
  };

  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* 학교소개 */}
      <section className="rounded-lg border border-border bg-surface p-6 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-md border border-border bg-background">
            <Image
              src={university.logo_url}
              alt={`${displayName} 로고`}
              width={64}
              height={64}
              className="h-full w-full object-contain"
            />
          </div>
          <div>
            <h1 className="text-h2 font-bold text-text-primary">
              {displayName}
            </h1>
            <p className="mt-1 text-sm text-text-secondary">{displayRegion}</p>
          </div>
        </div>

        {displayDescription && (
          <p className="mt-4 text-body-lg text-text-primary">
            {displayDescription}
          </p>
        )}

        <div className="mt-4 flex flex-col gap-1 text-sm text-text-secondary">
          {displayAddress && (
            <p>
              {t("addressLabel")}: {displayAddress}
            </p>
          )}
          <a
            href={university.site_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            {t("siteLink")}
          </a>
        </div>
      </section>

      {/* 게시물 리스트 */}
      <section className="mt-8">
        <h2 className="text-h3 font-semibold text-text-primary">
          {t("noticeTitle")}
        </h2>

        {posts.length === 0 ? (
          <div className="mt-4 rounded-lg border border-border bg-surface p-8 text-center text-text-secondary">
            {t("noPosts")}
          </div>
        ) : (
          <ul className="mt-4 flex flex-col gap-3">
            {posts.map((post) => (
              <li key={post.id}>
                <PostCard
                  title={post.title}
                  url={post.url}
                  publishedAt={post.published_at}
                />
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
