const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  publicPath: '',
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin([
        {
          from: 'resources',
          to: './',
          ignore: [".*"]
        }
      ])
    ]
  },
  css: {
    loaderOptions: {
      // 向 CSS 相关的 loader 传递选项
      less: {
        javascriptEnabled: true
      }
    }
  }
}