if(!self.define){let e,n={};const s=(s,i)=>(s=new URL(s+".js",i).href,n[s]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=n,document.head.appendChild(e)}else e=s,importScripts(s),n()})).then((()=>{let e=n[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,c)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(n[a])return;let o={};const d=e=>s(e,a),r={module:{uri:a},exports:o,require:d};n[a]=Promise.all(i.map((e=>r[e]||d(e)))).then((e=>(c(...e),o)))}}define(["./workbox-6a1bf588"],(function(e){"use strict";importScripts("worker-o9WTPw98naun6dkrCbY36.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/152-292fbf1ded4794f2.js",revision:"292fbf1ded4794f2"},{url:"/_next/static/chunks/2cca2479-f7a84a0ddc7415e0.js",revision:"f7a84a0ddc7415e0"},{url:"/_next/static/chunks/349-6298b2c5df53382b.js",revision:"6298b2c5df53382b"},{url:"/_next/static/chunks/535-5ba4fd53e3097ed0.js",revision:"5ba4fd53e3097ed0"},{url:"/_next/static/chunks/82-f760c9071b863ff6.js",revision:"f760c9071b863ff6"},{url:"/_next/static/chunks/framework-bb35ede2df215429.js",revision:"bb35ede2df215429"},{url:"/_next/static/chunks/main-a1aa625c5836306d.js",revision:"a1aa625c5836306d"},{url:"/_next/static/chunks/pages/404-06ff76e4abd2cd6d.js",revision:"06ff76e4abd2cd6d"},{url:"/_next/static/chunks/pages/_app-4b80009b8cb67f2c.js",revision:"4b80009b8cb67f2c"},{url:"/_next/static/chunks/pages/_error-e4f561a102d9bb14.js",revision:"e4f561a102d9bb14"},{url:"/_next/static/chunks/pages/about-7b4ee79589988769.js",revision:"7b4ee79589988769"},{url:"/_next/static/chunks/pages/blog-6d59ba77f11dcdb6.js",revision:"6d59ba77f11dcdb6"},{url:"/_next/static/chunks/pages/blog/%5Bslug%5D-3a25b7a13bcb65f0.js",revision:"3a25b7a13bcb65f0"},{url:"/_next/static/chunks/pages/index-e909d2724e9b8ba2.js",revision:"e909d2724e9b8ba2"},{url:"/_next/static/chunks/pages/project-dd9d03bfb238dddd.js",revision:"dd9d03bfb238dddd"},{url:"/_next/static/chunks/pages/project/%5Bslug%5D-014c71e4682a9734.js",revision:"014c71e4682a9734"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-ee7e63bc15b31913.js",revision:"ee7e63bc15b31913"},{url:"/_next/static/css/16e6c2e7ea46ff6a.css",revision:"16e6c2e7ea46ff6a"},{url:"/_next/static/o9WTPw98naun6dkrCbY36/_buildManifest.js",revision:"f794e57f5c60125a29031f5033dfe7e5"},{url:"/_next/static/o9WTPw98naun6dkrCbY36/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/favicon.ico",revision:"4f3db4d1746e4ec4b432089a13fdc99b"},{url:"/firebase-messaging-sw.js",revision:"de0088eeac2b9f80bc65914092090b58"},{url:"/icons/android-icon-144x144.png",revision:"0a14de5a5a4ff3baf8b8e5fd84d50ab2"},{url:"/icons/android-icon-192x192.png",revision:"3969e23aad0617ac7dd049f048f8ef32"},{url:"/icons/android-icon-36x36.png",revision:"66d3997c24abf3594e270955b622443e"},{url:"/icons/android-icon-48x48.png",revision:"dca23a4f6164d18850cfa11b9ede5cca"},{url:"/icons/android-icon-72x72.png",revision:"f04561fa2e33b4955a052742e2d5f516"},{url:"/icons/android-icon-96x96.png",revision:"3684aff38d92dbac8b62fbbab0b24501"},{url:"/icons/apple-icon-114x114.png",revision:"6694b6d230a4c1f54d1c3c707fd7ff04"},{url:"/icons/apple-icon-120x120.png",revision:"f950116b18c0256e4b5e4bc0084cfe5c"},{url:"/icons/apple-icon-144x144.png",revision:"b05de394fdd1a51e34d3089f3c6fc357"},{url:"/icons/apple-icon-152x152.png",revision:"034601f08ee6dafd892022d570a2447c"},{url:"/icons/apple-icon-180x180.png",revision:"0a971e3fc683cd9dc43a1376f23c9c94"},{url:"/icons/apple-icon-57x57.png",revision:"15ad23067a6c289d7c42b63b31989c6f"},{url:"/icons/apple-icon-60x60.png",revision:"1847133b42336a646cdede3691edaddf"},{url:"/icons/apple-icon-72x72.png",revision:"b497cf6a78f1fac7bb447706e9ad17d7"},{url:"/icons/apple-icon-76x76.png",revision:"7fa91a4ccd2a4f5278a6c32b3f1b855e"},{url:"/icons/apple-icon-precomposed.png",revision:"006e74b14f2dd9180ef81cc64410289d"},{url:"/icons/apple-icon.png",revision:"006e74b14f2dd9180ef81cc64410289d"},{url:"/icons/favicon-16x16.png",revision:"1db922d9b4515f4efcbf834776bd1d8b"},{url:"/icons/favicon-32x32.png",revision:"d11dcd897285bc02c49f4432f64c1ad6"},{url:"/icons/favicon-512x512.png",revision:"fceb71b0d16221759098361649c86e40"},{url:"/icons/favicon-96x96.png",revision:"64960bedc8bbba715e2d18302c53621e"},{url:"/icons/icon-128x128.png",revision:"aa343d8e9a42fe86917605c01e389b4f"},{url:"/icons/icon-144x144.png",revision:"53f8763471beb4dc403d4c01c85357c4"},{url:"/icons/icon-152x152.png",revision:"d071690badb69164f1d72d2309353c45"},{url:"/icons/icon-192x192.png",revision:"e4f59bbdb8cf5d888c04c1518e20c595"},{url:"/icons/icon-284x284.png",revision:"dd652e7baa402c7ca6427eb85ed118df"},{url:"/icons/icon-48x48.png",revision:"349f5f6ecb2177074d20db20f43f0fdb"},{url:"/icons/icon-512x512.png",revision:"1aa989c47e8dd2990c82ab9a1cf6c2c3"},{url:"/icons/icon-72x72.png",revision:"b2405377d48d40a28bd885d90bcf6f35"},{url:"/icons/icon-96x96.png",revision:"7c9cb5d23ae70e8a13243addbabd2019"},{url:"/icons/ms-icon-144x144.png",revision:"b05de394fdd1a51e34d3089f3c6fc357"},{url:"/icons/ms-icon-150x150.png",revision:"9f72f005b8ce3d44d4bc6d6dd50e9651"},{url:"/icons/ms-icon-310x310.png",revision:"5dd8d55fea8add3a6cf5807771f31a07"},{url:"/icons/ms-icon-70x70.png",revision:"bd948b617acf21111679c90d0900e618"},{url:"/images/banner-og.png",revision:"c3b53487a7b458d3768395ce5f8b00b5"},{url:"/images/view-notification.png",revision:"e66d8a1ab22ab3913ed1aa12080488d5"},{url:"/manifest.json",revision:"9260a1c954b68dcf46adb13abb09e09b"},{url:"/robots.txt",revision:"dd4ba47a876a4bb44709ff83012c1d2e"},{url:"/rss.xml",revision:"8e74d286a99acfeeefdc91b668be01d1"},{url:"/sitemap.xml",revision:"7c53c5e2ef6be214f9a5037b0ac298a1"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:n,event:s,state:i})=>n&&"opaqueredirect"===n.type?new Response(n.body,{status:200,statusText:"OK",headers:n.headers}):n}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const n=e.pathname;return!n.startsWith("/api/auth/")&&!!n.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
