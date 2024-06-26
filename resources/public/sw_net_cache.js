var CACHE = 'network-or-cache';

// On install, cache some resource.
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
    // Try network and if it fails, go for the cached copy.
    evt.respondWith(fromNetwork(evt.request, 400).catch(function () {
        return fromCache(evt.request);
    }));
});

// Open a cache and use `addAll()` with an array of assets to add all of them
// to the cache. Return a promise resolving when all the assets are added.
function precache() {
    return caches.open(CACHE).then(function (cache) {
        return cache.addAll([
            '/',
            '/tool',
            '/contact',
            '/about',
            '/legal/disclaimer',
            '/legal/algorithm',
            '/legal/privacy',
            '/about/overview/about',
            '/about/overview/whoisitfor',
            '/about/overview/howpredictworks',
            '/about/overview/whobuiltpredict',
            '/about/technical',
            '/about/technical/history',
            '/about/technical/publications',
            '/about/faqs',
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

            '/css/bootstrap.min.css',
            '/css/bootstrap-select.css',
            '/css/font-awesome.min.css',
            '/css/ionicons.min.css',
            '/css/jquery.smartmenus.bootstrap.css',
            '/css/tooling_styles_v2.css',


            '/js/compiled/predict_prostate.js',
            '/js/bootstrap.min.js',
            '/js/jquery.smartmenus.bootstrap.min.js',
            '/js/jquery.smartmenus.min.js',
            '/js/jquery-3.3.1.min.js',
            '/js/mediatypechecker.js',

            '/fonts/FontAwesome.otf',
            '/fonts/fontawesome-webfont.eot',
            '/fonts/fontawesome-webfont.svg',
            '/fonts/fontawesome-webfont.ttf',
            '/fonts/fontawesome-webfont.woff',
            '/fonts/fontawesome-webfont.woff2',

        ]);
    });
}

// Time limited network request. If the network fails or the response is not
// served before timeout, the promise is rejected.
function fromNetwork(request, timeout) {
    return new Promise(function (fulfill, reject) {
        // Reject in case of timeout.
        var timeoutId = setTimeout(reject, timeout);
        // Fulfill in case of success.
        fetch(request).then(function (response) {
            clearTimeout(timeoutId);
            fulfill(response);
            // Reject also if network fetch rejects.
        }, reject);
    });
}

// Open the cache where the assets were stored and search for the requested
// resource. Notice that in case of no matching, the promise still resolves
// but it does with `undefined` as value.
function fromCache(request) {
    return caches.open(CACHE).then(function (cache) {
        return cache.match(request).then(function (matching) {
            return matching || Promise.reject('no-match');
        });
    });
}
