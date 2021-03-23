self.addEventListener('install', function(event) {
  self.skipWaiting();
});
self.addEventListener('activate', function(event) {});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).then(function(response) {
      if(event.request.url.endsWith("?++esm")){
        return response.text().then(text=>{
          return new Response(`var module = {exports:{}};(function(module,exports){${text}})(module,module.exports);export default module.exports`,response)
        })
      }
      return response
    })
  );
});
