module.exports = {
  lintOnSave: false,
  publicPath: '/',
  outputDir: 'dist', // 打包目录
  productionSourceMap: false, // 生产环境是否生成SourceMap
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: '168',
    https: false,
    proxy: null // 设置代理
  },
  configureWebpack: {
    externals: { // 不打包依赖
      vue: 'Vue',
      vuex: 'Vuex',
      axios: 'axios',
      'vue-router': 'VueRouter',
      'element-ui': 'ELEMENT'
    }
  },
  chainWebpack: config => {
    // 压缩代码
    config.optimization.minimize(true)
    // 分割代码
    config.optimization.splitChunks({
      chunks: 'all'
    })
    // 用cdn方式引入
    config.externals({
      vue: 'Vue',
      vuex: 'Vuex',
      axios: 'axios',
      'vue-router': 'VueRouter',
      'element-ui': 'ELEMENT'
    })
  }
}
