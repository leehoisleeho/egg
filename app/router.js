"use strict";
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
    const {router, controller, middleware} = app;
    /**
     * 中间层
     * authMiddleware 验证token
     */
    const authMiddleware = middleware.auth(); // "auth" 是中间件的名称，这里是将中间件应用于所有路由
    /**
     * 路由
     */
    router.post("/api/login", controller.login.index); // 登录接口的路由
    router.post("/api/checkToken", controller.checkToken.index); // 验证token是否过期的路由
    router.post("/api/upload", controller.file.upload) // 上传文件
    router.delete("/api/remove", controller.file.remove) // 删除文件
    // CURD example
    router.get("/api/example/find",controller.example.find) //查找所有
    router.get("/api/example/findOne/:id", controller.example.findOne) //查找一个
    router.post("/api/example/create", controller.example.create) //创建
    router.delete("/api/example/delete/:id", controller.example.delete) //删除
    router.put("/api/example/update", controller.example.update) //更新
};
