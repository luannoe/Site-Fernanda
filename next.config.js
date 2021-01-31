const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['@maxmilhas']);
const withImages = require('next-images');

module.exports = withPlugins([withTM, withImages], {
  distDir: 'build',
  compress: true,
  devIndicators: {
    autoPrerender: false
  }
});
