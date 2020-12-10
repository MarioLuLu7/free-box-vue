/* eslint-disable @typescript-eslint/no-var-requires */
const base = require('./base.config');

module.exports = {
  ...base,
  pages: {
    index: {
      entry: 'examples/main.ts',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Index Page',
    },
  },
  devServer: {
    host: 'localhost',
    port: 8080,
    disableHostCheck: true,
  },
};
