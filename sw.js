self.addEventListener("Install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll("./");
        })
    );
});
// self.addEventListener("fetch", e => {
//     console.log(`Intercepting the fetch request for: ${e.request.url}`);
// });