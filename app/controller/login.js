/*
 * @Date: 2023-10-23 19:10:34
 * @LastEditors: Carlos 2899952565@qq.com
 * @LastEditTime: 2023-10-23 19:13:53
 * @FilePath: /accounting/app/controller/login.js
 * @description: 登陆相关
 */
'use strict';

const { Controller } = require('egg');

class LoginController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hello login';
  }
}

module.exports = LoginController;