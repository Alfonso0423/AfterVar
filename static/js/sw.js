
let cacheName = 'aftervar-25';

//salviamo lista file da caricare

let filesToCache = [
    '/',
    '/regolamento',
    '/infoarbitri',
    '/newscalcio',
    'static/stile.css',
    'static/images/immagine_profilo.jpg',
    'static/images/Logo.png',
    'static/images/Scritta_Logo.png',
];


//start sw
self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll(filesToCache);
        })
    );
});

//offline
self.addEventListener('fetch', function(e) {
    e.respondWith(
        caches.match(e.request).then(function(response) {
            return response || fetch(e.request);
        })
    );
});