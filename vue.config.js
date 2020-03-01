module.exports = {
  lintOnSave: true,
  productionSourceMap: false,
  css: {
    extract: false,
    sourceMap: false
  },
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hot: true,
    historyApiFallback: true,
    hotOnly: true
    // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy
    // proxy: 'https://api.yunlu6.com'
  }
}
