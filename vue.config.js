module.exports = {
  // 基本路径
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/",//默认在根路径，如果应用被部署在一个子路径上，你就需要用这个选项指定这个子路径

  devServer: {
    port: 8088, // 端口号
    proxy: {
      /* '/api': {
        target: 'https://mock.ihx.me/mock/5baf3052f7da7e07e04a5116/antd-pro', //mock API接口系统
        ws: false,
        changeOrigin: true,
        pathRewrite: {
          '/jeecg-boot': ''  //默认所有请求都加了jeecg-boot前缀，需要去掉
        }
      }, */
      '/94Frame': {
        target: 'http://localhost:8081/94Frame', // 请求本地 需要jeecg-boot后台项目
        ws: false, // 是否启用websockets
        changeOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        pathRewrite: {
          '/94Frame': '',
        },
      },
    },
  },
}
