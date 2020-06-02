// vue.config.js
module.exports = {
  devServer: {
    proxy: {
      "^/api/": {
        target: "https://warm-ravine-50741.herokuapp.com",
        changeOrigin: true // so CORS doesn't bit us.
      }
    }
  },
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].title = "The Catastrophe";

      return args;
    });
  }
};
