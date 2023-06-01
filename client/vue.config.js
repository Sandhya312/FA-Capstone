const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  publicPath: '/',
  devServer: {
    proxy: {
      '/': {
        target: 'https://fa-capstone.onrender.com',
        changeOrigin: true,
        secure: true
      },
    },
  },
})


