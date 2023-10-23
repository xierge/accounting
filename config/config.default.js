/*
 * @Date: 2023-10-23 18:39:21
 * @LastEditors: Carlos 2899952565@qq.com
 * @LastEditTime: 2023-10-23 18:41:20
 * @FilePath: /accounting/config/config.default.js
 * @description: 
 */
/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1698057555067_4060';

  config.appid = 'wx59b4044f95890136'

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
