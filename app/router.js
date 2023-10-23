/*
 * @Date: 2023-10-23 18:39:21
 * @LastEditors: Carlos 2899952565@qq.com
 * @LastEditTime: 2023-10-23 19:12:02
 * @FilePath: /accounting/app/router.js
 * @description: 接口路由地址
 */
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/login', controller.login.index);
};
