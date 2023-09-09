'use strict;'
const Service = require('egg').Service;
const path = require("path");
const fs = require("fs");


class removeService extends Service {
    async index(fileName) {
        const {ctx} = this;
        try {
            // 删除的路径
            const unPath = path.join(__dirname,`../${fileName}`)
            console.log(unPath)
            // 使用 fs.unlinkSync 删除文件
            fs.unlinkSync(unPath);
            // 返回删除成功的响应
            return {
                error: 0,
                msg: 'ok',
            };
        } catch (error) {
            // 如果删除失败，返回错误响应
            return {
                error: 1,
                msg: `发送错误${error}`,
            };
        }
    }
}

module.exports = removeService;