const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'https://fa-capstone.onrender.com',
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
})
