// /* global module */

let config = {
  'notGetBlocks': [
    'blocks-demo.html',
  ],
  'ignoredBlocks': [
    'no-js',
  ],
  'alwaysAddBlocks': [
    'modernizr',
    // 'owl-carousel',
    // 'sprite-svg',
    // 'sprite-png',
    // 'object-fit-polyfill',
  ],
  'addStyleBefore': [
    'src/scss/variables.scss',
    'src/scss/mixins.scss',
    // 'somePackage/dist/somePackage.css', // для 'node_modules/somePackage/dist/somePackage.css',
  ],
  'addStyleAfter': [
    // 'src/scss/print.scss',
  ],
  'addJsBefore': [
    // 'somePackage/dist/somePackage.js', // для 'node_modules/somePackage/dist/somePackage.js',
    // './utils/tilt.jquery.js', // for 'src/js/ustils/tilt.jquery.js'
  ],
  'addJsAfter': [
    './script.js',
  ],
  'addAssets': {
    // 'src/img/demo-*.{png,svg,jpg,jpeg}': 'img/',
    // 'src/fonts/*': 'fonts/',
    // 'src/video/*': 'video/',
    'src/favicon/*.{png,ico,svg,xml,webmanifest}': 'img/favicon',
    // 'node_modules/somePackage/images/*.{png,svg,jpg,jpeg}': 'img/',
  },
  'dir': {
    'src': 'src/',
    'build': 'build/',
    'blocks': 'src/blocks/'
  },
  'optionsGHpages': {
    'remote': 'wine-house', // options for github-pages
  }
};

module.exports = config;
