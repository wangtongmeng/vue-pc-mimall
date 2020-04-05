module.exports = {
  devServer: {
    host: 'localhost',
    port: '8080',
    proxy: {
      '/api': {
        target: 'https://order.imooc.com/',
        changeOrign: true,
        pathRewrite: {
          '/api': ''
        }
      }
    }
  }
}