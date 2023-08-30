'use strict';

const { Controller } = require('egg');
const jwt = require('jsonwebtoken');

class LoginController extends Controller {
  async index() {
    const { ctx } = this;
    const { username, password } = ctx.request.body; // 获取请求体中的数据
    // 使用 this.app.mysql.query 方法执行数据库查询
    const res = await this.app.mysql.get('user', { username, password });
    // 生成token
    const token = jwt.sign({username}, "lapland", { expiresIn: '24h' });
    // 判断是否查询到数据
    if (res === null) {
      ctx.body = {
        code: 1,
        msg: '用户名或密码错误',
      };
    } else {
      ctx.body = {
        code: 0,
        msg: '登录成功',
        token
      };
    }
  }
}

module.exports = LoginController;