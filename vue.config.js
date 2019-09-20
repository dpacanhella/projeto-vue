module.exports = {
  productionSourceMap: false,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://192.168.16.125:8088/curso-vue/',
        pathRewrite: { '^/api': '' },
        changeOrigin: true,
        ws: true,
        logLevel: 'debug'
      }
    }
  },
  lintOnSave: true,
  pluginOptions: {
    webpackBundleAnalyzer: {
      openAnalyzer: false
    }
  }
}
