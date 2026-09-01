/* chhaati service worker — so the app works offline at the gym. */
var CACHE = "chhaati-v1";

self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(CACHE).then(function (c) {
      return c.addAll([
        "./",
        "./index.html",
        "./css/style.css",
        "./js/store.js",
        "./js/app.js",
        "./icon.svg",
        "./manifest.json",
        "./data/exercises-chest.js",
        "./data/exercises-back.js",
        "./data/exercises-legs.js",
        "./data/exercises-shoulders.js",
        "./data/exercises-arms.js",
        "./data/exercises-core.js",
        "./data/exercises-cardio.js"
      ]).catch(function () { /* tolerate missing files on first deploy */ });
    }).then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function (e) {
  if (e.request.method !== "GET") return;
  var url = new URL(e.request.url);
  if (url.origin !== location.origin) return; // let fonts etc. hit the network
  // network-first: always serve the freshest app, fall back to cache offline
  e.respondWith(
    fetch(e.request).then(function (res) {
      if (res && res.ok) {
        var copy = res.clone();
        caches.open(CACHE).then(function (c) { c.put(e.request, copy); });
      }
      return res;
    }).catch(function () {
      return caches.match(e.request);
    })
  );
});
