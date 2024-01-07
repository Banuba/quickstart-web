/**
 * Safari video range request fix, inspired by
 * @see https://philna.sh/blog/2018/10/23/service-workers-beware-safaris-range-request
 * @see https://bugs.webkit.org/show_bug.cgi?id=232076#c5
 */
addEventListener("fetch", (event) => {
  const proxyVideoRequestsTo = "___range-requests___/";

  const request = event.request;

  const [, url] = request.url.split(proxyVideoRequestsTo);
  if (!url) return;

  const cacheName = "___range-requests___";

  const response = caches
    .open(cacheName)
    .then((cache) => cache.match(request.url))
    .then(
      (res) =>
        res ||
        fetch(new Request(decodeURIComponent(url), request)).then((res) =>
          caches
            .open(cacheName)
            .then((cache) => cache.put(request, res.clone()))
            .then(() => res),
        ),
    )
    .then((res) =>
      Promise.all([res.arrayBuffer(), res.headers.get("Content-Type")]),
    )
    .then(([arrayBuffer, type]) => {
      const bytes = /^bytes\=(\d+)\-(\d+)?$/g.exec(
        request.headers.get("range"),
      );

      if (bytes) {
        const length = arrayBuffer.byteLength;
        const start = +bytes[1] || 0;
        const end = +bytes[2] || length - 1;

        return new Response(arrayBuffer.slice(start, end + 1), {
          status: 206,
          statusText: "Partial Content",
          headers: {
            "Content-Type": type,
            "Content-Range": `bytes ${start}-${end}/${length}`,
            "Content-Length": end - start + 1,
          },
        });
      } else {
        return new Response(null, {
          status: 416,
          statusText: "Range Not Satisfiable",
          headers: {
            "Content-Range": `*/${length}`,
          },
        });
      }
    });

  event.respondWith(response);
});

/**
 * You may also want to add the `clients.claim()` to install the worker as early as possible
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Clients/claim
 */
addEventListener("activate", (event) => event.waitUntil(clients.claim()));
