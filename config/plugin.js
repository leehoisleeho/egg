'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // 数据库
  mysql: {
    enable: true,
    package: 'egg-mysql',
  },
  // 跨域
  cors: {
    enable: true,
    package: 'egg-cors',
  },
  // token生成器
  jwt: {
    enable: true,
    package: 'egg-jwt',
  },
};
