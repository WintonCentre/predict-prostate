let CACHE = 'cache-and-update';

// On install, cache some resources.
self.addEventListener('install', function(evt) {
    console.log('The service worker is being installed. ' + CACHE);

    // Ask the service worker to keep installing until the returning promise
    // resolves.
    evt.waitUntil(precache());
});

// On fetch, use cache but update the entry with the latest contents
// from the server.
self.addEventListener('fetch', function(evt) {
    console.log('The service worker is serving the asset.');
    // You can use `respondWith()` to answer immediately, without waiting for the
    // network response to reach the service worker...
    evt.respondWith(fromCache(evt.request));
    // ...and `waitUntil()` to prevent the worker from being killed until the
    // cache is updated.
    evt.waitUntil(update(evt.request));
});

// Open a cache and use `addAll()` with an array of assets to add all of them
// to the cache. Return a promise resolving when all the assets are added.
function precache() {
    return caches.open(CACHE).then(function (cache) {
        return cache.addAll([
            '/',
            '/tool',
            '/index.html',
            '/manifest.json',
            '/assets/favicon.png',
            '/assets/browser-ie.png',
            '/assets/browser-firefox.png',
            '/assets/browser-chrome.png',
            '/assets/browser-edge.png',
            '/assets/NHS.jpg',
            '/assets/prostate-angle-man_1.png',
            '/assets/logo_prostate_192.png',
            '/assets/logo_prostate_512.png',
            '/assets/tool-banner.png',
            '/assets/icon-imagery.png',
            '/assets/print-footer.png',
            '/assets/phe-neg.png',
            '/assets/urology.png',
            '/assets/ucs-winton-transparent.png',
            '/assets/logo-pos-al.png',
            '/assets/faq-icon.png',
            '/assets/tool-icon.png',
            '/assets/touch-icon-ipad.png',
            '/assets/touch-icon-ipad-retina.png',
            '/assets/touch-icon-iphone.png',
            '/assets/touch-icon-iphone-retina.png',
            '/assets/bullet-plus.png',
            '/js/mediatypechecker.js',
            '/js/jquery.smartmenus.min.js',
            '/js/jquery.smartmenus.bootstrap.min.js',
            '/js/compiled/predict_prostate.js',
            '/css/jquery.smartmenus.bootstrap.css',
            '/css/tooling_styles_v2.css',

            // 'asdfasdf.txt',
        ]);
    });
}

// Open the cache where the assets were stored and search for the requested
// resource. Notice that in case of no matching, the promise still resolves
// but it does with `undefined` as value.
function fromCache(request) {
    // console.log('request')
    // console.log(request)

    return caches.open(CACHE).then(function (cache) {
        return cache.match(request).then(function (matching) {
            // console.log('matching')
            // console.log(matching)
            return matching || Promise.reject('no-match');
        });
    });
}

// Update consists in opening the cache, performing a network request and
// storing the new response data.
function update(request) {
    return caches.open(CACHE).then(function (cache) {
        return fetch(request).then(function (response) {
            return cache.put(request, response);
        });
    });
}
