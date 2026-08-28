const CACHE_NAME = "uyou-pwa-v2";

const STATIC_ASSETS = [
  "/",
  "/pwa",
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
          if ("focus" in client) {
            client.navigate(url);
            return client.focus();
          }
        }

        if (clients.openWindow) {
          return clients.openWindow(url);
        }
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
  // 페이지 / ISR
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

/* =========================================================
 * Navigation
 * ========================================================= */

async function handleNavigation(request) {
  try {
    // 항상 네트워크를 먼저 요청해서 ISR 응답을 받음
    const response = await fetch(request);

    //  정상적인 응답만 캐시
    if (response.ok) {
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

    // 1. 요청한 페이지가 캐시에 있으면 그대로 반환
    const cachedResponse = await caches.match(request);

    if (cachedResponse) {
      return cachedResponse;
    }

    // 2. 캐시된 상세페이지가 없을 경우
    // 요청 URL의 locale 홈으로 fallback
    const locale = getLocaleFromPath(request.url);

    if (locale) {
      const localeHome = await caches.match(`/${locale}`);

      if (localeHome) {
        return localeHome;
      }
    }

    // 3. 마지막 fallback
    const fallbackResponse = await caches.match("/");

    if (fallbackResponse) {
      return fallbackResponse;
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

  if (locale === "ko" || locale === "en" || locale === "my") {
    return locale;
  }

  return null;
}
