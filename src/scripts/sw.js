import 'regenerator-runtime/runtime.js';
import { registerRoute } from 'workbox-routing/registerRoute';
import { ExpirationPlugin } from 'workbox-expiration';
import { cleanupOutdatedCaches, precacheAndRoute } from 'workbox-precaching';
import { clientsClaim, setCacheNameDetails } from 'workbox-core';
import { StaleWhileRevalidate, CacheFirst, NetworkFirst } from 'workbox-strategies';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';

clientsClaim();

setCacheNameDetails({
  prefix: 'restoloka-apps',
  precache: 'precache',
  runtime: 'runtime',
});

// eslint-disable-next-line no-underscore-dangle
precacheAndRoute(self.__WB_MANIFEST);
// eslint-disable-next-line no-underscore-dangle
self.__WB_DISABLE_DEV_LOGS = true;

registerRoute(
  /^https:\/\/restaurant-api\.dicoding\.dev\/(?:(list|detail))/,
  new NetworkFirst({
    cacheName: 'dicoding-restaurant-api-cache',
    plugins: [
      // Don't cache more than 100 items, and expire them after 30 days
      new ExpirationPlugin({
        maxAgeSeconds: 60 * 60 * 24 * 30,
        maxEntries: 100,
      }),
    ],
  }),
);

registerRoute(
  ({ url }) => url.origin === 'https://fonts.googleapis.com'
               || url.origin === 'https://fonts.gstatic.com',
  new StaleWhileRevalidate({
    cacheName: 'google-fonts',
    plugins: [
      new ExpirationPlugin({ maxEntries: 20 }),
    ],
  }),
);

registerRoute(
  // eslint-disable-next-line prefer-regex-literals
  new RegExp(
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.css',
  ),
  new CacheFirst({
    cacheName: 'my-font-awesome-css-cache',
  }),
);

registerRoute(
  ({ request }) => request.destination === 'image',
  new CacheFirst({
    cacheName: 'images',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60,
      }),
    ],
  }),
);

registerRoute(
  ({ request }) => request.destination === 'script'
                   || request.destination === 'style',
  new StaleWhileRevalidate({
    cacheName: 'asset-cache',
  }),
);

cleanupOutdatedCaches();
