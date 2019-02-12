
// Things in cache will be available when offline.
const cacheName = `predict-prostate`;
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll([
        `/`,
        '/assets/browser-edge.png',
        '/assets/browser-ie.png',
        '/assets/browser-firefox.png',
        '/assets/browser-chrome.png',
        '/assets/NHS.jpg',


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

// self.addEventListener('activate', function(event) {
//     event.waitUntil(
//         caches.keys().then(function(cacheNames) {
//             return Promise.all(
//                 cacheNames.filter(function(cacheName) {
//                     // Return true if you want to remove this cache,
//                     // but remember that caches are shared across
//                     // the whole origin
//                 }).map(function(cacheName) {
//                     return caches.delete(cacheName);
//                 })
//             );
//         })
//     );
// });


// when the browser fetches a url, either response with
// the cached object or go ahead and fetch the actual url
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(cacheName)
      .then(cache => cache.match(event.request, {ignoreSearch: true}))
      .then(response => {
        // console.log(event.request)
        event.request.credentials = "include"
      // return fetch(event.request);
      return response || fetch(event.request);
      // return fetch(event.request) || response;
    })
  );
});


// Alternative STALE WHILE REVALIDATE.
// self.addEventListener("fetch", function(event) {
//   const requestURL = new URL(event.request.url);
//
//   if (/^(\/css\/|\/js\/)/.test(requestURL.pathname)) {
//     event.respondWith(returnFromCacheOrFetch(event.request));
//   }
// });
//
// function returnFromCacheOrFetch(request) {
//   const cachePromise = caches.open(mainCache);
//   const matchPromise = cachePromise.then(function(cache) {
//     return cache.match(request);
//   });
//
//   return Promise.all([cachePromise, matchPromise]).then(function([cache, cacheResponse]) {
//     // Kick off the update request
//     const fetchPromise = fetch(request).then(function(fetchResponse) {
//       // Cache the updated file and then return the response
//       cache.put(request, fetchResponse.clone());
//       return fetchResponse;
//     }
//     // return the cached response if we have it, otherwise the result of the fetch.
//     return cacheResponse || fetchPromise;
//   )});
// }