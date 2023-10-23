/*
 * @Date: 2023-10-23 18:39:21
 * @LastEditors: Carlos 2899952565@qq.com
 * @LastEditTime: 2023-10-23 19:10:43
 * @FilePath: /accounting/app/controller/home.js
 * @description: 首页接口
 */
'use strict';

const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = this.config;
  }
}

module.exports = HomeController;
