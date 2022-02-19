'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "analysis_options.yaml": "a0ba153f84dfa75e2ae1f3e382ace626",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "e74e9da80aa670a12851abae012d237f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/web/icons/number-1.png": "dece3c2b0217b3347a4a57e49488b51a",
"assets/web/icons/number-2.png": "2839d91958c29ac3f42d88a7a5bc5876",
"assets/web/icons/number-3.png": "5d64cc2edb5a619af44fef7a0fc319be",
"assets/web/icons/number-4.png": "7807042e790a57f789cb5cdec24229fd",
"assets/web/icons/number-5.png": "0e4b0accb5331b6383f5e0fbf6130a24",
"assets/web/icons/number-6.png": "1eb12b100ae0b9645b366fa4985463de",
"assets/web/icons/number-7.png": "5c76f6c57e326ab320f2394440f90487",
"assets/web/icons/number-8.png": "5a315871a127ceee481c09471875e810",
"assets/web/icons/number-9.png": "32677bfeb2626644c761164c6384a2f0",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"fairs.html": "9a68f4a3696472a32a79145660d43334",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/0.png": "1d7600e85743b1b5b598e96323838e9f",
"icons/1.png": "93416237a62fd4147e60160d0c6178e0",
"icons/10.png": "96f6eca842809894fda9de7ca9455a5d",
"icons/11.png": "42e64499aa754e42600e3adc36796fcc",
"icons/12.png": "272488027518f38c18968934ad16b8be",
"icons/13.png": "2824ed9bded08432661c8251f659e885",
"icons/14.png": "5914120180f7049fd13196341976e123",
"icons/15.png": "d4880cbbff532b19f908f63f3101fb38",
"icons/16.png": "745f9795265cccef680cb259dbfb835b",
"icons/17.png": "6cb9a4968668056f94aede25b5790ff3",
"icons/18.png": "49cd3cff904484aaa74217fb4699708b",
"icons/19.png": "a06bf12db768ccd2170e7e9ff5b85bd2",
"icons/2.png": "58daaa6754310e06e80c0c58ae8bfef8",
"icons/20.png": "73b3288e942d815d892b7c312ee4702c",
"icons/21.png": "3abc02098455c4296bdd32838ed7756e",
"icons/22.png": "86ded563b931f9da50c8d508d464576a",
"icons/23.png": "99401dd79712d027da4ab9aeeb66dd0e",
"icons/24.png": "7ea803dc9c5f71dc5ba12d97ff532452",
"icons/25.png": "735df0952fb2a8e88233047cf1239356",
"icons/26.png": "5e9c2e24b4f3c69b16e02515a9c771f5",
"icons/27.png": "3b3a268bb06ce8a9680b37648de56a1a",
"icons/28.png": "8e9851209e56bf20b3d1fa2596cba069",
"icons/29.png": "f268eec74707adb6171e753f4dc41613",
"icons/3.png": "2cc1ab3f84a59e3ed9c1e76f83caadae",
"icons/30.png": "976d9d602f2f7824aa5dde3e32680806",
"icons/31.png": "86715129d34a38ef1d89e75c9aa414b5",
"icons/32.png": "eddb6f4401c9fe788131295c9430facc",
"icons/33.png": "181ef6d69094c046323912494956ed1d",
"icons/34.png": "a8b565612abfda29c608a616b4df4ca9",
"icons/35.png": "f57bcdf1d66c93c7bcd6d9eb4ba15988",
"icons/36.png": "f33a2f7f278608e51c0d7b27feb38447",
"icons/37.png": "a02233367e7839c92f5052660535a6ab",
"icons/38.png": "88c1f8ec36428a5f4cd8f8e9bde87fb7",
"icons/39.png": "ef26ad8d272434253faec71ce3ca8a6b",
"icons/4.png": "ad60982ae2f213d6238894628a84fcbb",
"icons/40.png": "4d1db5d6692c084ad9c373ed6b479608",
"icons/41.png": "006a194c0de5f1914597cd4e5e15374a",
"icons/42.png": "64e3f59a2388e677a84914c461cf032f",
"icons/43.png": "c5781fd05b5055bb1fda2919ef667b81",
"icons/44.png": "b34cae5fd2ce2cf95f1f57ef97eb8adf",
"icons/45.png": "0cc5547151e6e039ff303f1931ff009e",
"icons/46.png": "aa01185905226b4c7139eb9687629399",
"icons/47.png": "f1a4b34390474c6de0bfb15c3594d653",
"icons/48.png": "5d7e013379ea26203c2f88a707167f66",
"icons/49.png": "7c602287a185ede2215b60173f4fe753",
"icons/5.png": "e22151e0e46e17436a089b9e2b706b63",
"icons/50.png": "fa5591a97edc8ec03586d00ec5b4a1aa",
"icons/51.png": "4efdb32b94b7c317e13d7e5b8ea2060f",
"icons/52.png": "c0430d826e6bcef294fdee4c35cf1887",
"icons/53.png": "6f7a72a45b1bb0d58ee7b96b0d63d848",
"icons/54.png": "6940256301cabadbdfa9f1e14211d95a",
"icons/55.png": "f20ccec14f39ed42535e0743c746ec2f",
"icons/56.png": "f5bdcf2532cc5c906b981dd8151712e9",
"icons/57.png": "638d31b26e3a213c5fd53435a88523e2",
"icons/58.png": "f5a45fd7bf6246b2719ae5cbdd7a64db",
"icons/59.png": "691399a92fd4cfeccda29653a9e8814d",
"icons/6.png": "aa0fb73da63278ae012d1db2111f5d0c",
"icons/60.png": "74db596107b00e110af39e28ae0986c0",
"icons/61.png": "21c563a5358a772d310e526f2bc7e792",
"icons/62.png": "5fdea2dfb964c3a681d6315ad4a02d3e",
"icons/63.png": "e63fd286f0ddd3973aa41bd55c6ff926",
"icons/64.png": "d673dd0767d2ac1e442d769eb5d652db",
"icons/65.png": "9836bfd73839c5e97e0d9646ec6181ce",
"icons/66.png": "1ed4b69fb59032f5f829657166ce91ca",
"icons/67.png": "43e6f2225dd13f2fc1a0c5f86f3bf2eb",
"icons/68.png": "b7b34b41aac65d0afccc29199fae04af",
"icons/69.png": "ae983c2e35cd2ebe7675ca1ad5f07c65",
"icons/7.png": "1c68589793d7662f85249780d882e0ca",
"icons/70.png": "6c88bc848a6defd2e988e50061540081",
"icons/71.png": "c3a62c38a81507675d5027790b5c4058",
"icons/72.png": "d716ec40599d9743fc42193606edbd1f",
"icons/73.png": "77590b74274622cc9f76651e138ef796",
"icons/74.png": "455a903a12c7fb89d91cd11c37f244fa",
"icons/75.png": "8e9ef9dc41d8802911f9fb05271db07f",
"icons/76.png": "b992f60c211d14c491ea041d259127c4",
"icons/77.png": "e6dc664391f0da17bde0fc9ee5212195",
"icons/78.png": "af9661aebe7c2e03851d8b0f77cc91cf",
"icons/79.png": "8b5a8adc4b5809561a35513215bcf22c",
"icons/8.png": "5e8464e516b9f005b52e958f68e3a130",
"icons/80.png": "df1f041d1e6738c913f764d70b5bf15b",
"icons/81.png": "cfc26645990d931592031f58dd5b9360",
"icons/82.png": "b27a5d426b4ff94b65123ee6fbf6fe87",
"icons/83.png": "942c15b37dea22f9c0ee906df3887004",
"icons/84.png": "4a0d5068ad5ab82093bc884d363234bd",
"icons/85.png": "07fed9f3bc9255dc2788102ec430427c",
"icons/86.png": "cab022fa0654eae0c2d80a943c631ae5",
"icons/87.png": "4810e69f7655a1fa70ea730a5f7ae677",
"icons/88.png": "2d823183ab98c2c6f04861b37ec8cdbb",
"icons/89.png": "889d410366a3f34f435136a877e04951",
"icons/9.png": "db1111ca9bbcec6d21d2aac18e642dab",
"icons/90.png": "a8493d3ceaff4213b0f8e792cc3c6710",
"icons/91.png": "d253d8a321aae48f1c0b042086aeb674",
"icons/92.png": "5c5ff53eae0015c963428c7ef5d2ddfa",
"icons/93.png": "3baa9023af63b184a626bf9d73e524e6",
"icons/94.png": "05b2e053bcbd18379128c4a0fa5d7950",
"icons/95.png": "4bf7248398f270c4a51e24239b2e06c3",
"icons/96.png": "b2d3037ed360d17cb285b9a31017e040",
"icons/97.png": "17f943fe10abcb020bf0b3868369f7d2",
"icons/98.png": "4abcee8d966f8d6446cecbe7e19a5dee",
"icons/99.png": "3fc16c8f04a982b00261d205715bc5e8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/number-1.png": "dece3c2b0217b3347a4a57e49488b51a",
"icons/number-2.png": "2839d91958c29ac3f42d88a7a5bc5876",
"icons/number-3.png": "5d64cc2edb5a619af44fef7a0fc319be",
"icons/number-4.png": "7807042e790a57f789cb5cdec24229fd",
"icons/number-5.png": "0e4b0accb5331b6383f5e0fbf6130a24",
"icons/number-6.png": "1eb12b100ae0b9645b366fa4985463de",
"icons/number-7.png": "5c76f6c57e326ab320f2394440f90487",
"icons/number-8.png": "5a315871a127ceee481c09471875e810",
"icons/number-9.png": "32677bfeb2626644c761164c6384a2f0",
"index.html": "9eb5eb440a3255923e677c0599919d17",
"/": "9eb5eb440a3255923e677c0599919d17",
"leaflet.timedimension.control.min.css": "cb8040b8f2c12d5820314ebaeb107066",
"main.dart.js": "9e349aa5353f1630e95c21d3823cf893",
"manifest.json": "1c1b35bea54569d3411e68a6510fb942",
"version.json": "75a41e110323d5fd688ed9dbf45133e3"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
