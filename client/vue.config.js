module.exports = {
  publicPath: '/',
  devServer: {
    proxy: {
      '/': {
        target: 'https://fa-capstone.onrender.com', // Replace with your backend server URL
        changeOrigin: true
      }
    }
  }
};
