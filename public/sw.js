const CACHE_NAME = "uyou-pwa-v2";
const LOCALE_CACHE = "uyou-pwa-locale";

const STATIC_ASSETS = [
  "/",
  "/pwa",
  "/manifest.webmanifest",
  "/icon.png",
  "/apple-icon.png",
  "/banner.png",
  "/uyou-logo.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    }),
  );

  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) =>
        Promise.all(
          cacheNames
            .filter(
              (cacheName) =>
                cacheName !== CACHE_NAME && cacheName !== LOCALE_CACHE,
            )
            .map((cacheName) => caches.delete(cacheName)),
        ),
      ),
  );

  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const { request } = event;

  if (request.method !== "GET") {
    return;
  }

  const url = new URL(request.url);

  // 외부 origin
  if (url.origin !== self.location.origin) {
    return;
  }

  // API는 Service Worker 캐시에서 제외
  if (url.pathname.startsWith("/api/")) {
    return;
  }

  // --------------------------------
  // HTML / ISR 페이지
  // Network First
  // --------------------------------
  if (request.mode === "navigate") {
    event.respondWith(handleNavigation(request));
    return;
  }

  // --------------------------------
  // 정적 리소스
  // Cache First
  // --------------------------------
  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(request).then((response) => {
        if (response.ok) {
          const responseClone = response.clone();

          event.waitUntil(
            caches.open(CACHE_NAME).then((cache) => {
              return cache.put(request, responseClone);
            }),
          );
        }

        return response;
      });
    }),
  );
});

async function handleNavigation(request) {
  try {
    // 온라인에서는 항상 최신 ISR 응답 우선
    const response = await fetch(request);

    // 정상 HTML만 캐시
    if (response.ok) {
      const responseClone = response.clone();

      await caches.open(CACHE_NAME).then((cache) => {
        return cache.put(request, responseClone);
      });

      // 현재 페이지에서 locale 기억
      const locale = getLocaleFromPathname(new URL(request.url).pathname);

      if (locale) {
        await saveLastLocale(locale);
      }
    }

    return response;
  } catch {
    // --------------------------------
    // Offline
    // --------------------------------

    const requestUrl = new URL(request.url);

    // 1. 요청한 페이지 자체가 캐시되어 있으면 사용
    const cachedResponse = await caches.match(request);

    if (cachedResponse) {
      return cachedResponse;
    }

    // 2. "/" 요청이면 마지막 locale 페이지 사용
    if (requestUrl.pathname === "/") {
      const lastLocale = await getLastLocale();

      if (lastLocale) {
        const localeUrl = new URL(`/${lastLocale}`, self.location.origin);

        const localeResponse = await caches.match(localeUrl);

        if (localeResponse) {
          return localeResponse;
        }
      }
    }

    // 3. 마지막 fallback은 "/"
    const rootResponse = await caches.match("/");

    if (rootResponse) {
      return rootResponse;
    }

    // 4. 정말 아무것도 없으면 offline response
    return new Response("Offline", {
      status: 503,
      statusText: "Service Unavailable",
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    });
  }
}

// --------------------------------
// Locale
// --------------------------------

function getLocaleFromPathname(pathname) {
  const match = pathname.match(/^\/([^/]+)(?:\/|$)/);

  if (!match) {
    return null;
  }

  const locale = match[1];

  // 실제 프로젝트의 locale 목록과 맞춰야 함
  const supportedLocales = ["ko", "en", "my"];

  if (!supportedLocales.includes(locale)) {
    return null;
  }

  return locale;
}

// --------------------------------
// Last Locale Storage
// --------------------------------

async function saveLastLocale(locale) {
  const cache = await caches.open(LOCALE_CACHE);

  const response = new Response(locale, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });

  await cache.put(new Request("/__uyou_last_locale__"), response);
}

async function getLastLocale() {
  const cache = await caches.open(LOCALE_CACHE);

  const response = await cache.match("/__uyou_last_locale__");

  if (!response) {
    return null;
  }

  return response.text();
}
