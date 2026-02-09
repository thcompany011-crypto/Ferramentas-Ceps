// Este arquivo permite que o site seja instalado como um App
self.addEventListener('install', (e) => {
  console.log('Service Worker: Instalado');
});

self.addEventListener('fetch', (e) => {
  // Necessário para o navegador reconhecer o PWA
});

