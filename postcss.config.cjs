const postcssNested = require('postcss-nested');
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [autoprefixer, postcssNested],
};
