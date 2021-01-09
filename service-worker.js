/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["F:/MyStudy/Hexo/blog/Ardanas.github.io/public/2020/11/03/hello-world/index.html","76d1e774e9881c026d5093e7644acc83"],["F:/MyStudy/Hexo/blog/Ardanas.github.io/public/2020/11/19/简单TLS介绍和握手的过程/index.html","09b63a351d704b3021fd6ed67f4b7f0e"],["F:/MyStudy/Hexo/blog/Ardanas.github.io/public/2020/11/22/浅析GET和POST方法的区别/index.html","42d3827a28856b55f1b67259004e1efa"],["F:/MyStudy/Hexo/blog/Ardanas.github.io/public/2020/11/24/浏览器的缓存机制/index.html","980e70f4dbb560460501b7e962ba8a21"],["F:/MyStudy/Hexo/blog/Ardanas.github.io/public/2020/11/30/浏览器存储/index.html","fd92071fc97d5ddbcf43d9ac8e85e5e6"],["F:/MyStudy/Hexo/blog/Ardanas.github.io/public/2020/12/06/JS事件循环/index.html","c7ca338592e928d91fffbc892ef8a8b8"],["F:/MyStudy/Hexo/blog/Ardanas.github.io/public/2020/12/06/JS继续学习过程/index.html","bfa3c858e754f93213bae1e7230e1435"],["F:/MyStudy/Hexo/blog/Ardanas.github.io/public/404.html","fe814f632f936515e6b8f773246a097f"],["F:/MyStudy/Hexo/blog/Ardanas.github.io/public/archives/2020/11/index.html","5b84866c7026c9ac2830c9f7ab8ca229"],["F:/MyStudy/Hexo/blog/Ardanas.github.io/public/archives/2020/12/index.html","3555e164dddf3a6835867b7f7a812494"],["F:/MyStudy/Hexo/blog/Ardanas.github.io/public/archives/2020/index.html","758768dd1c51adfddb5b0cce3fd24cca"],["F:/MyStudy/Hexo/blog/Ardanas.github.io/public/archives/index.html","1988a33233199427936c384e28ffe7ff"],["F:/MyStudy/Hexo/blog/Ardanas.github.io/public/categories/index.html","e5927e48f8fb5d3e9295fe22afb43cb6"],["F:/MyStudy/Hexo/blog/Ardanas.github.io/public/css/custom.css","35d76bdac68f4c0292016a77d95939e2"],["F:/MyStudy/Hexo/blog/Ardanas.github.io/public/css/index.css","bd2013bb94059d8aa9d4dc6cba6e95be"],["F:/MyStudy/Hexo/blog/Ardanas.github.io/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["F:/MyStudy/Hexo/blog/Ardanas.github.io/public/gallery/index.html","d1237fccce40be297fa3858394f629f3"],["F:/MyStudy/Hexo/blog/Ardanas.github.io/public/gallery/wallpaper/index.html","8fb7159ad72d969315f06a805bee9fa6"],["F:/MyStudy/Hexo/blog/Ardanas.github.io/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["F:/MyStudy/Hexo/blog/Ardanas.github.io/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["F:/MyStudy/Hexo/blog/Ardanas.github.io/public/img/avatar.jpg","a7b8d9216ea3d023be6086a4d925afc5"],["F:/MyStudy/Hexo/blog/Ardanas.github.io/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["F:/MyStudy/Hexo/blog/Ardanas.github.io/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["F:/MyStudy/Hexo/blog/Ardanas.github.io/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["F:/MyStudy/Hexo/blog/Ardanas.github.io/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["F:/MyStudy/Hexo/blog/Ardanas.github.io/public/img/top_bg.jpg","557f458a14ee6088062b0576aa5112a6"],["F:/MyStudy/Hexo/blog/Ardanas.github.io/public/index.html","43cdbdbdec50153efc4c0a6866f4fb7b"],["F:/MyStudy/Hexo/blog/Ardanas.github.io/public/js/main.js","1c7d6eb8f8b1a9e2a06c37906146eb84"],["F:/MyStudy/Hexo/blog/Ardanas.github.io/public/js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["F:/MyStudy/Hexo/blog/Ardanas.github.io/public/js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["F:/MyStudy/Hexo/blog/Ardanas.github.io/public/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["F:/MyStudy/Hexo/blog/Ardanas.github.io/public/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["F:/MyStudy/Hexo/blog/Ardanas.github.io/public/link/index.html","5b6a297127596366674526499d92e441"],["F:/MyStudy/Hexo/blog/Ardanas.github.io/public/message/index.html","683a63e1074735a9b853f9914e878d65"],["F:/MyStudy/Hexo/blog/Ardanas.github.io/public/tags/Event-Loop/index.html","d8b8cac347a7b02036c6c7aba8b88eaf"],["F:/MyStudy/Hexo/blog/Ardanas.github.io/public/tags/GET/index.html","da0ebaa786d064c358f004d856b3429d"],["F:/MyStudy/Hexo/blog/Ardanas.github.io/public/tags/HTTP/index.html","cf49521fc9811936e3e110c28c7de849"],["F:/MyStudy/Hexo/blog/Ardanas.github.io/public/tags/HTTPS/index.html","b39b9fd9ebfcd8a04f610f6c355bc429"],["F:/MyStudy/Hexo/blog/Ardanas.github.io/public/tags/Javascript/index.html","ec554bc6255c5e26623de4e339a088bf"],["F:/MyStudy/Hexo/blog/Ardanas.github.io/public/tags/POST/index.html","43ae6d168727fd8323839ee949b6d8a5"],["F:/MyStudy/Hexo/blog/Ardanas.github.io/public/tags/SSL/index.html","f0e292b75213fb9913b5359c7d9b0bb8"],["F:/MyStudy/Hexo/blog/Ardanas.github.io/public/tags/TLS/index.html","ee8ebd1380e0088e5e234a3a85c3a6ac"],["F:/MyStudy/Hexo/blog/Ardanas.github.io/public/tags/cookie/index.html","47bbcffe2d7cc27ad760d29857e59291"],["F:/MyStudy/Hexo/blog/Ardanas.github.io/public/tags/index.html","5f490de39ce8209dff0be9b0f46da9c7"],["F:/MyStudy/Hexo/blog/Ardanas.github.io/public/tags/localStorage/index.html","b9939813c035a9c40d36e39d0bd03c17"],["F:/MyStudy/Hexo/blog/Ardanas.github.io/public/tags/sessionStorage/index.html","97dd210ee5b6c54906f699a58d77ed76"],["F:/MyStudy/Hexo/blog/Ardanas.github.io/public/tags/浏览器/index.html","9337bf18c7ce643106f760e379550bc2"],["F:/MyStudy/Hexo/blog/Ardanas.github.io/public/tags/浏览器缓存/index.html","2d51576251e9aefa2cb0e02e18338f69"],["F:/MyStudy/Hexo/blog/Ardanas.github.io/public/tags/继承/index.html","58927378be36603fe701b96e2deeef49"],["F:/MyStudy/Hexo/blog/Ardanas.github.io/public/tags/缓存/index.html","08be64e660298181a442bc4c5c85bf04"],["F:/MyStudy/Hexo/blog/Ardanas.github.io/public/tags/网络协议/index.html","1b6b310a3614174ea3e2f3a1f8d2b026"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







