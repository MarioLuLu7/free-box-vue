/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: '/',
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('../examples'),
        packages: resolve('../packages'),
        styles: resolve('../styles'),
      },
    },
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "styles/common.scss";`,
      },
    },
  },
};
