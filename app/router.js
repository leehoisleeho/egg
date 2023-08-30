"use strict";
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller, middleware } = app;
  /**
   * 中间层
   * authMiddleware 验证token
   */
  const authMiddleware = middleware.auth(); // "auth" 是中间件的名称，这里是将中间件应用于所有路由
  /**
   * 路由表
   */
  router.post("/api/login", controller.login.index); // 登录接口的路由
  router.post("/api/checkToken", controller.checkToken.index); // 验证token是否过期的路由
  router.post("/api/update",controller.update.index) // 上传文件
  router.get("/api/index",controller.index.index)
};
