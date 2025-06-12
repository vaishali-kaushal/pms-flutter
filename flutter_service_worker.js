'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "c0bebee325df7d9200cddfc41e6e2036",
"assets/AssetManifest.bin.json": "ab00dc684c0512bcab24d33db42bbe14",
"assets/AssetManifest.json": "78d1b51b771cd4052a9865ecf3ea9415",
"assets/assets/AssetManifest.bin": "43838677b8f8377078a6b123c8e2203c",
"assets/assets/AssetManifest.bin.json": "eda4695d01bbeaee84403657035020e3",
"assets/assets/AssetManifest.json": "bd3938298554ab9eceaaf053c1209d13",
"assets/assets/FontManifest.json": "a17d9f53ca2b3ae7ca92afa8598d2111",
"assets/assets/fonts/ClearSans-Bold.ttf": "79e0c29cff90ef22bd513f10253b1b32",
"assets/assets/fonts/ClearSans-BoldItalic.ttf": "e605d5877906bb4ad1f964333bd58160",
"assets/assets/fonts/ClearSans-Italic.ttf": "2f526124d8ec03d2aa376a304a1b732d",
"assets/assets/fonts/ClearSans-Light.ttf": "3cdd81d4a749d9e1711abcfedb5ba76c",
"assets/assets/fonts/ClearSans-Medium.ttf": "411ebe0f9416ef4d16cfe13d58914f96",
"assets/assets/fonts/ClearSans-MediumItalic.ttf": "bc0ddff135fbee64a83af795d200b098",
"assets/assets/fonts/ClearSans-Regular.ttf": "b9bdac589c0d3aac828fd3a15108b61a",
"assets/assets/fonts/ClearSans-Thin.ttf": "17a6e8b6b5b4bedaafc01675170f0652",
"assets/assets/fonts/MaterialIcons-Regular.otf": "0560c9c146e244e8d9f9914545dc2d6b",
"assets/assets/fonts/NotoSans-Bold.ttf": "2ea5e0855d5a3ec3f561b5bc62b39805",
"assets/assets/fonts/NotoSans-Regular.ttf": "f46b08cc90d994b34b647ae24c46d504",
"assets/assets/fonts/Roboto-Black.ttf": "893fe14628bd7ac498d550e96367e1be",
"assets/assets/fonts/Roboto-BlackItalic.ttf": "256aab654d3c4dd0e12fd0a32c7e8aa6",
"assets/assets/fonts/Roboto-Bold.ttf": "d329cc8b34667f114a95422aaad1b063",
"assets/assets/fonts/Roboto-BoldItalic.ttf": "b37d0bb73a2f688ecaee01647f41e3e5",
"assets/assets/fonts/Roboto-Italic.ttf": "de74c60991cd63c8b922e0e665a39c7a",
"assets/assets/fonts/Roboto-Light.ttf": "7b5fb88f12bec8143f00e21bc3222124",
"assets/assets/fonts/Roboto-LightItalic.ttf": "129c5057f4480f9a353e15e1e1e09f9d",
"assets/assets/fonts/Roboto-Medium.ttf": "fe13e4170719c2fc586501e777bde143",
"assets/assets/fonts/Roboto-MediumItalic.ttf": "5b25afa871e1b896011859f8cdf8da74",
"assets/assets/fonts/Roboto-Regular.ttf": "ac3f799d5bbaf5196fab15ab8de8431c",
"assets/assets/fonts/Roboto-Thin.ttf": "3f68500b267c20051088bcc0698af773",
"assets/assets/fonts/Roboto-ThinItalic.ttf": "1e5737be5c68c15c3a105b2db9a3b67c",
"assets/assets/icons/back_icon.png": "34fbf9de1a3ad93fc0c5a922ac3f6f04",
"assets/assets/icons/camera_image.png": "24af36702a34b8f1b114b3609e4183e0",
"assets/assets/icons/dashboard_logo.png": "3ec20e82068219184475b65e69f0bc27",
"assets/assets/icons/expand.png": "24177b66aaac567c043344f579409eca",
"assets/assets/icons/gallery_image.png": "a4ef1745b950b6feeef63250a7521ae1",
"assets/assets/icons/hide.png": "c8391caf4918987143d74f8dd124cca1",
"assets/assets/icons/logo.png": "df9b616085ee77d2ad0a911f0b58381d",
"assets/assets/icons/logo_white.png": "644ef998dd5d8e8b6165ffbac38065b7",
"assets/assets/images/banner.png": "f5277fe76cf295bc84c55bf7ea78de5a",
"assets/assets/images/login_image.png": "a8d280407f1bd5c30d5f107370779c3e",
"assets/assets/images/profile_banner.png": "3e55b82be759050af57ac4e3aba0aa2b",
"assets/assets/images/splash_bg.png": "ab0d3c0b7ac37de53b0b5bf0aa138bc5",
"assets/assets/NOTICES": "3035f630ef1ca79a0898d812b4b55fef",
"assets/FontManifest.json": "3369338837d23e600f960e573c182a84",
"assets/fonts/MaterialIcons-Regular.otf": "8674ff4726cadf6afa60e4fc4d3c6673",
"assets/NOTICES": "b9eff3c6b2093ed9b47a7c289210989d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/lucide_icons/assets/lucide.ttf": "03f254a55085ec6fe9a7ae1861fda9fd",
"assets/packages/syncfusion_flutter_datagrid/assets/font/FilterIcon.ttf": "c17d858d09fb1c596ef0adbf08872086",
"assets/packages/syncfusion_flutter_datagrid/assets/font/UnsortIcon.ttf": "6d8ab59254a120b76bf53f167e809470",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "8a5a66ba426530e7d15d712cf2a61e3e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "118d012685d85c9952bf6bf116b800c9",
"/": "118d012685d85c9952bf6bf116b800c9",
"main.dart.js": "8197db2b0a88e6424b18576e83d0a072",
"manifest.json": "ce6fa1ea2ceb825a2800ad3b4f40ff57",
"version.json": "37308edc9e1861cdedfbe54d9917ba1b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
