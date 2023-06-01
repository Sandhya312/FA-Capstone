module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    proxy:"https://fa-capstone.onrender.com",
  }
})