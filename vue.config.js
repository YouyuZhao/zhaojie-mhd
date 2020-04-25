// 项目的配置文件
module.exports = {
  devServer: {
    proxy: {
      '/migu': {
        // 目标地址。只写域名和端口号
        target: 'http://movie.miguvideo.com',
        changeOrigin: true,
        pathRewrite: {
          '^/migu': ''
        }
      },
      '/mhd': {
        // 目标地址。只写域名和端口号
        target: 'https://mhd.zhuishushenqi.com',
        changeOrigin: true,
        pathRewrite: {
          '^/mhd': ''
        }
      }
    }
  }
}
