const path = require("path");
const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  runtimeCompiler: true,

  transpileDependencies: true,

  publicPath: process.env.NODE_ENV === "production" ? "/CW1-web-app/" : "/",

  pluginOptions: {
    vuetify: {
      // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
    },
  },

  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@assets": path.resolve(__dirname, "./src/assets"),
        "@components": path.resolve(__dirname, "./src/components"),
        "@views": path.resolve(__dirname, "./src/views"),
      },
      extensions: [".js", ".vue", ".json"],
    },
  },
});
