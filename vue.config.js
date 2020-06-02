// vue.config.js
module.exports = {
  devServer: {
    proxy: {
      "^/api/": {
        target: "http://catastrophe.local",
        changeOrigin: true // so CORS doesn't bit us.
      }
    }
  }
};
