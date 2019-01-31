const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  lintOnSave: true,
  chainWebpack: config => {
    config.resolve.alias.set('@views', resolve('src/views'));
    config.resolve.alias.set('@components', resolve('src/components'));
  }
};
