
let cacheName = 'aftervar-25';

//salviamo lista file da caricare

let filesToCache = [
    '/',
    '/arbitri',
    '/episodi',
    '/classifica',
    '/regolamento',
    '/notizie',
    '/login',
    '/registrazione',
    '/logout',
    '/newscalcio',
    '/privacy',
    '/cookie',
    '/terminiecondizioni',
    '/aboutus',
    '/profilo',
    'static/images/1_img_1s.jpg',
    'static/images/2_img_1s.jpg',
    'static/images/3_img_1s.jpg',
    'static/images/arb_var.jpg',
    'static/images/calciomercato.jpeg',
    'static/images/discutere_decisione.jpg',
    'static/images/giudizio.jpg',
    'static/images/immagine_profilo.jpg',
    'static/images/leghefc.jpg',
    'static/images/logo_login.jpg',
    'static/images/Logo.jpg',
    'static/images/logoserieA.jpg',
    'static/images/nuove_tecnologie.jpg',
    'static/images/polemica_tifoso.jpg',
    'static/images/punto_interrogativo.jpg',
    'static/images/sala_var.jpeg',
    'static/images/Scritta_Logo.png',
    'static/images/squadra_del_cuore.jpg',
    'static/stile.css'
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