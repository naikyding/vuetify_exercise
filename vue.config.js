module.exports = {
// 全域引入
  css: {
    loaderOptions: {
      scss: {
      // scss 必須要加上 ; 分號
        prependData: '@import "~@/style/variable.scss";'
      }
    }
  },
  transpileDependencies: [
    'vuetify'
  ]
}
