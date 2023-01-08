const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  //这里只是用来支持内网穿透的,本地使用的时候放开注释
  /*devServer: {
    historyApiFallback: true,
    allowedHosts: "all",
    host:'0.0.0.0',
    client: {
      webSocketURL: 'ws://0.0.0.0:6103/ws',
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  },*/
  chainWebpack: config => {
    config.plugin('define').tap(definitions => {
      Object.assign(definitions[0]['process.env'], {
        NODE_HOST: '"http://47.106.135.3:10001/music"',
      });
      return definitions;
    });
  }
})
