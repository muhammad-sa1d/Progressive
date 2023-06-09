const staticColorPicker = "dasturUz"
const assets = [
    "/",
    "/index.html",
    "/css/style.css",
    "/js/app.js"
]
self.addEventListener("install", installEvent => {
    installEvent.waitUntil (
        caches.open(staticColorPicker).then(cache =>{
            cache.addAll(assets)
        })
    )
})

self.addEventListener("fatch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res =>  {
            return res || fetch(fetchEvent.event)
        })
    )
})