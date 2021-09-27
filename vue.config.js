module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '' : '/',
  configureWebpack: {
    resolve: {
      alias: { // 配置别名
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
        'store': '@/store'
      }
    }
  }
};
