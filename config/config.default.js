'use strict';


module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1542173716424_8415';

  // add your config here
  config.middleware = [ 'gzip' ];
  config.gzip = { thresold: 1024 };
  config.mysql = {
    // 单数据库信息配置
    // client: {
    //   // host
    //   host: 'localhost',
    //   // 端口号
    //   port: '3306',
    //   // 用户名
    //   user: 'root',
    //   // 密码
    //   password: '123456',
    //   // 数据库名
    //   database: 'air',
    // },
    // // 是否加载到 app 上，默认开启
    // app: true,
    // // 是否加载到 agent 上，默认关闭
    // agent: false,
  };
  config.view = {
    mapping: {
      '.njk': 'nunjucks',
    },
    defaultExtension: '.njk',
    cache: true,
  };
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
    domainWhiteList: [ 'http://localhost:8082' ],
  };
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH，OPTIONS',
  };
  return config;
};
