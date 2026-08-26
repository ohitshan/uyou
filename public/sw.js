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
  if (!event.data) return;

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
        // 이미 UYOU가 열려 있으면 해당 창으로 이동
        for (const client of clientList) {
          if ("focus" in client) {
            client.navigate(url);
            return client.focus();
          }
        }

        // 열려 있는 창이 없으면 새 창
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

  // Next.js immutable 정적 청크(JS/CSS 등)만 Cache First
  const isImmutableAsset = url.pathname.startsWith("/_next/static/");

  if (isImmutableAsset) {
    event.respondWith(handleImmutableAsset(request, event));
    return;
  }

  // 그 외(페이지 네비게이션 + RSC/JSON fetch 포함)는 Network First
  if (request.mode === "navigate") {
    event.respondWith(handleNavigation(request));
    return;
  }

  event.respondWith(handleRequest(request));
});

/* =========================================================
 * Navigation
 * ========================================================= */

async function handleNavigation(request) {
  return handleRequest(request, { allowRootFallback: true });
}

/* =========================================================
 * Immutable Assets
 * ========================================================= */

async function handleImmutableAsset(request, event) {
  const cached = await caches.match(request);

  if (cached) {
    return cached;
  }

  const response = await fetch(request);

  if (response.ok) {
    const clone = response.clone();

    event.waitUntil(
      caches.open(CACHE_NAME).then((cache) => {
        return cache.put(request, clone);
      }),
    );
  }

  return response;
}

/* =========================================================
 * Network First
 * ========================================================= */

async function handleRequest(request, options = {}) {
  const { allowRootFallback = false } = options;

  try {
    const response = await fetch(request);

    const contentType = response.headers.get("content-type") || "";

    const shouldCache =
      response.ok && (!allowRootFallback || contentType.includes("text/html"));

    if (shouldCache) {
      const responseClone = response.clone();

      await caches
        .open(CACHE_NAME)
        .then((cache) => cache.put(request, responseClone));
    }

    return response;
  } catch {
    const cachedResponse = await caches.match(request);

    if (cachedResponse) {
      return cachedResponse;
    }

    if (allowRootFallback) {
      const fallbackResponse = await caches.match("/");

      if (fallbackResponse) {
        return fallbackResponse;
      }
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
