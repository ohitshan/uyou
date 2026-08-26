const CACHE_NAME = "uyou-pwa-v3";

const SUPPORTED_LOCALES = ["ko", "en", "my"];

const STATIC_ASSETS = [
  "/",
  "/pwa",

  // Locale home
  "/ko",
  "/en",
  "/my",

  "/manifest.webmanifest",
  "/icon.png",
  "/apple-icon.png",
  "/banner.png",
  "/uyou-logo.png",
];

/* =========================================================
 * Install
 * ========================================================= */

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    }),
  );

  self.skipWaiting();
});

/* =========================================================
 * Activate
 * ========================================================= */

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) =>
        Promise.all(
          cacheNames
            .filter((cacheName) => cacheName !== CACHE_NAME)
            .map((cacheName) => caches.delete(cacheName)),
        ),
      ),
  );

  self.clients.claim();
});

/* =========================================================
 * Push Notification
 * ========================================================= */

self.addEventListener("push", (event) => {
  if (!event.data) {
    return;
  }

  let data;

  try {
    data = event.data.json();
  } catch {
    data = {
      title: "UYOU",
      body: event.data.text(),
    };
  }

  const title = data.title || "UYOU";
  const body = data.body || "새로운 알림이 있습니다.";

  event.waitUntil(
    self.registration.showNotification(title, {
      body,
      icon: "/icon.png",
      badge: "/icon.png",
      data: {
        url: data.url || "/",
      },
    }),
  );
});

/* =========================================================
 * Notification Click
 * ========================================================= */

self.addEventListener("notificationclick", (event) => {
  event.notification.close();

  const url = event.notification.data?.url || "/";

  event.waitUntil(
    clients
      .matchAll({
        type: "window",
        includeUncontrolled: true,
      })
      .then((clientList) => {
        for (const client of clientList) {
          if ("navigate" in client) {
            client.navigate(url);
          }

          if ("focus" in client) {
            return client.focus();
          }
        }

        if (clients.openWindow) {
          return clients.openWindow(url);
        }

        return undefined;
      }),
  );
});

/* =========================================================
 * Fetch
 * ========================================================= */

self.addEventListener("fetch", (event) => {
  const { request } = event;

  if (request.method !== "GET") {
    return;
  }

  const url = new URL(request.url);

  // 외부 요청은 Service Worker가 처리하지 않음
  if (url.origin !== self.location.origin) {
    return;
  }

  // API는 캐시하지 않음
  if (url.pathname.startsWith("/api/")) {
    return;
  }

  // --------------------------------
  // Next.js immutable static assets
  // Cache First
  // --------------------------------
  if (url.pathname.startsWith("/_next/static/")) {
    event.respondWith(handleStaticAsset(request, event));
    return;
  }

  // --------------------------------
  // 페이지 / ISR
  // Network First
  // --------------------------------
  if (request.mode === "navigate") {
    event.respondWith(handleNavigation(request));
    return;
  }

  // --------------------------------
  // 그 외 정적 리소스
  // Cache First
  // --------------------------------
  event.respondWith(handleStaticAsset(request, event));
});

/* =========================================================
 * Navigation
 * ========================================================= */

async function handleNavigation(request) {
  try {
    // 항상 네트워크를 먼저 요청해서 최신 ISR 응답을 받음
    const response = await fetch(request);

    // 정상적인 HTML 응답만 캐시
    if (
      response.ok &&
      (response.headers.get("content-type") || "").includes("text/html")
    ) {
      const responseClone = response.clone();

      await caches.open(CACHE_NAME).then((cache) => {
        return cache.put(request, responseClone);
      });
    }

    return response;
  } catch {
    // --------------------------------
    // Offline
    // --------------------------------

    // 1. 요청한 정확한 페이지가 캐시에 있으면 반환
    const cachedResponse = await caches.match(request);

    if (cachedResponse) {
      return cachedResponse;
    }

    // 2. 요청 URL의 locale 확인
    const locale = getLocaleFromPath(request.url);

    if (locale) {
      const localeHome = await caches.match(`/${locale}`);

      if (localeHome) {
        return localeHome;
      }
    }

    // 3. locale을 알 수 없는 경우 PWA entry fallback
    const pwaFallback = await caches.match("/pwa");

    if (pwaFallback) {
      return pwaFallback;
    }

    // 4. 마지막 fallback
    const rootFallback = await caches.match("/");

    if (rootFallback) {
      return rootFallback;
    }

    return new Response("Offline", {
      status: 503,
      statusText: "Service Unavailable",
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    });
  }
}

/* =========================================================
 * Locale
 * ========================================================= */

function getLocaleFromPath(requestUrl) {
  const url = new URL(requestUrl);

  const segments = url.pathname.split("/").filter(Boolean);

  const locale = segments[0];

  if (SUPPORTED_LOCALES.includes(locale)) {
    return locale;
  }

  return null;
}

/* =========================================================
 * Static Assets
 * ========================================================= */

async function handleStaticAsset(request, event) {
  // 1. Cache First
  const cachedResponse = await caches.match(request);

  if (cachedResponse) {
    return cachedResponse;
  }

  // 2. Cache에 없으면 네트워크
  try {
    const response = await fetch(request);

    if (response.ok) {
      const responseClone = response.clone();

      event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
          return cache.put(request, responseClone);
        }),
      );
    }

    return response;
  } catch {
    return new Response("", {
      status: 503,
      statusText: "Service Unavailable",
    });
  }
}
