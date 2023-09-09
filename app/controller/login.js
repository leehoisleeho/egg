'use strict';
const {Controller} = require('egg');
const tableName = 'user'

class LoginController extends Controller {
    async index() {
        const {ctx} = this;
        const data = ctx.request.body; // 获取请求体中的数据
        const result = await ctx.service.login.index(tableName,data)
        ctx.body = result
    }
}

module.exports = LoginController;