/* eslint-disable @typescript-eslint/no-var-requires */
const dev = require('./vue.config/dev.config');
const pro = require('./vue.config/pro.config');

const isProd = process.env.NODE_ENV === 'production';

module.exports = isProd ? pro : dev;
