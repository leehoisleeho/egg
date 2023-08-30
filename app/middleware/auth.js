module.exports = () => {
  return async function authMiddleware(ctx, next) {
    const token = ctx.headers.authorization; // 获取请求头中的 Authorization 字段
    if (!token) {
      ctx.status = 402; // 如果没有 token，返回未授权的状态码
      ctx.body = {
        code: 402,
        msg: '没有token',
      };
      return;
    }
    const jwt = require('jsonwebtoken');
    const secretKey = 'lapland';
    try {
      // 验证token是否过期
      const decoded = jwt.verify(token, secretKey);
      await next(); // 执行后续中间件或处理函数
    } catch (err) {
      ctx.status = 401; // 如果 token 验证失败，返回未授权的状态码
      ctx.body = {
        code: 401,
        msg: 'token过期',
      };
    }
  };
};
