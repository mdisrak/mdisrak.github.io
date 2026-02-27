const cacheName = "study-warrior-cache-v1";
const filesToCache = [
  "/index.html",
  "/ssc.html",
  "/railway.html",
  "/group-d.html",
  "/previous-papers.html",
  "/css/style.css",  // agar separate CSS ho
  "/js/script.js",   // agar separate JS ho
  "/icons/icon-192.png",
  "/icons/icon-512.png"
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
