import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { routing } from "@/i18n/routing";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Providers } from "@/components/providers";

import "../globals.css";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://uyou-two.vercel.app";

const SITE_NAME = "UYOU";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "Metadata",
  });

  const title = t("defaultTitle");
  const description = t("defaultDescription");

  return {
    metadataBase: new URL(SITE_URL),

    applicationName: SITE_NAME,

    verification: {
      google: "5Kd9F0hFIE35jbYCu_pvvTGGNWIyAd07nbBnoEC5g0U",
      other: {
        "naver-site-verification": "c5a3304066444b805da1d8a3058328ff5805410a",
      },
    },

    title: {
      default: title,
      template: `%s | ${SITE_NAME}`,
    },

    description,

    alternates: {
      canonical: `${SITE_URL}/${locale}`,

      languages: Object.fromEntries(
        routing.locales.map((l) => [l, `${SITE_URL}/${l}`]),
      ),
    },

    openGraph: {
      title,
      description,
      siteName: SITE_NAME,
      url: `${SITE_URL}/${locale}`,
      locale,
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  alternateName: ["Uyou", "유유"],
  url: `${SITE_URL}/`,
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
      </head>

      <body className="flex min-h-screen flex-col">
        <Providers>
          <NextIntlClientProvider>
            <Header />

            <div className="flex-1">{children}</div>

            <Footer />
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
