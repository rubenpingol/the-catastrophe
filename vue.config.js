// vue.config.js
module.exports = {
  devServer: {
    proxy: {
      "^/api/": {
        target: "https://warm-ravine-50741.herokuapp.com",
        changeOrigin: true // so CORS doesn't bit us.
      }
    }
  }
};
