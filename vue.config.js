const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  // baseUrl: '/', // 部署应用时的根路径(默认'/'),也可用相对路径(存在使用限制)
  // outputDir: 'dist', // 运行时生成的生产环境构建文件的目录(默认''dist''，构建之前会被清除)
  // assetsDir: 'public', //放置生成的静态资源(s、css、img、fonts)的(相对于 outputDir 的)目录(默认'')
  // indexPath: 'index.html', //指定生成的 index.html 的输出路径(相对于 outputDir)也可以是一个绝对路径。  
  lintOnSave: true,

  chainWebpack: config => {
    config.resolve.alias.set('@views', resolve('src/views'));
    config.resolve.alias.set('@graphql', resolve('src/graphql'));
    config.resolve.alias.set('@components', resolve('src/components'));
  },

  css: {
    loaderOptions: { // 向css相关的loader传递选项
      less: {
        javascriptEnabled: true
      }
    }
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        resolve('src/styles/index.less')
      ]
    }
  }
};
