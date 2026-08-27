'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "33f4d19151f58977ee5938a069265eda",
"/": "33f4d19151f58977ee5938a069265eda",
"version.json": "7a3c35b1442d18f9a09cacc3c2dff796",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/NOTICES": "8d913296b68c91f96872412e07d99a26",
"assets/assets/images/ca.png": "fa54a9296bc89157792d7b3da96fd6d6",
"assets/assets/images/gh.png": "fbe51d077cc119d6ba8e5380a393df10",
"assets/assets/images/ng.png": "dcbd980c24cc4d8d298848662e77f203",
"assets/assets/images/fr.png": "32b2edf693a6d96a9d00cc88672f7a56",
"assets/assets/images/kn.png": "cf0a2fe2725f89b4eb9616fd2b7bd4cd",
"assets/assets/images/li.png": "14e82a0cbc919ede5e162e3a055e6d30",
"assets/assets/images/in.png": "ced4ae997eef71d640e4002c99125ed1",
"assets/assets/images/tn.png": "68748e7a1f6944f089d3963e958bc6ed",
"assets/assets/images/cd.png": "8c58b47f84f2873a4b5c977db0e9e930",
"assets/assets/images/fo.png": "8e1a58b303dd4ac458da395f75a36178",
"assets/assets/images/fi.png": "71158cf8f7ede8ddf91e6b966b71328c",
"assets/assets/images/ma.png": "94a87f3b6a156525dd030faeecc495b0",
"assets/assets/images/de.png": "00e489625c26203ac652fed39899104e",
"assets/assets/images/np.png": "282c91f21e1948156c68dd59dcc7a5c8",
"assets/assets/images/sn.png": "8d930798814d63cc0d9a85417ef8be1a",
"assets/assets/images/fj.png": "e0298bfb141461373b0b444f274ffee4",
"assets/assets/images/ug.png": "56c046612ed24caf90a54fdadcc7c1c7",
"assets/assets/images/cn.png": "8097f5abbe93eb8f353e893b77fa58be",
"assets/assets/images/bn.png": "b1a322d25b5d8ede88cd62401aa75435",
"assets/assets/images/ad.png": "01c8833e500b6536d59c2649fe29a546",
"assets/assets/images/qa.png": "041c9a730b4a57c5189926a24ed4ed24",
"assets/assets/images/mx.png": "e9d1d26f4f77fff70c19780692fd3c72",
"assets/assets/images/my.png": "9ee140c7cc453435f97dd76b2c10c72e",
"assets/assets/images/dk.png": "7f4d13c960517f3a264a4a96ca1141bb",
"assets/assets/images/ve.png": "a2dff92cf04f7374cbbf1e51106e3277",
"assets/assets/images/pt.png": "2b453f583176a8405c5db3ace80eb99b",
"assets/assets/images/et.png": "741675124b80edf25444ca6fffef2806",
"assets/assets/images/kp.png": "5ae74c241fa42eac62063f5d39d77651",
"assets/assets/images/tz.png": "d807d22de74b7da6ee34d6e40012885e",
"assets/assets/images/ru.png": "39ccf6bdb81b6989aa3b1f0a2f0793a5",
"assets/assets/images/bb.png": "e978ace8b6de2885bd24b70c18c5518e",
"assets/assets/images/me.png": "864092d9b52809b9d0eefb4f3b028ed7",
"assets/assets/images/br.png": "bb0e4c272d25b2074e9531812660ae18",
"assets/assets/images/sd.png": "3cda454f20f49fbd3c4bb3ba6d68228d",
"assets/assets/images/dz.png": "8133603fef3019efd0377e8bb2033543",
"assets/assets/images/mz.png": "8ed00ef40ad6db229af298052dcd374f",
"assets/assets/images/us.png": "bff9fa1e3c746ba0b61821903c8f3b22",
"assets/assets/images/pr.png": "993712774ebe7e6c02570f9c8ca37afd",
"assets/assets/images/lt.png": "dd8708c5d937f2442b942690ab10b110",
"assets/assets/images/pk.png": "78952ea9d1ad420159f5220b21b17c33",
"assets/assets/images/af.png": "59f4698f686de55f1272ea981b1276e0",
"assets/assets/images/il.png": "fbef759e815d5e58522de7b32c279c08",
"assets/assets/images/be.png": "2f3cf7e69ca22a073d79c82944ccc54e",
"assets/assets/images/si.png": "d76416e3a531ac8ca929f22e161aa020",
"assets/assets/images/lv.png": "1b3402aed6420a02be2abb29cb41fd49",
"assets/assets/images/sk.png": "2f00db98884945695de5b5ab22d555bc",
"assets/assets/images/th.png": "548c982f4f51d85e1d716ee78b119743",
"assets/assets/images/do.png": "8152a0ff037aa7c6007ebf9e4ddab3da",
"assets/assets/images/ci.png": "9ccc6fbca02d7a8abe127e572b226683",
"assets/assets/images/hn.png": "564390788a79d7b198e4e9e0969f4357",
"assets/assets/images/kr.png": "e82f432f44c8c56d88321440414a0930",
"assets/assets/images/cm.png": "6c4d1b1b2503ecb7685c18de07c1fbdc",
"assets/assets/images/kz.png": "9058f52d55eb05abc27eb122fa818d27",
"assets/assets/images/kh.png": "a89a37ecc7aab7dcd1011193f7eb2642",
"assets/assets/images/cy.png": "45b6ad069ef91ba3f40940937ae237dc",
"assets/assets/images/ec.png": "9640826157b80f44958386319d1d1e61",
"assets/assets/images/cw.png": "dc0fff6fa725cc58e21beffc658f19f2",
"assets/assets/images/ro.png": "32ca23cabe73484a74609e72f46bfd05",
"assets/assets/images/kw.png": "0b6a6789ba1f85a44bca035df98771b5",
"assets/assets/images/tm.png": "91819d946133898488dc6a68fbe142e5",
"assets/assets/images/pe.png": "9a0ece95c92e9dbf8d581766a6c61bdd",
"assets/assets/images/py.png": "72aa28f750566080689c2fd1f8589dc2",
"assets/assets/images/gm.png": "ad59013add839c3e5ca6ec240585a602",
"assets/assets/images/ao.png": "50d6aa9adf86c6cba241105ac56cfb5d",
"assets/assets/images/sy.png": "dd83f269a106f2e4b5dbc45eba0c2d95",
"assets/assets/images/sv.png": "55ef0ae3baa7ec57b713574e50f999cb",
"assets/assets/images/ke.png": "3070914a9092c8975dd7ce6f65a5ab8c",
"assets/assets/images/cr.png": "93c7708dba489bb90164989c44e5b060",
"assets/assets/images/ie.png": "57b225329194abf1eb1dbdc900147b82",
"assets/assets/images/cl.png": "475883879c1e9287aa98670d2462326c",
"assets/assets/images/id.png": "05fba752d644cf6a52f06ec5ba600eb2",
"assets/assets/images/am.png": "0a6288427aefd137d985022ccb5b14c6",
"assets/assets/images/gy.png": "b78c3468b4e22f9d5347aa285ad55142",
"assets/assets/images/gr.png": "4306a7ab765e921b53751d6ebfd1974c",
"assets/assets/images/ee.png": "dc16d524f71c722643ee0e36dd9f5a5d",
"assets/assets/images/aw.png": "545f378a3782d597e3f76e632c482d18",
"assets/assets/images/pl.png": "c5f41c41720ebb989785ab6b90cbcaf2",
"assets/assets/images/ch.png": "8eb5422bd13a164e39489b34ee7e635c",
"assets/assets/images/uy.png": "b548aa4cc293a76c92536cdca505a168",
"assets/assets/images/lu.png": "d94e445c035be25475142402087441c8",
"assets/assets/images/se.png": "e75e6d26dd80babab78c69387feef55e",
"assets/assets/images/bg.png": "3dcb3953a999fd40d5d197b1410182c0",
"assets/assets/images/bd.png": "a3e941d46a92330888fa52a63cc90505",
"assets/assets/images/cz.png": "c9e640ceeadf4a6d0296657f426d9f0d",
"assets/assets/images/at.png": "093c807e044d9f75f49d5bee55a1f41c",
"assets/assets/images/eg.png": "158387aaf4d81bd13beaa4ae3c538d82",
"assets/assets/images/md.png": "10b44ba26495c50894c7f5ea246108e7",
"assets/assets/images/ba.png": "057edcef9aac21641be1a33ef802e367",
"assets/assets/images/sg.png": "efa40a0939e16636438e3ab02180ae13",
"assets/assets/images/hu.png": "ba2c25f276ad1a91f8cfd10b8022e1b2",
"assets/assets/images/eh.png": "f8b9322391a7d92dac076f6b9bf9f23c",
"assets/assets/images/bo.png": "5577cd125ce4aa07d96479aa1e22d24e",
"assets/assets/images/hk.png": "48babe70642e670266022373cd92030e",
"assets/assets/images/lb.png": "01f8f2abc65a179dbae9f51c52a81fb2",
"assets/assets/images/al.png": "2a0e025701ce3e3e8b86c00ba7b85a88",
"assets/assets/images/mo.png": "dd48ab6f1c55c3ea7ea17a03b14018cb",
"assets/assets/images/gq.png": "300cfbaebab5c9b4f9cc8e6ca96da4f1",
"assets/assets/images/tr.png": "ef78e4992013926b8d470489856550e9",
"assets/assets/images/la.png": "5068f50306b5d6b82eeeb3acadbd0313",
"assets/assets/images/ye.png": "65b5c71aec79c1de1b6bf2d9e7e4b41a",
"assets/assets/images/ph.png": "3f129e24ac2b3ab4dd8613dbf9001750",
"assets/assets/images/pa.png": "4b42a1bc09030f1bc391752d171cfd3e",
"assets/assets/images/sa.png": "004b36bda791187b09201991005e29c2",
"assets/assets/images/tj.png": "380aa6bb418e149d00ffc4f5334bccd0",
"assets/assets/images/ps.png": "e069b88d6a77824feeaeea2d09553d1b",
"assets/assets/images/is.png": "1713ebd752a300451ceb755dff8228fc",
"assets/assets/images/kg.png": "c67665172ad24c7b2e41055800044b24",
"assets/assets/images/jo.png": "cce63f8c1959df468dd0cde3ac5516c2",
"assets/assets/images/mm.png": "4bd8239a4afab97782d2c44c19fe38e7",
"assets/assets/images/jm.png": "6d744a2ebf10ae5960c2d43dc104d7fb",
"assets/assets/images/tt.png": "c28d85c9e36c17971ea3227268ee274a",
"assets/assets/images/mn.png": "24a1f93bec98ac85c6607b0c7fdd0ce1",
"assets/assets/images/co.png": "34385b60ee35e8a88cfbcd471757165d",
"assets/assets/images/ge.png": "18de7abcab4104a805bf993432474eb2",
"assets/assets/images/jp.png": "a2542be9b1833ebbdf4c906e79969457",
"assets/assets/images/za.png": "c45d37dbf816ed1e1d39f352bf1897f2",
"assets/assets/images/bh.png": "c51e0274d29cc3de82c8854be9517d94",
"assets/assets/images/az.png": "6c05d255c5eed05a4a55cae3263f8d00",
"assets/assets/images/by.png": "4dfc0686c16cd75fb32da3ca1aa1fe69",
"assets/assets/images/ir.png": "691808d2ac89123f5620c47c0eabc05b",
"assets/assets/images/ae.png": "18c6ffd37c7b2129dc961dee82e240a1",
"assets/assets/images/so.png": "b248be4702fac4112a6c04067b46f374",
"assets/assets/images/rw.png": "c1d66961aeb1da0da42feebed9f427c7",
"assets/assets/images/ua.png": "9845324e779ca23dafd4f3c705feaa33",
"assets/assets/images/ni.png": "2ac7680239c5582622acf9ff30c55698",
"assets/assets/images/au.png": "a670906d3590a21ff57d40aea5769f5b",
"assets/assets/images/it.png": "de6869d6d954e013cdc3c68c2389e1ee",
"assets/assets/images/lk.png": "cdea76bfcf741ad62da672d47534a9fd",
"assets/assets/images/hr.png": "7ceae287ebbb3cc85873eefdcc6c2f33",
"assets/assets/images/ar.png": "7b5a97a588f693d61c157fed952f8751",
"assets/assets/images/no.png": "371e9e986774a03f9ab50dbf367640f4",
"assets/assets/images/sm.png": "c76720d67cd8f5648a903d832d6b5dee",
"assets/assets/images/ly.png": "73e7acee8555c31e56e170278e751b59",
"assets/assets/images/om.png": "afe6dd7cefe22079e6ebe625c9657031",
"assets/assets/images/es.png": "74189fa01ec866d612de8acf53c305e3",
"assets/assets/images/bf.png": "029be457c3bfbee4769e6e8fe539f929",
"assets/assets/jsons/not_found.json": "8eb6f0ac6614e38cf2cb8f66627ea08b",
"assets/AssetManifest.json": "a2ccc58f8fa443c77c3ab2a62625f347",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"manifest.json": "b91d877600be2348c7c5b8e542a586f7",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"main.dart.js": "92d4480834ef1f1376fa042793521ef8",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
