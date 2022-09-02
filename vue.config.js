const path = require('path');
const HtmlWebpackInjectAttributesPlugin = require('html-webpack-inject-attributes-plugin');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  devServer: {
    port: 8000,
    hot: true,
    disableHostCheck: true,
  },
  css: {
    loaderOptions: {
      less: {
        globalVars: {
          'theme-color': '#1890ff',
          'font-color': '#333',
          'placeholder-color': '#d8d8d8',
          'foot-height': '48px',
        },
      },
    },
  },
  configureWebpack: {
    devtool: isProduction ? 'nosources-source-map' : 'cheap-module-eval-source-map',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@api': path.resolve(__dirname, 'src/api'),
      },
    },
    plugins: [
      new HtmlWebpackInjectAttributesPlugin({
        crossorigin: 'anonymous',
      }),
    ],
  },
  chainWebpack: (config) => {
    config.module.rule('svg').exclude.add(path.resolve('src/assets/svg-icons')).end();

    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(path.resolve('src/assets/svg-icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      });
  },
};
