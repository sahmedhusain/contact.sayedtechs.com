const CACHE_NAME = 'sayedtech-socials-v11';
const APP_SHELL = [
  './',
  './index.html',
  './main.js',
  './site.webmanifest',
  './CNAME',
  './src/css/main.css',
  './src/css/variables.css',
  './src/css/base.css',
  './src/css/animations.css',
  './src/css/layout.css',
  './src/css/rtl.css',
  './src/css/components/social-portal.css',
  './src/js/constants/index.js',
  './src/js/constants/i18n.js',
  './src/js/constants/profile.json',
  './src/js/constants/profile_ar.json',
  './src/js/renderers/portal.js',
  './src/js/events.js',
  './src/js/utils/paths.js',
  './SayedTech-Logo-System/SVG/icon-badge.svg',
  './SayedTech-Logo-System/SVG/logo-horizontal-reversed.svg',
  './SayedTech-Logo-System/SVG/logo-horizontal-black.svg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys
        .filter((key) => key !== CACHE_NAME)
        .map((key) => caches.delete(key))
    )).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;

  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response.ok) return response;
          return caches.match('index.html').then(cached => cached || fetch('index.html'));
        })
        .catch(() => caches.match('index.html').then(cached => cached || fetch('index.html')))
    );
    return;
  }

  event.respondWith(
    fetch(request)
      .then((response) => response)
      .catch(() => caches.match(request))
  );
});
