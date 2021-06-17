module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule("sass")
      .use("sass-loader")
      .loader("sass-loader")
      .options({
        sassOptions: {
          // less-loader 配置
          strictMath: true,
          noIeCompat: true,
        },
      });
  },
};
