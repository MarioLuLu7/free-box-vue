/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

function resolve(filePath) {
  return path.join(__dirname, filePath);
}

module.exports = {
  publicPath: '/',
  chainWebpack: (config) => {
    config.resolve.alias
      .set('packages', resolve('packages'))
      .set('comp', resolve('src/components'))
      .set('style', resolve('styles'));
  },
};
