const CACHE_NAME = 'mmt-pro-v2-cache-v1';
const urlsToCache = [
  '/',
  'index.html',
  'manifest.json'
];

// Service Worker yüklendiğinde dosyaları önbelleğe al
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// İnternet yoksa önbellekteki dosyaları kullan
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
