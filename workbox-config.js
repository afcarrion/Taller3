module.exports = {
  globDirectory: '/',
  globPatterns: [
    '\*\*/\*.{html,js}'
  ],
  swDest: '/service-worker.js',
  clientsClaim: true,
  skipWaiting: true
};