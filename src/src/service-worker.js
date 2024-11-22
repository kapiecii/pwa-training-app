self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('my-fitness-app-cache').then((cache) => {
      return cache.addAll(['/', '/index.html', '/static/js/bundle.js']);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});