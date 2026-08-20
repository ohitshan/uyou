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
            .filter((cacheName) => cacheName !== CACHE_NAME)
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

async function handleNavigation(request) {
  try {
    // 항상 네트워크를 먼저 요청해서 ISR 응답을 받음
    const response = await fetch(request);

    // 정상적인 응답만 캐시
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

    // 요청한 페이지가 캐시에 있으면 반환
    const cachedResponse = await caches.match(request);

    if (cachedResponse) {
      return cachedResponse;
    }

    // 마지막 fallback
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
