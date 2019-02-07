
const cacheName = `predict-prostate`;
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll([
        `/`,
        // `/index.html`,
        //   'manifest.json',
        //   '/css/jquery.smartmenus.bootstrap.css',
        //   '/css/tooling_styles.css',
        //   '/css/tooling_styles_v2.css',
        //   '/js/jquery.smartmenus.bootstrap.min.js',
        //   '/js/jquery.smartmenus.min.js',
      ])
          .then(() => self.skipWaiting());
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(cacheName)
      .then(cache => cache.match(event.request, {ignoreSearch: true}))
      .then(response => {
      return response || fetch(event.request);
    })
  );
});
